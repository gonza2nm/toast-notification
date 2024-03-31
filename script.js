let btn = document.querySelector("#btn_msg");
let toast = document.querySelector(".toast");
let toastTitle = document.querySelector(".toast_text_1");
let toastMsg = document.querySelector(".toast_text_2");
let toastImg = document.querySelector(".toast_response");
let closeIcon = document.querySelector(".toast_close");
let progress = document.querySelector(".toast_progress");

document.addEventListener("DOMContentLoaded", () => {
    btn.addEventListener("click", checkInformation);    
})

const checkInformation = () => {
    let infor = true;
    let t;
    let msg;
    if(infor){
        t = "Success";
        msg = "Your changes has been saved";
    } else {
        t = "Oops!";
        msg = "Changes Could Not Be Saved";
    }
    defineToast(t,msg,infor);
}

//indica si el toast que se va a mostrar es de error o de exito
const defineToast = (title,msg,bool) => {
    let color;
    toastTitle.innerHTML = title;
    toastMsg.innerHTML = msg;
    if(bool){
       toastImg.src = "/ToastNotification/assets/check-circle.svg";
       color = "rgba(51, 204, 51, 1)";
    } else {
        toastImg.src = "/ToastNotification/assets/error-circle.svg";
        color = "rgba(224, 51, 51, 1)"; 
    }
    toast.style.borderLeft = ` 6px solid ${color}`;    
}