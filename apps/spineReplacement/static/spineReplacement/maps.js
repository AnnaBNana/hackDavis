var data_seed = {"hospitals": [{"hospital_lat": "37.7741", "hospital_long": "-122.4540", "hospital_name": "ST. MARY'S MEDICAL CENTER, SAN FRANCISCO", "avg_cost": 40000.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7741", "hospital_long": "-122.4540", "hospital_name": "ST. MARY'S MEDICAL CENTER, SAN FRANCISCO", "instance_cost": "30000.00", "id": 1}, {"procedure_name": "spine replacement", "hospital_lat": "37.7741", "hospital_long": "-122.4540", "hospital_name": "ST. MARY'S MEDICAL CENTER, SAN FRANCISCO", "instance_cost": "50000.00", "id": 2}, {"procedure_name": "spine replacement", "hospital_lat": "37.7741", "hospital_long": "-122.4540", "hospital_name": "ST. MARY'S MEDICAL CENTER, SAN FRANCISCO", "instance_cost": "40000.00", "id": 3}], "id": 1}, {"hospital_lat": "37.7823", "hospital_long": "-122.4430", "hospital_name": "KAISER FND HOSP - SAN FRANCISCO", "avg_cost": 60000.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7823", "hospital_long": "-122.4430", "hospital_name": "KAISER FND HOSP - SAN FRANCISCO", "instance_cost": "60000.00", "id": 4}], "id": 2}, {"hospital_lat": "37.7744", "hospital_long": "-122.4260", "hospital_name": "LAGUNA HONDA HOSPITAL AND REHABILITATION CENTER", "avg_cost": 38500.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7744", "hospital_long": "-122.4260", "hospital_name": "LAGUNA HONDA HOSPITAL AND REHABILITATION CENTER", "instance_cost": "35000.00", "id": 5}, {"procedure_name": "spine replacement", "hospital_lat": "37.7744", "hospital_long": "-122.4260", "hospital_name": "LAGUNA HONDA HOSPITAL AND REHABILITATION CENTER", "instance_cost": "42000.00", "id": 8}], "id": 3}, {"hospital_lat": "37.7687", "hospital_long": "-122.4350", "hospital_name": "CALIFORNIA PACIFIC MED CTR-DAVIES CAMPUS", "avg_cost": 37000.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7687", "hospital_long": "-122.4350", "hospital_name": "CALIFORNIA PACIFIC MED CTR-DAVIES CAMPUS", "instance_cost": "36000.00", "id": 6}, {"procedure_name": "spine replacement", "hospital_lat": "37.7687", "hospital_long": "-122.4350", "hospital_name": "CALIFORNIA PACIFIC MED CTR-DAVIES CAMPUS", "instance_cost": "38000.00", "id": 7}], "id": 4}, {"hospital_lat": "37.7631", "hospital_long": "-122.4580", "hospital_name": "UCSF MEDICAL CENTER", "avg_cost": 41000.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7631", "hospital_long": "-122.4580", "hospital_name": "UCSF MEDICAL CENTER", "instance_cost": "40000.00", "id": 9}, {"procedure_name": "spine replacement", "hospital_lat": "37.7631", "hospital_long": "-122.4580", "hospital_name": "UCSF MEDICAL CENTER", "instance_cost": "42000.00", "id": 10}], "id": 7}, {"hospital_lat": "37.7955", "hospital_long": "-122.4090", "hospital_name": "CHINESE HOSPITAL", "avg_cost": 25000.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7955", "hospital_long": "-122.4090", "hospital_name": "CHINESE HOSPITAL", "instance_cost": "25000.00", "id": 11}], "id": 10}, {"hospital_lat": "37.7493", "hospital_long": "-122.4570", "hospital_name": "ST. FRANCIS MEMORIAL HOSPITAL", "avg_cost": 43250.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7493", "hospital_long": "-122.4570", "hospital_name": "ST. FRANCIS MEMORIAL HOSPITAL", "instance_cost": "43000.00", "id": 15}, {"procedure_name": "spine replacement", "hospital_lat": "37.7493", "hospital_long": "-122.4570", "hospital_name": "ST. FRANCIS MEMORIAL HOSPITAL", "instance_cost": "43500.00", "id": 16}], "id": 11}, {"hospital_lat": "37.7635", "hospital_long": "-122.4570", "hospital_name": "LANGLEY PORTER PSYCHIATRIC INSTITUTE", "avg_cost": 50000.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7635", "hospital_long": "-122.4570", "hospital_name": "LANGLEY PORTER PSYCHIATRIC INSTITUTE", "instance_cost": "50000.00", "id": 13}], "id": 13}, {"hospital_lat": "37.7278", "hospital_long": "-122.4310", "hospital_name": "JEWISH HOME", "avg_cost": 95000.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7278", "hospital_long": "-122.4310", "hospital_name": "JEWISH HOME", "instance_cost": "100000.00", "id": 12}, {"procedure_name": "spine replacement", "hospital_lat": "37.7278", "hospital_long": "-122.4310", "hospital_name": "JEWISH HOME", "instance_cost": "90000.00", "id": 14}], "id": 16}]}

// #############################################################Anna######################################################
  // This example creates circles on the map, representing populations in North
  // America.
  // First, create an object containing LatLng and population for each city.
var colors = ['#4CBF00', '#5BAF00', '#6AA000', '#799000', '#898100', '#987200', '#A76200', '#B75300', '#C64300','#E52500']

  function initMap() {
    // Create the map.
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 37.774, lng: -122.419},
      mapTypeId: 'terrain'
    });
    colorMap = colorDistribution()

    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.

    // need the outline color to change depending on hover
    for (var idx in data_seed.hospitals) {

      var hospital = data_seed.hospitals[idx]
      // Add the circle for this city to the map.
      var cityCircle = new google.maps.Circle({
        // stroke color gray until hover
        strokeColor: colorMap[hospital.avg_cost],
        strokeOpacity: 0.8,
        strokeWeight: 1,
        // fill color from object var
        fillColor: colorMap[hospital.avg_cost],
        fillOpacity: 0.5,
        map: map,
        center: {lat: parseFloat(hospital["hospital_lat"]), lng: parseFloat(hospital["hospital_long"])},
        radius: Math.sqrt(hospital.instances.length * 10) * 100
      });
    }
  }
// ########################################################Jay###########################################################


function costs() {
  var costs = []
  for (var idx in data_seed.hospitals) {
    costs.push(data_seed.hospitals[idx].avg_cost)
  }
  costs.sort()
  return costs
}

function colorDistribution() {
  var step = data_seed.hospitals.length/10
  var colorMap = {}
  var costArr = costs()
  var current = step
  for (var idx in costArr) {
    colorMap[costArr[idx]] = colors[Math.floor(current)]
    current += step
  }
  return colorMap
}
