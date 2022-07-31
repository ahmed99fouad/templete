//toggel spin class on icon
// document.querySelector(".toggel .fa-gear").onclick = function() {
//     this.classList.toggle("fa-spin");

//     document.querySelector(".sitting-box").classList.toggle("open");
// };

//select landing page element
let landingpage = document.querySelector(".Home");

//get arrey
let imgArray = ["c0.jpg", "c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg"];
landingpage.style.backgroundImage = 'url("../dist/img/compound/c0.jpg")';

setInterval(() => {
    //get random num
    let randomnumber = Math.floor(Math.random() * imgArray.length);
    //chang background image url

    landingpage.style.backgroundImage =
        'url("../dist/img/compound/' + imgArray[randomnumber] + '")';

    console.log(randomnumber);
}, 6000);

/////////
const speed = 800;

document.querySelectorAll("#count").forEach((count) => {
    const counterNumber = +count.getAttribute("countTO");

    const updateCount = setInterval(() => {
        const divContent = +count.innerText;
        const increaseBy = counterNumber / speed;

        divContent < counterNumber ?
            (count.innerHTML = Math.ceil(divContent + increaseBy)) :
            clearInterval(updateCount);
    }, 1);
});

///////////////animation-------->
let section = document.querySelector(".Projects");
let spans = document.querySelectorAll(".projimg");

window.onscroll = function() {
    if (window.scrollY >= section.offsetTop) {
        console.log("Reached Section Three");
        vue1.start;
        // spans.forEach((projimg) => {
        //     projimg.style.animation = projimg.dataset.animation;
        // });
    }
};

//

AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 3000, // values from 0 to 3000, with step 50ms
});