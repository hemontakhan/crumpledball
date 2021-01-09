//9-1-2021
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

//create objects
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	//create the canvas
	createCanvas(1600, 700);
	rectMode(CENTER);

    //update engine
	engine = Engine.create();
	//assign world to engine
	world = engine.world;

	//create the required objects
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
    
 
}

function keyPressed() {
	//make the ball move upwards and fall in the dustbin
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





