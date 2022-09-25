// start deadline script code

let deadline = new Date("Oct 26, 2022 16:00:00").getTime();
let x = setInterval(function() {
let now = new Date().getTime();
let t = deadline - now;
let days = Math.floor(t / (1000 * 60 * 60 * 24));
let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((t % (1000 * 60)) / 1000);

if(String(days).length < 2) days = "0"+days;
if(String(hours).length < 2) hours = "0"+hours;
if(String(minutes).length < 2) minutes = "0"+minutes;
if(String(seconds).length < 2) seconds = "0"+seconds;

document.getElementById("deadlinetimer").innerHTML = days + " : " 
+ hours + " : " + minutes + " : " + seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("deadlinetimer").innerHTML = "EXPIRED";
    }
}, 1000);

// end deadline script code

//  js api

const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const formData = new FormData(form);
    console.log([...formData]);

    axios.post('https://httpbin.org/post', formData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    
    document.getElementById("form").reset()
})