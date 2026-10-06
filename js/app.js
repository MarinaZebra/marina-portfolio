(function () {
  "use strict";
  var C = window.CONTENT;
  var IMG = "assets/img/";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, el) { return (el || document).querySelector(s); };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // Italicise scientific names wherever they appear
  var SPECIES = ["Phytophthora cinnamomi", "Circus pygargus", "Phengaris arion", "P. arion", "Myrmica"];
  function sci(s) {
    var out = esc(s);
    SPECIES.forEach(function (n) { out = out.split(n).join("<em>" + n + "</em>"); });
    return out;
  }
  function src(img, small) {
    if (/\.\w+$/.test(img.src)) return IMG + img.src;
    var ext = img.src === "natura2000" ? ".png" : ".jpg";
    return IMG + img.src + (small && ext === ".jpg" ? "-sm" : "") + ext;
  }
  function imgTag(img, opts) {
    opts = opts || {};
    return '<img src="' + src(img, opts.small) + '" width="' + img.w + '" height="' + img.h +
      '" alt="' + esc(img.alt) + '"' + (opts.eager ? "" : ' loading="lazy"') + ' decoding="async">';
  }

  /* ---------- Static fills ---------- */
  $("#tagline").textContent = C.tagline;
  ["#linkedin-hero", "#linkedin-about", "#linkedin-footer"].forEach(function (id) {
    var a = $(id);
    a.href = C.linkedin;
    a.setAttribute("aria-label", "LinkedIn profile of " + C.name + " (opens in a new tab)");
    a.textContent = "LinkedIn";
  });

  // About: words light up as the paragraph scrolls through the viewport
  var about = $("#about-text");
  about.innerHTML = C.about.split(" ").map(function (w) { return '<span class="w">' + esc(w) + "</span>"; }).join(" ");
  about.setAttribute("aria-label", C.about);
  var aboutWords = about.querySelectorAll(".w");

  // Project cards
  var leafIcon = '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 56V28M32 40c-8 0-14-6-14-16 10 0 14 6 14 16zm0-6c0-10 6-18 18-18 0 12-8 18-18 18z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  $("#project-cards").innerHTML = C.projects.map(function (p, i) {
    var media = p.cover
      ? '<div class="card-media' + (p.cover.contain ? " contain" : "") + '">' + imgTag(p.cover, { small: true }) + "</div>"
      : p.coverStat
        ? '<div class="card-media stat"><p><span class="stat-value">' + esc(p.coverStat.value) + '</span> <span class="stat-unit">' +
          esc(p.coverStat.unit) + '</span><span class="stat-label">' + esc(p.coverStat.label) + "</span></p></div>"
        : '<div class="card-media empty">' + leafIcon + "</div>";
    return '<article class="card" id="card-project-' + p.id + '">' + media +
      '<div class="card-body"><span class="card-num">Project ' + String(i + 1).padStart(2, "0") + "</span>" +
      "<h3>" + sci(p.title) + "</h3><p>" + sci(p.summary) + "</p>" +
      '<a class="more" href="#/project/' + p.id + '" aria-label="View project: ' + esc(p.title) + '">View project</a></div></article>';
  }).join("");

  // Article cards
  $("#article-cards").innerHTML = C.articles.map(function (a) {
    var excerpt = a.paragraphs[0].length > 190 ? a.paragraphs[0].slice(0, a.paragraphs[0].lastIndexOf(" ", 185)) + "…" : a.paragraphs[0];
    return '<article class="card" id="card-article-' + a.id + '"><div class="card-media">' + imgTag(a.image, { small: true }) + "</div>" +
      '<div class="card-body"><h3>' + esc(a.title) + "</h3><p>" + sci(excerpt) + "</p>" +
      '<a class="more" href="#/article/' + a.id + '" aria-label="Read article: ' + esc(a.title) + '">Read article</a></div></article>';
  }).join("");

  // Career timeline
  var tl = $("#timeline");
  tl.innerHTML = '<li class="fill" aria-hidden="true"></li>' + C.career.map(function (c, i) {
    return '<li class="tl-item' + (i % 2 ? " right" : "") + '" style="--tone:' + c.tone + '">' +
      '<span class="tl-dot" aria-hidden="true"></span>' +
      '<div class="tl-year">' + esc(c.period) + "</div>" +
      '<div class="tl-card"><span class="tl-kind">' + (c.kind === "study" ? "Education" : "Experience") + "</span>" +
      "<strong>" + esc(c.title) + "</strong>" + (c.detail ? "<span>" + esc(c.detail) + "</span>" : "") + "</div></li>";
  }).join("");
  var tlFill = $(".fill", tl);
  var tlItems = tl.querySelectorAll(".tl-item");

  // Technical profile
  var T = C.technical;
  $("#tech-title").textContent = T.title;
  $("#tech-sub").textContent = T.subtitle;
  $("#tech-grid").innerHTML =
    '<div class="tech-block"><h3>' + esc(T.skillsLabel) + "</h3><p>" + esc(T.skills) + "</p></div>" +
    '<div class="tech-block"><h3>' + esc(T.toolsLabel) + '</h3><ul class="chips">' +
    T.tools.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") +
    '</ul><p class="tech-note">' + esc(T.toolsNote) + "</p></div>";

  /* ---------- Hero contour lines (decorative, generated) ---------- */
  (function contours() {
    var svg = $(".contours");
    var paths = "";
    var centres = [[260, 520], [930, 190]];
    centres.forEach(function (c, k) {
      for (var r = 1; r <= 9; r++) {
        var d = "";
        for (var a = 0; a <= 64; a++) {
          var t = (a / 64) * Math.PI * 2;
          var rad = r * 46 + 14 * Math.sin(3 * t + k + r * 0.4) + 9 * Math.cos(5 * t + r * 0.7);
          var x = c[0] + rad * 1.35 * Math.cos(t), y = c[1] + rad * Math.sin(t);
          d += (a ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1);
        }
        paths += '<path d="' + d + 'Z" opacity="' + (1 - r * 0.07).toFixed(2) + '"/>';
      }
    });
    svg.innerHTML = "<g>" + paths + "</g>";
  })();
  var contourG = $(".contours g");

  /* ---------- Routing ---------- */
  var home = $("#home-view"), detail = $("#detail-view");
  var lastCard = null, homeScroll = 0;
  var storyObserver = null;

  function figureHTML(f, key) {
    return '<figure data-fig="' + key + '"' + (f.contain ? ' class="contain"' : "") + ">" + imgTag(f) +
      "<figcaption>" + sci(f.caption) + "</figcaption></figure>";
  }

  function renderProject(p) {
    var keys = Object.keys(p.figures);
    var hasFig = keys.length > 0;
    var idx = C.projects.indexOf(p);
    var prev = C.projects[idx - 1], next = C.projects[idx + 1];
    var steps = p.sections.map(function (s) {
      return '<section class="step" data-figure="' + (s.figure || "") + '"><h2>' + esc(s.key) + "</h2><p>" + sci(s.text) + "</p>" +
        (s.mine ? '<span class="mine">Includes my contribution</span>' : "") + "</section>";
    }).join("");
    var stage = hasFig
      ? '<aside class="stage" aria-label="Project figures"><div class="stage-frame">' +
        keys.map(function (k) { return figureHTML(p.figures[k], k); }).join("") +
        (keys.length > 1 ? '<div class="stage-dots" aria-hidden="true">' + keys.map(function (k) { return '<i data-dot="' + k + '"></i>'; }).join("") + "</div>" : "") +
        "</div></aside>"
      : "";
    detail.innerHTML =
      '<header class="detail-head' + (p.title.length > 90 ? " long" : "") + '"><div class="wrap">' +
      '<a class="back" href="#projects" data-back>Back to portfolio</a>' +
      '<p class="eyebrow">Project ' + String(idx + 1).padStart(2, "0") + " of " + C.projects.length + "</p>" +
      '<h1 tabindex="-1">' + sci(p.title) + "</h1></div></header>" +
      '<div class="wrap"><div class="story' + (hasFig ? "" : " no-fig") + '"><div class="steps">' + steps + "</div>" + stage + "</div>" +
      '<nav class="detail-nav" aria-label="Project navigation">' +
      (prev ? '<a href="#/project/' + prev.id + '">← Previous project</a>' : "<span></span>") +
      '<a href="#projects">All projects</a>' +
      (next ? '<a href="#/project/' + next.id + '">Next project →</a>' : "<span></span>") +
      "</nav></div>";
    if (hasFig) setupStory();
    return "#card-project-" + p.id;
  }

  function renderArticle(a) {
    var idx = C.articles.indexOf(a);
    var next = C.articles[idx + 1], prev = C.articles[idx - 1];
    var extra = (a.extraImages || []).map(function (im) { return '<figure class="article-figure">' + imgTag(im) + "</figure>"; }).join("");
    var body = a.paragraphs.map(function (p, i) {
      var last = a.closing && i === a.paragraphs.length - 1;
      return '<p class="' + (i === 0 ? "drop" : last ? "closing" : "") + '">' + sci(p) + "</p>";
    }).join("");
    detail.innerHTML =
      '<header class="detail-head"><div class="wrap">' +
      '<a class="back" href="#blog" data-back>Back to portfolio</a>' +
      '<p class="eyebrow">Blog</p><h1 tabindex="-1">' + esc(a.title) + "</h1></div></header>" +
      '<div class="wrap"><div class="article-hero-wrap" style="padding-top:2.5rem"><figure class="article-figure">' + imgTag(a.image, { eager: true }) +
      "<figcaption>" + sci(a.caption) + "</figcaption></figure></div>" +
      '<article class="article">' + body + (extra ? '<div class="article-gallery">' + extra + "</div>" : "") + "</article>" +
      '<nav class="detail-nav" aria-label="Article navigation">' +
      (prev ? '<a href="#/article/' + prev.id + '">← ' + esc(prev.title) + "</a>" : "<span></span>") +
      '<a href="#blog">All articles</a>' +
      (next ? '<a href="#/article/' + next.id + '">' + esc(next.title) + " →</a>" : "<span></span>") +
      "</nav></div>";
    return "#card-article-" + a.id;
  }

  // Scrollytelling: the pinned figure follows the section currently being read
  function setupStory() {
    var steps = detail.querySelectorAll(".step");
    function activate(step) {
      steps.forEach(function (s) { s.classList.toggle("active", s === step); });
      var key = step.getAttribute("data-figure");
      if (!key) return;
      detail.querySelectorAll(".stage figure").forEach(function (f) { f.classList.toggle("on", f.getAttribute("data-fig") === key); });
      detail.querySelectorAll(".stage-dots i").forEach(function (d) { d.classList.toggle("on", d.getAttribute("data-dot") === key); });
    }
    activate(steps[0]);
    storyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) activate(e.target); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    steps.forEach(function (s) { storyObserver.observe(s); });
  }

  function route() {
    var h = location.hash;
    var m = h.match(/^#\/(project|article)\/(\d+)/);
    if (storyObserver) { storyObserver.disconnect(); storyObserver = null; }
    if (m) {
      var list = m[1] === "project" ? C.projects : C.articles;
      var item = list.filter(function (x) { return String(x.id) === m[2]; })[0];
      if (!item) { location.hash = "#/"; return; }
      if (!home.hidden) homeScroll = window.scrollY;
      lastCard = m[1] === "project" ? renderProject(item) : renderArticle(item);
      home.hidden = true;
      detail.hidden = false;
      document.title = item.title + " | Marina Pérez";
      window.scrollTo({ top: 0, behavior: "instant" });
      var h1 = $("h1", detail);
      if (h1) h1.focus({ preventScroll: true });
      onScroll();
      return;
    }
    var wasDetail = !detail.hidden;
    detail.hidden = true;
    detail.innerHTML = "";
    home.hidden = false;
    document.title = "Marina Pérez | Scientific Portfolio";
    var target = h && h.length > 1 && h !== "#/" ? document.getElementById(h.slice(1)) : null;
    if (target) {
      target.scrollIntoView({ behavior: wasDetail || reduceMotion ? "instant" : "smooth" });
    } else if (wasDetail) {
      window.scrollTo({ top: homeScroll, behavior: "instant" });
    } else if (h === "#/") {
      window.scrollTo(0, 0);
    }
    if (wasDetail && lastCard) {
      var link = $(lastCard + " .more");
      if (link) link.focus({ preventScroll: true });
    }
    onScroll();
  }

  // "Back" buttons return to the card the reader came from
  detail.addEventListener("click", function (e) {
    var back = e.target.closest("[data-back]");
    if (back && lastCard) {
      e.preventDefault();
      history.pushState(null, "", "#/");
      route();
      var card = $(lastCard);
      if (card) card.scrollIntoView({ block: "center", behavior: "instant" });
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !detail.hidden) { var b = $("[data-back]", detail); if (b) b.click(); }
  });
  window.addEventListener("hashchange", route);

  /* ---------- Scroll-driven effects ---------- */
  var header = $("#site-header"), bar = $("#progress-bar");
  var navLinks = document.querySelectorAll(".site-header nav a");
  var sections = ["about", "projects", "career", "technical", "blog"].map(function (id) { return document.getElementById(id); });
  var ticking = false;

  function onScroll() {
    ticking = false;
    var y = window.scrollY, vh = window.innerHeight;
    var max = document.documentElement.scrollHeight - vh;
    bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
    header.classList.toggle("scrolled", y > 10);
    if (home.hidden) return;

    if (!reduceMotion && contourG) contourG.setAttribute("transform", "translate(0 " + (y * 0.25).toFixed(1) + ")");

    // Active nav link
    var current = null;
    sections.forEach(function (s) { if (s.getBoundingClientRect().top < vh * 0.4) current = s.id; });
    navLinks.forEach(function (a) {
      var on = a.getAttribute("href") === "#" + current;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });

    if (reduceMotion) return;
    // About word highlight
    var r = about.getBoundingClientRect();
    var p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
    var n = Math.round(p * aboutWords.length);
    for (var i = 0; i < aboutWords.length; i++) aboutWords[i].classList.toggle("on", i < n);

    // Career line fills as you scroll; entries appear as the line reaches them
    var tr = tl.getBoundingClientRect();
    var reach = Math.min(tr.height, Math.max(0, vh * 0.65 - tr.top));
    tlFill.style.height = reach + "px";
    tlItems.forEach(function (it) { it.classList.toggle("in", it.offsetTop <= reach + 4); });
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener("resize", onScroll);

  if (reduceMotion) tlItems.forEach(function (it) { it.classList.add("in"); });
  route();
})();
