var isPlaying = false;
var audio = {};
    audio["C_maj"] = new Audio();
    audio["C_maj"].src = "http://midi-files.s3.amazonaws.com/C-major.mp3" //C MAJOR
    audio["Am_nat"] = new Audio();
    audio["Am_nat"].src = "http://midi-files.s3.amazonaws.com/Am-natural.mp3" //A MINOR NATURAL
    audio["Am_harm"] = new Audio();
    audio["Am_harm"].src = "http://midi-files.s3.amazonaws.com/Am-harmonic.mp3" //A MINOR HARMONIC
    audio["Am_mel"] = new Audio();
    audio["Am_mel"].src = "http://midi-files.s3.amazonaws.com/Am-melodic.mp3" //A MINOR MELODIC
    audio["D_maj"] = new Audio();
    audio["D_maj"].src = "http://beststudentviolins.com/tonmjD.mp3" //D MAJOR 
    audio["Dm_nat"] = new Audio();
    audio["Dm_nat"].src = "http://beststudentviolins.com/tonminnatural.mp3" //Dm NATURAL
    audio["Dm_mel"] = new Audio();
    audio["Dm_mel"].src = "http://beststudentviolins.com/tonminmelodic.mp3" //Dm MELODIC
    audio["Dm_harm"] = new Audio();
    audio["Dm_harm"].src = "http://beststudentviolins.com/tonminharmonic.mp3" //Dm HARMONIC


function togglePlay(scale, listen) {
    audio[scale].onplaying = function() {
        isPlaying = true;
    };
    audio[scale].onpause = function() {
        isPlaying = false;
    };
    if (isPlaying) {
        audio[scale].pause()
        audio[scale].currentTime = 0
        $(listen).attr('src', "http://www.pngmart.com/files/3/Play-Button-Transparent-Background.png");
        // $(listen+"2").attr('src', "http://www.pngmart.com/files/3/Play-Button-Transparent-Background.png");
        // $(listen+"3").attr('src', "http://www.pngmart.com/files/3/Play-Button-Transparent-Background.png");
        // $(listen+"4").attr('src', "http://www.pngmart.com/files/3/Play-Button-Transparent-Background.png");
        // $(listen+"5").attr('src', "http://www.pngmart.com/files/3/Play-Button-Transparent-Background.png");

    } else {
        audio[scale].play();
        $(listen).attr('src', "https://www.freeiconspng.com/uploads/pause-button-png-24.png");
        // $(listen+"2").attr('src', "https://www.freeiconspng.com/uploads/pause-button-png-24.png");
        // $(listen+"3").attr('src', "https://www.freeiconspng.com/uploads/pause-button-png-24.png");
        // $(listen+"4").attr('src', "https://www.freeiconspng.com/uploads/pause-button-png-24.png");
        // $(listen+"5").attr('src', "https://www.freeiconspng.com/uploads/pause-button-png-24.png");
    }
};


