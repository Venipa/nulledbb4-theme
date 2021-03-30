import tippy from "tippy.js";
(function () {
  const elements = Array.from(
    document.querySelectorAll(`[data-toggle="tooltip"]`)
  );
  elements.forEach(
    /**
     *
     * @param {HTMLElement} el
     */
    (el) => {
      delete el.dataset.toggle;
      tippy(el, {
        theme: "discord",
        content: el.dataset.originalTitle || el.title,
        arrow: true,
        inertia: true,
        animation: "discord-anim",
        duration: [100, 100],
        hideOnClick: false,
      });
    }
  );
  document.querySelectorAll("a").forEach(el => {
    if (el.href && !el.href.startsWith(location.origin) && !el.href.startsWith('/')) {
      const url = new URL(el.href);
      tippy(el, {
        theme: "discord",
        content: `Visit ${url.hostname}${url.pathname === "/" ? '' : url.pathname}${url.search || ''}`,
        arrow: true,
        inertia: true,
        animation: "discord-anim",
        duration: [100, 100],
        hideOnClick: false,
      });
    }
  })
})();
