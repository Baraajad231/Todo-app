import { iconTheme, img, source } from "./elements";
import { saveTheme } from "./tasksStorage";

export const toggleThemeHandler = async () => {
  // نغير ال data set عشان ال css يشوف شغله
  const html = document.querySelector("html");
  const icon = document.querySelector(".todo__theme img");

  const isDark = html.dataset.theme === "dark";
  html.dataset.theme = isDark ? "light" : "dark";
  icon.classList.add("anim-in");
  icon.classList.add("anim-out");

  // if (icon.classList.contains("anim-in")) {
  //   icon.classList.remove("anim-in");
  // }
  //  else if (icon.classList.contains("anim-out")) {
  //   icon.classList.remove("anim-out");
  //   icon.classList.add("anim-in");
  // } else {
  //   icon.classList.add("anim-out");
  // }
  // icon.classList.add("anim-out");
  setTimeout(() => updateBackground(html.dataset.theme), 100);
  setTimeout(() => updateThemeIcon(html.dataset.theme), 100);
  // icon.classList.remove("anim-out");
  // icon.classList.add("anim-in");

  saveTheme(html.dataset.theme);
};

const updateBackground = (theme) => {
  if (theme === "dark") {
    source.srcset = "images/bg-desktop-dark.jpg";
    img.src = "images/bg-mobile-dark.jpg";
  } else {
    source.srcset = "images/bg-desktop-light.jpg";
    img.src = "images/bg-mobile-light.jpg";
  }
};

const updateThemeIcon = (theme) => {
  const icon = document.querySelector(".todo__theme img");

  iconTheme.src =
    theme === "dark" ? "images/icon-sun.svg" : "images/icon-moon.svg";
  // icon.classList.remove("anim-in");
  if (icon.classList.contains("anim-in")) {
    icon.classList.remove("anim-in");
  } else if (icon.classList.contains("anim-out")) {
    icon.classList.remove("anim-out");
    // icon.classList.add("anim-in");
  }
};

export const initTheme = (theme) => {
  const html = document.querySelector("html");
  html.dataset.theme = theme;
  updateBackground(html.dataset.theme);
  updateThemeIcon(html.dataset.theme);
};
