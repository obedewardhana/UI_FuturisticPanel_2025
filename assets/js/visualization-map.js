(function ($) {
  "use strict";

  /* ---------- CREATE A MAP ----------- */

  /* add layer */

  // if ($('.map').length) {

  //   var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
  //   '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  //   'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //   mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29iYXBldGEiLCJhIjoiY2theHA2dnZvMGFheDJxb2Z1ZndrNmx4dSJ9.-UQVpNKVgLmjW1yW37T7ag';

  //   /* content popup */

  //   var title = "<h4>Title</h4>";
  //   var list = "<ul class''><li>lorem</li><li>lorem</li><li>lorem</li><li>lorem</li></ul>";
  //   var image = "<img src='https://cdn.pixabay.com/photo/2017/01/06/23/03/sunrise-1959227_960_720.jpg' alt='image'/>";
  //   var video = "<a class='fancybox-video preview-video' href='https://www.youtube.com/watch?v=BlGHLlG8WkE' rel=video' data-fancybox='https://www.youtube.com/watch?v=BlGHLlG8WkE' data-caption='Lorem ipsum dolor sit amet, consectetur adipisicing elit'><img class='img-fluid' src='https://i.ytimg.com/vi/BlGHLlG8WkE/maxresdefault.jpg' alt=''/></a>";
  //   var content1 = "<div class='leaflet-content-box'><div class='leaflet-content-text'>"+title+"</div><div class='leaflet-content-image'>"+video+"</div></div>";
  //   var content2 = "<div class='leaflet-content-box'><div class='leaflet-content-text'>"+title+"</div><div class='leaflet-content-image'>"+image+"</div></div>";
  //   var content3 = "<div class='leaflet-content-box'><div class='leaflet-content-text'>"+title+""+list+"</div></div>";

  //   var customOptions =
  //       {
  //       'className' : 'popupCustom'
  //       }

  //   /* multipe marker */
  //   var cities = L.layerGroup();

  //   var city1 = L.marker([-7.7380066, 110.3800078,15]).bindPopup(content1,customOptions).addTo(cities),
  //       city2 = L.marker([-7.7341783, 110.3754673,17]).bindPopup(content2,customOptions).addTo(cities),
  //       city3 = L.marker([-7.7337638, 110.3817063,17]).bindPopup(content3,customOptions).addTo(cities);

  //   /* custom layers */
  //   var streets   = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
  //       satellite = L.tileLayer(mbUrl, {id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
  //       grayscale = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

  //   var peta = L.map('peta', {
  //       center: [-7.7337638, 110.3817063,17],
  //       zoom: 16,
  //       layers: [streets, cities]
  //   });

  //   var baseLayers = {
  //       "Streets": streets,
  //       "Satellite": satellite,
  //       "Grayscale": grayscale
  //   };

  //   var overlays = {
  //       "Cities": cities
  //   };

  //   /* add input controls */
  //   L.control.layers(baseLayers, overlays).addTo(peta);

  //   /* Map with single dinamis point marker*/

  //   /* membuat map */
  //   var mymap = L.map('mymap').setView([-7.563056, 110.801781], 13);

  //   /* layer untuk atribusi*/
  //   L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib2JlZGV3YXJkaGFuYSIsImEiOiJja2F4bzY1OHgwODF3MnFvMnNyaDNwOHNlIn0.6IGuXfVJfp5dietdtefs2g', {
  //       attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  //       maxZoom: 18
  //   }).addTo(mymap);

  //   /* custom gambar icon */

  //   var mapicon = L.icon({
  //       iconUrl: 'assets/images/dummy/pin.png',
  //       iconSize: [28,40],
  //       iconAnchor:   [28, 40],
  //       popupAnchor:  [-15, -40]
  //   });

  //   /*  tempat marker baru untuk mereplace marker poin*/
  //   var newMarker = {};

  //   /* marker dinamis yang bisa berpindah dan mengambil longitude dan latitude*/
  //   mymap.on('click',function(e){
  //       var lat = e.latlng.lat;
  //       var lon = e.latlng.lng;

  //       /* content popup */

  //       var title = "<h4>Title</h4>";
  //       var newlocation = "<p>Latitude : "+lat+"</p><p>Longitude : "+lon+"</p>";
  //       var image = "<img src='https://cdn.pixabay.com/photo/2017/01/06/23/03/sunrise-1959227_960_720.jpg' alt='image'/>";
  //       var video = "<a class='fancybox-video preview-video' href='https://www.youtube.com/watch?v=BlGHLlG8WkE' rel=video' data-fancybox='https://www.youtube.com/watch?v=BlGHLlG8WkE' data-caption='Lorem ipsum dolor sit amet, consectetur adipisicing elit'><img class='img-fluid' src='https://i.ytimg.com/vi/BlGHLlG8WkE/maxresdefault.jpg' alt=''/></a>";
  //       var content = "<div class='leaflet-content-box'><div class='leaflet-content-text'>"+title+""+newlocation+"</div><div class='leaflet-content-image'>"+video+"</div></div>";

  //       /* menambah custom class */

  //       var customOptions =
  //       {
  //       'className' : 'popupCustom'
  //       }

  //       /* automasi menghapus titik marker setelah klik */

  //       if (newMarker != undefined) {
  //           mymap.removeLayer(newMarker);
  //       };

  //       /* menampilkan seluruh konten ke dalam marker baru dan ditampilkan ke map*/

  //        newMarker = L.marker([lat,lon],{icon: mapicon}).bindPopup(content,customOptions).addTo(mymap);
  //   });

  //   }

  var mymap = L.map("mymap").setView(
    [-7.951796923838751, 110.99281311035158],
    10
  );

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib2JlZGV3YXJkaGFuYSIsImEiOiJja2F4bzY1OHgwODF3MnFvMnNyaDNwOHNlIn0.6IGuXfVJfp5dietdtefs2g",
    {
    //   attribution:
    //     'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
    }
  ).addTo(mymap);

  //   Format Popup

  var mapicon = L.icon({
    iconUrl: "assets/images/pin.png",
    iconSize: [28, 40],
    iconAnchor: [28, 40],
    popupAnchor: [-15, -40],
  });

  var customOptions = {
    className: "popupCustom",
  };

  var kk = "<h4>NO KK : 33128812381214912498</h4>";
  var alm = "<h4>Alamat </h4>";
  var jkk = "<h4>Jumlah KK </h4>";
  var kepala = "<h4>Kepala Keluarga </h4>";
  var jjw = "<h4>Jumlah Jiwa </h4>";
  var button = "<a href='' class='btn btn-sm btn-primary text-white text-right'>Detail</a>";
  var newlocation =
    "<p>Latitude : -7.967171988965944</p><p>Longitude : 111.00062370300294</p>";
  var image =
    "<img src='https://cdn.pixabay.com/photo/2017/01/06/23/03/sunrise-1959227_960_720.jpg' alt='image' />";
  var video =
    "<a class='fancybox-video preview-video' href='https://www.youtube.com/watch?v=BlGHLlG8WkE' rel=video' data-fancybox='https://www.youtube.com/watch?v=BlGHLlG8WkE' data-caption='Lorem ipsum dolor sit amet, consectetur adipisicing elit'><img class='img-fluid' src='https://i.ytimg.com/vi/BlGHLlG8WkE/maxresdefault.jpg' alt=''/></a>";
  var content =
    "<div class='leaflet-content-box'>" +    
    "<div class='leaflet-content-image'>" +
    image + "</div>"+
    "<div class='leaflet-content-text'>"+ kk + "</div>"+
    "<div class='leaflet-content-text'>"+ alm + "<p>Jl. Anggrek No.4 Kec. Pracimantoro, Kab. Wonogiri</p></div>"+
    "<div class='leaflet-content-text'>"+ jkk + "<p>1</p></div>"+
    "<div class='leaflet-content-text'>"+ kepala + "<p>Pak Dami Sumarno</p></div>"+
    "<div class='leaflet-content-text'>"+ jjw + "<p>5</p></div>"+
    "<div class='leaflet-content-button'>"+ button + "</div>"+
    "</div>";

  /*  tempat marker baru untuk mereplace marker poin*/
  var newMarker = {};

  newMarker = L.marker(["-7.967171988965944", "111.00062370300294"], {
    icon: mapicon,
  })
    .bindPopup(content, customOptions)
    .addTo(mymap);

  // Function get coordinates

  //   mymap.on("click", function (e) {
  //     var lat = e.latlng.lat;
  //     var lon = e.latlng.lng;
  //     console.log(lat,lon);
  //   });

  //   mymap.on("dragend", function (e) {
  //     console.log(mymap.getCenter());
  //   });

  // Format Geojson


  var loc = location + "/assets/js/wonogiri.geojson";

  var geojson = new L.GeoJSON.AJAX(loc, { style: {color: '#ec5b7a', weight: 3} });
  geojson.on("data:loaded", function () {
    geojson.addTo(mymap);
  });
})(jQuery);
