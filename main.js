let big_pic = document.querySelector(".big_pic");
// let img0 = document.querySelector(".img0");
// let img1 = document.querySelector(".img1");
// let img2 = document.querySelector(".img2");
// let img3 = document.querySelector(".img3");
// let img4 = document.querySelector(".img4");
let container = document.querySelector(".container");

function change_phone(src_img){
    big_pic.src= src_img ;
}
function change_color (color){
    container.style.background= color ;
}


////////////////////////////////////////another way to write js code .///////////////////
// img0.addEventListener("click" , (eo) => {
//     container.style.background = "#000"
//     big_pic.src="./images/0.png"
// })
// img1.addEventListener("click" , (eo) => {
//     container.style.background = "#247ec8"
//     big_pic.src="./images/1.png"
// })
// img2.addEventListener("click" , (eo) => {
//     container.style.background = "#1e1e1e"
//     big_pic.src="./images/2.png"
// })
// img3.addEventListener("click" , (eo) => {
//     container.style.background = "#c79b53"
//     big_pic.src="./images/3.png"
// })
// img4.addEventListener("click" , (eo) => {
//     container.style.background = "#c82525"
//     big_pic.src="./images/4.png"
// })
