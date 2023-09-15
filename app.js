var isGameSelected = false
var canScroll = true
var isAnimationInProgress = false

var selectedGame
var selectedGameDescription
var selectedGameFeatures
var selectedGameVideo
var selectedGameScreenshot

var currentDescription
var currentFeatures
var currentGameVideo

function SelectedProject(element) {

    switch (element) {
        case "vrooom":
            VRooom();
            break;
        case "paperboy":
            Paperboy();
            break;
        case "basketball":
            Basketball();
            break;
        case "shootingrange":
            ShootingRange();
            break;
        case "fantasyGame":
            FantasyGame();
            break;
        case "homerunderby":
            HomeRunDerby();
            break;
        case "UniversalPostalService":
            UniversalPostalService();
            break;
        case "EndlessRider":
            EndlessRider();
            break;
        case "Goku":
            Goku();
            break;
    }
}

function VRooom() {
    selectedGameDescription = "A Prototype game demo. You ride a motorcycle trying to catch the target while dodging obstacles and killing enemies along the way."
    selectedGameFeatures = "&#8226; A Complete Game Demo<br> &#8226; Enemy AI<br> &#8226; Locomotion and Shooting<br> &#8226; AI Voiced and Sound effects<br> &#8226; Gives score at the end"
    selectedGameVideo.src = "https://www.youtube.com/embed/2s_Qo7HsI34?si=k5t_z63EPi-GLeiu&autoplay=1";
    selectedGameScreenshot = "images/vrooom.PNG"
}

function Paperboy() {
    selectedGameDescription = "A prototype of trying to reimagine what the super nintendo Paperboy video game would be like in VR."
    selectedGameFeatures = "&#8226; Endless Runner<br> &#8226; Throw Physics<br> &#8226; Crash Colliders<br> &#8226; Auto Locomotion<br> &#8226; Newspaper Pickups"
    selectedGameVideo.src = "https://www.youtube.com/embed/xqd98OXwVJg?si=COo5asq5uyCeQ4YO&autoplay=1";
    selectedGameScreenshot = "images/paperboy-bg.PNG"
}

function Basketball() {
    selectedGameDescription = "A prototype basketball game aim for the Meta Quest. This demo is of the practice mode."
    selectedGameFeatures = "&#8226; Muiltiplayer with Full body avatar<br> &#8226; Replay System<br> &#8226; Dunking<br> &#8226; Shooting<br> &#8226; Passing"
    selectedGameVideo.src = "https://www.youtube.com/embed/CxW2mpa8b2I?si=Mwqh7AQhuE6_dQ9c&autoplay=1";
    selectedGameScreenshot = "images/basketball-bg.PNG"
}

function ShootingRange() {
    selectedGameDescription = "A shooting range prototype with 3 diffrent guns. There are easy, normal, and hard difficulties."
    selectedGameFeatures = "&#8226; 3 Weapons (pistol, assault rifle, harpoon gun)<br> &#8226; Difficulty selection (easy, medium, hard)<br> &#8226; Rates your performance<br> &#8226; Moving and static targets<br> &#8226; Manual Reload"
    selectedGameVideo.src = "https://www.youtube.com/embed/MSwHTF5vR0Q?si=PE9dWdIvGKWstm9Z&autoplay=1";
    selectedGameScreenshot = "images/shootingRange.PNG"
}

function FantasyGame() {
    selectedGameDescription = "A Fantasy RPG four player multiplayer game. Demo includes upgradable spells and weapons."
    selectedGameFeatures = "&#8226; 4 player Multiplayer with voice chat<br> &#8226; AI enemies<br> &#8226; Over 20 weapons/spells<br> &#8226; Destructable Objects<br> &#8226; Using Final IK"
    selectedGameVideo.src = "https://www.youtube.com/embed/x6F2kIS-Oe8";
    selectedGameScreenshot = "images/fantasyGame.PNG"
}

function HomeRunDerby() {
    selectedGameDescription = "An Arcade-y take on Homerun Derby, complete with sounds and music that’ll take you back to the ball game."
    selectedGameFeatures = "&#8226; Final IK<br> &#8226; Physics based<br> &#8226; Full body avatar used for jumbotron<br> &#8226; Instant replay system"
    selectedGameVideo.src = "https://www.youtube.com/embed/_TSFUjgy-8k?si=tCPbkTt5LH7IdScu&autoplay=1";
    selectedGameScreenshot = "images/homerun-derby.jpg"
}

function UniversalPostalService() {
    selectedGameDescription = "Universal Postal Service is a narrative-based game in which the player embodies a newly hired employee for a package delivery company."
    selectedGameFeatures = "&#8226; Final IK<br> &#8226; Physics based interactions<br> &#8226; Branching narrative structure, choose your own adventure style"
    selectedGameVideo.src = "https://www.youtube.com/embed/mXoeoFv39Po?si=dSkmIuAocxpEwBgq&autoplay=1";
    selectedGameScreenshot = "images/UniversalPostalService.jpg"
}

