document.addEventListener("DOMContentLoaded", function(){
    //need the above line/function to wait for the DOM loaded, once it's loaded, we will start runing this file, so we can getElementById

    const canvas = document.getElementById('mycanvas');
    //canvas.height = 500;
    //canvas.width = 500;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 100, 0, 400);
    gradient.addColorStop(0, 'black');
    gradient.addColorStop(1, 'white');
    ctx.fillStyle = gradient;
    ctx.fillRect(20, 20, 500, 500);

    ctx.beginPath();
    ctx.arc(100, 75, 20, 0, 2 * Math.PI);
    // ctx.strokeStyle = 'yellow';
    // ctx.lineWidth = 2;
    // ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();
    
    // ctx.translate(300, 350);
    // ctx.beginPath();
    // ctx.arc(100, 75, 20, 0, 2 * Math.PI);
    // ctx.strokeStyle = 'yellow';
    // ctx.lineWidth = 2;
    // ctx.stroke();
    // ctx.fillStyle = 'yellow';
    // ctx.fill();
   

    // for (var i = 0; i < 6; i++) {
    //     for (var j = 0; j < 6; j++) {
    //         ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' +
    //             Math.floor(255 - 42.5 * j) + ')';
    //         ctx.beginPath();
    //         ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
    //         ctx.stroke();
    //     }
    // }
    function draw() {
        var time = new Date();
        ctx.translate(100, 300);
        ctx.save();
        ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
        
        // ctx.fillRect(0, -12, 40, 24); // Shadow
        ctx.restore();
        window.requestAnimationFrame(draw);
    }

    window.requestAnimationFrame(draw);



});
