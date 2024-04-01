let btn = document.querySelector("#btn_msg");
let toast = document.querySelector(".toast");
let toastTitle = document.querySelector(".toast_text_1");
let toastMsg = document.querySelector(".toast_text_2");
let toastImg = document.querySelector(".toast_img");
let closeIcon = document.querySelector(".toast_close");
let progress = document.querySelector("#toast_progress");
let timer1, timer2;

const checkbox = document.querySelector("#verificar");

//agrego los eventos apenas se carga el dom para no generar errores
document.addEventListener("DOMContentLoaded", () => {
  btn.addEventListener("click", checkInformation);
  closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");
    setTimeout(() => {
      progress.classList.remove("active");
      if(progress.classList.contains("toast_progress_check")){
        progress.classList.remove("toast_progress_check");
      } else if(progress.classList.contains("toast_progress_error")){
        progress.classList.remove("toast_progress_error");
      }
    }, 300);
    clearTimeout(timer1);
    clearTimeout(timer2);
  });
});

/*
chequea informacion envia datos a la funcion que lo define y
 llama a la funcion que lo activa pasandole como parametro 
 si la info es correcta o no
 */ 
const checkInformation = () => {
  let checked = checkbox.checked;
  let t, msg;
  if (checked) {
    t = "Success";
    msg = "Your changes has been saved";
    progress.classList.add("toast_progress_check");
  } else {
    t = "Oops!";
    msg = "Changes could not be saved";
    progress.classList.add("toast_progress_error");
  }
  defineToast(t, msg, checked);
  activarToast(checked);
};

//activa un toast
//recibe infor para saber que clase eliminar dentro del progress
const activarToast = (bool) => {
  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 5000);
  timer2 = setTimeout(() => {
    if (bool) {
        
      progress.classList.remove("toast_progress_check");
      console.log("se elimino el verdadero")
    } else {
      progress.classList.remove("toast_progress_error");
      console.log("se elimino el falso")

    }
    progress.classList.remove("active");
  }, 5300);
};

//modifica el toast antes de ser activado
const defineToast = (title, msg, bool) => {
  let color;
  toastTitle.innerHTML = title;
  toastMsg.innerHTML = msg;
  if (bool) {
    toastImg.src = "/ToastNotification/assets/check-circle.svg";
    color = "rgba(51, 204, 51, 1)";
  } else {
    toastImg.src = "/ToastNotification/assets/error-circle.svg";
    color = "rgba(224, 51, 51, 1)";
  }
  toast.style.borderLeft = ` 6px solid ${color}`;
};
