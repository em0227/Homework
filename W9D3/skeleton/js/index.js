console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b',
    dataType: 'json',
    // data: this.url.serialize(),
    //success: console.log(data)
    success: function (data) {
        console.log(data.weather.description)
    }
})

// Add another console log here, outside your AJAX request

console.log('finished ajax')
// const weatherApp = function() {
//     this.
// }