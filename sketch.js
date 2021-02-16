var bullet, wall, speed, weight, thickness;

function setup() {
  createCanvas(1500, 400);

  speed = random(223, 321);
  weight = random(30, 50);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = color(255)
  bullet.velocityX = speed;

  wall = createSprite(1400, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0);

  if(keyDown("r")){
    speed = random(223, 321);
    weight = random(30, 50);
    thickness = random(22,83);
    bullet.shapeColor = color(255);
    bullet.velocityX = speed;
    bullet.x = 200;
    wall.width = thickness;

  }
  
  if(wall.x - bullet.x < (bullet.width + wall.width) /2){
    bullet.velocityX = 0;
    bullet.velocityX = 0;
    var thikc = thickness*thickness*thickness;
    var damage = 0.5 * weight * speed * speed/thikc;
  }
//10648

    stroke("white");
    textSize(20);
    fill("white");
    text("Thickness: " + thikc, 100, 80);

    stroke("white");
    textSize(20);
    fill("white");
    text("Damage: " + damage, 100, 45);

  if(damage > 10){
    wall.shapeColor = color(255, 0, 0);
  }

  if(damage < 10){
    wall.shapeColor = color(0, 255, 0);
  }
  drawSprites();
}
