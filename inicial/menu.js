var show = true

var menuSection = window.document.querySelector('.menu-section')
var menuToggle = menuSection.querySelector('.menu-toggle')

menuToggle.addEventListener('click', function(){
    document.getElementsByTagName('body')[0].style.overflow = show ?  'hidden' : 'initial'

    menuSection.classList.toggle('on', show)
    show = !show
})