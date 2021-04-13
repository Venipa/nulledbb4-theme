import tippy from "tippy.js";
$(function () {
  $(`[data-toggle="tooltip"]`).tooltip("dispose");
  jQuery.fn.tooltip = function (type, args) {
    if (type === "destroy") type = "dispose";
    this.each(function (index, el) {
      if (!type && !el._tippy) {
        const title = el.dataset.originalTitle || el.title;
        tippy(
          el,
          Object.assign(
            {},
            {
              theme: "discord",
              content: title,
              arrow: true,
              inertia: true,
              animation: "discord-anim",
              duration: [100, 100],
              hideOnClick: false,
            },
            args || {}
          )
        );
      } else if (type) {
        el._tippy[type](args);
      }
    });
  };
  $("a").each((index, el) => {
    if (
      el.href &&
      !el.href.startsWith(location.origin) &&
      !el.href.startsWith("/") &&
      el.href.startsWith("http") &&
      !el._tippy
    ) {
      const url = new URL(el.href);
      $(el).tooltip(null, {
        content: `Visit ${url.hostname}${
          url.pathname === "/" ? "" : url.pathname
        }${url.search || ""}`,
      });
    }
  });
  document.querySelectorAll(`.spoiler`).forEach(
    /**
     *
     * @param {HTMLElement} el
     */
    (el) => {
      el.onclick = (ev) => {
        ev.stopPropagation();
        const isRevealed = el.classList.contains("spoiler-revealed");
        if (el._tippy && isRevealed !== el._tippy.state.isEnabled)
          el._tippy[!isRevealed ? "disable" : "enable"]();
        el.classList[!isRevealed ? "add" : "remove"]("spoiler-revealed");
      };
    }
  );
});
