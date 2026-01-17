import { source } from "./elements";

export const toggleTheme = () => {
  // نغير ال data set عشان ال css يشوف شغله
  const html = document.querySelector("html");
  const isDark = html.dataset.theme === "dark";
  html.dataset.theme = isDark ? "light" : "dark";

  updateBackground(html.dataset.theme);
  //   updateThemeIcon(html.dataset.theme);
};

const updateBackground = (theme) => {
  source.srcset = source.dataset[theme];
  img.src = img.dataset[theme];
};
