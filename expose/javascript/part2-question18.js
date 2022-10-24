function newTime()
{
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(function() {newTime();} , 1000)