let toggleBtn = document.getElementById("toggle-btn");
let body = document.body;
let darkMode = localStorage.getItem("dark-mode");

const enableDarkmode = () =>{
    toggleBtn.classList.replace("fa-sun", "fa-moon");
    body.classList.add("dark");
    localStorage.setItem("dark-mode", "enable")
}

const disableDarkmode = () =>{
    toggleBtn.classList.replace("fa-moon", "fa-sun");
    body.classList.remove("dark");
    localStorage.setItem("dark-mode", "disable");
}

if(darkMode === "enable"){
    enableDarkmode();
}

toggleBtn.onclick = (e) =>{
    darkMode = localStorage.getItem("dark-mode");
    if(darkMode === "disable"){
        enableDarkmode();
    }else{
        disableDarkmode();
    }
}