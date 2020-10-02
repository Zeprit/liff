//settings are just variables that can be sent to the client from the server
//they are either related to the rooms or shared with the server 
module.exports.SETTINGS = {
    //if not specified by the url where is the starting point
    defaultRoom: "LIFFOutside",
    //minimum time between talk messages enforced by both client and server
    ANTI_SPAM: 1000,
    //shows up at first non lurking login
    INTRO_TEXT: "Click/tap to move"
};

//miscellaneous assets to preload
module.exports.IMAGES = [
    ["sheepIdle", "sheep-idle.png"],
    ["sheepWalk", "sheep-walk.png"],
    ["wifeWalk", "wife.png"],
    ["wifeEmote", "wife-emote.png"],
    ["husbandWalk", "husband.png"],
    ["husbandEmote", "husband-emote.png"],
    ["child1Walk", "child1.png"],
    ["child1Emote", "child1-emote.png"],
    ["child2Walk", "child2.png"],
    ["child2Emote", "child2-emote.png"],
    ["child3Walk", "child3.png"],
    ["child3Emote", "child3-emote.png"],
    ["uncleWalk", "uncle.png"],
    ["uncleEmote", "uncle-emote.png"],
    ["milkmanWalk", "milkman.png"],
    ["milkmanEmote", "milkman-emote.png"],
    ["boyfriendWalk", "child-boyfriend.png"],
    ["boyfriendEmote", "child-boyfriend-emote.png"],
    ["flyWalk", "fly.png"],
    ["flyEmote", "fly-emote.png"]
];

//miscellaneous sounds to preload
module.exports.SOUNDS = [
    ["beat1", "beat1.ogg"], //credit https://www.youtube.com/watch?v=ugLVpZm69DE
    ["beat2", "beat2.ogg"], // credit https://www.youtube.com/watch?v=dPdoxIz0w24
    ["beat3", "beat3.ogg"], //credit https://www.youtube.com/watch?v=XShEWT4MwJs
    ["DJStop", "DJStop.mp3"]
];

