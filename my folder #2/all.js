window.onload=function(){
    setTimeout(logo, 1000);
    setTimeout(menu1, 1000);
    setTimeout(indi, 1000);
    setTimeout(content, 1500);
}

function logo() {
    var h=document.querySelector('#logo h1');
    h.style.opacity='1';
}

function menu1() {
    var l=document.querySelectorAll('#menu1 li');
    var i;
    for(i=0; i<l.length; i++) {
        l[i].style.opacity='1';
        l[i].style.transform='translate(0)';
    }
}

function indi() {
    var l=document.querySelectorAll('#indi li');
    var i;
    for(i=0; i<l.length; i++) {
        l[i].style.opacity='1';
        l[i].style.transform='translate(0)';
    }
}

function content() {
    var he=document.querySelector('#content h1');
    he.style.opacity='1';
    he.style.transform='translate(0)';
    var p=document.querySelector('#content p');
    p.style.opacity='1';
    p.style.transform='translate(0)';
    var b=document.querySelector('#content button');
    b.style.opacity='1';
    b.style.transform='translate(0)';
}