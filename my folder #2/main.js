window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    var hieght = document.documentElement.scrollHeight - document.documentElement.clientHeight;


    var scrolled = (winScroll / hieght) * 100

    document.getElementById('progress-bar').style.width = scrolled + "%"

    console.log('winScroll: ' + winScroll)
    console.log('hieght: ' + hieght)
    console.log('scrolled: ' + scrolled)



}