let oldHref = "";
const observer = new MutationObserver(() => {
  if (oldHref === window.location.href) return;
  oldHref = window.location.href;

  const params = new URLSearchParams(window.location.search);
  if (params.get("iaxm") === "maps") {
    window.location.replace(
      `https://www.google.com/maps/search/?api=1&query=${params.get("q")}`,
    );
  }
});
observer.observe(window.document.body, { childList: true, subtree: true });
