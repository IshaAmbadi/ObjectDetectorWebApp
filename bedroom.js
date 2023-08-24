img = "";
statusvar = "";

function preload() {
    image(img, 40, 50);
}

function setup() {
    canvas = createCanvas(550,450);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Dectecting Objects";
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function modelLoaded() {
    statusvar = true;
    console.log("Model Loaded");
}