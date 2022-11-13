canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth=4;
ctx.strokeStyle="grey";
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="blue";
ctx.arc(250, 210, 40, 0,2 *Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="black";
ctx.arc(350, 210, 40, 0,2 *Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="red";
ctx.arc(450, 210, 40, 0,2 *Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="yellow";
ctx.arc(300, 250, 40, 0,2 *Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="green";
ctx.arc(400, 250, 40, 0,2 *Math.PI);
ctx.stroke();