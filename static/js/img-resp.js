$(document).ready(function () {

    var domain = $("#domain").val();
    var basePath=domain+"/backoffice/images/";
    var imgPaths = {"original" : basePath,"thumbBig" : basePath+"thumbs/big/",
        "thumbMedium" : basePath+"thumbs/medium/", "thumbSmall" : basePath+"thumbs/small/"};

    $(".lazyload").each(function(){

        //onload: detect viewport width / backoffice paths
        var Wwidth = $(window).width();
        var path = imgPaths["original"];
        var section = $(this).data("section");

        //onload: set home-slider width breakpoints
        if(section === "home"){
            path = imgPaths["original"];
            if(Wwidth <= 568){
                path = imgPaths["thumbBig"];
            }
        }else{
            //onload: set common-img width breakpoints
            if(Wwidth <= 1024 && Wwidth > 568){
                path = imgPaths["thumbBig"];
            }else if(Wwidth <= 568 && Wwidth > 375){
                path = imgPaths["thumbMedium"];
            }else if(Wwidth <= 375){
                path = imgPaths["thumbSmall"];
            }
        }

        //onwidth-breakpoints: change img url
        var fileName = $(this).data("filename");
        var src = path + fileName;
        if($(this).is("img")){
            $(this).attr("src",src);
        }else if($(this).is("a")){
            $(this).attr("href",src);
        }else{
            $(this).css("background-image", "url(" + src + ")");
        }
    });
});