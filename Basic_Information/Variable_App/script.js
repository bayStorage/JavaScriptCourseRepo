'JS'



var ad = prompt("Adınızı giriniz : ");
var ogrno = prompt("Öğrenci no giriniz : ");;
var cinsiyet = prompt("Cinsiyet giriniz : ");; //erkek : true for kadın : false
var ders = prompt("Ders adı giriniz : ");;
var not_1 = prompt("Not 1 giriniz : ");;
var not_2 = prompt("Not 2 giriniz : ");;


var ort = (Number(not_1) + Number(not_2)) / 2;

console.log(ogrno + " numaralı " + ad + "(" + cinsiyet + ")" + " isimli öğrencinin " + ders + " dersinden aldığı ortalama " + ort);
