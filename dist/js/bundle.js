!function (e) {
    var t = {};

    function n(l) {
        if (t[l]) return t[l].exports;
        var o = t[l] = {i: l, l: !1, exports: {}};
        return e[l].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, l) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: l})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var l = Object.create(null);
        if (n.r(l), Object.defineProperty(l, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(l, o, function (t) {
            return e[t]
        }.bind(null, o));
        return l
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function (e, t, n) {
    n(1), e.exports = n(2)
}, function (e, t) {
    let n = [{banner: "https://oboi.ws/wallpapers/17_8319_oboi_nochnoj_gorod_1920x1080.jpg"}, {banner: "https://sun9-29.userapi.com/c543100/v543100284/54bb2/uhaq8dKWtiI.jpg"}, {banner: "https://s1.1zoom.ru/big3/822/382314-svetik.jpg"}],
        l = [{
            name: "Автомобили",
            url: "#",
            subMenu: [{name: "Отечественные", url: "#"}, {name: "Иномарки", url: "#"}]
        }, {name: "Бытовая техника", url: "#", subMenu: [{name: "TV", url: "#"}]}, {
            name: "Мобильная техника",
            url: "#",
            subMenu: [{name: "Iphone", url: "#"}]
        }, {
            name: "Компьютеры",
            url: "#",
            subMenu: [{name: "Ноутбуки", url: "#"}, {name: "Мониторы", url: "#"}]
        }, {
            name: "Недвижимость",
            url: "#",
            subMenu: [{name: "Дома", url: "#"}, {name: "Квартиры", url: "#"}, {name: "Участки", url: "#"}]
        }];

    function o(e, t, n) {
        let l = [""], o = null, r = null;

        function c(e) {
            let n = 0, l = null;
            for (; (l = e.closest("ul")) && (n++, l !== t);) e = l.parentNode;
            return n
        }

        function d(e) {
            let t = e.target.closest("li");
            "A" === e.target.tagName && "dropdown" === t.getAttribute("class") ? (e.target.closest("ul").querySelector('LI[class="dropdownShow"]') && e.target.closest("ul").querySelector('LI[class="dropdownShow"]').setAttribute("class", "dropdown"), t.setAttribute("class", "dropdownShow")) : "A" === e.target.tagName && "dropdownShow" === t.getAttribute("class") ? t.setAttribute("class", "dropdown") : "A" === e.target.tagName && "dropNone" === t.getAttribute("class") && e.target.closest("ul").querySelector('LI[class="dropdownShow"]') && e.target.closest("ul").querySelector('LI[class="dropdownShow"]').setAttribute("class", "dropdown"), function (e) {
                let t = e.target;
                1 === c(t) && "A" === t.tagName ? (l[0] = e.target.closest("a").text, null !== o && (o.style.borderBottom = ""), null !== r && (r.style.borderBottom = ""), e.target.closest("a").style.borderBottom = "1px solid #777777", l.length > 1 && (delete l[1], l.length = 1), o = e.target.closest("a")) : 2 === c(t) && "A" === t.tagName && (l[1] = e.target.closest("a").text, null !== r && (r.style.borderBottom = ""), e.target.closest("a").style.borderBottom = "1px solid #777777", l.length > 2 && (delete l[2], l.length = 2), r = e.target.closest("a"));
                l.length > 1 ? n.innerHTML = "<span>" + l[0] + "</span>&nbsp / &nbsp" + l[1] : n.innerHTML = l.join(" / ")
            }(e)
        }

        function u() {
            document.querySelector('LI[class="dropdownShow"]') && document.querySelector('LI[class="dropdownShow"]').setAttribute("class", "dropdown"), document.querySelector('NAV[class="createMenu"]').querySelectorAll("A").forEach(e => {
                e.style.borderBottom = ""
            }), n.innerHTML = ""
        }

        t.appendChild(function e(t) {
            let n = document.createElement("ul");
            return t.forEach(t => {
                let l = document.createElement("li"), o = document.createElement("a"),
                    r = document.createTextNode(t.name);
                l.setAttribute("class", "dropNone"), l.appendChild(o), o.appendChild(r), n.appendChild(l), t.subMenu && (l.setAttribute("class", "dropdown"), l.appendChild(e(t.subMenu)))
            }), n
        }(e)), t.addEventListener("click", d), document.querySelector('SPAN[class="home"]').addEventListener("click", u)
    }

    function r(e) {
        let t, n, l, o, r = 0;
        let c = () => {
            o.setAttribute("src", e[r].banner), o.setAttribute("data-src", r), setTimeout((function () {
                o.setAttribute("class", "sliderImg")
            }), 100), setTimeout((function () {
                o.setAttribute("class", "sliderImgFade")
            }), 4e3)
        };

        function d(t, n) {
            "right" === n ? r === e.length - 1 ? r = 0 : r++ : "left" === n && (0 === r ? r = r = e.length - 1 : r--), t ? (c(), setTimeout((function () {
                d(!0, "right")
            }), 7e3)) : c()
        }

        function u() {
            d(!1, "right")
        }

        function a() {
            d(!1, "left")
        }

        l = document.querySelector('DIV[class="slider"]'), l.innerHTML = '<div class="containerButton"><div class = "containerLeft"><img src="../img/left.png"></div><div class = "containerRight"><img src="../img/right.png"></div></div><div class="containerDivImg"><img id="sliderImg" class="sliderImg" src="' + e[0].banner + '" alt=""></div>', setTimeout((function () {
            document.getElementById("sliderImg").setAttribute("class", "sliderImgFade")
        }), 1e3), t = document.querySelector('DIV[class="containerRight"]'), n = document.querySelector('DIV[class="containerLeft"]'), o = document.getElementById("sliderImg"), setTimeout((function () {
            d(!0, "right")
        }), 3e3), t.addEventListener("click", u), n.addEventListener("click", a)
    }

    function c() {
        let e, t, n;

        function l() {
            document.getElementById("name").value.length > 0 ? (document.getElementById("name").setAttribute("class", ""), document.getElementById("name").placeholder = "") : 0 === document.getElementById("name").value.length && (document.getElementById("name").setAttribute("class", "trueInput"), document.getElementById("name").placeholder = "Введите имя"), document.getElementById("number").value.length > 0 ? (document.getElementById("number").setAttribute("class", ""), document.getElementById("number").placeholder = "") : 0 === document.getElementById("number").value.length && (document.getElementById("number").setAttribute("class", "trueInput"), document.getElementById("number").placeholder = "Введите номер"), document.getElementById("email").value.length > 0 ? (document.getElementById("email").setAttribute("class", ""), document.getElementById("email").placeholder = "") : 0 === document.getElementById("email").value.length && (document.getElementById("email").setAttribute("class", "trueInput"), document.getElementById("email").placeholder = "Введите email")
        }

        function o(e, t) {
            let n = parseInt(e, t);
            return isNaN(n) ? 0 : n
        }

        function r() {
            document.body.style.paddingRight = o(getComputedStyle(document.body).paddingRight, 10) - e + "px", document.body.style.overflow = "", document.querySelector('DIV[class="closeFeedback"]').removeEventListener("click", r), t.parentNode.removeChild(t), n.parentNode.removeChild(n)
        }

        e = window.innerWidth - document.querySelector("html").getBoundingClientRect().width, t = document.createElement("div"), t.setAttribute("class", "shadingWhite"), setTimeout((function () {
            t.setAttribute("class", "shadingDark")
        }), 100), document.body.appendChild(t), document.body.style.overflow = "hidden", document.body.style.paddingRight = o(getComputedStyle(document.body).paddingRight, 10) + e + "px", n = document.createElement("div"), n.setAttribute("class", "windowLayer"), document.body.appendChild(n), n.innerHTML = '<div class="feedbackOuter"><div class="feedbackInner"><div class="feedbackForm"><div><span>ОБРАТНАЯ СВЯЗЬ</span></div><div><label>Ваше имя *</label><input id="name"></div><div><label>Телефон *</label><input id="number"></div><div><label>Email *</label><input id="email"></div><div><label>Сообщение</label><textarea></textarea></div><div><button id="button">ОТПРАВИТЬ</button></div></div><div class="closeFeedback"><svg height="25px" viewBox="0 0 376.49067 376.49067" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="m316.457031 376.46875c-9.554687 0-19.132812-3.648438-26.429687-10.921875l-101.78125-101.761719-101.761719 101.761719c-14.613281 14.589844-38.3125 14.589844-52.90625 0l-22.632813-22.636719c-14.59375-14.589844-14.59375-38.3125 0-52.90625l101.757813-101.757812-101.757813-101.761719c-14.59375-14.613281-14.59375-38.335937 0-52.90625l22.632813-22.632813c14.570313-14.570312 38.292969-14.59375 52.886719 0l101.78125 101.757813 101.757812-101.757813c14.636719-14.59375 38.335938-14.59375 52.90625 0l22.636719 22.632813c14.589844 14.59375 14.589844 38.316406 0 52.90625l-101.761719 101.761719 101.761719 101.757812c14.589844 14.59375 14.589844 38.316406 0 52.90625l-22.636719 22.636719c-7.292968 7.273437-16.871094 10.921875-26.453125 10.921875zm-128.210937-151.316406c4.246094 0 8.320312 1.683594 11.304687 4.691406l113.066407 113.066406c2.09375 2.070313 5.589843 2.070313 7.660156 0l22.632812-22.632812c2.09375-2.070313 2.070313-5.589844 0-7.679688l-113.066406-113.046875c-6.25-6.25-6.25-16.382812 0-22.632812l113.066406-113.066407c2.070313-2.070312 2.09375-5.589843 0-7.660156l-22.632812-22.613281c-2.089844-2.070313-5.566406-2.070313-7.679688 0l-113.046875 113.066406c-5.992187 5.996094-16.617187 5.996094-22.632812 0l-113.066407-113.066406c-2.089843-2.070313-5.589843-2.070313-7.660156 0l-22.613281 22.636719c-2.089844 2.066406-2.070313 5.585937 0 7.679687l113.066406 113.042969c6.25 6.25 6.25 16.386719 0 22.636719l-113.066406 113.066406c-2.070313 2.070313-2.089844 5.589844 0 7.65625l22.636719 22.636719c2.089844 2.070312 5.566406 2.070312 7.679687 0l113.042969-113.066406c2.988281-3.03125 7.0625-4.714844 11.308594-4.714844zm0 0"/></svg></div>', document.querySelector('DIV[class="closeFeedback"]').addEventListener("click", r), document.getElementById("button").addEventListener("click", l)
    }

    document.addEventListener("DOMContentLoaded", (function () {
        !function (e, t) {
            let n = document.querySelector('NAV[class="createMenu"]'),
                l = document.querySelector('DIV[class="menuNavInner"]');

            function d() {
                new c
            }

            new o(t, n, l), new r(e), document.querySelector('SPAN[class="contactsFeedback"]').addEventListener("click", d)
        }(n, l)
    }))
}, function (e, t, n) {
}]);
//# sourceMappingURL=bundle.js.map