function setTheme(themeName: string) {
  localStorage.setItem("data-theme", themeName);
  document.documentElement.setAttribute("data-theme", themeName);
}

(function () {
  if (localStorage.getItem("data-theme") === "dark") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
  console.log(localStorage.getItem("data-theme"));
})();
export default function ThemeSwitch() {
  const toggleOn = () => {
    let theme = localStorage.getItem("data-theme");
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div
      className="px-4 py-2 font-medium rounded-full select-none w-fit font-inter bg-fill-secondary text-foreground-matchBackground text-body_2"
      onClick={toggleOn}
    >
      Change theme
    </div>
  );
}
