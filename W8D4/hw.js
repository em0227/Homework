
window.setTimeout( function() {
    alert('HAMMERTIME');
}, 5000);

function hammerTime(time) {
    window.setTimeout(alert, 2000)
}
//do not invoke the callback when passing in!!
//above still now working, becuse did not pass in arg


function hammerTime(time) {
    window.setTimeout( function() {
        alert(`${time} is hammertime`);
    }, 2000);
}
