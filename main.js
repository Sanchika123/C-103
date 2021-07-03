Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera= document.getElementById('camera');
Webcam.attach('#camera');

function snap_shot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>'
    });
}

console.log("ml5 varsion:",ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uPnPuYWyi/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function check(){
    img= document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object").innerHTML= results[0].label;
        document.getElementById("Accuracy_of_object").innerHTML= results[0].confidence.toFixed(3);
    }
}