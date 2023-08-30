//Setting Variables

const p1 = $("#p1");
const p2 = $("#p2");
const p3 = $("#p3");
const p4 = $("#p4");
const p5 = $("#p5");
const p6 = $("#p6");
const p7 = $("#p7");

//Adding Events

p1.on('click', function () {
    p1.hide(200);
})
p2.on('click', function () {
    p1.show(200);
    p2.hide(200);
})
p3.on('click', function () {
    p1.show(200);
    p2.show(200);
    p3.hide(200);
})
p4.on('click', function () {
    p1.show(200);
    p2.show(200);
    p3.show(200);
    p4.hide(200);
})
p5.on('click', function () {
    p1.show(200);
    p2.show(200);
    p3.show(200);
    p4.show(200);
    p5.hide(200);
})
p6.on('click', function () {
    p1.show(200);
    p2.show(200);
    p3.show(200);
    p4.show(200);
    p5.show(200);
    p6.hide(200);
})
p6.on('click', function () {
    p1.show(200);
    p2.show(200);
    p3.show(200);
    p4.show(200);
    p5.show(200);
    p6.show(200);
    p7.hide(200);
})

