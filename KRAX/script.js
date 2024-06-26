AOS.init()
let button = document.querySelector('.mode-button')
function toggle_mode() {
    let is_dark_mode = localStorage.getItem('dark_mode')

    if (is_dark_mode=='true'){is_dark_mode=false}
    else {is_dark_mode=true}

    localStorage.setItem('dark_mode', is_dark_mode)

    document.querySelector('header').classList.toggle('head-dark-mode',is_dark_mode)
    document.querySelector('main').classList.toggle('main-dark-mode',is_dark_mode)
    document.querySelector('footer').classList.toggle('footer-dark-mode',is_dark_mode)
    
    document.querySelectorAll('a').forEach(element => {
        element.classList.toggle('a-dark-mode',is_dark_mode)
    });
    
    document.querySelector('.mode-button').classList.toggle('mode-button-dark-mode',is_dark_mode)
    document.querySelector('.mode-button:active').classList.toggle('mode-button-dark-mode:active',is_dark_mode)
    document.querySelector('.mode-button:hover').classList.toggle('mode-button-dark-mode:hover',is_dark_mode)
    document.querySelector('a:hover').classList.toggle('a-dark-mode:hover',is_dark_mode)
    document.querySelector('a:active').classList.toggle('a-dark-mode:active',is_dark_mode)

}
button.addEventListener('click',toggle_mode)



function my_anime() {
    console.log('working///')
    anime(
        {   
            targets:'.rew1',
            duration:2000,
            scaleX:-1,
            // delay:100,
            // endDelay:100,
            complete: function() {
                anime({
                    // delay:1000,
                    targets:'.rew1',
                    duration:2000,
                    scaleX:1,
                    
                })
            }
        }
    )
    setTimeout(my_anime,1000)
}
my_anime()