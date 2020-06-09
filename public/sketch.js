var socket;

function setup() {
	createCanvas(850, 750);
	background(220);
	var socket = io.connect('http://localhost:7766');
	socket.on('mouse', newDrawing);


}
function newDrawing(data) {

	noStroke();
	fill(255);
	ellipse(data.x, data.y, 36, 36);

}

function mouseDragged() {
	console.log(mouseX + ',' + mouseY);

	var data = {
		x: mouseX,
		y: mouseY
	}
	socket.emit('mouse', data);

	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 36, 36);
}
