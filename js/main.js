let width=$('nav').width();
$("#close").click(()=>{
    $("nav").animate({left:- width},1000);
    $("#groupe_icon").animate({left:"30px"},1000)
})
$("#open").click(()=>{
    $("nav").animate({left:0},1000);
    $("#groupe_icon").animate({left:"210px"},1000);
})

$('.singer').click(function(){
    let element=$(this).next('.singerData')
    if(element.css('display')=="none"){
        element.slideDown(1000)
    }else{
        element.slideUp(1000)
    }
})



$("#message").keypress(()=>{
    let mess=$('#message').val();
    let messNum=100;
    let count =mess.split("").length + 1;
    $('#countNum').html(messNum - count)
    if($("#countNum").text() < 0){
        $('#countNum').html("your available character finished")
    }
})
window.onload = function() {
    Time("24 August 2023 8:47:00");
}

function Time(count) {

    let date = new Date(count);
    date = (date.getTime()/1000);
    let current = new Date();
    current = (current.getTime()/1000);
    let timeDiff= (date - current);
    let days = Math.trunc( timeDiff/ (24*60*60));
    let hours = Math.trunc((timeDiff - (days * (24*60*60))) / 3600);
    let mins = Math.trunc((timeDiff - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.trunc((timeDiff - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
    $(".day").html(`${days} D`);
    $(".hour").html(`${hours} h`);
    $(".minute").html(`${ mins } m`);
    $('.second').html(`${ secs} s`)  
    setInterval(function() {
        Time(count); 
    }, 1000);
}






