var MX,FX,A,B,C,D,E,F,G,H;
function setup() {
  createCanvas(800,800);
  FX = createSprite(200, 200, 50, 80);
  FX.shapeColor = "green";
  FX.debug = true;

  MX = createSprite(400, 200, 80, 30);
  MX.shapeColor = "green";
  MX.debug = true;

  A = createSprite(100,100,50,50);
  A.shapeColor = "green";

  B = createSprite(200,100,50,50);
  B.shapeColor = "green";

  C = createSprite(300,100,50,50);
  C.shapeColor = "green";

  D = createSprite(400,100,50,50);
  D.shapeColor = "green";

  E = createSprite(600,100,50,50);
  E.shapeColor = "green";
  E.velocityY = 2;

  F = createSprite(600,700,50,50);
  F.shapeColor = "green";
  F.velocityY = -2;

  G = createSprite(700,700,50,50);
  G.shapeColor = "green";
  G.velocityX = -2;

  H = createSprite(100,700,50,50);
  H.shapeColor = "green";
  H.velocityX = 2;




}

function draw() {
  MX.x = mouseX;
  MX.y = mouseY;
 if(isTouching(B,MX)){
  MX.shapeColor = "red";
  B.shapeColor = "red";
 }
 else{
  MX.shapeColor = "green";
  B.shapeColor = "green";

}
  bounceOff(E,F);
  bounceOff(G,H);
  background(0);  
  drawSprites();
}


