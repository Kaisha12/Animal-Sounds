function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lOCRt9D7-/model.json',modelReady);
}

function modelReady(){
    classifier.classify( gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result)
        random_number_r = Math.floor(Math.random() * 255) +1
        random_number_g = Math.floor(Math.random() * 255) +1
        random_number_b = Math.floor(Math.random() * 255) +1


        //This code is for giving the result in the result lable//
         document.getElementById("result_label").innerHTML = 'I can hear:'+ result[0].label;
         //end//
         document.getElementById("resullt_confidence").innerHTML ='Accuracy - '+(result[0].confidence*100).toFixed(2)+"%";
         document.getElementById("resullt_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
         document.getElementById("resullt_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
         
         img = document.getElementById('alien1')
         img1 = document.getElementById('alien2')
         img2 = document.getElementById('alien3')
         img3 = document.getElementById('alien4')
         //This code will make the image 1 gif appear whenever it hears clapsonds and image 1 will be turned into a gif//   
         if (results[0].lable == "Clap"){
             img.src = 'aliens-01.gif';
             img.src = 'aliens-02.png';
             img.src = 'aliens-03.png';
             img.src = 'aliens-04.png';
         }
         else if (results[0].lable == "Bell"){
            img.src = 'aliens-01.png';
            img.src = 'aliens-02.gif';
            img.src = 'aliens-03.png';
            img.src = 'aliens-04.png';
        }
        else if (results[0].lable == "Snapping"){
            img.src = 'aliens-01.png';
            img.src = 'aliens-02.png';
            img.src = 'aliens-03.gif';
            img.src = 'aliens-04.png';
        }
        else{
            img.src = 'aliens-01.png';
            img.src = 'aliens-02.png';
            img.src = 'aliens-03.png';
            img.src = 'aliens-04.gif';
        }
    





        }
}
