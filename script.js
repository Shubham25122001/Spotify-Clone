// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Jara Hat ke", filePath: "songs/song1.mp3", coverpath: "covers/img1.jpg"},
    {songName: "Dhiri dhiri nachna", filePath: "songs/song2.mp3", coverpath: "covers/img2.png"},
    {songName: "Dol song", filePath: "songs/song3.mp3", coverpath: "covers/img3.jpg"},
    {songName: "Dol bean song", filePath: "songs/song4.mp3", coverpath: "covers/img4.jpg"},
    {songName: "Ayi me to ayi Song", filePath: "songs/song5.mp3", coverpath: "covers/img5.jpg"},
    {songName: "Song music", filePath: "songs/song6.mp3", coverpath: "covers/img6.jpg"},
    {songName: "play the music", filePath: "songs/song7.mp3", coverpath: "covers/img7.jpg"},
    {songName: "Dil ka darvaza", filePath: "songs/song8.mp3", coverpath: "covers/img8.jpg"},
    {songName: "Salman Khan song", filePath: "songs/song9.mp3", coverpath: "covers/img9.jpg"},
    {songName: "Imran Hasmi song", filePath: "songs/song10.mp3", coverpath: "covers/img10.png"},
]  

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100; 
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('a-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/song${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex > 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/song${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/song${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});