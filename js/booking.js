//basefare div manipulation
const plusicon = document.querySelector(".basefare-section")
const basefare  = document.querySelector(".fare--div")
const basefarePrice = document.querySelector(".basefare-price")
const imgsrc = document.querySelector(".bfs-img")
//toggle the image icon
let toggle = true
function imgchange(){
  toggle = !toggle
  if(toggle){
    imgsrc.src = "../images/bookingImg/plus.png"
  } else{
    imgsrc.src = "../images/bookingImg/minus.png"
  }
} 
plusicon.addEventListener("click", (e)=>{
  basefare.classList.toggle("displayn")
  basefarePrice.classList.toggle("displayn")
  imgchange()
})
//surcharge div mani
const plusicon2 = document.querySelector(".surcharge-section")
const plusicon3 = document.querySelector(".surcharge-section1")
const surchargefare  = document.querySelector(".fare--div2")
const surchargefare2  = document.querySelector(".fare--div3")
const surchargePrice = document.querySelector(".surcharge-price")
const surchargePrice1 = document.querySelector(".surcharge-price1")
const surchargePrice2 = document.querySelector(".surcharge-price2")

plusicon2.addEventListener("click", (e)=>{
  surchargefare.classList.toggle("displayn")
  surchargePrice.classList.toggle("displayn")
 
})


plusicon3.addEventListener("click", (e)=>{
  surchargefare2.classList.toggle("displayn")
  surchargePrice1.classList.toggle("displayn")
 
})

// ================ Insurance pop alert =================
const secureTrip = document.querySelector(".secure-trip")
const noMessage = document.querySelector(".no-message")
const yesMessage = document.querySelector(".yes-message")
secureTrip.addEventListener("click", (e)=>{
  
  if(e.target.classList.contains("yes-secure")){
    yesMessage.classList.remove("displayn")
    noMessage.classList.add("displayn")
  }
  if(e.target.classList.contains("no-secure")){
     noMessage.classList.remove("displayn")
     yesMessage.classList.add("displayn")
  }
})

// notAddedText.classList.add("displayn")


//Traveller review details Pop-Up

const popupWindow = document.querySelector(".review-popup")
let noOfPassenger = 5
let countOfpass = 0
for(i = 1; i<=noOfPassenger; i++){

popupWindow.innerHTML += ` <table class="cardreview-wrap">
                    <tr>
                        <th colspan="2">ADULT ${++countOfpass}</th>
                    </tr>
                    <tr>
                        <td>First & Middle Name</td>
                        <td>Kishore</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>Ch</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>Male</td>
                    </tr>
            </table> `
}


const clickContinue = document.querySelector(".continue-btn")
const clickEdit = document.querySelector(".edit")
const clickCross = document.querySelector(".close-review-box")


clickContinue.addEventListener("click", (e)=>{
  document.querySelector(".rd-popup-box").style.display = "flex";
})

function closeReviewTravellers(){
  document.querySelector(".rd-popup-box").style.display = "none";
}


clickEdit.addEventListener("click", closeReviewTravellers)
clickCross.addEventListener("click", closeReviewTravellers)