$(document).ready(function(){
    $(document).on("click", "#C_maj", function(){
        togglePlay("C_maj", ".listen")
    })
    $(document).on("click", "#Am_nat", function(){
        togglePlay("Am_nat", ".listen")
    })
    $(document).on("click", "#Am_harm", function(){
        togglePlay("Am_harm", ".listen")
    })
    $(document).on("click", "#Am_mel", function(){
        togglePlay("Am_mel", ".listen")
    })
    $(document).on("click", "#D_maj", function(){
        togglePlay("D_maj", ".listen")
    })
    $(document).on("click", "#Dm_nat", function(){
        togglePlay("Dm_nat", ".listen")
    })
    $(document).on("click", "#Dm_harm", function(){
        togglePlay("Dm_harm", ".listen")
    })
    $(document).on("click", "#Dm_mel", function(){
        togglePlay("Dm_mel", ".listen")
    })


    // $(document).on("click", "img[id*='listen_major']", function(){
    //     togglePlay("maj", "#listen_major");
    // })
    // $(document).on("click", "img[id*='listen_natural']", function(){
    //     togglePlay("nat", "#listen_natural")
    // })
    // $(document).on("click", "img[id*='listen_harmonic']", function(){
    //     togglePlay("harm", "#listen_harmonic")
    // })
    // $(document).on("click", "img[id*='listen_melodic']", function(){
    //     togglePlay("mel", "#listen_melodic")
    // })

    $(".next").click(function(){
        console.log("next clicked" + $(this).parent().attr('id'))
        var str = $(this).parent().attr('id')
        var page_num = parseInt(str.split("Page")[1])
        var page = str;
        var page_next = "Page" + (page_num+1).toString();
        console.log("num: " + page_num)
        $("#" + page).addClass("hide_page")
        $("#" + page_next).removeClass("hide_page")
    })

    $(".prev").click(function(){
        console.log("next clicked" + $(this).parent().attr('id'))
        var str = $(this).parent().attr('id')
        var page_num = parseInt(str.split("Page")[1])
        var page = str;
        var page_prev = "Page" + (page_num-1).toString();
        console.log("num: " + page_num)
        $("#" + page).addClass("hide_page")
        $("#" + page_prev).removeClass("hide_page")
    })
    var correct_maj = 0;
    var correct_nat = 0;
    var correct_harm = 0;
    var correct_mel = 0;
    var chose_wrong = false;

    //QUESTION 1 - Am NATURAL
    $("#maj1").click(function(){
        $("#maj1").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#nat1").click(function(){
        $("#nat1").addClass("right_choice")
        if(!chose_wrong){
            correct_nat++;
        }
        chose_wrong = false;
        setTimeout(changeSlides, 2000, "Page1", "Page2")
    })
    $("#harm1").click(function(){
        $("#harm1").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#mel1").click(function(){
        $("#mel1").addClass("wrong_choice")
        chose_wrong = true;
    })
    //QUESTION 2 - Am HARMONIC
    $("#maj2").click(function(){
        $("#maj2").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#nat2").click(function(){
        $("#nat2").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#harm2").click(function(){
        $("#harm2").addClass("right_choice")
        if(!chose_wrong){
            correct_harm++;
        }
        chose_wrong = false;
        setTimeout(changeSlides, 2000, "Page2", "Page3")
    })
    $("#mel2").click(function(){
        $("#mel2").addClass("wrong_choice")
        chose_wrong = true;
    })
    //QUESTION 3 - C MAJOR
    $("#maj3").click(function(){
        $("#maj3").addClass("right_choice")
        if(!chose_wrong){
            correct_maj++;
        }
        chose_wrong = false;
        setTimeout(changeSlides, 2000, "Page3", "Page4")
    })
    $("#nat3").click(function(){
        $("#nat3").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#harm3").click(function(){
        $("#harm3").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#mel3").click(function(){
        $("#mel3").addClass("wrong_choice")
        chose_wrong = true;
    })
    //QUESTION 4 - Am MELODIC
    $("#maj4").click(function(){
        $("#maj4").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#nat4").click(function(){
        $("#nat4").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#harm4").click(function(){
        $("#harm4").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#mel4").click(function(){
        $("#mel4").addClass("right_choice")
        if(!chose_wrong){
            correct_mel++;
        }
        chose_wrong = false;
        setTimeout(changeSlides, 2000, "Page4", "Page5")
    })
    //QUESTION 5 - D MAJOR
    $("#maj5").click(function(){
        $("#maj5").addClass("right_choice")
        if(!chose_wrong){
            correct_maj++;
        }
        chose_wrong = false;
        setTimeout(changeSlides, 2000, "Page5", "Page6")
    })
    $("#nat5").click(function(){
        $("#nat5").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#harm5").click(function(){
        $("#harm5").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#mel5").click(function(){
        $("#mel5").addClass("wrong_choice")
        chose_wrong = true;
    })
    //QUESTION 6 - Dm NATURAL
    $("#maj6").click(function(){
        $("#maj6").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#nat6").click(function(){
        $("#nat6").addClass("right_choice")
        if(!chose_wrong){
            correct_nat++;
        }
        chose_wrong = false;
        setTimeout(changeSlides, 2000, "Page6", "Page7")
    })
    $("#harm6").click(function(){
        $("#harm6").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#mel6").click(function(){
        $("#mel6").addClass("wrong_choice")
        chose_wrong = true;
    })
    //QUESTION 7 - Dm HARMONIC
    $("#maj7").click(function(){
        $("#maj7").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#nat7").click(function(){
        $("#nat7").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#harm7").click(function(){
        $("#harm7").addClass("right_choice")
        if(!chose_wrong){
            correct_harm++;
        }
        chose_wrong = false;
        setTimeout(changeSlides, 2000, "Page7", "Page8")
    })
    $("#mel7").click(function(){
        $("#mel7").addClass("wrong_choice")
        chose_wrong = true;
    })
    //QUESTION 8 - Dm MELODIC
    $("#maj8").click(function(){
        $("#maj8").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#nat8").click(function(){
        $("#nat8").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#harm8").click(function(){
        $("#harm8").addClass("wrong_choice")
        chose_wrong = true;
    })
    $("#mel8").click(function(){
        $("#mel8").addClass("right_choice")
        console.log("AFTER ALL IS DONE:")
    console.log("major: " + correct_maj)
    console.log("natural: " + correct_nat)
    console.log("melodic: "+ correct_mel)
    console.log("harmonic: " + correct_harm)
        if(!chose_wrong){
            correct_mel++;
        }
        chose_wrong = false;
        setTimeout(resultsSlide, 2000, "Page8", "Page9", correct_maj, correct_nat, correct_mel, correct_harm)
    })

    $(".lesson").click(function(){
        window.location = "/lesson_start";
    })

})

function changeSlides(curr_page, next_page){
    $("#" + curr_page).addClass("hide_page")
    $("#" + next_page).removeClass("hide_page")
}

function resultsSlide(curr_page, next_page, maj, nat, mel, harm){
    $("#" + curr_page).addClass("hide_page")
    $("#" + next_page).removeClass("hide_page")
    //if correct_maj == 2 add to div ".well"
    if(maj == 2){
        $(".well").append('<div class = "spaced_list"> 100% of majors </div>')
    } else if(maj == 1){
        $(".bad").append('<div class = "spaced_list"> 50% of majors </div')
    } else{
        $(".bad").append('<div class = "spaced_list"> 0% of majors </div')
    }
    if(nat == 2){
        $(".well").append('<div class = "spaced_list"> 100% of natural minors </div')
    } else if(nat == 1){
        $(".bad").append('<div class = "spaced_list"> 50% of natural minors </div')
    } else{
        $(".bad").append('<div class = "spaced_list"> 0% of natural minors </div')
    }
    if(mel == 2){
        $(".well").append('<div class = "spaced_list"> 100% of melodic minors </div')
    } else if(mel == 1){
        $(".bad").append('<div class = "spaced_list"> 50% of melodic minors </div')
    } else{
        $(".bad").append('<div class = "spaced_list"> 0% of melodic minors </div')
    }
    if(harm == 2){
        $(".well").append('<div class = "spaced_list"> 100% of harmonic minors </div')
    } else if(harm == 1){
        $(".bad").append('<div class = "spaced_list"> 50% of harmonic minors </div')
    } else{
        $(".bad").append('<div class = "spaced_list"> 0% of harmonic minors </div')
    }
}