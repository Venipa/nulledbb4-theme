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
      const title = el.dataset.originalTitle || el.title;
      if (!title) return;
      el.dataset.tippyEnabled = true;
      tippy(el, {
        theme: "discord",
        content: title,
        arrow: true,
        inertia: true,
        animation: "discord-anim",
        duration: [100, 100],
        hideOnClick: false,
      });
    }
  );
  document.querySelectorAll("a").forEach(el => {
    if (el.href && !el.href.startsWith(location.origin) && !el.href.startsWith('/') && el.href.startsWith('http') && !el.dataset.tippyEnabled) {
      const url = new URL(el.href);
      el.dataset.tippyEnabled = true;
      tippy(el, {
        theme: "discord",
        content: `Visit ${url.hostname}${url.pathname === "/" ? '' : url.pathname}${url.search || ''}`,
        arrow: true,
        inertia: true,
        animation: "discord-anim",
        duration: [100, 100],
        hideOnClick: false
      });
    }
  })
  document.querySelectorAll(`.spoiler`).forEach(
    /**
     * 
     * @param {HTMLElement} el 
     */
    el => {
    el.onclick = (ev) => {
      ev.stopPropagation();
      el.classList[!el.classList.contains('spoiler-revealed') ? 'add' : 'remove']('spoiler-revealed');
    }
  })
})();
