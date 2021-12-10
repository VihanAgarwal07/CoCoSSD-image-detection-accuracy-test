objects=[];
 var status1="";
function preload(){
    img=loadImage("traffic.jpg");
    img=loadImage("dog_cat.jpg");
    img=loadImage("bus_stop.jpeg");
}

function setup(){
    canvas=createCanvas(750,500);
    canvas.position(400,150);
    object_detector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status = Detecting Object";
}
function modelLoaded(){
    console.log("Model is Ready !!")
    status1="true";
object_detector.detect(img,gotResult);
}
function image_load(image_name){
    img=loadImage(image_name);
    setup();
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
console.log(results);
objects=results;
}
function draw(){
    
    image(img,0,0,600,500);
   // console.log(status1);
    if(status1=="true"){
        fill("#ff0000");
        noFill();
            stroke("#ff0000");
    for(var i=0;i<objects.length;i++){
      //  console.log(i);
        document.getElementById("status").innerHTML="Object Detected";
        
        textSize(14);
        percent=floor(objects[i].confidence*100) 
        text(objects[i].label + "  " + percent+ "%" + "accuracy",objects[i].x,objects[i].y-20 );
        rect(objects[i].x-70,objects[i].y,objects[i].width,objects[i].height);
    

        
    }
    }
    
    
    
    
    //text("dog",90,66)
}
