var data_seed = {"hospitals": [{"hospital_lat": "37.7741", "hospital_long": "-122.4540", "hospital_name": "ST. MARY'S MEDICAL CENTER, SAN FRANCISCO", "avg_cost": 40000.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7741", "hospital_long": "-122.4540", "hospital_name": "ST. MARY'S MEDICAL CENTER, SAN FRANCISCO", "instance_cost": "30000.00", "id": 1}, {"procedure_name": "spine replacement", "hospital_lat": "37.7741", "hospital_long": "-122.4540", "hospital_name": "ST. MARY'S MEDICAL CENTER, SAN FRANCISCO", "instance_cost": "50000.00", "id": 2}, {"procedure_name": "spine replacement", "hospital_lat": "37.7741", "hospital_long": "-122.4540", "hospital_name": "ST. MARY'S MEDICAL CENTER, SAN FRANCISCO", "instance_cost": "40000.00", "id": 3}], "id": 1}, {"hospital_lat": "37.7823", "hospital_long": "-122.4430", "hospital_name": "KAISER FND HOSP - SAN FRANCISCO", "avg_cost": 60000.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7823", "hospital_long": "-122.4430", "hospital_name": "KAISER FND HOSP - SAN FRANCISCO", "instance_cost": "60000.00", "id": 4}], "id": 2}, {"hospital_lat": "37.7744", "hospital_long": "-122.4260", "hospital_name": "LAGUNA HONDA HOSPITAL AND REHABILITATION CENTER", "avg_cost": 38500.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7744", "hospital_long": "-122.4260", "hospital_name": "LAGUNA HONDA HOSPITAL AND REHABILITATION CENTER", "instance_cost": "35000.00", "id": 5}, {"procedure_name": "spine replacement", "hospital_lat": "37.7744", "hospital_long": "-122.4260", "hospital_name": "LAGUNA HONDA HOSPITAL AND REHABILITATION CENTER", "instance_cost": "42000.00", "id": 8}], "id": 3}, {"hospital_lat": "37.7687", "hospital_long": "-122.4350", "hospital_name": "CALIFORNIA PACIFIC MED CTR-DAVIES CAMPUS", "avg_cost": 37000.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7687", "hospital_long": "-122.4350", "hospital_name": "CALIFORNIA PACIFIC MED CTR-DAVIES CAMPUS", "instance_cost": "36000.00", "id": 6}, {"procedure_name": "spine replacement", "hospital_lat": "37.7687", "hospital_long": "-122.4350", "hospital_name": "CALIFORNIA PACIFIC MED CTR-DAVIES CAMPUS", "instance_cost": "38000.00", "id": 7}], "id": 4}, {"hospital_lat": "37.7631", "hospital_long": "-122.4580", "hospital_name": "UCSF MEDICAL CENTER", "avg_cost": 41000.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7631", "hospital_long": "-122.4580", "hospital_name": "UCSF MEDICAL CENTER", "instance_cost": "40000.00", "id": 9}, {"procedure_name": "spine replacement", "hospital_lat": "37.7631", "hospital_long": "-122.4580", "hospital_name": "UCSF MEDICAL CENTER", "instance_cost": "42000.00", "id": 10}], "id": 7}, {"hospital_lat": "37.7955", "hospital_long": "-122.4090", "hospital_name": "CHINESE HOSPITAL", "avg_cost": 25000.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7955", "hospital_long": "-122.4090", "hospital_name": "CHINESE HOSPITAL", "instance_cost": "25000.00", "id": 11}], "id": 10}, {"hospital_lat": "37.7493", "hospital_long": "-122.4570", "hospital_name": "ST. FRANCIS MEMORIAL HOSPITAL", "avg_cost": 43250.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7493", "hospital_long": "-122.4570", "hospital_name": "ST. FRANCIS MEMORIAL HOSPITAL", "instance_cost": "43000.00", "id": 15}, {"procedure_name": "spine replacement", "hospital_lat": "37.7493", "hospital_long": "-122.4570", "hospital_name": "ST. FRANCIS MEMORIAL HOSPITAL", "instance_cost": "43500.00", "id": 16}], "id": 11}, {"hospital_lat": "37.7635", "hospital_long": "-122.4570", "hospital_name": "LANGLEY PORTER PSYCHIATRIC INSTITUTE", "avg_cost": 50000.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7635", "hospital_long": "-122.4570", "hospital_name": "LANGLEY PORTER PSYCHIATRIC INSTITUTE", "instance_cost": "50000.00", "id": 13}], "id": 13}, {"hospital_lat": "37.7278", "hospital_long": "-122.4310", "hospital_name": "JEWISH HOME", "avg_cost": 95000.0, "instances": [{"procedure_name": "spine replacement", "hospital_lat": "37.7278", "hospital_long": "-122.4310", "hospital_name": "JEWISH HOME", "instance_cost": "100000.00", "id": 12}, {"procedure_name": "spine replacement", "hospital_lat": "37.7278", "hospital_long": "-122.4310", "hospital_name": "JEWISH HOME", "instance_cost": "90000.00", "id": 14}], "id": 16}]}

// #############################################################Anna######################################################
  // This example creates circles on the map, representing populations in North
  // America.
  // First, create an object containing LatLng and population for each city.
  var citymap = {
    chicago: {
      center: {lat: 41.878, lng: -87.629},
      population: 2714856
    },
    newyork: {
      center: {lat: 40.714, lng: -74.005},
      population: 8405837
    },
    losangeles: {
      center: {lat: 34.052, lng: -118.243},
      population: 3857799
    },
    vancouver: {
      center: {lat: 49.25, lng: -123.1},
      population: 603502
    }
  };

  function initMap() {
    // Create the map.
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 38.581, lng: -121.494},
      mapTypeId: 'terrain'
    });

    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.

    // need the outline color to change depending on hover
    for (var city in citymap) {

      // Add the circle for this city to the map.
      var cityCircle = new google.maps.Circle({
        // stroke color gray until hover
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        // fill color from object var
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: citymap[city].center,
        radius: Math.sqrt(citymap[city].population) * 100
      });
    }
  }
// ########################################################Jay###########################################################
