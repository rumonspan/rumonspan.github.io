function footerScript(pageLevel){
	var year = new Date().getFullYear();
	if (pageLevel == 1){
		document.write("<div class='copyright'>2020-"+year+"</div>");
		document.write("<div class ='channelID'><a href='https://www.youtube.com/channel/UCC9z07qxRHUtHBVfFlETohA/' target='_blank'><img class='ytLogo' src='rum-src/yt_icon_mono_dark.png'>Rum Onspan Music</a></div></p>");
	} 
	else if (pageLevel==2 || pageLevel == 1.5){
		document.write("<div class='copyright'>2020-"+year+"</div>");
		document.write("<div class ='channelID'><a href='https://www.youtube.com/channel/UCC9z07qxRHUtHBVfFlETohA/' target='_blank'><img class='ytLogo' src='../rum-src/yt_icon_mono_dark.png'>Rum Onspan Music</a></div></p>");
	}
}