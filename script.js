const rides=document.querySelectorAll(".ride");
const bookBtn=document.getElementById("bookBtn");
const result=document.getElementById("result");
const closeResult=document.getElementById("closeResult");
const rideDetails=document.getElementById("rideDetails");
const trackBtn=document.getElementById("trackBtn");

let selectedRide="Bike";
let pricePerKm=8;

rides.forEach(ride=>{
ride.addEventListener("click",()=>{
rides.forEach(r=>r.classList.remove("active"));
ride.classList.add("active");
selectedRide=ride.dataset.type;
pricePerKm=Number(ride.dataset.price);
});
});

bookBtn.addEventListener("click",()=>{
const pickup=document.getElementById("pickup").value.trim();
const destination=document.getElementById("destination").value.trim();

if(!pickup||!destination){
alert("Please enter pickup and destination.");
return;
}

const distance=Math.floor(Math.random()*9)+3;
const fare=distance*pricePerKm;

rideDetails.innerHTML=`<b>${selectedRide}</b> ride from <b>${pickup}</b> to <b>${destination}</b><br>Estimated distance: ${distance} km<br>Estimated fare: ₹${fare}`;

result.classList.remove("hidden");
});

closeResult.addEventListener("click",()=>{
result.classList.add("hidden");
});

trackBtn.addEventListener("click",()=>{
alert("Your driver is on the way! Estimated arrival: 5 minutes.");
});