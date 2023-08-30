//Setting Variables

const p1 = $("#p1");
const p2 = $("#p2");
const p3 = $("#p3");
const p4 = $("#p4");
const p5 = $("#p5");
const p6 = $("#p6");
const p7 = $("#p7");
const screenWidth = window.innerWidth;
//Adding Events

if(screenWidth > 768){
    p1.on('click', function () {
        p1.hide(200);
    })
    p2.on('click', function () {
        p2.hide(200);
    })
    p3.on('click', function () {
        p3.hide(200);
    })
    p4.on('click', function () {
        p4.hide(200);
    })
    p5.on('click', function () {
        p5.hide(200);
    })
    p6.on('click', function () {
        p6.hide(200);
    })
    p7.on('click', function () {
        p1.show(200);
        p2.show(200);
        p3.show(200);
        p4.show(200);
        p5.show(200);
        p6.show(200);
        p7.hide(200);
    })
    
}

// MediaQuery for smartphone


//Function to adjust the layout according with the width


if (screenWidth <= 991) {
    //logic for screen less than 767px

    //Enabling the links that are disabled on the media querie for Smartphone
    const btnPage = $("#btnPage");
    const disabled = $(".disabled");
    btnPage.on('click', function () {
        if (disabled.css("display") === "none") {
            disabled.css("display", "block");
        } else {
            disabled.css("display", "none");
        }

    })

    p1.on('click', function () {
        p1.hide(200);
        p2.show(200);
    })
    p2.on('click', function () {
        p2.hide(200);
        p3.show(200);
    })
    p3.on('click', function () {
        p3.hide(200);
        p4.show(200);
    })
    p4.on('click', function () {
        p4.hide(200);
        p5.show(200);
    })
    p5.on('click', function () {   
        p5.hide(200);
        p6.show(200);
    })
    p6.on('click', function () {
        p6.hide(200);
        p7.show(200);
    })
    p7.on('click', function(){
        p7.hide(200);
        p1.show(200);
    })
    
}