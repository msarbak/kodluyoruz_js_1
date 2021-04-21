let myName = prompt("Lutfen Adinizi Giriniz: ")

Name = document.querySelector("#myName")

Name.innerHTML = `${Name.innerHTML} <small style="color:red">${myName}</small>`




function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	var d = today.getDay();

	switch(d) {
		case 0: d="PAZAR";
		break;
		case 1: d="PAZARTESİ";
		break;
		case 2: d="SALI";
		break;
		case 3: d="ÇARŞAMBA";
		break;
		case 4: d="PERŞEMBE";
		break;
		case 5: d="CUMA";
		break;
		case 6: d="CUMARTESİ";
	}

	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("myClock").innerHTML = h+ ":" + m + ":" + s + " | " +d;
	t = setTimeout(function(){ startTime() }, 500);
  }
  
  function checkTime(i) {
	if (i<10) {
	  i = "0" + i;
	}
	return i;
  }	
  
  startTime();