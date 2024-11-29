document.addEventListener("DOMContentLoaded",function(){
    const minsHand=document.querySelector(".minutesneedle");
    const secondsHand=document.querySelector(".secondsneedle");
    const hoursHand=document.querySelector(".hoursneedle");
    const hoursInDigital=document.querySelector(".digHours");
    const minInDigital=document.querySelector(".digMinutes");
    const secInDigital=document.querySelector(".digSeconds");
    const months=["jan","feb","mar","apr","may",
            "june","july","Aug","sep","oct",
            "nov" ,"dec"
            ];
            const today=new Date();
            const monthofyear=today.getMonth()
            const curryear=today.getFullYear()
            const currdate=today.getDate()
            document.getElementById("monthDate").innerText=months[monthofyear];
            document.querySelector("#fullyear").textContent=curryear;
            document.querySelector("#date").innerText=currdate;


            


    function setTime(){
        const now=new Date();
        // console.log(now)
        const minutes=now.getMinutes();
        const seconds=now.getSeconds();
        const hours=now.getHours();
        // console.log(hours)
        const secindeg=seconds*6; //1sec=6deg then for eacha and every second 
        const minindeg=(minutes/60)*360;
        const houindeg=(hours/12)*360;
        minsHand.style.transform="rotate("+minindeg+"deg)";
        secondsHand.style.transform="rotate("+secindeg+"deg)";
        hoursHand.style.transform="rotate("+houindeg+"deg)";
        hoursInDigital.textContent=hours;
        minInDigital.textContent=minutes;
        secInDigital.innerText=seconds;
    }
    setTime(); // Initial call to set the time immediately
    setInterval(setTime, 1000); // Update the time every second
}
    
)



   