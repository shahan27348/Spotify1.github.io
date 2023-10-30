console.log("Welcome to Spotify");

//Initialize th variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let audioElement1 = new Audio('2.mp3');
let audioElement2 = new Audio('3.mp3');
let audioElement3 = new Audio('4.mp3');
let audioElement4 = new Audio('5.mp3');
let audioElement5 = new Audio('6.mp3');
let audioElement6 = new Audio('7.mp3');
let audioElement7 = new Audio('8.mp3');
let masterPlay = document.getElementById('masterPlay');
let secondPlay = document.getElementById('secondPlay');
let thirdPlay = document.getElementById('thirdPlay');
let fourthPlay = document.getElementById('fourthPlay');
let fifthPlay = document.getElementById('fifthPlay');
let sixthPlay = document.getElementById('sixthPlay');
let seventhPlay = document.getElementById('seventhPlay');
let eighthPlay = document.getElementById('eighthPlay');
let gif = document.getElementById('gif');
let songs = [
    { songName: "Let Me Love You", filePath: "songs1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Let Me Love You", filePath: "songs2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Let Me Love You", filePath: "songs3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Let Me Love You", filePath: "songs4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Let Me Love You", filePath: "songs5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Let Me Love You", filePath: "songs6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Let Me Love You", filePath: "songs7.mp3", coverPath: "covers/7.jpg" },
]

// audioElement.play();

//handle play/puse click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }
});
 secondPlay.addEventListener('click', () => {
        if (audioElement1.paused || audioElement1.currentTime <= 0) {
            audioElement1.play();
            secondPlay.classList.remove('fa-play-circle');
            secondPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioElement1.pause();
            secondPlay.classList.remove('fa-pause-circle');
            secondPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
    
    
        }
        

})
thirdPlay.addEventListener('click', () => {
    if (audioElement2.paused || audioElement2.currentTime <= 0) {
        audioElement2.play();
        thirdPlay.classList.remove('fa-play-circle');
        thirdPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement2.pause();
        thirdPlay.classList.remove('fa-pause-circle');
        thirdPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }
    

})
fourthPlay.addEventListener('click', () => {
    if (audioElement3.paused || audioElement3.currentTime <= 0) {
        audioElement3.play();
        fourthPlay.classList.remove('fa-play-circle');
        fourthPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement3.pause();
        fourthPlay.classList.remove('fa-pause-circle');
        fourthPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }
    

})
fifthPlay.addEventListener('click', () => {
    if (audioElement4.paused || audioElement4.currentTime <= 0) {
        audioElement4.play();
        fifthPlay.classList.remove('fa-play-circle');
        fifthPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement4.pause();
        fifthPlay.classList.remove('fa-pause-circle');
        fifthPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }
    

})
sixthPlay.addEventListener('click', () => {
    if (audioElement5.paused || audioElement5.currentTime <= 0) {
        audioElement5.play();
        sixthPlay.classList.remove('fa-play-circle');
        sixthPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement5.pause();
        sixthPlay.classList.remove('fa-pause-circle');
        sixthPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }
    

})
seventhPlay.addEventListener('click', () => {
    if (audioElement6.paused || audioElement6.currentTime <= 0) {
        audioElement6.play();
        seventhPlay.classList.remove('fa-play-circle');
        seventhPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement6.pause();
        seventhPlay.classList.remove('fa-pause-circle');
        seventhPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }
    

})
eighthPlay.addEventListener('click', () => {
    if (audioElement7.paused || audioElement7.currentTime <= 0) {
        audioElement7.play();
        eighthPlay.classList.remove('fa-play-circle');
        eighthPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement7.pause();
        eighthPlay.classList.remove('fa-pause-circle');
        eighthPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }
    

})
// Listen to events
audioElement.addEventListener('timeupdate', () => {
    // update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value =progress
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value* audioElement.duration/100;
})
