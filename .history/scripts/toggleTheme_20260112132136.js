export const toggleTheme = () => {
  const html = document.querySelector("html");
  const isDark = html.dataset.theme === "dark";
};
