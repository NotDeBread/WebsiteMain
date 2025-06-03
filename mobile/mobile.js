let aboutMeExpanded = false
//Not the most optimised thing ever but i really dont care
function expandAboutMe() {
    if(aboutMeExpanded) {
        // doge('aboutMeContainer').style.height = '150px'
        doge('aboutMe1').style.opacity = 0
        setTimeout(() => {
            doge('aboutMe1').style.height = 0
            doge('aboutMe1').style.pointerEvents = 'none'
            
            doge('aboutMe0').style.height = 'unset'
            doge('aboutMe0').style.opacity = 1
            doge('aboutMe0').style.pointerEvents = 'unset'
        }, 500);

        doge('learnMoreText').innerText = 'Learn more...'
    } else {
        // doge('aboutMeContainer').style.height = '900px'
        doge('aboutMe0').style.opacity = 0
        setTimeout(() => {
            doge('aboutMe0').style.height = 0
            doge('aboutMe0').style.pointerEvents = 'none'
            
            doge('aboutMe1').style.height = 'unset'
            doge('aboutMe1').style.opacity = 1
            doge('aboutMe1').style.pointerEvents = 'unset'
        }, 500);

        doge('learnMoreText').innerText = 'Learn less...'
    }
    aboutMeExpanded = !aboutMeExpanded
}