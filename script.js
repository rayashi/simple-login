window.onload = () => {
  const theme = window.localStorage.getItem("theme") ?? "dark";
  changeTheme(theme);
};

const onThemeChange = () => {
  const checkbox = document.getElementById("switch");
  const theme = checkbox.checked ? "dark" : "light";
  changeTheme(theme);
};

const changeTheme = (theme) => {
  const illustration = document.getElementById("illustration");
  illustration.style.backgroundImage = `url('assets/${theme}.jpg')`;
  const checkbox = document.getElementById("switch");
  checkbox.checked = theme === "dark";
  window.localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  console.log(theme);
};
