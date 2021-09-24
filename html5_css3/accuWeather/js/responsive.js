$(function(){
    var gnbFlag = false;
    var gnbIndex;

    $(".nav li").on({  // .on: 그룹이벤트 등록
        "mouseenter" : function() {
            // lnb show

            if(gnbIndex != undefined) {
                $(".lnb").eq(gnbIndex).css("display","none");
            }

            gnbIndex = $(this).index();
            gnbFlag = true;

            $(".lnb_container").removeClass("disappear");
            $(".lnb_container").addClass("appear");
            $(".lnb_container").show();

            $(".lnb").eq(gnbIndex).css("display","block"); 

            // active bar show

            $(".active_bar").show();

            // 선택된 li의 left와 width를 구해 active_bar의 위치와 길이를 조절한다.
            var listLeft = $(this).offset().left;
            var listWidth = $(this).width();

            $(".active_bar").width(listWidth);
            $(".active_bar").offset({left: listLeft + 17}); //li에 padding이 있었으므로 17을 더한다.
        },
        "mouseleave" : function() {

        }
    });


    $(".lnb_container").on({
        "mouseleave" : function() {
            if (gnbFlag) {
                $(".lnb_container").remove("appear");
                $(".lnb_container").addClass("disappear");
                $(".lnb_container").hide();
                $(".active_bar").hide();
            } else {
                return;
            }
        }

    });

});