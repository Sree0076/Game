let thumbsdata: string = "like";
let comebackdata: number = 5;
let starRatingdata: number = 5;

const setdata = (): void => {
    // alert("hello")
    let favoriteMoment: string = (<HTMLInputElement>document.getElementById('favoriteMoment')).value;
    let aboutGame: string = (<HTMLInputElement>document.getElementById('aboutGame')).value;
    let ruleUnderstand: string = (<HTMLInputElement>document.getElementById('ruleUnderstand')).value;
    let moreExpected: string = (<HTMLInputElement>document.getElementById('moreExpected')).value;
    let otherFeedback: string = (<HTMLInputElement>document.getElementById('otherFeedback')).value;
    let thumbs: string = thumbsData;
    let comeback: number = comebackData;
    let starRating: number = starRatingData;
    console.log(thumbs);
    let data = {
        favoriteMoment: favoriteMoment,
        aboutGame: aboutGame,
        ruleUnderstand: ruleUnderstand,
        moreExpected: moreExpected,
        otherFeedback: otherFeedback,
        thumbs: thumbs,
        comeback: comeback,
        starRating: starRating,
    };

    console.log(data);
    if (favoriteMoment === "" || aboutGame === "" || ruleUnderstand === "" || moreExpected === "" || otherFeedback === "") {
        alert("Please fill all the fields");
    }
    else {
        // firebase
        // to connect api
        alert("Feedback Successfully submited!");
    }
};

function thumbsfun(args: string): void {
    thumbsData = args;
    console.log(args);
}

function comebackfun(args: number): void {
    comebackData = args;
    console.log(args);
}

function starRatingfun(rate: number): void {
    console.log(rate);
    let star: string;
    starRatingData = rate;
    for (let index = 1; index <= rate; index++) {
        star = "star" + index;
        (<HTMLInputElement>document.getElementById(star)).style.color = "orange";
    }
    for (let index = rate + 1; index <= 5; index++) {
        star = "star" + index;
        (<HTMLInputElement>document.getElementById(star)).style.color = "black";
    }
}
