$(document).ready(function() {
    flag = localStorage.setItem("flag", 1)
    $("#hover-right").click(function() {
        if (localStorage.getItem('flag') == 0) {
            $("#side1").css("z-index", "99");
            $("#side2").css("z-index", "9");
            $("#side3").css("z-index", "9");
            $("#side1").css("transform", "translateX(5px) scale(1)");
            $("#side2").css("transform", "translateX(-0px) scale(1)");
            $("#side3").css("transform", "translateX(90px) scale(1)");
            localStorage.setItem('flag', 1);
            $("#side3").css("opacity", 0.6);
            $("#side1").css("opacity", 1);
        } else if (localStorage.getItem('flag') == 1) {
            $("#side2").css("z-index", "99");
            $("#side3").css("z-index", "9");
            $("#side1").css("z-index", "9");
            $("#side3").css("transform", "translateX(-200px)  ");
            $("#side1").css("transform", "translateX(140px) scale(.8)");
            $("#side2").css("transform", "translateX(150px) scale(1.3)");
            // Opacity
            $("#side1").css("opacity", 0.6);
            $("#side2").css("opacity", 1);
            localStorage.setItem('flag', 2);
        } else if (localStorage.getItem('flag') == 2) {
            $("#side3").css("z-index", "99");
            $("#side2").css("z-index", "9");
            $("#side1").css("z-index", "9");
            $("#side2").css("transform", "translateX(290px) scale(1) ");
            $("#side3").css("transform", "translateX(-40px) scale(1.3)");
            $("#side1").css("transform", "translateX(-140px) scale(0.8) ");
            localStorage.setItem('flag', 0);
            $("#side3").css("opacity", 1);
            $("#side2").css("opacity", 0.6);
        }
    });


    $("#hover-left").click(function() {
        if (localStorage.getItem('flag') == 0) {
            $("#side3").css("z-index", "9");
            $("#side2").css("z-index", "9");
            $("#side1").css("z-index", "99");
            $("#side3").css("transform", "translateX(90px) scale(1)");
            $("#side1").css("transform", "translateX(0px) scale(1)");
            $("#side2").css("transform", "translateX(0px)");
            localStorage.setItem('flag', 1);
            $("#side1").css("opacity", 1);
            $("#side2").css("opacity", 0.6);
        } else if (localStorage.getItem('flag') == 1) {
            $("#side2").css("z-index", "9");
            $("#side3").css("z-index", "99");
            $("#side1").css("z-index", "9");
            $("#side2").css("transform", "translateX(290px) scale(1)");
            $("#side3").css("transform", "translateX(-40px) scale(1.3)");
            $("#side1").css("transform", "translateX(-138px)  scale(.8)");
            localStorage.setItem('flag', 2);
            $("#side3").css("opacity", 1);
            $("#side1").css("opacity", 0.6);
        } else if (localStorage.getItem('flag') == 2) {
            $("#side1").css("z-index", "9");
            $("#side2").css("z-index", "99");
            $("#side3").css("z-index", "9");
            $("#side1").css("transform", "translateX(140px) scale(.8)");
            $("#side2").css("transform", "translateX(148px) scale(1.3)");
            $("#side3").css("transform", "translateX(-200px)");
            localStorage.setItem('flag', 0);
            $("#side3").css("opacity", 0.6);
            $("#side2").css("opacity", 1);
        }
    });

    // ================== Right

    $("#hover-right-1").click(function() {
        if (localStorage.getItem('flag') == 0) {
            $("#side1-r").css("z-index", "99");
            $("#side2-r").css("z-index", "9");
            $("#side3-r").css("z-index", "9");
            $("#side1-r").css("transform", "translateX(5px) scale(1)");
            $("#side2-r").css("transform", "translateX(-0px) scale(1)");
            $("#side3-r").css("transform", "translateX(90px) scale(1)");
            localStorage.setItem('flag', 1);
            $("#side3-r").css("opacity", 0.6);
            $("#side1-r").css("opacity", 1);
        } else if (localStorage.getItem('flag') == 1) {
            $("#side2-r").css("z-index", "99");
            $("#side3-r").css("z-index", "9");
            $("#side1-r").css("z-index", "9");
            $("#side3-r").css("transform", "translateX(-200px)  ");
            $("#side1-r").css("transform", "translateX(140px) scale(.8)");
            $("#side2-r").css("transform", "translateX(150px) scale(1.3)");
            // Opacity
            $("#side1-r").css("opacity", 0.6);
            $("#side2-r").css("opacity", 1);
            localStorage.setItem('flag', 2);
        } else if (localStorage.getItem('flag') == 2) {
            $("#side3-r").css("z-index", "99");
            $("#side2-r").css("z-index", "9");
            $("#side1-r").css("z-index", "9");
            $("#side2-r").css("transform", "translateX(290px) scale(1) ");
            $("#side3-r").css("transform", "translateX(-40px) scale(1.3)");
            $("#side1-r").css("transform", "translateX(-140px) scale(0.8) ");
            localStorage.setItem('flag', 0);
            $("#side3-r").css("opacity", 1);
            $("#side2-r").css("opacity", 0.6);
        }
    });
    // Left

    $("#hover-left-1").click(function() {
        if (localStorage.getItem('flag') == 0) {
            $("#side3-r").css("z-index", "9");
            $("#side2-r").css("z-index", "9");
            $("#side1-r").css("z-index", "99");
            $("#side3-r").css("transform", "translateX(90px) scale(1)");
            $("#side1-r").css("transform", "translateX(0px) scale(1)");
            $("#side2-r").css("transform", "translateX(0px)");
            localStorage.setItem('flag', 1);
            $("#side1-r").css("opacity", 1);
            $("#side2-r").css("opacity", 0.6);
        } else if (localStorage.getItem('flag') == 1) {
            $("#side2-r").css("z-index", "9");
            $("#side3-r").css("z-index", "99");
            $("#side1-r").css("z-index", "9");
            $("#side2-r").css("transform", "translateX(290px) scale(1)");
            $("#side3-r").css("transform", "translateX(-40px) scale(1.3)");
            $("#side1-r").css("transform", "translateX(-138px)  scale(.8)");
            localStorage.setItem('flag', 2);
            $("#side3-r").css("opacity", 1);
            $("#side1-r").css("opacity", 0.6);
        } else if (localStorage.getItem('flag') == 2) {
            $("#side1-r").css("z-index", "9");
            $("#side2-r").css("z-index", "99");
            $("#side3-r").css("z-index", "9");
            $("#side1-r").css("transform", "translateX(140px) scale(.8)");
            $("#side2-r").css("transform", "translateX(148px) scale(1.3)");
            $("#side3-r").css("transform", "translateX(-200px)");
            localStorage.setItem('flag', 0);
            $("#side3-r").css("opacity", 0.6);
            $("#side2-r").css("opacity", 1);
        }
    });
});