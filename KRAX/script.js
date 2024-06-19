let button = document.querySelector('.mode-button')
function toggle_mode() {
    let is_dark_mode = localStorage.getItem('dark_mode')

    if (is_dark_mode=='true'){is_dark_mode=false}
    else {is_dark_mode=true}

    localStorage.setItem('dark_mode', is_dark_mode)

    document.querySelector('header').classList.toggle('head-dark-mode',is_dark_mode)
    document.querySelector('main').classList.toggle('main-dark-mode',is_dark_mode)
    document.querySelector('footer').classList.toggle('footer-dark-mode',is_dark_mode)

}
button.addEventListener('click',toggle_mode)