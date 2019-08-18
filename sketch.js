var points = [];

function setup()
{
	createCanvas(600, 600);
}

function draw()
{
	background(36);

	stroke(255);
	noFill();
	ellipse(width / 2, height / 2, width, height);

	var pointsPerFrame = 100;

	for (var i = 0; i < pointsPerFrame; i++)
		points.push([random(width), random(height)]);

	var inside = 0, outside = 0;

	for (var i = 0; i < points.length; i++)
	{
		noStroke();
		fill(255);
		ellipse(points[i][0], points[i][1], 2, 2);

		if (dist(points[i][0], points[i][1], width / 2, height / 2) <= height / 2)
			inside++;
		else
			outside++;
	}

	fill(24);
	rect(0, 0, 160, 75);

	noStroke();
	fill(255);
	text("Inside: " + inside, 10, 20);
	text("Outside: " + outside, 10, 40);
	text("Pi: " + 4 * (inside / (inside + outside)), 10, 60);
}