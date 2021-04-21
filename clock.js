let myName = prompt("Lutfen Adinizi Giriniz: ")

Name = document.querySelector("#myName")

Name.innerHTML = `${Name.innerHTML} <small style="color:red">${myName}</small>`


//let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")
//let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
//Date.innerHTML = `${Date.innerHTML} <small style="color:red">${myClock}</small>`

var tarih=new Date();
	
	var gun=tarih.getDay();
	var saat=tarih.getHours();
	var dakika=tarih.getMinutes();
	var saniye=tarih.getSeconds();	


    Name = document.querySelector("#tarih")

Name.innerHTML = `${Name.innerHTML} <small>${tarih}</small>`

