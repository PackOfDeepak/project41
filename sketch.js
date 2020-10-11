

function preload(){
   var light1 =  loadImage("images/thunderbolt/1.png");
   var light2 = loadImage("images/thunderbolt/2.png");
   var light3 = loadImage("images/thunderbolt/3.png") 
   var light4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(200,200);
    umbrella1 = new Umbrella(100,300,100);
    var maxdrops = 100;
    for(var i = 0; i<maxdrops;i++){
        drops.push(new Drop(random(0,200), random(0,200)));
    }
   
    
}
var lightning = createSprite(100,50);
function draw(){
    if(World.frameCount%60===0){
        lightning.visible = true;
        var lightnum = random(1,4);

        switch(lightnum){
            case 1:lightning.setImage(light1);
            case 2:lightning.setImage(light2);
            case 3:lightning.setImage(light3);
            case 4:lightning.setImage(light4);
        }
    }else{
        lightning.visible = false;
    }
}   

