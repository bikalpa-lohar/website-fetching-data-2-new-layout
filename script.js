
const allSlidingList= document.querySelector(".sliding-list");
const slideListItems= document.querySelectorAll(".slide-list-item");
let currentCount= 0;

const slideNext= document.getElementById("slideNext");
slideNext.addEventListener("click", () => {
    console.log("aaaaaa")
    if(Array.from(slideListItems).length-1 > currentCount){
        currentCount++;
        allSlidingList.style.transform= `translateX(${-38 * currentCount}vw)`;
    }
})

const slidePrev= document.getElementById("slidePrev");
slidePrev.addEventListener("click", () => {
    if(currentCount > 0){
        currentCount--;
        allSlidingList.style.transform= `translateX(${-38 * currentCount}vw)`;
    }
})