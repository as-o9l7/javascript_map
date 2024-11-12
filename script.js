// JavaScript
//console.log('Hello world!');

const map = L.map('map').setView([35.651874438605645, 139.74104508181642], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


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
L.marker([35.71451906057964, 139.79648547273817], { icon: pinkIcon }).addTo(map).bindPopup('浅草寺');  
L.marker([35.6601179565508, 139.72948522731957], { icon: blueIcon }).addTo(map).bindPopup('六本木ヒルズ'); 
L.marker([35.65971067345548, 139.73148889019186], { icon: yellowIcon }).addTo(map).bindPopup('テレビ朝日'); 
L.marker([35.66144470618121, 139.66868247792203], { icon: yellowIcon }).addTo(map).bindPopup('本多劇場'); 
L.marker([35.65844444780029, 139.74508695881394], { icon: whiteIcon }).addTo(map).bindPopup('東京タワー');