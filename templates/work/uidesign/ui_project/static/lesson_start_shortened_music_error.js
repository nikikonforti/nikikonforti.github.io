var isPlaying = false;
var audio = {};
    audio["maj"] = new Audio();
    audio["maj"].src = "http://midi-files.s3.amazonaws.com/C-major.mp3" //C MAJOR
    audio["nat"] = new Audio();
    audio["nat"].src = "http://midi-files.s3.amazonaws.com/Am-natural.mp3" //A MINOR NATURAL
    audio["harm"] = new Audio();
    audio["harm"].src = "http://midi-files.s3.amazonaws.com/Am-harmonic.mp3" //A MINOR HARMONIC
    audio["mel"] = new Audio();
    audio["mel"].src = "http://midi-files.s3.amazonaws.com/Am-melodic.mp3" //A MINOR MELODIC

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
      $(listen+"1").attr('src', "http://www.pngmart.com/files/3/Play-Button-Transparent-Background.png");
      $(listen+"2").attr('src', "http://www.pngmart.com/files/3/Play-Button-Transparent-Background.png");
      $(listen+"3").attr('src', "http://www.pngmart.com/files/3/Play-Button-Transparent-Background.png");
      $(listen+"4").attr('src', "http://www.pngmart.com/files/3/Play-Button-Transparent-Background.png");
      $(listen+"5").attr('src', "http://www.pngmart.com/files/3/Play-Button-Transparent-Background.png");


    } else {
      if(listen == "#listen_harmonic3"){
        console.log("it shoudl not happen here")
        audio[scale].currentTime = 2.1
        audio[scale].play();
        $(listen).attr('src', "https://www.freeiconspng.com/uploads/pause-button-png-24.png");
        setInterval(function(){ //TODO: this happens even when its not harmonic3. for example the log "it should not happen here" does not appear, but the log "this shoudl nto happen twice" does
          if(audio[scale].currentTime > 3.8){
            console.log("this should not happen twice")
            audio[scale].pause();
            audio[scale].currentTime = 0;
            $(listen).attr('src', "http://www.pngmart.com/files/3/Play-Button-Transparent-Background.png");
          }
        }, 100)
      } else{
        audio[scale].play();
        $(listen+"1").attr('src', "https://www.freeiconspng.com/uploads/pause-button-png-24.png");
        $(listen+"2").attr('src', "https://www.freeiconspng.com/uploads/pause-button-png-24.png");
        $(listen+"3").attr('src', "https://www.freeiconspng.com/uploads/pause-button-png-24.png");
        $(listen+"4").attr('src', "https://www.freeiconspng.com/uploads/pause-button-png-24.png");
        $(listen+"5").attr('src', "https://www.freeiconspng.com/uploads/pause-button-png-24.png");
      }
      
    }
  };

