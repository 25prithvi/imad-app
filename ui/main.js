// counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    // make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    
    // capture the respose and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE){
            // Take some action
            if (request.status === 200) {
                var counter = requestText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // Not done yet
    };
    // make the request
    request.open('GET', 'http://prithvishanbhag25.imad.hasura-app.io/counter', true);
    request.send(null);
};