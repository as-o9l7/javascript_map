// JavaScript
//console.log('Hello world!');

const map = L.map('map').setView([35.651874438605645, 139.74104508181642], 15);

//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', { attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>', }).addTo(map);


//アイコン
//const whiteIcon = L.icon({
//iconUrl: 'images/ico.png',
//shadowUrl: 'images/ico_shadow.png',

// iconSize:     [40, 40], // size of the icon
//shadowSize:   [40, 40], // size of the shadow
//iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
//shadowAnchor: [20, 40],  // the same for the shadow
//popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
//});


//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
        shadowUrl: 'images/ico_shadow.png',
        iconSize: [40, 40],
        shadowSize: [40, 40],
        iconAnchor: [20, 40],
        shadowAnchor: [20, 40],
        popupAnchor: [0, -42]
    }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' }),
    blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' });
yellowIcon = new circleIcon({ iconUrl: 'images/ico_yellow.png' });
yellowIcon = new circleIcon({ iconUrl: 'images/ico_yellow.png' });


L.marker([35.67532795140784, 139.69959049166354], { icon: whiteIcon }).addTo(map).bindPopup('明治神宮');
L.marker([35.66569691823305, 139.72997947165598], { icon: pinkIcon }).addTo(map).bindPopup('東京ミッドタウン');
L.marker([35.68760225404197, 139.7726768055463], { icon: pinkIcon }).addTo(map).bindPopup('コレド室町テラス2F guāng');
L.marker([35.71451906057964, 139.79648547273817], { icon: pinkIcon }).addTo(map).bindPopup('浅草寺');
L.marker([35.660967542000385, 139.66819297638136], { icon: blueIcon }).addTo(map).bindPopup('天馬屋 下北沢店');
L.marker([35.6601179565508, 139.72948522731957], { icon: blueIcon }).addTo(map).bindPopup('六本木ヒルズ');
L.marker([35.65971067345548, 139.73148889019186], { icon: yellowIcon }).addTo(map).bindPopup('テレビ朝日');
L.marker([35.66144470618121, 139.66868247792203], { icon: yellowIcon }).addTo(map).bindPopup('本多劇場');
L.marker([35.65844444780029, 139.74508695881394], { icon: whiteIcon }).addTo(map).bindPopup('東京タワー');
L.marker([33.585466738152626, 130.3347671417574], { icon: yellowIcon }).addTo(map).bindPopup('鷲尾愛宕神社');
L.marker([35.547351921283095, 139.75644933556953], { icon: yellowIcon }).addTo(map).bindPopup('Zepp Haneda');
L.marker([35.459709601578716, 139.62598165300386], { icon: yellowIcon }).addTo(map).bindPopup('KT Zeep Yokohama');


// Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);

const circle = L.circle([35.62813581908492, 139.6759264018458], {
    color: 'hotpink', //円の輪郭線の色
    fillColor: 'hotpink', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 20000 //半径、メートルで指定
}).addTo(map);

circle.bindPopup("旅行したことのある範囲");

// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);
