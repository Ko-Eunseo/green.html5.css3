// https://api.openweathermap.org/data/2.5/weather?q=incheon&appid=13f6294f3ff96dd418cc6f91fda24fad&units=metric&lang=kr

var url = "https://api.openweathermap.org/data/2.5/weather";
url += "?appid=13f6294f3ff96dd418cc6f91fda24fad";
url += "&units=metric";
url += "&lang=kr";
url += "&q=";


// 현재 날씨의 모든 정보 얻어오기
function getCurrentWeather(city){
    var dataObj;

    $.ajax({
        type: "GET",
        url: url += city,
        dataType: "json",
        // 비동기가 아니라 동기로 바꿈. 기본값 async:true;임
        async: false, //결과 데이터를 리턴시키기 위해 동기 방식으로 변경
        success: function(data) {
            //정상 응답시 처리 작업: 바인딩
            console.log(data);
            dataObj = data;

        },
        error: function(request, status, error) {
            //응답 에러시 처리 작업
            console.log("code:" + request.staus);
            console.log("message:" + request.responseText);
            console.log("error" + error);
        }
    });
    return dataObj;
};

// 현재날씨 온도 얻어오기
function getCurrentTemp(city){
    var temp;
    var openWeatherAPI = url; //city가 계쏙 붙으므로 url초기화를 위해 반드시 넣어줌

    $.ajax({
        type: "GET",
        url: openWeatherAPI += city, 
        dataType: "json",
        async: false, //결과 데이터를 리턴시키기 위해 동기 방식으로 변경
        success: function(data) {
            //정상 응답시 처리 작업: 바인딩
            console.log(data);
            temp = Math.floor(data.main.temp);//소수점 버림

        },
        error: function(request, status, error) {
            //응답 에러시 처리 작업
            console.log("code:" + request.staus);
            console.log("message:" + request.responseText);
            console.log("error" + error);
        }
    });
    return temp;

};