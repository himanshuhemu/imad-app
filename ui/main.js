//counter code
var button=document.getElementById("counter");
var counter = 0;
button.onClick=function(){
    //to make a request to the counter endpoint
    
    //capture the response and store it in vsriable
    
    //render the variable in correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};