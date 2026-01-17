(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) a(o);
  new MutationObserver((o) => {
    for (const n of o)
      if (n.type === "childList")
        for (const r of n.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && a(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(o) {
    const n = {};
    return (
      o.integrity && (n.integrity = o.integrity),
      o.referrerPolicy && (n.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function a(o) {
    if (o.ep) return;
    o.ep = !0;
    const n = s(o);
    fetch(o.href, n);
  }
})();
const h = document.querySelector(".todo__input--field"),
  b = document.querySelector(".todo__list"),
  H = document.querySelector(".todo__status-bar "),
  F = document.querySelector(".items-count"),
  D = document.querySelector('[data-type="all"]'),
  _ = document.querySelector('[data-type="active"]'),
  L = document.querySelector('[data-type="completed"]'),
  N = document.querySelector(".todo"),
  S = document.querySelector("source"),
  f = document.querySelector(".background"),
  w = document.querySelector(".todo__theme img"),
  i = () => {
    const e = localStorage.getItem("tasksList");
    if (!e) return [];
    try {
      return JSON.parse(e);
    } catch {
      return [];
    }
  },
  g = (e) => {
    localStorage.setItem("tasksList", JSON.stringify(e));
  },
  $ = (e) => i()[e],
  v = (e) => {
    localStorage.setItem("tasksFilter", e);
  },
  y = () => localStorage.getItem("tasksFilter"),
  B = () => localStorage.getItem("theme"),
  A = (e) => {
    localStorage.setItem("theme", e);
  },
  O = () => {
    u("all"), v("all"), m(D);
  },
  j = () => {
    u("active"), v("active"), m(_);
  },
  Y = () => {
    u("completed"), v("completed"), m(L);
  },
  m = (e) => {
    document.querySelector(".active").classList.remove("active"),
      e.classList.add("active");
  },
  T = (e) => {
    let t = 0;
    e.forEach((s) => {
      s.isCompleted || t++;
    }),
      (F.textContent = t);
  },
  M = (e) => {
    H.classList.toggle("hidden", e === 0);
  },
  u = (e) => {
    let t = i();
    if (
      (document.querySelectorAll(".task").forEach((o) => {
        o.remove();
      }),
      e === "active")
    ) {
      console.log("type = active");
      let o = [];
      t.forEach((n) => {
        n.isCompleted || o.push(n);
      }),
        (t = o),
        m(_);
    }
    if (e === "completed") {
      console.log("type = completed");
      let o = [];
      t.forEach((n) => {
        n.isCompleted && o.push(n);
      }),
        (t = o),
        m(L);
    }
    let a = "";
    t.forEach((o, n) => {
      a += `
    <li class="todo__list__row task ${
      o.isCompleted ? "completed" : ""
    }" data-index="${n}" data-completed="${o.isCompleted}" data-id="${o.id}">
            <button class="checkbox button">
              <img
                src="/images/icon-check.svg"
                alt="check"
                class="checkbox__icon"ge
              />
            </button>
            <span class="todo__list__task">${o.taskValue}</span>
            <button class="remove-btn button">
              <img src="/images/icon-cross.svg" alt="" class="remove-icon" />
            </button>
    </li>`;
    }),
      console.log(t.length),
      T(i()),
      M(i().length),
      b.insertAdjacentHTML("afterBegin", a);
  },
  P = () => {
    u(y());
  },
  R = (e) => {
    const t = document.querySelector(`.task[data-index="${e}"]`);
    t?.classList.toggle("completed"),
      t.classList.contains("completed")
        ? (t.dataset.completed = "true")
        : (t.dataset.completed = "false");
    const s = $(e);
    s.isCompleted = !s.isCompleted;
    const a = i();
    (a[e] = s), g(a), T(i());
  },
  X = () => {
    document.querySelector(".todo__input")?.classList.toggle("completed");
  },
  J = () => {
    let e = i(),
      t = [];
    e.forEach((s) => {
      s.isCompleted || t.push(s);
    }),
      (e = t),
      g(e),
      u(y()),
      console.log("From Handler");
  };
let c = null,
  k = null,
  q = 0,
  x = 0,
  l = null;
const V = (e) => {
    if (e.target.closest(".checkbox") || e.target.closest(".remove-btn"))
      return;
    e.preventDefault();
    const t = e.target.closest(".task");
    t &&
      ((c = t),
      (q = e.clientY),
      (x = e.clientX),
      (l = document.createElement("div")),
      l.classList.add("task", "placeholder"),
      (l.style.height = `${t.offsetHeight}px`),
      t.parentNode.insertBefore(l, t.nextSibling),
      c.classList.add("dragging"),
      (c.style.position = "absolute"),
      (c.style.width = "100%"));
  },
  K = (e) => {
    if (!c) return;
    const t = e.clientY - q,
      s = e.clientX - x;
    c.style.transform = `translate(${s}px, ${t}px)`;
    const a = c.getBoundingClientRect(),
      o = a.top + a.height / 2,
      n = [
        ...document.querySelectorAll(".task:not(.dragging):not(.placeholder)"),
      ];
    let r = !1;
    for (const d of n) {
      const p = d.getBoundingClientRect(),
        I = p.top + p.height / 2;
      if (o < I) {
        (k = d), d.parentNode.insertBefore(l, d), (r = !0);
        return;
      }
    }
    r || ((k = null), l.parentNode.appendChild(l));
  },
  z = () => {
    c &&
      ((c.style.transform = ""),
      c.classList.remove("dragging"),
      l.parentNode.insertBefore(c, l),
      l.remove(),
      G(c, k),
      (c.style.position = ""),
      (c = null),
      (l = null),
      (k = null));
  },
  G = (e, t) => {
    const s = i(),
      a = Number(e.dataset.id),
      o = s.findIndex((r) => r.id === a);
    if (o === -1) return;
    const [n] = s.splice(o, 1);
    if (t === null) s.push(n), console.log("Moved to end of list");
    else {
      const r = Number(t.dataset.id),
        d = s.findIndex((p) => p.id === r);
      d !== -1
        ? (s.splice(d, 0, n), console.log(`Moved before item with index ${d}`))
        : s.push(n);
    }
    console.log("New tasks length: " + s.length), g(s);
  },
  Q = (e) => {
    if (e.key !== "Enter") return;
    const t = h.value.trim();
    if (!t) {
      h.value = "";
      return;
    }
    U(t), W();
  },
  U = (e) => {
    let t = i();
    t.length.toString();
    const s = document.querySelector(".todo__input");
    t.push({
      taskValue: e,
      isCompleted: !!s.classList.contains("completed"),
      id: Date.now(),
    }),
      g(t),
      u(y()),
      Z();
  },
  W = () => {
    document.querySelector(".todo__input").classList.remove("completed"),
      (h.value = "");
  },
  Z = () => {
    const e = document.querySelector(".task:last-child ");
    e &&
      (e.classList.add("enter"),
      requestAnimationFrame(() => e.classList.remove("enter")));
  },
  ee = (e) => {
    let t = i();
    t.splice(e, 1), g(t), u(y());
  },
  te = async () => {
    const e = document.querySelector("html"),
      t = document.querySelector(".todo__theme img"),
      s = e.dataset.theme === "dark";
    (e.dataset.theme = s ? "light" : "dark"),
      (t.style.scale = ".2"),
      s ? (t.style.rotate = "360deg") : (t.style.rotate = "-360deg"),
      (f.style.scale = ".9"),
      setTimeout(() => E(e.dataset.theme), 150),
      setTimeout(() => C(e.dataset.theme), 200),
      A(e.dataset.theme);
  },
  E = (e) => {
    e === "dark"
      ? ((S.srcset = "/images/bg-desktop-dark.jpg"),
        (f.src = "/images/bg-mobile-dark.jpg"))
      : ((S.srcset = "/images/bg-desktop-light.jpg"),
        (f.src = "/images/bg-mobile-light.jpg")),
      (f.style.scale = "1");
  },
  C = (e) => {
    const t = document.querySelector(".todo__theme img");
    (w.src = e === "dark" ? "/images/icon-sun.svg" : "/images/icon-moon.svg"),
      (t.style.scale = "1"),
      (t.style.rotate = "0deg");
  },
  se = (e) => {
    const t = document.querySelector("html");
    (t.dataset.theme = e), E(t.dataset.theme), C(t.dataset.theme);
  },
  oe = () => {
    h.addEventListener("keydown", Q);
  },
  ne = () => {
    N.addEventListener("click", (e) => {
      const t = e.target.closest(".task");
      if (t && e.target.closest(".checkbox")) {
        const s = parseInt(t.dataset.index);
        R(s);
      }
      if (
        (e.target.closest(".todo__input .checkbox") && X(),
        e.target.closest(".button-clear") &&
          (document
            .querySelectorAll("[data-completed='true']")
            .forEach((s) => s.classList.add("exit")),
          setTimeout(() => J(), 200)),
        e.target.closest('[data-type="all"]') && O(),
        e.target.closest('[data-type="active"]') && j(),
        e.target.closest('[data-type="completed"]') && Y(),
        e.target.closest(".remove-btn"))
      ) {
        const s = parseInt(t.dataset.index);
        t.classList.add("exit"), setTimeout(() => ee(s), 200);
      }
      e.target.closest(".todo__theme") && te();
    });
  },
  ce = () => {
    b.addEventListener("pointerdown", V),
      document.addEventListener("pointermove", K),
      document.addEventListener("pointerup", z);
  };
P();
ne();
oe();
ce();
se(B());
