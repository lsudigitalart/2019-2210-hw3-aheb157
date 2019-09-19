function setup(){
createCanvas(windowWidth, windowHeight);
background (0);


}


function draw (){

//variables
var r=255;
var g=153;
var b=153;

var r2=255;
var g2=255;
var b2=102;

var r3=153;
var g3=255;
var b3=51;

var r4=102;
var g4=178;
var b4=255;

var r5=178;
var g5=102;
var b5=255;

for (var i = 0; i < 10000; i=i+30){
    print(i);
    circle( i , 10000 ,100);
    
    fill (r,g,b);
    circle(random(i),random(i),random(20));
    circle(random(i),random(i),random(30));
    circle(random(i),random(i),random(30));   
    fill (r2,g2,b2);
    circle(random(i),random(i),random(20));
    circle(random(i),random(i),random(30));
    
    fill (r3,g3,b3);
    circle(random(i),random(i),random(20));
    circle(random(i),random(i),random(30));

    fill (r4,g4,b4);
    circle(random(i),random(i),random(20));
    circle(random(i),random(i),random(30));

    fill (r5,g5,b5);
    circle(random(i),random(i),random(20));
    circle(random(i),random(i),random(30));
}

}

function windowResized(){
resizeCanvas(windowWidth, windowHeight); 
}