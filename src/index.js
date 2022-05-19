let themeSwitch = document.querySelector(".check-box");
let bodyElement = document.body;

window.addEventListener("load", () => {
  if (getCookie("dark-mode") === "true") {
    bodyElement.classList.add("dark-mode");
    themeSwitch.checked = true;
  } else {
    bodyElement.classList.remove("dark-mode");
    themeSwitch.checked = false;
  }
});

themeSwitch.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");
  setCookie("dark-mode", themeSwitch.checked, 365);
});

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie =
    cname + "=" + cvalue + ";" + expires + ";path=/; SameSite=None; Secure";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
