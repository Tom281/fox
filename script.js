if(!isMobile()) {
    contentHeight = 1244;
} else {
    contentHeight = 600;
}
const contentHeight = 1244;
let popUpShown = false;
const popUp = document.getElementById("subscribe-popup");
const otherContent = document.getElementById("everything-else");
let scrollY = window.scrollY;
// Called periodically to check the page position and adapt the pop up if necesarry.
setInterval(check, 50);
function check() {
    scrollY = window.scrollY;
    if(popUpShown && scrollY < contentHeight){
        togglePopup();
    } else if(!popUpShown && scrollY >= contentHeight) {
        togglePopup();
    }
}
function togglePopup() {
    if(popUpShown) {
        popUpShown = false;
        popUp.style.display = 'none';
        otherContent.style.filter = 'none'
    } else {
        popUpShown = true;
        popUp.style.display = 'flex';
        otherContent.style.filter = 'blur(7px)'
    }
}
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}