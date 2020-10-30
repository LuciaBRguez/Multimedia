$(document).ready(function(){
    $("#image-1").click(function(){
        $("#image-text-2").css({"display":"none"});
        $("#image-text-3").css({"display":"none"});
        $("#image-text-4").css({"display":"none"});
        if ($("#image-2").hasClass("zoom")){
            $("#image-2").removeClass("zoom");
            $("#image-2").addClass("no-zoom");
        }else if ($("#image-3").hasClass("zoom")){
            $("#image-3").removeClass("zoom");
            $("#image-3").addClass("no-zoom");
        }else if ($("#image-4").hasClass("zoom")){
            $("#image-4").removeClass("zoom");
            $("#image-4").addClass("no-zoom");
        }
        if ($(this).hasClass("no-zoom")){
            $(this).removeClass("no-zoom");
            $(this).addClass("zoom");
            $("#image-text-1").css({"display":"block"});
        }else{
            $(this).removeClass("zoom");
            $(this).addClass("no-zoom");
            $("#image-text-1").css({"display":"none"});
        }
    });

    $("#image-2").click(function(){
        $("#image-text-1").css({"display":"none"});
        $("#image-text-3").css({"display":"none"});
        $("#image-text-4").css({"display":"none"});
        if ($("#image-1").hasClass("zoom")){
            $("#image-1").removeClass("zoom");
            $("#image-1").addClass("no-zoom");
        }else if ($("#image-3").hasClass("zoom")){
            $("#image-3").removeClass("zoom");
            $("#image-3").addClass("no-zoom");
        }else if ($("#image-4").hasClass("zoom")){
            $("#image-4").removeClass("zoom");
            $("#image-4").addClass("no-zoom");
        }
        if ($(this).hasClass("no-zoom")){
            $(this).removeClass("no-zoom");
            $(this).addClass("zoom");
            $("#image-text-2").css({"display":"block"});
        }else{
            $(this).removeClass("zoom");
            $(this).addClass("no-zoom");
            $("#image-text-2").css({"display":"none"});
        }
    });

    $("#image-3").click(function(){
        $("#image-text-1").css({"display":"none"});
        $("#image-text-2").css({"display":"none"});
        $("#image-text-4").css({"display":"none"});
        if ($("#image-2").hasClass("zoom")){
            $("#image-2").removeClass("zoom");
            $("#image-2").addClass("no-zoom");
        }else if ($("#image-1").hasClass("zoom")){
            $("#image-1").removeClass("zoom");
            $("#image-1").addClass("no-zoom");
        }else if ($("#image-4").hasClass("zoom")){
            $("#image-4").removeClass("zoom");
            $("#image-4").addClass("no-zoom");
        }
        if ($(this).hasClass("no-zoom")){
            $(this).removeClass("no-zoom");
            $(this).addClass("zoom");
            $("#image-text-3").css({"display":"block"});
        }else{
            $(this).removeClass("zoom");
            $(this).addClass("no-zoom");
            $("#image-text-3").css({"display":"none"});
        }
    });

    $("#image-4").click(function(){
        $("#image-text-1").css({"display":"none"});
        $("#image-text-2").css({"display":"none"});
        $("#image-text-3").css({"display":"none"});
        if ($("#image-2").hasClass("zoom")){
            $("#image-2").removeClass("zoom");
            $("#image-2").addClass("no-zoom");
        }else if ($("#image-3").hasClass("zoom")){
            $("#image-3").removeClass("zoom");
            $("#image-3").addClass("no-zoom");
        }else if ($("#image-1").hasClass("zoom")){
            $("#image-1").removeClass("zoom");
            $("#image-1").addClass("no-zoom");
        }
        if ($(this).hasClass("no-zoom")){
            $(this).removeClass("no-zoom");
            $(this).addClass("zoom");
            $("#image-text-4").css({"display":"block"});
        }else{
            $(this).removeClass("zoom");
            $(this).addClass("no-zoom");
            $("#image-text-4").css({"display":"none"});
        }
    });
});