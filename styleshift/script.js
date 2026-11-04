const theme = document.getElementById("theme");
theme.value = window.styleShiftTheme.get();
theme.addEventListener("change", () => window.styleShiftTheme.set(theme.value));
const samples = {
  en: ["The web, your way.", "ltr"],
  es: ["La web, a tu manera.", "ltr"],
  ar: ["الويب، على طريقتك.", "rtl"],
  zh: ["你的网络，你的风格。", "ltr"],
  fa: ["وب، به سبک تو.", "rtl"],
};
for (const button of document.querySelectorAll("[data-lang]")) {
  button.addEventListener("click", () => {
    const language = button.dataset.lang;
    const [text, direction] = samples[language];
    const sample = document.getElementById("sample");
    sample.textContent = text;
    sample.lang = language;
    sample.dir = direction;
    for (const choice of document.querySelectorAll("[data-lang]")) {
      choice.setAttribute("aria-pressed", String(choice === button));
    }
  });
}
