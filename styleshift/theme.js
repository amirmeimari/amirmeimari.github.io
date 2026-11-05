// Apply the saved preference before paint; storage may be unavailable in private contexts.
(() => {
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  let preference = "system";
  try {
    preference = localStorage.getItem("styleshift-website-theme") || "system";
  } catch {}
  if (!["light", "dark", "system"].includes(preference)) preference = "system";
  function apply() {
    const dark =
      preference === "dark" || (preference === "system" && system.matches);
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.dataset.theme = preference;
    const favicon = document.getElementById("favicon");
    if (favicon)
      favicon.href = dark
        ? "assets/brand-light.png"
        : "assets/brand-dark.png?v=2";
    document.querySelector('meta[name="theme-color"]').content = dark
      ? "#18191d"
      : "#fafaf8";
  }
  window.styleShiftTheme = {
    get: () => preference,
    set(value) {
      if (!["light", "dark", "system"].includes(value)) return;
      preference = value;
      try {
        localStorage.setItem("styleshift-website-theme", value);
      } catch {}
      apply();
    },
  };
  system.addEventListener("change", apply);
  apply();
})();
