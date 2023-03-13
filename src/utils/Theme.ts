export function setTheme(theme: string) {
  if (theme == "def") localStorage.removeItem("theme");
  else localStorage.setItem("theme", theme);
  window.dispatchEvent(new Event("abh80.themeChanged"));
}
