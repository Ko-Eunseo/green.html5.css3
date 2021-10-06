// var result = getCurrentWeather("incheon");
// console.log(result);

var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"]

$(".temp").each(function(i) {
    $(this).text(getCurrentTemp(cityList[i]) + "℃");
});

$(".location").on({
    "click" : function() {
        var q = $(this).children(".q").attr("id");
        var redirectURL = "pages/weather_location.html?q=" + q; //경로는 항상 메인 페이지 기준
        location.href = redirectURL;
    }
});



