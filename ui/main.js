console.log('Loaded!');

// Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

// move the image

var img = document.getElementById('madi');

var marginLeft = 0;

function moveRight(){
    if(marginLeft <= 1000)
    {
        marginLeft = marginLeft + 2;
        img.style.marginLeft = marginLeft +'px';
    }
    else if(marginLeft >= -1000)
    {
        marginLeft = marginLeft - 2;
        img.style.marginLeft = marginLeft +'px';
    }
    
}
img.onclick = function (){
    var interval = setInterval(moveRight,10);
};