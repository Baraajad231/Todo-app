export const toggleTheme = () => {
  const html = document.querySelector("html");
  const isDark = html.dataset.theme === "dark";

  html.dataset.theme = isDark ? "light" : "dark";
};
