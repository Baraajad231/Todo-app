import { iconTheme, img, source } from "./elements";

export const toggleThemeHandler = () => {
  // نغير ال data set عشان ال css يشوف شغله
  const html = document.querySelector("html");
  const isDark = html.dataset.theme === "dark";
  html.dataset.theme = isDark ? "light" : "dark";

  updateBackground(html.dataset.theme);
  updateThemeIcon(html.dataset.theme);
  console.log("from handler");
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
  console.log("from fn");

  if (theme === "dark") {
    iconTheme.scr = "images/icon-moon.svg";
  } else {
    iconTheme.scr = "images/icon-sun.svg";
  }
};