$(document).ready(function(){
    $( function() {
        $( "#progressbar_major" ).progressbar({
          value: 1/3 * 100
        });
        $( "#progressbar_natural" ).progressbar({
          value: 0
        });
        $( "#progressbar_harmonic" ).progressbar({
          value: 0
        });
        $( "#progressbar_melodic" ).progressbar({
          value: 0
        });
      } );
    $(".quiz").click(function(){
        window.location = "/templates/work/uidesign/ui_project/templates/quiz.html";
    });
    

    $(document).on("click", "img[id*='listen_major']", function(){
        togglePlay("maj", "#listen_major");
    })
    $(document).on("click", "img[id*='listen_natural']", function(){
        togglePlay("nat", "#listen_natural")
    })
    $(document).on("click", "img[id*='listen_harmonic']", function(){
        if($(this).attr("id") == "listen_harmonic3"){
          console.log("harmonic 3!")
          togglePlay("harm", "#listen_harmonic3")
        } else{
          togglePlay("harm", "#listen_harmonic")
        }
    })
    $(document).on("click", "img[id*='listen_melodic']", function(){
        togglePlay("mel", "#listen_melodic")
    })

    $(".next").click(function(){
        console.log("next clicked" + $(this).parent().attr('id'))
        var str = $(this).parent().attr('id')
        var page_num = parseInt(str.split("Page")[1])
        var page = str;
        var page_next = "Page" + (page_num+1).toString();
        console.log("num: " + page_num)
        $("#" + page).addClass("hide_page")
        $("#" + page_next).removeClass("hide_page")
    
          if(page_num < 3 ){
            console.log("times")
            $( "#progressbar_major" ).progressbar({
              value: (page_num+1)/3 * 100
            });
          } else if(page_num >= 3 && page_num < 5){
            console.log("page_num:" + page_num)
            $( "#progressbar_natural" ).progressbar({
              value: (page_num-2)/2 * 100
            });
          } else if(page_num >= 5 && page_num < 8){
            $( "#progressbar_harmonic" ).progressbar({
              value: (page_num-4)/3 * 100
            });
          } else{
            $("#progressbar_melodic").progressbar({
              value: (page_num-7)/6 * 100
            })
          }
          //$('#progressbar_major').attr('aria-valuenow', val+"%").css('width', val+"%");

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
        if(page_num <= 3 ){
          console.log("times")
          $( "#progressbar_major" ).progressbar({
            value: (page_num-1)/3 * 100
          });
        } else if(page_num > 3 && page_num <= 5){
          console.log("page_num:" + page_num)
          $( "#progressbar_natural" ).progressbar({
            value: (page_num-4)/2 * 100
          });
        } else if(page_num > 5 && page_num <= 8){
          $( "#progressbar_harmonic" ).progressbar({
            value: (page_num-6)/3 * 100
          });
        } else{
          $("#progressbar_melodic").progressbar({
            value: (page_num-9)/6 * 100
          })
        }
          //var val = (page_num-1)/14 * 100
          //$('#theprogressbar').attr('aria-valuenow', val+"%").css('width', val+"%");
    })
    $("#maj").click(function(){
        var page = "Page14"
        var go_to = "Page3"
        $("#" + page).addClass("hide_page")
        $("#" + go_to).removeClass("hide_page")
        var val = (3)/14 * 100
          $('#theprogressbar').attr('aria-valuenow', val+"%").css('width', val+"%");
    })
    $("#nat").click(function(){
        var page = "Page14"
        var go_to = "Page4"
        $("#" + page).addClass("hide_page")
        $("#" + go_to).removeClass("hide_page")
        var val = (4)/14 * 100
          $('#theprogressbar').attr('aria-valuenow', val+"%").css('width', val+"%");
    })
    $("#harm").click(function(){
        var page = "Page14"
        var go_to = "Page6"
        $("#" + page).addClass("hide_page")
        $("#" + go_to).removeClass("hide_page")
        var val = (6)/14 * 100
          $('#theprogressbar').attr('aria-valuenow', val+"%").css('width', val+"%");
    })
    $("#mel").click(function(){
        var page = "Page14"
        var go_to = "Page9"
        $("#" + page).addClass("hide_page")
        $("#" + go_to).removeClass("hide_page")
        var val = (9)/14 * 100
          $('#theprogressbar').attr('aria-valuenow', val+"%").css('width', val+"%");
    })
    $("#progressbar_major").click(function(){
        var go_to = "Page3"
        $("div[id*='Page']").addClass("hide_page")
        $("#" + go_to).removeClass("hide_page")
        $( "#progressbar_major" ).progressbar({
          value: (2)/3 * 100
        });
        $( "#progressbar_natural" ).progressbar({
          value: 0
        });
        $( "#progressbar_harmonic" ).progressbar({
          value: 0
        });
        $( "#progressbar_melodic" ).progressbar({
          value: 0
        });
    })
    $("#progressbar_natural").click(function(){
        var go_to = "Page4"
        $("div[id*='Page']").addClass("hide_page")
        $("#" + go_to).removeClass("hide_page")
        $( "#progressbar_major" ).progressbar({
          value: 100
        });
        $( "#progressbar_natural" ).progressbar({
          value: (1)/2 * 100
        });
        $( "#progressbar_harmonic" ).progressbar({
          value: 0
        });
        $( "#progressbar_melodic" ).progressbar({
          value: 0
        });
    })
    $("#progressbar_harmonic").click(function(){
      var go_to = "Page6"
      $("div[id*='Page']").addClass("hide_page")
      $("#" + go_to).removeClass("hide_page")
      $( "#progressbar_major" ).progressbar({
        value: 100
      });
      $( "#progressbar_natural" ).progressbar({
        value: 100
      });
      $( "#progressbar_harmonic" ).progressbar({
        value: (1)/3 * 100
      });
      $( "#progressbar_melodic" ).progressbar({
        value: 0
      });
    })  
    $("#progressbar_melodic").click(function(){
      var go_to = "Page9"
      $("div[id*='Page']").addClass("hide_page")
      $("#" + go_to).removeClass("hide_page")
      $( "#progressbar_major" ).progressbar({
        value: 100
      });
      $( "#progressbar_natural" ).progressbar({
        value: 100
      });
      $( "#progressbar_harmonic" ).progressbar({
        value: 100
      });
      $( "#progressbar_melodic" ).progressbar({
        value: (1)/6 * 100
      });
  })

});