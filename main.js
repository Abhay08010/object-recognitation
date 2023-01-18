Webcam.set({
    width:350,
    hight:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img src='"+data_uri+"' id='capturedImage'>";
});
}

console.log("ml5 version", ml5.version);
Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ebuV8ISCN/model.json',model_loaded);