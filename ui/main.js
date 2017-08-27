console.log('Loaded!');

// Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

// move the image

var img = document.getElementById('madi');

var marginLeft = 0;
var flag = 1;
function moveRight(){
    if(flag == 1)
    {
        marginLeft = marginLeft + 2;
        img.style.marginLeft = marginLeft +'px';
        if(marginLeft >= 775)
        {
            flag = 0;
        }
    }
    else 
    {
        marginLeft = marginLeft - 2;
        img.style.marginLeft = marginLeft +'px';
        if(marginLeft <= -850)
        {
            flag = 1;
        }
    }
    
}
img.onclick = function (){
    var interval = setInterval(moveRight,1);
};