function EndlessRider() {
    selectedGameDescription = "Endless Rider is a fast paced arcade style game. The player rides a speedy bike around large obstacles in an attempt to beat the longest distance."
    selectedGameFeatures = "&#8226; Final IK<br> &#8226; Procedural level generation, endless<br> &#8226; Pod racer based turning"
    selectedGameVideo.src = "https://www.youtube.com/embed/e9Hliu3TBIA?si=cD7hNgyLmXOJgvVY&autoplay=1";
    selectedGameScreenshot = "images/EndlessRider.jpg"
}

function Goku() {
    selectedGameDescription = "Control Goku shooting small and large energy beams at a destructible wall using hand movement instead of buttons."
    selectedGameFeatures = "&#8226; Final IK<br> &#8226; Uses hand movements as input instead of button presses<br> &#8226; Based off of DBZ VR experience in Tokyo<br> &#8226; Charge mechanic effects size of beam"
    selectedGameVideo.src = "https://www.youtube.com/embed/_NKywj2mtyo?si=3_YILjYLuJCQxEI7&autoplay=1";
    selectedGameScreenshot = "images/goku.jpeg"
}

function SelectedGame(game) {
    if (!isGameSelected && !isAnimationInProgress && game.id === "game-4") {
        selectedGame = game
        var gameInfo = game.classList[0]
        var description = document.getElementById("game-3").children[2]
        var features = document.getElementById("game-5").children[1]
        var video = document.getElementById("game-4").children[3]

        document.getElementById("game-6").id = "game-6-moved"
        document.getElementById("game-5").id = "game-5-moved"
        game.style.width = "40%"
        document.getElementById("game-3").id = "game-3-moved"
        document.getElementById("game-2").id = "game-2-moved"

        currentDescription = document.getElementById("game-3-moved").getElementsByClassName("project-description")[0];
        currentFeatures = document.getElementById("game-5-moved").getElementsByClassName("project-features")[0];
        selectedGameVideo = document.getElementById("game-4").getElementsByClassName("video")[0];
        SelectedProject(gameInfo)
        currentDescription.innerHTML = selectedGameDescription
        currentFeatures.innerHTML = selectedGameFeatures

        description.classList.remove("makeDescriptionDisappear")
        void description.offsetWidth
        description.classList.add("makeDescriptionAppear")

        features.classList.remove("makeRightGameBlockBlackAppearReverse")
        void features.offsetWidth
        features.classList.add("makeRightGameBlockBlackAppear")

        document.getElementById("close-button").style.visibility = "visible"
        document.getElementById("close-button").style.top = "10.5%";

        isGameSelected = true
        canScroll = false
        isAnimationInProgress = true
        setTimeout(() => {
            isAnimationInProgress = false
            video.style.visibility = "visible"
            document.getElementById("active-screenshot").src = selectedGameScreenshot
        }, "1000")
    }
}

function CloseSelectedGame() {
    if (isGameSelected && !isAnimationInProgress && selectedGame.id === "game-4") {
        var description = document.getElementById("game-3-moved").children[2]
        var features = document.getElementById("game-5-moved").children[1]
        var video = document.getElementById("game-4").children[3]

        document.getElementById("game-6-moved").id = "game-6"
        document.getElementById("game-5-moved").id = "game-5"
        selectedGame.style.width = "18%"
        document.getElementById("game-3-moved").id = "game-3"
        document.getElementById("game-2-moved").id = "game-2"
        isAnimationInProgress = true

        description.classList.remove("makeDescriptionAppear")
        void description.offsetWidth
        description.classList.add("makeDescriptionDisappear")

        features.classList.remove("makeRightGameBlockBlackAppear")
        void features.offsetWidth
        features.classList.add("makeRightGameBlockBlackAppearReverse")

        document.getElementById("active-screenshot").src = "images/quest-app-page.jpg"

        video.style.visibility = "hidden"
        video.src = ""
        document.getElementById("close-button").style.top = "13.9%";
        document.getElementById("close-button").style.visibility = "hidden"

        setTimeout(() => {
            isAnimationInProgress = false
            isGameSelected = false
            canScroll = true
        }, "1000")
    }
}

window.addEventListener("wheel", event => {
    if (event.deltaY < 0 && canScroll && !isGameSelected) {
        canScroll = false;
        document.getElementById("game-8").id = "game-9"
        document.getElementById("game-7").id = "game-8"
        document.getElementById("game-6").id = "game-7"
        document.getElementById("game-5").id = "game-6"
        document.getElementById("game-4").id = "game-5"
        document.getElementById("game-3").id = "game-4"
        document.getElementById("game-2").id = "game-3"
        document.getElementById("game-1").id = "game-2"
        document.getElementById("game-0").id = "game-1"
        document.getElementById("game-9").id = "game-0"
        setTimeout(() => {
            canScroll = true
        }, "1000")
    }
    else if (event.deltaY > 0 && canScroll && !isGameSelected) {
        canScroll = false
        document.getElementById("game-0").id = "game-9"
        document.getElementById("game-1").id = "game-0"
        document.getElementById("game-2").id = "game-1"
        document.getElementById("game-3").id = "game-2"
        document.getElementById("game-4").id = "game-3"
        document.getElementById("game-5").id = "game-4"
        document.getElementById("game-6").id = "game-5"
        document.getElementById("game-7").id = "game-6"
        document.getElementById("game-8").id = "game-7"
        document.getElementById("game-9").id = "game-8"
        setTimeout(() => {
            canScroll = true
        }, "1000")
    }
});