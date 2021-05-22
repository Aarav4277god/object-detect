img="";
status="";
objects=[];
function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
  canvas=createCanvas(640,420);
  canvas.center();
  objectdetector=ml5.objectDetector('cocossd',modelloaded);
  document.getElementById("status").innerHTML="Status:Detecting objects";
}
function draw(){
   image(img,0,0,640,420);

 }

function modelloaded(){
  console.log("model is loaded");
  objectdetector.detect(img,gotresult);
}
function gotresult(error,result){
if(error){
console.log(error);
}
else{
  console.log(result);
  objects=result;

}
}

