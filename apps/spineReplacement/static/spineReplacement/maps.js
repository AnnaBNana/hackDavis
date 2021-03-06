// Helpers
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

function initMap() {
  // Constants for the map
  var colors = ['#4CBF00', '#5BAF00', '#6AA000', '#799000', '#898100', '#987200', '#A76200', '#B75300', '#C64300','#E52500']
  // Create the map.

  bubble_map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 37.774, lng: -122.419},
    styles: [
          {
              "featureType": "all",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#aadd55"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#ffc107"
                  }
              ]
          },

          {
              "featureType": "road.highway",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#03a9f4"
                  }
              ]
          }
      ]
  });
  // Get the procedure and make ajax request
  var procedure = getUrlParameter('procedure').replace('+', ' ')
  console.log(procedure)
  $.ajax({
    url: "/hospital_details",
    method: "GET",
    data: {procedure: procedure}
  })
    .done(function(data) {
      // console.log(data)
      // Helpers
      // console.log(data);
      var costs = function costs() {
        var costs = []
        for (var idx in data.hospitals) {
          costs.push(data.hospitals[idx].avg_cost)
        }
        costs.sort()
        return costs
      }
      var colorDistribution = function colorDistribution() {
        var step = 10/data.hospitals.length
        var colorMap = {}
        var costArr = costs()
        var current = step
        for (var idx in costArr) {
          colorMap[costArr[idx]] = colors[Math.floor(current)]
          current += step
        }
        colorMap[costArr[costArr.length-1]] = colors[colors.length-1]
        return colorMap
      }
      colorMap = colorDistribution()
      data.hospitals.sort(function(a,b){
        return a.avg_cost - b.avg_cost;
      });
      // Actually adding the markers here
      var circles = {}
      for (var idx in data.hospitals) {

        var hospital = data.hospitals[idx]

        // Add the circle for this city to the map.
        $('#instances').append("\
          <div id=" + hospital.id + " class='col-md-10 col-md-offset-2 instance'>\
            <div class='col-md-5'>\
              <p><span class='bold'>Procedure:</span> " + hospital.instances[0].procedure_name + "</p>\
              <p><span class='bold'>Hospital:</span> " + hospital.hospital_name + "</p>\
            </div>\
            <div class='col-md-1 col-md-offset-5 cost'>\
              <p class='bold'> $" + hospital.avg_cost.toFixed(2) + "</p>\
            </div>\
          </div>"
        );

        var all_ids = []
        $('#' + hospital.id).click(function(){
          var desiredid = $(this).attr('id');
          var instances;
          var hospital_to_display;
          // console.log("this is the all id's array", all_ids);
          // $('#' + hospital.id).removeClass('active focus');
          var in_array = inArray(all_ids, parseInt(desiredid));
          if($(this).hasClass('focus')) {
            removeFromArray(all_ids, parseInt(desiredid));
          }
          else if (!$(this).hasClass('focus') && !in_array) {
            all_ids.push(parseInt(desiredid));
          }
          // console.log(all_ids);
          if (all_ids.length == 1){
            $(".large-button").html('Show data for one hospital').show();
          }
          else if (all_ids.length > 1) {
            $(".large-button").html('Show data for ' + all_ids.length + ' hospitals');
          }
          else if (all_ids.length == 0) {
            $(".large-button").hide();
          }
          function removeFromArray(arr,num){
            var pos = arr.indexOf(num);
            if (~pos){
              arr.splice(pos,1);
            }
          }
          function inArray(arr,item){
            for (i in arr) {
              if (arr[i] == item){
                return true;
              }
            }
            return false;
          }
          $(this).toggleClass('focus');
          for(var i=0; i<data.hospitals.length; i++){
            if(data.hospitals[i].id == desiredid) {
              console.log("examine instance", data.hospitals[i].id)
              instances = data.hospitals[i].instances
              hospital_to_display = data.hospitals[i].hospital_name
              // console.log("got the name", data.hospitals[i].hospital_name)
            }
          }
          var instanceDictionary = {};
          var hospitalNames = [];
          var min = 500000000000;
          var max = 0;
          console.log("all ids", all_ids);
          for (var a=0; a<all_ids.length; a++){
            for(var b=0; b<data.hospitals.length; b++){
              if(all_ids[a] == data.hospitals[b].id){
                hospitalNames.push(data.hospitals[b].hospital_name);
                instanceDictionary[data.hospitals[b].hospital_name] = data.hospitals[b].instances;
                for(var c=0; c<data.hospitals[b].instances.length; c++) {
                  var parsed = parseFloat(data.hospitals[b].instances[c].instance_cost);
                  if(parsed > max){
                    max = parsed;
                  }
                  if(parsed < min){
                    min = parsed;
                  }

                }
              }
            }
          }
          console.log("Got the instanceDictionary", instanceDictionary);
          console.log("Got the max and min", max, min);
          console.log("Hospital names", hospitalNames);
          var mycats = [];
          var hospitalDiff = max - min;
          var increment = Math.floor(hospitalDiff / 10);
          console.log("Got the increment", increment);
          for(var d=0; d<10; d++){
            mycats.push(min)
            min = min + increment
          }
          console.log("got the cats", mycats);
          var valuesDictionary = {};
          var seriesArray = [];
          for(var m=0; m<all_ids.length; m++){
            valuesDictionary[hospitalNames[m]] = [0,0,0,0,0,0,0,0,0,0];
          }
          for(var x=0; x<hospitalNames.length; x++){
            var myvalues = [0,0,0,0,0,0,0,0,0,0];
            var array_to_study = instanceDictionary[hospitalNames[x]];
            for(var k=0; k<array_to_study.length; k++){
              var added = false;
              for(var n=0; n<mycats.length-1; n++){
                var parsed = parseFloat(array_to_study[k].instance_cost)
                if(parsed >= mycats[n] && parsed < mycats[n+1]){
                  myvalues[n] += 1;
                  added = true;
                  break;
                }
              }
              if(added == false){
                myvalues[n] += 1;
              }
            }
            var catsToDisplay = [];
            for(var d=0; d<mycats.length; d++){
              catsToDisplay.push(String(mycats[d]) + " - " + String(mycats[d] + increment));
            }
            console.log("got the cats to display", catsToDisplay);
            seriesArray.push({"name":hospitalNames[x], "data": myvalues});
            valuesDictionary[hospitalNames[x]] = myvalues;

          }
          console.log("MY VALUES", myvalues);
          console.log("GOT THE SERIES ARRAY", seriesArray);
          $(function () {
              Highcharts.chart('highch', {
                  chart: {
                      type: 'column'
                  },
                  title: {
                      text: "Spine replacements at selected hospitals"
                  },

                  xAxis: {
                      categories: catsToDisplay,
                      crosshair: true,
                      title: {
                          text: 'Cost in dollars (USD)'
                      }
                  },
                  yAxis: {
                      min: 0,
                      title: {
                          text: 'Number of procedures completed'
                      }
                  },
                  tooltip: {
                      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                      footerFormat: '</table>',
                      shared: true,
                      useHTML: true
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0
                      }
                  },
                  series: seriesArray
              });
          });
          var hospitalMax = instances[0].instance_cost
          var hospitalMin = instances[0].instance_cost
          var mycats = [];
          for(var i=0; i<instances.length; i++){
            if (instances[i].instance_cost > hospitalMax) {
              hospitalMax = instances[i].instance_cost
            }
            if(instances[i].instance_cost < hospitalMin) {
              hospitalMin = parseInt(instances[i].instance_cost)
            }
          }
          // console.log("hospital Mx", hospitalMax, "hospital min", hospitalMin)
          var hospitalDiff = parseInt(hospitalMax) - parseInt(hospitalMin);
          //
          var increment = Math.floor(hospitalDiff/10);
          if(increment < 100){
            increment = 100;
          }
          // console.log("increment", increment)
          for(var j=0; j<10; j++){
            mycats.push(parseInt(hospitalMin))
            hospitalMin = parseInt(hospitalMin) + parseInt(increment)
          }
          // console.log(mycats)
          var myvalues = [0,0,0,0,0,0,0,0,0,0];
          for(var k=0; k<instances.length; k++){
            var added = false
            for(var m=0; m<mycats.length-1; m++){
              var parsed = parseFloat(instances[k].instance_cost)

              if(parsed >= mycats[m] && parsed < mycats[m+1]){
                myvalues[m] += 1;
                added = true
                break;
              }

            }
            if(added == false){
              // console.log("going here", m)
                myvalues[m] += 1;
            }

          }
          // console.log(myvalues)

        });
        circles[hospital.id] = new google.maps.Circle({
          // stroke color gray until hover
          strokeColor: colorMap[hospital.avg_cost],
          strokeOpacity: 0.8,
          strokeWeight: 1,
          // fill color from object var
          fillColor: colorMap[hospital.avg_cost],
          fillOpacity: 0.5,
          map: bubble_map,
          center: {lat: parseFloat(hospital["hospital_lat"]), lng: parseFloat(hospital["hospital_long"])},
          radius: Math.sqrt(hospital.instances.length * 10) * 100
        });
        google.maps.event.addDomListener(document.getElementById(hospital.id), 'mouseover', function() {
          circles[this.id].setOptions({fillOpacity : 1, strokeOpacity: 1})
        })
        google.maps.event.addDomListener(document.getElementById(hospital.id), 'mouseout', function() {
          circles[this.id].setOptions({fillOpacity : 0.5, strokeOpacity: 0.8})
        });
      }
      console.log(circles)
      // ******************************************************
      // Done adding Markers from AJAX
      // ADD FEATURES BELOW
      // ******************************************************
    });

}
