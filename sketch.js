var drawing=[];
function setup(){
    database=firebase.database();
    createCanvas(800,800);

    clear=createButton("Clear");
}

function draw(){
    background("black");
    for(var i=0; i<drawing.length; i++){
        strokeWeight(5);
        stroke("purple");
        point(drawing[i][0], drawing[i][1]);
    }

    clear.position(750,50);
    this.clear.mousePressed(()=>{
        drawing=[];
        background("black");
        alert("Cleared");
        location.reload();

    })

    drawSprites();
}

function mouseDragged(){
    drawing.push([mouseX,mouseY]);
    database.ref('/').set({
        "drawing":drawing
    });
}



