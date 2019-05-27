]
// define
var MyComponent = Vue.extend({
  props: ["dataMassive"],
  template: '<div>{{ dataMassive }}</div>',
  data: {
    dataMassive: 'ef'
  },
  beforeCreate() {
    console.log('Получение данных из базы');



    console.log('Начало отрисовки карты');
				var map = L.map('map').setView([56.326944, 44.0075], 12);
				//Добавляем на нашу карту слой OpenStreetMap
				L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				    attribution: '&copy; <a rel="nofollow" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				}).addTo(map);
				var markers = new L.MarkerClusterGroup();
				for (var i = 0; i < addressPoints.length; i++) {
					var a = addressPoints[i];
					var title = a[2];
					var marker = new L.Marker(new L.LatLng(a[0], a[1]), { title: title });
					marker.bindPopup(title);
					markers.addLayer(marker);
				}
		 
				map.addLayer(markers);
  }
})
// register
Vue.component('my-component', MyComponent)
// create a root instance
new Vue({
  el: '#example'
});