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
	function tH(column, month, year){
		var header = ["Video&darr;","Tanggal&rarr;"];
		var leap = daysTotal(1,month,year);
		var daysInMonth = daysTotal(2,month,year)+1;
		for (var i = 1; i < daysInMonth; i++){
			header.push(i+"/"+month);
		}
		if (column == 0){return header.length;}
		else {return header[column-1];}

	}
	function videoTitles(videonum){
		var videos = [/*1*/"Feliz Navidad",
					/*2*/"Solamente",
					/*3*/"Solo Gitar"];
		if (videonum == 0){return videos.length;}
		else {return videos[videonum-1];}

	}
	function videoLinks(videonum){
		var links = ["feliz-navidad", "solamente-una-vez", "solo-gitar"];
		return links[videonum-1];
	}

	function monthSelector(month){
		var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
		if (month == 0){return months.length;}
		else {return months[month-1];}
	}
	function videoSelector (videonum, date, month, formatted,mauApa){
		var views;
		if (videonum == 1){
			views = felizNavidad(date,month,mauApa);
		} else if (videonum == 2){
			views = solamente(date,month,mauApa);
		} else if (videonum == 3){
			views = soloGitar(date,month,mauApa);
		} 
		if (formatted == false){return views;}
		else if (formatted == true){
			if (views == 0 || views == undefined || views == NaN){return "-";}
			else {
				var u = views;
				views = views.toString();
				var pattern;
	   			if (u < 1000000){
	   				pattern = /(-?\d+)(\d{3})/;
	   				while (pattern.test(views)){
	        		views = views.replace(pattern, "$1.$2");}
	   			}
				return views;
			}
		}
	}
	function felizNavidad(date, month,mauApa){
		var viewsMay = [/*1*/1164,
						/*2*/1169, 
						/*3*/1174,
						/*4*/1180, 
						/*5*/1183, 
						/*6*/1187,
						/*7*/1194, 
						/*8*/1199, 
						/*9*/1205, 
						/*10*/1209, 
						/*11*/1213, 
						/*12*/1217, 
						/*13(lost,estimated)*/1222, 
						/*14*/1228, 
						/*15*/1237, 
						/*16*/1241, 
						/*17*/1248, 
						/*18*/1254, 
						/*19*/1257, 
						/*20*/1265, 
						/*21*/1269, 
						/*22*/1274, 
						/*23*/1279, 
						/*24*/1287, 
						/*25*/1293, 
						/*26*/1298,
						/*27*/1308,
						/*28*/1313,
						/*29*/1321,
						/*30*/1329,
						/*31*/1337];
		var viewsJune= [/*1*/1355,
		                /*2*/1376,
		                /*3*/1392,
		                /*4*/1408];
		if (month == 0){return viewsMay.length;}
		else if (month == 5 && mauApa == 1){return viewsMay[date-1];}
		else if(month == 5 && mauApa == 3){
			return viewsMay[(viewsMay.length)-2];}
		else if(month == 5 && mauApa == 2){return viewsMay[(viewsMay.length)-1];}
		else if(month == 5 && mauApa == 4){return viewsMay[date-1];}
		else if (month == 6 && mauApa == 1){return viewsJune[date-1];}
		else if(month == 6 && mauApa == 3){return viewsJune[(viewsJune.length)-2];}
		else if(month == 6 && mauApa == 2){return viewsJune[(viewsJune.length)-1];}
		else if(month == 6 && mauApa == 4){return viewsJune[date-1];}
	}
	function solamente(date,month,mauApa){
		var viewsMay = [/*1*/2073,
						/*2*/2078, 
						/*3*/2087,
						/*4*/2097, 
						/*5*/2108, 
						/*6*/2125,
						/*7*/2135, 
						/*8*/2139, 
						/*9*/2147, 
						/*10*/2156, 
						/*11*/2160, 
						/*12*/2165, 
						/*13 (Lost,estimated)*/2169, 
						/*14*/2176, 
						/*15*/2187, 
						/*16*/2193, 
						/*17*/2201, 
						/*18*/2208, 
						/*19*/2215, 
						/*20*/2230, 
						/*21*/2244, 
						/*22*/2252, 
						/*23*/2262, 
						/*24*/2271, 
						/*25*/2283, 
						/*26*/2294,
						/*27*/2309,
						/*28*/2314,
						/*29*/2327,
						/*30*/2336,
						/*31*/2345];
		var viewsJune= [/*1*/2375,
		                /*2*/2396,
		                /*3*/2419,
		                /*4*/2438];
		if (month == 0){return viewsMay.length;}
		else if (month == 5 && mauApa == 1){return viewsMay[date-1];}
		else if(month == 5 && mauApa == 3){
			return viewsMay[(viewsMay.length)-2];}
		else if(month == 5 && mauApa == 2){return viewsMay[(viewsMay.length)-1];}
		else if(month == 5 && mauApa == 4){return viewsMay[date-1];}
		else if (month == 6 && mauApa == 1){return viewsJune[date-1];}
		else if(month == 6 && mauApa == 3){return viewsJune[(viewsJune.length)-2];}
		else if(month == 6 && mauApa == 2){return viewsJune[(viewsJune.length)-1];}
		else if(month == 6 && mauApa == 4){return viewsJune[date-1];}
	}
	function soloGitar(date,month,mauApa){
		var viewsMay = [/*1*/799,
						/*2*/805, 
						/*3*/815,
						/*4*/822, 
						/*5*/829, 
						/*6*/837,
						/*7*/848, 
						/*8*/852, 
						/*9*/858, 
						/*10*/863, 
						/*11*/867, 
						/*12*/873, 
						/*13 (Lost,estimated*/880, 
						/*14*/889, 
						/*15*/899, 
						/*16*/908, 
						/*17*/916, 
						/*18*/927, 
						/*19*/937, 
						/*20*/951, 
						/*21*/963, 
						/*22*/970, 
						/*23*/984, 
						/*24*/993, 
						/*25*/1002, 
						/*26*/1013,
						/*27*/1031,
						/*28*/1037,
						/*29*/1050,
						/*30*/1062,
						/*31*/1071];
		var viewsJune= [/*1*/1091,
		                /*2*/1113,
		                /*3*/1137,
		                /*4*/1160];
		if (month == 0){return viewsMay.length;}
		else if (month == 5 && mauApa == 1){return viewsMay[date-1];}
		else if(month == 5 && mauApa == 3){
			return viewsMay[(viewsMay.length)-2];}
		else if(month == 5 && mauApa == 2){return viewsMay[(viewsMay.length)-1];}
		else if(month == 5 && mauApa == 4){return viewsMay[date-1];}
		else if (month == 6 && mauApa == 1){return viewsJune[date-1];}
		else if(month == 6 && mauApa == 3){return viewsJune[(viewsJune.length)-2];}
		else if(month == 6 && mauApa == 2){return viewsJune[(viewsJune.length)-1];}
		else if(month == 6 && mauApa == 4){return viewsJune[date-1];}
	}

	function tableBuilder(date, month, year, videonum){
		var daysInMonth = (daysTotal(2,month,year)+2);
		var daysInMonth2 = (daysTotal(2,month,year)+1);
		var jumlahVideo = videoTitles(0);
		var mnth = tanggalan(5);
		var thistimeView, nextView, tanggalSelanjutnya, tanggalSebelumnya,  previousView, previousViewMonth, nextViewMonth;
		document.write("<h3>Bulan "+monthSelector(month)+"</h3>");
		document.write("<div class='tableWrapper'>")
		document.write("<table class='viewsData'>");
		document.write("<tr>");
		for (var column = 1; column <= daysInMonth; column++){
			document.write("<th>"+tH(column, month, year)+"</th>");
		}
		for (var vid = videonum; vid <= jumlahVideo; vid++){
			if (vid%2==0){
				document.write("<tr id='even' title='"+videoTitles(vid)+"'>");
			}else{
				document.write("<tr title='"+videoTitles(vid)+"'>");
			}
			document.write("<td class='judulVideo' colspan='2'>"+videoTitles(vid)+"</td>");
			for (var tanggal = date; tanggal < daysInMonth2; tanggal++){
				tanggalSelanjutnya = tanggal+1;
				tanggalSebelumnya = tanggal-1;
				if (tanggalSebelumnya < 1){
					previousViewMonth = month-1;
					tanggalSebelumnya = daysTotal(2,previousViewMonth,year);
				} else{
					previousViewMonth = month;
				}
				if (tanggalSelanjutnya > daysTotal(2,month,year)){
					nextViewMonth = month+1;
					tanggalSelanjutnya = 1;
				}else{
					nextViewMonth = month;
				}
				thistimeView = videoSelector(vid, tanggal, month, false, 1);
				nextView = videoSelector(vid,tanggalSelanjutnya,nextViewMonth, false, 1);
				previousView = videoSelector(vid,tanggalSebelumnya,[previousViewMonth], false, 1);
				if ((thistimeView == 0 && nextView!=thistimeView) && (nextView!=0||nextView!=undefined)){
					thistimeView = 0;
					document.write("<td id='entrance' class='numbersView'>");
					document.write(thistimeView);
					document.write("</td>");
				} else if (thistimeView != "-" && previousView>thistimeView && (previousView!=0 && previousView!=undefined && previousView!="-")){
					thistimeView = videoSelector(vid, tanggal, month, true, 1);
					document.write();
					document.write("<td id='lowerCount' class='numbersView'>");
					document.write(thistimeView);
					document.write("</td>");}
				 else{
				 	thistimeView = videoSelector(vid, tanggal, month, true, 1);
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
	function lastUpdate(videonum, date, month){
		var today = videoSelector (videonum, date, month, false, 2);
		var year = tanggalan(4);
		var yesterday = videoSelector (videonum, date, month, false, 3);
		var yesterdayMonth;
		var isLeap = daysTotal(1,month,year);
		var yesterdayDaysinMonth;
		if (date == 1){
			yesterdayMonth = month-1;
			yesterdayDaysinMonth = daysTotal(2,yesterdayMonth,year);
			yesterday = videoSelector (videonum, yesterdayDaysinMonth, yesterdayMonth, false, 2);
		}
		var pertambahan = today - yesterday;
		return pertambahan;
	}
	function tanggalan(mauApa){
		var d = new Date;
		var days = ["Minggu","Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
		var gettingDay = d.getDay();
		var day = days[gettingDay];
		var date = d.getDate();
		var gettingMonth = d.getMonth();
		var month = monthSelector((gettingMonth+1));
		var year = d.getFullYear();
		if (mauApa==1){return day;}
		else if (mauApa==2){return date;}
		else if (mauApa==3){return month;}
		else if (mauApa==4){return year;}
		else if (mauApa==5){return (gettingMonth+1);}
	}
	function update_View(){
		var z = 1;
		var pertambahanAll=0;
		var q;
		var today = tanggalan(2);
		var thisMonth = (tanggalan(5));
		document.write("<div class='updateViews cf'>")
		for (var p = 1; p <= videoTitles(0); p++) {
			q = lastUpdate(p, today, thisMonth);
			var u = q.toString();
			u = u.toLocaleString("id-ID");
			if (p%2==0){
				document.write("<div class='bungkusTambahan even2'><a href='rum-vids/"+videoLinks(p)+".html'>")
				document.write("<div id='tambahan'>"+u+"</div>");
				document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
				document.write("</a></div>")
			} else if (p%2!=0){
				document.write("<div class='bungkusTambahan'><a href='rum-vids/"+videoLinks(p)+".html'>")
				document.write("<div id='tambahan'>"+u+"</div>");
				document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
				document.write("</a></div>")
			}
			pertambahanAll+=q;
			if (p%3==0 && p != videoTitles(0)){
				z++;
				document.write("</div>")
				document.write("<div class='updateViews cf'>");
			} else if ((p%3==0||p%3!=0) && p == videoTitles(0)){
				document.write("</div>");
			}
		}
		document.write("<div class='bungkusTambahan totalTambahan'>")
		document.write("<div id='tambahan'>"+pertambahanAll+"</div>");
		document.write("<div id='judulVid'>Total</div>");
		document.write("</div>");
		var rataRataTambah = pertambahanAll/videoTitles(0);
		rataRataTambah=rataRataTambah.toFixed(2);
		document.write("<div class='bungkusTambahan totalTambahan'>")
		document.write("<div id='tambahan'>"+rataRataTambah.toLocaleString('id-ID')+"</div>");
		document.write("<div id='judulVid'>Penambahan rata-rata</div>");
		document.write("</div>");
	}
	function update_View_Index(){
		var z = 1
		var pertambahanAll=0;
		var q, lastVid;
		lastVid = videoTitles(0);
		var today = tanggalan(2);
		var thisMonth = (tanggalan(5));
		document.write("<div class='updateViews cf'>")
		for (var p = (lastVid-1); p >= 0; p--) {
			q = lastUpdate((lastVid-p), today, thisMonth);
			if (q == 0 || q == undefined || q == NaN){
				continue;
			} else{
				var u = q.toString();
				u = u.toLocaleString("id-ID");
				if (p%2==0){
					document.write("<div class='bungkusTambahan even2'><a href='rum-vids/"+videoLinks(lastVid-p)+".html'>")
					document.write("<div id='tambahan'>"+u+"</div>");
					document.write("<div id='judulVid'>"+videoTitles(lastVid-p)+"</div>");
					document.write("</a></div>")
				} else if (p%2!=0){
					document.write("<div class='bungkusTambahan'><a href='rum-vids/"+videoLinks(lastVid-p)+".html'>")
					document.write("<div id='tambahan'>"+u+"</div>");
					document.write("<div id='judulVid'>"+videoTitles(lastVid-p)+"</div>");
					document.write("</a></div>")
				}
				pertambahanAll+=q;
				if (p%3==0 && p != videoTitles(0)){
					z++;
					document.write("</div>")
					document.write("<div class='updateViews cf'>");
				} else if ((p%3==0||p%3!=0) && p == videoTitles(0)){
					document.write("</div>");
				}
			}
			
		}
		document.write("<div class='bungkusTambahan totalTambahan'>")
		document.write("<div id='tambahan'>"+pertambahanAll+"</div>");
		document.write("<div id='judulVid'>Total</div>");
		document.write("</div>");
		var rataRataTambah = pertambahanAll/videoTitles(0);
		rataRataTambah=rataRataTambah.toFixed(2);
		document.write("<div class='bungkusTambahan totalTambahan'>")
		document.write("<div id='tambahan'>"+rataRataTambah.toLocaleString('id-ID')+"</div>");
		document.write("<div id='judulVid'>Penambahan rata-rata</div>");
		document.write("</div>");
	}

	function monthlyUpdate(videonum, date, month){
		var today = videoSelector (videonum, date, month, false, 2);
		var firstDay = videoSelector (videonum, 1, month, false, 1);
		var pertambahan = today - firstDay;
		return pertambahan;
	}
	function monthlyProgress(){
		var pertambahanAll=0;
		var q;
		var today = tanggalan(2);
		var thisMonth = (tanggalan(5));
		var thisMonthWord = (tanggalan(3));
		var thisYear = (tanggalan(4));
		document.write("<h2 class='jarakin'> Penambahan selama bulan "+thisMonthWord+" "+thisYear+"</h2>");
		document.write("<div class='updateViews cf'>")
		for (var p = 1; p <= videoTitles(0); p++) {
			q = monthlyUpdate(p, today, thisMonth);
			if (p%2==0){
				document.write("<div class='bungkusTambahan'>")
				document.write("<div id='tambahan'>"+q+"</div>");
				document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
				document.write("</div>")
			} else if (p%2!=0){
				document.write("<div class='bungkusTambahan even2'>")
				document.write("<div id='tambahan'>"+q+"</div>");
				document.write("<div id='judulVid'>"+videoTitles(p)+"</div>");
				document.write("</div>")
			}
			
			pertambahanAll+=q;
			if (p%3==0 && p != videoTitles(0)){
				document.write("</div>")
				document.write("<div class='updateViews cf'>")
			} else if ((p%3==0||p%3!=0) && p == videoTitles(0)){
				document.write("</div>");
			}
		}

		document.write("<div class='bungkusTambahan totalTambahan'>")
		document.write("<div id='tambahan'>"+pertambahanAll+"</div>");
		document.write("<div id='judulVid'>Total</div>");
		document.write("</div>");
		var rataRataTambah = pertambahanAll/videoTitles(0)
		rataRataTambah=rataRataTambah.toFixed(2);
		document.write("<div class='bungkusTambahan totalTambahan'>")
		document.write("<div id='tambahan'>"+rataRataTambah+"</div>");
		document.write("<div id='judulVid'>Penambahan rata-rata</div>");
		document.write("</div>");
	}