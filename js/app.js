// http://bit.ly/177Mb8J

var dataUrl = 'http://data.seattle.gov/api/views/3k2p-39jp/rows.json?jsonp=?&max_rows=25';

$.getJSON(dataUrl, function(results) {
  console.log(results.data);

  var map = L.map('map').setView([47.6097, -122.3331], 11);

  L.tileLayer('http://{s}.tile.cloudmade.com/5aabd2e38b214356942b011b42b77394/997/256/{z}/{x}/{y}.png', {
      attribution: 'attribution'
  }).addTo(map);

  $.each(results.data, function(index, value) {

    L.marker([value[21], value[20]]).addTo(map)
    .bindPopup('<h6>' + value[12] + '</h6>' + value[16] + '<br>' + value[3] );
  });

});
