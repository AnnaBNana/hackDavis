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
        return colorMap
      }
      colorMap = colorDistribution()
      data.hospitals.sort(function(a,b){
        return a.avg_cost - b.avg_cost;
      });
      console.log(data.hospitals);
      // Actually adding the markers here
      var circles = {}
      for (var idx in data.hospitals) {

        var hospital = data.hospitals[idx]
        console.log(hospital);
        // Add the circle for this city to the map.
        $('#instances').append("\
          <div id=" + hospital.id + " class='col-md-10 col-md-offset-2 instance' data-toggle='modal' data-target='.bs-example-modal-lg'>\
            <div class='col-md-5'>\
              <p><span class='bold'>Procedure:</span> " + hospital.instances[0].procedure_name + "</p>\
              <p><span class='bold'>Hospital:</span> " + hospital.hospital_name + "</p>\
            </div>\
            <div class='col-md-1 col-md-offset-5 cost'>\
              <p class='bold'> $" + hospital.avg_cost.toFixed(2) + "</p>\
            </div>\
          </div>"
        );

        $('#' + hospital.id).click(function(){
          var desiredid = $(this).attr('id');
          var instances;
          for(var i=0; i<data.hospitals.length; i++){
            if(data.hospitals[i].id == desiredid) {
              instances = data.hospitals[i].instances
            }
          }
          console.log("found instances", instances)
          // var hospitalMax = instances[0].instance_cost
          // var hospitalMin = instances[0].instance_cost
          // var mycats = [];
          // for(var i=0; i<instances.length; i++){
          //   if (instances[i].instance_cost > hospitalMax) {
          //     hospitalMax = instances[i].instance_cost
          //   }
          //   if(instances[i].instance_cost < hospitalMin) {
          //     hospitalMin = parseInt(instances[i].instance_cost)
          //   }
          //
          // }
          // console.log("hospital Mx", hospitalMax)
          // var hospitalDiff = parseInt(hospitalMax) - parseInt(hospitalMin);
          //
          // var increment = Math.floor(hospitalDiff/10);
          // console.log("increment", increment)



        })
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
