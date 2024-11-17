const header = document.querySelector(".header");
const menuBar = document.querySelector(".menu-bar");
const navbar = document.querySelector(".navbar");
const closeMark = document.querySelector(".close");
const courseDesc = document.querySelectorAll(".course_desc");
const navlinks = document.querySelectorAll(".navlinks");




menuBar.addEventListener("click", (e) => {
     navbar.classList.add("active");
})
closeMark.addEventListener("click", (e) => {
     let parent = e.target.parentNode.parentNode;     
     parent.classList.remove("active");
})


window.addEventListener("scroll", () =>{     
    header.classList.toggle("active", window.scrollY > 50)
});

const sliceText = () =>{
     courseDesc.forEach((item) => {
          let val = item.textContent;
          
          let result = val.slice(0, 130)
     
          item.innerHTML = result + "...";
     })     
}
sliceText()

let currentLocation = location.href;
let navLinkLen = navlinks.length;

for (let i=0; i< navLinkLen; i++) {
     if(navlinks[i].href === currentLocation){
          navlinks[i].classList.add("active")
     }else{
          navlinks[i].classList.remove("active")
     }
     
}