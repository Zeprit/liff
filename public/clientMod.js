function initMod(playerId, roomId) {
    print("Mod: " + players[playerId].nickName + " (you) joined the game at " + roomId);

    //prevent duplicate listeners
    if (!socket.hasListeners('musicOn')) {

        socket.on('musicOn', function (beat) {

            SOUNDS["beat" + beat].loop();
            bg.play();
        });

        //music is playing
        socket.on('musicEnter', function (beat) {
            //start from random
            SOUNDS["beat" + beat].loop();
            bg.play();
        });

        socket.on('musicOff', function (beat) {
            print("The MOD module communicates with a custom socket event: music off");
            //just to be sure I stop all the beats
            SOUNDS["beat1"].stop();
            SOUNDS["beat2"].stop();
            SOUNDS["beat3"].stop();
            SOUNDS.DJStop.play();
            bg.rewind();
            bg.stop();
        });


        //music is playing stop all bit without record scratch
        socket.on('musicExit', function (beat) {
            SOUNDS["beat1"].stop();
            SOUNDS["beat2"].stop();
            SOUNDS["beat3"].stop();
        });



        socket.on('updateRoles', function (newcomerId, fr) {

            //keep track of the roles
            familyRoles = fr;
            var newcomerAssigned = false;


            //change all the sprites just to be sure
            for (var roleId in familyRoles) {
                var rolePlayer = familyRoles[roleId];

                //role assigned
                if (rolePlayer != "") {
                    print(rolePlayer + " is roleplaying as " + roleId);
                    if (players[rolePlayer] != null) //player exists
                    {
                        //newcomer has a role
                        if (newcomerId == rolePlayer)
                            newcomerAssigned = true;

                        changeCharacter(rolePlayer, roleId, roleId + "Walk", roleId + "Emote");

                        //newcomer is me > intro text
                        if (newcomerId == me.id) {
                            longText = familyIntro + rolesInfo[roleId][1];
                            longTextLines = -1;
                            longTextAlign = "center";
                        }
                    }
                }
            }

            //server doesn't bother to keep track of spectators so all newcomers without roles are flies
            if (!newcomerAssigned) {

                changeCharacter(newcomerId, "fly", "flyWalk", "flyEmote");

                if (newcomerId == me.id) {
                    longText = familyIntro + rolesInfo.fly[1];
                    longTextLines = -1;
                    longTextAlign = "center";
                }

            }

        });

  socket.on('reloadVideo', function (videoId)
	{
@@ -126,273 +15,7 @@ function initMod(playerId, roomId) {

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
