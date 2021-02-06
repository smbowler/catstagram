var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;

$(document).ready(function() {

    $("#likeBtn1").click(function(){
        counter1++;

        $("#likeCount1").text(counter1);
    });

    $("#likeBtn2").click(function(){
        counter2++;

        $("#likeCount2").text(counter2);
    });

    $("#likeBtn3").click(function(){
        counter3++;

        $("#likeCount3").text(counter3);
    });

    $("#likeBtn4").click(function(){
        counter4++;

        $("#likeCount4").text(counter4);
    });

    $("#likeBtn5").click(function(){
        counter5++;

        $("#likeCount5").text(counter5);
    });

});