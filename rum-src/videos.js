function videoTitle(videonum){
	var title = ["Feliz Navidad - Elveria and Benny, Mom and Son",
				"Solamente Una Vez - Elveria & Benny. Mom and Son",
				"Solo Gitar Klasik: WALTZ G MAYOR (Op. 8 No. 2) - Fernando Sor – oleh Benny",];
	return title[videonum-1];			
}
function videoShortTitle(videonum){
	var title = ["Feliz Navidad",
				"Solamente Una Vez",
				"Waltz F.Sor",];
	return title[videonum-1];
}

function videoCode(videonum){
	var code = ["Fpp9Luh6pyI",
				"jXbiNSUgEko",
				"ERh25d3tpB8",];
	return code[videonum-1];
}
function videoCounts(){
	var code = ["Fpp9Luh6pyI",
				"jXbiNSUgEko",
				"ERh25d3tpB8",];
	return code.length;
}
function embedding(code){
	var embedLink = "<iframe width='560' height='315' src='https://www.youtube.com/embed/"+code+"' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
	return embedLink;
}
function tanggalUpload(videonum){
	var tanggal = ["12/23/2020",
					"02/04/2021",
					"02/27/2021",];
	return tanggal[videonum-1];
}
function monthString(month){
	var monthList = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
	"Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	return monthList[month];
}
function daysTotal(mauApa, month, year){
	var leap;
	if (year%4 != 0){leap = false;}
	else if ((year%100 == 0) && (year%400 != 0)){leap = false;}
	else {leap = true;}
	var daysInMonth;
	if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
		daysInMonth = 31;
	} else if (month == 4 || month == 6 || month == 9 || month == 11){
		daysInMonth = 30;}
	else if ((month == 2) && (leap == true)){daysInMonth = 29;}
	else if ((month == 2) && (leap == false)){daysInMonth = 28;}
	if(mauApa == 1){return leap;}
	else if (mauApa == 2){return daysInMonth;}
}

function videoAge(diffYears, videonum){
	var diffMonth;
	var uploadYear = new Date(tanggalUpload(videonum));
	var fullYear = uploadYear.getFullYear();
	var month = (uploadYear.getMonth()+1);
	var daysInMonth = daysTotal(2, month, fullYear);
	var isLeap = daysTotal(1,month,fullYear);
	if (diffYears > 1){
		if (diffYears%12==0){
			diffYears = Math.floor(diffYears);
			document.write(" ("+diffYears+" tahun)");
		} else if (diffYears%12!=0){
			diffMonth = ((diffYears%12)*12)-12;
			diffYears = Math.floor(diffYears);
			diffMonth = Math.floor(diffMonth);
			if (diffMonth != 0){
				document.write(" ("+diffYears+" tahun "+diffMonth+" bulan)"); 
			} else if (diffMonth == 0){
				document.write(" ("+diffYears+" tahun)"); 
			}
			
		}
			
	} else if (diffYears < 1){
		diffMonth = diffYears*12;
		if (diffMonth%daysInMonth==0){
			document.write(" ("+diffMonth+" bulan)"); 
		} else if (diffMonth%daysInMonth!=0){
			diffDays = ((diffMonth%daysInMonth)*daysInMonth)-(daysInMonth*Math.floor(diffMonth));
			diffMonth = Math.floor(diffMonth);
			diffDays = Math.floor(diffDays);
			if (diffMonth < 1 &&(diffDays!=NaN)){
				document.write(" ("+diffDays+" hari)"); 
			} else if (diffMonth > 1 && (diffDays!=NaN || diffDays!=undefined)){
				document.write(" ("+diffMonth+" bulan "+diffDays+" hari)"); 
			} else if (diffMonth == 1 ||(diffDays == NaN || diffDays== undefined)){
				document.write(" ("+diffMonth+" bulan");
			}
			
		}
		
	}
}
function getTodayDate(mauApa){
	var today = new Date();
	var date = today.getDate();
	var month = today.getMonth();
	var monthstring = monthString(month);
	var year = today.getFullYear();
	if (mauApa == 1){return date;}
	else if (mauApa == 2){return month;}
	else if (mauApa == 3){return monthstring;}
	else if (mauApa == 4){return year;}

}
