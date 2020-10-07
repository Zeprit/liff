
  socket.on('reloadVideo', function (videoId)
	{
		print("reloadVideo received");
		setVideo(videoId, true)
	});
	
	socket.on('changeVideo', function (videoId)
	{
		print("changeVideo received");
		setVideo(videoId, false)
	});

    }

}


function firstFloorEnter(playerId, roomId) {
    if (playerId == me.id) {

        var s = localStorage.getItem("sculpture");

        if (s == null) {
            s = floor(random(1, 5));
            window.localStorage.setItem("sculpture", s);
        }

        //getSprites is a p5 play function
        var roomSprites = getSprites();

        for (var i = 0; i < roomSprites.length; i++) {
            if (roomSprites[i].id != null)
                if (roomSprites[i].id == "sculpture" + s) {
                    roomSprites[i].visible = true;
                }
        }
    }
}

	//var videoUrl = "https://www.youtube.com/embed/iGxrq19AiBI?autoplay=1&mute=1&enablejsapi=1&loop=1&playlist=iGxrq19AiBI";

	var youtubeUrl = "https://www.youtube.com/embed/";

	var youtubeParameters = "?autoplay=1&mute=1&enablejsapi=1&loop=1&playlist=";
	
	var playlistId = "UNBTh4vWRIk";

	var currentLocalYoutubeId = null;
	
	function LIFFTheater1Enter(playerId, roomId)
	{
		print("Freeplay! " + players[playerId].nickName + " entered room " + roomId);
		if(playerId == me.id && players[playerId].nickName.length > 0)
		{
			print("player with name entered freeplay");
			// start the video!
			setVideo("UNBTh4vWRIk");
		}
		e = document.getElementById("talk-form");
		if (e != null)
			e.style.display = "none";
		
		e = document.getElementById("no-talkie");
		if (e != null)
			e.style.display = "block";
	}
	
	function setVideo(videoId, reload)
	{
		if(nickName == "")
		{
			console.log("Player in lurk mode, don't start video yet!");
			return;
		}
		
		if(videoId != currentLocalYoutubeId || reload == true)
		{// only update video if it has changed!
			currentLocalYoutubeId = videoId;
			var videoUrl = youtubeUrl + videoId + youtubeParameters + playlistId;
			player = select("#yt_video");
			player.attribute('src', videoUrl);
		}
		e = document.getElementById("video-container");
		if (e != null)
			e.style.display = "block";
	}
	
	//roomnameExit: called right before a player exits or disconnects
	// this seems to just be called for other players!
	// Had to modify client to have it called for the play leaving
	function LIFFTheater1Exit(playerId)
	{
		if(playerId == me.id)
		{
			console.log("I Left Freeplay");
			e = document.getElementById("video-container");
			if (e != null)
				e.style.display = "none";
				setVideo("");

			e = document.getElementById("talk-form");
			if (e != null)
			  e.style.display = "block";
			
			e = document.getElementById("no-talkie");
		  	if (e != null)
			  e.style.display = "none";

		}
		else
		{
			console.log(players[playerId].nickName + " Left Freeplay");
		}
    }
	function LIFFLobbyEnter(playerId, roomId)
	{
		if(playerId == me.id)
		{
			e = document.getElementById("video-container");
			if (e != null)
			e.style.display = "none";
	}
	}
    
    function LIFFTheater2Enter(playerId, roomId)
    {
        //Empty just to declare this
    }

    function LIFFTheater2Exit(playerId)
    {
        //Empty just to declare this
    }

    function LIFFOutsideEnter(playerId, roomId)
    {
        //Empty just to declare this
    }

    function LIFFOutsideExit(playerId)
    {
        //Empty just to declare this
    }
