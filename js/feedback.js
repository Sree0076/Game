let thumbsData = "like";
let comebackData = 5;
let starRatingData = 5;

const setData=()=>{
   // alert("hello")
    let favoriteMoment = document.getElementById('favoriteMoment').value;
    let aboutGame = document.getElementById('aboutGame').value;
    let ruleUnderstand = document.getElementById('ruleUnderstand').value;
    let moreExpected = document.getElementById('moreExpected').value;
    let otherFeedback = document.getElementById('otherFeedback').value;
    let thumbs = thumbsData;
    let comeback = comebackData;
    let starRating = starRatingData;
    console.log(thumbs);
    let data = {
        favoriteMoment : favoriteMoment,
        aboutGame : aboutGame,
        ruleUnderstand : ruleUnderstand,
        moreExpected : moreExpected,
        otherFeedback : otherFeedback,
        thumbs : thumbs,
        comeback : comeback,
        starRating : starRating,
    }

    console.log(data);
    if(favoriteMoment === "" || aboutGame === "" || ruleUnderstand === "" || moreExpected === "" || otherFeedback === ""){
        alert("Please fill all the fields");
    }
    else{
        // firebase
        // to connect api
        alert("Feedback Successfully submited!");
    }

}

function thumbs(args){
    thumbsData = args;
    console.log(args);
}

function comeback(args){
    comebackData = args;
    console.log(args);
}

function starRating(rate){
    console.log(rate);
    let star;
    starRatingData = rate;
    for(let index=1;index<=rate;index++){
        star = "star"+index;
        document.getElementById(star).style.color="orange";
    }
    for(let index=rate+1;index<=5;index++){
        star = "star"+index;
        document.getElementById(star).style.color="black";
    }
    
}