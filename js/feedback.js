let thumbsData = "like";
let comebackData = 5;
let starRatingData = 5;

let feedbackFormDisplay = "";

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
        name : "",
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

// const getThumbs=(thumbsData)=>{
//         if(thumbsData === "like"){
//             return(
//                 `<img class="thumbs" src="./assets/icons8-thumbs-up-48.png" alt="thumbsup">`
//             )
//         }
//         else{
//             return(
//                 `<img class="thumbs" src="./assets/icons8-thumbs-down-48.png" alt="thumbsdown">`
//             )
//         }
// }

const getStarRating=(starRating)=>{
    let star ="";
    for(let index=1;index<=5;index++){
        if(index<=starRating){
            star +=`<span class="fa fa-star star rated"></span>`
        }
        else {
            star +=`<span class="fa fa-star star notRated"></span>`
        }
    }
    return star;
}

const getComeback=(comebackData)=>{
    if(comebackData === 1){
        return("&#128544;")
    }
    else  if(comebackData === 2){
        return("&#128529;")
    }
    else  if(comebackData === 3){
        return("&#128533;")
    }
    else  if(comebackData === 4){
        return("&#128527;")
    }
    else  if(comebackData === 5){
        return("&#128512;")
    }
    
}

const getData=()=>{
    let feedbackList = [{
        name : "ram",
        favoriteMoment : "aaaaa aaaa aaaaaa aaaa  aaaaa  aaaaa  aaaaa   aaaa     aaaaaaa aaa aaaa   aaaa",
        aboutGame : "bbbb",
        ruleUnderstand : "ccccc",
        moreExpected : "ddddd",
        otherFeedback : "eeeee",
        thumbs : "like",
        comeback : 4,
        starRating : 5,
    },
    {
        name : "binu",
        favoriteMoment : "aaaaa aaaa aaaaaa aaaa  aaaaa  aaaaa  aaaaa   aaaa     aaaaaaa aaa aaaa   aaaa",
        aboutGame : "bbbb",
        ruleUnderstand : "ccccc",
        moreExpected : "ddddd",
        otherFeedback : "eeeee",
        thumbs : "dislike",
        comeback : 2,
        starRating : 3,
    },
    {
        name : "rinu",
        favoriteMoment : "aaaaa aaaa aaaaaa aaaa  aaaaa  aaaaa  aaaaa   aaaa     aaaaaaa aaa aaaa   aaaa",
        aboutGame : "bbbb",
        ruleUnderstand : "ccccc",
        moreExpected : "ddddd",
        otherFeedback : "eeeee",
        thumbs : "like",
        comeback : 3,
        starRating : 2,
    }];

    let displayFeedback =" "; 
    for(let data of feedbackList){
        displayFeedback +=`
                <div>
                    <table class="feedbackTable">
                        <tbody>
                            <tr>
                                <td>Name </td><td> ${data.name}</td>
                            </tr>
                            <tr>
                                <td>Favorite moment </td><td> ${data.favoriteMoment}</td>
                            </tr>
                            <tr>
                                <td>About game </td><td> ${data.aboutGame}</td>
                            </tr>
                            <tr>
                                <td>Rules missunderstand </td><td> ${data.ruleUnderstand}</td>
                            </tr>
                            <tr>
                                <td>More expected </td><td> ${data.moreExpected}</td>
                            </tr>
                            <tr>
                                <td>Other feedback </td><td> ${data.otherFeedback}</td>
                            </tr>
                            <tr>
                                <td colspan=2 style="text-align:center">${ getComeback(data.comeback) }   ${ data.thumbs+"d" }  ${ getStarRating(data.starRating)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                `;
                console.log(data.name)
    }

    document.getElementById('displayFeedback').innerHTML = displayFeedback;

}

const displayFeedback=()=>{
    document.getElementById('feedbackForm').style.display="none";
    getData();
}

const feedbackForm=()=>{
    document.getElementById('feedbackForm').style.display="block";
    document.getElementById('displayFeedback').innerHTML ="";
}
