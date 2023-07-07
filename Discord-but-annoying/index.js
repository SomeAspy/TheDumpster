//ohno
//TODO: Blowjobs
const { Plugin } = require('powercord/entities');
const { inject, uninject } = require('powercord/injector');
const { getModule } = require('powercord/webpack');

module.exports=class shitware extends Plugin{
    async startPlugin(){
        function randomInt(max){
            return Math.floor(Math.random()*max);
        }
        if(randomInt(20)===1){ //crash uwu
            (async ()=>{
                (await require('powercord/webpack').getModule(['process'])).remoteApp.relaunch()
            })()
        }
        if(randomInt(100)===1){//message logger prank broh
            //message logger icon code here
            pass;

        }

        if(randomInt(10)===1){
            document.addEventListener("click",function play() {
                const audio = new Audio('https://raw.githubusercontent.com/SomeAspy/Discord-but-annoying/main/sounds/croissant%20sound.mp3');
                audio.play();
            })
            
        }

        if(randomInt(20)===1){
            let uwu;//porno mode
            
            let audio;
            document.addEventListener("click",function play(){
                switch(randomInt(6)){
                    case 0:uwu="https://raw.githubusercontent.com/SomeAspy/Discord-but-annoying/main/sounds/sf_moan_01.mp3";break;
                    case 1:uwu="https://raw.githubusercontent.com/SomeAspy/Discord-but-annoying/main/sounds/SF-1moan.mp3";break;
                    case 2:uwu="https://raw.githubusercontent.com/SomeAspy/Discord-but-annoying/main/sounds/SF-breathe.mp3";break;
                    case 3:uwu="https://raw.githubusercontent.com/SomeAspy/Discord-but-annoying/main/sounds/SF-moan-female.mp3";break;
                    case 4:uwu="https://raw.githubusercontent.com/SomeAspy/Discord-but-annoying/main/sounds/SF-humm.mp3";break;
                    case 5:uwu="https://raw.githubusercontent.com/SomeAspy/Discord-but-annoying/main/sounds/SF-huum.mp3";break;
                    case 6:uwu="https://raw.githubusercontent.com/SomeAspy/Discord-but-annoying/main/sounds/SF-ok.mp3";break;
                }
                console.log(uwu)
                audio=new Audio(uwu)
                audio.play();
            })         
        }
    }
}