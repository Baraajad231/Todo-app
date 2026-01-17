import { iconTheme, img, source } from "./elements";
import { saveTheme } from "./tasksStorage";

export const toggleThemeHandler = async () => {
  // نغير ال data set عشان ال css يشوف شغله
  const html = document.querySelector("html");
  const icon = document.querySelector(".todo__theme img");

  const isDark = html.dataset.theme === "dark";
  html.dataset.theme = isDark ? "light" : "dark";
  icon.style.scale = ".2";
  if (isDark) {
    icon.style.rotate = "360deg";
  } else {
    icon.style.rotate = "-360deg";
  }
  img.style.scale = "1.2";

  setTimeout(() => updateBackground(html.dataset.theme), 100);
  setTimeout(() => updateThemeIcon(html.dataset.theme), 200);

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

  icon.style.scale = "1";
  icon.style.rotate = "0deg";
};

export const initTheme = (theme) => {
  const html = document.querySelector("html");
  html.dataset.theme = theme;
  updateBackground(html.dataset.theme);
  updateThemeIcon(html.dataset.theme);
};
