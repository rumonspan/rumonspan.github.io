function footerScript(pageLevel){
	var year = new Date().getFullYear(); var t=".";var w="";
	if (pageLevel < 2){
		document.write("<div class='copyright'>2020-"+year+"</div>");
		document.write("<div class ='channelID'><a href='https://www.youtube.com/channel/UCC9z07qxRHUtHBVfFlETohA/' target='_blank'><img class='ytLogo' src='rum-src/yt_icon_mono_dark.png'>Rum Onspan Music</a></div>");
		document.write("<div class='channelID'><a href='about.html'>About</a></div>")
	} 
	else if (pageLevel>=2){
		for (var i = 1; i<=pageLevel; i++){
			w+=t;
		}
		document.write("<div class='copyright'>2020-"+year+"</div>");
		document.write("<div class='channelID'><a href='https://www.youtube.com/channel/UCC9z07qxRHUtHBVfFlETohA/' target='_blank'><img class='ytLogo' src='"+w+"/rum-src/yt_icon_mono_dark.png'>Rum Onspan Music</a></div>");
		document.write("<div class='channelID'><a href='"+w+"/about.html'>About</a></div>")
	}
}