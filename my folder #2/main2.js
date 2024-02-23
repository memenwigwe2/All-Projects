var prev = document.getElementById('previous')
var next = document.getElementById('next')

var arr = ['https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.1&permmsgid=msg-f:1715132854358903493&th=17cd603e6eaa0ac5&view=att&disp=safe&realattid=17cd603646069af990b3', 

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.2&permmsgid=msg-f:1715132854358903493&th=17cd603e6eaa0ac5&view=att&disp=safe&realattid=17cd60364982acc5f228',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.3&permmsgid=msg-f:1715132854358903493&th=17cd603e6eaa0ac5&view=att&disp=safe&realattid=17cd60364a921c9221f9',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.4&permmsgid=msg-f:1715132854358903493&th=17cd603e6eaa0ac5&view=att&disp=safe&realattid=17cd60364546e80d4852',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.5&permmsgid=msg-f:1715132854358903493&th=17cd603e6eaa0ac5&view=att&disp=safe&realattid=17cd6036449faa7b5df1',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.6&permmsgid=msg-f:1715132854358903493&th=17cd603e6eaa0ac5&view=att&disp=safe&realattid=17cd603648cc243ccee7',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.7&permmsgid=msg-f:1715132854358903493&th=17cd603e6eaa0ac5&view=att&disp=safe&realattid=17cd6036469b9c75a604', 

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.8&permmsgid=msg-f:1715132854358903493&th=17cd603e6eaa0ac5&view=att&disp=safe&realattid=17cd60364754ad1a0cc5',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.9&permmsgid=msg-f:1715132854358903493&th=17cd603e6eaa0ac5&view=att&disp=safe&realattid=17cd603648010d28e866',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.1&permmsgid=msg-f:1715134324961856709&th=17cd6194d56e4cc5&view=att&disp=safe&realattid=17cd6181b25c451c9a710',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.2&permmsgid=msg-f:1715134324961856709&th=17cd6194d56e4cc5&view=att&disp=safe&realattid=17cd6181b3884ae0be212',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.3&permmsgid=msg-f:1715134324961856709&th=17cd6194d56e4cc5&view=att&disp=safe&realattid=17cd6181b41a328e89d13',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.6&permmsgid=msg-f:1715134324961856709&th=17cd6194d56e4cc5&view=att&disp=safe&realattid=17cd6181b1b396274c1f',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.7&permmsgid=msg-f:1715134324961856709&th=17cd6194d56e4cc5&view=att&disp=safe&realattid=17cd6181afdf685fae8c',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.9&permmsgid=msg-f:1715134324961856709&th=17cd6194d56e4cc5&view=att&disp=safe&realattid=17cd6181ad9568d12dd9',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.10&permmsgid=msg-f:1715134324961856709&th=17cd6194d56e4cc5&view=att&disp=safe&realattid=17cd6181af2fd7ca6e8b',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.13&permmsgid=msg-f:1715134324961856709&th=17cd6194d56e4cc5&view=att&disp=safe&realattid=17cd6181ac18cc182c67',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.14&permmsgid=msg-f:1715134324961856709&th=17cd6194d56e4cc5&view=att&disp=safe&realattid=17cd6181b06ae152f2cd',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.17&permmsgid=msg-f:1715134324961856709&th=17cd6194d56e4cc5&view=att&disp=safe&realattid=17cd6181ab59456f38a6',

'https://mail.google.com/mail/u/0?ui=2&ik=387e58dd16&attid=0.19&permmsgid=msg-f:1715134324961856709&th=17cd6194d56e4cc5&view=att&disp=safe&realattid=17cd6181acfa4070f6c8'];

var i = 17;

next.addEventListener('click', function(){
    i++;
    if(i > arr.length - 1){
            i = 0;
    }
    document.getElementById('image').src = arr[i];
})
prev.addEventListener('click', function(){
    i--;
    if(i < 0) {
        i = arr.length - 1;
    }
    document.getElementById('image').src = arr[i];
})