module.exports.ROOMS = {

    LIFFLobby: {
        //the background graphics, it can be a spreadsheet
        bg: "liff-lobby.png",
        //if spreadsheet frames
        frames: 6,
        //if animated, animation speed in refreshes (frame dependent)
        frameDelay: 30,
        //normally 2, avatars can be scaled to simulate camera distance
        avatarScale: 2,
        //a shade to tint the avatars to simulate light color, #FFFFFF normal
        tint: "#ffbbb8",
        //the html body color can be changed
        pageBg: "#28170B",
        //minimum height for the speech bubbles
        bubblesY: 50,
        //if spawning directly in this room, top left and bottom right point defining the rectangular spawn area (random within it)
        spawn: [106, 171, 153, 193],
        
        //music: "insideliff.mp3",
        //graphics with active areas Sierra Online adventures style
        //color coded as below, #FFFFFF is walkable, transparent is obstacle
        area: "liff-lobby-areas.png",
        //each color can trigger a command, the destination needs to be reached first
        //the "h" is replaced by # to identify color
        areaColors: {
            //enter command changes room
            //room: id of the room to enter
            //label: what to display on rollover
            //point: where to walk after click
            //enterPoint: where to spawn in the next room
            //obstacle: is the area walkable
            hffec27: { cmd: "enter", room: "LIFFTheater1", label: "Theater Room 1", point: [39, 87], enterPoint: [126, 192], obstacle: false },
            h00e436: { cmd: "enter", room: "LIFFOutside", label: "Outside", point: [132, 192], enterPoint: [128, 118], obstacle: false },
            hab5236: { cmd: "enter", room: "LIFFTheater2", label: "Theater Room 2", point: [226, 52], enterPoint: [126, 192], obstacle: false },
            hd5521b: { cmd: "enter", room: "PhotoBooth", label: "Photo Booth", point: [92, 116], enterPoint: [156, 186], obstacle: false },
            
            h00c6ba: { cmd: "text", label: "DeLIFFeroo", txt: "For all your food-related needs", align: "center", lines: 1, point: [117, 145] },
            he35bc8: { cmd: "text", url: "https://shop.liff.nl/", label: "Merch", txt: "T-shirts that blow your socks off! Click on this box to go to the store!", align: "center", lines: 3, point: [117, 145] },
            h1ea944: { cmd: "text", label: "Pronck-LIFF-Beer", txt: "One tasty adult beverage", align: "center", lines: 1, point: [117, 145] },
            h160c19: { cmd: "text", label: "Pulp Fiction", align: "center", lines: 1, point: [117, 145] },
            h2f77ba: { cmd: "text", label: "Up", align: "center", lines: 1, point: [117, 145] },
            h7c6d1f: { cmd: "text", label: "Jurassic Park", align: "center", lines: 1, point: [117, 145] },
            h41607a: { cmd: "text", label: "Jaws", align: "center", lines: 1, point: [117, 145] },
            h538d20: { cmd: "text", label: "Alien", align: "center", lines: 1, point: [117, 145] },
            h388841: { cmd: "text", label: "Parasite", align: "center", lines: 1, point: [117, 145] },
            hd5c929: { cmd: "text", label: "Delicious Popcorn", align: "center", lines: 1, point: [117, 145] },
            
            h7fffb8: { cmd: "text", label: "Waiter", align: "center", lines: 1, point: [117, 145] },
            h7fffb8: { cmd: "text", label: "Waiter", align: "center", lines: 1, point: [117, 145] },
            h7fffb8: { cmd: "text", label: "Waiter", align: "center", lines: 1, point: [117, 145] },
            h7fffb8: { cmd: "text", label: "Festival Attendant", txt: "Welcome to Leiden International Film Festival!", align: "center", lines: 1, point: [117, 145] },
            h7fffb8: { cmd: "text", label: "Festival Attendant", txt: "Welcome to Leiden International Film Festival!", align: "center", lines: 1, point: [117, 145] },


            //text displays a text only on the client
            //txt: the text
            //align: center or left
            //lines: manual number of lines, p5 doesn't understand line breaks
            //url: uptionally open a page on click
            hff004d: { cmd: "text", txt: "ENNUIGI\nby Josh Millard, 2015\nClick to play.\nControls: Arrow keys.", align: "left", lines: 4, url: "https://www.lexaloffle.com/bbs/?tid=2232", label: "An existential game", point: [34, 78], obstacle: true },
            hff77a8: { cmd: "text", txt: "STRUNG OUT IN HEAVEN'S HIGH\nby Sean S. LeBlanc\nand Ian Martin, 2016\nClick to play.\nControls: Arrow keys + Z.", align: "left", lines: 5, url: "https://www.lexaloffle.com/bbs/?tid=3941", label: "A trippy game", point: [64, 78], obstacle: true },
            hffccaa: { cmd: "text", txt: "GET COMFORTABLE\nby mcccclean, 2018\nClick to play.\nControls: Arrow keys.", align: "left", lines: 4, url: "https://mcccclean.itch.io/get-comfortable", label: "A snuggly game", point: [92, 78], obstacle: true },
            h83769c: { cmd: "text", txt: "HYBRIS\nby Benjamin Soule', 2015\nClick to play.\nControls: Arrow keys + Z.", align: "left", lines: 4, url: "https://www.lexaloffle.com/bbs/?tid=2897", label: "A viral game", point: [16, 82], obstacle: true },
        },
        //list of sprites to create in the room
        //sprites are rendered according to depth sort so they can appear above the avatars unlike the background
        //they can be animated, mouse reactive and trigger commands like the areas above
        things: {
            //sprite spreadsheets only 1 row ok?
            PopMachine: { file: "liff-popcorn.png",frames: 11, frameDelay: 10, position: [1, 84], visible: true},
            MicStand: { file: "liff-lobby-mic.png", position: [150, 100], visible: true},
            barperson1: { file: "medewerker1.png", frames: 1, frameDelay: 10, position: [47, 180], label: "Waiter" },
            barperson2: { file: "medewerker3.png", frames: 1, frameDelay: 10, position: [13, 150], label: "Waiter" },
            barperson3: { file: "medewerker4.png", frames: 1, frameDelay: 10, position: [39, 144], label: "Waiter" },
            lobbyperson1: { file: "medewerker2.png", frames: 1, frameDelay: 10, position: [10, 70], label: "Festival Attendant" },
            lobbyperson2: { file: "medewerker5.png", frames: 1, frameDelay: 10, position: [200, 37], label: "Festival Attendant"},
        }
    },


    likelikeBitsy: {
        //the background graphics, it can be a spreadsheet
        bg: "likelike-bg.png",
        //if spreadsheet frames
        frames: 2,
        //if animated, animation speed in refreshes (frame dependent)
        frameDelay: 30,
        //normally 2, avatars can be scaled to simulate camera distance
        avatarScale: 2,
        //a shade to tint the avatars to simulate light color, #FFFFFF normal
        tint: "#fa84af",
        //the html body color can be changed
        pageBg: "#6a2545",
        //minimum height for the speech bubbles
        bubblesY: 50,
        //if spawning directly in this room, top left and bottom right point defining the rectangular spawn area (random within it)
        spawn: [84, 92, 121, 99],
        //graphics with active areas Sierra Online adventures style
        //color coded as below, #FFFFFF is walkable, transparent is obstacle
        area: "likelike-areas.png",
        //each color can trigger a command, the destination needs to be reached first
        //the "h" is replaced by # to identify color
        areaColors: {
            //enter command changes room
            //room: id of the room to enter
            //label: what to display on rollover
            //point: where to walk after click
            //enterPoint: where to spawn in the next room
            //obstacle: is the area walkable
            hffec27: { cmd: "enter", room: "LIFFTheater1", label: "Theater Room 1", point: [6, 88], enterPoint: [116, 69], obstacle: false },
            h00e436: { cmd: "enter", room: "LIFFOutside", label: "Outside", point: [102, 98], enterPoint: [103, 84], obstacle: false },
            //text displays a text only on the client
            //txt: the text
            //align: center or left
            //lines: manual number of lines, p5 doesn't understand line breaks
            //url: uptionally open a page on click
            hff004d: { cmd: "text", txt: "OUR DAMNED MACHINE\nby Sophie Houlden, 2018\nClick on the frame to start.\nWASD or Arrow keys to move.", align: "left", lines: 4, url: "https://sophieh.itch.io/our-damned-machine", label: "A dystopian game", point: [34, 78], obstacle: true },
            hff77a8: { cmd: "text", txt: "CONTINENTAL DRIFT\nby Cecile Richard, 2019\nWASD or Arrow keys to move.\nClick to play.", align: "left", lines: 4, url: "https://haraiva.itch.io/continental-drift", label: "An intimate game", point: [64, 78], obstacle: true },
            hffccaa: { cmd: "text", txt: "SPIRAL HOUSE\nby Withering Systems (Everest Pipkin and Loren Schmidt), 2018\nWASD or Arrow keys to move.\nClick to play.", align: "left", lines: 5, url: "https://withering-systems.itch.io/spiral-house", label: "An abstract game", point: [92, 78], obstacle: true },
            hab5236: { cmd: "text", txt: "ALMANAC OF GIRLSWAMPWAR TERRITORY\nby porpentine charity heartscape, 2018\nWASD or Arrow keys to move.\nClick to play.", align: "left", lines: 5, url: "https://porpentine.itch.io/almanac", label: "A mutant game", point: [110, 82], obstacle: true },
            h83769c: { cmd: "text", txt: "MOSS AS TEXTURE AS SPACE\nFOLDING ONTO ITSELF\nby Pol Clarissou, 2019\nWASD or Arrow keys to move.\nClick to play.", align: "left", lines: 5, url: "https://polclarissou.itch.io/moss-as-texture-as-space-folding-onto-itself", label: "A mossy game", point: [16, 82], obstacle: true },
            hffa300: { cmd: "text", txt: "LIKELIKE\npresents:\nAn Itsy Bitsy Crisis\nCatastrophes and Rebirths in Bitsy", align: "center", lines: 4, label: "Wall text", point: [119, 95], obstacle: false }
        },
        //list of sprites to create in the room
        //sprites are rendered according to depth sort so they can appear above the avatars unlike the background
        //they can be animated, mouse reactive and trigger commands like the areas above
        things: {
            //sprite spreadsheets only 1 row ok?
            cabinet: { file: "top-cabinet.png", frames: 1, frameDelay: 1, position: [24, 89], label: "A time traveling game", command: { cmd: "text", txt: "THE LAST HUMAN TOUCH\nby Cephalopodunk, 2018\nWASD or Arrow keys to move.\nClick to play.", align: "left", lines: 4, url: "https://cephalopodunk.itch.io/the-last-human-touch", label: "A time traveling game", point: [33, 92] } }
        }
    },

    LIFFOutside: {
        bg: "likelike-outside-omoma.png",
        frames: 4,
        frameDelay: 20,
        avatarScale: 2,
        pageBg: "#011221",
        area: "likelikeOutside-areas.png",
        //tint: "#fdeac8",
        tint: "#B7B4F1",
        bubblesY: 44,
        spawn: [94, 166, 163, 199],
        //music: "outsideliff.mp3",
        areaColors: {
            //h will be replaced by #
            hff77a8: { cmd: "enter", room: "LIFFLobby", label: "Enter LIFF", point: [128, 120], enterPoint: [130, 193], obstacle: false },
            h7fffb8: { cmd: "text", label: "Festival Attendant", txt: "Welcome to Leiden International Film Festival!", align: "center", lines: 1, point: [117, 145] },
        },
        things: {
            greeter: { file: "museumGuard.png", frames: 17, frameDelay: 10, position: [105, 125]/ label: "Greeter" }

        }
    },

    LIFFTheater1: {
        bg: "LIFFTheater1.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        area: "likelike-backyard-areas.png",
        tint: "#3F2F2D",
        pageBg: "#170102",
        bubblesY: 20,
        spawn: [116, 173, 138, 191],
        areaColors: {
            //h will be replaced by #
            hff77a8: { cmd: "enter", room: "LIFFLobby", label: "Main Hall", point: [126, 192], enterPoint: [39, 90], obstacle: false },
        },
        things: {
            //spreadsheets only 1 row ok?
            Chair: { file: "LIFFtheater1_ChairsRow.png", frames: 1, frameDelay: 30, position: [1, 170],},
            Chair1: { file: "LIFFtheater1_ChairsRow.png", frames: 1, frameDelay: 30, position: [1, 155],},
            Chair2: { file: "LIFFtheater1_ChairsRow.png", frames: 1, frameDelay: 30, position: [1, 140],},
            Chair3: { file: "LIFFtheater1_ChairsRow.png", frames: 1, frameDelay: 30, position: [1, 125],},
            Chair4: { file: "LIFFtheater1_ChairsRow.png", frames: 1, frameDelay: 30, position: [1, 110],},

        }
    },

    PhotoBooth: {
        bg: "photobooth_liff.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 16,
        area: "photobooth_liff_area.png",
        tint: "#fdbe4e",
        pageBg: "#021213",
        bubblesY: 50,
        spawn: [38, 63, 108, 83],
        areaColors: {
            //h will be replaced by #
            h0ddee3: { cmd: "enter", room: "LIFFLobby", label: "Main Hall", point: [180, 194], enterPoint: [92, 116], obstacle: false },
        },
        things: {
            //spreadsheets only 1 row ok?
            

        }
    },

    //just an empty room for testing mods
    experiments: {

        bg: "experiments-bg.png",
        avatarScale: 2,
        pageBg: "#bfaeae",
        area: "experiments-areas.png",
        tint: "#FFFFFF",
        bubblesY: 50,
        spawn: [15, 77, 113, 96]

    },

    LIFFTheater2: {
        bg: "LIFFtheater2.png",
        avatarScale: 2,
        pageBg: "#120906",
        area: "LIFFtheater2_areasv2.png",
        tint: "#1E1D25",
        bubblesY: 10,
        spawn: [106, 178, 150, 193],
        areaColors: {
            hffec27: { cmd: "enter", room: "LIFFLobby", label: "Main Hall", point: [126, 197], enterPoint: [226, 55], obstacle: false },
            
        },
        things: {
            //sprite spreadsheets only 1 row ok?
            sculpture1: { file: "sculpture1.png", position: [70, 22], visible: false },
            sculpture2: { file: "sculpture2.png", position: [70, 22], visible: false },
            sculpture3: { file: "sculpture3.png", position: [70, 22], visible: false },
            sculpture4: { file: "sculpture4.png", position: [70, 22], frames: 4, frameDelay: 10, visible: false },
            ShortMovie: { file: "LIFFtheater2_movie.png", position: [91, 20], frames: 98, frameDelay: 55, visible: true},

             //front left to right
            Chair: { file: "LIFFtheater2_Chair.png", position: [82, 130], visible: true},
            Chair1: { file: "LIFFtheater2_Chair.png", position: [92, 131], visible: true},
            Chair3: { file: "LIFFtheater2_Chair.png", position: [105, 131], visible: true},
            Chair4: { file: "LIFFtheater2_Chair.png", position: [140, 130], visible: true},
            Chair5: { file: "LIFFtheater2_Chair.png", position: [150, 130], visible: true},
            Chair6: { file: "LIFFtheater2_Chair.png", position: [161, 129], visible: true},
            //back left to right
            Chair7: { file: "LIFFtheater2_Chair.png", position: [87, 150], visible: true},
            Chair8: { file: "LIFFtheater2_Chair.png", position: [98, 150], visible: true},
            Chair9: { file: "LIFFtheater2_Chair.png", position: [111, 155], visible: true},
            Chair10: { file: "LIFFtheater2_Chair.png", position: [146, 150], visible: true},
            Chair11: { file: "LIFFtheater2_Chair.png", position: [157, 150], visible: true},
            Chair12: { file: "LIFFtheater2_Chair.png", position: [170, 148], visible: true},
        }
    },

    secondFloor: {

        bg: "secondFloor.png",
        avatarScale: 2,
        pageBg: "#e1cdcd",
        area: "secondFloor-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //left
            hffec27: { cmd: "enter", room: "censorshipRoom", label: "Censorship Room", point: [10, 86], enterPoint: [114, 86], obstacle: false },
            //right
            h00e436: { cmd: "enter", room: "rhymeRoom", label: "Rhyme Room", point: [117, 86], enterPoint: [12, 86], obstacle: false },
            //down
            hff77a8: { cmd: "enter", room: "firstFloor", label: "1st Floor", point: [99, 73], enterPoint: [30, 73], obstacle: false },
            //up
            h29adff: { cmd: "enter", room: "thirdFloor", label: "3rd Floor", point: [30, 73], enterPoint: [99, 73], obstacle: false },

        },
    },

    thirdFloor: {

        bg: "thirdFloor.png",
        avatarScale: 2,
        pageBg: "#e1cdcd",
        area: "secondFloor-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {

            //left
            hffec27: { cmd: "enter", room: "darkRoom", label: "Dark Room", point: [10, 86], enterPoint: [114, 86], obstacle: false },

            //right
            h00e436: { cmd: "enter", room: "familyRoom", label: "Family Room", point: [117, 86], enterPoint: [10, 77], obstacle: false },

            //VIP
            h29adff: { cmd: "enter", room: "VIPRoom", label: "VIP Room", point: [30, 73], enterPoint: [64, 79], obstacle: false },

            //down
            hff77a8: { cmd: "enter", room: "secondFloor", label: "2nd Floor", point: [99, 73], enterPoint: [30, 73], obstacle: false },
        },

    },

    cnsnntrm: {
        bg: "leftRoom.png",
        avatarScale: 2,
        pageBg: "#e1cdcd",
        area: "leftRoom-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //right
            h00e436: { cmd: "enter", room: "firstFloor", label: "Hall", point: [117, 86], enterPoint: [12, 86], obstacle: false },
        },
        things: {
            //sprite spreadsheets only 1 row ok?
            guard: { file: "museumGuard.png", frames: 1, frameDelay: 30, position: [13, 56], label: "Museum guard" }
        }

    },


    mirrorRoom: {
        bg: "rightRoom.png",
        avatarScale: 2,
        pageBg: "#e1cdcd",
        area: "rightRoom-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //left
            hffec27: { cmd: "enter", room: "firstFloor", label: "Hall", point: [10, 86], enterPoint: [114, 86], obstacle: false },
        }

    },

    censorshipRoom: {
        bg: "leftRoom.png",
        avatarScale: 2,
        pageBg: "#e1cdcd",
        area: "censorshipRoom-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //right
            h00e436: { cmd: "enter", room: "secondFloor", label: "Hall", point: [117, 86], enterPoint: [12, 86], obstacle: false },

        },
        things: {
            //sprite spreadsheets only 1 row ok?
            elephant: { file: "elephant-no-outline.png", frames: 4, frameDelay: 30, position: [42, 51] }
        }
    },

    rhymeRoom: {
        bg: "speaker-room.png",
        avatarScale: 2,
        frames: 3,
        frameDelay: 10,
        pageBg: "#e1cdcd",
        area: "rightRoom-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //left
            hffec27: { cmd: "enter", room: "secondFloor", label: "Hall", point: [10, 86], enterPoint: [114, 86], obstacle: false },

        }

    },

    darkRoom: {
        bg: "darkRoom.png",
        avatarScale: 2,
        frames: 3,
        frameDelay: 10,
        pageBg: "#221c17",
        area: "leftRoom-areas.png",
        tint: "#342c24",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //right
            h00e436: { cmd: "enter", room: "thirdFloor", label: "Hall", point: [117, 86], enterPoint: [12, 86], obstacle: false },

        }

    },

    familyRoom: {
        bg: "familyRoom-bg.png",
        avatarScale: 2,
        pageBg: "#6a2545",
        area: "familyRoom-areas.png",
        tint: "#f7e9e9",
        bubblesY: 40,
        secret: false,
        spawn: [12, 70, 16, 90],
        areaColors: {
            //left door
            hffec27: { cmd: "enter", room: "thirdFloor", label: "Hall", point: [10, 77], enterPoint: [114, 86], obstacle: false },
            hffccaa: { cmd: "text", label: "Book", txt: "Fifty Shades of Grey", align: "center", lines: 1, point: [16, 61] },
            hff77a8: { cmd: "text", label: "Book", txt: "Fifty Shades Darker", align: "center", lines: 1, point: [16, 61] },
            hff9d81: { cmd: "text", label: "Book", txt: "Fifty Shades Freed", align: "center", lines: 1, point: [16, 61] },
            //action requires a custom listener in the serverMod listening to actionId
            hff6c24: { cmd: "action", actionId: "TVInteract", label: "TV", point: [39, 69], obstacle: false },
            h008751: { cmd: "text", label: "Picture", txt: "Family at Disneyworld", align: "center", lines: 1, point: [52, 61] },
            ha8e72e: { cmd: "text", label: "Picture", txt: "Wedding picture", align: "center", lines: 1, point: [57, 61] },
            h00e436: { cmd: "text", label: "?", txt: "A short red hair", align: "center", lines: 1, point: [8, 90], obstacle: false },
            h29adff: { cmd: "text", label: "?", txt: "Female underwear", align: "center", lines: 1, point: [113, 62] },
            hff004d: { cmd: "text", label: "Plant", txt: "It's in bad shape", align: "center", lines: 1, point: [26, 61] },
        },
        things: {
            //sprite spreadsheets only 1 row ok?
            couch2: { file: "familyRoom-couch2.png", position: [53, 54] },
            couch1: { file: "familyRoom-couch1.png", position: [26, 63] },
            table: { file: "familyRoom-table.png", position: [81, 74] },
            TV: { file: "tv.png", id: "TV", position: [33, 45], frames: 13, frameDelay: 60, visible: false },
        }

    },

    VIPRoom: {
        bg: "VIPRoom-bg.png",
        avatarScale: 2,
        pageBg: "#742f29",
        area: "VIPRoom-areas.png",
        tint: "#f7cdba",
        bubblesY: 40,
        secret: true,
        spawn: [56, 76, 69, 80],
        //music: "smoothCrap.ogg",
        musicVolume: 0.5,
        areaColors: {
            //right
            hff004d: { cmd: "text", label: "Painting", txt: "An original Rothko?", align: "center", lines: 1, point: [27, 65], obstacle: false },
            h00e436: { cmd: "text", label: "Window", txt: "Can you see the incline from here?", align: "center", lines: 1, point: [33, 59], obstacle: false },
            hffec27: { cmd: "text", label: "Window", txt: "The Paris of Appalachia", align: "center", lines: 1, point: [53, 59], obstacle: false },
            h29adff: { cmd: "text", label: "Window", txt: "Ah... the city of bridges!", align: "center", lines: 1, point: [73, 59], obstacle: false },
            hff6c24: { cmd: "text", label: "Window", txt: "Gentrification is beautiful", align: "center", lines: 1, point: [83, 59], obstacle: false },
            hffccaa: { cmd: "text", label: "Cocktail", txt: "*You drink an Old fashioned*", align: "center", lines: 1, point: [45, 76], obstacle: false },
            hff77a8: { cmd: "text", label: "Champagne", txt: "It's a magnum bottle", align: "center", lines: 1, point: [38, 76], obstacle: false },
            hb7250b: { cmd: "text", label: "Caviar tartines", txt: "*You eat a tartine*", align: "center", lines: 1, point: [31, 76], obstacle: false },
            hab5236: { cmd: "text", label: "Chocolate fountain", txt: "A little bit tacky", align: "center", lines: 1, point: [24, 76], obstacle: false },
            h065ab5: { cmd: "enter", room: "thirdFloor", label: "Hall", point: [64, 79], enterPoint: [30, 73], obstacle: false }
        },
        things: {
            //sprite spreadsheets only 1 row ok?
            VIPSeats: { file: "VIP-seats.png", position: [43, 56] },
            VIPTable: { file: "VIP-table.png", position: [20, 65] },
            VIPCouch: { file: "VIP-couch.png", position: [87, 68] },
        }

    },

};
