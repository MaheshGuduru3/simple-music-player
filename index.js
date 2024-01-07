console.log("Welcome to the music player")

const arrSongs = [
    {
         id : 1,
         audio : './audio/aurora.mp3',
         title : 'aurora',
         image : './images/aurora.jpg',
         author: "k-391"
    },
    {
        id : 2,
        audio : './audio/faded.mp3',
        title : 'faded',
        image : './images/faded.jpg',
        author: "Alanwalker"
   },
   {
    id : 3,
    audio : './audio/hayoda.mp3',
    title : 'hayyoda',
    image : './images/hayyoda.jpg',
    author: "anirudh"
    },
    {
        id : 4,
        audio : './audio/good.mp3',
        title : 'Im good',
        image : './images/good.jpg',
        author: "David"
    },
    {
        id : 5,
        audio : './audio/mandala.mp3',
        title : 'mandala',
        image : './images/mandala.jpg',
        author: "Psytrance"
    },
]





let groupSong = ''

arrSongs.map((itm)=>{
      groupSong += `
         
      <div class="album">
        <img  src=${itm.image} width="100" />
        <div class="album-inner">
            
            <h4>${itm.title}</h4>
            <h5>By ${itm.author}</h5>
        
        </div>
        <div class="play-icon">
            <i class="fa-solid fa-play"></i>                              </div>
     </div>   
      `

})

let count = 0

const allSongsTagLoop = document.querySelector('.all-songs')
allSongsTagLoop.innerHTML = groupSong



const albumTag = document.querySelectorAll('.album')
const playTag = document.querySelectorAll('.play-icon')
const audioTag = document.querySelector('audio')
const footerPlay = document.querySelector('.footer-play')
const footerIconPlayAndPause = document.querySelector('.foot-play-icon') 
const footerImageIcon = document.querySelector('.footer-image-icon')
const volumeChangeBar = document.querySelector('.volume-bar')
const searchingSong = document.querySelector('.searchbar') 
const forwardTag = document.querySelector('.forward')
const backwardTag = document.querySelector('.backward')
const lefttimeTag = document.querySelector('.left-time')
const righttimeTag = document.querySelector('.right-time')




forwardTag.addEventListener('click' , (e)=>{
    if(count < arrSongs.length-1){
        count++
        footerImageIcon.src = arrSongs[count].image
        audioTag.src = arrSongs[count].audio
        audioTag.play()
        footerIconPlayAndPause.classList.replace('fa-play','fa-pause')
        tooglePlayandPause = false 
    }
    if(count === arrSongs.length-1){
        return  count = -1
    }
})

backwardTag.addEventListener('click' , ()=>{
    if(count === 0){
        footerImageIcon.src = arrSongs[count].image
        audioTag.src = arrSongs[count].audio
        audioTag.play()
        footerIconPlayAndPause.classList.replace('fa-play','fa-pause')
        tooglePlayandPause = false 
    }
    else{
        count--
        footerImageIcon.src = arrSongs[count].image
        audioTag.src = arrSongs[count].audio
        audioTag.play()
        footerIconPlayAndPause.classList.replace('fa-play','fa-pause')
        tooglePlayandPause = false 
    }  
})




for(let i=0; i<albumTag.length; i++){
    albumTag[i].addEventListener('mouseenter' , ()=>{
        playTag[i].style.display = 'block'
    })
}

for(let i=0; i<albumTag.length; i++){
    albumTag[i].addEventListener('mouseleave' , ()=>{
        playTag[i].style.display = 'none'
    })
}




let tooglePlayandPause = true
footerPlay.addEventListener('click', ()=>{
    if(tooglePlayandPause){
        footerIconPlayAndPause.classList.replace('fa-play','fa-pause')
        audioTag.play()
        tooglePlayandPause = false
    }
    else{
        footerIconPlayAndPause.classList.replace('fa-pause','fa-play')
        audioTag.pause()
        tooglePlayandPause = true
    }
})

for(let i=0; i<albumTag.length; i++){
    albumTag[i].addEventListener('click' , (e)=>{
        footerImageIcon.src = arrSongs[i].image
        audioTag.src = arrSongs[i].audio
        audioTag.play()
        
        footerIconPlayAndPause.classList.replace('fa-play','fa-pause')
        tooglePlayandPause = false
    })
}

addEventListener('keyup' ,(e)=>{
    console.log(e.code)
    if(e.code === "ArrowRight"){
        if(count < arrSongs.length-1){
            count++
            footerImageIcon.src = arrSongs[count].image
            audioTag.src = arrSongs[count].audio
            audioTag.play()
            footerIconPlayAndPause.classList.replace('fa-play','fa-pause')
            tooglePlayandPause = false 
        }
        if(count === arrSongs.length-1){
            return  count = -1
        }
    }
    
    if(e.code === "ArrowLeft"){
        if(count === 0){
            footerImageIcon.src = arrSongs[count].image
            audioTag.src = arrSongs[count].audio
            audioTag.play()
            footerIconPlayAndPause.classList.replace('fa-play','fa-pause')
            tooglePlayandPause = false 
        }
        else{
            count--
            footerImageIcon.src = arrSongs[count].image
            audioTag.src = arrSongs[count].audio
            audioTag.play()
            footerIconPlayAndPause.classList.replace('fa-play','fa-pause')
            tooglePlayandPause = false 
        } 
    }
    
    if(e.code === 'Space'){
        if(tooglePlayandPause){
            footerIconPlayAndPause.classList.replace('fa-play','fa-pause')
            audioTag.play()
            tooglePlayandPause = false
        }
        else{
            footerIconPlayAndPause.classList.replace('fa-pause','fa-play')
            audioTag.pause()
            tooglePlayandPause = true
        }
    }
})

volumeChangeBar.addEventListener('change' , (e)=>{
    audioTag.volume = e.target.value
})

audioTag.addEventListener('timeupdate',(e)=>{
    let currentAudioTime = e.srcElement.currentTime
    let durationAudioTime = e.srcElement.duration
    let progressScroll = (currentAudioTime/durationAudioTime) * 100
    
    if(currentAudioTime === durationAudioTime){

        footerIconPlayAndPause.classList.replace('fa-pause','fa-play')
        audioTag.pause()
        
        if(count === arrSongs.length-1) return audioTag.pause()
        count = count + 1
     }     

   let totalSeconds = Math.floor(durationAudioTime % 60)
   let totalMinutes = Math.floor(durationAudioTime / 60) % 60
   
   
   let currentSeconds = Math.floor(currentAudioTime % 60)
   let currentMinutes = Math.floor(currentAudioTime / 60) % 60
   
   document.querySelector('.progress').style.width = `${progressScroll}%`
   lefttimeTag.innerText = `${currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes} : ${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`
   righttimeTag.innerText = `${totalMinutes < 10 ? `0${totalMinutes}` : totalMinutes} : ${totalSeconds < 10 ? `0${totalSeconds}`: totalSeconds}`
})

document.querySelector('.progress-bar').addEventListener('click',(e)=>{
    
})

