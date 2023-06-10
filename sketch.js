var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  spookySound.loop(); //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group(); //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
  climbersGroup = new Group(); //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
  invisibleBlockGroup = new Group(); //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
  
  ghost = createSprite(200,200,50,50); //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
  ghost.scale = 0.3; //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
  ghost.addImage("ghost", ghostImg); //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
}

function draw(){
  background(0);
  if (gameState === "play") { //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    if(keyDown("left_arrow")){ //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
      ghost.x = ghost.x - 3; //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    } //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    if(keyDown("right_arrow")){ //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
      ghost.x = ghost.x + 3; //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    } //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<    
    if(keyDown("space")){ //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
      ghost.velocityY = -10; //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    } //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    ghost.velocityY = ghost.velocityY + 0.8 //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<
    if(tower.y > 400){
      tower.y = 300
    }
    spawnDoors(); //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    if(climbersGroup.isTouching(ghost)){ //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
      ghost.velocityY = 0; //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    } //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){ //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
      ghost.destroy(); //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
      gameState = "end" //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    } //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    drawSprites();
  } //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    if (gameState === "end"){ //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    stroke("yellow"); //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    fill("yellow"); //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    textSize(30); //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
    text("Fim de Jogo", 230,250) //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
  } //adicionar <<<<<<<<<<<<<<<<<<<<<<<<<<<
}
function spawnDoors() {  //adicionar toda a função <<<<<<<<<<<<<<<<<<<<<<<<<<<
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;  
    door.x = Math.round(random(120,400));
    climber.x = door.x;
    invisibleBlock.x = door.x;
    door.addImage(doorImg);
    climber.addImage(climberImg);
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;
    ghost.depth = door.depth;
    ghost.depth +=1;
    door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;
    doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

