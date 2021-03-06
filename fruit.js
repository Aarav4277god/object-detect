img="";
status="";
objects=[];
function preload(){
    img=loadImage('TV.webp');
}
function setup(){
  canvas=createCanvas(640,420);
  canvas.center();
  objectdetector=ml5.objectDetector('cocossd',modelloaded);
  document.getElementById("status").innerHTML="Status:Detecting objects";
}
function draw(){
   image(img,0,0,640,420);
if(status != ""){
 for(i=0;i<objects.length;i++){
  document.getElementById("status").innerHTML="Status:Objects Detected";
  fill('#ff6666');
  percent= floor(objects[i].confidence*100);
  text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
  noFill();
  stroke('#ff6666');
  rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

 }
}
}
function modelloaded(){
  console.log("model is loaded");
  status=true;
  objectdetector.detect(img,gotresult);
}
function gotresult(error,result){
if(error){
console.log(error);
}
else{
  console.log(result);
  objects=result;
  console.log(objects.length);
}
}


