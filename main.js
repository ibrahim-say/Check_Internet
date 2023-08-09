let msg=document.querySelector("h2")
window.onload=function(){
    if(window.navigator.onLine){
        online()

    }
    else{
        offline()

    }
}

window.ononline=function(){
    online()

}
window.onoffline=function(){
    offline()


}

function online(){
    msg.innerHTML="Online"
    msg.style.color="green"
}
function offline(){
    msg.innerHTML="Offline"
    msg.style.color="red"
}

