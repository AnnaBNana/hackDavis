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
    zoom: 10,
    center: {lat: 37.774, lng: -122.419},
    mapTypeId: 'terrain'
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
      // Helpers
      var costs = function costs() {
        var costs = []
        for (var idx in data.hospitals) {
          costs.push(data.hospitals[idx].avg_cost)
        }
        costs.sort()
        return costs
      }
      var colorDistribution = function colorDistribution() {
        var step = data.hospitals.length/10
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
      // Actually adding the markers here
      for (var idx in data.hospitals) {

        var hospital = data.hospitals[idx]
        // Add the circle for this city to the map.
        var cityCircle = new google.maps.Circle({
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
      }
      // ******************************************************
      // Done adding Markers from AJAX
      // ADD FEATURES BELOW
      // ******************************************************
    });

}
