// 테이블
var border = c;
var a = 10, b = 20, c = 30;

var str = "<table border='"+ border + "'>";
str += "<tr>";
str += "<td>" + a + "</td><td>" + b + "</td><td>" + c + "</td>";
str += "</tr>";
str += "</table>";
document.write(str);

//한칸 띄기
var br = "<br />"
document.write(br);

//리스트
var str2 = "<ul><li>" + a + "</li>";
    str2 += "<li>" + b + "</li><li>" + c + "</li></ul>";
document.write(str2);

document.write(br);

//버튼
var btn = "<button>";
    btn += "push the button!";
    btn += "</button>";
document.write(btn);

document.write(br);

//앵커
var page = "https://www.naver.com/"
var word = "come in"
var ancher = "<a href=" + page + ">";
    ancher += word;
    ancher += "</a>";
document.write(ancher);

document.write(br);

//이미지
var penguins = "/html5_css3/sourse/ch_2/Penguins.jpg";

var img = "<img src='" + penguins + "'>"
    img += "</img>";
document.write(img);