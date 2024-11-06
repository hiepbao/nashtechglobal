document.addEventListener("DOMContentLoaded", function (e) {
  function t(e) {
    if ("IMG" === e.nodeName) {
      var t = e.id,
        n = e.className,
        r = e.src;
      if (r.endsWith("svg")) {
        var i = new XMLHttpRequest();
        (i.onreadystatechange = function () {
          if (4 === i.readyState && 200 === i.status) {
            var o = i.responseText;
            let r;
            const c = undefined;
            var a = new DOMParser()
                .parseFromString(o, "text/html")
                .getElementsByTagName("svg")[0],
              l = a.id;
            if (
              (void 0 === t || "" === t
                ? void 0 === l || "" === l
                  ? ((t = "svg-replaced-" + s), a.setAttribute("id", t))
                  : (t = l)
                : a.setAttribute("id", t),
              void 0 !== n &&
                "" !== n &&
                a.setAttribute("class", n + " replaced-svg svg-replaced-" + s),
              a.removeAttribute("xmlns:a"),
              "on" === frontSanitizationEnabled && "" !== a.outerHTML)
            ) {
              var d = DOMPurify.sanitize(a.outerHTML);
              e.outerHTML = d;
            } else e.replaceWith(a);
            s++;
          } else
            4 === i.readyState &&
              200 !== i.status &&
              console.error("Failed to load SVG:", r);
        }),
          i.open("GET", r, !1),
          i.send(null);
      }
    }
  }
  function n(e) {
    if (e.childNodes.length > 0)
      for (var s = 0; s < e.childNodes.length; s++) {
        var r;
        if ("IMG" === e.childNodes[s].nodeName) t(e.childNodes[s]);
        else n(e.childNodes[s]);
      }
  }
  let s = 0;
  (bodhisvgsInlineSupport = function () {
    if (
      (console.log("Running bodhisvgsInlineSupport"),
      "true" === ForceInlineSVGActive)
    )
      for (
        var e = document.getElementsByTagName("img"), s = 0;
        s < e.length;
        s++
      )
        void 0 !== e[s].src &&
          e[s].src.match(/\.(svg)/) &&
          (e[s].classList.contains(cssTarget.ForceInlineSVG) ||
            e[s].classList.add(cssTarget.ForceInlineSVG));
    var r;
    if (
      (String.prototype.endsWith ||
        (String.prototype.endsWith = function (e, t) {
          var n = this.toString();
          ("number" != typeof t ||
            !isFinite(t) ||
            Math.floor(t) !== t ||
            t > n.length) &&
            (t = n.length),
            (t -= e.length);
          var s = n.lastIndexOf(e, t);
          return -1 !== s && s === t;
        }),
      (String.prototype.endsWith = function (e) {
        var t = this.length - e.length;
        return t >= 0 && this.lastIndexOf(e) === t;
      }),
      "string" ==
        typeof (r =
          "true" === ForceInlineSVGActive
            ? "string" == typeof cssTarget.Bodhi
              ? cssTarget.ForceInlineSVG
              : "style-svg"
            : "string" == typeof cssTarget
            ? cssTarget
            : "style-svg"))
    ) {
      r = r.replace("img.", "");
      for (
        var e = document.getElementsByClassName(r), s = 0;
        s < e.length;
        s++
      ) {
        var i;
        if (void 0 === e[s].src) n(e[s]);
        else t(e[s]);
      }
    } else console.error("Target is not a string:", r);
  })();
});
