const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12
var box13, box14, box15, box16, box_1, box_2, box_3, box_4, box_5, box_6, box_7
var box_8, box_9, ground, ground1, ground2

function setup(){

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
    box3 = new Box(700,320,70,70);
    box4 = new Box(700,320,70,70);
    box5 = new Box(700,320,70,70);
    box6 = new Box(700,320,70,70);
    box7 = new Box(700,320,70,70);
    box8 = new Box(700,320,70,70);
    box9 = new Box(700,320,70,70);
    box10 = new Box(700,320,70,70);
    box11 = new Box(700,320,70,70);
    box12 = new Box(700,320,70,70);
    box13 = new Box(700,320,70,70);
    box14 = new Box(700,320,70,70);
    box15 = new Box(700,320,70,70);
    box16 = new Box(700,320,70,70);

    box_1 = new Box(700,320,70,70);
    box_2 = new Box(700,320,70,70);
    box_3 = new Box(700,320,70,70);
    box_4 = new Box(700,320,70,70);
    box_5 = new Box(700,320,70,70);
    box_6 = new Box(700,320,70,70);
    box_7 = new Box(700,320,70,70);
    box_8 = new Box(700,320,70,70);
    box_9  = new Box(700,320,70,70);

    ground = new Ground(600,height,1200,20);
    ground = new Ground(600,height,1200,20);
    ground = new Ground(600,height,1200,20);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    SlingShot = new Slingshot(this.polygon,{x:100,y:200})

}

function draw (){
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box_1.display();
    box_2.display();
    box_3.display();
    box_4.display();
    box_5.display();
    box_6.display();
    box_7.display();
    box_8.display();
    box_9.display();

    ground.display();
    ground1.display();
    ground2.display();

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
//make the bird fly when the mouse is released
function mouseReleased(){
    slingShot.fly();
}