function daysTotal(mauApa,month,year){
	var leap,daysInMonth;
	if(year%4!=0){leap=false;}
	else if((year%100==0)&&(year%400!=0)){leap=false;}
	else{leap=true;}
	if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){daysInMonth=31;}
	else if(month==4||month==6||month==9||month==11){daysInMonth=30;}
	else if((month==2)&&(leap==true)){daysInMonth=29;}
	else if((month==2)&&(leap==false)){daysInMonth=28;}
	if(mauApa==1){return leap;}
	else if(mauApa==2){return daysInMonth;}
}
function tH(column,month,year){
	var header=["Video&darr;","Tanggal&rarr;"];
	var leap=daysTotal(1,month,year);
	var daysInMonth=daysTotal(2,month,year)+1;
	for(var i=1;i<daysInMonth;i++){header.push(i+"/"+month);}
	if(column==0){return header.length;}
	else{return header[column-1];}
}
function videoTitles(videonum){
	var videos=[/*1*/"Feliz Navidad",
		/*2*/"Solamente",
		/*3*/"Solo Gitar"];
	if(videonum==0){return videos.length;}
	else{return videos[videonum-1];}
}
function videoLinks(videonum){
	var links=["rum-vids/feliz-navidad.html","rum-vids/solamente-una-vez.html","rum-vids/solo-gitar.html"];
	return links[videonum-1];
}
function monthSelector(month){
	var months=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
	if(month==0){return months.length;}
	else{return months[month-1];}
}
function videoSelector(videonum,date,month,year,formatted,mauApa){
	var views;
	if (videonum==1){views=felizNavidad(date,month,year,mauApa);}
	else if(videonum==2){views=solamente(date,month,year,mauApa);}
	else if(videonum==3){views=soloGitar(date,month,year,mauApa);} 
	if(formatted==false){return views;}
	else if(formatted==true){
		if(views==0||views==undefined||views==NaN){return "-";}
		else{
			var u=views;
			views=views.toString();
			var pattern;
   			if (u<1000000){
   				pattern= /(-?\d+)(\d{3})/;
   				while(pattern.test(views)){
        		views=views.replace(pattern, "$1.$2");}
   			}
			return views;
		}
	}
}
function felizNavidad(date,month,year,mauApa){
	var viewsMay=[1164,1169,1174,1180,1183,1187,1194,1199,1205,1209,1213,1217,1222,1228,1237,1241,1248,1254,1257,1265,1269,1274,1279, 1287,1293, 1298,1308,1313,1321,1329,1337];
	var viewsJune=[1355,1376,1392,1408,1424,1443,1458,1468,1474,1481,1488,1496,1503,1509,1516,1522,1540,1559,1572,1583,1600,1636,1662,1680,1697,1712,1727,1773,1798,1815];
	var viewsJuly=[1838,1856,1865,1875,1887,1908,1925];
	var viewsAugust=[];
	if (year==2021){
		if(month==0){return viewsMay.length;}
		else if(month==5&&mauApa==1){return viewsMay[date-1];}
		else if(month==5&&mauApa==2){return viewsMay[(viewsMay.length)-1];}
		else if(month==5&&mauApa==3){return viewsMay[(viewsMay.length)-2];}
		else if(month==5&&mauApa==4){return viewsMay[date-1];}
		else if(month==6&&mauApa==1){return viewsJune[date-1];}
		else if(month==6&&mauApa==2){return viewsJune[(viewsJune.length)-1];}
		else if(month==6&&mauApa==3){return viewsJune[(viewsJune.length)-2];}
		else if(month==6&&mauApa==4){return viewsJune[date-1];}
		else if(month==7&&mauApa==1){return viewsJuly[date-1];}
		else if(month==7&&mauApa==2){return viewsJuly[(viewsJuly.length)-1];}
		else if(month==7&&mauApa==3){return viewsJuly[(viewsJuly.length)-2];}
		else if(month==7&&mauApa==4){return viewsJuly[date-1];}
		else if(month==8&&mauApa==1){return viewsAugust[date-1];}
		else if(month==8&&mauApa==2){return viewsAugust[(viewsAugust.length)-1];}
		else if(month==8&&mauApa==3){return viewsAugust[(viewsAugust.length)-2];}
		else if(month==8&&mauApa==4){return viewsAugust[date-1];}
	}
}
function solamente(date,month,year,mauApa){
	var viewsMay=[2073,2078,2087,2097,2108,2125,2135,2139,2147,2156,2160,2165,2169,2176,2187,2193,2201,2208,2215,2230,2244,2252,2262,2271,2283,2294,2309,2314,2327,2336,2345];
	var viewsJune=[2375,2396,2419,2438,2456,2480,2495,2504,2511,2517,2524,2532,2539,2546,2553,2558,2583,2600,2617,2634,2661,2717,2748,2778,2792,2813,2835,2871,2891,2923];
	var viewsJuly=[2971,3030,3068,3082,3097,3135,3167];
	var viewsAugust=[];
	if (year==2021){
		if(month==0){return viewsMay.length;}
		else if(month==5&&mauApa==1){return viewsMay[date-1];}
		else if(month==5&&mauApa==2){return viewsMay[(viewsMay.length)-1];}
		else if(month==5&&mauApa==3){return viewsMay[(viewsMay.length)-2];}
		else if(month==5&&mauApa==4){return viewsMay[date-1];}
		else if(month==6&&mauApa==1){return viewsJune[date-1];}
		else if(month==6&&mauApa==2){return viewsJune[(viewsJune.length)-1];}
		else if(month==6&&mauApa==3){return viewsJune[(viewsJune.length)-2];}
		else if(month==6&&mauApa==4){return viewsJune[date-1];}
		else if(month==7&&mauApa==1){return viewsJuly[date-1];}
		else if(month==7&&mauApa==2){return viewsJuly[(viewsJuly.length)-1];}
		else if(month==7&&mauApa==3){return viewsJuly[(viewsJuly.length)-2];}
		else if(month==7&&mauApa==4){return viewsJuly[date-1];}
		else if(month==8&&mauApa==1){return viewsAugust[date-1];}
		else if(month==8&&mauApa==2){return viewsAugust[(viewsAugust.length)-1];}
		else if(month==8&&mauApa==3){return viewsAugust[(viewsAugust.length)-2];}
		else if(month==8&&mauApa==4){return viewsAugust[date-1];}
	}
}
function soloGitar(date,month,year,mauApa){
	var viewsMay=[799,805,815,822,829,837,848,852,858,863,867,873,880,889,899,908,916,927,937,951,963,970,984,993,1002,1013,1031,1037,1050,1062,1071];
	var viewsJune=[1091,1113,1137,1160,1178,1194,1207,1215,1221,1227,1234,1243,1252,1259,1264,1270,1286,1305,1325,1335,1358,1388,1412,1443,1463,1482,1497,1540,1570,1595];
	var viewsJuly=[1621,1638,1655,1667,1681,1708,1732];
	var viewsAugust=[];
	if (year==2021){
		if(month==0){return viewsMay.length;}
		else if(month==5&&mauApa==1){return viewsMay[date-1];}
		else if(month==5&&mauApa==2){return viewsMay[(viewsMay.length)-1];}
		else if(month==5&&mauApa==3){return viewsMay[(viewsMay.length)-2];}
		else if(month==5&&mauApa==4){return viewsMay[date-1];}
		else if(month==6&&mauApa==1){return viewsJune[date-1];}
		else if(month==6&&mauApa==2){return viewsJune[(viewsJune.length)-1];}
		else if(month==6&&mauApa==3){return viewsJune[(viewsJune.length)-2];}
		else if(month==6&&mauApa==4){return viewsJune[date-1];}
		else if(month==7&&mauApa==1){return viewsJuly[date-1];}
		else if(month==7&&mauApa==2){return viewsJuly[(viewsJuly.length)-1];}
		else if(month==7&&mauApa==3){return viewsJuly[(viewsJuly.length)-2];}
		else if(month==7&&mauApa==4){return viewsJuly[date-1];}
		else if(month==8&&mauApa==1){return viewsAugust[date-1];}
		else if(month==8&&mauApa==2){return viewsAugust[(viewsAugust.length)-1];}
		else if(month==8&&mauApa==3){return viewsAugust[(viewsAugust.length)-2];}
		else if(month==8&&mauApa==4){return viewsAugust[date-1];}
	}
}
function tableBuilder(date, month, year, videonum){
	var daysInMonth=(daysTotal(2,month,year)+2);
	var daysInMonth2=(daysTotal(2,month,year)+1);
	var jumlahVideo=videoTitles(0);
	var mnth=tanggalan(5);
	var todayDate=tanggalan(2);
	var thistimeView,r,s,nextView,tanggalSelanjutnya,tanggalSebelumnya,previousView,previousViewMonth,nextViewMonth,previousViewYear,nextViewYear;
	document.write("<div class='inH'><h3>Bulan "+monthSelector(month)+"</h3></div>");
	document.write("<div class='tableWrapper'>")
	document.write("<table class='viewsData'>");
	document.write("<tr>");
	if (month==mnth){
		s=new Date();
		s=s.getDate()+1;
		r=s+1;
	} else{
		r=daysInMonth;
		s=daysInMonth2;
	}
	for(var column=1;column<=r;column++){document.write("<th>"+tH(column, month, year)+"</th>");}
	for(var vid=videonum;vid<=jumlahVideo;vid++){
		if(vid%2==0){document.write("<tr id='even' title='"+videoTitles(vid)+"'>");}
		else{document.write("<tr title='"+videoTitles(vid)+"'>");}
		document.write("<td class='judulVideo' colspan='2'>"+videoTitles(vid)+"</td>");
		for(var tanggal=date;tanggal<s;tanggal++){
			tanggalSelanjutnya=tanggal+1;
			tanggalSebelumnya=tanggal-1;
			if(tanggalSebelumnya<1){
				previousViewMonth=month-1;
				tanggalSebelumnya=daysTotal(2,previousViewMonth,year);
			}else{previousViewMonth=month;}
			if(tanggalSelanjutnya>daysTotal(2,month,year)){
				nextViewMonth=month+1;
				tanggalSelanjutnya=1;
			}else{nextViewMonth=month;}
			if(previousViewMonth<1){previousViewYear=year-1;}
			else{previousViewYear=year;}
			if (nextViewMonth>12){nextViewYear=year+1;}
			else{nextViewYear=year;}
			thistimeView=videoSelector(vid,tanggal,month,year,false,1);
			nextView=videoSelector(vid,tanggalSelanjutnya,nextViewMonth,nextViewYear,false,1);
			previousView=videoSelector(vid,tanggalSebelumnya,previousViewMonth,previousViewYear,false,1);
			if((thistimeView==0&&nextView!=thistimeView)&&(nextView!=0||nextView!=undefined)){
				thistimeView=0;
				document.write("<td id='entrance' class='numbersView'>");
				document.write(thistimeView);
				document.write("</td>");
			} else if(thistimeView!=0&&previousView>thistimeView&&(previousView!=0&&previousView!=undefined&&previousView!="-")){
				thistimeView=videoSelector(vid,tanggal,month,year,true,1);
				document.write();
				document.write("<td id='lowerCount' class='numbersView'>");
				document.write(thistimeView);
				document.write("</td>");}
			 else{
			 	thistimeView=videoSelector(vid,tanggal,month,year,true,1);
				document.write("<td class='numbersView'>");
				document.write(thistimeView);
				document.write("</td>");
			}
		}
		document.write("</tr>");
	}
	document.write("</tr>");
	document.write("</table>");
	document.write("</div>");
}
function lastUpdate(videonum,date,month,year){
	var today=videoSelector(videonum,date,month,year,false,2);
	var yesterday=videoSelector(videonum,date,month,year,false,3);
	var yesterdayMonth,yesterdayYear,yesterdayDaysinMonth;
	var isLeap=daysTotal(1,month,year);
	if (date==1){
		yesterdayMonth=month-1;
		yesterdayDaysinMonth=daysTotal(2,yesterdayMonth,year);
		if(month==1){
			yesterdayYear=year-1;
			yesterday=videoSelector(videonum,yesterdayDaysinMonth,yesterdayMonth,yesterdayYear,false,2);
		} else{
			yesterday=videoSelector(videonum,yesterdayDaysinMonth,yesterdayMonth,year,false,2);
		}
	}
	var pertambahan=today-yesterday;
	return pertambahan;
}
function tanggalan(mauApa){
	var d=new Date;
	var days=["Minggu","Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
	var gettingDay=d.getDay();
	var day=days[gettingDay];
	var date=d.getDate();
	var gettingMonth=d.getMonth();
	var month=monthSelector((gettingMonth+1));
	var year=d.getFullYear();
	if(mauApa==1){return day;}
	else if(mauApa==2){return date;}
	else if(mauApa==3){return month;}
	else if(mauApa==4){return year;}
	else if(mauApa==5){return (gettingMonth+1);}
}
function update_View(){
	var k=1;
	var z=1;
	var pertambahanAll=0;
	var q;
	var today=tanggalan(2);
	var thisMonth=(tanggalan(5));
	var year=tanggalan(4);
	document.write("<div class='updateViews cf'>");
	for (var p=1;p<=videoTitles(0);p++){
		q=lastUpdate(p,today,thisMonth,year);
		var u=q.toString();
		u=u.toLocaleString("id-ID");
		if(k%2==0){
			document.write("<div class='bungkusTambahan even2'><a href='"+videoLinks(p)+"'>")
			document.write("<div id='tambahan'>"+u+"</div>");
			document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
			document.write("</a></div>")
		}else if(k%2!=0){
			document.write("<div class='bungkusTambahan'><a href='"+videoLinks(p)+"'>")
			document.write("<div id='tambahan'>"+u+"</div>");
			document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
			document.write("</a></div>")
		}
		pertambahanAll+=q;
		if(k%3==0 && p != videoTitles(0)){
			z++;
			document.write("</div>")
			document.write("<div class='updateViews cf'>");
		}else if((k%3==0||k%3!=0) && p == videoTitles(0)){
			document.write("</div>");
		}k++;
	}
	document.write("<div class='bungkusTambahan totalTambahan'>")
	document.write("<div id='tambahan'>"+pertambahanAll+"</div>");
	document.write("<div id='judulVid'>Total</div>");
	document.write("</div>")
	var rataRataTambah=pertambahanAll/videoTitles(0);
	rataRataTambah=rataRataTambah.toFixed(2);
	document.write("<div class='bungkusTambahan totalTambahan'>")
	document.write("<div id='tambahan'>"+rataRataTambah.toLocaleString('id-ID')+"</div>");
	document.write("<div id='judulVid'>Penambahan rata-rata</div>");
	document.write("</div>");
}
function update_View_Index(){
	var k=1;
	var z=1;
	var pertambahanAll=0;
	var q,lastVid;
	var year=tanggalan(4);
	lastVid=videoTitles(0);
	var today=tanggalan(2);
	var thisMonth=(tanggalan(5));
	document.write("<div class='updateViews cf'>");
	if(lastVid<9){d=lastVid-(lastVid-1);}
	else if(lastVid>=9){d=lastVid-8;}
	for(var p=d;p<=lastVid;p++){
		q=lastUpdate(p, today, thisMonth, year);
		if(q==undefined||q==NaN){continue;}
		else{
			var u=q.toString();
			u=u.toLocaleString("id-ID");
			if(k%2==0){
				document.write("<div class='bungkusTambahan even2'><a href='"+videoLinks(p)+"'>");
				document.write("<div id='tambahan'>"+u+"</div>");
				document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
				document.write("</a></div>");
			}else if(k%2!=0){
				document.write("<div class='bungkusTambahan'><a href='"+videoLinks(p)+"'>");
				document.write("<div id='tambahan'>"+u+"</div>");
				document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
				document.write("</a></div>");
			}pertambahanAll+=q;
			if(k%3==0 && p != videoTitles(0)){
				z++;
				document.write("</div>")
				document.write("<div class='updateViews cf'>");
			} else if((k%3==0||k%3!=0) && p == videoTitles(0)){
				document.write("</div>");
			}
		}k++;
	}
	document.write("<div class='bungkusTambahan totalTambahan'>");
	document.write("<div id='tambahan'>"+pertambahanAll+"</div>");
	document.write("<div id='judulVid'>Total</div>");
	document.write("</div>")
	var rataRataTambah=pertambahanAll/videoTitles(0);
	rataRataTambah=rataRataTambah.toFixed(2);
	document.write("<div class='bungkusTambahan totalTambahan'>")
	document.write("<div id='tambahan'>"+rataRataTambah.toLocaleString('id-ID')+"</div>");
	document.write("<div id='judulVid'>Penambahan rata-rata</div>");
	document.write("</div>")
}
function monthlyUpdate(videonum,date,month,year){
	var today=videoSelector(videonum,date,month,year,false,2);
	var firstDay=videoSelector(videonum,1,month,year,false,1);
	var pertambahan=today-firstDay;
	return pertambahan;
}
function monthlyProgress(){
	var pertambahanAll=0;
	var q;
	var today=tanggalan(2);
	var thisMonth=(tanggalan(5));
	var thisMonthWord=(tanggalan(3));
	var thisYear=(tanggalan(4));
	document.write("<h2 class='jarakin'> Penambahan selama bulan "+thisMonthWord+" "+thisYear+"</h2>");
	document.write("<div class='updateViews cf'>")
	for(var p=1;p<=videoTitles(0);p++){
		q=monthlyUpdate(p,today,thisMonth,thisYear);
		if(p%2==0){
			document.write("<div class='bungkusTambahan'>");
			document.write("<div id='tambahan'>"+q+"</div>");
			document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
			document.write("</div>")
		}else if(p%2!=0){
			document.write("<div class='bungkusTambahan even2'>")
			document.write("<div id='tambahan'>"+q+"</div>");
			document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
			document.write("</div>")
		}pertambahanAll+=q;
		if(p%3==0&&p!=videoTitles(0)){
			document.write("</div>");
			document.write("<div class='updateViews cf'>");
		} else if ((p%3==0||p%3!=0)&&p==videoTitles(0)){
			document.write("</div>");
		}
	}
	document.write("<div class='bungkusTambahan totalTambahan'>");
	document.write("<div id='tambahan'>"+pertambahanAll+"</div>");
	document.write("<div id='judulVid'>Total</div>");
	document.write("</div>");
	var rataRataTambah=pertambahanAll/videoTitles(0)
	rataRataTambah=rataRataTambah.toFixed(2);
	document.write("<div class='bungkusTambahan totalTambahan'>")
	document.write("<div id='tambahan'>"+rataRataTambah+"</div>");
	document.write("<div id='judulVid'>Penambahan rata-rata</div>");
	document.write("</div>");
}
