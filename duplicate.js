(function(e) {
        function t(t) {
            for (var r, i, o = t[0], c = t[1], l = t[2], u = 0, p = []; u < o.length; u++)
                i = o[u],
                Object.prototype.hasOwnProperty.call(n, i) && n[i] && p.push(n[i][0]),
                    n[i] = 0;
            for (r in c)
                Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
            d && d(t);
            while (p.length)
                p.shift()();
            return s.push.apply(s, l || []),
                a()
        }
        function a() {
            for (var e, t = 0; t < s.length; t++) {
                for (var a = s[t], r = !0, o = 1; o < a.length; o++) {
                    var c = a[o];
                    0 !== n[c] && (r = !1)
                }
                r && (s.splice(t--, 1),
                    e = i(i.s = a[0]))
            }
            return e
        }
        var r = {}
            , n = {
            app: 0
        }
            , s = [];
        function i(t) {
            if (r[t])
                return r[t].exports;
            var a = r[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(a.exports, a, a.exports, i),
                a.l = !0,
                a.exports
        }
        i.m = e,
            i.c = r,
            i.d = function(e, t, a) {
                i.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: a
                })
            }
            ,
            i.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            i.t = function(e, t) {
                if (1 & t && (e = i(e)),
                8 & t)
                    return e;
                if (4 & t && "object" === typeof e && e && e.__esModule)
                    return e;
                var a = Object.create(null);
                if (i.r(a),
                    Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: e
                    }),
                2 & t && "string" != typeof e)
                    for (var r in e)
                        i.d(a, r, function(t) {
                            return e[t]
                        }
                            .bind(null, r));
                return a
            }
            ,
            i.n = function(e) {
                var t = e && e.__esModule ? function() {
                            return e["default"]
                        }
                        : function() {
                            return e
                        }
                ;
                return i.d(t, "a", t),
                    t
            }
            ,
            i.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            i.p = "/dist/client/citimerrymatch-q4/";
        var o = window["webpackJsonp"] = window["webpackJsonp"] || []
            , c = o.push.bind(o);
        o.push = t,
            o = o.slice();
        for (var l = 0; l < o.length; l++)
            t(o[l]);
        var d = c;
        s.push([0, "chunk-vendors"]),
            a()
    }
)({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    "06f7": function(e, t, a) {
        "use strict";
        var r = a("0b80")
            , n = a.n(r);
        n.a
    },
    "0b80": function(e, t, a) {},
    "0f4f": function(e, t, a) {},
    "221e": function(e, t, a) {},
    "39a8": function(e, t, a) {},
    "403b": function(e, t, a) {
        "use strict";
        var r = function(e, t) {
            var a = t._c;
            return a("font-awesome-icon", {
                staticClass: "inline-block mx-auto",
                attrs: {
                    icon: "spinner",
                    spin: ""
                }
            })
        }
            , n = [];
        a.d(t, "a", (function() {
                return r
            }
        )),
            a.d(t, "b", (function() {
                    return n
                }
            ))
    },
    "413a": function(e, t, a) {
        "use strict";
        var r = a("e55c")
            , n = a.n(r);
        n.a
    },
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        a("cadf"),
            a("551c"),
            a("f751"),
            a("097d");
        var r = a("2b0e")
            , n = a("2f62")
            , s = (a("8e6e"),
            a("456d"),
            a("768b"))
            , i = (a("ac6a"),
            a("ffc1"),
            a("96cf"),
            a("3b8d"))
            , o = a("bd86")
            , c = a("7ffd")
            , l = JSON.parse(document.getElementById("config").innerHTML)
            , d = JSON.parse(l.settings.FormData)
            , u = JSON.parse(l.settings.UISchema)
            , p = l.user ? JSON.parse(l.user).dateRegistered : null
            , f = "UA-41926346-1"
            , m = (a("1c4c"),
            a("5df3"),
            a("f400"),
            {
                failed: {
                    id: 500,
                    description: "Something went wrong. Please try again later."
                }
            })
            , h = function(e) {
            if (!e.ok) {
                switch (console.log(e.status),
                    e.status) {
                    case 403:
                    case 401:
                        store.dispatch("app/logout").then((function(e) {
                                e.id
                            }
                        ))
                }
                throw Error(e.statusText)
            }
            return e
        }
            , g = function(e) {
            return console.log(e),
                m.failed
        }
            , b = function(e) {
            return {
                method: "POST",
                credentials: "include",
                mode: "cors",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                accept: "/",
                "accept-language": "en-US,en;q=0.9",
                referrerPolicy: "no-referrer-when-downgrade",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(e)
            }
        }
            , v = function(e, t) {
            var a = new Map(Array.from(e, (function(e) {
                    return [e[t], []]
                }
            )));
            return e.forEach((function(e) {
                    return a.get(e[t]).push(e)
                }
            )),
                Array.from(a.values())
        };
        function w(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    a.push.apply(a, r)
            }
            return a
        }
        function x(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? w(Object(a), !0).forEach((function(t) {
                        Object(o["a"])(e, t, a[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : w(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                ))
            }
            return e
        }
        var C = function() {
            return {
                config: l,
                formSettings: d,
                uiSchema: u,
                subdomain: "",
                emailAddress: "",
                mobileNo: "",
                firstName: "",
                lastName: "",
                cardNumber: "",
                password: "",
                voucherCode: "",
                isLoggedIn: !1,
                dateRegistered: p || "",
                currentFeaturedPrize: null,
                isRefreshGamePrizes: !1
            }
        }
            , y = function() {
            return {
                isRegistrationStarted: !1,
                isRegistrationExpired: !1,
                isRedemptionExpired: !1,
                isRedemptionStarted: !1,
                currentTime: "",
                currentDate: "",
                currentServerDateTime: ""
            }
        }
            , _ = x({}, y(), {}, C())
            , k = c["d"].getters(_)
            , O = x({}, c["d"].mutations(_), {
            resetState: function(e) {
                Object.assign(e, x({}, C(), {
                    isRegistrationStarted: e.isRegistrationStarted,
                    isRedemptionExpired: e.isRedemptionExpired,
                    isRegistrationExpired: e.isRegistrationExpired,
                    currentDate: e.currentDate,
                    currentTime: e.currentTime,
                    currentServerDateTime: e.currentServerDateTime
                }))
            }
        })
            , j = {
            login: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                        var r, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return t.commit,
                                                r = "/api/citi/spend/login/",
                                                n = b(a),
                                                e.next = 5,
                                                fetch(r, n).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).catch(g);
                                        case 5:
                                            return s = e.sent,
                                                e.abrupt("return", s);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            logout: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t) {
                        var a, r, n;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return t.commit,
                                                a = "/api/account/logoff",
                                                r = {
                                                    method: "GET",
                                                    credentials: "include",
                                                    mode: "cors",
                                                    "sec-fetch-mode": "cors",
                                                    "sec-fetch-site": "same-origin",
                                                    accept: "/",
                                                    "accept-language": "en-US,en;q=0.9",
                                                    referrerPolicy: "no-referrer-when-downgrade",
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    body: null
                                                },
                                                e.next = 5,
                                                fetch(a, r).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).catch(g);
                                        case 5:
                                            return n = e.sent,
                                                e.abrupt("return", n);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            inquire: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                        var r, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return t.commit,
                                                r = "/api/citi/spend/v2/inquire",
                                                n = {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    body: JSON.stringify(a)
                                                },
                                                e.next = 5,
                                                fetch(r, n).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).catch(g);
                                        case 5:
                                            return s = e.sent,
                                                e.abrupt("return", s);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            register: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                        var r, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return t.commit,
                                                r = "/api/citi/spend/register",
                                                n = b(a),
                                                e.next = 5,
                                                fetch(r, n).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).catch(g);
                                        case 5:
                                            return s = e.sent,
                                                e.abrupt("return", s);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            inquireEmail: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                        var r, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return t.commit,
                                                r = "/api/account/forgotpassword",
                                                n = b(a),
                                                e.next = 5,
                                                fetch(r, n).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).catch(g);
                                        case 5:
                                            return s = e.sent,
                                                e.abrupt("return", s);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            loadGame: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                        var r, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return r = "/api/game/match/v2/play/".concat(a.id),
                                                n = b(a),
                                                e.next = 4,
                                                fetch(r, n).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).catch(g);
                                        case 4:
                                            return s = e.sent,
                                                e.abrupt("return", s);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            gameOver: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                        var r, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return r = "/api/game/match/gameover/".concat(a.id, "?token=").concat(encodeURIComponent(a.token)),
                                                n = b(a),
                                                e.next = 4,
                                                fetch(r, n).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).catch(g);
                                        case 4:
                                            return s = e.sent,
                                                e.abrupt("return", s);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            gameData: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                        var r, n, i, o, c, l, d, u;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            for (r = "/api/game/match/v2/gamedata/".concat(a.id, "?"),
                                                     n = 0,
                                                     i = Object.entries(a); n < i.length; n++)
                                                o = Object(s["a"])(i[n], 2),
                                                    c = o[0],
                                                    l = o[1],
                                                    r += "".concat(c, "=").concat(l, "&");
                                            return d = {
                                                method: "GET",
                                                credentials: "include",
                                                mode: "cors",
                                                "sec-fetch-mode": "cors",
                                                "sec-fetch-site": "same-origin",
                                                accept: "/",
                                                "accept-language": "en-US,en;q=0.9",
                                                referrerPolicy: "no-referrer-when-downgrade",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: null
                                            },
                                                e.next = 5,
                                                fetch(r, d).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).catch(g);
                                        case 5:
                                            return u = e.sent,
                                                e.abrupt("return", u);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            resetPassword: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                        var r, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return t.commit,
                                                r = "/api/account/resetpassword",
                                                n = b(a),
                                                e.next = 5,
                                                fetch(r, n).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).catch(g);
                                        case 5:
                                            return s = e.sent,
                                                e.abrupt("return", s);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            resetAppState: function(e) {
                var t = e.commit;
                t("resetState")
            }
        }
            , L = {
            namespaced: !0,
            state: _,
            actions: j,
            mutations: O,
            getters: k
        };
        a("55dd");
        function P(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    a.push.apply(a, r)
            }
            return a
        }
        function S(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? P(Object(a), !0).forEach((function(t) {
                        Object(o["a"])(e, t, a[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : P(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                ))
            }
            return e
        }
        var R = function() {
            return {
                transactions: [],
                gamePrizes: [],
                ticketsCount: 0,
                totalTransactionsCount: 0,
                totalTicketsCount: 0,
                grandPrize: {}
            }
        }
            , D = R()
            , z = {}
            , T = S({}, c["d"].mutations(D), {
            resetState: function(e) {
                Object.assign(e, R())
            }
        })
            , E = {
            getTransactions: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t) {
                        var a, r, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return a = t.rootState.app.config.campaignID,
                                                r = "/api/citi/spend/transactions?id=" + a,
                                                n = {
                                                    method: "GET",
                                                    credentials: "include",
                                                    mode: "cors",
                                                    "sec-fetch-mode": "cors",
                                                    "sec-fetch-site": "same-origin",
                                                    accept: "/",
                                                    "accept-language": "en-US,en;q=0.9",
                                                    referrerPolicy: "no-referrer-when-downgrade",
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    body: null
                                                },
                                                e.next = 5,
                                                fetch(r, n).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).then((function(e) {
                                                        if (null !== e.transactions && e.transactions.length) {
                                                            var a = e.transactions.filter((function(e) {
                                                                    return 0 !== e.tier
                                                                }
                                                            ))
                                                                , r = v(a, "id");
                                                            e.transactions.filter((function(e) {
                                                                    return 0 === e.tier
                                                                }
                                                            )).length;
                                                            t.commit("SET_TRANSACTIONS", r),
                                                                t.commit("SET_TOTAL_TRANSACTIONS_COUNT", e.transactions.length)
                                                        }
                                                        return e
                                                    }
                                                )).catch(g);
                                        case 5:
                                            return s = e.sent,
                                                e.abrupt("return", s);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            redeem: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                        var r, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return r = "/api/citi/spend/v3/redeem",
                                                n = b(a),
                                                e.next = 4,
                                                fetch(r, n).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).catch(g);
                                        case 4:
                                            return s = e.sent,
                                                e.abrupt("return", s);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            getPrizes: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                        var r, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return r = "/api/citi/spend/rewards?id=".concat(a.id),
                                                n = {
                                                    method: "GET",
                                                    credentials: "include",
                                                    mode: "cors",
                                                    "sec-fetch-mode": "cors",
                                                    "sec-fetch-site": "same-origin",
                                                    accept: "/",
                                                    "accept-language": "en-US,en;q=0.9",
                                                    referrerPolicy: "no-referrer-when-downgrade",
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    body: null
                                                },
                                                e.next = 4,
                                                fetch(r, n).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).then((function(e) {
                                                        return null !== e.data && e.data.length && (e.data = e.data.sort((function(e, t) {
                                                                return new Date(t.orderDateTime) - new Date(e.orderDateTime)
                                                            }
                                                        )),
                                                            t.commit("SET_GAME_PRIZES", e.data)),
                                                            e
                                                    }
                                                )).catch(g);
                                        case 4:
                                            return s = e.sent,
                                                e.abrupt("return", s);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            resend: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                        var r, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return r = "/api/citi/spend/resendgift",
                                                n = b(a),
                                                e.next = 4,
                                                fetch(r, n).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).catch(g);
                                        case 4:
                                            return s = e.sent,
                                                e.abrupt("return", s);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            getTickets: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                        var r, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return r = "/api/citi/spend/tickets?id=" + a.id,
                                                n = {
                                                    method: "GET",
                                                    credentials: "include",
                                                    mode: "cors",
                                                    "sec-fetch-mode": "cors",
                                                    "sec-fetch-site": "same-origin",
                                                    accept: "/",
                                                    "accept-language": "en-US,en;q=0.9",
                                                    referrerPolicy: "no-referrer-when-downgrade",
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    body: null
                                                },
                                                e.next = 4,
                                                fetch(r, n).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).catch(g);
                                        case 4:
                                            return s = e.sent,
                                                e.abrupt("return", s);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            getGrandPrize: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                        var r, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return r = "/api/game/match/grandprize/" + a.id,
                                                n = {
                                                    method: "GET",
                                                    credentials: "include",
                                                    mode: "cors",
                                                    "sec-fetch-mode": "cors",
                                                    "sec-fetch-site": "same-origin",
                                                    accept: "/",
                                                    "accept-language": "en-US,en;q=0.9",
                                                    referrerPolicy: "no-referrer-when-downgrade",
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    body: null
                                                },
                                                e.next = 4,
                                                fetch(r, n).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).catch(g);
                                        case 4:
                                            return s = e.sent,
                                                e.abrupt("return", s);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            claimPrize: function() {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                        var r, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return r = "/api/citi/spend/claim?id=".concat(a.id, "&token=").concat(encodeURIComponent(a.token)),
                                                n = b(a),
                                                e.next = 4,
                                                fetch(r, n).then(h).then((function(e) {
                                                        return e.json()
                                                    }
                                                )).catch(g);
                                        case 4:
                                            return s = e.sent,
                                                e.abrupt("return", s);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            resetTransactionsState: function(e) {
                var t = e.commit;
                t("resetState")
            }
        }
            , F = {
            namespaced: !0,
            state: D,
            getters: z,
            mutations: T,
            actions: E
        };
        r["default"].use(n["a"]);
        var M = new n["a"].Store({
            plugins: [c["b"].plugin],
            modules: {
                app: L,
                transactions: F
            }
        })
            , A = M
            , $ = a("8c4f")
            , N = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                attrs: {
                    id: "reg-container"
                }
            }, [e.isRegistrationExpired ? a("div", {
                staticClass: "mt-8 text-center"
            }, [a("p", {
                staticClass: "bg-red-200 text-red-700 p-4 mb-2 rounded text-center"
            }, [e._v("\n      The registration period for this promotion has ended.\n    ")]), a("p", {
                staticClass: "mb-6"
            }, [a("terms-and-condition")], 1), a("p", {
                staticClass: "text-center"
            }, [e._v("\n      Go to\n      "), a("router-link", {
                staticClass: "\n          border-b\n          text-primary-500\n          border-primary-500\n          hover:border-primary-600 hover:text-primary-600\n        ",
                attrs: {
                    to: "/login"
                }
            }, [e._v("Login.")])], 1)]) : [e._m(0), e.isSuccessful ? a("div", {
                key: "success",
                staticClass: "flex flex-col items-center justify-center text-center"
            }, [a("img", {
                attrs: {
                    src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/check-icon.png",
                    height: "88",
                    width: "88",
                    alt: ""
                }
            }), a("span", {
                staticClass: "mt-4 block text-xl font-bold"
            }, [e._v("Registration Successful!")]), a("p", {
                staticClass: "mt-4 text-sm leading-7"
            }, [e._v("\n        You have successfully registered for the Citi Merry Match Promo. \n      ")]), e._m(1), a("button", {
                staticClass: "\n          button\n          secondary\n          mt-10\n          border border-gray-chateau\n          bg-white\n          text-black\n        ",
                on: {
                    click: function(t) {
                        return e.$router.push("/login")
                    }
                }
            }, [a("span", {
                key: "1",
                staticClass: "block mx-auto"
            }, [e._v("Log In")])])]) : a("div", {
                key: "registration"
            }, [a("h2", {
                staticClass: "mb-8 font-bold text-center text-xl text-tertiary-500"
            }, [e._v("\n        Registration\n      ")]), e.errorMessage ? a("div", {
                staticClass: "bg-red-200 text-red-700 p-4 mb-8 rounded text-sm"
            }, [a("p", [e._v(e._s(e.errorMessage))])]) : e._e(), a("ValidationObserver", {
                ref: "observer",
                attrs: {
                    tag: "form"
                },
                on: {
                    submit: function(t) {
                        return t.preventDefault(),
                            e.submit()
                    }
                },
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        t.invalid,
                            t.errors;
                        return [a("text-field", {
                            attrs: {
                                type: "text",
                                name: "vouchercode",
                                nameInErrorMessage: "Registration code",
                                rules: "required",
                                label: "Registration Code",
                                tooltip: ""
                            },
                            model: {
                                value: e.voucherCode,
                                callback: function(t) {
                                    e.voucherCode = "string" === typeof t ? t.trim() : t
                                },
                                expression: "voucherCode"
                            }
                        }), a("text-field", {
                            attrs: {
                                type: "tel",
                                name: "cardNumber",
                                rules: "required|lastSixDigits",
                                label: "Last 6 Digits of your credit card",
                                nameInErrorMessage: "Last 6 Digits of your credit card"
                            },
                            model: {
                                value: e.cardNumber,
                                callback: function(t) {
                                    e.cardNumber = "string" === typeof t ? t.trim() : t
                                },
                                expression: "cardNumber"
                            }
                        }), a("text-field", {
                            attrs: {
                                type: "text",
                                name: "firstname",
                                nameInErrorMessage: "First name",
                                label: "First Name",
                                rules: "required"
                            },
                            model: {
                                value: e.firstName,
                                callback: function(t) {
                                    e.firstName = "string" === typeof t ? t.trim() : t
                                },
                                expression: "firstName"
                            }
                        }), a("text-field", {
                            attrs: {
                                type: "text",
                                name: "lastName",
                                nameInErrorMessage: "Last name",
                                label: "Last Name",
                                rules: "required"
                            },
                            model: {
                                value: e.lastName,
                                callback: function(t) {
                                    e.lastName = "string" === typeof t ? t.trim() : t
                                },
                                expression: "lastName"
                            }
                        }), a("text-field", {
                            attrs: {
                                type: "email",
                                name: "emailAddress",
                                nameInErrorMessage: "Email address",
                                rules: "required|email",
                                label: "Email Address",
                                vid: "emailAddress"
                            },
                            model: {
                                value: e.emailAddress,
                                callback: function(t) {
                                    e.emailAddress = "string" === typeof t ? t.trim() : t
                                },
                                expression: "emailAddress"
                            }
                        }), a("smooth-reflow", [a("text-field", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.emailAddress,
                                expression: "emailAddress"
                            }],
                            attrs: {
                                type: "text",
                                name: "emailAddressConfirmation",
                                rules: "required|emailAddressConfirmation:emailAddress",
                                label: "Retype Email Address",
                                nameInErrorMessage: "Email address",
                                isNoCopyPaste: !0
                            },
                            model: {
                                value: e.emailAddressConfirmation,
                                callback: function(t) {
                                    e.emailAddressConfirmation = "string" === typeof t ? t.trim() : t
                                },
                                expression: "emailAddressConfirmation"
                            }
                        })], 1), a("text-field", {
                            attrs: {
                                type: "tel",
                                name: "mobileNo",
                                vid: "mobileNo",
                                rules: "required",
                                label: "Mobile Number",
                                nameInErrorMessage: "Mobile number",
                                pattern: "^(09|\\+639)\\d{9}$"
                            },
                            model: {
                                value: e.mobileNo,
                                callback: function(t) {
                                    e.mobileNo = "string" === typeof t ? t.trim() : t
                                },
                                expression: "mobileNo"
                            }
                        }), a("smooth-reflow", [a("text-field", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.mobileNo,
                                expression: "mobileNo"
                            }],
                            attrs: {
                                type: "tel",
                                name: "mobileNoConfirmation",
                                rules: "required|mobileNoConfirmation:mobileNo",
                                label: "Retype Mobile Number",
                                nameInErrorMessage: "Mobile number",
                                isNoCopyPaste: !0
                            },
                            model: {
                                value: e.mobileNoConfirmation,
                                callback: function(t) {
                                    e.mobileNoConfirmation = "string" === typeof t ? t.trim() : t
                                },
                                expression: "mobileNoConfirmation"
                            }
                        })], 1), a("text-field", {
                            attrs: {
                                type: "password",
                                name: "password",
                                vid: "password",
                                rules: "required|password",
                                label: "Password",
                                nameInErrorMessage: "Password",
                                tooltip: "Password must be at least 8 characters long and a combination of letters and numbers"
                            },
                            model: {
                                value: e.password,
                                callback: function(t) {
                                    e.password = "string" === typeof t ? t.trim() : t
                                },
                                expression: "password"
                            }
                        }), a("smooth-reflow", [a("text-field", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.password,
                                expression: "password"
                            }],
                            attrs: {
                                type: "password",
                                name: "passwordConfirmation",
                                rules: "required|passwordConfirmation:password",
                                label: "Retype Password",
                                nameInErrorMessage: "Password confirmation"
                            },
                            model: {
                                value: e.passwordConfirmation,
                                callback: function(t) {
                                    e.passwordConfirmation = "string" === typeof t ? t.trim() : t
                                },
                                expression: "passwordConfirmation"
                            }
                        })], 1), a("button", {
                            staticClass: "button primary mt-5 bg-primary-500",
                            attrs: {
                                type: "submit",
                                disabled: e.isLoading
                            }
                        }, [e.isLoading ? a("app-loader") : a("span", {
                            staticClass: "block mx-auto"
                        }, [e._v("Register")])], 1), a("p", {
                            staticClass: "text-center mt-4 text-sm"
                        }, [e._v("\n          Already registered?\n          "), a("router-link", {
                            staticClass: "\n              border-b\n              text-primary-500 \n              border-primary-500\n              hover:border-primary-600 hover:text-primary-600\n            ",
                            attrs: {
                                to: "/login"
                            }
                        }, [e._v("Log in here.")])], 1)]
                    }
                }], null, !1, 3552600690)
            })], 1)]], 2)
        }
            , I = [function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("p", {
                staticClass: "mb-8 text-center text-woodsmoke text-sm",
                attrs: {
                    id: "heading"
                }
            }, [e._v("\n      Register to join the \n      "), a("span", {
                staticClass: "font-bold"
            }, [e._v("Citi Merry Match Promo")])])
        }
            , function() {
                var e = this
                    , t = e.$createElement
                    , a = e._self._c || t;
                return a("div", {
                    staticClass: "mt-12"
                }, [a("p", {
                    staticClass: "\n            rounded-full\n            bg-primary-500\n            py-2\n            px-4\n            text-center\n            font-bold\n            text-white text-sm\n          "
                }, [e._v("\n          Citi Merry Match\n        ")]), a("ul", {
                    staticClass: "\n            mt-6\n            ml-4\n            list-disc\n            font-normal\n            text-left text-xs text-charade\n            leading-7\n          "
                }, [a("li", [e._v("\n            Start earning Playcodes by using your Citi credit card from December 17, 2022 to March 12, 2023. Earn (1) Playcode for every qualified local or forex straight retail purchase, including bills payment transactions, Citi PayLite NOW, and Citi PayAll. Plus, get 10 bonus Playcodes for every accumulated spend of P25,000! Earn up to 80 bonus Playcodes. Please refer to the Terms and Conditions for full details of qualified transactions. \n          ")]), a("li", {
                    staticClass: "mt-3"
                }, [e._v("\n            Playcodes for the Citi Merry Match Promo will be uploaded to your account starting December 29, 2022. You may refer to the Terms and Conditions for the schedule of Playcode upload. Redemption Period is until May 12, 2023. \n          ")])]), a("p", {
                    staticClass: "mt-8"
                }, [a("a", {
                    staticClass: "\n              text-sm\n              inline-block\n              border-b border-trout\n              text-trout\n              leading-5\n            ",
                    attrs: {
                        href: "http://www.citibank.com.ph/mm",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [e._v("Terms and conditions apply")]), e._v(".\n        ")])])
            }
        ]
            , H = a("7bb1")
            , V = a("4c93");
        function G(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    a.push.apply(a, r)
            }
            return a
        }
        function Z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? G(Object(a), !0).forEach((function(t) {
                        Object(o["a"])(e, t, a[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : G(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                ))
            }
            return e
        }
        Object(H["c"])("required", Z({}, V["e"], {
            message: " {_field_} is required"
        })),
            Object(H["c"])("min", Z({}, V["c"], {
                params: ["min", ""],
                message: "{_field_} must be atleast {min} characters long"
            })),
            Object(H["c"])("lastSixDigits", {
                validate: function(e) {
                    return !isNaN(e) && 6 == e.length
                },
                message: "{_field_} is not valid"
            }),
            Object(H["c"])("email", Z({}, V["b"], {
                message: "{_field_} is not valid"
            })),
            Object(H["c"])("digits", Z({}, V["a"], {
                message: "{_field_} is not valid"
            })),
            Object(H["c"])("regex", Z({}, V["d"], {
                message: "{_field_} is not valid"
            })),
            Object(H["c"])("password", {
                validate: function(e) {
                    return e.length >= 8
                },
                message: "Password must be at least 8 characters long and a combination of letters and numbers"
            }),
            Object(H["c"])("mobileNoConfirmation", {
                validate: function(e, t) {
                    var a = t.other;
                    return e === a
                },
                message: "Mobile number does not match",
                params: [{
                    name: "other",
                    isTarget: !0
                }]
            }),
            Object(H["c"])("passwordConfirmation", {
                validate: function(e, t) {
                    var a = t.other;
                    return e === a
                },
                message: "Password does not match",
                params: [{
                    name: "other",
                    isTarget: !0
                }]
            }),
            Object(H["c"])("emailAddressConfirmation", {
                validate: function(e, t) {
                    var a = t.other;
                    return e === a
                },
                message: "Email does not match",
                params: [{
                    name: "other",
                    isTarget: !0
                }]
            }),
            Object(H["c"])("passwordConfirmation", {
                validate: function(e, t) {
                    var a = t.other;
                    return e === a
                },
                message: "Password does not match",
                params: [{
                    name: "other",
                    isTarget: !0
                }]
            });
        var W = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("ValidationProvider", {
                staticClass: "mb-4",
                attrs: {
                    rules: e.rules,
                    name: e.nameInErrorMessage,
                    mode: "lazy",
                    vid: e.vid,
                    tag: "div"
                },
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        var r = t.errors;
                        t.failedRules;
                        return [a("label", {
                            staticClass: "block mb-1  text-sm float-left font-normal "
                        }, [e._v(e._s(e.label))]), e.tooltip ? a("span", {
                            staticClass: "tooltip relative z-10 block text-center font-bold float-right w-4 h-4 rounded-full text-xs bg-tertiary-500 text-white  focus:outline-none",
                            attrs: {
                                "data-tippy-content": e.tooltip
                            }
                        }, [e._v("?")]) : e._e(), a("div", {
                            staticClass: "relative"
                        }, [a("input", e._b({
                            directives: [{
                                name: "model",
                                rawName: "v-model.trim",
                                value: e.innerValue,
                                expression: "innerValue",
                                modifiers: {
                                    trim: !0
                                }
                            }],
                            ref: e.name,
                            staticClass: "rounded-md block px-4 text-black border border-iron w-full h-12 font-medium text-base bg-white focus:outline-none shadow-inset-1 focus:border-white  focus:shadow-outline-blue transition ease-in duration-75",
                            class: {
                                "focus:shadow-outline-red shadow-outline-red": r[0]
                            },
                            attrs: {
                                type: e.type,
                                name: e.name,
                                pattern: e.pattern
                            },
                            domProps: {
                                value: e.innerValue
                            },
                            on: {
                                paste: function(t) {
                                    return e.disableCopyPaste(t)
                                },
                                input: function(t) {
                                    t.target.composing || (e.innerValue = t.target.value.trim())
                                },
                                blur: function(t) {
                                    return e.$forceUpdate()
                                }
                            }
                        }, "input", e.$attrs, !1))]), a("smooth-reflow", [r[0] ? a("span", {
                            staticClass: "text-xs relative  text-red-500 py-1 ",
                            staticStyle: {
                                top: "-1px"
                            }
                        }, [e._v(e._s(r[0]))]) : e._e()])]
                    }
                }])
            })
        }
            , q = []
            , B = a("7811")
            , U = {
            name: "TextField",
            components: {
                ValidationProvider: H["b"]
            },
            props: ["label", "name", "nameInErrorMessage", "type", "placeholder", "value", "rules", "tooltip", "pattern", "vid", "isNoCopyPaste"],
            event: "input",
            data: function() {
                return {
                    isActive: !1,
                    innerValue: ""
                }
            },
            mounted: function() {
                Object(B["a"])(".tooltip", {
                    animation: "shift-away"
                })
            },
            computed: {},
            watch: {
                innerValue: function(e) {
                    this.$emit("input", e)
                }
            },
            methods: {
                disableCopyPaste: function(e) {
                    if (this.isNoCopyPaste)
                        return e.preventDefault(),
                            !1
                }
            }
        }
            , J = U
            , Y = (a("8409"),
            a("2877"))
            , K = Object(Y["a"])(J, W, q, !1, null, "c0ab7030", null)
            , Q = K.exports
            , X = a("d2ca");
        function ee(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    a.push.apply(a, r)
            }
            return a
        }
        function te(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ee(Object(a), !0).forEach((function(t) {
                        Object(o["a"])(e, t, a[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ee(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                ))
            }
            return e
        }
        var ae = {
            components: {
                ValidationObserver: H["a"],
                ValidationProvider: H["b"],
                TextField: Q,
                AppLoader: X["default"]
            },
            computed: {
                cardNumber: Object(c["e"])("app/cardNumber"),
                voucherCode: Object(c["e"])("app/voucherCode"),
                termsIdentifier: Object(c["e"])("app/termsIdentifier"),
                isRegistrationExpired: Object(c["e"])("app/isRegistrationExpired"),
                isRegistrationStarted: Object(c["e"])("app/isRegistrationStarted")
            },
            watch: {
                isRegistrationExpired: {
                    handler: function(e, t) {
                        e && (document.getElementById("heading").style.display = "none")
                    },
                    immediate: !0
                }
            },
            data: function() {
                return {
                    errorMessage: "",
                    isLoading: !1,
                    mobileNoConfirmation: "",
                    emailAddressConfirmation: "",
                    passwordConfirmation: "",
                    emailAddress: "",
                    mobileNo: "",
                    firstName: "",
                    lastName: "",
                    password: "",
                    isCheckedTerms: !1,
                    isSuccessful: !1
                }
            },
            mounted: function() {
                this.isRegistrationStarted || this.$router.push("/landing-page")
            },
            methods: te({}, Object(c["a"])("app/*"), {
                submit: function() {
                    var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                            var t, a, r = this;
                            return regeneratorRuntime.wrap((function(e) {
                                    while (1)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    this.$refs.observer.validate();
                                            case 2:
                                                t = e.sent,
                                                t && (this.isLoading = !0,
                                                    this.isSuccessful = !1,
                                                    a = {
                                                        emailAddress: this.emailAddress,
                                                        mobileNo: this.mobileNo,
                                                        firstName: this.firstName,
                                                        lastName: this.lastName,
                                                        cardNumber: this.cardNumber,
                                                        password: this.password,
                                                        voucherCode: this.voucherCode,
                                                        id: this.$store.get("app/config@campaignID")
                                                    },
                                                    this.register(a).then((function(e) {
                                                            if (r.isLoading = !1,
                                                            4260 === e.id)
                                                                r.isSuccessful = !0,
                                                                    document.getElementById("heading").style.display = "none",
                                                                    r.$cookies.set("isAlreadyRegistered", !0, 5184e3),
                                                                    r.$gtag.event("Registration", {
                                                                        "event-category": "Campaign",
                                                                        "event-label": "Success"
                                                                    });
                                                            else {
                                                                switch (e.id) {
                                                                    case 44:
                                                                        r.errorMessage = "The registration code has already been used before or you have been pre-registered using the same credentials. Please use a different registration code or check promo terms and conditions regarding pre-registration.";
                                                                        break;
                                                                    case 45:
                                                                        r.errorMessage = "Invalid registration code or last 6 digits. Please correct and try again.";
                                                                        break;
                                                                    case 4249:
                                                                        r.errorMessage = "Invalid registration code or last 6 digits. Please correct and try again.";
                                                                        break;
                                                                    case 4253:
                                                                        r.errorMessage = "This email address has already been registered before or you have been pre-registered using the same credentials. Please use another email address or check promo terms and conditions regarding pre-registration.";
                                                                        break;
                                                                    default:
                                                                        r.errorMessage = e.description;
                                                                        break
                                                                }
                                                                r.$gtag.event("Registration", {
                                                                    "event-category": "Campaign",
                                                                    "event-label": "Failed"
                                                                })
                                                            }
                                                            document.getElementById("reg-container").scrollIntoView({
                                                                behavior: "smooth"
                                                            })
                                                        }
                                                    )));
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                goBack: function() {
                    this.$store.set("app/isValidRegistrationCode", !1)
                }
            })
        }
            , re = ae
            , ne = Object(Y["a"])(re, N, I, !1, null, "34308a7e", null)
            , se = ne.exports
            , ie = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", [a("smooth-reflow", [e.isRedemptionStarted ? e.isRedemptionExpired ? [a("div", {
                staticClass: "mt-8 text-center"
            }, [a("p", {
                staticClass: "bg-red-200 text-red-700 p-4 rounded"
            }, [e._v("\n          The redemption period for this promotion has ended.\n        ")]), a("terms-and-condition", {
                staticClass: "mt-4 block text-center"
            })], 1)] : [a("p", {
                staticClass: "mb-8 text-center text-woodsmoke text-sm",
                attrs: {
                    id: "heading"
                }
            }, [e._v("\n        Check your progress on the\n        "), a("span", {
                staticClass: "font-bold"
            }, [e._v("Citi Merry Match Promo")])]), a("h2", {
                staticClass: "mb-8 font-bold text-center text-xl text-tertiary-500"
            }, [e._v("\n        Login\n      ")]), e.errorMessage ? a("div", {
                staticClass: "bg-red-200 text-red-700 p-4 mb-8 rounded text-sm"
            }, [a("p", [e._v(e._s(e.errorMessage))])]) : e._e(), e.alert ? [a("smooth-reflow", [a("app-alert", {
                attrs: {
                    alert: e.alert
                }
            })], 1)] : e._e(), a("ValidationObserver", {
                ref: "observer",
                staticClass: "block",
                attrs: {
                    tag: "form"
                },
                on: {
                    submit: function(t) {
                        return t.preventDefault(),
                            e.submit(t)
                    }
                },
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        t.invalid;
                        return [a("text-field", {
                            attrs: {
                                type: "text",
                                name: "emailAddress",
                                rules: "required|email",
                                label: "Email Address",
                                nameInErrorMessage: "Email address"
                            },
                            model: {
                                value: e.emailAddress,
                                callback: function(t) {
                                    e.emailAddress = "string" === typeof t ? t.trim() : t
                                },
                                expression: "emailAddress"
                            }
                        }), a("div", [a("p", {
                            staticClass: "\n              relative\n              float-right\n              z-10\n              mb-1\n              border-b border-white\n              hover:border-gray-800-500 hover:text-gray-800\n              text-right text-xs\n              leading-normal\n            "
                        }, [a("router-link", {
                            staticClass: "cursor-pointer text-gray-chateau hover:text-gray-800",
                            attrs: {
                                to: "/forgotpassword"
                            }
                        }, [e._v("\n              Forgot Password?\n            ")])], 1), a("text-field", {
                            attrs: {
                                type: "password",
                                name: "password",
                                rules: "required|password",
                                label: "Password",
                                nameInErrorMessage: "Password"
                            },
                            model: {
                                value: e.password,
                                callback: function(t) {
                                    e.password = "string" === typeof t ? t.trim() : t
                                },
                                expression: "password"
                            }
                        })], 1), a("button", {
                            staticClass: "button mt-1 bg-primary-500",
                            attrs: {
                                type: "submit",
                                disabled: e.isLoading
                            }
                        }, [e.isLoading ? a("app-loader", {
                            key: "2"
                        }) : a("span", {
                            key: "1",
                            staticClass: "block mx-auto"
                        }, [e._v("Log In")])], 1), e.isRegistrationExpired ? e._e() : a("p", {
                            staticClass: "mt-4 text-center text-sm"
                        }, [e._v("\n          Not yet registered?\n          "), a("router-link", {
                            staticClass: "\n              border-b border-primary-500\n              text-primary-500\n              hover:border-primary-600 hover:text-primary-600\n            ",
                            attrs: {
                                to: "/register"
                            }
                        }, [e._v("\n            Register here.\n          ")])], 1)]
                    }
                }])
            })] : [a("div", {
                staticClass: "bg-yellow-200 text-gray-800 py-4 px-5 mb-8 rounded-md"
            }, [a("p", [e._v("\n          Come back on\n          "), a("span", {
                staticClass: "font-semibold"
            }, [e._v(e._s(this.getFormattedLongDate(this.config.redemptionStart)))]), e._v("\n          to start playing the game and redeeming your prizes.\n        ")])]), e.isRegistrationExpired ? e._e() : a("p", {
                staticClass: "mt-4 text-center text-sm"
            }, [e._v("\n        Not yet registered?\n        "), a("router-link", {
                staticClass: "\n            border-b border-primary-500\n            text-primary-500\n            hover:border-primary-600 hover:text-primary-600\n          ",
                attrs: {
                    to: "/register"
                }
            }, [e._v("\n          Register here.\n        ")])], 1)]], 2)], 1)
        }
            , oe = []
            , ce = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", [a("div", {
                staticClass: "p-4 mb-5 rounded text-sm",
                class: e.classLabel
            }, [e._v(e._s(e.alert.message))])])
        }
            , le = []
            , de = {
            props: ["alert"],
            computed: {
                classLabel: function() {
                    return this.alert.isSuccessful ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
                }
            }
        }
            , ue = de
            , pe = Object(Y["a"])(ue, ce, le, !1, null, null, null)
            , fe = pe.exports
            , me = {
            methods: {
                getFormattedDate: function(e) {
                    if (!e)
                        return "";
                    var t = new Date(e)
                        , a = t.getFullYear()
                        , r = t.getDate()
                        , n = t.getMonth() + 1;
                    return "".concat(n, "/").concat(r, "/").concat(a)
                },
                getFormattedLongDate: function(e) {
                    if (!e)
                        return "";
                    var t = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                        , a = new Date(e)
                        , r = a.getFullYear()
                        , n = a.getDate()
                        , s = t[a.getMonth()];
                    return "".concat(s, " ").concat(n, ", ").concat(r)
                }
            }
        };
        function he(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    a.push.apply(a, r)
            }
            return a
        }
        function ge(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? he(Object(a), !0).forEach((function(t) {
                        Object(o["a"])(e, t, a[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : he(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                ))
            }
            return e
        }
        var be = {
            components: {
                ValidationObserver: H["a"],
                TextField: Q,
                AppAlert: fe,
                AppLoader: X["default"]
            },
            mixins: [me],
            props: ["alert"],
            computed: {
                emailAddress: Object(c["e"])("app/emailAddress"),
                cardNumber: Object(c["e"])("app/cardNumber"),
                config: Object(c["e"])("app/config"),
                isRedemptionExpired: Object(c["e"])("app/isRedemptionExpired"),
                isRegistrationExpired: Object(c["e"])("app/isRegistrationExpired"),
                isRedemptionStarted: Object(c["e"])("app/isRedemptionStarted"),
                dateRegistered: Object(c["e"])("app/dateRegistered"),
                termsIdentifier: Object(c["e"])("app/termsIdentifier")
            },
            data: function() {
                return {
                    errorMessage: "",
                    isLoading: !1,
                    password: ""
                }
            },
            watch: {
                isRedemptionExpired: {
                    handler: function(e, t) {
                        e && (document.getElementById("heading").style.display = "none")
                    },
                    immediate: !0
                }
            },
            mounted: function() {
                this.isRedemptionExpired && (document.getElementById("heading").style.display = "none")
            },
            methods: ge({}, Object(c["a"])("app/*"), {
                submit: function() {
                    var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                            var t, a, r = this;
                            return regeneratorRuntime.wrap((function(e) {
                                    while (1)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    this.$refs.observer.validate();
                                            case 2:
                                                t = e.sent,
                                                t && (this.isLoading = !0,
                                                    a = {
                                                        emailaddress: this.emailAddress,
                                                        password: this.password,
                                                        id: this.$store.get("app/config@campaignID")
                                                    },
                                                    this.login(a).then((function(e) {
                                                            if (r.isLoading = !1,
                                                            5 === e.id) {
                                                                r.$store.set("app/isLoggedIn", !0),
                                                                    r.$router.push("/");
                                                                var t = e.user
                                                                    , a = t.dateRegistered;
                                                                t.code;
                                                                r.dateRegistered = a,
                                                                    r.$gtag.event("Login", {
                                                                        "event-category": "Campaign",
                                                                        "event-label": "Success"
                                                                    })
                                                            } else
                                                                r.errorMessage = e.description,
                                                                    r.$gtag.event("Login", {
                                                                        "event-category": "Campaign",
                                                                        "event-label": "Failed"
                                                                    })
                                                        }
                                                    )));
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            })
        }
            , ve = be
            , we = Object(Y["a"])(ve, ie, oe, !1, null, null, null)
            , xe = we.exports
            , Ce = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "mb-6"
            }, [a("div", {
                staticClass: "pt-10 bg-porcelain"
            }, [a("p", {
                staticClass: "text-2xl font-heading font-bold text-center"
            }, [e._v("Let's play!")]), a("p", {
                staticClass: "mb-10 mt-2 text-sm text-tertiary-500 text-center",
                on: {
                    click: e.toggleDialog
                }
            }, [a("font-awesome-icon", {
                staticClass: "inlin-block mr-1",
                attrs: {
                    icon: ["far", "info-circle"]
                }
            }), a("span", {
                staticClass: "underline cursor-pointer"
            }, [e._v("How to earn playcodes")])], 1), a("featured-carousel", {}), a("p", {
                staticClass: "-ml-3 mt-4 text-base text-center"
            }, [e._v("\n      Or win other mystery prizes\n    ")]), a("mystery-carousel", {
                staticClass: "mt-4"
            }), e._m(0), e._m(1)], 1), a("div", {
                attrs: {
                    id: "prizes"
                }
            }, [a("game-prizes")], 1), a("p", {
                staticClass: "mt-14 w-full text-center text-sm"
            }, [a("button", {
                staticClass: "focus:outline-none mx-auto hover:underline",
                on: {
                    click: e.onLogout
                }
            }, [e._v(" \n      Log out\n      "), e.isLoggingOut ? a("app-loader") : a("span", {}, [a("font-awesome-icon", {
                staticClass: "inline-block",
                attrs: {
                    icon: ["far", "sign-out"],
                    "fixed-width": ""
                }
            })], 1)], 1)]), a("div", {
                staticClass: "\n      fixed\n      bottom-0\n      border-t border-mercury\n      px-8\n      pt-10\n      pb-4\n      w-full\n      xs:max-w-390px\n      bg-black\n      text-white text-center\n      z-20\n    "
            }, [a("div", {
                staticClass: "absolute left-0 top-0 -mt-6 w-full px-18"
            }, [a("button", {
                staticClass: "button mx-auto flex items-center justify-center text-white",
                class: {
                    "bg-primary-500": e.ticketsCount,
                    "disabled bg-gray-chateau cursor-not-allowed": !e.ticketsCount
                },
                attrs: {
                    disabled: !e.ticketsCount
                },
                on: {
                    click: function(t) {
                        return e.$router.push("/game")
                    }
                }
            }, [a("p", {
                staticClass: "mr-2"
            }, [e._v("Play Now")]), a("svg", {
                attrs: {
                    width: "12",
                    height: "16",
                    viewBox: "0 0 12 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("path", {
                attrs: {
                    d: "M3 11.3287V4.67129L7.99306 8L3 11.3287Z",
                    stroke: "white",
                    "stroke-width": "5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            })])])]), e.isLoading ? e._e() : [a("smooth-reflow", [e.isShowFeedback ? [a("app-alert", {
                staticClass: "mb-0",
                attrs: {
                    alert: e.alert
                }
            }), a("button", {
                staticClass: "text-sm underline text-red-200",
                on: {
                    click: e.loadTickets
                }
            }, [e._v("\n            Reload\n          ")])] : 0 === e.totalTicketsCount ? a("p", {
                staticClass: "text-base pt-2"
            }, [e._v("\n          You dont have playcodes available yet.\n        ")]) : a("p", {
                staticClass: "text-base pt-2"
            }, [a("span", {
                staticClass: "font-bold"
            }, [e._v(e._s(e.ticketsCount) + "\n            " + e._s(e.ticketsCount <= 1 ? "playcode" : "playcodes") + " left\n          ")]), e._v("\n          out of " + e._s(e.totalTicketsCount) + "\n          " + e._s(e.totalTicketsCount <= 1 ? "playcode" : "playcodes") + "\n        ")]), e.ticketsCount ? e._e() : a("p", {
                staticClass: "mt-1 text-sm text-center underline cursor-pointer text-white",
                on: {
                    click: e.toggleDialog
                }
            }, [e._v("\n          How to earn playcodes\n        ")])], 2)]], 2), a("app-dialog", {
                attrs: {
                    showing: e.isShowDialog,
                    "max-width": "366px",
                    classes: {
                        content: "mx-auto  overflow-visible py-4",
                        root: "px-4 bg-transparent-darker overflow-y-scroll"
                    },
                    transition: "dialog",
                    "bg-transition": "fade"
                },
                on: {
                    hide: e.toggleDialog
                }
            }, [a("div", {
                staticClass: "dialog h-full flex flex-col justify-center items-center"
            }, [a("div", {
                staticClass: "p-8 bg-white text-center border-2 border-black rounded-xl"
            }, [a("p", {
                staticClass: "font-bold text-xl"
            }, [e._v("Let’s get ready!")]), a("ul", {
                staticClass: "mt-8 text-left"
            }, [a("li", {
                staticClass: "flex"
            }, [a("div", {
                staticClass: "mr-4"
            }, [a("svg", {
                attrs: {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 28 28",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("rect", {
                attrs: {
                    width: "28",
                    height: "28",
                    rx: "14",
                    fill: "#00ADE8"
                }
            }), a("path", {
                attrs: {
                    d: "M15.8302 8.81818V19H13.6775V10.8615H13.6178L11.2861 12.3232V10.4141L13.8067 8.81818H15.8302Z",
                    fill: "white"
                }
            }), a("rect", {
                attrs: {
                    x: "0.5",
                    y: "0.5",
                    width: "27",
                    height: "27",
                    rx: "13.5",
                    stroke: "black",
                    "stroke-opacity": "0.08"
                }
            })])]), a("div", [a("p", {
                staticClass: "font-bold leading-8"
            }, [e._v("Earn playcodes")]), a("p", {
                staticClass: "mt-1 leading-6 text-charade text-xs"
            }, [e._v("\n                Start earning Playcodes by using your Citi credit card from December 17, 2022 to March 12, 2023. Earn (1) Playcode for every qualified local or forex straight retail purchase, including bills payment transactions, Citi PayLite NOW, and Citi PayAll. Plus, get 10 bonus Playcodes for every accumulated spend of P25,000! Earn up to 80 bonus Playcodes. Please refer to the "), a("a", {
                staticClass: "underline",
                attrs: {
                    href: "http://www.citibank.com.ph/mm",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [e._v("Terms and Conditions")]), e._v(" for full details of qualified transactions. \n              ")])])]), a("li", {
                staticClass: "mt-4 flex"
            }, [a("div", {
                staticClass: "mr-4"
            }, [a("svg", {
                attrs: {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 28 28",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("rect", {
                attrs: {
                    width: "28",
                    height: "28",
                    rx: "14",
                    fill: "#00ADE8"
                }
            }), a("path", {
                attrs: {
                    d: "M10.9161 19V17.4489L14.5404 14.093C14.8486 13.7947 15.1072 13.5263 15.316 13.2876C15.5281 13.049 15.6888 12.8153 15.7982 12.5866C15.9076 12.3546 15.9623 12.1044 15.9623 11.8359C15.9623 11.5376 15.8943 11.2808 15.7584 11.0653C15.6225 10.8466 15.4369 10.6792 15.2016 10.5632C14.9663 10.4439 14.6995 10.3842 14.4012 10.3842C14.0896 10.3842 13.8179 10.4472 13.5858 10.5732C13.3538 10.6991 13.1749 10.8797 13.0489 11.1151C12.923 11.3504 12.86 11.6304 12.86 11.9553H10.8167C10.8167 11.2891 10.9675 10.7107 11.2691 10.2202C11.5707 9.72964 11.9933 9.35014 12.5368 9.08168C13.0804 8.81321 13.7068 8.67898 14.4161 8.67898C15.1453 8.67898 15.78 8.80824 16.3202 9.06676C16.8638 9.32197 17.2864 9.67661 17.588 10.1307C17.8896 10.5848 18.0404 11.1051 18.0404 11.6918C18.0404 12.0762 17.9642 12.4557 17.8117 12.8303C17.6626 13.2048 17.3957 13.6207 17.0113 14.0781C16.6268 14.5322 16.0849 15.0774 15.3856 15.7138L13.8991 17.1705V17.2401H18.1746V19H10.9161Z",
                    fill: "white"
                }
            }), a("rect", {
                attrs: {
                    x: "0.5",
                    y: "0.5",
                    width: "27",
                    height: "27",
                    rx: "13.5",
                    stroke: "black",
                    "stroke-opacity": "0.08"
                }
            })])]), a("div", [a("p", {
                staticClass: "font-bold leading-8"
            }, [e._v("Play and get a chance to win!")]), a("p", {
                staticClass: "mt-1 leading-6 text-charade text-xs"
            }, [e._v("\n                Use a Playcode to play then choose two (2) random blocks to\n                flip. Make a match and win a prize.\n              ")])])]), a("li", {
                staticClass: "mt-4 flex"
            }, [a("div", {
                staticClass: "mr-4"
            }, [a("svg", {
                attrs: {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 28 28",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("rect", {
                attrs: {
                    width: "28",
                    height: "28",
                    rx: "14",
                    fill: "#00ADE8"
                }
            }), a("path", {
                attrs: {
                    d: "M13.9745 19.1392C13.2321 19.1392 12.5709 19.0116 11.9909 18.7564C11.4142 18.4979 10.9584 18.1432 10.6237 17.6925C10.2922 17.2384 10.1215 16.7147 10.1116 16.1214H12.2792C12.2925 16.37 12.3737 16.5888 12.5228 16.7777C12.6753 16.9633 12.8775 17.1075 13.1294 17.2102C13.3812 17.313 13.6646 17.3643 13.9795 17.3643C14.3076 17.3643 14.5976 17.3063 14.8495 17.1903C15.1014 17.0743 15.2986 16.9136 15.4411 16.7081C15.5837 16.5026 15.6549 16.2656 15.6549 15.9972C15.6549 15.7254 15.5787 15.4851 15.4262 15.2763C15.2771 15.0642 15.0616 14.8984 14.7799 14.7791C14.5015 14.6598 14.1701 14.6001 13.7856 14.6001H12.836V13.0192H13.7856C14.1104 13.0192 14.3971 12.9628 14.6457 12.8501C14.8976 12.7375 15.0931 12.5817 15.2323 12.3828C15.3715 12.1806 15.4411 11.9453 15.4411 11.6768C15.4411 11.4216 15.3798 11.1979 15.2572 11.0057C15.1379 10.8101 14.9688 10.6577 14.7501 10.5483C14.5347 10.4389 14.2828 10.3842 13.9944 10.3842C13.7027 10.3842 13.4359 10.4373 13.194 10.5433C12.952 10.6461 12.7581 10.7936 12.6123 10.9858C12.4665 11.178 12.3886 11.4034 12.3786 11.6619H10.3154C10.3254 11.0753 10.4927 10.5582 10.8176 10.1108C11.1424 9.66335 11.5799 9.31368 12.1301 9.06179C12.6836 8.80658 13.3083 8.67898 14.0044 8.67898C14.707 8.67898 15.3218 8.80658 15.8488 9.06179C16.3758 9.317 16.7851 9.66169 17.0768 10.0959C17.3718 10.5268 17.5176 11.0107 17.5143 11.5476C17.5176 12.1177 17.3403 12.5933 16.9823 12.9744C16.6277 13.3556 16.1653 13.5975 15.5953 13.7003V13.7798C16.3443 13.8759 16.9144 14.1361 17.3055 14.5604C17.6999 14.9813 17.8954 15.5083 17.8921 16.1413C17.8954 16.7214 17.7281 17.2367 17.39 17.6875C17.0553 18.1383 16.5929 18.4929 16.0029 18.7514C15.413 19.0099 14.7368 19.1392 13.9745 19.1392Z",
                    fill: "white"
                }
            }), a("rect", {
                attrs: {
                    x: "0.5",
                    y: "0.5",
                    width: "27",
                    height: "27",
                    rx: "13.5",
                    stroke: "black",
                    "stroke-opacity": "0.08"
                }
            })])]), a("div", [a("p", {
                staticClass: "font-bold leading-8"
            }, [e._v("Spend and play more!")]), a("p", {
                staticClass: "mt-1 leading-6 text-charade text-xs"
            }, [e._v("\n                Playcodes for the Merry Match will be uploaded\n                to your account starting December 29, 2022. You may refer to\n                the "), a("a", {
                staticClass: "underline",
                attrs: {
                    href: "http://www.citibank.com.ph/mm",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [e._v("Terms and Conditions")]), e._v(" for the schedule of Playcode upload.\n                Redemption Period is until May 12, 2023.\n              ")])])])])]), a("button", {
                staticClass: "\n          mt-4\n          rounded-full\n          border-2 border-white\n          bg-transparent-white-2\n          p-2\n          text-white\n        ",
                on: {
                    click: e.toggleDialog
                }
            }, [a("font-awesome-icon", {
                attrs: {
                    icon: ["fal", "times"],
                    size: "lg",
                    "fixed-width": ""
                }
            })], 1)])])], 1)
        }
            , ye = [function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("p", {
                staticClass: "mt-8 text-center text-xs text-trout"
            }, [a("a", {
                staticClass: "inline-block border-b border-trout",
                attrs: {
                    href: "http://www.citibank.com.ph/mm",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }, [e._v("Terms and Conditions apply.")])])
        }
            , function() {
                var e = this
                    , t = e.$createElement
                    , a = e._self._c || t;
                return a("div", {
                    staticClass: "mt-18 px-8 py-18 text-center bg-mercury"
                }, [a("p", {
                    staticClass: "text-xl font-bold"
                }, [e._v("How to Play")]), a("p", {
                    staticClass: "mt-5 text-sm leading-6"
                }, [e._v("\n        Get a matching 🎁\n        "), a("span", {
                    staticClass: "font-bold"
                }, [e._v("gift block to win the featured prize")]), e._v(" of\n        the day or get other matches to win a mystery prize.\n      ")]), a("div", {
                    staticClass: "mt-4 rounded-lg p-3 flex bg-white"
                }, [a("img", {
                    attrs: {
                        src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/card-0.png",
                        width: "56",
                        height: "56",
                        alt: ""
                    }
                }), a("div", {
                    staticClass: "ml-4 flex flex-col justify-center text-left"
                }, [a("span", {
                    staticClass: "font-medium text-xs text-oxford-blue uppercase"
                }, [e._v("Gift Block")]), a("span", {
                    staticClass: "font-bold"
                }, [e._v("Featured Prize")])])]), a("div", {
                    staticClass: "mt-4 rounded-lg p-3 flex bg-white"
                }, [a("img", {
                    attrs: {
                        src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/card-4.png",
                        width: "56",
                        height: "56",
                        alt: ""
                    }
                }), a("div", {
                    staticClass: "ml-4 flex flex-col justify-center text-left"
                }, [a("span", {
                    staticClass: "font-medium text-xs text-oxford-blue uppercase"
                }, [e._v("Other Block")]), a("span", {
                    staticClass: "font-bold"
                }, [e._v("Mystery Prize")])])]), a("p", {
                    staticClass: "mt-8 text-sm"
                }, [e._v("\n        Keep using your credit card to earn more playcodes!\n      ")])])
            }
        ]
            , _e = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "text-center px-3 py-6 text-gray-500"
            }, [e.alert.isSuccessful ? [a("div", {
                staticClass: "text-center"
            }, [a("font-awesome-icon", {
                staticClass: "text-7xl mb-4 text-primary-500  block mx-auto",
                attrs: {
                    icon: ["far", "check-circle"]
                }
            }), a("span", {
                staticClass: "block text-xl font-bold mb-4 text-storm-dust"
            }, [e._v(e._s(e.alert.heading))]), a("p", {
                staticClass: "text-storm-dust"
            }, [e._v(e._s(e.alert.message))])], 1)] : [a("div", {
                staticClass: "text-center"
            }, [a("div", [a("font-awesome-icon", {
                staticClass: "text-7xl text-red-400 mb-4 mx-auto block",
                attrs: {
                    icon: ["far", "exclamation-circle"]
                }
            })], 1), a("span", {
                staticClass: "block text-xl font-bold mb-4 text-storm-dust"
            }, [e._v(e._s(e.alert.heading))]), a("p", {
                staticClass: "text-storm-dust"
            }, [e._v("\n        " + e._s(e.alert.message) + "\n        "), a("a", {
                staticClass: "text-primary-500 whitespace-no-wrap hover:underline",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                            e.retry(t)
                    }
                }
            }, [e._v("Try again")])])])]], 2)
        }
            , ke = []
            , Oe = {
            name: "PageFeedback",
            props: ["alert"],
            methods: {
                retry: function() {
                    this.$emit("toggleFeedback", !1, {})
                }
            }
        }
            , je = Oe
            , Le = Object(Y["a"])(je, _e, ke, !1, null, null, null)
            , Pe = Le.exports
            , Se = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("transition", {
                attrs: {
                    appear: "",
                    name: e.bgTransition
                }
            }, [e.showing ? a("div", {
                class: ["dialog  fixed inset-0 z-50", e.classes.root],
                on: {
                    click: e.onClick,
                    keydown: e.onKeydown
                }
            }, [a("transition", {
                attrs: {
                    name: e.transition,
                    appear: ""
                }
            }, [a(e.tag, {
                ref: "content",
                tag: "component",
                class: ["dialog-content overflow-auto  ", e.classes.content],
                style: {
                    width: e.width,
                    maxWidth: e.maxWidth
                },
                attrs: {
                    tabindex: "-1",
                    role: "dialog"
                }
            }, [e._t("default")], 2)], 1)], 1) : e._e()])
        }
            , Re = []
            , De = {
            model: {
                prop: "showing",
                event: "change"
            },
            props: {
                showing: Boolean,
                tag: {
                    type: String,
                    default: "div"
                },
                dismissible: {
                    type: Boolean,
                    default: !0
                },
                noScroll: {
                    type: Boolean,
                    default: !1
                },
                classes: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                transition: String,
                bgTransition: String,
                width: String,
                maxWidth: String
            },
            watch: {
                showing: {
                    handler: function(e, t) {
                        "undefined" !== typeof window && (e && e != t ? this.noScroll && document.body.style.setProperty("overflow", "hidden") : this.noScroll && document.body.style.removeProperty("overflow"))
                    }
                }
            },
            methods: {
                show: function() {
                    this.$emit("show"),
                        this.$emit("change", !0)
                },
                hide: function() {
                    this.$emit("hide"),
                        this.$emit("change", !1)
                },
                toggle: function() {
                    var e = this.showing
                        , t = e ? "hide" : "show";
                    this.$emit(t, !e),
                        this.$emit("change", !e)
                },
                onClick: function(e) {
                    e.target.classList.contains("dialog") && this.dismissible && this.hide()
                },
                onKeydown: function(e) {
                    "Escape" === e.key && this.hide()
                }
            }
        }
            , ze = De
            , Te = (a("413a"),
            Object(Y["a"])(ze, Se, Re, !1, null, "4b8a527c", null))
            , Ee = Te.exports
            , Fe = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "relative z-20 w-full"
            }, [a("div", {}, [a("swiper", {
                ref: "swiper",
                staticClass: "swiper",
                attrs: {
                    options: e.swiperOption
                }
            }, e._l(4, (function(e) {
                    return a("swiper-slide", {
                        key: e,
                        staticClass: "h-full text-center overflow-hidden",
                        staticStyle: {
                            width: "144px"
                        }
                    }, [a("div", {
                        staticClass: "text-black"
                    }, [a("img", {
                        attrs: {
                            src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-levelup/mprize-" + e + ".png",
                            alt: ""
                        }
                    })])])
                }
            )), 1)], 1)])
        }
            , Me = []
            , Ae = a("7212")
            , $e = {
            components: {
                Swiper: Ae["Swiper"],
                SwiperSlide: Ae["SwiperSlide"]
            },
            data: function() {
                return {
                    swiperOption: {
                        scrollbar: !1,
                        slidesPerView: "auto",
                        spaceBetween: 16,
                        autoplay: {
                            delay: 1
                        },
                        freeMode: !0,
                        speed: 1e4,
                        freeModeMomentum: !1,
                        grabCursor: !1,
                        observer: !0,
                        observeParents: !0,
                        mousewheel: !1,
                        centeredSlides: !0,
                        centeredSlidesBounds: !0,
                        disableOnInteraction: !1,
                        allowTouchMove: !1,
                        loop: !0
                    }
                }
            }
        }
            , Ne = $e
            , Ie = Object(Y["a"])(Ne, Fe, Me, !1, null, null, null)
            , He = Ie.exports
            , Ve = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "relative z-20 mt-8 w-full"
            }, [a("div", {
                staticClass: "pl-8"
            }, [a("swiper", {
                ref: "swiper",
                staticClass: "swiper overflow-visible",
                attrs: {
                    options: e.swiperOption
                }
            }, [a("swiper-slide", {
                staticClass: "relative h-full text-center",
                staticStyle: {
                    width: "260px",
                    height: "115px"
                }
            }, [a("div", {
                staticClass: "flex h-full"
            }, [a("div", {
                staticClass: "\n              h-full\n              flex\n              items-center\n              justify-center\n              bg-white\n              text-center\n              uppercase\n              tracking-wild\n              text-black\n              rounded-l-12px\n              overflow-hidden\n              flex-grow-0 flex-shrink-0\n            ",
                staticStyle: {
                    "flex-basis": "40px"
                }
            }, [a("svg", {
                attrs: {
                    width: "40",
                    height: "104",
                    viewBox: "0 0 40 104",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("rect", {
                attrs: {
                    width: "40",
                    height: "104",
                    fill: "white"
                }
            }), a("path", {
                attrs: {
                    d: "M25 83.2415L16.2727 83.2415L16.2727 77.4631L17.794 77.4631L17.794 81.3963L19.8736 81.3963L19.8736 77.8466L21.3949 77.8466L21.3949 81.3963L25 81.3963L25 83.2415ZM25 76.2219L16.2727 76.2219L16.2727 70.3413L17.794 70.3413L17.794 74.3768L19.8736 74.3768L19.8736 70.6438L21.3949 70.6438L21.3949 74.3768L23.4787 74.3768L23.4787 70.3242L25 70.3242L25 76.2219ZM25 67.37L25 69.3473L16.2727 66.3345L16.2727 63.9567L25 60.9482L25 62.9254L18.267 65.1115L18.267 65.1797L25 67.37ZM21.5696 67.4936L21.5696 62.8232L23.0099 62.8232L23.0099 67.4936L21.5696 67.4936ZM17.794 61.2965L16.2727 61.2965L16.2727 54.1289L17.794 54.1289L17.794 56.8008L25 56.8008L25 58.6246L17.794 58.6246L17.794 61.2965ZM16.2727 47.5579L16.2727 45.7127L21.9403 45.7127C22.5767 45.7127 23.1335 45.8647 23.6108 46.1687C24.0881 46.4698 24.4602 46.8917 24.7273 47.4343C24.9915 47.9769 25.1236 48.609 25.1236 49.3306C25.1236 50.055 24.9915 50.6886 24.7273 51.2312C24.4602 51.7738 24.0881 52.1957 23.6108 52.4968C23.1335 52.7979 22.5767 52.9485 21.9403 52.9485L16.2727 52.9485L16.2727 51.1033L21.7827 51.1033C22.1151 51.1033 22.4105 51.0309 22.669 50.886C22.9276 50.7383 23.1307 50.5309 23.2784 50.2638C23.4261 49.9968 23.5 49.6857 23.5 49.3306C23.5 48.9727 23.4261 48.6616 23.2784 48.3974C23.1307 48.1303 22.9276 47.9244 22.669 47.7795C22.4105 47.6317 22.1151 47.5579 21.7827 47.5579L16.2727 47.5579ZM25 44.1946L16.2727 44.1946L16.2727 40.7514C16.2727 40.0923 16.3906 39.5298 16.6264 39.0639C16.8594 38.5952 17.1903 38.2386 17.6193 37.9943C18.0455 37.7472 18.5469 37.6236 19.1236 37.6236C19.7031 37.6236 20.2017 37.7486 20.6193 37.9986C21.0341 38.2486 21.3523 38.6108 21.5739 39.0852C21.7955 39.5568 21.9062 40.1278 21.9062 40.7983L21.9062 43.1037L20.4233 43.1037L20.4233 41.0966C20.4233 40.7443 20.375 40.4517 20.2784 40.2187C20.1818 39.9858 20.0369 39.8125 19.8437 39.6989C19.6506 39.5824 19.4105 39.5241 19.1236 39.5241C18.8338 39.5241 18.5895 39.5824 18.3906 39.6989C18.1918 39.8125 18.0412 39.9872 17.9389 40.223C17.8338 40.456 17.7812 40.75 17.7812 41.1051L17.7812 42.3494L25 42.3494L25 44.1946ZM21.0284 39.4815L25 37.3125L25 39.3494L21.0284 41.4716L21.0284 39.4815ZM25 36.3196L16.2727 36.3196L16.2727 30.4389L17.794 30.4389L17.794 34.4744L19.8736 34.4744L19.8736 30.7415L21.3949 30.7415L21.3949 34.4744L23.4787 34.4744L23.4787 30.4219L25 30.4219L25 36.3196ZM25 25.8782L25 28.9719L16.2727 28.9719L16.2727 25.8526C16.2727 24.9748 16.4474 24.2191 16.7969 23.5856C17.1435 22.9521 17.642 22.4648 18.2926 22.1239C18.9432 21.7802 19.7216 21.6083 20.6278 21.6083C21.5369 21.6083 22.3182 21.7802 22.9716 22.1239C23.625 22.4648 24.1264 22.9549 24.4758 23.5941C24.8253 24.2305 25 24.9918 25 25.8782ZM23.419 27.1268L23.419 25.9549C23.419 25.4094 23.3224 24.9506 23.1293 24.5785C22.9332 24.2035 22.6307 23.9222 22.2216 23.7347C21.8097 23.5444 21.2784 23.4492 20.6278 23.4492C19.983 23.4492 19.456 23.5444 19.0469 23.7347C18.6378 23.9222 18.3366 24.2021 18.1435 24.5742C17.9503 24.9464 17.8537 25.4052 17.8537 25.9506L17.8537 27.1268L23.419 27.1268Z",
                    fill: "black"
                }
            })])]), a("div", {
                staticClass: "relative pt-4 pb-4 px-4 rounded-r-12px w-full text-center",
                class: e.currentFeaturedPrize.isDarkText ? "text-black" : "text-white",
                style: {
                    backgroundColor: "" + e.currentFeaturedPrize.accentColor
                }
            }, [a("span", {
                staticClass: "overlay"
            }), e.currentFeaturedPrize ? a("span", {
                staticClass: "block font-bold",
                class: {
                    "text-xs": e.currentFeaturedPrize.name.split(" ").length > 8,
                    "text-sm ": e.currentFeaturedPrize.name.split(" ").length > 5 && e.currentFeaturedPrize.name.split(" ").length <= 8,
                    "text-base": e.currentFeaturedPrize.name.split(" ").length <= 5
                }
            }, [e._v(e._s(e.currentFeaturedPrize.name))]) : e._e(), a("div", {
                staticClass: "\n                absolute\n                bottom-0\n                left-0\n\n                pt-2\n                pb-4\n                text-xs\n                w-full\n                flex\n                items-center\n                justify-center\n              "
            }, [a("span", {
                staticClass: "uppercase"
            }, [e._v("Time left:")]), a("count-down", {
                staticClass: "ml-2",
                attrs: {
                    milliSecondsTime: e.currentRewardRemainingTime
                },
                on: {
                    setNewFeaturedMerchant: e.setFeaturedPrize
                }
            })], 1)])])]), a("swiper-slide", {
                staticClass: "relative h-full text-center overflow-hidden",
                staticStyle: {
                    width: "260px",
                    height: "115px"
                }
            }, [a("div", {
                staticClass: "flex h-full"
            }, [a("div", {
                staticClass: "\n              h-full\n              flex\n              items-center\n              justify-center\n              bg-white\n              text-center\n              uppercase\n              tracking-wild\n              text-black\n              rounded-l-12px\n              overflow-hidden\n              flex-grow-0 flex-shrink-0\n            ",
                staticStyle: {
                    "flex-basis": "40px"
                }
            }, [a("svg", {
                attrs: {
                    width: "40",
                    height: "104",
                    viewBox: "0 0 40 104",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("rect", {
                attrs: {
                    width: "40",
                    height: "104",
                    fill: "white"
                }
            }), a("path", {
                attrs: {
                    d: "M16.2727 72.3841L16.2727 70.5389L21.9403 70.5389C22.5767 70.5389 23.1335 70.6909 23.6108 70.9949C24.0881 71.296 24.4602 71.7179 24.7273 72.2605C24.9915 72.8031 25.1236 73.4352 25.1236 74.1568C25.1236 74.8812 24.9915 75.5147 24.7273 76.0574C24.4602 76.6 24.0881 77.0218 23.6108 77.323C23.1335 77.6241 22.5767 77.7747 21.9403 77.7747L16.2727 77.7747L16.2727 75.9295L21.7827 75.9295C22.1151 75.9295 22.4105 75.8571 22.669 75.7122C22.9276 75.5645 23.1307 75.3571 23.2784 75.09C23.4261 74.823 23.5 74.5119 23.5 74.1568C23.5 73.7988 23.4261 73.4877 23.2784 73.2235C23.1307 72.9565 22.9276 72.7505 22.669 72.6056C22.4105 72.4579 22.1151 72.3841 21.7827 72.3841L16.2727 72.3841ZM25 69.0208L16.2727 69.0208L16.2727 65.5776C16.2727 64.9157 16.3991 64.3517 16.652 63.8858C16.902 63.4199 17.25 63.0648 17.696 62.8205C18.1392 62.5733 18.6506 62.4498 19.2301 62.4498C19.8097 62.4498 20.321 62.5748 20.7642 62.8248C21.2074 63.0748 21.5526 63.437 21.7997 63.9114C22.0469 64.383 22.1705 64.954 22.1705 65.6245L22.1705 67.8191L20.6918 67.8191L20.6918 65.9228C20.6918 65.5676 20.6307 65.275 20.5085 65.0449C20.3835 64.812 20.2116 64.6387 19.9929 64.525C19.7713 64.4086 19.517 64.3503 19.2301 64.3503C18.9403 64.3503 18.6875 64.4086 18.4716 64.525C18.2528 64.6387 18.0838 64.812 17.9645 65.0449C17.8423 65.2779 17.7812 65.5733 17.7812 65.9313L17.7812 67.1756L25 67.1756L25 69.0208ZM16.2727 51.1742L25 51.1742L25 52.7679L19.5071 56.5648L19.5071 56.6287L25 56.6287L25 58.4739L16.2727 58.4739L16.2727 56.8546L21.7614 53.0875L21.7614 53.0108L16.2727 53.0108L16.2727 51.1742ZM25 49.6497L16.2727 49.6497L16.2727 43.769L17.794 43.769L17.794 47.8045L19.8736 47.8045L19.8736 44.0716L21.3949 44.0716L21.3949 47.8045L23.4787 47.8045L23.4787 43.752L25 43.752L25 49.6497ZM16.2727 40.5719L19.2472 38.812L19.2472 38.7438L16.2727 36.9753L16.2727 34.8915L20.6364 37.5549L25 34.8319L25 36.954L22.0213 38.7438L22.0213 38.812L25 40.6017L25 42.7154L20.6364 39.9838L16.2727 42.6642L16.2727 40.5719ZM17.794 34.0563L16.2727 34.0563L16.2727 26.8887L17.794 26.8887L17.794 29.5605L25 29.5605L25 31.3844L17.794 31.3844L17.794 34.0563Z",
                    fill: "black"
                }
            })])]), a("div", {
                staticClass: "\n              relative\n              rounded-r-12px\n              pt-4\n              pb-4\n              px-4\n              w-full\n              flex\n              items-center\n              justify-center\n              text-center\n            ",
                class: e.nextReward.isDarkText ? "text-black" : "text-white",
                style: {
                    backgroundColor: "" + e.nextReward.accentColor
                }
            }, [a("span", {
                staticClass: "overlay"
            }), e.nextReward ? a("span", {
                staticClass: "block font-bold",
                class: {
                    "text-sm leading-6": e.nextReward.name.split(" ").length > 8,
                    "text-base leading-8": e.nextReward.name.split(" ").length <= 5
                }
            }, [e._v(e._s(e.nextReward.name))]) : e._e()])])])], 1)], 1)])
        }
            , Ge = []
            , Ze = (a("7514"),
                a("20d6"),
                function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", [a("vue-countdown", {
                        attrs: {
                            time: e.milliSecondsTime,
                            "emit-events": !0
                        },
                        on: {
                            end: e.onFinish
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("div", {
                                    staticClass: "flex justify-center items-start"
                                }, [a("div", {
                                    staticClass: " flex flex-col justify-center item-center text-center"
                                }, [a("span", [e._v(e._s(e.addZeroToTime(t.hours)))])]), a("span", {
                                    staticClass: "block  px-1"
                                }, [e._v(":")]), a("div", {
                                    staticClass: "  flex flex-col justify-center item-center text-center"
                                }, [a("span", [e._v(e._s(e.addZeroToTime(t.minutes)))])]), a("span", {
                                    staticClass: "block px-1"
                                }, [e._v(":")]), a("div", {
                                    staticClass: " flex flex-col justify-center item-center text-center"
                                }, [a("span", [e._v(e._s(e.addZeroToTime(t.seconds)))])])])]
                            }
                        }])
                    })], 1)
                }
        )
            , We = []
            , qe = (a("6b54"),
            a("87b3"),
            {
                data: function() {
                    return {
                        days: 0,
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    }
                },
                methods: {
                    countDown: function(e, t, a) {
                        var r = new Date(t).getTime()
                            , n = 0
                            , s = setInterval((function() {
                                var t = new Date(e).getTime() + n
                                    , i = r - t;
                                this.days = Math.floor(i / 864e5),
                                    this.hours = Math.floor(i % 864e5 / 36e5),
                                    this.minutes = Math.floor(i % 36e5 / 6e4),
                                    this.seconds = Math.floor(i % 6e4 / 1e3),
                                i < 0 && (console.log("Countdown Finished"),
                                    clearInterval(s),
                                    a()),
                                    n += 1e3
                            }
                        ), 1e3)
                    }
                }
            })
            , Be = a("407d")
            , Ue = a.n(Be)
            , Je = {
            components: {
                VueCountdown: Ue.a
            },
            props: {
                milliSecondsTime: {}
            },
            methods: {
                addZeroToTime: function(e) {
                    return 1 === e.toString().length && (e = "0" + e),
                        e
                },
                onFinish: function() {
                    this.$emit("setNewFeaturedMerchant")
                }
            }
        }
            , Ye = Je
            , Ke = (a("06f7"),
            Object(Y["a"])(Ye, Ze, We, !1, null, "ecaab29c", null))
            , Qe = Ke.exports
            , Xe = {
            components: {
                Swiper: Ae["Swiper"],
                SwiperSlide: Ae["SwiperSlide"],
                CountDown: Qe
            },
            data: function() {
                return {
                    swiperOption: {
                        scrollbar: !1,
                        slidesPerView: "auto",
                        spaceBetween: 16,
                        grabCursor: !0,
                        observer: !0,
                        observeParents: !0,
                        mousewheel: !1,
                        centeredSlides: !1,
                        allowTouchMove: !0
                    },
                    rewardsForToday: [],
                    mappedRewardsForToday: [],
                    nextReward: null,
                    currentRewardRemainingTime: 0
                }
            },
           "settings": {
                "AffiliateID":3387,
               "MerchantID":6312,
               "CampaignID":"c7f9656f-83e7-4661-9358-0c87f8070a61",
               "Sender":{
                    "ID":13297,
                   "FirstName":"Citi",
                   "LastName":"PH",
                   "EmailAddress":"citi@giftaway.ph",
                   "MobileNo":"09175621131",
                   "Password":null,
                   "Role":null,
                   "DateRegistered":null,
                   "Name":"Citi PH"
               },
               "FormSchema":null,
               "FormData": {
                    "schedules":null,
                   "campaigns":null,
                   "affiliate":{
                        "id":3387,
                       "name":"citi-merrymatch"
                   },
                   "schedule":
                       {
                           "startDateTime":"2020-11-26T09:00:00",
                           "startMessage":"This site will open on Nov 26, 2020. See you soon.",
                           "endDateTime":"2023-05-12T23:59:59",
                           "endMessage":"This site has ended on Jan. 24, 2023. Thank you.",
                           "days":"Mo,Tu,We,Th,Fr,Sa,Su",
                           "daysMessage":"This site is closed for today. See you on Monday.",
                           "hours":"00:00-23:59",
                           "hoursMessage":"This site is closed for today. See you tomorrow."
                       },
                   "denominations":null,
                   "otpSettings":null,
                   "customSettings":{
                        "voucherPrefix":""
                    }
                },
               "UISchema":{
                   "featuredRewards": [
                     {
                       "name": "iPhone 14 eGift",
                       "merchantID": 0,
                       "denominationID": 12604,
                       "accentColor": "#222222",
                       "isDarkText": false
                     },
                     {
                       "name": "MacBook Air eGift",
                       "merchantID": 0,
                       "denominationID": 12605,
                       "accentColor": "#ec1d23",
                       "isDarkText": false
                     },
                     {
                       "name": "MacBook Pro eGift",
                       "merchantID": 0,
                       "denominationID": 12606,
                       "accentColor": "#222222",
                       "isDarkText": false
                     },
                     {
                       "name": "iPad (9th Gen) eGift",
                       "merchantID": 0,
                       "denominationID": 12607,
                       "accentColor": "#222222",
                       "isDarkText": false
                     },
                     {
                       "name": "iPad Mini (6th Gen) eGift",
                       "merchantID": 0,
                       "denominationID": 12608,
                       "accentColor": "#222222",
                       "isDarkText": false
                     },
                     {
                       "name": "Apple Watch SE eGift",
                       "merchantID": 0,
                       "denominationID": 12609,
                       "accentColor": "#222222",
                       "isDarkText": false
                     },
                     {
                       "name": "AirPods (3rd Gen) eGift",
                       "merchantID": 0,
                       "denominationID": 12610,
                       "accentColor": "#222222",
                       "isDarkText": false
                     },
                     {
                       "name": "P5,000 Robinsons Supermarket eGift",
                       "merchantID": 0,
                       "denominationID": 8414,
                       "accentColor": "#ed3237",
                       "isDarkText": false
                     },
                     {
                       "name": "P5,000 The Bistro Group eGift",
                       "merchantID": 0,
                       "denominationID": 12615,
                       "accentColor": "#8a0204",
                       "isDarkText": false
                     },
                     {
                       "name": "P5,000 Lazada Wallet eGift",
                       "merchantID": 0,
                       "denominationID": 10725,
                       "accentColor": "#0f1568",
                       "isDarkText": false
                     },
                     {
                       "name": "P5,000 ShopeePay eGift",
                       "merchantID": 0,
                       "denominationID": 9365,
                       "accentColor": "#ee4d2d",
                       "isDarkText": false
                     },
                     {
                       "name": "P5,000 SM Gift Pass eGift",
                       "merchantID": 0,
                       "denominationID": 7023,
                       "accentColor": "#22459D",
                       "isDarkText": false
                     },
                     {
                       "name": "P5,000 GrabFood eGift",
                       "merchantID": 0,
                       "denominationID": 10513,
                       "accentColor": "#00b14f",
                       "isDarkText": false
                     }
                   ],
                   "nonFeaturedRewards": [

                     {
                       "name": "P100 Giftaway Universal eGift",
                       "merchantID": 0,
                       "denominationID": 6956,
                       "accentColor": "#a263f0",
                       "isDarkText": false
                     },
                     {
                       "name": "P500 Giftaway Universal eGift",
                       "merchantID": 0,
                       "denominationID": 6784,
                       "accentColor": "#a263f0",
                       "isDarkText": false
                     }
                   ],
                   "grandRewards": [],
                   "dayOfWeekRewards":  [0, 1, 2, 0, 1, 2, 0],
                                //"days":"Mo,Tu,We,Th,Fr,Sa,Su",
                   "rewards": [
                     [
                       10513, //P5,000 GrabFood eGift
                       12610, //AirPods (3rd Gen) eGift
                       12607, //iPad (9th Gen) eGift
                       7023, //P5,000 SM Gift Pass eGift
                       12605, //MacBook Air eGift
                       10725 //P5,000 Lazada Wallet eGift
                     ],
                     [
                       9365, //P5,000 ShopeePay eGift
                       12609, //Apple Watch SE eGift
                       12608, //iPad Mini (6th Gen) eGift
                       8414, //P5,000 Robinsons Supermarket eGift
                       12615, //P5,000 The Bistro Group eGift
                       12604, //iPhone 14 eGift
                     ],
                     [
                       12606, //MacBook Pro eGift
                       10725, //P5,000 Lazada Wallet eGift
                       12604, //iPhone 14 eGift
                       7023, //P5,000 SM Gift Pass eGift
                       8414,//P5,000 Robinsons Supermarket eGift
                       9365 //P5,000 ShopeePay eGift
                     ]
                   ],
                   "featuredInterval": 4
                   },
               "StartDate":"2023-05-12T00:00:00",
               "EndDate":"2023-05-12T00:00:00"
            }
    }
            computed: {
                featuredRewards: Object(c["e"])("app/uiSchema@featuredRewards"),
                featuredInterval: Object(c["e"])("app/uiSchema@featuredInterval"),
                serverDateTime: Object(c["e"])("app/config@serverDateTime"),
                rewards: Object(c["e"])("app/uiSchema@rewards"),
                dayOfWeekRewards: Object(c["e"])("app/uiSchema@dayOfWeekRewards"),
                currentServerDateTime: Object(c["e"])("app/currentServerDateTime"),
                serverDateTIme: Object(c["e"])("app/config@serverDateTIme"),
                currentFeaturedPrize: Object(c["e"])("app/currentFeaturedPrize")
            },
            watch: {
                currentServerDateTime: {
                    immediate: !0,
                    handler: function(e, t) {
                        new Date(e).setHours(0, 0, 0, 0) > new Date(t).setHours(0, 0, 0, 0) && this.setScheduleForTheDay()
                    }
                }
            },
            created: function() {
                this.setScheduleForTheDay(),
                    this.setFeaturedPrize()
            },
            mounted: function() {
                var e = this;
                this.$refs.swiper.$swiper.on("activeIndexChange", (function() {
                        0 !== e.$refs.swiper.$swiper.activeIndex && e.$refs.swiper.$swiper.slideTo(0)
                    }
                ))
            },
            methods: {
                setScheduleForTheDay: function() {
                    var e = this.dayOfWeekRewards[this.currentServerDateTime.getDay()];
                    this.rewardsForToday = this.rewards[e],
                        this.mappedRewardsForToday = this.setRewardsForTheDay(this.rewardsForToday)
                },
                setRewardsForTheDay: function(e) {
                    var t = this
                        , a = 0
                        , r = e.map((function(e) {
                            var r = {
                                denominationID: e,
                                from: a,
                                to: a + (t.featuredInterval - 1)
                            };
                            return a += t.featuredInterval,
                                r
                        }
                    ));
                    return r
                },
                setFeaturedPrize: function() {
                    var e = this
                        , t = this.currentServerDateTime.getHours();
                    console.log("Current Hour: " + t);
                    var a = this.mappedRewardsForToday.findIndex((function(e) {
                            return t >= e.from && t <= e.to
                        }
                    ));
                    this.currentFeaturedPrize = this.featuredRewards.find((function(t) {
                            return t.denominationID === e.mappedRewardsForToday[a].denominationID
                        }
                    ));
                    var r = new Date(this.currentServerDateTime).setHours(this.mappedRewardsForToday[a].to + 1, 0, 0, 0);
                    this.currentRewardRemainingTime = r - new Date(this.currentServerDateTime).getTime();
                    var n = a + 1;
                    if (n > this.mappedRewardsForToday.length - 1) {
                        var s = this.dayOfWeekRewards[this.currentServerDateTime.getDay() + 1]
                            , i = void 0 !== s ? this.setRewardsForTheDay(this.rewards[s]) : this.setRewardsForTheDay(this.rewards[this.dayOfWeekRewards[0]]);
                        this.nextReward = this.featuredRewards.find((function(e) {
                                return e.denominationID === i[0].denominationID
                            }
                        ))
                    } else
                        this.nextReward = this.featuredRewards.find((function(t) {
                                return t.denominationID === e.mappedRewardsForToday[n].denominationID
                            }
                        ))
                },
                updateFeaturedPrize: function() {}
            }
        }
            , et = Xe
            , tt = Object(Y["a"])(et, Ve, Ge, !1, null, "5d651d6c", null)
            , at = tt.exports
            , rt = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "bg-white"
            }, [e._m(0), e._m(1), a("div", {
                staticClass: "match-container mx-8 p-8 bg-black-squeeze"
            }, [a("smooth-reflow", [e.isLoading ? a("div", {
                staticClass: "p-26 flex items-center justify-center "
            }, [a("app-loader", {
                key: "2",
                staticClass: "text-white"
            })], 1) : a("div", {
                staticClass: "flex flex-wrap"
            }, e._l(e.cards, (function(t, r) {
                    return a("button", {
                        key: r,
                        staticClass: "card-wrapper p-6px w-1/3 focus:outline-none",
                        on: {
                            click: function(t) {
                                return t.preventDefault(),
                                    e.flip(r)
                            }
                        }
                    }, [a("div", {
                        staticClass: "card",
                        class: {
                            "flip-vertical-right": t.isFlipped
                        }
                    }, [a("div", {
                        staticClass: "front face"
                    }, [a("img", {
                        attrs: {
                            src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-spend2022q2/tile-idle.png",
                            alt: ""
                        }
                    })]), a("div", {
                        staticClass: "back face"
                    }, [a("img", {
                        attrs: {
                            src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-spend2022q2/card-" + t.card + ".png",
                            alt: ""
                        }
                    })])])])
                }
            )), 0)])], 1)])
        }
            , nt = [function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "header-container relative pt-16 pb-12 bg-cover bg-center"
            }, [a("img", {
                staticClass: "relative block mx-auto",
                attrs: {
                    width: "280",
                    src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-spend2022q2/summer-match-logo.png",
                    alt: ""
                }
            })])
        }
            , function() {
                var e = this
                    , t = e.$createElement
                    , a = e._self._c || t;
                return a("div", {
                    staticClass: "p-8"
                }, [a("p", {
                    staticClass: "text-center leading-7"
                }, [e._v("\n      Get a matching\n      "), a("span", {
                    staticClass: "font-bold"
                }, [e._v("⭐ star block to win the featured prize")]), e._v("\n       or get any other match to win a mystery prize.\n    ")])])
            }
        ]
            , st = {
            components: {
                AppLoader: X["default"]
            },
            data: function() {
                return {
                    randomCards: [1, 2, 3, 4],
                    status: null,
                    cards: [{
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }],
                    token: "",
                    id: "",
                    life: 2,
                    currentCards: [-1, -1],
                    isShowGameOverDialog: !1,
                    isLoading: !1,
                    isLoading2: !1
                }
            },
            computed: {
                config: Object(c["c"])("app/config"),
                featuredRewards: Object(c["c"])("app/uiSchema@featuredRewards"),
                nonFeaturedRewards: Object(c["c"])("app/uiSchema@nonFeaturedRewards")
            },
            created: function() {
                this.initGame()
            },
            methods: {
                loadGame: Object(c["a"])("app/loadGame"),
                gameOver: Object(c["a"])("app/gameOver"),
                flip: function(e) {
                    0 !== this.life && (this.cards[e].card = this.currentCards[this.life - 1],
                        this.cards[e].isFlipped = !0,
                        this.life--,
                    0 === this.life && this.loadEndGame())
                },
                initGame: function() {
                    var e = this;
                    this.isLoading = !0;
                    var t = {
                        id: this.config.campaignID
                    };
                    this.loadGame(t).then((function(t) {
                            if (0 === t.status.id)
                                e.id = t.data.id,
                                    e.token = t.data.token,
                                    e.checkStatus();
                            else {
                                var a = {
                                    isSuccessful: !1,
                                    heading: "",
                                    message: "Something went wrong."
                                };
                                e.toggleFeedback(!0, a)
                            }
                            e.isLoading = !1
                        }
                    ))
                },
                checkStatus: function() {
                    var e = this
                        , t = this.featuredRewards.find((function(t) {
                            return t.denominationID === e.id
                        }
                    ))
                        , a = this.nonFeaturedRewards.find((function(t) {
                            return t.denominationID === e.id
                        }
                    ));
                    if (this.status = t ? 2 : a ? 1 : 0,
                    2 === this.status)
                        this.currentCards = [0, 0];
                    else if (1 === this.status) {
                        var r = this.getRandomCards();
                        this.currentCards = [r, r]
                    } else if (0 === this.status) {
                        var n = this.getRandomCards()
                            , s = this.getRandomCards(n);
                        this.currentCards = [n, s]
                    }
                },
                getRandomCards: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                        , t = this.randomCards.filter((function(t) {
                            return t !== e
                        }
                    ))
                        , a = Math.floor(Math.random() * t.length);
                    return t[a]
                },
                loadEndGame: function() {
                    var e = this;
                    if (!this.isLoading2) {
                        this.isLoading2 = !0;
                        var t = {
                            id: this.config.campaignID,
                            token: this.token
                        };
                        this.gameOver(t).then((function(t) {
                                if (0 === t.status.id)
                                    setTimeout((function() {
                                            e.isShowGameOverDialog = !0
                                        }
                                    ), 1e3);
                                else {
                                    var a = {
                                        isSuccessful: !1,
                                        heading: "",
                                        message: "Something went wrong."
                                    };
                                    e.toggleFeedback(!0, a)
                                }
                                e.isLoading2 = !1
                            }
                        ))
                    }
                }
            }
        }
            , it = st
            , ot = (a("9b48"),
            Object(Y["a"])(it, rt, nt, !1, null, "6391ebb7", null))
            , ct = ot.exports
            , lt = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "py-12 px-8"
            }, [a("p", {
                staticClass: "font-bold text-center text-xl"
            }, [e._v("My Prizes")]), e.isLoading ? a("div", {
                staticClass: "flex flex-col"
            }, [e._m(0)]) : e.isShowFeedback ? a("page-feedback", {
                attrs: {
                    alert: e.alert
                },
                on: {
                    toggleFeedback: e.toggleFeedback
                }
            }) : e.gamePrizes.length ? a("div", {
                staticClass: "mt-10"
            }, e._l(e.gamePrizes, (function(e) {
                    return a("game-prize-item", {
                        key: e.id,
                        attrs: {
                            prize: e
                        }
                    })
                }
            )), 1) : a("div", {
                staticClass: "mt-10 text-center"
            }, [a("img", {
                staticClass: "inline-block mx-auto",
                attrs: {
                    src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/warning-icon.png",
                    width: "96",
                    alt: ""
                }
            }), a("p", {
                staticClass: "mt-8 text-lg font-bold"
            }, [e._v("Oops, you don't have prizes yet. ")]), a("p", {
                staticClass: "mt-4 text-pale-sky leading-6 text-sm"
            }, [e._v("Start earning playcodes by using your credit card on qualified transactions to play the game and win amazing prizes.")])])], 1)
        }
            , dt = [function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "h-64 pt-20 text-center w-full"
            }, [a("p", {
                staticClass: "text-center w-full animate animate-pulse"
            }, [e._v("\n        Loading prizes...\n      ")])])
        }
        ]
            , ut = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "\n    Transaction\n    relative\n    mb-4\n    border border-transparent-dark-1\n    flex\n    items-stretch\n    justify-between\n    overflow-hidden\n  ",
                class: (e.isActiveCode,
                    "")
            }, [a("div", {
                staticClass: "border-l-8 w-full pl-4 py-4 mr-2 flex flex-col justify-center",
                class: {
                    "border-secondary-500": e.isActiveCode,
                    "border-iron": !e.isActiveCode
                }
            }, [a("p", {
                key: "2",
                staticClass: "font-bold leading-tight text-sm"
            }, [e._v("\n      " + e._s(e.currentReward.name) + "\n    ")]), a("p", {
                staticClass: "mt-1 text-xs text-gray-chateau truncate"
            }, [e._v("#" + e._s(e.prize.referenceNo))])]), a("div", {
                staticClass: "\n      Transaction__button\n      flex-shrink-0 flex-grow-0 flex\n      items-center\n      justify-center\n      pr-4\n    "
            }, [e.isActiveCode ? a("button", {
                staticClass: "\n        button\n        bg-primary-500\n        border\n        border-transparent-dark-1\n        w-20\n        h-10\n        leading-9\n        block\n        uppercase\n        text-sm text-white\n      ",
                on: {
                    click: e.claim
                }
            }, [e._v("\n      CLAIM\n    ")]) : e.canResend ? a("button", {
                staticClass: "\n        button\n        disabled\n        bg-gray-chateau\n        w-20\n        h-10\n        leading-9\n        block\n        uppercase\n        text-xs text-white\n        tracking-wider\n      ",
                on: {
                    click: e.resendCode
                }
            }, [e._v("\n      RESEND\n    ")]) : e._e()]), a("keep-alive", [a("app-dialog", {
                attrs: {
                    showing: e.isShowDialog,
                    "max-width": "366px",
                    classes: {
                        content: "mx-auto   rounded-2xl overflow-visible h-full",
                        root: "px-4 bg-transparent-darker overflow-y-scroll"
                    },
                    transition: "dialog",
                    "bg-transition": "fade"
                },
                on: {
                    hide: e.toggleDialog
                }
            }, [a("div", {
                staticClass: "dialog h-full flex flex-col justify-center items-center "
            }, [a("smooth-reflow", {
                staticClass: "w-full"
            }, [e.isShowFeedback ? a("app-feedback", {
                staticClass: "py-8 bg-white rounded-2xl",
                attrs: {
                    alert: e.alert
                },
                on: {
                    toggleFeedback: e.toggleFeedback
                }
            }) : e._e(), a("div", {
                staticClass: "relative  text-center bg-white  rounded-xl"
            }, [e.isLoading ? a("div", {
                staticClass: "py-20  "
            }, [a("app-loader", {
                staticClass: "text-secondary-500"
            })], 1) : e.isSuccessfulClaim ? a("div", [a("div", {
                staticClass: "\n                  status-image\n                  items-center\n                  justify-center\n                  text-white\n                "
            }, [a("img", {
                staticStyle: {
                    width: "104px",
                    height: "104px"
                },
                attrs: {
                    src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/check-icon.png",
                    alt: ""
                }
            })]), a("div", {
                staticClass: "  pt-16 pb-8 "
            }, [a("p", {
                staticClass: "mt-4 font-bold text-xl"
            }, [e._v("eGift Claimed!")]), a("p", {
                staticClass: "text-sm text-storm-dust px-8 "
            }, [e._v("\n                Your eGift code will be sent to your registered mobile and\n                email address in a few minutes.\n              ")])]), a("button", {
                staticClass: "button disabled rounded-t-none bg-gray-chateau w-full ",
                on: {
                    click: e.toggleDialog
                }
            }, [e._v("\n                Close\n              ")])]) : e.isSuccessfulResend ? a("div", [a("div", {
                staticClass: "\n                  status-image\n                  items-center\n                  justify-center\n                  text-white\n                "
            }, [a("img", {
                staticStyle: {
                    width: "104px",
                    height: "104px"
                },
                attrs: {
                    src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/check-icon.png",
                    alt: ""
                }
            })]), a("div", {
                staticClass: "  pt-16 pb-8 border-2 "
            }, [a("p", {
                staticClass: "mt-4 font-bold text-xl"
            }, [e._v("Successful!")]), a("p", {
                staticClass: "text-sm text-storm-dust px-8 "
            }, [e._v("\n                Your eGift code will be resent to your registered mobile and email address in a few minutes.\n              ")])]), a("button", {
                staticClass: "button disabled rounded-t-none bg-gray-chateau w-full ",
                on: {
                    click: e.toggleDialog
                }
            }, [e._v("\n                Close\n              ")])]) : e._e()])], 1)], 1)])], 1)], 1)
        }
            , pt = []
            , ft = a("75fc")
            , mt = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "text-center px-6 py-6 bg-white overflow-hidden"
            }, [e.alert.isSuccessful ? [a("div", {
                staticClass: "text-center"
            }, [a("font-awesome-icon", {
                staticClass: "mb-2 text-primary-500 mx-auto block",
                attrs: {
                    icon: ["far", "check-circle"],
                    size: "5x"
                }
            }), e.alert.heading ? a("span", {
                staticClass: "block font-bold text-lg mb-2 text-woodsmoke"
            }, [e._v(e._s(e.alert.heading))]) : e._e(), a("p", {
                staticClass: "text-sm xs:text-base  leading-snug text-storm-dust"
            }, [e._v(e._s(e.alert.message))])], 1)] : [a("div", {
                staticClass: "text-center"
            }, [a("div", [a("font-awesome-icon", {
                staticClass: "mb-2 mx-auto block text-red-500",
                attrs: {
                    icon: ["far", "exclamation-circle"],
                    size: "5x"
                }
            })], 1), a("span", {
                staticClass: "block text-lg mb-2 text-woodsmoke"
            }, [e._v("Something went wrong")]), a("p", {
                staticClass: "mb-2 text-sm xs:text-base text-storm-dust"
            }, [e._v("An error occurred. Please try again later.")]), a("button", {
                staticClass: "bg-red-500 text-white rounded-md inline-block px-6 py-1 mt-2 hover:bg-red-600",
                on: {
                    click: e.retry
                }
            }, [e._v("Retry")])])]], 2)
        }
            , ht = []
            , gt = {
            name: "AppFeedback",
            props: ["alert"],
            methods: {
                retry: function() {
                    this.$emit("toggleFeedback", !1, {})
                }
            }
        }
            , bt = gt
            , vt = Object(Y["a"])(bt, mt, ht, !1, null, null, null)
            , wt = vt.exports
            , xt = {
            props: {
                prize: Object
            },
            components: {
                AppFeedback: wt,
                AppLoader: X["default"],
                AppDialog: Ee
            },
            data: function() {
                return {
                    isShowFeedback: !1,
                    alert: {},
                    isShowDialog: !1,
                    isLoading: !1,
                    isSuccessfulClaim: !1,
                    isSuccessfulResend: !1
                }
            },
            computed: {
                featuredRewards: Object(c["c"])("app/uiSchema@featuredRewards"),
                nonFeaturedRewards: Object(c["c"])("app/uiSchema@nonFeaturedRewards"),
                grandRewards: Object(c["c"])("app/uiSchema@grandRewards"),
                gamePrizes: Object(c["e"])("transactions/gamePrizes"),
                config: Object(c["c"])("app/config"),
                isActiveCode: function() {
                    return !this.prize.reward || this.prize.reward && !this.prize.reward.rewardDateTime
                },
                mixedRewards: function() {
                    return [].concat(Object(ft["a"])(this.featuredRewards), Object(ft["a"])(this.nonFeaturedRewards), Object(ft["a"])(this.grandRewards))
                },
                currentReward: function() {
                    var e = this;
                    return this.prize.reward ? this.mixedRewards.find((function(t) {
                            return t.denominationID === e.prize.reward.id
                        }
                    )) : {}
                },
                canResend: function() {
                    return this.prize.resendCount < 3 && this.prize.reward.rewardDateTime
                }
            },
            watch: {
                isShowDialog: function(e) {
                    e || (this.isShowFeedback = !1)
                }
            },
            methods: {
                claimPrize: Object(c["a"])("transactions/claimPrize"),
                resend: Object(c["a"])("transactions/resend"),
                toggleFeedback: function(e, t) {
                    this.isShowFeedback = e,
                        this.alert = t
                },
                toggleDialog: function() {
                    this.isShowDialog = !this.isShowDialog,
                    this.isShowDialog || (this.isSuccessfulClaim = !1)
                },
                claim: function() {
                    var e = this;
                    if (!this.isLoading) {
                        this.toggleDialog(),
                            this.isLoading = !0,
                            this.isSuccessfulClaim = !1,
                            this.alert = {};
                        var t = {
                            id: this.config.campaignID,
                            token: this.prize.token
                        };
                        this.claimPrize(t).then((function(t) {
                                if (0 === t.status.id)
                                    e.isSuccessfulClaim = !0,
                                        e.updateTransactions();
                                else {
                                    var a = {
                                        isSuccessful: !1,
                                        heading: "",
                                        message: "Something went wrong."
                                    };
                                    e.toggleFeedback(!0, a)
                                }
                                e.isLoading = !1
                            }
                        ))
                    }
                },
                resendCode: function() {
                    var e = this;
                    this.isLoading = !0,
                        this.isSuccessfulResend = !1,
                        this.toggleDialog();
                    var t = {
                        id: this.config.campaignID,
                        token: this.prize.id
                    };
                    new Date;
                    this.resend(t).then((function(t) {
                            0 === t.id ? (e.isSuccessfulResend = !0,
                                e.updateResendCount()) : 5 === t.id ? e.logout().then((function(t) {
                                    if (0 === t.id) {
                                        e.$store.dispatch("app/resetAppState", !1),
                                            e.$store.dispatch("transactions/resetTransactionsState", !1);
                                        var a = {
                                            isSuccessful: !1,
                                            message: "You have been automatically logged out  due to inactivity. Please login and try again."
                                        };
                                        e.$router.push({
                                            path: "/login",
                                            name: "login",
                                            params: {
                                                alert: a
                                            }
                                        })
                                    }
                                }
                            )) : (e.alert.isSuccessful = !1,
                                e.alert.message = "Something went wrong. Please try again."),
                            0 !== t.id && e.toggleFeedback(!0, e.alert),
                                e.isLoading = !1
                        }
                    ))
                },
                updateResendCount: function() {
                    var e = this
                        , t = this.gamePrizes.findIndex((function(t) {
                            return t.id === e.prize.id
                        }
                    ));
                    this.gamePrizes[t].resendCount += 1
                },
                updateTransactions: function() {
                    var e = this
                        , t = this.gamePrizes.findIndex((function(t) {
                            return t.id === e.prize.id
                        }
                    ));
                    this.gamePrizes[t].reward.rewardDateTime = new Date
                }
            },
            mounted: function() {}
        }
            , Ct = xt
            , yt = (a("e41a"),
            Object(Y["a"])(Ct, ut, pt, !1, null, "2702e622", null))
            , _t = yt.exports
            , kt = {
            components: {
                PageFeedback: Pe,
                GamePrizeItem: _t
            },
            data: function() {
                return {
                    isShowFeedback: !1,
                    alert: {},
                    isLoading: !1
                }
            },
            computed: {
                config: Object(c["c"])("app/config"),
                gamePrizes: Object(c["e"])("transactions/gamePrizes"),
                isRefreshGamePrizes: Object(c["e"])("app/isRefreshGamePrizes")
            },
            watch: {
                isRefreshGamePrizes: {
                    handler: function(e) {
                        e && (this.loadPrizes(),
                            this.isRefreshGamePrizes = !1)
                    },
                    immediate: !0
                }
            },
            created: function() {
                this.gamePrizes.length || this.loadPrizes()
            },
            methods: {
                getPrizes: Object(c["a"])("transactions/getPrizes"),
                logout: Object(c["a"])("app/logout"),
                loadPrizes: function() {
                    var e = this;
                    this.isLoading = !0,
                        this.alert = {};
                    var t = {
                        id: this.config.campaignID
                    };
                    this.getPrizes(t).then((function(t) {
                            if (5 === t.status.id)
                                e.logout().then((function(t) {
                                        0 === t.id && (e.$store.dispatch("app/resetAppState", !1),
                                            e.$store.dispatch("transactions/resetTransactionsState", !1),
                                            e.$router.push("/login")),
                                            e.isLoading = !1
                                    }
                                ));
                            else if (0 !== t.status.id) {
                                var a = {
                                    isSuccessful: !1,
                                    heading: "",
                                    message: "Something went wrong while loading your prizes."
                                };
                                e.toggleFeedback(!0, a),
                                    e.isLoading = !1
                            } else
                                e.isLoading = !1
                        }
                    ))
                },
                toggleFeedback: function(e, t) {
                    this.alert = t,
                        this.isShowFeedback = e,
                    e || this.loadPrizes()
                }
            }
        }
            , Ot = kt
            , jt = Object(Y["a"])(Ot, lt, dt, !1, null, null, null)
            , Lt = jt.exports
            , Pt = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", [!e.isLoading && e.grandPrize.name ? a("div", {
                staticClass: "\n      relative\n      p-2\n      min-h-164px\n      text-center\n      rounded-xl\n      flex\n      justify-center\n      items-stretch\n     \n    ",
                class: e.grandPrize.name.split(" ").length < 9 ? "h-1" : "",
                style: {
                    backgroundColor: "" + e.grandPrize.accentColor
                }
            }, [a("div", {
                staticClass: "absolute top-0 left-0 -mt-5 z-10 w-full text-center"
            }, [a("div", {
                staticClass: "\n          inline-block\n          py-3\n          px-6\n          rounded-full\n          border border-transparent-dark-3\n          bg-white\n          shadow-inset-2\n        "
            }, [a("div", {
                staticClass: "flex items-center justify-center"
            }, [a("svg", {
                attrs: {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("path", {
                attrs: {
                    d: "M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z",
                    stroke: "black",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                attrs: {
                    d: "M16 2V6",
                    stroke: "black",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                attrs: {
                    d: "M8 2V6",
                    stroke: "black",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                attrs: {
                    d: "M3 10H21",
                    stroke: "black",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                attrs: {
                    d: "M8 14H8.01",
                    stroke: "black",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                attrs: {
                    d: "M12 14H12.01",
                    stroke: "black",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                attrs: {
                    d: "M16 14H16.01",
                    stroke: "black",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                attrs: {
                    d: "M8 18H8.01",
                    stroke: "black",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                attrs: {
                    d: "M12 18H12.01",
                    stroke: "black",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                attrs: {
                    d: "M16 18H16.01",
                    stroke: "black",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            })]), a("span", {
                staticClass: "inline-block ml-2 font-bold"
            }, [e._v("\n            " + e._s(e.days) + " " + e._s(e.days > 1 ? "Days" : "Day") + " Left\n          ")])])])]), a("div", {
                staticClass: "pt-8 pb-4 bg-center bg-cover bg-no-repeat rounded-10px h-full",
                class: e.grandPrize.name.split(" ").length <= 3 ? "px-8" : "px-5",
                staticStyle: {
                    "background-image": "url('https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/grand-prize-cover-3.png')"
                }
            }, [a("p", {
                staticClass: "\n          mt-1\n          flex\n          items-center\n          justify-center\n          font-semibold\n          text-sm\n          leading-none\n          tracking-widest\n          uppercase\n        "
            }, [a("font-awesome-icon", {
                attrs: {
                    size: "xs",
                    icon: ["fas", "star"]
                }
            }), a("span", {
                staticClass: "mx-2 whitespace-no-wrap font-semibold"
            }, [e._v("Leveled Up Prize")]), a("font-awesome-icon", {
                attrs: {
                    size: "xs",
                    icon: ["fas", "star"]
                }
            })], 1), a("p", {
                staticClass: "mt-2 font-bold font-heading text-xl leading-snug"
            }, [e._v("\n        " + e._s(e.grandPrize.name) + "\n      ")])])]) : e._e()])
        }
            , St = [];
        function Rt(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    a.push.apply(a, r)
            }
            return a
        }
        function Dt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Rt(Object(a), !0).forEach((function(t) {
                        Object(o["a"])(e, t, a[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Rt(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                ))
            }
            return e
        }
        var zt = {
            data: function() {
                return {
                    isLoading: !1,
                    days: 0
                }
            },
            computed: {
                grandPrize: Object(c["e"])("transactions/grandPrize"),
                uiSchema: Object(c["e"])("app/uiSchema"),
                config: Object(c["e"])("app/config")
            },
            created: function() {
                this.loadGrandPrize()
            },
            methods: {
                getGrandPrize: Object(c["a"])("transactions/getGrandPrize"),
                loadGrandPrize: function() {
                    var e = this;
                    this.isLoading = !0;
                    var t = {
                        id: this.config.campaignID
                    };
                    this.getGrandPrize(t).then((function(t) {
                            if (0 === t.status.id) {
                                var a = e.uiSchema.grandRewards.find((function(e) {
                                        return e.denominationID === t.data[0].denominationID
                                    }
                                ));
                                console.log(a),
                                    e.grandPrize = Dt({}, a, {}, t.data[0]);
                                var r = 864e5
                                    , n = new Date(e.config.serverDateTime).setHours(0, 0, 0, 0)
                                    , s = new Date(t.data[0].endDateTime).setHours(0, 0, 0, 0);
                                e.days = Math.round(Math.abs((n - s) / r)),
                                    e.days += 1
                            }
                            e.isLoading = !1
                        }
                    ))
                }
            }
        }
            , Tt = zt
            , Et = Object(Y["a"])(Tt, Pt, St, !1, null, null, null)
            , Ft = Et.exports;
        function Mt(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    a.push.apply(a, r)
            }
            return a
        }
        function At(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Mt(Object(a), !0).forEach((function(t) {
                        Object(o["a"])(e, t, a[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Mt(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                ))
            }
            return e
        }
        var $t = {
            components: {
                PageFeedback: Pe,
                AppLoader: X["default"],
                AppAlert: fe,
                AppDialog: Ee,
                MysteryCarousel: He,
                FeaturedCarousel: at,
                MatchGame: ct,
                GrandPrize: Ft,
                GamePrizes: Lt
            },
            props: {
                isScrollToMyPrizes: {
                    type: Boolean,
                    default: !1,
                    required: !1
                },
                refresh: {
                    type: Boolean,
                    default: !1,
                    required: !1
                }
            },
            mixins: [me],
            computed: {
                transactions: Object(c["e"])("transactions/transactions"),
                ticketsCount: Object(c["e"])("transactions/ticketsCount"),
                dateRegistered: Object(c["e"])("app/dateRegistered"),
                isRedemptionExpired: Object(c["e"])("app/isRedemptionExpired"),
                isRedemptionStarted: Object(c["e"])("app/isRedemptionStarted"),
                totalTicketsCount: Object(c["e"])("transactions/totalTicketsCount"),
                isRefreshGamePrizes: Object(c["e"])("app/isRefreshGamePrizes"),
                config: Object(c["e"])("app/config")
            },
            data: function() {
                return {
                    isLoading: !1,
                    isLoggingOut: !1,
                    isShowDialog: !1,
                    alert: {},
                    isShowGame: !1,
                    isShowFeedback: !1
                }
            },
            watch: {
                isRedemptionExpired: {
                    handler: function(e) {
                        e && this.onLogout()
                    },
                    immediate: !0
                },
                refresh: {
                    handler: function(e) {
                        e && (this.isRefreshGamePrizes = !0)
                    },
                    immediate: !0
                }
            },
            created: function() {
                this.loadTickets()
            },
            mounted: function() {
                if (window.scrollTo(0, 0),
                    this.isScrollToMyPrizes) {
                    var e = document.getElementById("prizes");
                    e.scrollIntoView()
                }
                this.isRedemptionStarted || this.onLogout()
            },
            methods: At({}, Object(c["a"])("transactions/*"), {}, Object(c["a"])("app/*"), {
                toggleFeedback: function(e, t) {
                    this.alert = t,
                        this.isShowFeedback = e,
                    e || this.loadTransactions()
                },
                loadTickets: function() {
                    var e = this;
                    this.isLoading = !0;
                    var t = {
                        id: this.config.campaignID
                    };
                    this.getTickets(t).then((function(t) {
                            if (0 === t.status.id)
                                e.ticketsCount = t.data.remaining,
                                    e.totalTicketsCount = t.data.total;
                            else if (5 === t.status.id)
                                e.logout().then((function(t) {
                                        if (0 === t.id) {
                                            e.$store.dispatch("app/resetAppState", !1),
                                                e.$store.dispatch("transactions/resetTransactionsState", !1);
                                            var a = {
                                                isSuccessful: !1,
                                                message: "You have been automatically logged out  due to inactivity. Please login and try again."
                                            };
                                            e.$router.push({
                                                path: "/login",
                                                name: "login",
                                                params: {
                                                    alert: a
                                                }
                                            })
                                        }
                                        e.isLoading = !1
                                    }
                                ));
                            else {
                                var a = {
                                    isSuccessful: !1,
                                    heading: "",
                                    message: "Something went wrong while loading your playcodes."
                                };
                                e.toggleFeedback(!0, a)
                            }
                            e.isLoading = !1
                        }
                    )).catch((function(t) {
                            var a = {
                                isSuccessful: !1,
                                heading: "",
                                message: "Something went wrong while loading your playcodes."
                            };
                            e.toggleFeedback(!0, a),
                                e.isLoading = !1
                        }
                    ))
                },
                onLogout: function() {
                    var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                            var t = this;
                            return regeneratorRuntime.wrap((function(e) {
                                    while (1)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                this.isLoggingOut = !0,
                                                    this.logout().then((function(e) {
                                                            0 === e.id && (t.$store.dispatch("app/resetAppState", !1),
                                                                t.$store.dispatch("transactions/resetTransactionsState", !1),
                                                                t.$router.push("/login")),
                                                                t.isLoggingOut = !1
                                                        }
                                                    ));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                toggleDialog: function() {
                    this.isShowDialog = !this.isShowDialog
                }
            })
        }
            , Nt = $t
            , It = (a("cccb"),
            Object(Y["a"])(Nt, Ce, ye, !1, null, null, null))
            , Ht = It.exports
            , Vt = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "bg-white pb-12"
            }, [e._m(0), e._m(1), a("div", {
                staticClass: "\n      match-container\n      mx-8\n      p-8\n      bg-porcelain\n      rounded-3xl\n      border border-transparent-dark-1\n    "
            }, [a("smooth-reflow", [e.isLoading ? a("div", {
                staticClass: "p-26 flex items-center justify-center"
            }, [a("app-loader", {
                key: "2",
                staticClass: "text-white"
            })], 1) : a("div", {
                staticClass: "flex flex-wrap"
            }, e._l(e.cards, (function(t, r) {
                    return a("button", {
                        key: r,
                        staticClass: "card-wrapper p-6px w-1/3 focus:outline-none",
                        on: {
                            click: function(t) {
                                return t.preventDefault(),
                                    e.flip(r)
                            }
                        }
                    }, [a("div", {
                        staticClass: "card",
                        class: {
                            "flip-vertical-right": t.isFlipped
                        }
                    }, [a("div", {
                        staticClass: "front face"
                    }, [a("img", {
                        attrs: {
                            src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/tile-idle.png",
                            alt: ""
                        }
                    })]), a("div", {
                        staticClass: "back face"
                    }, [a("img", {
                        attrs: {
                            src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/card-" + t.card + ".png",
                            alt: ""
                        }
                    })])])])
                }
            )), 0)])], 1), a("app-dialog", {
                attrs: {
                    showing: e.isShowGameOverDialog,
                    "max-width": "366px",
                    classes: {
                        content: "mx-auto rounded-2xl overflow-visible h-full",
                        root: "px-4 bg-transparent-darker overflow-y-scroll"
                    },
                    transition: "dialog",
                    "bg-transition": "fade",
                    dismissible: !1
                }
            }, [a("div", {
                staticClass: "dialog h-full flex flex-col justify-center items-center"
            }, [a("smooth-reflow", {
                staticClass: "w-full"
            }, [a("div", {
                staticClass: "relative text-center"
            }, [a("div", {
                staticClass: "status-image items-center justify-center text-white"
            }, [a("img", {
                staticStyle: {
                    width: "104px",
                    height: "104px"
                },
                attrs: {
                    src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/" + (e.isWin ? "win" : "lose-2") + ".png",
                    alt: ""
                }
            })]), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isWin,
                    expression: "isWin"
                }],
                staticClass: "\n              absolute\n              top-0\n              z-50\n              -mt-16\n              w-full\n              h-full\n              flex\n              justify-center\n            "
            }, [a("img", {
                staticClass: "absolute top-0 -mt-8",
                staticStyle: {
                    width: "204px"
                },
                attrs: {
                    src: "https://s3.us-east-1.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/sparks.png",
                    alt: ""
                }
            })]), e.isWin ? [a("div", {
                staticClass: "bg-white rounded-t-xl pt-16 pb-8"
            }, [a("p", {
                staticClass: "font-bold text-xl"
            }, [e._v("Congratulations!")]), a("p", {
                staticClass: "text-sm text-storm-dust"
            }, [e._v("\n                You won\n                " + e._s(e.isFeatured ? "the Featured Prize" : "the Mystery Prize") + "\n              ")]), e.currentReward ? a("div", {
                staticClass: "\n                  mt-8\n                  mx-8\n                  p-2\n                  text-center\n                  bg-center bg-cover\n                  rounded-xl\n                ",
                class: e.currentReward.isDarkText ? "text-black" : "text-white",
                style: {
                    backgroundColor: "" + e.currentReward.accentColor
                }
            }, [a("div", {
                staticClass: "p-8 bg-center bg-cover bg-no-repeat rounded-10px",
                style: {
                    backgroundImage: e.isFeatured ? "url(https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/rising-sun.png)" : ""
                }
            }, [a("p", {
                staticClass: "\n                      flex\n                      items-center\n                      justify-center\n                      font-semibold\n                      text-sm\n                      leading-none\n                      tracking-widest\n                      uppercase\n                    "
            }, [a("font-awesome-icon", {
                attrs: {
                    size: "xs",
                    icon: ["fas", "star"]
                }
            }), a("span", {
                staticClass: "mx-2 leading-relaxed 2xs:whitespace-no-wrap"
            }, [e._v("\n                      " + e._s(e.isFeatured ? "Featured Prize" : "Mystery Prize") + "\n                    ")]), a("font-awesome-icon", {
                attrs: {
                    size: "xs",
                    icon: ["fas", "star"]
                }
            })], 1), e.currentReward ? a("span", {
                staticClass: "mt-2 block font-bold",
                class: {
                    "text-lg leading-6": e.currentReward.name.split(" ").length > 8,
                    "text-xl leading-7": e.currentReward.name.split(" ").length > 5 && e.currentReward.name.split(" ").length <= 8,
                    "text-2xl leading-8": e.currentReward.name.split(" ").length <= 5
                }
            }, [e._v(e._s(e.currentReward.name))]) : e._e()])]) : e._e()]), a("div", {
                staticClass: "flex"
            }, [a("button", {
                staticClass: "\n                  button\n                  primary\n                  w-full\n                  bg-primary-500\n                  border-l-0 border-r-0\n                  rounded-t-none\n                ",
                on: {
                    click: function(t) {
                        return e.$router.push({
                            path: "/",
                            name: "home",
                            params: {
                                isScrollToMyPrizes: !0,
                                refresh: !0
                            }
                        })
                    }
                }
            }, [e._v("\n                See My Prizes\n              ")])])] : [a("div", {
                staticClass: "bg-white rounded-t-xl pt-16 pb-8"
            }, [a("p", {
                staticClass: "font-bold text-xl"
            }, [e._v("Better luck next time!")]), e.ticketsCount ? [a("p", {
                staticClass: "text-sm text-storm-dust"
            }, [e._v("\n                  Would you like to try again?\n                ")]), a("div", {
                staticClass: "rounded-lg mt-8 mx-8 py-10 bg-mercury px-4"
            }, [a("p", {
                staticClass: "text-base"
            }, [a("span", {
                staticClass: "font-bold"
            }, [e._v(e._s(e.ticketsCount) + "\n                      " + e._s(e.ticketsCount <= 1 ? "playcode" : "playcodes") + " left\n                    ")]), e._v("\n                    out of " + e._s(e.totalTicketsCount) + "\n                    " + e._s(e.totalTicketsCount <= 1 ? "playcode" : "playcodes") + "\n                  ")])])] : [a("div", {
                staticClass: "rounded-lg mt-8 mx-8 py-10 px-4 bg-mercury"
            }, [a("p", {
                staticClass: "text-bace"
            }, [e._v("\n                    You have used up all your playcodes. Spend more to earn\n                    more playcodes to play!\n                  ")])])], a("p", {
                staticClass: "mt-4 px-8 text-center text-sm"
            }, [e._v("\n                Keep using your credit card to earn more playcodes!\n              ")])], 2), a("div", {
                staticClass: "flex"
            }, [a("button", {
                staticClass: "\n                  button\n                  secondary\n                  bg-gray-chateau\n                  rounded-t-none rounded-br-none\n                ",
                class: {
                    "w-full": !e.ticketsCount,
                    "border-l-0": e.ticketsCount
                },
                on: {
                    click: function(t) {
                        return e.$router.push("/")
                    }
                }
            }, [e._v("\n                Go To Home\n              ")]), e.ticketsCount ? a("button", {
                staticClass: "\n                  button\n                  primary\n                  bg-primary-500\n                  border-l-0 border-r-0\n                  rounded-t-none rounded-bl-none\n                ",
                on: {
                    click: e.playAgain
                }
            }, [e._v("\n                Play Again\n              ")]) : e._e()])]], 2)])], 1)]), a("app-dialog", {
                attrs: {
                    showing: e.isShowFeaturedPrize,
                    "max-width": "366px",
                    classes: {
                        content: "mx-auto  overflow-visible py-4 h-full",
                        root: "px-4 bg-transparent-darker overflow-y-auto"
                    },
                    dismissible: !0,
                    transition: "dialog",
                    "bg-transition": "fade"
                }
            }, [a("div", {
                staticClass: "dialog h-full flex flex-col justify-center items-center"
            }, [a("div", {
                staticClass: "\n          border-2 border-black\n          rounded-xl\n          p-8\n          w-full\n          bg-white\n          text-center\n        "
            }, [a("p", {
                staticClass: "font-bold text-xl"
            }, [e._v("\n          You are about "), a("br"), e._v("\n          to start a game.\n        ")]), a("p", {
                staticClass: "mt-2 mb-8 text-sm"
            }, [a("span", {
                staticClass: "font-bold"
            }, [e._v("1 playcode")]), e._v(" will be used for this\n          game.\n        ")]), a("div", {
                staticClass: "\n            relative\n            rounded-lg\n            border border-transparent-dark-1\n            shadow-inset-1\n            p-6px\n            flex\n            justify-center\n            items-center\n            bg-wild-sand\n          "
            }, [a("div", {
                ref: "navActive",
                staticClass: "\n              absolute\n              z-10\n              rounded-md\n              border border-transparent-dark-1\n              shadow-custom-1\n              w-1/2\n              h-8\n              bg-white\n              transition-all\n              duration-100\n              ease-out\n            ",
                staticStyle: {
                    left: "6px"
                }
            }), a("button", {
                staticClass: "\n              relative\n              z-20\n              rounded-md\n              w-1/2\n              h-8\n              bg-transparent\n              flex\n              items-center\n              justify-center\n              text-sm\n              focus:outline-none\n            ",
                class: 0 === e.activeNav ? "font-bold" : "text-trout",
                on: {
                    click: function(t) {
                        e.activeNav = 0
                    }
                }
            }, [e._v("\n            Mechanics\n          ")]), a("button", {
                staticClass: "\n              relative\n              z-20\n              rounded-md\n              w-1/2\n              h-8\n              bg-transparent\n              flex\n              items-center\n              justify-center\n              text-sm\n              focus:outline-none\n            ",
                class: 1 === e.activeNav ? "font-bold" : "text-trout",
                on: {
                    click: function(t) {
                        e.activeNav = 1
                    }
                }
            }, [e._v("\n            Prizes\n          ")])]), a("smooth-reflow", [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 === e.activeNav,
                    expression: "activeNav === 0"
                }],
                staticStyle: {
                    "min-height": "280px"
                }
            }, [a("p", {
                staticClass: "mt-10 text-center text-xs leading-6"
            }, [e._v("\n              Get a matching 🎁\n              "), a("span", {
                staticClass: "font-bold"
            }, [e._v("gift block to win the featured prize")]), e._v("\n              of the day or get other matches to win a mystery prize.\n            ")]), a("div", {
                staticClass: "mt-4 rounded-lg p-3 flex bg-white"
            }, [a("img", {
                attrs: {
                    src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/card-0.png",
                    width: "56",
                    height: "56",
                    alt: ""
                }
            }), a("div", {
                staticClass: "ml-4 flex flex-col justify-center text-left"
            }, [a("span", {
                staticClass: "font-medium text-xs text-oxford-blue uppercase"
            }, [e._v("\n                  Gift Block\n                ")]), a("span", {
                staticClass: "font-bold"
            }, [e._v(" Featured Prize ")])])]), a("div", {
                staticClass: "mt-4 rounded-lg p-3 flex bg-white"
            }, [a("img", {
                attrs: {
                    src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/card-4.png",
                    width: "56",
                    height: "56",
                    alt: ""
                }
            }), a("div", {
                staticClass: "ml-4 flex flex-col justify-center text-left"
            }, [a("span", {
                staticClass: "font-medium text-xs text-oxford-blue uppercase"
            }, [e._v("\n                  Other Block\n                ")]), a("span", {
                staticClass: "font-bold"
            }, [e._v(" Mystery Prize ")])])])]), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 === e.activeNav,
                    expression: "activeNav === 1"
                }],
                staticClass: "w-full flex flex-col items-center",
                staticStyle: {
                    "min-height": "280px"
                }
            }, [a("div", {
                staticClass: "relative h-full text-center mt-10",
                staticStyle: {
                    width: "260px",
                    height: "115px"
                }
            }, [a("div", {
                staticClass: "flex h-full"
            }, [a("div", {
                staticClass: "\n                    border border-transparent-dark-3\n                    h-full\n                    flex\n                    items-center\n                    justify-center\n                    bg-white\n                    text-center\n                    uppercase\n                    tracking-wild\n                    text-black\n                    rounded-l-12px\n                    overflow-hidden\n                    flex-grow-0 flex-shrink-0\n                  ",
                staticStyle: {
                    "flex-basis": "40px"
                }
            }, [a("svg", {
                attrs: {
                    width: "40",
                    height: "104",
                    viewBox: "0 0 40 104",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("rect", {
                attrs: {
                    width: "40",
                    height: "104",
                    fill: "white"
                }
            }), a("path", {
                attrs: {
                    d: "M25 83.2415L16.2727 83.2415L16.2727 77.4631L17.794 77.4631L17.794 81.3963L19.8736 81.3963L19.8736 77.8466L21.3949 77.8466L21.3949 81.3963L25 81.3963L25 83.2415ZM25 76.2219L16.2727 76.2219L16.2727 70.3413L17.794 70.3413L17.794 74.3768L19.8736 74.3768L19.8736 70.6438L21.3949 70.6438L21.3949 74.3768L23.4787 74.3768L23.4787 70.3242L25 70.3242L25 76.2219ZM25 67.37L25 69.3473L16.2727 66.3345L16.2727 63.9567L25 60.9482L25 62.9254L18.267 65.1115L18.267 65.1797L25 67.37ZM21.5696 67.4936L21.5696 62.8232L23.0099 62.8232L23.0099 67.4936L21.5696 67.4936ZM17.794 61.2965L16.2727 61.2965L16.2727 54.1289L17.794 54.1289L17.794 56.8008L25 56.8008L25 58.6246L17.794 58.6246L17.794 61.2965ZM16.2727 47.5579L16.2727 45.7127L21.9403 45.7127C22.5767 45.7127 23.1335 45.8647 23.6108 46.1687C24.0881 46.4698 24.4602 46.8917 24.7273 47.4343C24.9915 47.9769 25.1236 48.609 25.1236 49.3306C25.1236 50.055 24.9915 50.6886 24.7273 51.2312C24.4602 51.7738 24.0881 52.1957 23.6108 52.4968C23.1335 52.7979 22.5767 52.9485 21.9403 52.9485L16.2727 52.9485L16.2727 51.1033L21.7827 51.1033C22.1151 51.1033 22.4105 51.0309 22.669 50.886C22.9276 50.7383 23.1307 50.5309 23.2784 50.2638C23.4261 49.9968 23.5 49.6857 23.5 49.3306C23.5 48.9727 23.4261 48.6616 23.2784 48.3974C23.1307 48.1303 22.9276 47.9244 22.669 47.7795C22.4105 47.6317 22.1151 47.5579 21.7827 47.5579L16.2727 47.5579ZM25 44.1946L16.2727 44.1946L16.2727 40.7514C16.2727 40.0923 16.3906 39.5298 16.6264 39.0639C16.8594 38.5952 17.1903 38.2386 17.6193 37.9943C18.0455 37.7472 18.5469 37.6236 19.1236 37.6236C19.7031 37.6236 20.2017 37.7486 20.6193 37.9986C21.0341 38.2486 21.3523 38.6108 21.5739 39.0852C21.7955 39.5568 21.9062 40.1278 21.9062 40.7983L21.9062 43.1037L20.4233 43.1037L20.4233 41.0966C20.4233 40.7443 20.375 40.4517 20.2784 40.2187C20.1818 39.9858 20.0369 39.8125 19.8437 39.6989C19.6506 39.5824 19.4105 39.5241 19.1236 39.5241C18.8338 39.5241 18.5895 39.5824 18.3906 39.6989C18.1918 39.8125 18.0412 39.9872 17.9389 40.223C17.8338 40.456 17.7812 40.75 17.7812 41.1051L17.7812 42.3494L25 42.3494L25 44.1946ZM21.0284 39.4815L25 37.3125L25 39.3494L21.0284 41.4716L21.0284 39.4815ZM25 36.3196L16.2727 36.3196L16.2727 30.4389L17.794 30.4389L17.794 34.4744L19.8736 34.4744L19.8736 30.7415L21.3949 30.7415L21.3949 34.4744L23.4787 34.4744L23.4787 30.4219L25 30.4219L25 36.3196ZM25 25.8782L25 28.9719L16.2727 28.9719L16.2727 25.8526C16.2727 24.9748 16.4474 24.2191 16.7969 23.5856C17.1435 22.9521 17.642 22.4648 18.2926 22.1239C18.9432 21.7802 19.7216 21.6083 20.6278 21.6083C21.5369 21.6083 22.3182 21.7802 22.9716 22.1239C23.625 22.4648 24.1264 22.9549 24.4758 23.5941C24.8253 24.2305 25 24.9918 25 25.8782ZM23.419 27.1268L23.419 25.9549C23.419 25.4094 23.3224 24.9506 23.1293 24.5785C22.9332 24.2035 22.6307 23.9222 22.2216 23.7347C21.8097 23.5444 21.2784 23.4492 20.6278 23.4492C19.983 23.4492 19.456 23.5444 19.0469 23.7347C18.6378 23.9222 18.3366 24.2021 18.1435 24.5742C17.9503 24.9464 17.8537 25.4052 17.8537 25.9506L17.8537 27.1268L23.419 27.1268Z",
                    fill: "black"
                }
            })])]), a("div", {
                staticClass: "\n                    relative\n                    pt-4\n                    pb-4\n                    px-4\n                    rounded-r-12px\n                    flex\n                    items-center\n                    text-center\n                  ",
                class: e.currentFeaturedPrize.isDarkText ? "text-black" : "text-white",
                style: {
                    backgroundColor: "" + e.currentFeaturedPrize.accentColor
                }
            }, [a("span", {
                staticClass: "overlay"
            }), e.currentFeaturedPrize ? a("span", {
                staticClass: "block font-bold",
                class: {
                    "text-xs": e.currentFeaturedPrize.name.split(" ").length > 8,
                    "text-sm ": e.currentFeaturedPrize.name.split(" ").length > 5 && e.currentFeaturedPrize.name.split(" ").length <= 8,
                    "text-base": e.currentFeaturedPrize.name.split(" ").length <= 5
                }
            }, [e._v(e._s(e.currentFeaturedPrize.name))]) : e._e()])])]), a("p", {
                staticClass: "-ml-3 mt-4 text-base text-center"
            }, [e._v("\n              Or win other mystery prizes.\n            ")])])])], 1), a("button", {
                staticClass: "\n          mt-4\n          rounded-full\n          border-2 border-white\n          bg-transparent-white-2\n          p-2\n          text-white\n        ",
                on: {
                    click: function(t) {
                        e.isShowFeaturedPrize = !1
                    }
                }
            }, [a("font-awesome-icon", {
                attrs: {
                    icon: ["fal", "times"],
                    size: "lg",
                    "fixed-width": ""
                }
            })], 1)])])], 1)
        }
            , Gt = [function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "relative"
            }, [a("img", {
                attrs: {
                    src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/inside-cover-2.png",
                    alt: ""
                }
            })])
        }
            , function() {
                var e = this
                    , t = e.$createElement
                    , a = e._self._c || t;
                return a("div", {
                    staticClass: "p-8"
                }, [a("p", {
                    staticClass: "text-center text-sm leading-7"
                }, [e._v("\n      Get a matching 🎁\n      "), a("span", {
                    staticClass: "font-bold"
                }, [e._v("gift block to win the featured prize")]), e._v(" of\n      the day or get other matches to win a mystery prize.\n    ")])])
            }
        ]
            , Zt = {
            components: {
                AppLoader: X["default"],
                AppDialog: Ee
            },
            data: function() {
                var e;
                return e = {
                    randomCards: [1, 2, 3, 4],
                    status: null,
                    cards: [{
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }, {
                        isFlipped: !1,
                        card: ""
                    }],
                    token: "",
                    id: "",
                    life: 2,
                    currentCards: [-1, -1],
                    isShowGameOverDialog: !1,
                    isLoading: !1,
                    isLoading2: !1,
                    currentReward: null
                },
                    Object(o["a"])(e, "status", null),
                    Object(o["a"])(e, "isShowFeaturedPrize", !0),
                    Object(o["a"])(e, "activeNav", 0),
                    e
            },
            computed: {
                config: Object(c["c"])("app/config"),
                featuredRewards: Object(c["c"])("app/uiSchema@featuredRewards"),
                nonFeaturedRewards: Object(c["c"])("app/uiSchema@nonFeaturedRewards"),
                ticketsCount: Object(c["e"])("transactions/ticketsCount"),
                grandPrize: Object(c["e"])("transactions/grandPrize"),
                totalTicketsCount: Object(c["e"])("transactions/totalTicketsCount"),
                currentFeaturedPrize: Object(c["e"])("app/currentFeaturedPrize"),
                isRefreshGamePrizes: Object(c["e"])("app/isRefreshGamePrizes"),
                isWin: function() {
                    return this.isFeatured || this.isMystery
                },
                isFeatured: function() {
                    return 2 === this.status
                },
                isMystery: function() {
                    return 1 === this.status
                }
            },
            watch: {
                activeNav: {
                    immediate: !0,
                    handler: function(e) {
                        this.$refs.navActive && (this.$refs.navActive.style.left = e ? "calc(50% - 6px)" : "6px")
                    }
                }
            },
            beforeRouteEnter: function(e, t, a) {
                a((function(e) {
                        0 == e.ticketsCount && e.$router.push("/")
                    }
                ))
            },
            created: function() {
                this.initGame(),
                    this.o
            },
            methods: {
                loadGame: Object(c["a"])("app/loadGame"),
                gameOver: Object(c["a"])("app/gameOver"),
                flip: function(e) {
                    0 === this.life || this.cards[e].isFlipped || (this.cards[e].card = this.currentCards[this.life - 1],
                        this.cards[e].isFlipped = !0,
                        this.life--,
                    0 === this.life && this.loadEndGame())
                },
                initGame: function() {
                    var e = this;
                    this.isLoading = !0;
                    var t = {
                        id: this.config.campaignID
                    };
                    this.loadGame(t).then((function(t) {
                            if (0 === t.status.id)
                                e.id = t.data.id,
                                    e.token = t.data.token,
                                    e.checkStatus();
                            else {
                                var a = {
                                    isSuccessful: !1,
                                    heading: "",
                                    message: "Something went wrong."
                                };
                                e.toggleFeedback(!0, a)
                            }
                            e.isLoading = !1
                        }
                    ))
                },
                checkStatus: function() {
                    var e = this
                        , t = this.featuredRewards.find((function(t) {
                            return t.denominationID === e.id
                        }
                    ))
                        , a = this.nonFeaturedRewards.find((function(t) {
                            return t.denominationID === e.id
                        }
                    ));
                    if (this.status = t ? 2 : a ? 1 : 0,
                    2 === this.status)
                        this.currentCards = [0, 0];
                    else if (1 === this.status) {
                        var r = this.getRandomCards();
                        this.currentCards = [r, r]
                    } else if (0 === this.status) {
                        var n = this.getRandomCards()
                            , s = this.getRandomCards(n);
                        this.currentCards = [n, s]
                    }
                },
                getRandomCards: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                        , t = this.randomCards.filter((function(t) {
                            return t !== e
                        }
                    ))
                        , a = Math.floor(Math.random() * t.length);
                    return t[a]
                },
                loadEndGame: function() {
                    var e = this;
                    if (!this.isLoading2) {
                        this.isLoading2 = !0;
                        var t = {
                            id: this.config.campaignID,
                            token: this.token
                        };
                        this.gameOver(t).then((function(t) {
                                if (0 === t.status.id)
                                    e.isWin && (e.isFeatured ? e.currentReward = e.featuredRewards.find((function(t) {
                                            return t.denominationID === e.id
                                        }
                                    )) : e.currentReward = e.nonFeaturedRewards.find((function(t) {
                                            return t.denominationID === e.id
                                        }
                                    ))),
                                        e.ticketsCount--,
                                        setTimeout((function() {
                                                e.isShowGameOverDialog = !0
                                            }
                                        ), 700);
                                else {
                                    var a = {
                                        isSuccessful: !1,
                                        heading: "",
                                        message: "Something went wrong."
                                    };
                                    e.toggleFeedback(!0, a)
                                }
                                e.isLoading2 = !1
                            }
                        ))
                    }
                },
                playAgain: function() {
                    this.token = "",
                        this.id = "",
                        this.life = 2,
                        this.currentCards = [-1, -1],
                        this.isShowGameOverDialog = !1,
                        this.isLoading = !1,
                        this.isLoading2 = !1,
                        this.currentReward = null,
                        this.status = null,
                        this.cards.forEach((function(e) {
                                e.isFlipped = !1,
                                    e.card = ""
                            }
                        )),
                        this.initGame()
                },
                setActive: function(e) {}
            }
        }
            , Wt = Zt
            , qt = (a("5a5d"),
            Object(Y["a"])(Wt, Vt, Gt, !1, null, "21e41703", null))
            , Bt = qt.exports
            , Ut = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "p-8"
            }, [a("h1", {
                staticClass: "font-bold text-xl"
            }, [e._v("Game Data")]), a("p", {
                staticClass: "mt-8"
            }, [e._v("Win Rate Variables")]), a("div", {
                staticClass: "ml-2"
            }, [a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Base Win Rate:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v("\n        " + e._s(e.winRateVariables.baseWinRate) + "\n      ")])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Campaign Start Date:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v("\n        " + e._s(new Date(e.winRateVariables.startDate).toLocaleDateString()) + "\n      ")])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Campaign End Date:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v("\n        " + e._s(new Date(e.winRateVariables.endDate).toLocaleDateString()) + "\n      ")])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Current Date Time:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v("\n        " + e._s(new Date(e.winRateVariables.currentDateTime).toLocaleDateString()) + "\n      ")])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Reward Count:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v("\n        " + e._s(e.winRateVariables.rewardCount.toLocaleString()) + "\n      ")])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Playcode Count:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v("\n        " + e._s(e.winRateVariables.ticketCount.toLocaleString()) + "\n      ")])])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Current Week No:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v(e._s(e.currentWeekNo))])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Start Date Week No:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v(e._s(e.startDateWeekNo))])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Week Count:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v(e._s(e.weekCount))])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Remaining Days:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v(e._s(e.remainingDays))])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Time Adjusted Win Rate:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v(e._s(e.timeAdjustedWinRate))])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Reward Adjusted Win Rate:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v(e._s(e.rewardAdjustedWinRate))])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Final Win Rate:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v(e._s(e.finalWinRate))])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Featured Reward:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v(e._s(e.featuredReward))])]), a("p", {
                staticClass: "mt-4"
            }, [e._v("Grand Prize")]), a("div", {
                staticClass: "ml-2"
            }, [a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Grand Prize Final Win Rate:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v("\n        " + e._s(e.grandPrizeFinalWinRate) + "\n      ")])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Grand Prize Reward Adjusted Win Rate:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v("\n        " + e._s(e.grandPrizeRewardAdjustedWinRate) + "\n      ")])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Grand Prize Time Adjusted Win Rate")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v("\n        " + e._s(e.grandPrizeTimeAdjustedWinRate) + "\n      ")])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Grand Prize:")]), e.grandPrize ? a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v("\n        " + e._s(e.grandPrize.name || "-") + "\n      ")]) : e._e()]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Grand Prize Winner Reg Code:")]), e.grandPrize ? a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v("\n        " + e._s(e.grandPrize.regCode || "-") + "\n      ")]) : e._e()])]), a("p", {
                staticClass: "mt-12 font-semibold text-lg"
            }, [e._v("Playcodes")]), a("div", {
                staticClass: "mt-4 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Active:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v(e._s(e.tickets.active.toLocaleString()))])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Win:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v(e._s(e.tickets.used.win.toLocaleString()))])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Lose:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v(e._s(e.tickets.used.lose.toLocaleString()))])]), a("div", {
                staticClass: "mt-2 flex justify-between"
            }, [a("div", {
                staticClass: "pr-2 w-5/12 flex-grow"
            }, [e._v("Total:")]), a("div", {
                staticClass: "font-semibold text-right"
            }, [e._v(e._s(e.tickets.total.toLocaleString()))])]), a("p", {
                staticClass: "mt-12 font-semibold text-lg"
            }, [e._v("Rewards")]), a("table", {
                staticClass: "mt-4"
            }, [e._m(0), a("tbody", e._l(e.rewards, (function(t) {
                    return a("tr", {
                        key: t.denominationID
                    }, [a("td", {
                        staticClass: "py-2   pr-6 text-right"
                    }, [e._v(" " + e._s(t.denominationID) + " ")]), a("td", {
                        staticClass: "p-2 w-4/12"
                    }, [t.isGrandPrize ? a("span", [e._v("⭐⭐")]) : t.isFeatured ? a("span", [e._v("⭐")]) : e._e(), e._v("\n          " + e._s(8414 === t.denominationID ? "Robinsons Supermarket - (P1,000 x 5)" : 10513 === t.denominationID ? "GrabFood (P500 x 10)" : 8391 === t.denominationID ? "Robinsons - (P3,000)" : 6956 === t.denominationID ? "Giftaway - (P100)" : 7044 === t.denominationID ? "Giftaway Universal Plus - (P100)" : t.name) + "\n        ")]), a("td", {
                        staticClass: "p-2 text-right"
                    }, [e._v(e._s(t.count.toLocaleString()))]), a("td", {
                        staticClass: "p-2 text-right"
                    }, [e._v(e._s(t.limit.toLocaleString()))]), a("td", {
                        staticClass: "p-2 text-right"
                    }, [e._v(e._s(t.redeemed.toLocaleString()))]), a("td", {
                        staticClass: "p-2 text-right"
                    }, [e._v(e._s(t.redeemedToday.toLocaleString()))]), a("td", {
                        staticClass: "p-2 text-right"
                    }, [e._v(e._s(t.remaining.toLocaleString()))])])
                }
            )), 0)]), a("p", {
                staticClass: "mt-12 font-semibold text-lg"
            }, [e._v("Grand Prize Schedules")]), a("table", {
                staticClass: "mt-4"
            }, [e._m(1), a("tbody", e._l(e.grandPrizes, (function(t) {
                    return a("tr", {
                        key: t.denominationID
                    }, [a("td", {
                        staticClass: "p-2 w-4/3"
                    }, [a("span", [e._v("⭐⭐")]), e._v(" " + e._s(t.name) + "\n        ")]), a("td", {
                        staticClass: "p-2 text-right w-3/12"
                    }, [e._v(e._s(new Date(t.startDate).toLocaleDateString()))]), a("td", {
                        staticClass: "p-2 text-right w-3/12"
                    }, [e._v(e._s(new Date(t.endDate).toLocaleDateString()))])])
                }
            )), 0)])])
        }
            , Jt = [function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("thead", [a("tr", [a("th", {
                staticClass: "py-2 pr-6 text-right"
            }, [e._v("ID")]), a("th", {
                staticClass: "p-2 text-left w-4/12"
            }, [e._v("Name")]), a("th", {
                staticClass: "p-2 text-right"
            }, [e._v("Reward Count")]), a("th", {
                staticClass: "p-2 text-right"
            }, [e._v("Daily Limit")]), a("th", {
                staticClass: "p-2 text-right"
            }, [e._v("Total Redeemed")]), a("th", {
                staticClass: "p-2 text-right"
            }, [e._v("Redeemed Today")]), a("th", {
                staticClass: "p-2 text-right"
            }, [e._v("Remaining Rewards")])])])
        }
            , function() {
                var e = this
                    , t = e.$createElement
                    , a = e._self._c || t;
                return a("thead", [a("tr", [a("th", {
                    staticClass: "p-2 text-left w-4/12"
                }, [e._v("Name")]), a("th", {
                    staticClass: "p-2 text-right w-3/12"
                }, [e._v("Start Date")]), a("th", {
                    staticClass: "p-2 text-right w-3/12"
                }, [e._v("End Date")])])])
            }
        ];
        function Yt(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    a.push.apply(a, r)
            }
            return a
        }
        function Kt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Yt(Object(a), !0).forEach((function(t) {
                        Object(o["a"])(e, t, a[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Yt(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                ))
            }
            return e
        }
        var Qt = {
            data: function() {
                return {
                    currentWeekNo: 0,
                    featuredReward: "",
                    finalWinRate: 0,
                    rewardAdjustedWinRate: 0,
                    rewards: [],
                    startDateWeekNo: 0,
                    timeAdjustedWinRate: 0,
                    weekCount: 0,
                    remainingDays: 0,
                    winRateVariables: {},
                    grandPrizeFinalWinRate: 0,
                    grandPrizeRewardAdjustedWinRate: 0,
                    grandPrizeTimeAdjustedWinRate: 0,
                    grandPrize: {}
                }
            },
            computed: {
                config: Object(c["c"])("app/config"),
                grandPrizes: function() {
                    return this.rewards.filter((function(e) {
                            return e.isGrandPrize
                        }
                    )).sort((function(e, t) {
                            return new Date(e.startDate) - new Date(t.startDate)
                        }
                    ))
                }
            },
            created: function() {
                this.loadGameData()
            },
            methods: {
                gameData: Object(c["a"])("app/gameData"),
                loadGameData: function() {
                    var e = this
                        , t = Kt({
                        id: this.config.campaignID
                    }, this.$route.query);
                    this.gameData(t).then((function(t) {
                            0 === t.status.id ? (e.currentWeekNo = t.data.currentWeekNo,
                                e.featuredReward = t.data.featuredReward,
                                e.finalWinRate = t.data.finalWinRate,
                                e.rewardAdjustedWinRate = t.data.rewardAdjustedWinRate,
                                e.startDateWeekNo = t.data.startDateWeekNo,
                                e.timeAdjustedWinRate = t.data.timeAdjustedWinRate,
                                e.weekCount = t.data.weekCount,
                                e.winRateVariables = t.data.winRateVariables,
                                e.remainingDays = t.data.remainingDays,
                                e.tickets = t.data.tickets,
                                e.grandPrizeFinalWinRate = t.data.grandPrizeFinalWinRate,
                                e.grandPrizeRewardAdjustedWinRate = t.data.grandPrizeRewardAdjustedWinRate,
                                e.grandPrizeTimeAdjustedWinRate = t.data.grandPrizeTimeAdjustedWinRate,
                                e.grandPrize = t.data.grandPrizes[0],
                                e.rewards = t.data.rewards.sort((function(e, t) {
                                        return e.isFeatured - t.isFeatured
                                    }
                                ))) : alert("Something went wrong."),
                                e.isLoading = !1
                        }
                    ))
                }
            }
        }
            , Xt = Qt
            , ea = Object(Y["a"])(Xt, Ut, Jt, !1, null, null, null)
            , ta = ea.exports
            , aa = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", [a("p", {
                staticClass: "text-2xl font-bold mb-8"
            }, [e._v("Reset Password")]), a("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [e.showAlert ? a("app-alert", {
                attrs: {
                    alert: e.alert
                }
            }) : e._e()], 1), a("ValidationObserver", {
                ref: "observer",
                attrs: {
                    tag: "form"
                },
                on: {
                    submit: function(t) {
                        return t.preventDefault(),
                            e.submit(t)
                    }
                },
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        t.invalid;
                        return [a("text-field", {
                            attrs: {
                                type: "password",
                                name: "password",
                                nameInErrorMessage: "Password",
                                vid: "password",
                                rules: "required|password",
                                label: "New Password",
                                tooltip: "Password must be at least 8 characters long and a combination of letters and numbers"
                            },
                            model: {
                                value: e.password,
                                callback: function(t) {
                                    e.password = t
                                },
                                expression: "password"
                            }
                        }), a("text-field", {
                            attrs: {
                                type: "password",
                                name: "passwordConfirmation",
                                nameInErrorMessage: "Password",
                                rules: "required|passwordConfirmation:password",
                                label: "Retype Password"
                            },
                            model: {
                                value: e.confirmpassword,
                                callback: function(t) {
                                    e.confirmpassword = t
                                },
                                expression: "confirmpassword"
                            }
                        }), a("button", {
                            staticClass: "button primary mt-1 bg-primary-500",
                            attrs: {
                                type: "submit",
                                disabled: e.isLoading
                            }
                        }, [a("transition", {
                            attrs: {
                                name: "fade",
                                mode: "out-in"
                            }
                        }, [e.isLoading ? a("app-loader") : a("span", {
                            staticClass: "block mx-auto"
                        }, [e._v("Set Password")])], 1)], 1), a("p", {
                            staticClass: "text-center mt-4 text-sm "
                        }, [e._v("\n      Go back to\n      "), a("router-link", {
                            staticClass: "underline",
                            attrs: {
                                to: "/login"
                            }
                        }, [e._v(" Log in.")])], 1)]
                    }
                }])
            })], 1)
        }
            , ra = [];
        function na(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    a.push.apply(a, r)
            }
            return a
        }
        function sa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? na(Object(a), !0).forEach((function(t) {
                        Object(o["a"])(e, t, a[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : na(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                ))
            }
            return e
        }
        var ia = {
            components: {
                ValidationObserver: H["a"],
                TextField: Q,
                AppAlert: fe,
                AppLoader: X["default"]
            },
            data: function() {
                return {
                    isLoading: !1,
                    emailAddress: "",
                    password: "",
                    showAlert: !1,
                    confirmpassword: "",
                    alert: {
                        isSuccessful: !1,
                        message: ""
                    }
                }
            },
            mounted: function() {
                window.scrollTo(0, 0)
            },
            methods: sa({}, Object(c["a"])("app/*"), {
                submit: function() {
                    var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                            var t, a, r = this;
                            return regeneratorRuntime.wrap((function(e) {
                                    while (1)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    this.$refs.observer.validate();
                                            case 2:
                                                t = e.sent,
                                                t && (this.isLoading = !0,
                                                    a = {
                                                        id: this.$store.get("app/config@campaignID"),
                                                        key: this.$route.query.key,
                                                        token: this.$route.query.token,
                                                        password: this.password,
                                                        confirmpassword: this.confirmpassword
                                                    },
                                                    this.resetPassword(a).then((function(e) {
                                                            if (r.isLoading = !1,
                                                            200 === e.id)
                                                                r.alert.isSuccessful = !0,
                                                                    r.alert.message = "Password successfully changed.",
                                                                    r.$router.push({
                                                                        path: "/login",
                                                                        name: "login",
                                                                        params: {
                                                                            alert: r.alert
                                                                        }
                                                                    }),
                                                                    r.$gtag.event("Reset Password", {
                                                                        "event-category": "Campaign",
                                                                        "event-label": "Success"
                                                                    });
                                                            else {
                                                                switch (r.alert.isSuccessful = !1,
                                                                    r.showAlert = !0,
                                                                    e.id) {
                                                                    case 4203:
                                                                        r.alert.message = "This reset password link has already expired.";
                                                                        break;
                                                                    default:
                                                                        r.alert.message = e.description;
                                                                        break
                                                                }
                                                                r.$gtag.event("Reset Password", {
                                                                    "event-category": "Campaign",
                                                                    "event-label": "Failed"
                                                                })
                                                            }
                                                        }
                                                    )));
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }),
            beforeRouteEnter: function(e, t, a) {
                a((function(e) {
                        e.$route.query.key && e.$route.query.token || e.$router.push("/login")
                    }
                ))
            }
        }
            , oa = ia
            , ca = Object(Y["a"])(oa, aa, ra, !1, null, null, null)
            , la = ca.exports
            , da = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", [a("h1", {
                staticClass: "font-bold text-2xl mb-8"
            }, [e._v("Forgot Password")]), a("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [e.showAlert ? a("app-alert", {
                attrs: {
                    alert: e.alert
                }
            }) : e._e()], 1), a("ValidationObserver", {
                ref: "observer",
                attrs: {
                    tag: "form"
                },
                on: {
                    submit: function(t) {
                        return t.preventDefault(),
                            e.submit(t)
                    }
                },
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        t.invalid;
                        return [a("text-field", {
                            attrs: {
                                type: "email",
                                name: "emailAddress",
                                nameInErrorMessage: "Email Address",
                                rules: "required|email",
                                label: "Email Address"
                            },
                            model: {
                                value: e.emailAddress,
                                callback: function(t) {
                                    e.emailAddress = t
                                },
                                expression: "emailAddress"
                            }
                        }), a("button", {
                            staticClass: "button primary mt-1 bg-primary-500",
                            attrs: {
                                type: "submit",
                                disabled: e.isLoading
                            }
                        }, [a("transition", {
                            attrs: {
                                name: "fade",
                                mode: "out-in"
                            }
                        }, [e.isLoading ? a("app-loader") : a("span", {
                            staticClass: "block mx-auto"
                        }, [e._v("Reset Password")])], 1)], 1), a("p", {
                            staticClass: "text-center mt-4 text-sm"
                        }, [e._v("\n      Go back to\n      "), a("router-link", {
                            staticClass: "border-b border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600",
                            attrs: {
                                to: "/login"
                            }
                        }, [e._v(" Log in.")])], 1)]
                    }
                }])
            })], 1)
        }
            , ua = [];
        function pa(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    a.push.apply(a, r)
            }
            return a
        }
        function fa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? pa(Object(a), !0).forEach((function(t) {
                        Object(o["a"])(e, t, a[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : pa(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                ))
            }
            return e
        }
        var ma = {
            components: {
                ValidationObserver: H["a"],
                TextField: Q,
                AppAlert: fe,
                AppLoader: X["default"]
            },
            data: function() {
                return {
                    emailAddress: "",
                    password: "",
                    isLoading: !1,
                    showAlert: !1,
                    alert: {
                        isSuccessful: !1,
                        message: ""
                    }
                }
            },
            computed: {
                campaignID: Object(c["c"])("app/config@campaignID")
            },
            mounted: function() {
                window.scrollTo(0, 0)
            },
            methods: fa({}, Object(c["a"])("app/*"), {
                submit: function() {
                    var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                            var t, a, r = this;
                            return regeneratorRuntime.wrap((function(e) {
                                    while (1)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    this.$refs.observer.validate();
                                            case 2:
                                                t = e.sent,
                                                t && (this.isLoading = !0,
                                                    a = {
                                                        emailaddress: this.emailAddress,
                                                        id: this.campaignID
                                                    },
                                                    this.inquireEmail(a).then((function(e) {
                                                            if (r.isLoading = !1,
                                                            200 === e.id)
                                                                r.alert.isSuccessful = !0,
                                                                    r.alert.message = "A password reset link has been sent to your email. Please check your email for the next step.",
                                                                    r.$router.push({
                                                                        path: "/login",
                                                                        name: "login",
                                                                        params: {
                                                                            alert: r.alert
                                                                        }
                                                                    }),
                                                                    r.$gtag.event("Forgot Password", {
                                                                        "event-category": "Campaign",
                                                                        "event-label": "Success"
                                                                    });
                                                            else {
                                                                switch (r.alert.isSuccessful = !1,
                                                                    e.id) {
                                                                    case 4103:
                                                                        r.alert.message = "Sorry, the email is invalid or has yet to be registered.";
                                                                        break;
                                                                    default:
                                                                        r.alert.message = e.description;
                                                                        break
                                                                }
                                                                r.$gtag.event("Forgot Password", {
                                                                    "event-category": "Campaign",
                                                                    "event-label": "Failed"
                                                                })
                                                            }
                                                            r.showAlert = !0
                                                        }
                                                    )));
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            })
        }
            , ha = ma
            , ga = Object(Y["a"])(ha, da, ua, !1, null, null, null)
            , ba = ga.exports
            , va = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", [e.isRegistrationStarted ? [e._m(0), a("router-link", {
                staticClass: "button bg-primary-500",
                attrs: {
                    to: "/register"
                }
            }, [e._v("Register")]), a("router-link", {
                staticClass: "button mt-4 border border-gray-chateau text-black bg-white",
                attrs: {
                    to: "/login"
                }
            }, [e._v("Log in")])] : [a("p", {
                staticClass: "bg-yellow-200 text-yellow-700 p-4 mb-2 rounded text-center"
            }, [e._v("\n      The registration for this promo has not yet started. Registration starts\n      on\n      "), a("span", {
                staticClass: "whitespace-no-wrap"
            }, [e._v(e._s(this.getFormattedLongDate(this.config.registrationStart)))])])]], 2)
        }
            , wa = [function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("p", {
                staticClass: "mb-8 text-center text-woodsmoke text-sm",
                attrs: {
                    id: "heading"
                }
            }, [e._v("\n      Register to join the\n      "), a("span", {
                staticClass: "font-bold"
            }, [e._v("Citi Merry Match Promo")]), e._v(" or log in to your\n      account.\n    ")])
        }
        ]
            , xa = (a("7f7f"),
                function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "text-center mb-12 text-base"
                    }, [a("terms-and-condition")], 1)
                }
        )
            , Ca = []
            , ya = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("p", {
                staticClass: "text-sm "
            }, [e._v("\n    Refer to promo Terms and Conditions for details.\n")])
        }
            , _a = []
            , ka = {}
            , Oa = ka
            , ja = Object(Y["a"])(Oa, ya, _a, !1, null, null, null)
            , La = ja.exports
            , Pa = {
            components: {
                TermsAndCondition: La
            }
        }
            , Sa = Pa
            , Ra = Object(Y["a"])(Sa, xa, Ca, !1, null, null, null)
            , Da = Ra.exports
            , za = {
            components: {
                AppHeading: Da
            },
            mixins: [me],
            computed: {
                config: Object(c["e"])("app/config"),
                uiSchema: Object(c["e"])("app/uiSchema"),
                isRegistrationStarted: Object(c["e"])("app/isRegistrationStarted")
            },
            data: function() {
                return {}
            },
            mounted: function() {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })
            },
            beforeRouteEnter: function(e, t, a) {
                a((function(e) {
                        e.$cookies.get("isAlreadyRegistered") && "login" !== t.name && e.isRegistrationStarted && e.$router.push("/login")
                    }
                ))
            }
        }
            , Ta = za
            , Ea = Object(Y["a"])(Ta, va, wa, !1, null, null, null)
            , Fa = Ea.exports
            , Ma = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "my-16 px-8 text-center"
            }, [a("h1", {
                staticClass: " text-2xl font-bold"
            }, [e._v("Page not found")]), a("router-link", {
                staticClass: "button bg-primary-500 mt-5",
                attrs: {
                    to: "/login"
                }
            }, [e._v("Go to Login")])], 1)
        }
            , Aa = []
            , $a = {}
            , Na = Object(Y["a"])($a, Ma, Aa, !1, null, null, null)
            , Ia = Na.exports;
        r["default"].use($["a"]);
        var Ha = [{
            path: "/register",
            name: "register",
            component: se,
            meta: {
                layout: "entry-layout"
            }
        }, {
            path: "/forgotpassword",
            name: "forgotPassword",
            component: ba,
            meta: {
                layout: "entry-layout"
            }
        }, {
            path: "/resetpassword",
            name: "resetPassword",
            component: la,
            meta: {
                layout: "entry-layout"
            }
        }, {
            path: "/landing-page",
            name: "landing-page",
            component: Fa,
            meta: {
                layout: "entry-layout"
            }
        }, {
            path: "/login",
            name: "login",
            component: xe,
            props: !0,
            meta: {
                layout: "entry-layout"
            }
        }, {
            path: "/",
            name: "home",
            component: Ht,
            props: !0,
            meta: {
                requiresAuth: !0,
                name: "Citi Merry Match Promo"
            }
        }, {
            path: "/game",
            name: "game",
            component: Bt,
            meta: {
                requiresAuth: !0,
                layout: "no-layout"
            }
        }, {
            path: "/game-data",
            name: "gameData",
            component: ta,
            meta: {
                layout: "horizontal-layout",
                requiresAuth: !0
            }
        }, {
            path: "*",
            layout: "entry-layout",
            component: Ia
        }]
            , Va = new $["a"]({
            routes: Ha
        });
        A.get("app/config@isAuthenticated") && A.set("app/isLoggedIn", !0),
            Va.beforeEach((function(e, t, a) {
                    e.matched.some((function(e) {
                            return e.meta.requiresAuth
                        }
                    )) ? A.get("app/isLoggedIn") ? a() : a({
                        path: "/login",
                        query: {
                            redirect: e.fullPath
                        }
                    }) : A.get("app/isLoggedIn") ? a("/") : a()
                }
            ));
        var Ga = Va
            , Za = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "min-h-screen relative overflow-hidden",
                attrs: {
                    id: "app"
                }
            }, [a("div", {
                staticClass: "mx-auto"
            }, [a(e.$route.meta.layout || "default-layout", {
                tag: "component"
            })], 1)])
        }
            , Wa = []
            , qa = {
            name: "app",
            mixins: [qe],
            data: function() {
                return {
                    serverOffSet: 0
                }
            },
            computed: {
                isRedemptionExpired: Object(c["e"])("app/isRedemptionExpired"),
                isRedemptionStarted: Object(c["e"])("app/isRedemptionStarted"),
                isRegistrationExpired: Object(c["e"])("app/isRegistrationExpired"),
                isRegistrationStarted: Object(c["e"])("app/isRegistrationStarted"),
                currentDate: Object(c["e"])("app/currentDate"),
                currentTime: Object(c["e"])("app/currentTime"),
                currentServerDateTime: Object(c["e"])("app/currentServerDateTime"),
                config: Object(c["e"])("app/config")
            },
            created: function() {
                var e = this
                    , t = new Date(this.config.redemptionExpiry)
                    , a = new Date(this.config.registrationExpiry)
                    , r = new Date(this.config.serverDateTime);
                this.isRedemptionExpired = r > t,
                this.isRedemptionExpired || this.countDown(this.config.serverDateTime, this.config.redemptionExpiry, (function() {
                        e.isRedemptionExpired = !0
                    }
                )),
                    this.isRegistrationExpired = r > a,
                this.isRegistrationExpired || this.countDown(this.config.serverDateTime, this.config.registrationExpiry, (function() {
                        e.isRegistrationExpired = !0
                    }
                ));
                var n = new Date(this.config.registrationStart);
                this.isRegistrationStarted = r >= n,
                this.isRegistrationStarted || this.countDown(this.config.serverDateTime, this.config.registrationStart, (function() {
                        e.isRegistrationStarted = !0
                    }
                ));
                var s = new Date(this.config.redemptionStart);
                this.isRedemptionStarted = r >= s,
                this.isRedemptionStarted || this.countDown(this.config.serverDateTime, this.config.redemptionStart, (function() {
                        e.isRedemptionStarted = !0
                    }
                )),
                    this.serverOffSet = new Date(this.config.serverDateTime).getTime() - (new Date).getTime();
                setInterval(this.updateTime, 1e3);
                this.updateTime()
            },
            methods: {
                updateTime: function() {
                    this.currentServerDateTime = new Date((new Date).getTime() + this.serverOffSet)
                }
            }
        }
            , Ba = qa
            , Ua = Object(Y["a"])(Ba, Za, Wa, !1, null, null, null)
            , Ja = Ua.exports
            , Ya = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "\n    relative\n    mx-auto\n    xs:rounded-2xl xs:border\n    border-link-water\n    xs:max-w-390px\n    rounded-b-4px\n    min-h-screen\n    sm:min-h-400px\n    overflow-hidden\n    bg-black-squeeze\n    xs:my-8\n  "
            }, [e._m(0), a("main", [a("router-view", {
                staticClass: "relative z-50 pt-14 px-8 pb-14 w-full"
            })], 1), a("the-footer")], 1)
        }
            , Ka = [function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", [a("img", {
                staticClass: "min-h-220px",
                attrs: {
                    src: "https://s3.us-east-1.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/Gen%20Usage%20Holiday%20Match.png",
                    alt: "cover"
                }
            })])
        }
        ]
            , Qa = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a(e.tag, {
                tag: "component"
            }, [e._t("default")], 2)
        }
            , Xa = []
            , er = a("bb45")
            , tr = a.n(er);
        function ar(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                ))),
                    a.push.apply(a, r)
            }
            return a
        }
        function rr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ar(Object(a), !0).forEach((function(t) {
                        Object(o["a"])(e, t, a[t])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ar(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                ))
            }
            return e
        }
        var nr = {
            name: "SmoothReflow",
            mixins: [tr.a],
            props: {
                tag: {
                    type: String,
                    default: "div"
                },
                options: Object
            },
            mounted: function() {
                this.$smoothReflow(rr({
                    transition: ".3s ease-in-out"
                }, this.options))
            }
        }
            , sr = nr
            , ir = Object(Y["a"])(sr, Qa, Xa, !1, null, null, null)
            , or = ir.exports
            , cr = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("footer", {
                staticClass: "px-8 pt-14 pb-12 text-xs text-gray-chateau bg-black-squeeze leading-5"
            }, [e._m(0), a("app-giftaway-badge", {
                staticClass: "mt-10 mb-4"
            })], 1)
        }
            , lr = [function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "mb-14",
                attrs: {
                    id: "terms"
                }
            }, [a("p", {
                staticClass: "mb-1"
            }, [e._v("\n       This product is sold by "), a("a", {
                staticClass: "underline",
                attrs: {
                    href: "https://www.unionbankph.com/",
                    target: "_blank"
                }
            }, [e._v("Union Bank of the Philippines")]), e._v(", using certain trademarks temporarily under license from "), a("a", {
                staticClass: "underline",
                attrs: {
                    href: "https://www.citibank.com.ph/",
                    target: "_blank"
                }
            }, [e._v("Citigroup Inc")]), e._v(". and related group entities.\n     ")]), a("p", {}, [e._v("\n       Terms and conditions apply. Per DTI Fair Trade Permit No. FTEB-157671, Series of 2022.\n     ")])])
        }
        ]
            , dr = {}
            , ur = dr
            , pr = Object(Y["a"])(ur, cr, lr, !1, null, null, null)
            , fr = pr.exports
            , mr = {
            components: {
                SmoothReflow: or,
                AppLoader: X["default"],
                TheFooter: fr
            },
            data: function() {
                return {
                    isLoggingOut: !1
                }
            },
            computed: {},
            mounted: function() {
                window.addEventListener("scroll", this.handleScroll)
            },
            methods: {
                logout: Object(c["a"])("app/logout"),
                onLogout: function() {
                    var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                            var t = this;
                            return regeneratorRuntime.wrap((function(e) {
                                    while (1)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                this.isLoggingOut = !0,
                                                    this.logout().then((function(e) {
                                                            0 === e.id && (t.$store.dispatch("app/resetAppState", !1),
                                                                t.$store.dispatch("transactions/resetTransactionsState", !1),
                                                                t.$router.push("/login")),
                                                                t.isLoggingOut = !1
                                                        }
                                                    ));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }
        }
            , hr = mr
            , gr = Object(Y["a"])(hr, Ya, Ka, !1, null, null, null)
            , br = gr.exports
            , vr = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "\n    relative\n    mx-auto\n    xs:rounded-2xl xs:border\n    border-link-water\n    xs:max-w-390px\n    rounded-b-4px\n    min-h-screen\n    sm:min-h-400px\n    overflow-hidden\n    xs:my-8\n    bg-white\n  "
            }, [a("main", [a("router-view", {
                staticClass: "relative z-50 w-full"
            })], 1)])
        }
            , wr = []
            , xr = {}
            , Cr = xr
            , yr = Object(Y["a"])(Cr, vr, wr, !1, null, null, null)
            , _r = yr.exports
            , kr = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "\n    relative\n    mx-auto\n    xs:rounded-md xs:border\n    border-link-water\n    rounded-b-4px\n    max-w-3xl\n    sm:min-h-400px\n    overflow-hidden\n    xs:my-8\n    bg-white\n  "
            }, [a("main", [a("router-view", {
                staticClass: "relative z-50 w-full"
            })], 1)])
        }
            , Or = []
            , jr = {}
            , Lr = jr
            , Pr = Object(Y["a"])(Lr, kr, Or, !1, null, null, null)
            , Sr = Pr.exports
            , Rr = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "\n    relative\n    mx-auto\n    xs:rounded-2xl xs:border\n    border-link-water\n    xs:max-w-390px\n    rounded-b-4px\n    min-h-screen\n    sm:min-h-400px\n    overflow-hidden\n    xs:my-8\n    bg-white\n  "
            }, [e._m(0), a("main", [a("keep-alive", [a("router-view", {
                staticClass: "relative z-50 w-full"
            })], 1)], 1), a("the-footer")], 1)
        }
            , Dr = [function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", {
                staticClass: "bg-black-squeeze"
            }, [a("div", {}, [a("img", {
                attrs: {
                    src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/inside-cover.png",
                    alt: "cover"
                }
            })])])
        }
        ]
            , zr = {
            components: {
                SmoothReflow: or,
                AppLoader: X["default"],
                TheFooter: fr
            },
            data: function() {
                return {
                    isShowed: !1,
                    isFooterVisible: !1,
                    isLoggingOut: !1
                }
            },
            computed: {},
            mounted: function() {
                window.addEventListener("scroll", this.handleScroll)
            },
            methods: {
                logout: Object(c["a"])("app/logout"),
                onLogout: function() {
                    var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                            var t = this;
                            return regeneratorRuntime.wrap((function(e) {
                                    while (1)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                this.isLoggingOut = !0,
                                                    this.logout().then((function(e) {
                                                            0 === e.id && (t.$store.dispatch("app/resetAppState", !1),
                                                                t.$store.dispatch("transactions/resetTransactionsState", !1),
                                                                t.$router.push("/login")),
                                                                t.isLoggingOut = !1
                                                        }
                                                    ));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, this)
                        }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }
        }
            , Tr = zr
            , Er = Object(Y["a"])(Tr, Rr, Dr, !1, null, null, null)
            , Fr = Er.exports
            , Mr = a("ad3d")
            , Ar = function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("div", [a("a", {
                staticClass: "flex justify-center",
                attrs: {
                    href: "https://giftaway.ph"
                }
            }, [a("svg", {
                attrs: {
                    width: "208",
                    height: "48",
                    viewBox: "0 0 208 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("rect", {
                attrs: {
                    width: "208",
                    height: "48",
                    rx: "10",
                    fill: "white"
                }
            }), a("rect", {
                attrs: {
                    x: "0.520261",
                    y: "0.520261",
                    width: "206.959",
                    height: "46.9595",
                    rx: "9.47974",
                    stroke: "black",
                    "stroke-opacity": "0.16",
                    "stroke-width": "1.04052"
                }
            }), a("path", {
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M84.1035 13.5148C84 13.7165 84 13.9805 84 14.5086L84 34.1144C84 34.9262 84.6315 35.3172 85.8991 34.6895C87.1667 34.0617 92.7875 31.3663 93.025 31.2551C93.2625 31.144 93.3417 31.1309 93.5 31.1309C93.6583 31.1309 93.7375 31.144 93.975 31.2551C94.2125 31.3663 99.8333 34.0617 101.101 34.6895C102.368 35.3172 103 34.9262 103 34.1144L103 14.5086C103 13.9805 103 13.7165 102.896 13.5148C102.805 13.3374 102.66 13.1932 102.481 13.1028C102.278 13 102.012 13 101.48 13H93.5H85.52C84.988 13 84.7219 13 84.5187 13.1028C84.34 13.1932 84.1946 13.3374 84.1035 13.5148ZM98.6806 20.4643C95.9507 23.0806 91.058 23.0806 88.3281 20.4643L86.9133 21.9183C90.4324 25.2911 96.5763 25.2911 100.095 21.9183L98.6806 20.4643Z",
                    fill: "black"
                }
            }), a("path", {
                attrs: {
                    d: "M123.667 22.6208V23.891C123.667 25.8147 123.058 27.3729 121.842 28.5655C120.625 29.7582 119.054 30.3545 117.128 30.3545C115.075 30.3545 113.371 29.6813 112.015 28.3347C110.672 26.9753 110 25.3209 110 23.3716C110 21.4095 110.665 19.7487 111.996 18.3893C113.339 17.0299 114.999 16.3502 116.976 16.3502C118.218 16.3502 119.352 16.6388 120.378 17.2159C121.405 17.7801 122.203 18.5368 122.773 19.4858L120.53 20.7939C120.214 20.2424 119.732 19.7936 119.086 19.4473C118.452 19.1011 117.721 18.8585 116.935 18.8585C115.668 18.8585 114.644 19.3511 113.821 20.1976C113.01 21.0312 112.652 22.1744 112.652 23.4569C112.652 24.7265 113.016 25.6929 113.84 26.5264C114.676 27.3472 115.771 27.8463 117.139 27.8463C118.153 27.8463 118.997 27.5332 119.656 27.0843C120.328 26.6226 120.784 25.9242 121.025 25.1291H116.733V22.6208H123.667Z",
                    fill: "black"
                }
            }), a("path", {
                attrs: {
                    d: "M125.414 30.3572V20.2859H127.92V30.3572H125.414Z",
                    fill: "black"
                }
            }), a("path", {
                attrs: {
                    d: "M125.627 18.566C125.921 18.8553 126.265 19 126.657 19C127.062 19 127.405 18.8553 127.687 18.566C127.981 18.2641 128.128 17.9119 128.128 17.5094C128.128 17.1069 127.981 16.7547 127.687 16.4528C127.405 16.1509 127.062 16 126.657 16C126.265 16 125.921 16.1509 125.627 16.4528C125.345 16.7547 125.204 17.1069 125.204 17.5094C125.204 17.9119 125.345 18.2641 125.627 18.566Z",
                    fill: "black"
                }
            }), a("path", {
                attrs: {
                    d: "M135.323 18.5727C133.861 18.5727 133.443 19.1086 133.443 20.1833V20.2819H135.323V22.8513H133.442V30.3572H130.937V22.8513H129.475L129.475 20.278H130.937V20.1788C130.937 18.7845 131.341 17.7262 132.097 17.0028C132.852 16.2794 133.443 16.0002 135.323 16.0002V18.5727Z",
                    fill: "black"
                }
            }), a("path", {
                attrs: {
                    d: "M142.71 22.8573H140.83V26.5001C140.83 26.8418 140.842 27.2779 141.039 27.4644C141.236 27.651 141.45 27.7595 141.77 27.7858C142.09 27.799 142.445 27.8121 142.919 27.7858V30.3572C140.517 30.3572 140.177 30.2468 139.473 29.7211C138.781 29.1954 138.325 28.1847 138.325 26.831V22.8573H136.444V20.2859H138.325V18.3579L140.83 17.2859V20.2859L142.71 20.2859V22.8573Z",
                    fill: "black"
                }
            }), a("path", {
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M148.871 30.3572C151.697 30.3572 153.988 28.0068 153.988 25.1073C153.988 22.2078 151.697 19.8574 148.871 19.8574C146.045 19.8574 143.754 22.2078 143.754 25.1073C143.754 28.0068 146.045 30.3572 148.871 30.3572ZM149.08 27.9998C150.637 27.9998 151.9 26.7047 151.9 25.107C151.9 23.5093 150.637 22.2142 149.08 22.2142C147.523 22.2142 146.26 23.5093 146.26 25.107C146.26 26.7047 147.523 27.9998 149.08 27.9998Z",
                    fill: "black"
                }
            }), a("path", {
                attrs: {
                    d: "M151.9 20.2856H154.406V30.357H151.9V20.2856Z",
                    fill: "black"
                }
            }), a("path", {
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M167.146 20.2858H169.652L166.717 30.3571H164.222L162.549 24.594L160.869 30.3579H158.374L155.45 20.2866H157.957L159.716 26.4704L161.298 20.2866H161.298L161.298 20.2858H163.804L165.564 26.4696L167.146 20.2858Z",
                    fill: "black"
                }
            }), a("path", {
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M174.978 30.3572C177.804 30.3572 180.095 28.0068 180.095 25.1073C180.095 22.2078 177.804 19.8574 174.978 19.8574C172.152 19.8574 169.861 22.2078 169.861 25.1073C169.861 28.0068 172.152 30.3572 174.978 30.3572ZM175.187 27.9998C176.744 27.9998 178.007 26.7047 178.007 25.107C178.007 23.5093 176.744 22.2142 175.187 22.2142C173.63 22.2142 172.368 23.5093 172.368 25.107C172.368 26.7047 173.63 27.9998 175.187 27.9998Z",
                    fill: "black"
                }
            }), a("path", {
                attrs: {
                    d: "M178.007 20.2856H180.513V30.357H178.007V20.2856Z",
                    fill: "black"
                }
            }), a("path", {
                attrs: {
                    d: "M189.389 20.2859H192L188.345 30.0689C187.823 31.4777 187.127 32.4951 186.256 33.1212C185.4 33.7604 184.148 34.0564 182.863 33.9912V31.6356C183.559 31.6486 184.288 31.5037 184.69 31.2037C185.105 30.9037 185.433 30.4211 185.674 29.7558L181.557 20.2859H184.171L186.996 26.9242L189.389 20.2859Z",
                    fill: "black"
                }
            }), a("path", {
                attrs: {
                    d: "M16.7639 27H17.9583V24.7721H19.2204C20.7432 24.7721 21.561 23.8577 21.561 22.5892C21.561 21.3304 20.7529 20.4064 19.2365 20.4064H16.7639V27ZM17.9583 23.7901V21.4045H19.053C19.948 21.4045 20.344 21.8874 20.344 22.5892C20.344 23.2911 19.948 23.7901 19.0594 23.7901H17.9583ZM28.4902 23.7032C28.4902 21.5719 27.1895 20.3163 25.4606 20.3163C23.7285 20.3163 22.4311 21.5719 22.4311 23.7032C22.4311 25.8313 23.7285 27.0901 25.4606 27.0901C27.1895 27.0901 28.4902 25.8345 28.4902 23.7032ZM27.2893 23.7032C27.2893 25.2035 26.536 26.018 25.4606 26.018C24.3885 26.018 23.6319 25.2035 23.6319 23.7032C23.6319 22.2029 24.3885 21.3884 25.4606 21.3884C26.536 21.3884 27.2893 22.2029 27.2893 23.7032ZM30.8389 27H32.0172L33.3404 22.3735H33.3919L34.712 27H35.8903L37.7512 20.4064H36.4666L35.2786 25.255H35.2206L33.9489 20.4064H32.7802L31.5117 25.2518H31.4506L30.2626 20.4064H28.978L30.8389 27ZM38.5794 27H42.8936V25.9987H39.7739V24.199H42.6457V23.1977H39.7739V21.4077H42.8678V20.4064H38.5794V27ZM44.0864 27H45.2809V24.5854H46.4978L47.7921 27H49.125L47.6987 24.3857C48.4746 24.0734 48.8835 23.4102 48.8835 22.5152C48.8835 21.2564 48.0722 20.4064 46.559 20.4064H44.0864V27ZM45.2809 23.5937V21.4045H46.3755C47.2673 21.4045 47.6665 21.8133 47.6665 22.5152C47.6665 23.2171 47.2673 23.5937 46.3819 23.5937H45.2809ZM49.983 27H54.2972V25.9987H51.1774V24.199H54.0492V23.1977H51.1774V21.4077H54.2714V20.4064H49.983V27ZM57.7243 27C59.7333 27 60.9246 25.7573 60.9246 23.6968C60.9246 21.6427 59.7333 20.4064 57.7694 20.4064H55.49V27H57.7243ZM56.6844 25.9665V21.4399H57.7018C59.0411 21.4399 59.7398 22.1868 59.7398 23.6968C59.7398 25.2132 59.0411 25.9665 57.6664 25.9665H56.6844ZM64.3083 27H66.9773C68.4872 27 69.2277 26.2305 69.2277 25.2035C69.2277 24.2054 68.5194 23.6195 67.8176 23.5841V23.5197C68.4615 23.3684 68.9702 22.9176 68.9702 22.116C68.9702 21.134 68.2619 20.4064 66.8324 20.4064H64.3083V27ZM65.5027 26.0019V24.0702H66.8195C67.5568 24.0702 68.014 24.521 68.014 25.1101C68.014 25.6349 67.6534 26.0019 66.7873 26.0019H65.5027ZM65.5027 23.2106V21.3916H66.7101C67.4119 21.3916 67.7757 21.7618 67.7757 22.2705C67.7757 22.85 67.3057 23.2106 66.6843 23.2106H65.5027ZM69.8161 20.4064L72.2146 24.5403V27H73.4059V24.5403L75.8044 20.4064H74.4554L72.8424 23.3233H72.7781L71.1651 20.4064H69.8161Z",
                    fill: "black"
                }
            })])]), e._m(0)])
        }
            , $r = [function() {
            var e = this
                , t = e.$createElement
                , a = e._self._c || t;
            return a("p", {
                staticClass: "mt-4 text-center text-xs text-gray-chateau"
            }, [e._v("eGift is a registered trademark of "), a("br"), e._v(" Giftaway © 2021 Giftaway Inc.")])
        }
        ]
            , Nr = {}
            , Ir = Object(Y["a"])(Nr, Ar, $r, !1, null, null, null)
            , Hr = Ir.exports;
        r["default"].component("smooth-reflow", or),
            r["default"].component("app-heading", Da),
            r["default"].component("entry-layout", br),
            r["default"].component("horizontal-layout", Sr),
            r["default"].component("no-layout", _r),
            r["default"].component("default-layout", Fr),
            r["default"].component("font-awesome-icon", Mr["a"]),
            r["default"].component("terms-and-condition", La),
            r["default"].component("app-giftaway-badge", Hr);
        var Vr = a("a584")
            , Gr = a("2b27")
            , Zr = a.n(Gr)
            , Wr = a("a4a1")
            , qr = a.n(Wr)
            , Br = (a("f6b9"),
            a("bd8c"))
            , Ur = a.n(Br);
        r["default"].use(Ur.a),
            r["default"].use(qr.a),
            r["default"].use(Zr.a),
            r["default"].use(Vr["a"], {
                config: {
                    id: f
                }
            }, Ga);
        var Jr = a("ecee")
            , Yr = a("b81f")
            , Kr = a("e018")
            , Qr = a("584e");
        Jr["c"].add(Qr["d"], Kr["b"], Kr["a"], Kr["c"], Kr["d"], Yr["d"], Yr["b"], Qr["b"], Yr["a"], Qr["c"], Kr["e"], Yr["c"], Qr["a"]);
        a("28a5");
        var Xr = a("7618");
        a("a481"),
            a("3b2b");
        !function(e, t, a) {
            function r(e) {
                var t = _.className
                    , a = y._config.classPrefix || "";
                if (k && (t = t.baseVal),
                    y._config.enableJSClass) {
                    var r = new RegExp("(^|\\s)" + a + "no-js(\\s|$)");
                    t = t.replace(r, "$1" + a + "js$2")
                }
                y._config.enableClasses && (t += " " + a + e.join(" " + a),
                    k ? _.className.baseVal = t : _.className = t)
            }
            function n(e, t) {
                return Object(Xr["a"])(e) === t
            }
            function s() {
                var e, t, a, r, s, i, o;
                for (var c in x)
                    if (x.hasOwnProperty(c)) {
                        if (e = [],
                            t = x[c],
                        t.name && (e.push(t.name.toLowerCase()),
                        t.options && t.options.aliases && t.options.aliases.length))
                            for (a = 0; a < t.options.aliases.length; a++)
                                e.push(t.options.aliases[a].toLowerCase());
                        for (r = n(t.fn, "function") ? t.fn() : t.fn,
                                 s = 0; s < e.length; s++)
                            i = e[s],
                                o = i.split("."),
                                1 === o.length ? y[o[0]] = r : (!y[o[0]] || y[o[0]]instanceof Boolean || (y[o[0]] = new Boolean(y[o[0]])),
                                    y[o[0]][o[1]] = r),
                                w.push((r ? "" : "no-") + o.join("-"))
                    }
            }
            function i(e, t) {
                return !!~("" + e).indexOf(t)
            }
            function o() {
                return "function" != typeof t.createElement ? t.createElement(arguments[0]) : k ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
            }
            function c(e) {
                return e.replace(/([a-z])-([a-z])/g, (function(e, t, a) {
                        return t + a.toUpperCase()
                    }
                )).replace(/^-/, "")
            }
            function l(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            }
            function d(e, t, a) {
                var r;
                for (var s in e)
                    if (e[s]in t)
                        return !1 === a ? e[s] : (r = t[e[s]],
                            n(r, "function") ? l(r, a || t) : r);
                return !1
            }
            function u(e) {
                return e.replace(/([A-Z])/g, (function(e, t) {
                        return "-" + t.toLowerCase()
                    }
                )).replace(/^ms-/, "-ms-")
            }
            function p(t, a, r) {
                var n;
                if ("getComputedStyle"in e) {
                    n = getComputedStyle.call(e, t, a);
                    var s = e.console;
                    if (null !== n)
                        r && (n = n.getPropertyValue(r));
                    else if (s) {
                        var i = s.error ? "error" : "log";
                        s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                    }
                } else
                    n = !a && t.currentStyle && t.currentStyle[r];
                return n
            }
            function f() {
                var e = t.body;
                return e || (e = o(k ? "svg" : "body"),
                    e.fake = !0),
                    e
            }
            function m(e, a, r, n) {
                var s, i, c, l, d = "modernizr", u = o("div"), p = f();
                if (parseInt(r, 10))
                    for (; r--; )
                        c = o("div"),
                            c.id = n ? n[r] : d + (r + 1),
                            u.appendChild(c);
                return s = o("style"),
                    s.type = "text/css",
                    s.id = "s" + d,
                    (p.fake ? p : u).appendChild(s),
                    p.appendChild(u),
                    s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)),
                    u.id = d,
                p.fake && (p.style.background = "",
                    p.style.overflow = "hidden",
                    l = _.style.overflow,
                    _.style.overflow = "hidden",
                    _.appendChild(p)),
                    i = a(u, e),
                    p.fake ? (p.parentNode.removeChild(p),
                        _.style.overflow = l,
                        _.offsetHeight) : u.parentNode.removeChild(u),
                    !!i
            }
            function h(t, r) {
                var n = t.length;
                if ("CSS"in e && "supports"in e.CSS) {
                    for (; n--; )
                        if (e.CSS.supports(u(t[n]), r))
                            return !0;
                    return !1
                }
                if ("CSSSupportsRule"in e) {
                    for (var s = []; n--; )
                        s.push("(" + u(t[n]) + ":" + r + ")");
                    return s = s.join(" or "),
                        m("@supports (" + s + ") { #modernizr { position: absolute; } }", (function(e) {
                                return "absolute" == p(e, null, "position")
                            }
                        ))
                }
                return a
            }
            function g(e, t, r, s) {
                function l() {
                    u && (delete S.style,
                        delete S.modElem)
                }
                if (s = !n(s, "undefined") && s,
                    !n(r, "undefined")) {
                    var d = h(e, r);
                    if (!n(d, "undefined"))
                        return d
                }
                for (var u, p, f, m, g, b = ["modernizr", "tspan", "samp"]; !S.style && b.length; )
                    u = !0,
                        S.modElem = o(b.shift()),
                        S.style = S.modElem.style;
                for (f = e.length,
                         p = 0; f > p; p++)
                    if (m = e[p],
                        g = S.style[m],
                    i(m, "-") && (m = c(m)),
                    S.style[m] !== a) {
                        if (s || n(r, "undefined"))
                            return l(),
                            "pfx" != t || m;
                        try {
                            S.style[m] = r
                        } catch (v) {}
                        if (S.style[m] != g)
                            return l(),
                            "pfx" != t || m
                    }
                return l(),
                    !1
            }
            function b(e, t, a, r, s) {
                var i = e.charAt(0).toUpperCase() + e.slice(1)
                    , o = (e + " " + j.join(i + " ") + i).split(" ");
                return n(t, "string") || n(t, "undefined") ? g(o, t, r, s) : (o = (e + " " + L.join(i + " ") + i).split(" "),
                    d(o, t, a))
            }
            function v(e, t, r) {
                return b(e, a, a, t, r)
            }
            var w = []
                , x = []
                , C = {
                _version: "3.6.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(e, t) {
                    var a = this;
                    setTimeout((function() {
                            t(a[e])
                        }
                    ), 0)
                },
                addTest: function(e, t, a) {
                    x.push({
                        name: e,
                        fn: t,
                        options: a
                    })
                },
                addAsyncTest: function(e) {
                    x.push({
                        name: null,
                        fn: e
                    })
                }
            }
                , y = function() {};
            y.prototype = C,
                y = new y;
            var _ = t.documentElement
                , k = "svg" === _.nodeName.toLowerCase()
                , O = "Moz O ms Webkit"
                , j = C._config.usePrefixes ? O.split(" ") : [];
            C._cssomPrefixes = j;
            var L = C._config.usePrefixes ? O.toLowerCase().split(" ") : [];
            C._domPrefixes = L;
            var P = {
                elem: o("modernizr")
            };
            y._q.push((function() {
                    delete P.elem
                }
            ));
            var S = {
                style: P.elem.style
            };
            y._q.unshift((function() {
                    delete S.style
                }
            )),
                C.testAllProps = b,
                C.testAllProps = v,
                y.addTest("flexbox", v("flexBasis", "1px", !0)),
                s(),
                r(w),
                delete C.addTest,
                delete C.addAsyncTest;
            for (var R = 0; R < y._q.length; R++)
                y._q[R]();
            e.Modernizr = y
        }(window, document);
        a("9aad"),
            a("7e79");
        a("1368").polyfill(),
            a("2e94"),
            r["default"].config.productionTip = !1,
            new r["default"]({
                store: A,
                router: Ga,
                render: function(e) {
                    return e(Ja)
                }
            }).$mount("#app")
    },
    "5a5d": function(e, t, a) {
        "use strict";
        var r = a("67f6")
            , n = a.n(r);
        n.a
    },
    "67f6": function(e, t, a) {},
    "7e79": function(e, t, a) {},
    "83f2": function(e, t) {},
    8409: function(e, t, a) {
        "use strict";
        var r = a("0f4f")
            , n = a.n(r);
        n.a
    },
    9623: function(e, t, a) {
        "use strict";
        var r = a("83f2")
            , n = a.n(r);
        t["default"] = n.a
    },
    "9aad": function(e, t, a) {},
    "9b48": function(e, t, a) {
        "use strict";
        var r = a("221e")
            , n = a.n(r);
        n.a
    },
    cccb: function(e, t, a) {
        "use strict";
        var r = a("d563")(function(e) {
                function t(t) {
                    for (var r, i, o = t[0], c = t[1], l = t[2], u = 0, p = []; u < o.length; u++)
                        i = o[u],
                        Object.prototype.hasOwnProperty.call(n, i) && n[i] && p.push(n[i][0]),
                            n[i] = 0;
                    for (r in c)
                        Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
                    d && d(t);
                    while (p.length)
                        p.shift()();
                    return s.push.apply(s, l || []),
                        a()
                }
                function a() {
                    for (var e, t = 0; t < s.length; t++) {
                        for (var a = s[t], r = !0, o = 1; o < a.length; o++) {
                            var c = a[o];
                            0 !== n[c] && (r = !1)
                        }
                        r && (s.splice(t--, 1),
                            e = i(i.s = a[0]))
                    }
                    return e
                }
                var r = {}
                    , n = {
                    app: 0
                }
                    , s = [];
                function i(t) {
                    if (r[t])
                        return r[t].exports;
                    var a = r[t] = {
                        i: t,
                        l: !1,
                        exports: {}
                    };
                    return e[t].call(a.exports, a, a.exports, i),
                        a.l = !0,
                        a.exports
                }
                i.m = e,
                    i.c = r,
                    i.d = function(e, t, a) {
                        i.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: a
                        })
                    }
                    ,
                    i.r = function(e) {
                        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }),
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                    }
                    ,
                    i.t = function(e, t) {
                        if (1 & t && (e = i(e)),
                        8 & t)
                            return e;
                        if (4 & t && "object" === typeof e && e && e.__esModule)
                            return e;
                        var a = Object.create(null);
                        if (i.r(a),
                            Object.defineProperty(a, "default", {
                                enumerable: !0,
                                value: e
                            }),
                        2 & t && "string" != typeof e)
                            for (var r in e)
                                i.d(a, r, function(t) {
                                    return e[t]
                                }
                                    .bind(null, r));
                        return a
                    }
                    ,
                    i.n = function(e) {
                        var t = e && e.__esModule ? function() {
                                    return e["default"]
                                }
                                : function() {
                                    return e
                                }
                        ;
                        return i.d(t, "a", t),
                            t
                    }
                    ,
                    i.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    ,
                    i.p = "/dist/client/citimerrymatch-q4/";
                var o = window["webpackJsonp"] = window["webpackJsonp"] || []
                    , c = o.push.bind(o);
                o.push = t,
                    o = o.slice();
                for (var l = 0; l < o.length; l++)
                    t(o[l]);
                var d = c;
                s.push([0, "chunk-vendors"]),
                    a()
            }
        )({
            0: function(e, t, a) {
                e.exports = a("56d7")
            },
            "06f7": function(e, t, a) {
                "use strict";
                var r = a("0b80")
                    , n = a.n(r);
                n.a
            },
            "0b80": function(e, t, a) {},
            "0f4f": function(e, t, a) {},
            "221e": function(e, t, a) {},
            "39a8": function(e, t, a) {},
            "403b": function(e, t, a) {
                "use strict";
                var r = function(e, t) {
                    var a = t._c;
                    return a("font-awesome-icon", {
                        staticClass: "inline-block mx-auto",
                        attrs: {
                            icon: "spinner",
                            spin: ""
                        }
                    })
                }
                    , n = [];
                a.d(t, "a", (function() {
                        return r
                    }
                )),
                    a.d(t, "b", (function() {
                            return n
                        }
                    ))
            },
            "413a": function(e, t, a) {
                "use strict";
                var r = a("e55c")
                    , n = a.n(r);
                n.a
            },
            "56d7": function(e, t, a) {
                "use strict";
                a.r(t);
                a("cadf"),
                    a("551c"),
                    a("f751"),
                    a("097d");
                var r = a("2b0e")
                    , n = a("2f62")
                    , s = (a("8e6e"),
                    a("456d"),
                    a("768b"))
                    , i = (a("ac6a"),
                    a("ffc1"),
                    a("96cf"),
                    a("3b8d"))
                    , o = a("bd86")
                    , c = a("7ffd")
                    , l = JSON.parse(document.getElementById("config").innerHTML)
                    , d = JSON.parse(l.settings.FormData)
                    , u = JSON.parse(l.settings.UISchema)
                    , p = l.user ? JSON.parse(l.user).dateRegistered : null
                    , f = "UA-41926346-1"
                    , m = (a("1c4c"),
                    a("5df3"),
                    a("f400"),
                    {
                        failed: {
                            id: 500,
                            description: "Something went wrong. Please try again later."
                        }
                    })
                    , h = function(e) {
                    if (!e.ok) {
                        switch (console.log(e.status),
                            e.status) {
                            case 403:
                            case 401:
                                store.dispatch("app/logout").then((function(e) {
                                        e.id
                                    }
                                ))
                        }
                        throw Error(e.statusText)
                    }
                    return e
                }
                    , g = function(e) {
                    return console.log(e),
                        m.failed
                }
                    , b = function(e) {
                    return {
                        method: "POST",
                        credentials: "include",
                        mode: "cors",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        accept: "/",
                        "accept-language": "en-US,en;q=0.9",
                        referrerPolicy: "no-referrer-when-downgrade",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(e)
                    }
                }
                    , v = function(e, t) {
                    var a = new Map(Array.from(e, (function(e) {
                            return [e[t], []]
                        }
                    )));
                    return e.forEach((function(e) {
                            return a.get(e[t]).push(e)
                        }
                    )),
                        Array.from(a.values())
                };
                function w(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }
                        ))),
                            a.push.apply(a, r)
                    }
                    return a
                }
                function x(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? w(Object(a), !0).forEach((function(t) {
                                Object(o["a"])(e, t, a[t])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : w(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }
                        ))
                    }
                    return e
                }
                var C = function() {
                    return {
                        config: l,
                        formSettings: d,
                        uiSchema: u,
                        subdomain: "",
                        emailAddress: "",
                        mobileNo: "",
                        firstName: "",
                        lastName: "",
                        cardNumber: "",
                        password: "",
                        voucherCode: "",
                        isLoggedIn: !1,
                        dateRegistered: p || "",
                        currentFeaturedPrize: null,
                        isRefreshGamePrizes: !1
                    }
                }
                    , y = function() {
                    return {
                        isRegistrationStarted: !1,
                        isRegistrationExpired: !1,
                        isRedemptionExpired: !1,
                        isRedemptionStarted: !1,
                        currentTime: "",
                        currentDate: "",
                        currentServerDateTime: ""
                    }
                }
                    , _ = x({}, y(), {}, C())
                    , k = c["d"].getters(_)
                    , O = x({}, c["d"].mutations(_), {
                    resetState: function(e) {
                        Object.assign(e, x({}, C(), {
                            isRegistrationStarted: e.isRegistrationStarted,
                            isRedemptionExpired: e.isRedemptionExpired,
                            isRegistrationExpired: e.isRegistrationExpired,
                            currentDate: e.currentDate,
                            currentTime: e.currentTime,
                            currentServerDateTime: e.currentServerDateTime
                        }))
                    }
                })
                    , j = {
                    login: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                                var r, n, s;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return t.commit,
                                                        r = "/api/citi/spend/login/",
                                                        n = b(a),
                                                        e.next = 5,
                                                        fetch(r, n).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).catch(g);
                                                case 5:
                                                    return s = e.sent,
                                                        e.abrupt("return", s);
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t, a) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    logout: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t) {
                                var a, r, n;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return t.commit,
                                                        a = "/api/account/logoff",
                                                        r = {
                                                            method: "GET",
                                                            credentials: "include",
                                                            mode: "cors",
                                                            "sec-fetch-mode": "cors",
                                                            "sec-fetch-site": "same-origin",
                                                            accept: "/",
                                                            "accept-language": "en-US,en;q=0.9",
                                                            referrerPolicy: "no-referrer-when-downgrade",
                                                            headers: {
                                                                "Content-Type": "application/json"
                                                            },
                                                            body: null
                                                        },
                                                        e.next = 5,
                                                        fetch(a, r).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).catch(g);
                                                case 5:
                                                    return n = e.sent,
                                                        e.abrupt("return", n);
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    inquire: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                                var r, n, s;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return t.commit,
                                                        r = "/api/citi/spend/v2/inquire",
                                                        n = {
                                                            method: "POST",
                                                            headers: {
                                                                "Content-Type": "application/json"
                                                            },
                                                            body: JSON.stringify(a)
                                                        },
                                                        e.next = 5,
                                                        fetch(r, n).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).catch(g);
                                                case 5:
                                                    return s = e.sent,
                                                        e.abrupt("return", s);
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t, a) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    register: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                                var r, n, s;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return t.commit,
                                                        r = "/api/citi/spend/register",
                                                        n = b(a),
                                                        e.next = 5,
                                                        fetch(r, n).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).catch(g);
                                                case 5:
                                                    return s = e.sent,
                                                        e.abrupt("return", s);
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t, a) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    inquireEmail: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                                var r, n, s;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return t.commit,
                                                        r = "/api/account/forgotpassword",
                                                        n = b(a),
                                                        e.next = 5,
                                                        fetch(r, n).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).catch(g);
                                                case 5:
                                                    return s = e.sent,
                                                        e.abrupt("return", s);
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t, a) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    loadGame: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                                var r, n, s;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return r = "/api/game/match/v2/play/".concat(a.id), //a.id =  "c7f9656f-83e7-4661-9358-0c87f8070a61"
                                                        n = b(a),
                                                        e.next = 4,
                                                        fetch(r, n).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).catch(g);
                                                case 4:
                                                    return s = e.sent,
                                                        e.abrupt("return", s);
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t, a) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    gameOver: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                                var r, n, s;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return r = "/api/game/match/gameover/".concat(a.id, "?token=").concat(encodeURIComponent(a.token)),
                                                        n = b(a),
                                                        e.next = 4,
                                                        fetch(r, n).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).catch(g);
                                                case 4:
                                                    return s = e.sent,
                                                        e.abrupt("return", s);
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t, a) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    gameData: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                                var r, n, i, o, c, l, d, u;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    for (r = "/api/game/match/v2/gamedata/".concat(a.id, "?"),
                                                             n = 0,
                                                             i = Object.entries(a); n < i.length; n++)
                                                        o = Object(s["a"])(i[n], 2),
                                                            c = o[0],
                                                            l = o[1],
                                                            r += "".concat(c, "=").concat(l, "&");
                                                    return d = {
                                                        method: "GET",
                                                        credentials: "include",
                                                        mode: "cors",
                                                        "sec-fetch-mode": "cors",
                                                        "sec-fetch-site": "same-origin",
                                                        accept: "/",
                                                        "accept-language": "en-US,en;q=0.9",
                                                        referrerPolicy: "no-referrer-when-downgrade",
                                                        headers: {
                                                            "Content-Type": "application/json"
                                                        },
                                                        body: null
                                                    },
                                                        e.next = 5,
                                                        fetch(r, d).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).catch(g);
                                                case 5:
                                                    return u = e.sent,
                                                        e.abrupt("return", u);
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t, a) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    resetPassword: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                                var r, n, s;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return t.commit,
                                                        r = "/api/account/resetpassword",
                                                        n = b(a),
                                                        e.next = 5,
                                                        fetch(r, n).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).catch(g);
                                                case 5:
                                                    return s = e.sent,
                                                        e.abrupt("return", s);
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t, a) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    resetAppState: function(e) {
                        var t = e.commit;
                        t("resetState")
                    }
                }
                    , L = {
                    namespaced: !0,
                    state: _,
                    actions: j,
                    mutations: O,
                    getters: k
                };
                a("55dd");
                function P(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }
                        ))),
                            a.push.apply(a, r)
                    }
                    return a
                }
                function S(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? P(Object(a), !0).forEach((function(t) {
                                Object(o["a"])(e, t, a[t])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : P(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }
                        ))
                    }
                    return e
                }
                var R = function() {
                    return {
                        transactions: [],
                        gamePrizes: [],
                        ticketsCount: 0,
                        totalTransactionsCount: 0,
                        totalTicketsCount: 0,
                        grandPrize: {}
                    }
                }
                    , D = R()
                    , z = {}
                    , T = S({}, c["d"].mutations(D), {
                    resetState: function(e) {
                        Object.assign(e, R())
                    }
                })
                    , E = {
                    getTransactions: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t) {
                                var a, r, n, s;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return a = t.rootState.app.config.campaignID,
                                                        r = "/api/citi/spend/transactions?id=" + a,
                                                        n = {
                                                            method: "GET",
                                                            credentials: "include",
                                                            mode: "cors",
                                                            "sec-fetch-mode": "cors",
                                                            "sec-fetch-site": "same-origin",
                                                            accept: "/",
                                                            "accept-language": "en-US,en;q=0.9",
                                                            referrerPolicy: "no-referrer-when-downgrade",
                                                            headers: {
                                                                "Content-Type": "application/json"
                                                            },
                                                            body: null
                                                        },
                                                        e.next = 5,
                                                        fetch(r, n).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).then((function(e) {
                                                                if (null !== e.transactions && e.transactions.length) {
                                                                    var a = e.transactions.filter((function(e) {
                                                                            return 0 !== e.tier
                                                                        }
                                                                    ))
                                                                        , r = v(a, "id");
                                                                    e.transactions.filter((function(e) {
                                                                            return 0 === e.tier
                                                                        }
                                                                    )).length;
                                                                    t.commit("SET_TRANSACTIONS", r),
                                                                        t.commit("SET_TOTAL_TRANSACTIONS_COUNT", e.transactions.length)
                                                                }
                                                                return e
                                                            }
                                                        )).catch(g);
                                                case 5:
                                                    return s = e.sent,
                                                        e.abrupt("return", s);
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    redeem: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                                var r, n, s;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return r = "/api/citi/spend/v3/redeem",
                                                        n = b(a),
                                                        e.next = 4,
                                                        fetch(r, n).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).catch(g);
                                                case 4:
                                                    return s = e.sent,
                                                        e.abrupt("return", s);
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t, a) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    getPrizes: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                                var r, n, s;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return r = "/api/citi/spend/rewards?id=".concat(a.id),
                                                        n = {
                                                            method: "GET",
                                                            credentials: "include",
                                                            mode: "cors",
                                                            "sec-fetch-mode": "cors",
                                                            "sec-fetch-site": "same-origin",
                                                            accept: "/",
                                                            "accept-language": "en-US,en;q=0.9",
                                                            referrerPolicy: "no-referrer-when-downgrade",
                                                            headers: {
                                                                "Content-Type": "application/json"
                                                            },
                                                            body: null
                                                        },
                                                        e.next = 4,
                                                        fetch(r, n).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).then((function(e) {
                                                                return null !== e.data && e.data.length && (e.data = e.data.sort((function(e, t) {
                                                                        return new Date(t.orderDateTime) - new Date(e.orderDateTime)
                                                                    }
                                                                )),
                                                                    t.commit("SET_GAME_PRIZES", e.data)),
                                                                    e
                                                            }
                                                        )).catch(g);
                                                case 4:
                                                    return s = e.sent,
                                                        e.abrupt("return", s);
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t, a) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    resend: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                                var r, n, s;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return r = "/api/citi/spend/resendgift",
                                                        n = b(a),
                                                        e.next = 4,
                                                        fetch(r, n).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).catch(g);
                                                case 4:
                                                    return s = e.sent,
                                                        e.abrupt("return", s);
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t, a) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    getTickets: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                                var r, n, s;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return r = "/api/citi/spend/tickets?id=" + a.id,
                                                        n = {
                                                            method: "GET",
                                                            credentials: "include",
                                                            mode: "cors",
                                                            "sec-fetch-mode": "cors",
                                                            "sec-fetch-site": "same-origin",
                                                            accept: "/",
                                                            "accept-language": "en-US,en;q=0.9",
                                                            referrerPolicy: "no-referrer-when-downgrade",
                                                            headers: {
                                                                "Content-Type": "application/json"
                                                            },
                                                            body: null
                                                        },
                                                        e.next = 4,
                                                        fetch(r, n).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).catch(g);
                                                case 4:
                                                    return s = e.sent,
                                                        e.abrupt("return", s);
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t, a) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    getGrandPrize: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                                var r, n, s;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return r = "/api/game/match/grandprize/" + a.id,
                                                        n = {
                                                            method: "GET",
                                                            credentials: "include",
                                                            mode: "cors",
                                                            "sec-fetch-mode": "cors",
                                                            "sec-fetch-site": "same-origin",
                                                            accept: "/",
                                                            "accept-language": "en-US,en;q=0.9",
                                                            referrerPolicy: "no-referrer-when-downgrade",
                                                            headers: {
                                                                "Content-Type": "application/json"
                                                            },
                                                            body: null
                                                        },
                                                        e.next = 4,
                                                        fetch(r, n).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).catch(g);
                                                case 4:
                                                    return s = e.sent,
                                                        e.abrupt("return", s);
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t, a) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    claimPrize: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                                var r, n, s;
                                return regeneratorRuntime.wrap((function(e) {
                                        while (1)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return r = "/api/citi/spend/claim?id=".concat(a.id, "&token=").concat(encodeURIComponent(a.token)),
                                                        n = b(a),
                                                        e.next = 4,
                                                        fetch(r, n).then(h).then((function(e) {
                                                                return e.json()
                                                            }
                                                        )).catch(g);
                                                case 4:
                                                    return s = e.sent,
                                                        e.abrupt("return", s);
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        function t(t, a) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    resetTransactionsState: function(e) {
                        var t = e.commit;
                        t("resetState")
                    }
                }
                    , F = {
                    namespaced: !0,
                    state: D,
                    getters: z,
                    mutations: T,
                    actions: E
                };
                r["default"].use(n["a"]);
                var M = new n["a"].Store({
                    plugins: [c["b"].plugin],
                    modules: {
                        app: L,
                        transactions: F
                    }
                })
                    , A = M
                    , $ = a("8c4f")
                    , N = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        attrs: {
                            id: "reg-container"
                        }
                    }, [e.isRegistrationExpired ? a("div", {
                        staticClass: "mt-8 text-center"
                    }, [a("p", {
                        staticClass: "bg-red-200 text-red-700 p-4 mb-2 rounded text-center"
                    }, [e._v("\n      The registration period for this promotion has ended.\n    ")]), a("p", {
                        staticClass: "mb-6"
                    }, [a("terms-and-condition")], 1), a("p", {
                        staticClass: "text-center"
                    }, [e._v("\n      Go to\n      "), a("router-link", {
                        staticClass: "\n          border-b\n          text-primary-500\n          border-primary-500\n          hover:border-primary-600 hover:text-primary-600\n        ",
                        attrs: {
                            to: "/login"
                        }
                    }, [e._v("Login.")])], 1)]) : [e._m(0), e.isSuccessful ? a("div", {
                        key: "success",
                        staticClass: "flex flex-col items-center justify-center text-center"
                    }, [a("img", {
                        attrs: {
                            src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/check-icon.png",
                            height: "88",
                            width: "88",
                            alt: ""
                        }
                    }), a("span", {
                        staticClass: "mt-4 block text-xl font-bold"
                    }, [e._v("Registration Successful!")]), a("p", {
                        staticClass: "mt-4 text-sm leading-7"
                    }, [e._v("\n        You have successfully registered for the Citi Merry Match Promo. \n      ")]), e._m(1), a("button", {
                        staticClass: "\n          button\n          secondary\n          mt-10\n          border border-gray-chateau\n          bg-white\n          text-black\n        ",
                        on: {
                            click: function(t) {
                                return e.$router.push("/login")
                            }
                        }
                    }, [a("span", {
                        key: "1",
                        staticClass: "block mx-auto"
                    }, [e._v("Log In")])])]) : a("div", {
                        key: "registration"
                    }, [a("h2", {
                        staticClass: "mb-8 font-bold text-center text-xl text-tertiary-500"
                    }, [e._v("\n        Registration\n      ")]), e.errorMessage ? a("div", {
                        staticClass: "bg-red-200 text-red-700 p-4 mb-8 rounded text-sm"
                    }, [a("p", [e._v(e._s(e.errorMessage))])]) : e._e(), a("ValidationObserver", {
                        ref: "observer",
                        attrs: {
                            tag: "form"
                        },
                        on: {
                            submit: function(t) {
                                return t.preventDefault(),
                                    e.submit()
                            }
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                t.invalid,
                                    t.errors;
                                return [a("text-field", {
                                    attrs: {
                                        type: "text",
                                        name: "vouchercode",
                                        nameInErrorMessage: "Registration code",
                                        rules: "required",
                                        label: "Registration Code",
                                        tooltip: ""
                                    },
                                    model: {
                                        value: e.voucherCode,
                                        callback: function(t) {
                                            e.voucherCode = "string" === typeof t ? t.trim() : t
                                        },
                                        expression: "voucherCode"
                                    }
                                }), a("text-field", {
                                    attrs: {
                                        type: "tel",
                                        name: "cardNumber",
                                        rules: "required|lastSixDigits",
                                        label: "Last 6 Digits of your credit card",
                                        nameInErrorMessage: "Last 6 Digits of your credit card"
                                    },
                                    model: {
                                        value: e.cardNumber,
                                        callback: function(t) {
                                            e.cardNumber = "string" === typeof t ? t.trim() : t
                                        },
                                        expression: "cardNumber"
                                    }
                                }), a("text-field", {
                                    attrs: {
                                        type: "text",
                                        name: "firstname",
                                        nameInErrorMessage: "First name",
                                        label: "First Name",
                                        rules: "required"
                                    },
                                    model: {
                                        value: e.firstName,
                                        callback: function(t) {
                                            e.firstName = "string" === typeof t ? t.trim() : t
                                        },
                                        expression: "firstName"
                                    }
                                }), a("text-field", {
                                    attrs: {
                                        type: "text",
                                        name: "lastName",
                                        nameInErrorMessage: "Last name",
                                        label: "Last Name",
                                        rules: "required"
                                    },
                                    model: {
                                        value: e.lastName,
                                        callback: function(t) {
                                            e.lastName = "string" === typeof t ? t.trim() : t
                                        },
                                        expression: "lastName"
                                    }
                                }), a("text-field", {
                                    attrs: {
                                        type: "email",
                                        name: "emailAddress",
                                        nameInErrorMessage: "Email address",
                                        rules: "required|email",
                                        label: "Email Address",
                                        vid: "emailAddress"
                                    },
                                    model: {
                                        value: e.emailAddress,
                                        callback: function(t) {
                                            e.emailAddress = "string" === typeof t ? t.trim() : t
                                        },
                                        expression: "emailAddress"
                                    }
                                }), a("smooth-reflow", [a("text-field", {
                                    directives: [{
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.emailAddress,
                                        expression: "emailAddress"
                                    }],
                                    attrs: {
                                        type: "text",
                                        name: "emailAddressConfirmation",
                                        rules: "required|emailAddressConfirmation:emailAddress",
                                        label: "Retype Email Address",
                                        nameInErrorMessage: "Email address",
                                        isNoCopyPaste: !0
                                    },
                                    model: {
                                        value: e.emailAddressConfirmation,
                                        callback: function(t) {
                                            e.emailAddressConfirmation = "string" === typeof t ? t.trim() : t
                                        },
                                        expression: "emailAddressConfirmation"
                                    }
                                })], 1), a("text-field", {
                                    attrs: {
                                        type: "tel",
                                        name: "mobileNo",
                                        vid: "mobileNo",
                                        rules: "required",
                                        label: "Mobile Number",
                                        nameInErrorMessage: "Mobile number",
                                        pattern: "^(09|\\+639)\\d{9}$"
                                    },
                                    model: {
                                        value: e.mobileNo,
                                        callback: function(t) {
                                            e.mobileNo = "string" === typeof t ? t.trim() : t
                                        },
                                        expression: "mobileNo"
                                    }
                                }), a("smooth-reflow", [a("text-field", {
                                    directives: [{
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.mobileNo,
                                        expression: "mobileNo"
                                    }],
                                    attrs: {
                                        type: "tel",
                                        name: "mobileNoConfirmation",
                                        rules: "required|mobileNoConfirmation:mobileNo",
                                        label: "Retype Mobile Number",
                                        nameInErrorMessage: "Mobile number",
                                        isNoCopyPaste: !0
                                    },
                                    model: {
                                        value: e.mobileNoConfirmation,
                                        callback: function(t) {
                                            e.mobileNoConfirmation = "string" === typeof t ? t.trim() : t
                                        },
                                        expression: "mobileNoConfirmation"
                                    }
                                })], 1), a("text-field", {
                                    attrs: {
                                        type: "password",
                                        name: "password",
                                        vid: "password",
                                        rules: "required|password",
                                        label: "Password",
                                        nameInErrorMessage: "Password",
                                        tooltip: "Password must be at least 8 characters long and a combination of letters and numbers"
                                    },
                                    model: {
                                        value: e.password,
                                        callback: function(t) {
                                            e.password = "string" === typeof t ? t.trim() : t
                                        },
                                        expression: "password"
                                    }
                                }), a("smooth-reflow", [a("text-field", {
                                    directives: [{
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.password,
                                        expression: "password"
                                    }],
                                    attrs: {
                                        type: "password",
                                        name: "passwordConfirmation",
                                        rules: "required|passwordConfirmation:password",
                                        label: "Retype Password",
                                        nameInErrorMessage: "Password confirmation"
                                    },
                                    model: {
                                        value: e.passwordConfirmation,
                                        callback: function(t) {
                                            e.passwordConfirmation = "string" === typeof t ? t.trim() : t
                                        },
                                        expression: "passwordConfirmation"
                                    }
                                })], 1), a("button", {
                                    staticClass: "button primary mt-5 bg-primary-500",
                                    attrs: {
                                        type: "submit",
                                        disabled: e.isLoading
                                    }
                                }, [e.isLoading ? a("app-loader") : a("span", {
                                    staticClass: "block mx-auto"
                                }, [e._v("Register")])], 1), a("p", {
                                    staticClass: "text-center mt-4 text-sm"
                                }, [e._v("\n          Already registered?\n          "), a("router-link", {
                                    staticClass: "\n              border-b\n              text-primary-500 \n              border-primary-500\n              hover:border-primary-600 hover:text-primary-600\n            ",
                                    attrs: {
                                        to: "/login"
                                    }
                                }, [e._v("Log in here.")])], 1)]
                            }
                        }], null, !1, 3552600690)
                    })], 1)]], 2)
                }
                    , I = [function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("p", {
                        staticClass: "mb-8 text-center text-woodsmoke text-sm",
                        attrs: {
                            id: "heading"
                        }
                    }, [e._v("\n      Register to join the \n      "), a("span", {
                        staticClass: "font-bold"
                    }, [e._v("Citi Merry Match Promo")])])
                }
                    , function() {
                        var e = this
                            , t = e.$createElement
                            , a = e._self._c || t;
                        return a("div", {
                            staticClass: "mt-12"
                        }, [a("p", {
                            staticClass: "\n            rounded-full\n            bg-primary-500\n            py-2\n            px-4\n            text-center\n            font-bold\n            text-white text-sm\n          "
                        }, [e._v("\n          Citi Merry Match\n        ")]), a("ul", {
                            staticClass: "\n            mt-6\n            ml-4\n            list-disc\n            font-normal\n            text-left text-xs text-charade\n            leading-7\n          "
                        }, [a("li", [e._v("\n            Start earning Playcodes by using your Citi credit card from December 17, 2022 to March 12, 2023. Earn (1) Playcode for every qualified local or forex straight retail purchase, including bills payment transactions, Citi PayLite NOW, and Citi PayAll. Plus, get 10 bonus Playcodes for every accumulated spend of P25,000! Earn up to 80 bonus Playcodes. Please refer to the Terms and Conditions for full details of qualified transactions. \n          ")]), a("li", {
                            staticClass: "mt-3"
                        }, [e._v("\n            Playcodes for the Citi Merry Match Promo will be uploaded to your account starting December 29, 2022. You may refer to the Terms and Conditions for the schedule of Playcode upload. Redemption Period is until May 12, 2023. \n          ")])]), a("p", {
                            staticClass: "mt-8"
                        }, [a("a", {
                            staticClass: "\n              text-sm\n              inline-block\n              border-b border-trout\n              text-trout\n              leading-5\n            ",
                            attrs: {
                                href: "http://www.citibank.com.ph/mm",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }
                        }, [e._v("Terms and conditions apply")]), e._v(".\n        ")])])
                    }
                ]
                    , H = a("7bb1")
                    , V = a("4c93");
                function G(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }
                        ))),
                            a.push.apply(a, r)
                    }
                    return a
                }
                function Z(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? G(Object(a), !0).forEach((function(t) {
                                Object(o["a"])(e, t, a[t])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : G(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }
                        ))
                    }
                    return e
                }
                Object(H["c"])("required", Z({}, V["e"], {
                    message: " {_field_} is required"
                })),
                    Object(H["c"])("min", Z({}, V["c"], {
                        params: ["min", ""],
                        message: "{_field_} must be atleast {min} characters long"
                    })),
                    Object(H["c"])("lastSixDigits", {
                        validate: function(e) {
                            return !isNaN(e) && 6 == e.length
                        },
                        message: "{_field_} is not valid"
                    }),
                    Object(H["c"])("email", Z({}, V["b"], {
                        message: "{_field_} is not valid"
                    })),
                    Object(H["c"])("digits", Z({}, V["a"], {
                        message: "{_field_} is not valid"
                    })),
                    Object(H["c"])("regex", Z({}, V["d"], {
                        message: "{_field_} is not valid"
                    })),
                    Object(H["c"])("password", {
                        validate: function(e) {
                            return e.length >= 8
                        },
                        message: "Password must be at least 8 characters long and a combination of letters and numbers"
                    }),
                    Object(H["c"])("mobileNoConfirmation", {
                        validate: function(e, t) {
                            var a = t.other;
                            return e === a
                        },
                        message: "Mobile number does not match",
                        params: [{
                            name: "other",
                            isTarget: !0
                        }]
                    }),
                    Object(H["c"])("passwordConfirmation", {
                        validate: function(e, t) {
                            var a = t.other;
                            return e === a
                        },
                        message: "Password does not match",
                        params: [{
                            name: "other",
                            isTarget: !0
                        }]
                    }),
                    Object(H["c"])("emailAddressConfirmation", {
                        validate: function(e, t) {
                            var a = t.other;
                            return e === a
                        },
                        message: "Email does not match",
                        params: [{
                            name: "other",
                            isTarget: !0
                        }]
                    }),
                    Object(H["c"])("passwordConfirmation", {
                        validate: function(e, t) {
                            var a = t.other;
                            return e === a
                        },
                        message: "Password does not match",
                        params: [{
                            name: "other",
                            isTarget: !0
                        }]
                    });
                var W = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("ValidationProvider", {
                        staticClass: "mb-4",
                        attrs: {
                            rules: e.rules,
                            name: e.nameInErrorMessage,
                            mode: "lazy",
                            vid: e.vid,
                            tag: "div"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                var r = t.errors;
                                t.failedRules;
                                return [a("label", {
                                    staticClass: "block mb-1  text-sm float-left font-normal "
                                }, [e._v(e._s(e.label))]), e.tooltip ? a("span", {
                                    staticClass: "tooltip relative z-10 block text-center font-bold float-right w-4 h-4 rounded-full text-xs bg-tertiary-500 text-white  focus:outline-none",
                                    attrs: {
                                        "data-tippy-content": e.tooltip
                                    }
                                }, [e._v("?")]) : e._e(), a("div", {
                                    staticClass: "relative"
                                }, [a("input", e._b({
                                    directives: [{
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value: e.innerValue,
                                        expression: "innerValue",
                                        modifiers: {
                                            trim: !0
                                        }
                                    }],
                                    ref: e.name,
                                    staticClass: "rounded-md block px-4 text-black border border-iron w-full h-12 font-medium text-base bg-white focus:outline-none shadow-inset-1 focus:border-white  focus:shadow-outline-blue transition ease-in duration-75",
                                    class: {
                                        "focus:shadow-outline-red shadow-outline-red": r[0]
                                    },
                                    attrs: {
                                        type: e.type,
                                        name: e.name,
                                        pattern: e.pattern
                                    },
                                    domProps: {
                                        value: e.innerValue
                                    },
                                    on: {
                                        paste: function(t) {
                                            return e.disableCopyPaste(t)
                                        },
                                        input: function(t) {
                                            t.target.composing || (e.innerValue = t.target.value.trim())
                                        },
                                        blur: function(t) {
                                            return e.$forceUpdate()
                                        }
                                    }
                                }, "input", e.$attrs, !1))]), a("smooth-reflow", [r[0] ? a("span", {
                                    staticClass: "text-xs relative  text-red-500 py-1 ",
                                    staticStyle: {
                                        top: "-1px"
                                    }
                                }, [e._v(e._s(r[0]))]) : e._e()])]
                            }
                        }])
                    })
                }
                    , q = []
                    , B = a("7811")
                    , U = {
                    name: "TextField",
                    components: {
                        ValidationProvider: H["b"]
                    },
                    props: ["label", "name", "nameInErrorMessage", "type", "placeholder", "value", "rules", "tooltip", "pattern", "vid", "isNoCopyPaste"],
                    event: "input",
                    data: function() {
                        return {
                            isActive: !1,
                            innerValue: ""
                        }
                    },
                    mounted: function() {
                        Object(B["a"])(".tooltip", {
                            animation: "shift-away"
                        })
                    },
                    computed: {},
                    watch: {
                        innerValue: function(e) {
                            this.$emit("input", e)
                        }
                    },
                    methods: {
                        disableCopyPaste: function(e) {
                            if (this.isNoCopyPaste)
                                return e.preventDefault(),
                                    !1
                        }
                    }
                }
                    , J = U
                    , Y = (a("8409"),
                    a("2877"))
                    , K = Object(Y["a"])(J, W, q, !1, null, "c0ab7030", null)
                    , Q = K.exports
                    , X = a("d2ca");
                function ee(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }
                        ))),
                            a.push.apply(a, r)
                    }
                    return a
                }
                function te(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ee(Object(a), !0).forEach((function(t) {
                                Object(o["a"])(e, t, a[t])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ee(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }
                        ))
                    }
                    return e
                }
                var ae = {
                    components: {
                        ValidationObserver: H["a"],
                        ValidationProvider: H["b"],
                        TextField: Q,
                        AppLoader: X["default"]
                    },
                    computed: {
                        cardNumber: Object(c["e"])("app/cardNumber"),
                        voucherCode: Object(c["e"])("app/voucherCode"),
                        termsIdentifier: Object(c["e"])("app/termsIdentifier"),
                        isRegistrationExpired: Object(c["e"])("app/isRegistrationExpired"),
                        isRegistrationStarted: Object(c["e"])("app/isRegistrationStarted")
                    },
                    watch: {
                        isRegistrationExpired: {
                            handler: function(e, t) {
                                e && (document.getElementById("heading").style.display = "none")
                            },
                            immediate: !0
                        }
                    },
                    data: function() {
                        return {
                            errorMessage: "",
                            isLoading: !1,
                            mobileNoConfirmation: "",
                            emailAddressConfirmation: "",
                            passwordConfirmation: "",
                            emailAddress: "",
                            mobileNo: "",
                            firstName: "",
                            lastName: "",
                            password: "",
                            isCheckedTerms: !1,
                            isSuccessful: !1
                        }
                    },
                    mounted: function() {
                        this.isRegistrationStarted || this.$router.push("/landing-page")
                    },
                    methods: te({}, Object(c["a"])("app/*"), {
                        submit: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                                    var t, a, r = this;
                                    return regeneratorRuntime.wrap((function(e) {
                                            while (1)
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                            this.$refs.observer.validate();
                                                    case 2:
                                                        t = e.sent,
                                                        t && (this.isLoading = !0,
                                                            this.isSuccessful = !1,
                                                            a = {
                                                                emailAddress: this.emailAddress,
                                                                mobileNo: this.mobileNo,
                                                                firstName: this.firstName,
                                                                lastName: this.lastName,
                                                                cardNumber: this.cardNumber,
                                                                password: this.password,
                                                                voucherCode: this.voucherCode,
                                                                id: this.$store.get("app/config@campaignID")
                                                            },
                                                            this.register(a).then((function(e) {
                                                                    if (r.isLoading = !1,
                                                                    4260 === e.id)
                                                                        r.isSuccessful = !0,
                                                                            document.getElementById("heading").style.display = "none",
                                                                            r.$cookies.set("isAlreadyRegistered", !0, 5184e3),
                                                                            r.$gtag.event("Registration", {
                                                                                "event-category": "Campaign",
                                                                                "event-label": "Success"
                                                                            });
                                                                    else {
                                                                        switch (e.id) {
                                                                            case 44:
                                                                                r.errorMessage = "The registration code has already been used before or you have been pre-registered using the same credentials. Please use a different registration code or check promo terms and conditions regarding pre-registration.";
                                                                                break;
                                                                            case 45:
                                                                                r.errorMessage = "Invalid registration code or last 6 digits. Please correct and try again.";
                                                                                break;
                                                                            case 4249:
                                                                                r.errorMessage = "Invalid registration code or last 6 digits. Please correct and try again.";
                                                                                break;
                                                                            case 4253:
                                                                                r.errorMessage = "This email address has already been registered before or you have been pre-registered using the same credentials. Please use another email address or check promo terms and conditions regarding pre-registration.";
                                                                                break;
                                                                            default:
                                                                                r.errorMessage = e.description;
                                                                                break
                                                                        }
                                                                        r.$gtag.event("Registration", {
                                                                            "event-category": "Campaign",
                                                                            "event-label": "Failed"
                                                                        })
                                                                    }
                                                                    document.getElementById("reg-container").scrollIntoView({
                                                                        behavior: "smooth"
                                                                    })
                                                                }
                                                            )));
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e, this)
                                }
                            )));
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        goBack: function() {
                            this.$store.set("app/isValidRegistrationCode", !1)
                        }
                    })
                }
                    , re = ae
                    , ne = Object(Y["a"])(re, N, I, !1, null, "34308a7e", null)
                    , se = ne.exports
                    , ie = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", [a("smooth-reflow", [e.isRedemptionStarted ? e.isRedemptionExpired ? [a("div", {
                        staticClass: "mt-8 text-center"
                    }, [a("p", {
                        staticClass: "bg-red-200 text-red-700 p-4 rounded"
                    }, [e._v("\n          The redemption period for this promotion has ended.\n        ")]), a("terms-and-condition", {
                        staticClass: "mt-4 block text-center"
                    })], 1)] : [a("p", {
                        staticClass: "mb-8 text-center text-woodsmoke text-sm",
                        attrs: {
                            id: "heading"
                        }
                    }, [e._v("\n        Check your progress on the\n        "), a("span", {
                        staticClass: "font-bold"
                    }, [e._v("Citi Merry Match Promo")])]), a("h2", {
                        staticClass: "mb-8 font-bold text-center text-xl text-tertiary-500"
                    }, [e._v("\n        Login\n      ")]), e.errorMessage ? a("div", {
                        staticClass: "bg-red-200 text-red-700 p-4 mb-8 rounded text-sm"
                    }, [a("p", [e._v(e._s(e.errorMessage))])]) : e._e(), e.alert ? [a("smooth-reflow", [a("app-alert", {
                        attrs: {
                            alert: e.alert
                        }
                    })], 1)] : e._e(), a("ValidationObserver", {
                        ref: "observer",
                        staticClass: "block",
                        attrs: {
                            tag: "form"
                        },
                        on: {
                            submit: function(t) {
                                return t.preventDefault(),
                                    e.submit(t)
                            }
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                t.invalid;
                                return [a("text-field", {
                                    attrs: {
                                        type: "text",
                                        name: "emailAddress",
                                        rules: "required|email",
                                        label: "Email Address",
                                        nameInErrorMessage: "Email address"
                                    },
                                    model: {
                                        value: e.emailAddress,
                                        callback: function(t) {
                                            e.emailAddress = "string" === typeof t ? t.trim() : t
                                        },
                                        expression: "emailAddress"
                                    }
                                }), a("div", [a("p", {
                                    staticClass: "\n              relative\n              float-right\n              z-10\n              mb-1\n              border-b border-white\n              hover:border-gray-800-500 hover:text-gray-800\n              text-right text-xs\n              leading-normal\n            "
                                }, [a("router-link", {
                                    staticClass: "cursor-pointer text-gray-chateau hover:text-gray-800",
                                    attrs: {
                                        to: "/forgotpassword"
                                    }
                                }, [e._v("\n              Forgot Password?\n            ")])], 1), a("text-field", {
                                    attrs: {
                                        type: "password",
                                        name: "password",
                                        rules: "required|password",
                                        label: "Password",
                                        nameInErrorMessage: "Password"
                                    },
                                    model: {
                                        value: e.password,
                                        callback: function(t) {
                                            e.password = "string" === typeof t ? t.trim() : t
                                        },
                                        expression: "password"
                                    }
                                })], 1), a("button", {
                                    staticClass: "button mt-1 bg-primary-500",
                                    attrs: {
                                        type: "submit",
                                        disabled: e.isLoading
                                    }
                                }, [e.isLoading ? a("app-loader", {
                                    key: "2"
                                }) : a("span", {
                                    key: "1",
                                    staticClass: "block mx-auto"
                                }, [e._v("Log In")])], 1), e.isRegistrationExpired ? e._e() : a("p", {
                                    staticClass: "mt-4 text-center text-sm"
                                }, [e._v("\n          Not yet registered?\n          "), a("router-link", {
                                    staticClass: "\n              border-b border-primary-500\n              text-primary-500\n              hover:border-primary-600 hover:text-primary-600\n            ",
                                    attrs: {
                                        to: "/register"
                                    }
                                }, [e._v("\n            Register here.\n          ")])], 1)]
                            }
                        }])
                    })] : [a("div", {
                        staticClass: "bg-yellow-200 text-gray-800 py-4 px-5 mb-8 rounded-md"
                    }, [a("p", [e._v("\n          Come back on\n          "), a("span", {
                        staticClass: "font-semibold"
                    }, [e._v(e._s(this.getFormattedLongDate(this.config.redemptionStart)))]), e._v("\n          to start playing the game and redeeming your prizes.\n        ")])]), e.isRegistrationExpired ? e._e() : a("p", {
                        staticClass: "mt-4 text-center text-sm"
                    }, [e._v("\n        Not yet registered?\n        "), a("router-link", {
                        staticClass: "\n            border-b border-primary-500\n            text-primary-500\n            hover:border-primary-600 hover:text-primary-600\n          ",
                        attrs: {
                            to: "/register"
                        }
                    }, [e._v("\n          Register here.\n        ")])], 1)]], 2)], 1)
                }
                    , oe = []
                    , ce = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", [a("div", {
                        staticClass: "p-4 mb-5 rounded text-sm",
                        class: e.classLabel
                    }, [e._v(e._s(e.alert.message))])])
                }
                    , le = []
                    , de = {
                    props: ["alert"],
                    computed: {
                        classLabel: function() {
                            return this.alert.isSuccessful ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
                        }
                    }
                }
                    , ue = de
                    , pe = Object(Y["a"])(ue, ce, le, !1, null, null, null)
                    , fe = pe.exports
                    , me = {
                    methods: {
                        getFormattedDate: function(e) {
                            if (!e)
                                return "";
                            var t = new Date(e)
                                , a = t.getFullYear()
                                , r = t.getDate()
                                , n = t.getMonth() + 1;
                            return "".concat(n, "/").concat(r, "/").concat(a)
                        },
                        getFormattedLongDate: function(e) {
                            if (!e)
                                return "";
                            var t = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                                , a = new Date(e)
                                , r = a.getFullYear()
                                , n = a.getDate()
                                , s = t[a.getMonth()];
                            return "".concat(s, " ").concat(n, ", ").concat(r)
                        }
                    }
                };
                function he(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }
                        ))),
                            a.push.apply(a, r)
                    }
                    return a
                }
                function ge(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? he(Object(a), !0).forEach((function(t) {
                                Object(o["a"])(e, t, a[t])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : he(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }
                        ))
                    }
                    return e
                }
                var be = {
                    components: {
                        ValidationObserver: H["a"],
                        TextField: Q,
                        AppAlert: fe,
                        AppLoader: X["default"]
                    },
                    mixins: [me],
                    props: ["alert"],
                    computed: {
                        emailAddress: Object(c["e"])("app/emailAddress"),
                        cardNumber: Object(c["e"])("app/cardNumber"),
                        config: Object(c["e"])("app/config"),
                        isRedemptionExpired: Object(c["e"])("app/isRedemptionExpired"),
                        isRegistrationExpired: Object(c["e"])("app/isRegistrationExpired"),
                        isRedemptionStarted: Object(c["e"])("app/isRedemptionStarted"),
                        dateRegistered: Object(c["e"])("app/dateRegistered"),
                        termsIdentifier: Object(c["e"])("app/termsIdentifier")
                    },
                    data: function() {
                        return {
                            errorMessage: "",
                            isLoading: !1,
                            password: ""
                        }
                    },
                    watch: {
                        isRedemptionExpired: {
                            handler: function(e, t) {
                                e && (document.getElementById("heading").style.display = "none")
                            },
                            immediate: !0
                        }
                    },
                    mounted: function() {
                        this.isRedemptionExpired && (document.getElementById("heading").style.display = "none")
                    },
                    methods: ge({}, Object(c["a"])("app/*"), {
                        submit: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                                    var t, a, r = this;
                                    return regeneratorRuntime.wrap((function(e) {
                                            while (1)
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                            this.$refs.observer.validate();
                                                    case 2:
                                                        t = e.sent,
                                                        t && (this.isLoading = !0,
                                                            a = {
                                                                emailaddress: this.emailAddress,
                                                                password: this.password,
                                                                id: this.$store.get("app/config@campaignID")
                                                            },
                                                            this.login(a).then((function(e) {
                                                                    if (r.isLoading = !1,
                                                                    5 === e.id) {
                                                                        r.$store.set("app/isLoggedIn", !0),
                                                                            r.$router.push("/");
                                                                        var t = e.user
                                                                            , a = t.dateRegistered;
                                                                        t.code;
                                                                        r.dateRegistered = a,
                                                                            r.$gtag.event("Login", {
                                                                                "event-category": "Campaign",
                                                                                "event-label": "Success"
                                                                            })
                                                                    } else
                                                                        r.errorMessage = e.description,
                                                                            r.$gtag.event("Login", {
                                                                                "event-category": "Campaign",
                                                                                "event-label": "Failed"
                                                                            })
                                                                }
                                                            )));
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e, this)
                                }
                            )));
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    })
                }
                    , ve = be
                    , we = Object(Y["a"])(ve, ie, oe, !1, null, null, null)
                    , xe = we.exports
                    , Ce = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "mb-6"
                    }, [a("div", {
                        staticClass: "pt-10 bg-porcelain"
                    }, [a("p", {
                        staticClass: "text-2xl font-heading font-bold text-center"
                    }, [e._v("Let's play!")]), a("p", {
                        staticClass: "mb-10 mt-2 text-sm text-tertiary-500 text-center",
                        on: {
                            click: e.toggleDialog
                        }
                    }, [a("font-awesome-icon", {
                        staticClass: "inlin-block mr-1",
                        attrs: {
                            icon: ["far", "info-circle"]
                        }
                    }), a("span", {
                        staticClass: "underline cursor-pointer"
                    }, [e._v("How to earn playcodes")])], 1), a("featured-carousel", {}), a("p", {
                        staticClass: "-ml-3 mt-4 text-base text-center"
                    }, [e._v("\n      Or win other mystery prizes\n    ")]), a("mystery-carousel", {
                        staticClass: "mt-4"
                    }), e._m(0), e._m(1)], 1), a("div", {
                        attrs: {
                            id: "prizes"
                        }
                    }, [a("game-prizes")], 1), a("p", {
                        staticClass: "mt-14 w-full text-center text-sm"
                    }, [a("button", {
                        staticClass: "focus:outline-none mx-auto hover:underline",
                        on: {
                            click: e.onLogout
                        }
                    }, [e._v(" \n      Log out\n      "), e.isLoggingOut ? a("app-loader") : a("span", {}, [a("font-awesome-icon", {
                        staticClass: "inline-block",
                        attrs: {
                            icon: ["far", "sign-out"],
                            "fixed-width": ""
                        }
                    })], 1)], 1)]), a("div", {
                        staticClass: "\n      fixed\n      bottom-0\n      border-t border-mercury\n      px-8\n      pt-10\n      pb-4\n      w-full\n      xs:max-w-390px\n      bg-black\n      text-white text-center\n      z-20\n    "
                    }, [a("div", {
                        staticClass: "absolute left-0 top-0 -mt-6 w-full px-18"
                    }, [a("button", {
                        staticClass: "button mx-auto flex items-center justify-center text-white",
                        class: {
                            "bg-primary-500": e.ticketsCount,
                            "disabled bg-gray-chateau cursor-not-allowed": !e.ticketsCount
                        },
                        attrs: {
                            disabled: !e.ticketsCount
                        },
                        on: {
                            click: function(t) {
                                return e.$router.push("/game")
                            }
                        }
                    }, [a("p", {
                        staticClass: "mr-2"
                    }, [e._v("Play Now")]), a("svg", {
                        attrs: {
                            width: "12",
                            height: "16",
                            viewBox: "0 0 12 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [a("path", {
                        attrs: {
                            d: "M3 11.3287V4.67129L7.99306 8L3 11.3287Z",
                            stroke: "white",
                            "stroke-width": "5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])])]), e.isLoading ? e._e() : [a("smooth-reflow", [e.isShowFeedback ? [a("app-alert", {
                        staticClass: "mb-0",
                        attrs: {
                            alert: e.alert
                        }
                    }), a("button", {
                        staticClass: "text-sm underline text-red-200",
                        on: {
                            click: e.loadTickets
                        }
                    }, [e._v("\n            Reload\n          ")])] : 0 === e.totalTicketsCount ? a("p", {
                        staticClass: "text-base pt-2"
                    }, [e._v("\n          You dont have playcodes available yet.\n        ")]) : a("p", {
                        staticClass: "text-base pt-2"
                    }, [a("span", {
                        staticClass: "font-bold"
                    }, [e._v(e._s(e.ticketsCount) + "\n            " + e._s(e.ticketsCount <= 1 ? "playcode" : "playcodes") + " left\n          ")]), e._v("\n          out of " + e._s(e.totalTicketsCount) + "\n          " + e._s(e.totalTicketsCount <= 1 ? "playcode" : "playcodes") + "\n        ")]), e.ticketsCount ? e._e() : a("p", {
                        staticClass: "mt-1 text-sm text-center underline cursor-pointer text-white",
                        on: {
                            click: e.toggleDialog
                        }
                    }, [e._v("\n          How to earn playcodes\n        ")])], 2)]], 2), a("app-dialog", {
                        attrs: {
                            showing: e.isShowDialog,
                            "max-width": "366px",
                            classes: {
                                content: "mx-auto  overflow-visible py-4",
                                root: "px-4 bg-transparent-darker overflow-y-scroll"
                            },
                            transition: "dialog",
                            "bg-transition": "fade"
                        },
                        on: {
                            hide: e.toggleDialog
                        }
                    }, [a("div", {
                        staticClass: "dialog h-full flex flex-col justify-center items-center"
                    }, [a("div", {
                        staticClass: "p-8 bg-white text-center border-2 border-black rounded-xl"
                    }, [a("p", {
                        staticClass: "font-bold text-xl"
                    }, [e._v("Let’s get ready!")]), a("ul", {
                        staticClass: "mt-8 text-left"
                    }, [a("li", {
                        staticClass: "flex"
                    }, [a("div", {
                        staticClass: "mr-4"
                    }, [a("svg", {
                        attrs: {
                            width: "28",
                            height: "28",
                            viewBox: "0 0 28 28",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [a("rect", {
                        attrs: {
                            width: "28",
                            height: "28",
                            rx: "14",
                            fill: "#00ADE8"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M15.8302 8.81818V19H13.6775V10.8615H13.6178L11.2861 12.3232V10.4141L13.8067 8.81818H15.8302Z",
                            fill: "white"
                        }
                    }), a("rect", {
                        attrs: {
                            x: "0.5",
                            y: "0.5",
                            width: "27",
                            height: "27",
                            rx: "13.5",
                            stroke: "black",
                            "stroke-opacity": "0.08"
                        }
                    })])]), a("div", [a("p", {
                        staticClass: "font-bold leading-8"
                    }, [e._v("Earn playcodes")]), a("p", {
                        staticClass: "mt-1 leading-6 text-charade text-xs"
                    }, [e._v("\n                Start earning Playcodes by using your Citi credit card from December 17, 2022 to March 12, 2023. Earn (1) Playcode for every qualified local or forex straight retail purchase, including bills payment transactions, Citi PayLite NOW, and Citi PayAll. Plus, get 10 bonus Playcodes for every accumulated spend of P25,000! Earn up to 80 bonus Playcodes. Please refer to the "), a("a", {
                        staticClass: "underline",
                        attrs: {
                            href: "http://www.citibank.com.ph/mm",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Terms and Conditions")]), e._v(" for full details of qualified transactions. \n              ")])])]), a("li", {
                        staticClass: "mt-4 flex"
                    }, [a("div", {
                        staticClass: "mr-4"
                    }, [a("svg", {
                        attrs: {
                            width: "28",
                            height: "28",
                            viewBox: "0 0 28 28",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [a("rect", {
                        attrs: {
                            width: "28",
                            height: "28",
                            rx: "14",
                            fill: "#00ADE8"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M10.9161 19V17.4489L14.5404 14.093C14.8486 13.7947 15.1072 13.5263 15.316 13.2876C15.5281 13.049 15.6888 12.8153 15.7982 12.5866C15.9076 12.3546 15.9623 12.1044 15.9623 11.8359C15.9623 11.5376 15.8943 11.2808 15.7584 11.0653C15.6225 10.8466 15.4369 10.6792 15.2016 10.5632C14.9663 10.4439 14.6995 10.3842 14.4012 10.3842C14.0896 10.3842 13.8179 10.4472 13.5858 10.5732C13.3538 10.6991 13.1749 10.8797 13.0489 11.1151C12.923 11.3504 12.86 11.6304 12.86 11.9553H10.8167C10.8167 11.2891 10.9675 10.7107 11.2691 10.2202C11.5707 9.72964 11.9933 9.35014 12.5368 9.08168C13.0804 8.81321 13.7068 8.67898 14.4161 8.67898C15.1453 8.67898 15.78 8.80824 16.3202 9.06676C16.8638 9.32197 17.2864 9.67661 17.588 10.1307C17.8896 10.5848 18.0404 11.1051 18.0404 11.6918C18.0404 12.0762 17.9642 12.4557 17.8117 12.8303C17.6626 13.2048 17.3957 13.6207 17.0113 14.0781C16.6268 14.5322 16.0849 15.0774 15.3856 15.7138L13.8991 17.1705V17.2401H18.1746V19H10.9161Z",
                            fill: "white"
                        }
                    }), a("rect", {
                        attrs: {
                            x: "0.5",
                            y: "0.5",
                            width: "27",
                            height: "27",
                            rx: "13.5",
                            stroke: "black",
                            "stroke-opacity": "0.08"
                        }
                    })])]), a("div", [a("p", {
                        staticClass: "font-bold leading-8"
                    }, [e._v("Play and get a chance to win!")]), a("p", {
                        staticClass: "mt-1 leading-6 text-charade text-xs"
                    }, [e._v("\n                Use a Playcode to play then choose two (2) random blocks to\n                flip. Make a match and win a prize.\n              ")])])]), a("li", {
                        staticClass: "mt-4 flex"
                    }, [a("div", {
                        staticClass: "mr-4"
                    }, [a("svg", {
                        attrs: {
                            width: "28",
                            height: "28",
                            viewBox: "0 0 28 28",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [a("rect", {
                        attrs: {
                            width: "28",
                            height: "28",
                            rx: "14",
                            fill: "#00ADE8"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M13.9745 19.1392C13.2321 19.1392 12.5709 19.0116 11.9909 18.7564C11.4142 18.4979 10.9584 18.1432 10.6237 17.6925C10.2922 17.2384 10.1215 16.7147 10.1116 16.1214H12.2792C12.2925 16.37 12.3737 16.5888 12.5228 16.7777C12.6753 16.9633 12.8775 17.1075 13.1294 17.2102C13.3812 17.313 13.6646 17.3643 13.9795 17.3643C14.3076 17.3643 14.5976 17.3063 14.8495 17.1903C15.1014 17.0743 15.2986 16.9136 15.4411 16.7081C15.5837 16.5026 15.6549 16.2656 15.6549 15.9972C15.6549 15.7254 15.5787 15.4851 15.4262 15.2763C15.2771 15.0642 15.0616 14.8984 14.7799 14.7791C14.5015 14.6598 14.1701 14.6001 13.7856 14.6001H12.836V13.0192H13.7856C14.1104 13.0192 14.3971 12.9628 14.6457 12.8501C14.8976 12.7375 15.0931 12.5817 15.2323 12.3828C15.3715 12.1806 15.4411 11.9453 15.4411 11.6768C15.4411 11.4216 15.3798 11.1979 15.2572 11.0057C15.1379 10.8101 14.9688 10.6577 14.7501 10.5483C14.5347 10.4389 14.2828 10.3842 13.9944 10.3842C13.7027 10.3842 13.4359 10.4373 13.194 10.5433C12.952 10.6461 12.7581 10.7936 12.6123 10.9858C12.4665 11.178 12.3886 11.4034 12.3786 11.6619H10.3154C10.3254 11.0753 10.4927 10.5582 10.8176 10.1108C11.1424 9.66335 11.5799 9.31368 12.1301 9.06179C12.6836 8.80658 13.3083 8.67898 14.0044 8.67898C14.707 8.67898 15.3218 8.80658 15.8488 9.06179C16.3758 9.317 16.7851 9.66169 17.0768 10.0959C17.3718 10.5268 17.5176 11.0107 17.5143 11.5476C17.5176 12.1177 17.3403 12.5933 16.9823 12.9744C16.6277 13.3556 16.1653 13.5975 15.5953 13.7003V13.7798C16.3443 13.8759 16.9144 14.1361 17.3055 14.5604C17.6999 14.9813 17.8954 15.5083 17.8921 16.1413C17.8954 16.7214 17.7281 17.2367 17.39 17.6875C17.0553 18.1383 16.5929 18.4929 16.0029 18.7514C15.413 19.0099 14.7368 19.1392 13.9745 19.1392Z",
                            fill: "white"
                        }
                    }), a("rect", {
                        attrs: {
                            x: "0.5",
                            y: "0.5",
                            width: "27",
                            height: "27",
                            rx: "13.5",
                            stroke: "black",
                            "stroke-opacity": "0.08"
                        }
                    })])]), a("div", [a("p", {
                        staticClass: "font-bold leading-8"
                    }, [e._v("Spend and play more!")]), a("p", {
                        staticClass: "mt-1 leading-6 text-charade text-xs"
                    }, [e._v("\n                Playcodes for the Merry Match will be uploaded\n                to your account starting December 29, 2022. You may refer to\n                the "), a("a", {
                        staticClass: "underline",
                        attrs: {
                            href: "http://www.citibank.com.ph/mm",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Terms and Conditions")]), e._v(" for the schedule of Playcode upload.\n                Redemption Period is until May 12, 2023.\n              ")])])])])]), a("button", {
                        staticClass: "\n          mt-4\n          rounded-full\n          border-2 border-white\n          bg-transparent-white-2\n          p-2\n          text-white\n        ",
                        on: {
                            click: e.toggleDialog
                        }
                    }, [a("font-awesome-icon", {
                        attrs: {
                            icon: ["fal", "times"],
                            size: "lg",
                            "fixed-width": ""
                        }
                    })], 1)])])], 1)
                }
                    , ye = [function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("p", {
                        staticClass: "mt-8 text-center text-xs text-trout"
                    }, [a("a", {
                        staticClass: "inline-block border-b border-trout",
                        attrs: {
                            href: "http://www.citibank.com.ph/mm",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Terms and Conditions apply.")])])
                }
                    , function() {
                        var e = this
                            , t = e.$createElement
                            , a = e._self._c || t;
                        return a("div", {
                            staticClass: "mt-18 px-8 py-18 text-center bg-mercury"
                        }, [a("p", {
                            staticClass: "text-xl font-bold"
                        }, [e._v("How to Play")]), a("p", {
                            staticClass: "mt-5 text-sm leading-6"
                        }, [e._v("\n        Get a matching 🎁\n        "), a("span", {
                            staticClass: "font-bold"
                        }, [e._v("gift block to win the featured prize")]), e._v(" of\n        the day or get other matches to win a mystery prize.\n      ")]), a("div", {
                            staticClass: "mt-4 rounded-lg p-3 flex bg-white"
                        }, [a("img", {
                            attrs: {
                                src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/card-0.png",
                                width: "56",
                                height: "56",
                                alt: ""
                            }
                        }), a("div", {
                            staticClass: "ml-4 flex flex-col justify-center text-left"
                        }, [a("span", {
                            staticClass: "font-medium text-xs text-oxford-blue uppercase"
                        }, [e._v("Gift Block")]), a("span", {
                            staticClass: "font-bold"
                        }, [e._v("Featured Prize")])])]), a("div", {
                            staticClass: "mt-4 rounded-lg p-3 flex bg-white"
                        }, [a("img", {
                            attrs: {
                                src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/card-4.png",
                                width: "56",
                                height: "56",
                                alt: ""
                            }
                        }), a("div", {
                            staticClass: "ml-4 flex flex-col justify-center text-left"
                        }, [a("span", {
                            staticClass: "font-medium text-xs text-oxford-blue uppercase"
                        }, [e._v("Other Block")]), a("span", {
                            staticClass: "font-bold"
                        }, [e._v("Mystery Prize")])])]), a("p", {
                            staticClass: "mt-8 text-sm"
                        }, [e._v("\n        Keep using your credit card to earn more playcodes!\n      ")])])
                    }
                ]
                    , _e = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "text-center px-3 py-6 text-gray-500"
                    }, [e.alert.isSuccessful ? [a("div", {
                        staticClass: "text-center"
                    }, [a("font-awesome-icon", {
                        staticClass: "text-7xl mb-4 text-primary-500  block mx-auto",
                        attrs: {
                            icon: ["far", "check-circle"]
                        }
                    }), a("span", {
                        staticClass: "block text-xl font-bold mb-4 text-storm-dust"
                    }, [e._v(e._s(e.alert.heading))]), a("p", {
                        staticClass: "text-storm-dust"
                    }, [e._v(e._s(e.alert.message))])], 1)] : [a("div", {
                        staticClass: "text-center"
                    }, [a("div", [a("font-awesome-icon", {
                        staticClass: "text-7xl text-red-400 mb-4 mx-auto block",
                        attrs: {
                            icon: ["far", "exclamation-circle"]
                        }
                    })], 1), a("span", {
                        staticClass: "block text-xl font-bold mb-4 text-storm-dust"
                    }, [e._v(e._s(e.alert.heading))]), a("p", {
                        staticClass: "text-storm-dust"
                    }, [e._v("\n        " + e._s(e.alert.message) + "\n        "), a("a", {
                        staticClass: "text-primary-500 whitespace-no-wrap hover:underline",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(),
                                    e.retry(t)
                            }
                        }
                    }, [e._v("Try again")])])])]], 2)
                }
                    , ke = []
                    , Oe = {
                    name: "PageFeedback",
                    props: ["alert"],
                    methods: {
                        retry: function() {
                            this.$emit("toggleFeedback", !1, {})
                        }
                    }
                }
                    , je = Oe
                    , Le = Object(Y["a"])(je, _e, ke, !1, null, null, null)
                    , Pe = Le.exports
                    , Se = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("transition", {
                        attrs: {
                            appear: "",
                            name: e.bgTransition
                        }
                    }, [e.showing ? a("div", {
                        class: ["dialog  fixed inset-0 z-50", e.classes.root],
                        on: {
                            click: e.onClick,
                            keydown: e.onKeydown
                        }
                    }, [a("transition", {
                        attrs: {
                            name: e.transition,
                            appear: ""
                        }
                    }, [a(e.tag, {
                        ref: "content",
                        tag: "component",
                        class: ["dialog-content overflow-auto  ", e.classes.content],
                        style: {
                            width: e.width,
                            maxWidth: e.maxWidth
                        },
                        attrs: {
                            tabindex: "-1",
                            role: "dialog"
                        }
                    }, [e._t("default")], 2)], 1)], 1) : e._e()])
                }
                    , Re = []
                    , De = {
                    model: {
                        prop: "showing",
                        event: "change"
                    },
                    props: {
                        showing: Boolean,
                        tag: {
                            type: String,
                            default: "div"
                        },
                        dismissible: {
                            type: Boolean,
                            default: !0
                        },
                        noScroll: {
                            type: Boolean,
                            default: !1
                        },
                        classes: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        transition: String,
                        bgTransition: String,
                        width: String,
                        maxWidth: String
                    },
                    watch: {
                        showing: {
                            handler: function(e, t) {
                                "undefined" !== typeof window && (e && e != t ? this.noScroll && document.body.style.setProperty("overflow", "hidden") : this.noScroll && document.body.style.removeProperty("overflow"))
                            }
                        }
                    },
                    methods: {
                        show: function() {
                            this.$emit("show"),
                                this.$emit("change", !0)
                        },
                        hide: function() {
                            this.$emit("hide"),
                                this.$emit("change", !1)
                        },
                        toggle: function() {
                            var e = this.showing
                                , t = e ? "hide" : "show";
                            this.$emit(t, !e),
                                this.$emit("change", !e)
                        },
                        onClick: function(e) {
                            e.target.classList.contains("dialog") && this.dismissible && this.hide()
                        },
                        onKeydown: function(e) {
                            "Escape" === e.key && this.hide()
                        }
                    }
                }
                    , ze = De
                    , Te = (a("413a"),
                    Object(Y["a"])(ze, Se, Re, !1, null, "4b8a527c", null))
                    , Ee = Te.exports
                    , Fe = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "relative z-20 w-full"
                    }, [a("div", {}, [a("swiper", {
                        ref: "swiper",
                        staticClass: "swiper",
                        attrs: {
                            options: e.swiperOption
                        }
                    }, e._l(4, (function(e) {
                            return a("swiper-slide", {
                                key: e,
                                staticClass: "h-full text-center overflow-hidden",
                                staticStyle: {
                                    width: "144px"
                                }
                            }, [a("div", {
                                staticClass: "text-black"
                            }, [a("img", {
                                attrs: {
                                    src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-levelup/mprize-" + e + ".png",
                                    alt: ""
                                }
                            })])])
                        }
                    )), 1)], 1)])
                }
                    , Me = []
                    , Ae = a("7212")
                    , $e = {
                    components: {
                        Swiper: Ae["Swiper"],
                        SwiperSlide: Ae["SwiperSlide"]
                    },
                    data: function() {
                        return {
                            swiperOption: {
                                scrollbar: !1,
                                slidesPerView: "auto",
                                spaceBetween: 16,
                                autoplay: {
                                    delay: 1
                                },
                                freeMode: !0,
                                speed: 1e4,
                                freeModeMomentum: !1,
                                grabCursor: !1,
                                observer: !0,
                                observeParents: !0,
                                mousewheel: !1,
                                centeredSlides: !0,
                                centeredSlidesBounds: !0,
                                disableOnInteraction: !1,
                                allowTouchMove: !1,
                                loop: !0
                            }
                        }
                    }
                }
                    , Ne = $e
                    , Ie = Object(Y["a"])(Ne, Fe, Me, !1, null, null, null)
                    , He = Ie.exports
                    , Ve = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "relative z-20 mt-8 w-full"
                    }, [a("div", {
                        staticClass: "pl-8"
                    }, [a("swiper", {
                        ref: "swiper",
                        staticClass: "swiper overflow-visible",
                        attrs: {
                            options: e.swiperOption
                        }
                    }, [a("swiper-slide", {
                        staticClass: "relative h-full text-center",
                        staticStyle: {
                            width: "260px",
                            height: "115px"
                        }
                    }, [a("div", {
                        staticClass: "flex h-full"
                    }, [a("div", {
                        staticClass: "\n              h-full\n              flex\n              items-center\n              justify-center\n              bg-white\n              text-center\n              uppercase\n              tracking-wild\n              text-black\n              rounded-l-12px\n              overflow-hidden\n              flex-grow-0 flex-shrink-0\n            ",
                        staticStyle: {
                            "flex-basis": "40px"
                        }
                    }, [a("svg", {
                        attrs: {
                            width: "40",
                            height: "104",
                            viewBox: "0 0 40 104",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [a("rect", {
                        attrs: {
                            width: "40",
                            height: "104",
                            fill: "white"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M25 83.2415L16.2727 83.2415L16.2727 77.4631L17.794 77.4631L17.794 81.3963L19.8736 81.3963L19.8736 77.8466L21.3949 77.8466L21.3949 81.3963L25 81.3963L25 83.2415ZM25 76.2219L16.2727 76.2219L16.2727 70.3413L17.794 70.3413L17.794 74.3768L19.8736 74.3768L19.8736 70.6438L21.3949 70.6438L21.3949 74.3768L23.4787 74.3768L23.4787 70.3242L25 70.3242L25 76.2219ZM25 67.37L25 69.3473L16.2727 66.3345L16.2727 63.9567L25 60.9482L25 62.9254L18.267 65.1115L18.267 65.1797L25 67.37ZM21.5696 67.4936L21.5696 62.8232L23.0099 62.8232L23.0099 67.4936L21.5696 67.4936ZM17.794 61.2965L16.2727 61.2965L16.2727 54.1289L17.794 54.1289L17.794 56.8008L25 56.8008L25 58.6246L17.794 58.6246L17.794 61.2965ZM16.2727 47.5579L16.2727 45.7127L21.9403 45.7127C22.5767 45.7127 23.1335 45.8647 23.6108 46.1687C24.0881 46.4698 24.4602 46.8917 24.7273 47.4343C24.9915 47.9769 25.1236 48.609 25.1236 49.3306C25.1236 50.055 24.9915 50.6886 24.7273 51.2312C24.4602 51.7738 24.0881 52.1957 23.6108 52.4968C23.1335 52.7979 22.5767 52.9485 21.9403 52.9485L16.2727 52.9485L16.2727 51.1033L21.7827 51.1033C22.1151 51.1033 22.4105 51.0309 22.669 50.886C22.9276 50.7383 23.1307 50.5309 23.2784 50.2638C23.4261 49.9968 23.5 49.6857 23.5 49.3306C23.5 48.9727 23.4261 48.6616 23.2784 48.3974C23.1307 48.1303 22.9276 47.9244 22.669 47.7795C22.4105 47.6317 22.1151 47.5579 21.7827 47.5579L16.2727 47.5579ZM25 44.1946L16.2727 44.1946L16.2727 40.7514C16.2727 40.0923 16.3906 39.5298 16.6264 39.0639C16.8594 38.5952 17.1903 38.2386 17.6193 37.9943C18.0455 37.7472 18.5469 37.6236 19.1236 37.6236C19.7031 37.6236 20.2017 37.7486 20.6193 37.9986C21.0341 38.2486 21.3523 38.6108 21.5739 39.0852C21.7955 39.5568 21.9062 40.1278 21.9062 40.7983L21.9062 43.1037L20.4233 43.1037L20.4233 41.0966C20.4233 40.7443 20.375 40.4517 20.2784 40.2187C20.1818 39.9858 20.0369 39.8125 19.8437 39.6989C19.6506 39.5824 19.4105 39.5241 19.1236 39.5241C18.8338 39.5241 18.5895 39.5824 18.3906 39.6989C18.1918 39.8125 18.0412 39.9872 17.9389 40.223C17.8338 40.456 17.7812 40.75 17.7812 41.1051L17.7812 42.3494L25 42.3494L25 44.1946ZM21.0284 39.4815L25 37.3125L25 39.3494L21.0284 41.4716L21.0284 39.4815ZM25 36.3196L16.2727 36.3196L16.2727 30.4389L17.794 30.4389L17.794 34.4744L19.8736 34.4744L19.8736 30.7415L21.3949 30.7415L21.3949 34.4744L23.4787 34.4744L23.4787 30.4219L25 30.4219L25 36.3196ZM25 25.8782L25 28.9719L16.2727 28.9719L16.2727 25.8526C16.2727 24.9748 16.4474 24.2191 16.7969 23.5856C17.1435 22.9521 17.642 22.4648 18.2926 22.1239C18.9432 21.7802 19.7216 21.6083 20.6278 21.6083C21.5369 21.6083 22.3182 21.7802 22.9716 22.1239C23.625 22.4648 24.1264 22.9549 24.4758 23.5941C24.8253 24.2305 25 24.9918 25 25.8782ZM23.419 27.1268L23.419 25.9549C23.419 25.4094 23.3224 24.9506 23.1293 24.5785C22.9332 24.2035 22.6307 23.9222 22.2216 23.7347C21.8097 23.5444 21.2784 23.4492 20.6278 23.4492C19.983 23.4492 19.456 23.5444 19.0469 23.7347C18.6378 23.9222 18.3366 24.2021 18.1435 24.5742C17.9503 24.9464 17.8537 25.4052 17.8537 25.9506L17.8537 27.1268L23.419 27.1268Z",
                            fill: "black"
                        }
                    })])]), a("div", {
                        staticClass: "relative pt-4 pb-4 px-4 rounded-r-12px w-full text-center",
                        class: e.currentFeaturedPrize.isDarkText ? "text-black" : "text-white",
                        style: {
                            backgroundColor: "" + e.currentFeaturedPrize.accentColor
                        }
                    }, [a("span", {
                        staticClass: "overlay"
                    }), e.currentFeaturedPrize ? a("span", {
                        staticClass: "block font-bold",
                        class: {
                            "text-xs": e.currentFeaturedPrize.name.split(" ").length > 8,
                            "text-sm ": e.currentFeaturedPrize.name.split(" ").length > 5 && e.currentFeaturedPrize.name.split(" ").length <= 8,
                            "text-base": e.currentFeaturedPrize.name.split(" ").length <= 5
                        }
                    }, [e._v(e._s(e.currentFeaturedPrize.name))]) : e._e(), a("div", {
                        staticClass: "\n                absolute\n                bottom-0\n                left-0\n\n                pt-2\n                pb-4\n                text-xs\n                w-full\n                flex\n                items-center\n                justify-center\n              "
                    }, [a("span", {
                        staticClass: "uppercase"
                    }, [e._v("Time left:")]), a("count-down", {
                        staticClass: "ml-2",
                        attrs: {
                            milliSecondsTime: e.currentRewardRemainingTime
                        },
                        on: {
                            setNewFeaturedMerchant: e.setFeaturedPrize
                        }
                    })], 1)])])]), a("swiper-slide", {
                        staticClass: "relative h-full text-center overflow-hidden",
                        staticStyle: {
                            width: "260px",
                            height: "115px"
                        }
                    }, [a("div", {
                        staticClass: "flex h-full"
                    }, [a("div", {
                        staticClass: "\n              h-full\n              flex\n              items-center\n              justify-center\n              bg-white\n              text-center\n              uppercase\n              tracking-wild\n              text-black\n              rounded-l-12px\n              overflow-hidden\n              flex-grow-0 flex-shrink-0\n            ",
                        staticStyle: {
                            "flex-basis": "40px"
                        }
                    }, [a("svg", {
                        attrs: {
                            width: "40",
                            height: "104",
                            viewBox: "0 0 40 104",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [a("rect", {
                        attrs: {
                            width: "40",
                            height: "104",
                            fill: "white"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M16.2727 72.3841L16.2727 70.5389L21.9403 70.5389C22.5767 70.5389 23.1335 70.6909 23.6108 70.9949C24.0881 71.296 24.4602 71.7179 24.7273 72.2605C24.9915 72.8031 25.1236 73.4352 25.1236 74.1568C25.1236 74.8812 24.9915 75.5147 24.7273 76.0574C24.4602 76.6 24.0881 77.0218 23.6108 77.323C23.1335 77.6241 22.5767 77.7747 21.9403 77.7747L16.2727 77.7747L16.2727 75.9295L21.7827 75.9295C22.1151 75.9295 22.4105 75.8571 22.669 75.7122C22.9276 75.5645 23.1307 75.3571 23.2784 75.09C23.4261 74.823 23.5 74.5119 23.5 74.1568C23.5 73.7988 23.4261 73.4877 23.2784 73.2235C23.1307 72.9565 22.9276 72.7505 22.669 72.6056C22.4105 72.4579 22.1151 72.3841 21.7827 72.3841L16.2727 72.3841ZM25 69.0208L16.2727 69.0208L16.2727 65.5776C16.2727 64.9157 16.3991 64.3517 16.652 63.8858C16.902 63.4199 17.25 63.0648 17.696 62.8205C18.1392 62.5733 18.6506 62.4498 19.2301 62.4498C19.8097 62.4498 20.321 62.5748 20.7642 62.8248C21.2074 63.0748 21.5526 63.437 21.7997 63.9114C22.0469 64.383 22.1705 64.954 22.1705 65.6245L22.1705 67.8191L20.6918 67.8191L20.6918 65.9228C20.6918 65.5676 20.6307 65.275 20.5085 65.0449C20.3835 64.812 20.2116 64.6387 19.9929 64.525C19.7713 64.4086 19.517 64.3503 19.2301 64.3503C18.9403 64.3503 18.6875 64.4086 18.4716 64.525C18.2528 64.6387 18.0838 64.812 17.9645 65.0449C17.8423 65.2779 17.7812 65.5733 17.7812 65.9313L17.7812 67.1756L25 67.1756L25 69.0208ZM16.2727 51.1742L25 51.1742L25 52.7679L19.5071 56.5648L19.5071 56.6287L25 56.6287L25 58.4739L16.2727 58.4739L16.2727 56.8546L21.7614 53.0875L21.7614 53.0108L16.2727 53.0108L16.2727 51.1742ZM25 49.6497L16.2727 49.6497L16.2727 43.769L17.794 43.769L17.794 47.8045L19.8736 47.8045L19.8736 44.0716L21.3949 44.0716L21.3949 47.8045L23.4787 47.8045L23.4787 43.752L25 43.752L25 49.6497ZM16.2727 40.5719L19.2472 38.812L19.2472 38.7438L16.2727 36.9753L16.2727 34.8915L20.6364 37.5549L25 34.8319L25 36.954L22.0213 38.7438L22.0213 38.812L25 40.6017L25 42.7154L20.6364 39.9838L16.2727 42.6642L16.2727 40.5719ZM17.794 34.0563L16.2727 34.0563L16.2727 26.8887L17.794 26.8887L17.794 29.5605L25 29.5605L25 31.3844L17.794 31.3844L17.794 34.0563Z",
                            fill: "black"
                        }
                    })])]), a("div", {
                        staticClass: "\n              relative\n              rounded-r-12px\n              pt-4\n              pb-4\n              px-4\n              w-full\n              flex\n              items-center\n              justify-center\n              text-center\n            ",
                        class: e.nextReward.isDarkText ? "text-black" : "text-white",
                        style: {
                            backgroundColor: "" + e.nextReward.accentColor
                        }
                    }, [a("span", {
                        staticClass: "overlay"
                    }), e.nextReward ? a("span", {
                        staticClass: "block font-bold",
                        class: {
                            "text-sm leading-6": e.nextReward.name.split(" ").length > 8,
                            "text-base leading-8": e.nextReward.name.split(" ").length <= 5
                        }
                    }, [e._v(e._s(e.nextReward.name))]) : e._e()])])])], 1)], 1)])
                }
                    , Ge = []
                    , Ze = (a("7514"),
                        a("20d6"),
                        function() {
                            var e = this
                                , t = e.$createElement
                                , a = e._self._c || t;
                            return a("div", [a("vue-countdown", {
                                attrs: {
                                    time: e.milliSecondsTime,
                                    "emit-events": !0
                                },
                                on: {
                                    end: e.onFinish
                                },
                                scopedSlots: e._u([{
                                    key: "default",
                                    fn: function(t) {
                                        return [a("div", {
                                            staticClass: "flex justify-center items-start"
                                        }, [a("div", {
                                            staticClass: " flex flex-col justify-center item-center text-center"
                                        }, [a("span", [e._v(e._s(e.addZeroToTime(t.hours)))])]), a("span", {
                                            staticClass: "block  px-1"
                                        }, [e._v(":")]), a("div", {
                                            staticClass: "  flex flex-col justify-center item-center text-center"
                                        }, [a("span", [e._v(e._s(e.addZeroToTime(t.minutes)))])]), a("span", {
                                            staticClass: "block px-1"
                                        }, [e._v(":")]), a("div", {
                                            staticClass: " flex flex-col justify-center item-center text-center"
                                        }, [a("span", [e._v(e._s(e.addZeroToTime(t.seconds)))])])])]
                                    }
                                }])
                            })], 1)
                        }
                )
                    , We = []
                    , qe = (a("6b54"),
                    a("87b3"),
                    {
                        data: function() {
                            return {
                                days: 0,
                                hours: 0,
                                minutes: 0,
                                seconds: 0
                            }
                        },
                        methods: {
                            countDown: function(e, t, a) {
                                var r = new Date(t).getTime()
                                    , n = 0
                                    , s = setInterval((function() {
                                        var t = new Date(e).getTime() + n
                                            , i = r - t;
                                        this.days = Math.floor(i / 864e5),
                                            this.hours = Math.floor(i % 864e5 / 36e5),
                                            this.minutes = Math.floor(i % 36e5 / 6e4),
                                            this.seconds = Math.floor(i % 6e4 / 1e3),
                                        i < 0 && (console.log("Countdown Finished"),
                                            clearInterval(s),
                                            a()),
                                            n += 1e3
                                    }
                                ), 1e3)
                            }
                        }
                    })
                    , Be = a("407d")
                    , Ue = a.n(Be)
                    , Je = {
                    components: {
                        VueCountdown: Ue.a
                    },
                    props: {
                        milliSecondsTime: {}
                    },
                    methods: {
                        addZeroToTime: function(e) {
                            return 1 === e.toString().length && (e = "0" + e),
                                e
                        },
                        onFinish: function() {
                            this.$emit("setNewFeaturedMerchant")
                        }
                    }
                }
                    , Ye = Je
                    , Ke = (a("06f7"),
                    Object(Y["a"])(Ye, Ze, We, !1, null, "ecaab29c", null))
                    , Qe = Ke.exports
                    , Xe = {
                    components: {
                        Swiper: Ae["Swiper"],
                        SwiperSlide: Ae["SwiperSlide"],
                        CountDown: Qe
                    },
                    data: function() {
                        return {
                            swiperOption: {
                                scrollbar: !1,
                                slidesPerView: "auto",
                                spaceBetween: 16,
                                grabCursor: !0,
                                observer: !0,
                                observeParents: !0,
                                mousewheel: !1,
                                centeredSlides: !1,
                                allowTouchMove: !0
                            },
                            rewardsForToday: [],
                            mappedRewardsForToday: [],
                            nextReward: null,
                            currentRewardRemainingTime: 0
                        }
                    },
                    computed: {
                        featuredRewards: Object(c["e"])("app/uiSchema@featuredRewards"),
                        featuredInterval: Object(c["e"])("app/uiSchema@featuredInterval"),
                        serverDateTime: Object(c["e"])("app/config@serverDateTime"),
                        rewards: Object(c["e"])("app/uiSchema@rewards"),
                        dayOfWeekRewards: Object(c["e"])("app/uiSchema@dayOfWeekRewards"),
                        currentServerDateTime: Object(c["e"])("app/currentServerDateTime"),
                        serverDateTIme: Object(c["e"])("app/config@serverDateTIme"),
                        currentFeaturedPrize: Object(c["e"])("app/currentFeaturedPrize")
                    },
                    watch: {
                        currentServerDateTime: {
                            immediate: !0,
                            handler: function(e, t) {
                                new Date(e).setHours(0, 0, 0, 0) > new Date(t).setHours(0, 0, 0, 0) && this.setScheduleForTheDay()
                            }
                        }
                    },
                    created: function() {
                        this.setScheduleForTheDay(),
                            this.setFeaturedPrize()
                    },
                    mounted: function() {
                        var e = this;
                        this.$refs.swiper.$swiper.on("activeIndexChange", (function() {
                                0 !== e.$refs.swiper.$swiper.activeIndex && e.$refs.swiper.$swiper.slideTo(0)
                            }
                        ))
                    },
                    methods: {
                        setScheduleForTheDay: function() {
                            var e = this.dayOfWeekRewards[this.currentServerDateTime.getDay()];
                            this.rewardsForToday = this.rewards[e],
                                this.mappedRewardsForToday = this.setRewardsForTheDay(this.rewardsForToday)
                        },
                        setRewardsForTheDay: function(e) {
                            var t = this
                                , a = 0
                                , r = e.map((function(e) {
                                    var r = {
                                        denominationID: e,
                                        from: a,
                                        to: a + (t.featuredInterval - 1)
                                    };
                                    return a += t.featuredInterval,
                                        r
                                }
                            ));
                            return r
                        },
                        setFeaturedPrize: function() {
                            var e = this
                                , t = this.currentServerDateTime.getHours();
                            console.log("Current Hour: " + t);
                            var a = this.mappedRewardsForToday.findIndex((function(e) {
                                    return t >= e.from && t <= e.to
                                }
                            ));
                            this.currentFeaturedPrize = this.featuredRewards.find((function(t) {
                                    return t.denominationID === e.mappedRewardsForToday[a].denominationID
                                }
                            ));
                            var r = new Date(this.currentServerDateTime).setHours(this.mappedRewardsForToday[a].to + 1, 0, 0, 0);
                            this.currentRewardRemainingTime = r - new Date(this.currentServerDateTime).getTime();
                            var n = a + 1;
                            if (n > this.mappedRewardsForToday.length - 1) {
                                var s = this.dayOfWeekRewards[this.currentServerDateTime.getDay() + 1]
                                    , i = void 0 !== s ? this.setRewardsForTheDay(this.rewards[s]) : this.setRewardsForTheDay(this.rewards[this.dayOfWeekRewards[0]]);
                                this.nextReward = this.featuredRewards.find((function(e) {
                                        return e.denominationID === i[0].denominationID
                                    }
                                ))
                            } else
                                this.nextReward = this.featuredRewards.find((function(t) {
                                        return t.denominationID === e.mappedRewardsForToday[n].denominationID
                                    }
                                ))
                        },
                        updateFeaturedPrize: function() {}
                    }
                }
                    , et = Xe
                    , tt = Object(Y["a"])(et, Ve, Ge, !1, null, "5d651d6c", null)
                    , at = tt.exports
                    , rt = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "bg-white"
                    }, [e._m(0), e._m(1), a("div", {
                        staticClass: "match-container mx-8 p-8 bg-black-squeeze"
                    }, [a("smooth-reflow", [e.isLoading ? a("div", {
                        staticClass: "p-26 flex items-center justify-center "
                    }, [a("app-loader", {
                        key: "2",
                        staticClass: "text-white"
                    })], 1) : a("div", {
                        staticClass: "flex flex-wrap"
                    }, e._l(e.cards, (function(t, r) {
                            return a("button", {
                                key: r,
                                staticClass: "card-wrapper p-6px w-1/3 focus:outline-none",
                                on: {
                                    click: function(t) {
                                        return t.preventDefault(),
                                            e.flip(r)
                                    }
                                }
                            }, [a("div", {
                                staticClass: "card",
                                class: {
                                    "flip-vertical-right": t.isFlipped
                                }
                            }, [a("div", {
                                staticClass: "front face"
                            }, [a("img", {
                                attrs: {
                                    src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-spend2022q2/tile-idle.png",
                                    alt: ""
                                }
                            })]), a("div", {
                                staticClass: "back face"
                            }, [a("img", {
                                attrs: {
                                    src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-spend2022q2/card-" + t.card + ".png",
                                    alt: ""
                                }
                            })])])])
                        }
                    )), 0)])], 1)])
                }
                    , nt = [function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "header-container relative pt-16 pb-12 bg-cover bg-center"
                    }, [a("img", {
                        staticClass: "relative block mx-auto",
                        attrs: {
                            width: "280",
                            src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-spend2022q2/summer-match-logo.png",
                            alt: ""
                        }
                    })])
                }
                    , function() {
                        var e = this
                            , t = e.$createElement
                            , a = e._self._c || t;
                        return a("div", {
                            staticClass: "p-8"
                        }, [a("p", {
                            staticClass: "text-center leading-7"
                        }, [e._v("\n      Get a matching\n      "), a("span", {
                            staticClass: "font-bold"
                        }, [e._v("⭐ star block to win the featured prize")]), e._v("\n       or get any other match to win a mystery prize.\n    ")])])
                    }
                ]
                    , st = {
                    components: {
                        AppLoader: X["default"]
                    },
                    data: function() {
                        return {
                            randomCards: [1, 2, 3, 4],
                            status: null,
                            cards: [{
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }],
                            token: "",
                            id: "",
                            life: 2,
                            currentCards: [-1, -1],
                            isShowGameOverDialog: !1,
                            isLoading: !1,
                            isLoading2: !1
                        }
                    },
                    computed: {
                        config: Object(c["c"])("app/config"),
                        featuredRewards: Object(c["c"])("app/uiSchema@featuredRewards"),
                        nonFeaturedRewards: Object(c["c"])("app/uiSchema@nonFeaturedRewards")
                    },
                    created: function() {
                        this.initGame()
                    },
                    methods: {
                        loadGame: Object(c["a"])("app/loadGame"),
                        gameOver: Object(c["a"])("app/gameOver"),
                        flip: function(e) {
                            0 !== this.life && (this.cards[e].card = this.currentCards[this.life - 1],
                                this.cards[e].isFlipped = !0,
                                this.life--,
                            0 === this.life && this.loadEndGame())
                        },
                        initGame: function() {
                            var e = this;
                            this.isLoading = !0;
                            var t = {
                                id: this.config.campaignID
                            };
                            this.loadGame(t).then((function(t) {
                                    if (0 === t.status.id)
                                        e.id = t.data.id,
                                            e.token = t.data.token,
                                            e.checkStatus();
                                    else {
                                        var a = {
                                            isSuccessful: !1,
                                            heading: "",
                                            message: "Something went wrong."
                                        };
                                        e.toggleFeedback(!0, a)
                                    }
                                    e.isLoading = !1
                                }
                            ))
                        },
                        checkStatus: function() {
                            var e = this
                                , t = this.featuredRewards.find((function(t) {
                                    return t.denominationID === e.id
                                }
                            ))
                                , a = this.nonFeaturedRewards.find((function(t) {
                                    return t.denominationID === e.id
                                }
                            ));
                            if (this.status = t ? 2 : a ? 1 : 0,
                            2 === this.status)
                                this.currentCards = [0, 0];
                            else if (1 === this.status) {
                                var r = this.getRandomCards();
                                this.currentCards = [r, r]
                            } else if (0 === this.status) {
                                var n = this.getRandomCards()
                                    , s = this.getRandomCards(n);
                                this.currentCards = [n, s]
                            }
                        },
                        getRandomCards: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                                , t = this.randomCards.filter((function(t) {
                                    return t !== e
                                }
                            ))
                                , a = Math.floor(Math.random() * t.length);
                            return t[a]
                        },
                        loadEndGame: function() {
                            var e = this;
                            if (!this.isLoading2) {
                                this.isLoading2 = !0;
                                var t = {
                                    id: this.config.campaignID,
                                    token: this.token
                                };
                                this.gameOver(t).then((function(t) {
                                        if (0 === t.status.id)
                                            setTimeout((function() {
                                                    e.isShowGameOverDialog = !0
                                                }
                                            ), 1e3);
                                        else {
                                            var a = {
                                                isSuccessful: !1,
                                                heading: "",
                                                message: "Something went wrong."
                                            };
                                            e.toggleFeedback(!0, a)
                                        }
                                        e.isLoading2 = !1
                                    }
                                ))
                            }
                        }
                    }
                }
                    , it = st
                    , ot = (a("9b48"),
                    Object(Y["a"])(it, rt, nt, !1, null, "6391ebb7", null))
                    , ct = ot.exports
                    , lt = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "py-12 px-8"
                    }, [a("p", {
                        staticClass: "font-bold text-center text-xl"
                    }, [e._v("My Prizes")]), e.isLoading ? a("div", {
                        staticClass: "flex flex-col"
                    }, [e._m(0)]) : e.isShowFeedback ? a("page-feedback", {
                        attrs: {
                            alert: e.alert
                        },
                        on: {
                            toggleFeedback: e.toggleFeedback
                        }
                    }) : e.gamePrizes.length ? a("div", {
                        staticClass: "mt-10"
                    }, e._l(e.gamePrizes, (function(e) {
                            return a("game-prize-item", {
                                key: e.id,
                                attrs: {
                                    prize: e
                                }
                            })
                        }
                    )), 1) : a("div", {
                        staticClass: "mt-10 text-center"
                    }, [a("img", {
                        staticClass: "inline-block mx-auto",
                        attrs: {
                            src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/warning-icon.png",
                            width: "96",
                            alt: ""
                        }
                    }), a("p", {
                        staticClass: "mt-8 text-lg font-bold"
                    }, [e._v("Oops, you don't have prizes yet. ")]), a("p", {
                        staticClass: "mt-4 text-pale-sky leading-6 text-sm"
                    }, [e._v("Start earning playcodes by using your credit card on qualified transactions to play the game and win amazing prizes.")])])], 1)
                }
                    , dt = [function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "h-64 pt-20 text-center w-full"
                    }, [a("p", {
                        staticClass: "text-center w-full animate animate-pulse"
                    }, [e._v("\n        Loading prizes...\n      ")])])
                }
                ]
                    , ut = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "\n    Transaction\n    relative\n    mb-4\n    border border-transparent-dark-1\n    flex\n    items-stretch\n    justify-between\n    overflow-hidden\n  ",
                        class: (e.isActiveCode,
                            "")
                    }, [a("div", {
                        staticClass: "border-l-8 w-full pl-4 py-4 mr-2 flex flex-col justify-center",
                        class: {
                            "border-secondary-500": e.isActiveCode,
                            "border-iron": !e.isActiveCode
                        }
                    }, [a("p", {
                        key: "2",
                        staticClass: "font-bold leading-tight text-sm"
                    }, [e._v("\n      " + e._s(e.currentReward.name) + "\n    ")]), a("p", {
                        staticClass: "mt-1 text-xs text-gray-chateau truncate"
                    }, [e._v("#" + e._s(e.prize.referenceNo))])]), a("div", {
                        staticClass: "\n      Transaction__button\n      flex-shrink-0 flex-grow-0 flex\n      items-center\n      justify-center\n      pr-4\n    "
                    }, [e.isActiveCode ? a("button", {
                        staticClass: "\n        button\n        bg-primary-500\n        border\n        border-transparent-dark-1\n        w-20\n        h-10\n        leading-9\n        block\n        uppercase\n        text-sm text-white\n      ",
                        on: {
                            click: e.claim
                        }
                    }, [e._v("\n      CLAIM\n    ")]) : e.canResend ? a("button", {
                        staticClass: "\n        button\n        disabled\n        bg-gray-chateau\n        w-20\n        h-10\n        leading-9\n        block\n        uppercase\n        text-xs text-white\n        tracking-wider\n      ",
                        on: {
                            click: e.resendCode
                        }
                    }, [e._v("\n      RESEND\n    ")]) : e._e()]), a("keep-alive", [a("app-dialog", {
                        attrs: {
                            showing: e.isShowDialog,
                            "max-width": "366px",
                            classes: {
                                content: "mx-auto   rounded-2xl overflow-visible h-full",
                                root: "px-4 bg-transparent-darker overflow-y-scroll"
                            },
                            transition: "dialog",
                            "bg-transition": "fade"
                        },
                        on: {
                            hide: e.toggleDialog
                        }
                    }, [a("div", {
                        staticClass: "dialog h-full flex flex-col justify-center items-center "
                    }, [a("smooth-reflow", {
                        staticClass: "w-full"
                    }, [e.isShowFeedback ? a("app-feedback", {
                        staticClass: "py-8 bg-white rounded-2xl",
                        attrs: {
                            alert: e.alert
                        },
                        on: {
                            toggleFeedback: e.toggleFeedback
                        }
                    }) : e._e(), a("div", {
                        staticClass: "relative  text-center bg-white  rounded-xl"
                    }, [e.isLoading ? a("div", {
                        staticClass: "py-20  "
                    }, [a("app-loader", {
                        staticClass: "text-secondary-500"
                    })], 1) : e.isSuccessfulClaim ? a("div", [a("div", {
                        staticClass: "\n                  status-image\n                  items-center\n                  justify-center\n                  text-white\n                "
                    }, [a("img", {
                        staticStyle: {
                            width: "104px",
                            height: "104px"
                        },
                        attrs: {
                            src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/check-icon.png",
                            alt: ""
                        }
                    })]), a("div", {
                        staticClass: "  pt-16 pb-8 "
                    }, [a("p", {
                        staticClass: "mt-4 font-bold text-xl"
                    }, [e._v("eGift Claimed!")]), a("p", {
                        staticClass: "text-sm text-storm-dust px-8 "
                    }, [e._v("\n                Your eGift code will be sent to your registered mobile and\n                email address in a few minutes.\n              ")])]), a("button", {
                        staticClass: "button disabled rounded-t-none bg-gray-chateau w-full ",
                        on: {
                            click: e.toggleDialog
                        }
                    }, [e._v("\n                Close\n              ")])]) : e.isSuccessfulResend ? a("div", [a("div", {
                        staticClass: "\n                  status-image\n                  items-center\n                  justify-center\n                  text-white\n                "
                    }, [a("img", {
                        staticStyle: {
                            width: "104px",
                            height: "104px"
                        },
                        attrs: {
                            src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/check-icon.png",
                            alt: ""
                        }
                    })]), a("div", {
                        staticClass: "  pt-16 pb-8 border-2 "
                    }, [a("p", {
                        staticClass: "mt-4 font-bold text-xl"
                    }, [e._v("Successful!")]), a("p", {
                        staticClass: "text-sm text-storm-dust px-8 "
                    }, [e._v("\n                Your eGift code will be resent to your registered mobile and email address in a few minutes.\n              ")])]), a("button", {
                        staticClass: "button disabled rounded-t-none bg-gray-chateau w-full ",
                        on: {
                            click: e.toggleDialog
                        }
                    }, [e._v("\n                Close\n              ")])]) : e._e()])], 1)], 1)])], 1)], 1)
                }
                    , pt = []
                    , ft = a("75fc")
                    , mt = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "text-center px-6 py-6 bg-white overflow-hidden"
                    }, [e.alert.isSuccessful ? [a("div", {
                        staticClass: "text-center"
                    }, [a("font-awesome-icon", {
                        staticClass: "mb-2 text-primary-500 mx-auto block",
                        attrs: {
                            icon: ["far", "check-circle"],
                            size: "5x"
                        }
                    }), e.alert.heading ? a("span", {
                        staticClass: "block font-bold text-lg mb-2 text-woodsmoke"
                    }, [e._v(e._s(e.alert.heading))]) : e._e(), a("p", {
                        staticClass: "text-sm xs:text-base  leading-snug text-storm-dust"
                    }, [e._v(e._s(e.alert.message))])], 1)] : [a("div", {
                        staticClass: "text-center"
                    }, [a("div", [a("font-awesome-icon", {
                        staticClass: "mb-2 mx-auto block text-red-500",
                        attrs: {
                            icon: ["far", "exclamation-circle"],
                            size: "5x"
                        }
                    })], 1), a("span", {
                        staticClass: "block text-lg mb-2 text-woodsmoke"
                    }, [e._v("Something went wrong")]), a("p", {
                        staticClass: "mb-2 text-sm xs:text-base text-storm-dust"
                    }, [e._v("An error occurred. Please try again later.")]), a("button", {
                        staticClass: "bg-red-500 text-white rounded-md inline-block px-6 py-1 mt-2 hover:bg-red-600",
                        on: {
                            click: e.retry
                        }
                    }, [e._v("Retry")])])]], 2)
                }
                    , ht = []
                    , gt = {
                    name: "AppFeedback",
                    props: ["alert"],
                    methods: {
                        retry: function() {
                            this.$emit("toggleFeedback", !1, {})
                        }
                    }
                }
                    , bt = gt
                    , vt = Object(Y["a"])(bt, mt, ht, !1, null, null, null)
                    , wt = vt.exports
                    , xt = {
                    props: {
                        prize: Object
                    },
                    components: {
                        AppFeedback: wt,
                        AppLoader: X["default"],
                        AppDialog: Ee
                    },
                    data: function() {
                        return {
                            isShowFeedback: !1,
                            alert: {},
                            isShowDialog: !1,
                            isLoading: !1,
                            isSuccessfulClaim: !1,
                            isSuccessfulResend: !1
                        }
                    },
                    computed: {
                        featuredRewards: Object(c["c"])("app/uiSchema@featuredRewards"),
                        nonFeaturedRewards: Object(c["c"])("app/uiSchema@nonFeaturedRewards"),
                        grandRewards: Object(c["c"])("app/uiSchema@grandRewards"),
                        gamePrizes: Object(c["e"])("transactions/gamePrizes"),
                        config: Object(c["c"])("app/config"),
                        isActiveCode: function() {
                            return !this.prize.reward || this.prize.reward && !this.prize.reward.rewardDateTime
                        },
                        mixedRewards: function() {
                            return [].concat(Object(ft["a"])(this.featuredRewards), Object(ft["a"])(this.nonFeaturedRewards), Object(ft["a"])(this.grandRewards))
                        },
                        currentReward: function() {
                            var e = this;
                            return this.prize.reward ? this.mixedRewards.find((function(t) {
                                    return t.denominationID === e.prize.reward.id
                                }
                            )) : {}
                        },
                        canResend: function() {
                            return this.prize.resendCount < 3 && this.prize.reward.rewardDateTime
                        }
                    },
                    watch: {
                        isShowDialog: function(e) {
                            e || (this.isShowFeedback = !1)
                        }
                    },
                    methods: {
                        claimPrize: Object(c["a"])("transactions/claimPrize"),
                        resend: Object(c["a"])("transactions/resend"),
                        toggleFeedback: function(e, t) {
                            this.isShowFeedback = e,
                                this.alert = t
                        },
                        toggleDialog: function() {
                            this.isShowDialog = !this.isShowDialog,
                            this.isShowDialog || (this.isSuccessfulClaim = !1)
                        },
                        claim: function() {
                            var e = this;
                            if (!this.isLoading) {
                                this.toggleDialog(),
                                    this.isLoading = !0,
                                    this.isSuccessfulClaim = !1,
                                    this.alert = {};
                                var t = {
                                    id: this.config.campaignID,
                                    token: this.prize.token
                                };
                                this.claimPrize(t).then((function(t) {
                                        if (0 === t.status.id)
                                            e.isSuccessfulClaim = !0,
                                                e.updateTransactions();
                                        else {
                                            var a = {
                                                isSuccessful: !1,
                                                heading: "",
                                                message: "Something went wrong."
                                            };
                                            e.toggleFeedback(!0, a)
                                        }
                                        e.isLoading = !1
                                    }
                                ))
                            }
                        },
                        resendCode: function() {
                            var e = this;
                            this.isLoading = !0,
                                this.isSuccessfulResend = !1,
                                this.toggleDialog();
                            var t = {
                                id: this.config.campaignID,
                                token: this.prize.id
                            };
                            new Date;
                            this.resend(t).then((function(t) {
                                    0 === t.id ? (e.isSuccessfulResend = !0,
                                        e.updateResendCount()) : 5 === t.id ? e.logout().then((function(t) {
                                            if (0 === t.id) {
                                                e.$store.dispatch("app/resetAppState", !1),
                                                    e.$store.dispatch("transactions/resetTransactionsState", !1);
                                                var a = {
                                                    isSuccessful: !1,
                                                    message: "You have been automatically logged out  due to inactivity. Please login and try again."
                                                };
                                                e.$router.push({
                                                    path: "/login",
                                                    name: "login",
                                                    params: {
                                                        alert: a
                                                    }
                                                })
                                            }
                                        }
                                    )) : (e.alert.isSuccessful = !1,
                                        e.alert.message = "Something went wrong. Please try again."),
                                    0 !== t.id && e.toggleFeedback(!0, e.alert),
                                        e.isLoading = !1
                                }
                            ))
                        },
                        updateResendCount: function() {
                            var e = this
                                , t = this.gamePrizes.findIndex((function(t) {
                                    return t.id === e.prize.id
                                }
                            ));
                            this.gamePrizes[t].resendCount += 1
                        },
                        updateTransactions: function() {
                            var e = this
                                , t = this.gamePrizes.findIndex((function(t) {
                                    return t.id === e.prize.id
                                }
                            ));
                            this.gamePrizes[t].reward.rewardDateTime = new Date
                        }
                    },
                    mounted: function() {}
                }
                    , Ct = xt
                    , yt = (a("e41a"),
                    Object(Y["a"])(Ct, ut, pt, !1, null, "2702e622", null))
                    , _t = yt.exports
                    , kt = {
                    components: {
                        PageFeedback: Pe,
                        GamePrizeItem: _t
                    },
                    data: function() {
                        return {
                            isShowFeedback: !1,
                            alert: {},
                            isLoading: !1
                        }
                    },
                    computed: {
                        config: Object(c["c"])("app/config"),
                        gamePrizes: Object(c["e"])("transactions/gamePrizes"),
                        isRefreshGamePrizes: Object(c["e"])("app/isRefreshGamePrizes")
                    },
                    watch: {
                        isRefreshGamePrizes: {
                            handler: function(e) {
                                e && (this.loadPrizes(),
                                    this.isRefreshGamePrizes = !1)
                            },
                            immediate: !0
                        }
                    },
                    created: function() {
                        this.gamePrizes.length || this.loadPrizes()
                    },
                    methods: {
                        getPrizes: Object(c["a"])("transactions/getPrizes"),
                        logout: Object(c["a"])("app/logout"),
                        loadPrizes: function() {
                            var e = this;
                            this.isLoading = !0,
                                this.alert = {};
                            var t = {
                                id: this.config.campaignID
                            };
                            this.getPrizes(t).then((function(t) {
                                    if (5 === t.status.id)
                                        e.logout().then((function(t) {
                                                0 === t.id && (e.$store.dispatch("app/resetAppState", !1),
                                                    e.$store.dispatch("transactions/resetTransactionsState", !1),
                                                    e.$router.push("/login")),
                                                    e.isLoading = !1
                                            }
                                        ));
                                    else if (0 !== t.status.id) {
                                        var a = {
                                            isSuccessful: !1,
                                            heading: "",
                                            message: "Something went wrong while loading your prizes."
                                        };
                                        e.toggleFeedback(!0, a),
                                            e.isLoading = !1
                                    } else
                                        e.isLoading = !1
                                }
                            ))
                        },
                        toggleFeedback: function(e, t) {
                            this.alert = t,
                                this.isShowFeedback = e,
                            e || this.loadPrizes()
                        }
                    }
                }
                    , Ot = kt
                    , jt = Object(Y["a"])(Ot, lt, dt, !1, null, null, null)
                    , Lt = jt.exports
                    , Pt = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", [!e.isLoading && e.grandPrize.name ? a("div", {
                        staticClass: "\n      relative\n      p-2\n      min-h-164px\n      text-center\n      rounded-xl\n      flex\n      justify-center\n      items-stretch\n     \n    ",
                        class: e.grandPrize.name.split(" ").length < 9 ? "h-1" : "",
                        style: {
                            backgroundColor: "" + e.grandPrize.accentColor
                        }
                    }, [a("div", {
                        staticClass: "absolute top-0 left-0 -mt-5 z-10 w-full text-center"
                    }, [a("div", {
                        staticClass: "\n          inline-block\n          py-3\n          px-6\n          rounded-full\n          border border-transparent-dark-3\n          bg-white\n          shadow-inset-2\n        "
                    }, [a("div", {
                        staticClass: "flex items-center justify-center"
                    }, [a("svg", {
                        attrs: {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [a("path", {
                        attrs: {
                            d: "M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z",
                            stroke: "black",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M16 2V6",
                            stroke: "black",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M8 2V6",
                            stroke: "black",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M3 10H21",
                            stroke: "black",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M8 14H8.01",
                            stroke: "black",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M12 14H12.01",
                            stroke: "black",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M16 14H16.01",
                            stroke: "black",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M8 18H8.01",
                            stroke: "black",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M12 18H12.01",
                            stroke: "black",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M16 18H16.01",
                            stroke: "black",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })]), a("span", {
                        staticClass: "inline-block ml-2 font-bold"
                    }, [e._v("\n            " + e._s(e.days) + " " + e._s(e.days > 1 ? "Days" : "Day") + " Left\n          ")])])])]), a("div", {
                        staticClass: "pt-8 pb-4 bg-center bg-cover bg-no-repeat rounded-10px h-full",
                        class: e.grandPrize.name.split(" ").length <= 3 ? "px-8" : "px-5",
                        staticStyle: {
                            "background-image": "url('https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/grand-prize-cover-3.png')"
                        }
                    }, [a("p", {
                        staticClass: "\n          mt-1\n          flex\n          items-center\n          justify-center\n          font-semibold\n          text-sm\n          leading-none\n          tracking-widest\n          uppercase\n        "
                    }, [a("font-awesome-icon", {
                        attrs: {
                            size: "xs",
                            icon: ["fas", "star"]
                        }
                    }), a("span", {
                        staticClass: "mx-2 whitespace-no-wrap font-semibold"
                    }, [e._v("Leveled Up Prize")]), a("font-awesome-icon", {
                        attrs: {
                            size: "xs",
                            icon: ["fas", "star"]
                        }
                    })], 1), a("p", {
                        staticClass: "mt-2 font-bold font-heading text-xl leading-snug"
                    }, [e._v("\n        " + e._s(e.grandPrize.name) + "\n      ")])])]) : e._e()])
                }
                    , St = [];
                function Rt(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }
                        ))),
                            a.push.apply(a, r)
                    }
                    return a
                }
                function Dt(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Rt(Object(a), !0).forEach((function(t) {
                                Object(o["a"])(e, t, a[t])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Rt(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }
                        ))
                    }
                    return e
                }
                var zt = {
                    data: function() {
                        return {
                            isLoading: !1,
                            days: 0
                        }
                    },
                    computed: {
                        grandPrize: Object(c["e"])("transactions/grandPrize"),
                        uiSchema: Object(c["e"])("app/uiSchema"),
                        config: Object(c["e"])("app/config")
                    },
                    created: function() {
                        this.loadGrandPrize()
                    },
                    methods: {
                        getGrandPrize: Object(c["a"])("transactions/getGrandPrize"),
                        loadGrandPrize: function() {
                            var e = this;
                            this.isLoading = !0;
                            var t = {
                                id: this.config.campaignID
                            };
                            this.getGrandPrize(t).then((function(t) {
                                    if (0 === t.status.id) {
                                        var a = e.uiSchema.grandRewards.find((function(e) {
                                                return e.denominationID === t.data[0].denominationID
                                            }
                                        ));
                                        console.log(a),
                                            e.grandPrize = Dt({}, a, {}, t.data[0]);
                                        var r = 864e5
                                            , n = new Date(e.config.serverDateTime).setHours(0, 0, 0, 0)
                                            , s = new Date(t.data[0].endDateTime).setHours(0, 0, 0, 0);
                                        e.days = Math.round(Math.abs((n - s) / r)),
                                            e.days += 1
                                    }
                                    e.isLoading = !1
                                }
                            ))
                        }
                    }
                }
                    , Tt = zt
                    , Et = Object(Y["a"])(Tt, Pt, St, !1, null, null, null)
                    , Ft = Et.exports;
                function Mt(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }
                        ))),
                            a.push.apply(a, r)
                    }
                    return a
                }
                function At(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Mt(Object(a), !0).forEach((function(t) {
                                Object(o["a"])(e, t, a[t])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Mt(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }
                        ))
                    }
                    return e
                }
                var $t = {
                    components: {
                        PageFeedback: Pe,
                        AppLoader: X["default"],
                        AppAlert: fe,
                        AppDialog: Ee,
                        MysteryCarousel: He,
                        FeaturedCarousel: at,
                        MatchGame: ct,
                        GrandPrize: Ft,
                        GamePrizes: Lt
                    },
                    props: {
                        isScrollToMyPrizes: {
                            type: Boolean,
                            default: !1,
                            required: !1
                        },
                        refresh: {
                            type: Boolean,
                            default: !1,
                            required: !1
                        }
                    },
                    mixins: [me],
                    computed: {
                        transactions: Object(c["e"])("transactions/transactions"),
                        ticketsCount: Object(c["e"])("transactions/ticketsCount"),
                        dateRegistered: Object(c["e"])("app/dateRegistered"),
                        isRedemptionExpired: Object(c["e"])("app/isRedemptionExpired"),
                        isRedemptionStarted: Object(c["e"])("app/isRedemptionStarted"),
                        totalTicketsCount: Object(c["e"])("transactions/totalTicketsCount"),
                        isRefreshGamePrizes: Object(c["e"])("app/isRefreshGamePrizes"),
                        config: Object(c["e"])("app/config")
                    },
                    data: function() {
                        return {
                            isLoading: !1,
                            isLoggingOut: !1,
                            isShowDialog: !1,
                            alert: {},
                            isShowGame: !1,
                            isShowFeedback: !1
                        }
                    },
                    watch: {
                        isRedemptionExpired: {
                            handler: function(e) {
                                e && this.onLogout()
                            },
                            immediate: !0
                        },
                        refresh: {
                            handler: function(e) {
                                e && (this.isRefreshGamePrizes = !0)
                            },
                            immediate: !0
                        }
                    },
                    created: function() {
                        this.loadTickets()
                    },
                    mounted: function() {
                        if (window.scrollTo(0, 0),
                            this.isScrollToMyPrizes) {
                            var e = document.getElementById("prizes");
                            e.scrollIntoView()
                        }
                        this.isRedemptionStarted || this.onLogout()
                    },
                    methods: At({}, Object(c["a"])("transactions/*"), {}, Object(c["a"])("app/*"), {
                        toggleFeedback: function(e, t) {
                            this.alert = t,
                                this.isShowFeedback = e,
                            e || this.loadTransactions()
                        },
                        loadTickets: function() {
                            var e = this;
                            this.isLoading = !0;
                            var t = {
                                id: this.config.campaignID
                            };
                            this.getTickets(t).then((function(t) {
                                    if (0 === t.status.id)
                                        e.ticketsCount = t.data.remaining,
                                            e.totalTicketsCount = t.data.total;
                                    else if (5 === t.status.id)
                                        e.logout().then((function(t) {
                                                if (0 === t.id) {
                                                    e.$store.dispatch("app/resetAppState", !1),
                                                        e.$store.dispatch("transactions/resetTransactionsState", !1);
                                                    var a = {
                                                        isSuccessful: !1,
                                                        message: "You have been automatically logged out  due to inactivity. Please login and try again."
                                                    };
                                                    e.$router.push({
                                                        path: "/login",
                                                        name: "login",
                                                        params: {
                                                            alert: a
                                                        }
                                                    })
                                                }
                                                e.isLoading = !1
                                            }
                                        ));
                                    else {
                                        var a = {
                                            isSuccessful: !1,
                                            heading: "",
                                            message: "Something went wrong while loading your playcodes."
                                        };
                                        e.toggleFeedback(!0, a)
                                    }
                                    e.isLoading = !1
                                }
                            )).catch((function(t) {
                                    var a = {
                                        isSuccessful: !1,
                                        heading: "",
                                        message: "Something went wrong while loading your playcodes."
                                    };
                                    e.toggleFeedback(!0, a),
                                        e.isLoading = !1
                                }
                            ))
                        },
                        onLogout: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                                    var t = this;
                                    return regeneratorRuntime.wrap((function(e) {
                                            while (1)
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        this.isLoggingOut = !0,
                                                            this.logout().then((function(e) {
                                                                    0 === e.id && (t.$store.dispatch("app/resetAppState", !1),
                                                                        t.$store.dispatch("transactions/resetTransactionsState", !1),
                                                                        t.$router.push("/login")),
                                                                        t.isLoggingOut = !1
                                                                }
                                                            ));
                                                    case 2:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e, this)
                                }
                            )));
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        toggleDialog: function() {
                            this.isShowDialog = !this.isShowDialog
                        }
                    })
                }
                    , Nt = $t
                    , It = (a("cccb"),
                    Object(Y["a"])(Nt, Ce, ye, !1, null, null, null))
                    , Ht = It.exports
                    , Vt = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "bg-white pb-12"
                    }, [e._m(0), e._m(1), a("div", {
                        staticClass: "\n      match-container\n      mx-8\n      p-8\n      bg-porcelain\n      rounded-3xl\n      border border-transparent-dark-1\n    "
                    }, [a("smooth-reflow", [e.isLoading ? a("div", {
                        staticClass: "p-26 flex items-center justify-center"
                    }, [a("app-loader", {
                        key: "2",
                        staticClass: "text-white"
                    })], 1) : a("div", {
                        staticClass: "flex flex-wrap"
                    }, e._l(e.cards, (function(t, r) {
                            return a("button", {
                                key: r,
                                staticClass: "card-wrapper p-6px w-1/3 focus:outline-none",
                                on: {
                                    click: function(t) {
                                        return t.preventDefault(),
                                            e.flip(r)
                                    }
                                }
                            }, [a("div", {
                                staticClass: "card",
                                class: {
                                    "flip-vertical-right": t.isFlipped
                                }
                            }, [a("div", {
                                staticClass: "front face"
                            }, [a("img", {
                                attrs: {
                                    src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/tile-idle.png",
                                    alt: ""
                                }
                            })]), a("div", {
                                staticClass: "back face"
                            }, [a("img", {
                                attrs: {
                                    src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/card-" + t.card + ".png",
                                    alt: ""
                                }
                            })])])])
                        }
                    )), 0)])], 1), a("app-dialog", {
                        attrs: {
                            showing: e.isShowGameOverDialog,
                            "max-width": "366px",
                            classes: {
                                content: "mx-auto rounded-2xl overflow-visible h-full",
                                root: "px-4 bg-transparent-darker overflow-y-scroll"
                            },
                            transition: "dialog",
                            "bg-transition": "fade",
                            dismissible: !1
                        }
                    }, [a("div", {
                        staticClass: "dialog h-full flex flex-col justify-center items-center"
                    }, [a("smooth-reflow", {
                        staticClass: "w-full"
                    }, [a("div", {
                        staticClass: "relative text-center"
                    }, [a("div", {
                        staticClass: "status-image items-center justify-center text-white"
                    }, [a("img", {
                        staticStyle: {
                            width: "104px",
                            height: "104px"
                        },
                        attrs: {
                            src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/" + (e.isWin ? "win" : "lose-2") + ".png",
                            alt: ""
                        }
                    })]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isWin,
                            expression: "isWin"
                        }],
                        staticClass: "\n              absolute\n              top-0\n              z-50\n              -mt-16\n              w-full\n              h-full\n              flex\n              justify-center\n            "
                    }, [a("img", {
                        staticClass: "absolute top-0 -mt-8",
                        staticStyle: {
                            width: "204px"
                        },
                        attrs: {
                            src: "https://s3.us-east-1.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/sparks.png",
                            alt: ""
                        }
                    })]), e.isWin ? [a("div", {
                        staticClass: "bg-white rounded-t-xl pt-16 pb-8"
                    }, [a("p", {
                        staticClass: "font-bold text-xl"
                    }, [e._v("Congratulations!")]), a("p", {
                        staticClass: "text-sm text-storm-dust"
                    }, [e._v("\n                You won\n                " + e._s(e.isFeatured ? "the Featured Prize" : "the Mystery Prize") + "\n              ")]), e.currentReward ? a("div", {
                        staticClass: "\n                  mt-8\n                  mx-8\n                  p-2\n                  text-center\n                  bg-center bg-cover\n                  rounded-xl\n                ",
                        class: e.currentReward.isDarkText ? "text-black" : "text-white",
                        style: {
                            backgroundColor: "" + e.currentReward.accentColor
                        }
                    }, [a("div", {
                        staticClass: "p-8 bg-center bg-cover bg-no-repeat rounded-10px",
                        style: {
                            backgroundImage: e.isFeatured ? "url(https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/rising-sun.png)" : ""
                        }
                    }, [a("p", {
                        staticClass: "\n                      flex\n                      items-center\n                      justify-center\n                      font-semibold\n                      text-sm\n                      leading-none\n                      tracking-widest\n                      uppercase\n                    "
                    }, [a("font-awesome-icon", {
                        attrs: {
                            size: "xs",
                            icon: ["fas", "star"]
                        }
                    }), a("span", {
                        staticClass: "mx-2 leading-relaxed 2xs:whitespace-no-wrap"
                    }, [e._v("\n                      " + e._s(e.isFeatured ? "Featured Prize" : "Mystery Prize") + "\n                    ")]), a("font-awesome-icon", {
                        attrs: {
                            size: "xs",
                            icon: ["fas", "star"]
                        }
                    })], 1), e.currentReward ? a("span", {
                        staticClass: "mt-2 block font-bold",
                        class: {
                            "text-lg leading-6": e.currentReward.name.split(" ").length > 8,
                            "text-xl leading-7": e.currentReward.name.split(" ").length > 5 && e.currentReward.name.split(" ").length <= 8,
                            "text-2xl leading-8": e.currentReward.name.split(" ").length <= 5
                        }
                    }, [e._v(e._s(e.currentReward.name))]) : e._e()])]) : e._e()]), a("div", {
                        staticClass: "flex"
                    }, [a("button", {
                        staticClass: "\n                  button\n                  primary\n                  w-full\n                  bg-primary-500\n                  border-l-0 border-r-0\n                  rounded-t-none\n                ",
                        on: {
                            click: function(t) {
                                return e.$router.push({
                                    path: "/",
                                    name: "home",
                                    params: {
                                        isScrollToMyPrizes: !0,
                                        refresh: !0
                                    }
                                })
                            }
                        }
                    }, [e._v("\n                See My Prizes\n              ")])])] : [a("div", {
                        staticClass: "bg-white rounded-t-xl pt-16 pb-8"
                    }, [a("p", {
                        staticClass: "font-bold text-xl"
                    }, [e._v("Better luck next time!")]), e.ticketsCount ? [a("p", {
                        staticClass: "text-sm text-storm-dust"
                    }, [e._v("\n                  Would you like to try again?\n                ")]), a("div", {
                        staticClass: "rounded-lg mt-8 mx-8 py-10 bg-mercury px-4"
                    }, [a("p", {
                        staticClass: "text-base"
                    }, [a("span", {
                        staticClass: "font-bold"
                    }, [e._v(e._s(e.ticketsCount) + "\n                      " + e._s(e.ticketsCount <= 1 ? "playcode" : "playcodes") + " left\n                    ")]), e._v("\n                    out of " + e._s(e.totalTicketsCount) + "\n                    " + e._s(e.totalTicketsCount <= 1 ? "playcode" : "playcodes") + "\n                  ")])])] : [a("div", {
                        staticClass: "rounded-lg mt-8 mx-8 py-10 px-4 bg-mercury"
                    }, [a("p", {
                        staticClass: "text-bace"
                    }, [e._v("\n                    You have used up all your playcodes. Spend more to earn\n                    more playcodes to play!\n                  ")])])], a("p", {
                        staticClass: "mt-4 px-8 text-center text-sm"
                    }, [e._v("\n                Keep using your credit card to earn more playcodes!\n              ")])], 2), a("div", {
                        staticClass: "flex"
                    }, [a("button", {
                        staticClass: "\n                  button\n                  secondary\n                  bg-gray-chateau\n                  rounded-t-none rounded-br-none\n                ",
                        class: {
                            "w-full": !e.ticketsCount,
                            "border-l-0": e.ticketsCount
                        },
                        on: {
                            click: function(t) {
                                return e.$router.push("/")
                            }
                        }
                    }, [e._v("\n                Go To Home\n              ")]), e.ticketsCount ? a("button", {
                        staticClass: "\n                  button\n                  primary\n                  bg-primary-500\n                  border-l-0 border-r-0\n                  rounded-t-none rounded-bl-none\n                ",
                        on: {
                            click: e.playAgain
                        }
                    }, [e._v("\n                Play Again\n              ")]) : e._e()])]], 2)])], 1)]), a("app-dialog", {
                        attrs: {
                            showing: e.isShowFeaturedPrize,
                            "max-width": "366px",
                            classes: {
                                content: "mx-auto  overflow-visible py-4 h-full",
                                root: "px-4 bg-transparent-darker overflow-y-auto"
                            },
                            dismissible: !0,
                            transition: "dialog",
                            "bg-transition": "fade"
                        }
                    }, [a("div", {
                        staticClass: "dialog h-full flex flex-col justify-center items-center"
                    }, [a("div", {
                        staticClass: "\n          border-2 border-black\n          rounded-xl\n          p-8\n          w-full\n          bg-white\n          text-center\n        "
                    }, [a("p", {
                        staticClass: "font-bold text-xl"
                    }, [e._v("\n          You are about "), a("br"), e._v("\n          to start a game.\n        ")]), a("p", {
                        staticClass: "mt-2 mb-8 text-sm"
                    }, [a("span", {
                        staticClass: "font-bold"
                    }, [e._v("1 playcode")]), e._v(" will be used for this\n          game.\n        ")]), a("div", {
                        staticClass: "\n            relative\n            rounded-lg\n            border border-transparent-dark-1\n            shadow-inset-1\n            p-6px\n            flex\n            justify-center\n            items-center\n            bg-wild-sand\n          "
                    }, [a("div", {
                        ref: "navActive",
                        staticClass: "\n              absolute\n              z-10\n              rounded-md\n              border border-transparent-dark-1\n              shadow-custom-1\n              w-1/2\n              h-8\n              bg-white\n              transition-all\n              duration-100\n              ease-out\n            ",
                        staticStyle: {
                            left: "6px"
                        }
                    }), a("button", {
                        staticClass: "\n              relative\n              z-20\n              rounded-md\n              w-1/2\n              h-8\n              bg-transparent\n              flex\n              items-center\n              justify-center\n              text-sm\n              focus:outline-none\n            ",
                        class: 0 === e.activeNav ? "font-bold" : "text-trout",
                        on: {
                            click: function(t) {
                                e.activeNav = 0
                            }
                        }
                    }, [e._v("\n            Mechanics\n          ")]), a("button", {
                        staticClass: "\n              relative\n              z-20\n              rounded-md\n              w-1/2\n              h-8\n              bg-transparent\n              flex\n              items-center\n              justify-center\n              text-sm\n              focus:outline-none\n            ",
                        class: 1 === e.activeNav ? "font-bold" : "text-trout",
                        on: {
                            click: function(t) {
                                e.activeNav = 1
                            }
                        }
                    }, [e._v("\n            Prizes\n          ")])]), a("smooth-reflow", [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 0 === e.activeNav,
                            expression: "activeNav === 0"
                        }],
                        staticStyle: {
                            "min-height": "280px"
                        }
                    }, [a("p", {
                        staticClass: "mt-10 text-center text-xs leading-6"
                    }, [e._v("\n              Get a matching 🎁\n              "), a("span", {
                        staticClass: "font-bold"
                    }, [e._v("gift block to win the featured prize")]), e._v("\n              of the day or get other matches to win a mystery prize.\n            ")]), a("div", {
                        staticClass: "mt-4 rounded-lg p-3 flex bg-white"
                    }, [a("img", {
                        attrs: {
                            src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/card-0.png",
                            width: "56",
                            height: "56",
                            alt: ""
                        }
                    }), a("div", {
                        staticClass: "ml-4 flex flex-col justify-center text-left"
                    }, [a("span", {
                        staticClass: "font-medium text-xs text-oxford-blue uppercase"
                    }, [e._v("\n                  Gift Block\n                ")]), a("span", {
                        staticClass: "font-bold"
                    }, [e._v(" Featured Prize ")])])]), a("div", {
                        staticClass: "mt-4 rounded-lg p-3 flex bg-white"
                    }, [a("img", {
                        attrs: {
                            src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/card-4.png",
                            width: "56",
                            height: "56",
                            alt: ""
                        }
                    }), a("div", {
                        staticClass: "ml-4 flex flex-col justify-center text-left"
                    }, [a("span", {
                        staticClass: "font-medium text-xs text-oxford-blue uppercase"
                    }, [e._v("\n                  Other Block\n                ")]), a("span", {
                        staticClass: "font-bold"
                    }, [e._v(" Mystery Prize ")])])])]), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 === e.activeNav,
                            expression: "activeNav === 1"
                        }],
                        staticClass: "w-full flex flex-col items-center",
                        staticStyle: {
                            "min-height": "280px"
                        }
                    }, [a("div", {
                        staticClass: "relative h-full text-center mt-10",
                        staticStyle: {
                            width: "260px",
                            height: "115px"
                        }
                    }, [a("div", {
                        staticClass: "flex h-full"
                    }, [a("div", {
                        staticClass: "\n                    border border-transparent-dark-3\n                    h-full\n                    flex\n                    items-center\n                    justify-center\n                    bg-white\n                    text-center\n                    uppercase\n                    tracking-wild\n                    text-black\n                    rounded-l-12px\n                    overflow-hidden\n                    flex-grow-0 flex-shrink-0\n                  ",
                        staticStyle: {
                            "flex-basis": "40px"
                        }
                    }, [a("svg", {
                        attrs: {
                            width: "40",
                            height: "104",
                            viewBox: "0 0 40 104",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [a("rect", {
                        attrs: {
                            width: "40",
                            height: "104",
                            fill: "white"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M25 83.2415L16.2727 83.2415L16.2727 77.4631L17.794 77.4631L17.794 81.3963L19.8736 81.3963L19.8736 77.8466L21.3949 77.8466L21.3949 81.3963L25 81.3963L25 83.2415ZM25 76.2219L16.2727 76.2219L16.2727 70.3413L17.794 70.3413L17.794 74.3768L19.8736 74.3768L19.8736 70.6438L21.3949 70.6438L21.3949 74.3768L23.4787 74.3768L23.4787 70.3242L25 70.3242L25 76.2219ZM25 67.37L25 69.3473L16.2727 66.3345L16.2727 63.9567L25 60.9482L25 62.9254L18.267 65.1115L18.267 65.1797L25 67.37ZM21.5696 67.4936L21.5696 62.8232L23.0099 62.8232L23.0099 67.4936L21.5696 67.4936ZM17.794 61.2965L16.2727 61.2965L16.2727 54.1289L17.794 54.1289L17.794 56.8008L25 56.8008L25 58.6246L17.794 58.6246L17.794 61.2965ZM16.2727 47.5579L16.2727 45.7127L21.9403 45.7127C22.5767 45.7127 23.1335 45.8647 23.6108 46.1687C24.0881 46.4698 24.4602 46.8917 24.7273 47.4343C24.9915 47.9769 25.1236 48.609 25.1236 49.3306C25.1236 50.055 24.9915 50.6886 24.7273 51.2312C24.4602 51.7738 24.0881 52.1957 23.6108 52.4968C23.1335 52.7979 22.5767 52.9485 21.9403 52.9485L16.2727 52.9485L16.2727 51.1033L21.7827 51.1033C22.1151 51.1033 22.4105 51.0309 22.669 50.886C22.9276 50.7383 23.1307 50.5309 23.2784 50.2638C23.4261 49.9968 23.5 49.6857 23.5 49.3306C23.5 48.9727 23.4261 48.6616 23.2784 48.3974C23.1307 48.1303 22.9276 47.9244 22.669 47.7795C22.4105 47.6317 22.1151 47.5579 21.7827 47.5579L16.2727 47.5579ZM25 44.1946L16.2727 44.1946L16.2727 40.7514C16.2727 40.0923 16.3906 39.5298 16.6264 39.0639C16.8594 38.5952 17.1903 38.2386 17.6193 37.9943C18.0455 37.7472 18.5469 37.6236 19.1236 37.6236C19.7031 37.6236 20.2017 37.7486 20.6193 37.9986C21.0341 38.2486 21.3523 38.6108 21.5739 39.0852C21.7955 39.5568 21.9062 40.1278 21.9062 40.7983L21.9062 43.1037L20.4233 43.1037L20.4233 41.0966C20.4233 40.7443 20.375 40.4517 20.2784 40.2187C20.1818 39.9858 20.0369 39.8125 19.8437 39.6989C19.6506 39.5824 19.4105 39.5241 19.1236 39.5241C18.8338 39.5241 18.5895 39.5824 18.3906 39.6989C18.1918 39.8125 18.0412 39.9872 17.9389 40.223C17.8338 40.456 17.7812 40.75 17.7812 41.1051L17.7812 42.3494L25 42.3494L25 44.1946ZM21.0284 39.4815L25 37.3125L25 39.3494L21.0284 41.4716L21.0284 39.4815ZM25 36.3196L16.2727 36.3196L16.2727 30.4389L17.794 30.4389L17.794 34.4744L19.8736 34.4744L19.8736 30.7415L21.3949 30.7415L21.3949 34.4744L23.4787 34.4744L23.4787 30.4219L25 30.4219L25 36.3196ZM25 25.8782L25 28.9719L16.2727 28.9719L16.2727 25.8526C16.2727 24.9748 16.4474 24.2191 16.7969 23.5856C17.1435 22.9521 17.642 22.4648 18.2926 22.1239C18.9432 21.7802 19.7216 21.6083 20.6278 21.6083C21.5369 21.6083 22.3182 21.7802 22.9716 22.1239C23.625 22.4648 24.1264 22.9549 24.4758 23.5941C24.8253 24.2305 25 24.9918 25 25.8782ZM23.419 27.1268L23.419 25.9549C23.419 25.4094 23.3224 24.9506 23.1293 24.5785C22.9332 24.2035 22.6307 23.9222 22.2216 23.7347C21.8097 23.5444 21.2784 23.4492 20.6278 23.4492C19.983 23.4492 19.456 23.5444 19.0469 23.7347C18.6378 23.9222 18.3366 24.2021 18.1435 24.5742C17.9503 24.9464 17.8537 25.4052 17.8537 25.9506L17.8537 27.1268L23.419 27.1268Z",
                            fill: "black"
                        }
                    })])]), a("div", {
                        staticClass: "\n                    relative\n                    pt-4\n                    pb-4\n                    px-4\n                    rounded-r-12px\n                    flex\n                    items-center\n                    text-center\n                  ",
                        class: e.currentFeaturedPrize.isDarkText ? "text-black" : "text-white",
                        style: {
                            backgroundColor: "" + e.currentFeaturedPrize.accentColor
                        }
                    }, [a("span", {
                        staticClass: "overlay"
                    }), e.currentFeaturedPrize ? a("span", {
                        staticClass: "block font-bold",
                        class: {
                            "text-xs": e.currentFeaturedPrize.name.split(" ").length > 8,
                            "text-sm ": e.currentFeaturedPrize.name.split(" ").length > 5 && e.currentFeaturedPrize.name.split(" ").length <= 8,
                            "text-base": e.currentFeaturedPrize.name.split(" ").length <= 5
                        }
                    }, [e._v(e._s(e.currentFeaturedPrize.name))]) : e._e()])])]), a("p", {
                        staticClass: "-ml-3 mt-4 text-base text-center"
                    }, [e._v("\n              Or win other mystery prizes.\n            ")])])])], 1), a("button", {
                        staticClass: "\n          mt-4\n          rounded-full\n          border-2 border-white\n          bg-transparent-white-2\n          p-2\n          text-white\n        ",
                        on: {
                            click: function(t) {
                                e.isShowFeaturedPrize = !1
                            }
                        }
                    }, [a("font-awesome-icon", {
                        attrs: {
                            icon: ["fal", "times"],
                            size: "lg",
                            "fixed-width": ""
                        }
                    })], 1)])])], 1)
                }
                    , Gt = [function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "relative"
                    }, [a("img", {
                        attrs: {
                            src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/inside-cover-2.png",
                            alt: ""
                        }
                    })])
                }
                    , function() {
                        var e = this
                            , t = e.$createElement
                            , a = e._self._c || t;
                        return a("div", {
                            staticClass: "p-8"
                        }, [a("p", {
                            staticClass: "text-center text-sm leading-7"
                        }, [e._v("\n      Get a matching 🎁\n      "), a("span", {
                            staticClass: "font-bold"
                        }, [e._v("gift block to win the featured prize")]), e._v(" of\n      the day or get other matches to win a mystery prize.\n    ")])])
                    }
                ]
                    , Zt = {
                    components: {
                        AppLoader: X["default"],
                        AppDialog: Ee
                    },
                    data: function() {
                        var e;
                        return e = {
                            randomCards: [1, 2, 3, 4],
                            status: null,
                            cards: [{
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }, {
                                isFlipped: !1,
                                card: ""
                            }],
                            token: "",
                            id: "",
                            life: 2,
                            currentCards: [-1, -1],
                            isShowGameOverDialog: !1,
                            isLoading: !1,
                            isLoading2: !1,
                            currentReward: null
                        },
                            Object(o["a"])(e, "status", null),
                            Object(o["a"])(e, "isShowFeaturedPrize", !0),
                            Object(o["a"])(e, "activeNav", 0),
                            e
                    },
                    computed: {
                        config: Object(c["c"])("app/config"),
                        featuredRewards: Object(c["c"])("app/uiSchema@featuredRewards"),
                        nonFeaturedRewards: Object(c["c"])("app/uiSchema@nonFeaturedRewards"),
                        ticketsCount: Object(c["e"])("transactions/ticketsCount"),
                        grandPrize: Object(c["e"])("transactions/grandPrize"),
                        totalTicketsCount: Object(c["e"])("transactions/totalTicketsCount"),
                        currentFeaturedPrize: Object(c["e"])("app/currentFeaturedPrize"),
                        isRefreshGamePrizes: Object(c["e"])("app/isRefreshGamePrizes"),
                        isWin: function() {
                            return this.isFeatured || this.isMystery
                        },
                        isFeatured: function() {
                            return 2 === this.status
                        },
                        isMystery: function() {
                            return 1 === this.status
                        }
                    },
                    watch: {
                        activeNav: {
                            immediate: !0,
                            handler: function(e) {
                                this.$refs.navActive && (this.$refs.navActive.style.left = e ? "calc(50% - 6px)" : "6px")
                            }
                        }
                    },
                    beforeRouteEnter: function(e, t, a) {
                        a((function(e) {
                                0 == e.ticketsCount && e.$router.push("/")
                            }
                        ))
                    },
                    created: function() {
                        this.initGame(),
                            this.o
                    },
                    methods: {
                        loadGame: Object(c["a"])("app/loadGame"),
                        gameOver: Object(c["a"])("app/gameOver"),
                        flip: function(e) {
                            0 === this.life || this.cards[e].isFlipped || (this.cards[e].card = this.currentCards[this.life - 1],
                                this.cards[e].isFlipped = !0,
                                this.life--,
                            0 === this.life && this.loadEndGame())
                        },
                        initGame: function() {
                            var e = this;
                            this.isLoading = !0;
                            var t = {
                                id: this.config.campaignID
                            };
                            this.loadGame(t).then((function(t) {
                                    if (0 === t.status.id)
                                        e.id = t.data.id,
                                            e.token = t.data.token,
                                            e.checkStatus();
                                    else {
                                        var a = {
                                            isSuccessful: !1,
                                            heading: "",
                                            message: "Something went wrong."
                                        };
                                        e.toggleFeedback(!0, a)
                                    }
                                    e.isLoading = !1
                                }
                            ))
                        },
                        checkStatus: function() {
                            var e = this
                                , t = this.featuredRewards.find((function(t) {
                                    return t.denominationID === e.id
                                }
                            ))
                                , a = this.nonFeaturedRewards.find((function(t) {
                                    return t.denominationID === e.id
                                }
                            ));
                            if (this.status = t ? 2 : a ? 1 : 0,
                            2 === this.status)
                                this.currentCards = [0, 0];
                            else if (1 === this.status) {
                                var r = this.getRandomCards();
                                this.currentCards = [r, r]
                            } else if (0 === this.status) {
                                var n = this.getRandomCards()
                                    , s = this.getRandomCards(n);
                                this.currentCards = [n, s]
                            }
                        },
                        getRandomCards: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                                , t = this.randomCards.filter((function(t) {
                                    return t !== e
                                }
                            ))
                                , a = Math.floor(Math.random() * t.length);
                            return t[a]
                        },
                        loadEndGame: function() {
                            var e = this;
                            if (!this.isLoading2) {
                                this.isLoading2 = !0;
                                var t = {
                                    id: this.config.campaignID,
                                    token: this.token
                                };
                                this.gameOver(t).then((function(t) {
                                        if (0 === t.status.id)
                                            e.isWin && (e.isFeatured ? e.currentReward = e.featuredRewards.find((function(t) {
                                                    return t.denominationID === e.id
                                                }
                                            )) : e.currentReward = e.nonFeaturedRewards.find((function(t) {
                                                    return t.denominationID === e.id
                                                }
                                            ))),
                                                e.ticketsCount--,
                                                setTimeout((function() {
                                                        e.isShowGameOverDialog = !0
                                                    }
                                                ), 700);
                                        else {
                                            var a = {
                                                isSuccessful: !1,
                                                heading: "",
                                                message: "Something went wrong."
                                            };
                                            e.toggleFeedback(!0, a)
                                        }
                                        e.isLoading2 = !1
                                    }
                                ))
                            }
                        },
                        playAgain: function() {
                            this.token = "",
                                this.id = "",
                                this.life = 2,
                                this.currentCards = [-1, -1],
                                this.isShowGameOverDialog = !1,
                                this.isLoading = !1,
                                this.isLoading2 = !1,
                                this.currentReward = null,
                                this.status = null,
                                this.cards.forEach((function(e) {
                                        e.isFlipped = !1,
                                            e.card = ""
                                    }
                                )),
                                this.initGame()
                        },
                        setActive: function(e) {}
                    }
                }
                    , Wt = Zt
                    , qt = (a("5a5d"),
                    Object(Y["a"])(Wt, Vt, Gt, !1, null, "21e41703", null))
                    , Bt = qt.exports
                    , Ut = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "p-8"
                    }, [a("h1", {
                        staticClass: "font-bold text-xl"
                    }, [e._v("Game Data")]), a("p", {
                        staticClass: "mt-8"
                    }, [e._v("Win Rate Variables")]), a("div", {
                        staticClass: "ml-2"
                    }, [a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Base Win Rate:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v("\n        " + e._s(e.winRateVariables.baseWinRate) + "\n      ")])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Campaign Start Date:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v("\n        " + e._s(new Date(e.winRateVariables.startDate).toLocaleDateString()) + "\n      ")])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Campaign End Date:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v("\n        " + e._s(new Date(e.winRateVariables.endDate).toLocaleDateString()) + "\n      ")])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Current Date Time:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v("\n        " + e._s(new Date(e.winRateVariables.currentDateTime).toLocaleDateString()) + "\n      ")])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Reward Count:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v("\n        " + e._s(e.winRateVariables.rewardCount.toLocaleString()) + "\n      ")])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Playcode Count:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v("\n        " + e._s(e.winRateVariables.ticketCount.toLocaleString()) + "\n      ")])])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Current Week No:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v(e._s(e.currentWeekNo))])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Start Date Week No:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v(e._s(e.startDateWeekNo))])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Week Count:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v(e._s(e.weekCount))])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Remaining Days:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v(e._s(e.remainingDays))])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Time Adjusted Win Rate:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v(e._s(e.timeAdjustedWinRate))])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Reward Adjusted Win Rate:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v(e._s(e.rewardAdjustedWinRate))])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Final Win Rate:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v(e._s(e.finalWinRate))])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Featured Reward:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v(e._s(e.featuredReward))])]), a("p", {
                        staticClass: "mt-4"
                    }, [e._v("Grand Prize")]), a("div", {
                        staticClass: "ml-2"
                    }, [a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Grand Prize Final Win Rate:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v("\n        " + e._s(e.grandPrizeFinalWinRate) + "\n      ")])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Grand Prize Reward Adjusted Win Rate:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v("\n        " + e._s(e.grandPrizeRewardAdjustedWinRate) + "\n      ")])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Grand Prize Time Adjusted Win Rate")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v("\n        " + e._s(e.grandPrizeTimeAdjustedWinRate) + "\n      ")])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Grand Prize:")]), e.grandPrize ? a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v("\n        " + e._s(e.grandPrize.name || "-") + "\n      ")]) : e._e()]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Grand Prize Winner Reg Code:")]), e.grandPrize ? a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v("\n        " + e._s(e.grandPrize.regCode || "-") + "\n      ")]) : e._e()])]), a("p", {
                        staticClass: "mt-12 font-semibold text-lg"
                    }, [e._v("Playcodes")]), a("div", {
                        staticClass: "mt-4 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Active:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v(e._s(e.tickets.active.toLocaleString()))])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Win:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v(e._s(e.tickets.used.win.toLocaleString()))])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Lose:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v(e._s(e.tickets.used.lose.toLocaleString()))])]), a("div", {
                        staticClass: "mt-2 flex justify-between"
                    }, [a("div", {
                        staticClass: "pr-2 w-5/12 flex-grow"
                    }, [e._v("Total:")]), a("div", {
                        staticClass: "font-semibold text-right"
                    }, [e._v(e._s(e.tickets.total.toLocaleString()))])]), a("p", {
                        staticClass: "mt-12 font-semibold text-lg"
                    }, [e._v("Rewards")]), a("table", {
                        staticClass: "mt-4"
                    }, [e._m(0), a("tbody", e._l(e.rewards, (function(t) {
                            return a("tr", {
                                key: t.denominationID
                            }, [a("td", {
                                staticClass: "py-2   pr-6 text-right"
                            }, [e._v(" " + e._s(t.denominationID) + " ")]), a("td", {
                                staticClass: "p-2 w-4/12"
                            }, [t.isGrandPrize ? a("span", [e._v("⭐⭐")]) : t.isFeatured ? a("span", [e._v("⭐")]) : e._e(), e._v("\n          " + e._s(8414 === t.denominationID ? "Robinsons Supermarket - (P1,000 x 5)" : 10513 === t.denominationID ? "GrabFood (P500 x 10)" : 8391 === t.denominationID ? "Robinsons - (P3,000)" : 6956 === t.denominationID ? "Giftaway - (P100)" : 7044 === t.denominationID ? "Giftaway Universal Plus - (P100)" : t.name) + "\n        ")]), a("td", {
                                staticClass: "p-2 text-right"
                            }, [e._v(e._s(t.count.toLocaleString()))]), a("td", {
                                staticClass: "p-2 text-right"
                            }, [e._v(e._s(t.limit.toLocaleString()))]), a("td", {
                                staticClass: "p-2 text-right"
                            }, [e._v(e._s(t.redeemed.toLocaleString()))]), a("td", {
                                staticClass: "p-2 text-right"
                            }, [e._v(e._s(t.redeemedToday.toLocaleString()))]), a("td", {
                                staticClass: "p-2 text-right"
                            }, [e._v(e._s(t.remaining.toLocaleString()))])])
                        }
                    )), 0)]), a("p", {
                        staticClass: "mt-12 font-semibold text-lg"
                    }, [e._v("Grand Prize Schedules")]), a("table", {
                        staticClass: "mt-4"
                    }, [e._m(1), a("tbody", e._l(e.grandPrizes, (function(t) {
                            return a("tr", {
                                key: t.denominationID
                            }, [a("td", {
                                staticClass: "p-2 w-4/3"
                            }, [a("span", [e._v("⭐⭐")]), e._v(" " + e._s(t.name) + "\n        ")]), a("td", {
                                staticClass: "p-2 text-right w-3/12"
                            }, [e._v(e._s(new Date(t.startDate).toLocaleDateString()))]), a("td", {
                                staticClass: "p-2 text-right w-3/12"
                            }, [e._v(e._s(new Date(t.endDate).toLocaleDateString()))])])
                        }
                    )), 0)])])
                }
                    , Jt = [function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("thead", [a("tr", [a("th", {
                        staticClass: "py-2 pr-6 text-right"
                    }, [e._v("ID")]), a("th", {
                        staticClass: "p-2 text-left w-4/12"
                    }, [e._v("Name")]), a("th", {
                        staticClass: "p-2 text-right"
                    }, [e._v("Reward Count")]), a("th", {
                        staticClass: "p-2 text-right"
                    }, [e._v("Daily Limit")]), a("th", {
                        staticClass: "p-2 text-right"
                    }, [e._v("Total Redeemed")]), a("th", {
                        staticClass: "p-2 text-right"
                    }, [e._v("Redeemed Today")]), a("th", {
                        staticClass: "p-2 text-right"
                    }, [e._v("Remaining Rewards")])])])
                }
                    , function() {
                        var e = this
                            , t = e.$createElement
                            , a = e._self._c || t;
                        return a("thead", [a("tr", [a("th", {
                            staticClass: "p-2 text-left w-4/12"
                        }, [e._v("Name")]), a("th", {
                            staticClass: "p-2 text-right w-3/12"
                        }, [e._v("Start Date")]), a("th", {
                            staticClass: "p-2 text-right w-3/12"
                        }, [e._v("End Date")])])])
                    }
                ];
                function Yt(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }
                        ))),
                            a.push.apply(a, r)
                    }
                    return a
                }
                function Kt(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Yt(Object(a), !0).forEach((function(t) {
                                Object(o["a"])(e, t, a[t])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Yt(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }
                        ))
                    }
                    return e
                }
                var Qt = {
                    data: function() {
                        return {
                            currentWeekNo: 0,
                            featuredReward: "",
                            finalWinRate: 0,
                            rewardAdjustedWinRate: 0,
                            rewards: [],
                            startDateWeekNo: 0,
                            timeAdjustedWinRate: 0,
                            weekCount: 0,
                            remainingDays: 0,
                            winRateVariables: {},
                            grandPrizeFinalWinRate: 0,
                            grandPrizeRewardAdjustedWinRate: 0,
                            grandPrizeTimeAdjustedWinRate: 0,
                            grandPrize: {}
                        }
                    },
                    computed: {
                        config: Object(c["c"])("app/config"),
                        grandPrizes: function() {
                            return this.rewards.filter((function(e) {
                                    return e.isGrandPrize
                                }
                            )).sort((function(e, t) {
                                    return new Date(e.startDate) - new Date(t.startDate)
                                }
                            ))
                        }
                    },
                    created: function() {
                        this.loadGameData()
                    },
                    methods: {
                        gameData: Object(c["a"])("app/gameData"),
                        loadGameData: function() {
                            var e = this
                                , t = Kt({
                                id: this.config.campaignID
                            }, this.$route.query);
                            this.gameData(t).then((function(t) {
                                    0 === t.status.id ? (e.currentWeekNo = t.data.currentWeekNo,
                                        e.featuredReward = t.data.featuredReward,
                                        e.finalWinRate = t.data.finalWinRate,
                                        e.rewardAdjustedWinRate = t.data.rewardAdjustedWinRate,
                                        e.startDateWeekNo = t.data.startDateWeekNo,
                                        e.timeAdjustedWinRate = t.data.timeAdjustedWinRate,
                                        e.weekCount = t.data.weekCount,
                                        e.winRateVariables = t.data.winRateVariables,
                                        e.remainingDays = t.data.remainingDays,
                                        e.tickets = t.data.tickets,
                                        e.grandPrizeFinalWinRate = t.data.grandPrizeFinalWinRate,
                                        e.grandPrizeRewardAdjustedWinRate = t.data.grandPrizeRewardAdjustedWinRate,
                                        e.grandPrizeTimeAdjustedWinRate = t.data.grandPrizeTimeAdjustedWinRate,
                                        e.grandPrize = t.data.grandPrizes[0],
                                        e.rewards = t.data.rewards.sort((function(e, t) {
                                                return e.isFeatured - t.isFeatured
                                            }
                                        ))) : alert("Something went wrong."),
                                        e.isLoading = !1
                                }
                            ))
                        }
                    }
                }
                    , Xt = Qt
                    , ea = Object(Y["a"])(Xt, Ut, Jt, !1, null, null, null)
                    , ta = ea.exports
                    , aa = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", [a("p", {
                        staticClass: "text-2xl font-bold mb-8"
                    }, [e._v("Reset Password")]), a("transition", {
                        attrs: {
                            name: "fade",
                            mode: "out-in"
                        }
                    }, [e.showAlert ? a("app-alert", {
                        attrs: {
                            alert: e.alert
                        }
                    }) : e._e()], 1), a("ValidationObserver", {
                        ref: "observer",
                        attrs: {
                            tag: "form"
                        },
                        on: {
                            submit: function(t) {
                                return t.preventDefault(),
                                    e.submit(t)
                            }
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                t.invalid;
                                return [a("text-field", {
                                    attrs: {
                                        type: "password",
                                        name: "password",
                                        nameInErrorMessage: "Password",
                                        vid: "password",
                                        rules: "required|password",
                                        label: "New Password",
                                        tooltip: "Password must be at least 8 characters long and a combination of letters and numbers"
                                    },
                                    model: {
                                        value: e.password,
                                        callback: function(t) {
                                            e.password = t
                                        },
                                        expression: "password"
                                    }
                                }), a("text-field", {
                                    attrs: {
                                        type: "password",
                                        name: "passwordConfirmation",
                                        nameInErrorMessage: "Password",
                                        rules: "required|passwordConfirmation:password",
                                        label: "Retype Password"
                                    },
                                    model: {
                                        value: e.confirmpassword,
                                        callback: function(t) {
                                            e.confirmpassword = t
                                        },
                                        expression: "confirmpassword"
                                    }
                                }), a("button", {
                                    staticClass: "button primary mt-1 bg-primary-500",
                                    attrs: {
                                        type: "submit",
                                        disabled: e.isLoading
                                    }
                                }, [a("transition", {
                                    attrs: {
                                        name: "fade",
                                        mode: "out-in"
                                    }
                                }, [e.isLoading ? a("app-loader") : a("span", {
                                    staticClass: "block mx-auto"
                                }, [e._v("Set Password")])], 1)], 1), a("p", {
                                    staticClass: "text-center mt-4 text-sm "
                                }, [e._v("\n      Go back to\n      "), a("router-link", {
                                    staticClass: "underline",
                                    attrs: {
                                        to: "/login"
                                    }
                                }, [e._v(" Log in.")])], 1)]
                            }
                        }])
                    })], 1)
                }
                    , ra = [];
                function na(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }
                        ))),
                            a.push.apply(a, r)
                    }
                    return a
                }
                function sa(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? na(Object(a), !0).forEach((function(t) {
                                Object(o["a"])(e, t, a[t])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : na(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }
                        ))
                    }
                    return e
                }
                var ia = {
                    components: {
                        ValidationObserver: H["a"],
                        TextField: Q,
                        AppAlert: fe,
                        AppLoader: X["default"]
                    },
                    data: function() {
                        return {
                            isLoading: !1,
                            emailAddress: "",
                            password: "",
                            showAlert: !1,
                            confirmpassword: "",
                            alert: {
                                isSuccessful: !1,
                                message: ""
                            }
                        }
                    },
                    mounted: function() {
                        window.scrollTo(0, 0)
                    },
                    methods: sa({}, Object(c["a"])("app/*"), {
                        submit: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                                    var t, a, r = this;
                                    return regeneratorRuntime.wrap((function(e) {
                                            while (1)
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                            this.$refs.observer.validate();
                                                    case 2:
                                                        t = e.sent,
                                                        t && (this.isLoading = !0,
                                                            a = {
                                                                id: this.$store.get("app/config@campaignID"),
                                                                key: this.$route.query.key,
                                                                token: this.$route.query.token,
                                                                password: this.password,
                                                                confirmpassword: this.confirmpassword
                                                            },
                                                            this.resetPassword(a).then((function(e) {
                                                                    if (r.isLoading = !1,
                                                                    200 === e.id)
                                                                        r.alert.isSuccessful = !0,
                                                                            r.alert.message = "Password successfully changed.",
                                                                            r.$router.push({
                                                                                path: "/login",
                                                                                name: "login",
                                                                                params: {
                                                                                    alert: r.alert
                                                                                }
                                                                            }),
                                                                            r.$gtag.event("Reset Password", {
                                                                                "event-category": "Campaign",
                                                                                "event-label": "Success"
                                                                            });
                                                                    else {
                                                                        switch (r.alert.isSuccessful = !1,
                                                                            r.showAlert = !0,
                                                                            e.id) {
                                                                            case 4203:
                                                                                r.alert.message = "This reset password link has already expired.";
                                                                                break;
                                                                            default:
                                                                                r.alert.message = e.description;
                                                                                break
                                                                        }
                                                                        r.$gtag.event("Reset Password", {
                                                                            "event-category": "Campaign",
                                                                            "event-label": "Failed"
                                                                        })
                                                                    }
                                                                }
                                                            )));
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e, this)
                                }
                            )));
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }),
                    beforeRouteEnter: function(e, t, a) {
                        a((function(e) {
                                e.$route.query.key && e.$route.query.token || e.$router.push("/login")
                            }
                        ))
                    }
                }
                    , oa = ia
                    , ca = Object(Y["a"])(oa, aa, ra, !1, null, null, null)
                    , la = ca.exports
                    , da = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", [a("h1", {
                        staticClass: "font-bold text-2xl mb-8"
                    }, [e._v("Forgot Password")]), a("transition", {
                        attrs: {
                            name: "fade",
                            mode: "out-in"
                        }
                    }, [e.showAlert ? a("app-alert", {
                        attrs: {
                            alert: e.alert
                        }
                    }) : e._e()], 1), a("ValidationObserver", {
                        ref: "observer",
                        attrs: {
                            tag: "form"
                        },
                        on: {
                            submit: function(t) {
                                return t.preventDefault(),
                                    e.submit(t)
                            }
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                t.invalid;
                                return [a("text-field", {
                                    attrs: {
                                        type: "email",
                                        name: "emailAddress",
                                        nameInErrorMessage: "Email Address",
                                        rules: "required|email",
                                        label: "Email Address"
                                    },
                                    model: {
                                        value: e.emailAddress,
                                        callback: function(t) {
                                            e.emailAddress = t
                                        },
                                        expression: "emailAddress"
                                    }
                                }), a("button", {
                                    staticClass: "button primary mt-1 bg-primary-500",
                                    attrs: {
                                        type: "submit",
                                        disabled: e.isLoading
                                    }
                                }, [a("transition", {
                                    attrs: {
                                        name: "fade",
                                        mode: "out-in"
                                    }
                                }, [e.isLoading ? a("app-loader") : a("span", {
                                    staticClass: "block mx-auto"
                                }, [e._v("Reset Password")])], 1)], 1), a("p", {
                                    staticClass: "text-center mt-4 text-sm"
                                }, [e._v("\n      Go back to\n      "), a("router-link", {
                                    staticClass: "border-b border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600",
                                    attrs: {
                                        to: "/login"
                                    }
                                }, [e._v(" Log in.")])], 1)]
                            }
                        }])
                    })], 1)
                }
                    , ua = [];
                function pa(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }
                        ))),
                            a.push.apply(a, r)
                    }
                    return a
                }
                function fa(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? pa(Object(a), !0).forEach((function(t) {
                                Object(o["a"])(e, t, a[t])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : pa(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }
                        ))
                    }
                    return e
                }
                var ma = {
                    components: {
                        ValidationObserver: H["a"],
                        TextField: Q,
                        AppAlert: fe,
                        AppLoader: X["default"]
                    },
                    data: function() {
                        return {
                            emailAddress: "",
                            password: "",
                            isLoading: !1,
                            showAlert: !1,
                            alert: {
                                isSuccessful: !1,
                                message: ""
                            }
                        }
                    },
                    computed: {
                        campaignID: Object(c["c"])("app/config@campaignID")
                    },
                    mounted: function() {
                        window.scrollTo(0, 0)
                    },
                    methods: fa({}, Object(c["a"])("app/*"), {
                        submit: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                                    var t, a, r = this;
                                    return regeneratorRuntime.wrap((function(e) {
                                            while (1)
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                            this.$refs.observer.validate();
                                                    case 2:
                                                        t = e.sent,
                                                        t && (this.isLoading = !0,
                                                            a = {
                                                                emailaddress: this.emailAddress,
                                                                id: this.campaignID
                                                            },
                                                            this.inquireEmail(a).then((function(e) {
                                                                    if (r.isLoading = !1,
                                                                    200 === e.id)
                                                                        r.alert.isSuccessful = !0,
                                                                            r.alert.message = "A password reset link has been sent to your email. Please check your email for the next step.",
                                                                            r.$router.push({
                                                                                path: "/login",
                                                                                name: "login",
                                                                                params: {
                                                                                    alert: r.alert
                                                                                }
                                                                            }),
                                                                            r.$gtag.event("Forgot Password", {
                                                                                "event-category": "Campaign",
                                                                                "event-label": "Success"
                                                                            });
                                                                    else {
                                                                        switch (r.alert.isSuccessful = !1,
                                                                            e.id) {
                                                                            case 4103:
                                                                                r.alert.message = "Sorry, the email is invalid or has yet to be registered.";
                                                                                break;
                                                                            default:
                                                                                r.alert.message = e.description;
                                                                                break
                                                                        }
                                                                        r.$gtag.event("Forgot Password", {
                                                                            "event-category": "Campaign",
                                                                            "event-label": "Failed"
                                                                        })
                                                                    }
                                                                    r.showAlert = !0
                                                                }
                                                            )));
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e, this)
                                }
                            )));
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    })
                }
                    , ha = ma
                    , ga = Object(Y["a"])(ha, da, ua, !1, null, null, null)
                    , ba = ga.exports
                    , va = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", [e.isRegistrationStarted ? [e._m(0), a("router-link", {
                        staticClass: "button bg-primary-500",
                        attrs: {
                            to: "/register"
                        }
                    }, [e._v("Register")]), a("router-link", {
                        staticClass: "button mt-4 border border-gray-chateau text-black bg-white",
                        attrs: {
                            to: "/login"
                        }
                    }, [e._v("Log in")])] : [a("p", {
                        staticClass: "bg-yellow-200 text-yellow-700 p-4 mb-2 rounded text-center"
                    }, [e._v("\n      The registration for this promo has not yet started. Registration starts\n      on\n      "), a("span", {
                        staticClass: "whitespace-no-wrap"
                    }, [e._v(e._s(this.getFormattedLongDate(this.config.registrationStart)))])])]], 2)
                }
                    , wa = [function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("p", {
                        staticClass: "mb-8 text-center text-woodsmoke text-sm",
                        attrs: {
                            id: "heading"
                        }
                    }, [e._v("\n      Register to join the\n      "), a("span", {
                        staticClass: "font-bold"
                    }, [e._v("Citi Merry Match Promo")]), e._v(" or log in to your\n      account.\n    ")])
                }
                ]
                    , xa = (a("7f7f"),
                        function() {
                            var e = this
                                , t = e.$createElement
                                , a = e._self._c || t;
                            return a("div", {
                                staticClass: "text-center mb-12 text-base"
                            }, [a("terms-and-condition")], 1)
                        }
                )
                    , Ca = []
                    , ya = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("p", {
                        staticClass: "text-sm "
                    }, [e._v("\n    Refer to promo Terms and Conditions for details.\n")])
                }
                    , _a = []
                    , ka = {}
                    , Oa = ka
                    , ja = Object(Y["a"])(Oa, ya, _a, !1, null, null, null)
                    , La = ja.exports
                    , Pa = {
                    components: {
                        TermsAndCondition: La
                    }
                }
                    , Sa = Pa
                    , Ra = Object(Y["a"])(Sa, xa, Ca, !1, null, null, null)
                    , Da = Ra.exports
                    , za = {
                    components: {
                        AppHeading: Da
                    },
                    mixins: [me],
                    computed: {
                        config: Object(c["e"])("app/config"),
                        uiSchema: Object(c["e"])("app/uiSchema"),
                        isRegistrationStarted: Object(c["e"])("app/isRegistrationStarted")
                    },
                    data: function() {
                        return {}
                    },
                    mounted: function() {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        })
                    },
                    beforeRouteEnter: function(e, t, a) {
                        a((function(e) {
                                e.$cookies.get("isAlreadyRegistered") && "login" !== t.name && e.isRegistrationStarted && e.$router.push("/login")
                            }
                        ))
                    }
                }
                    , Ta = za
                    , Ea = Object(Y["a"])(Ta, va, wa, !1, null, null, null)
                    , Fa = Ea.exports
                    , Ma = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "my-16 px-8 text-center"
                    }, [a("h1", {
                        staticClass: " text-2xl font-bold"
                    }, [e._v("Page not found")]), a("router-link", {
                        staticClass: "button bg-primary-500 mt-5",
                        attrs: {
                            to: "/login"
                        }
                    }, [e._v("Go to Login")])], 1)
                }
                    , Aa = []
                    , $a = {}
                    , Na = Object(Y["a"])($a, Ma, Aa, !1, null, null, null)
                    , Ia = Na.exports;
                r["default"].use($["a"]);
                var Ha = [{
                    path: "/register",
                    name: "register",
                    component: se,
                    meta: {
                        layout: "entry-layout"
                    }
                }, {
                    path: "/forgotpassword",
                    name: "forgotPassword",
                    component: ba,
                    meta: {
                        layout: "entry-layout"
                    }
                }, {
                    path: "/resetpassword",
                    name: "resetPassword",
                    component: la,
                    meta: {
                        layout: "entry-layout"
                    }
                }, {
                    path: "/landing-page",
                    name: "landing-page",
                    component: Fa,
                    meta: {
                        layout: "entry-layout"
                    }
                }, {
                    path: "/login",
                    name: "login",
                    component: xe,
                    props: !0,
                    meta: {
                        layout: "entry-layout"
                    }
                }, {
                    path: "/",
                    name: "home",
                    component: Ht,
                    props: !0,
                    meta: {
                        requiresAuth: !0,
                        name: "Citi Merry Match Promo"
                    }
                }, {
                    path: "/game",
                    name: "game",
                    component: Bt,
                    meta: {
                        requiresAuth: !0,
                        layout: "no-layout"
                    }
                }, {
                    path: "/game-data",
                    name: "gameData",
                    component: ta,
                    meta: {
                        layout: "horizontal-layout",
                        requiresAuth: !0
                    }
                }, {
                    path: "*",
                    layout: "entry-layout",
                    component: Ia
                }]
                    , Va = new $["a"]({
                    routes: Ha
                });
                A.get("app/config@isAuthenticated") && A.set("app/isLoggedIn", !0),
                    Va.beforeEach((function(e, t, a) {
                            e.matched.some((function(e) {
                                    return e.meta.requiresAuth
                                }
                            )) ? A.get("app/isLoggedIn") ? a() : a({
                                path: "/login",
                                query: {
                                    redirect: e.fullPath
                                }
                            }) : A.get("app/isLoggedIn") ? a("/") : a()
                        }
                    ));
                var Ga = Va
                    , Za = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "min-h-screen relative overflow-hidden",
                        attrs: {
                            id: "app"
                        }
                    }, [a("div", {
                        staticClass: "mx-auto"
                    }, [a(e.$route.meta.layout || "default-layout", {
                        tag: "component"
                    })], 1)])
                }
                    , Wa = []
                    , qa = {
                    name: "app",
                    mixins: [qe],
                    data: function() {
                        return {
                            serverOffSet: 0
                        }
                    },
                    computed: {
                        isRedemptionExpired: Object(c["e"])("app/isRedemptionExpired"),
                        isRedemptionStarted: Object(c["e"])("app/isRedemptionStarted"),
                        isRegistrationExpired: Object(c["e"])("app/isRegistrationExpired"),
                        isRegistrationStarted: Object(c["e"])("app/isRegistrationStarted"),
                        currentDate: Object(c["e"])("app/currentDate"),
                        currentTime: Object(c["e"])("app/currentTime"),
                        currentServerDateTime: Object(c["e"])("app/currentServerDateTime"),
                        config: Object(c["e"])("app/config")
                    },
                    created: function() {
                        var e = this
                            , t = new Date(this.config.redemptionExpiry)
                            , a = new Date(this.config.registrationExpiry)
                            , r = new Date(this.config.serverDateTime);
                        this.isRedemptionExpired = r > t,
                        this.isRedemptionExpired || this.countDown(this.config.serverDateTime, this.config.redemptionExpiry, (function() {
                                e.isRedemptionExpired = !0
                            }
                        )),
                            this.isRegistrationExpired = r > a,
                        this.isRegistrationExpired || this.countDown(this.config.serverDateTime, this.config.registrationExpiry, (function() {
                                e.isRegistrationExpired = !0
                            }
                        ));
                        var n = new Date(this.config.registrationStart);
                        this.isRegistrationStarted = r >= n,
                        this.isRegistrationStarted || this.countDown(this.config.serverDateTime, this.config.registrationStart, (function() {
                                e.isRegistrationStarted = !0
                            }
                        ));
                        var s = new Date(this.config.redemptionStart);
                        this.isRedemptionStarted = r >= s,
                        this.isRedemptionStarted || this.countDown(this.config.serverDateTime, this.config.redemptionStart, (function() {
                                e.isRedemptionStarted = !0
                            }
                        )),
                            this.serverOffSet = new Date(this.config.serverDateTime).getTime() - (new Date).getTime();
                        setInterval(this.updateTime, 1e3);
                        this.updateTime()
                    },
                    methods: {
                        updateTime: function() {
                            this.currentServerDateTime = new Date((new Date).getTime() + this.serverOffSet)
                        }
                    }
                }
                    , Ba = qa
                    , Ua = Object(Y["a"])(Ba, Za, Wa, !1, null, null, null)
                    , Ja = Ua.exports
                    , Ya = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "\n    relative\n    mx-auto\n    xs:rounded-2xl xs:border\n    border-link-water\n    xs:max-w-390px\n    rounded-b-4px\n    min-h-screen\n    sm:min-h-400px\n    overflow-hidden\n    bg-black-squeeze\n    xs:my-8\n  "
                    }, [e._m(0), a("main", [a("router-view", {
                        staticClass: "relative z-50 pt-14 px-8 pb-14 w-full"
                    })], 1), a("the-footer")], 1)
                }
                    , Ka = [function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", [a("img", {
                        staticClass: "min-h-220px",
                        attrs: {
                            src: "https://s3.us-east-1.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/Gen%20Usage%20Holiday%20Match.png",
                            alt: "cover"
                        }
                    })])
                }
                ]
                    , Qa = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a(e.tag, {
                        tag: "component"
                    }, [e._t("default")], 2)
                }
                    , Xa = []
                    , er = a("bb45")
                    , tr = a.n(er);
                function ar(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }
                        ))),
                            a.push.apply(a, r)
                    }
                    return a
                }
                function rr(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ar(Object(a), !0).forEach((function(t) {
                                Object(o["a"])(e, t, a[t])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ar(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }
                        ))
                    }
                    return e
                }
                var nr = {
                    name: "SmoothReflow",
                    mixins: [tr.a],
                    props: {
                        tag: {
                            type: String,
                            default: "div"
                        },
                        options: Object
                    },
                    mounted: function() {
                        this.$smoothReflow(rr({
                            transition: ".3s ease-in-out"
                        }, this.options))
                    }
                }
                    , sr = nr
                    , ir = Object(Y["a"])(sr, Qa, Xa, !1, null, null, null)
                    , or = ir.exports
                    , cr = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("footer", {
                        staticClass: "px-8 pt-14 pb-12 text-xs text-gray-chateau bg-black-squeeze leading-5"
                    }, [e._m(0), a("app-giftaway-badge", {
                        staticClass: "mt-10 mb-4"
                    })], 1)
                }
                    , lr = [function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "mb-14",
                        attrs: {
                            id: "terms"
                        }
                    }, [a("p", {
                        staticClass: "mb-1"
                    }, [e._v("\n       This product is sold by "), a("a", {
                        staticClass: "underline",
                        attrs: {
                            href: "https://www.unionbankph.com/",
                            target: "_blank"
                        }
                    }, [e._v("Union Bank of the Philippines")]), e._v(", using certain trademarks temporarily under license from "), a("a", {
                        staticClass: "underline",
                        attrs: {
                            href: "https://www.citibank.com.ph/",
                            target: "_blank"
                        }
                    }, [e._v("Citigroup Inc")]), e._v(". and related group entities.\n     ")]), a("p", {}, [e._v("\n       Terms and conditions apply. Per DTI Fair Trade Permit No. FTEB-157671, Series of 2022.\n     ")])])
                }
                ]
                    , dr = {}
                    , ur = dr
                    , pr = Object(Y["a"])(ur, cr, lr, !1, null, null, null)
                    , fr = pr.exports
                    , mr = {
                    components: {
                        SmoothReflow: or,
                        AppLoader: X["default"],
                        TheFooter: fr
                    },
                    data: function() {
                        return {
                            isLoggingOut: !1
                        }
                    },
                    computed: {},
                    mounted: function() {
                        window.addEventListener("scroll", this.handleScroll)
                    },
                    methods: {
                        logout: Object(c["a"])("app/logout"),
                        onLogout: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                                    var t = this;
                                    return regeneratorRuntime.wrap((function(e) {
                                            while (1)
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        this.isLoggingOut = !0,
                                                            this.logout().then((function(e) {
                                                                    0 === e.id && (t.$store.dispatch("app/resetAppState", !1),
                                                                        t.$store.dispatch("transactions/resetTransactionsState", !1),
                                                                        t.$router.push("/login")),
                                                                        t.isLoggingOut = !1
                                                                }
                                                            ));
                                                    case 2:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e, this)
                                }
                            )));
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                }
                    , hr = mr
                    , gr = Object(Y["a"])(hr, Ya, Ka, !1, null, null, null)
                    , br = gr.exports
                    , vr = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "\n    relative\n    mx-auto\n    xs:rounded-2xl xs:border\n    border-link-water\n    xs:max-w-390px\n    rounded-b-4px\n    min-h-screen\n    sm:min-h-400px\n    overflow-hidden\n    xs:my-8\n    bg-white\n  "
                    }, [a("main", [a("router-view", {
                        staticClass: "relative z-50 w-full"
                    })], 1)])
                }
                    , wr = []
                    , xr = {}
                    , Cr = xr
                    , yr = Object(Y["a"])(Cr, vr, wr, !1, null, null, null)
                    , _r = yr.exports
                    , kr = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "\n    relative\n    mx-auto\n    xs:rounded-md xs:border\n    border-link-water\n    rounded-b-4px\n    max-w-3xl\n    sm:min-h-400px\n    overflow-hidden\n    xs:my-8\n    bg-white\n  "
                    }, [a("main", [a("router-view", {
                        staticClass: "relative z-50 w-full"
                    })], 1)])
                }
                    , Or = []
                    , jr = {}
                    , Lr = jr
                    , Pr = Object(Y["a"])(Lr, kr, Or, !1, null, null, null)
                    , Sr = Pr.exports
                    , Rr = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "\n    relative\n    mx-auto\n    xs:rounded-2xl xs:border\n    border-link-water\n    xs:max-w-390px\n    rounded-b-4px\n    min-h-screen\n    sm:min-h-400px\n    overflow-hidden\n    xs:my-8\n    bg-white\n  "
                    }, [e._m(0), a("main", [a("keep-alive", [a("router-view", {
                        staticClass: "relative z-50 w-full"
                    })], 1)], 1), a("the-footer")], 1)
                }
                    , Dr = [function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", {
                        staticClass: "bg-black-squeeze"
                    }, [a("div", {}, [a("img", {
                        attrs: {
                            src: "https://s3.amazonaws.com/assets.giftaway.ph/images/affiliates/citi-merrymatch/inside-cover.png",
                            alt: "cover"
                        }
                    })])])
                }
                ]
                    , zr = {
                    components: {
                        SmoothReflow: or,
                        AppLoader: X["default"],
                        TheFooter: fr
                    },
                    data: function() {
                        return {
                            isShowed: !1,
                            isFooterVisible: !1,
                            isLoggingOut: !1
                        }
                    },
                    computed: {},
                    mounted: function() {
                        window.addEventListener("scroll", this.handleScroll)
                    },
                    methods: {
                        logout: Object(c["a"])("app/logout"),
                        onLogout: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                                    var t = this;
                                    return regeneratorRuntime.wrap((function(e) {
                                            while (1)
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        this.isLoggingOut = !0,
                                                            this.logout().then((function(e) {
                                                                    0 === e.id && (t.$store.dispatch("app/resetAppState", !1),
                                                                        t.$store.dispatch("transactions/resetTransactionsState", !1),
                                                                        t.$router.push("/login")),
                                                                        t.isLoggingOut = !1
                                                                }
                                                            ));
                                                    case 2:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e, this)
                                }
                            )));
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                }
                    , Tr = zr
                    , Er = Object(Y["a"])(Tr, Rr, Dr, !1, null, null, null)
                    , Fr = Er.exports
                    , Mr = a("ad3d")
                    , Ar = function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("div", [a("a", {
                        staticClass: "flex justify-center",
                        attrs: {
                            href: "https://giftaway.ph"
                        }
                    }, [a("svg", {
                        attrs: {
                            width: "208",
                            height: "48",
                            viewBox: "0 0 208 48",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [a("rect", {
                        attrs: {
                            width: "208",
                            height: "48",
                            rx: "10",
                            fill: "white"
                        }
                    }), a("rect", {
                        attrs: {
                            x: "0.520261",
                            y: "0.520261",
                            width: "206.959",
                            height: "46.9595",
                            rx: "9.47974",
                            stroke: "black",
                            "stroke-opacity": "0.16",
                            "stroke-width": "1.04052"
                        }
                    }), a("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M84.1035 13.5148C84 13.7165 84 13.9805 84 14.5086L84 34.1144C84 34.9262 84.6315 35.3172 85.8991 34.6895C87.1667 34.0617 92.7875 31.3663 93.025 31.2551C93.2625 31.144 93.3417 31.1309 93.5 31.1309C93.6583 31.1309 93.7375 31.144 93.975 31.2551C94.2125 31.3663 99.8333 34.0617 101.101 34.6895C102.368 35.3172 103 34.9262 103 34.1144L103 14.5086C103 13.9805 103 13.7165 102.896 13.5148C102.805 13.3374 102.66 13.1932 102.481 13.1028C102.278 13 102.012 13 101.48 13H93.5H85.52C84.988 13 84.7219 13 84.5187 13.1028C84.34 13.1932 84.1946 13.3374 84.1035 13.5148ZM98.6806 20.4643C95.9507 23.0806 91.058 23.0806 88.3281 20.4643L86.9133 21.9183C90.4324 25.2911 96.5763 25.2911 100.095 21.9183L98.6806 20.4643Z",
                            fill: "black"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M123.667 22.6208V23.891C123.667 25.8147 123.058 27.3729 121.842 28.5655C120.625 29.7582 119.054 30.3545 117.128 30.3545C115.075 30.3545 113.371 29.6813 112.015 28.3347C110.672 26.9753 110 25.3209 110 23.3716C110 21.4095 110.665 19.7487 111.996 18.3893C113.339 17.0299 114.999 16.3502 116.976 16.3502C118.218 16.3502 119.352 16.6388 120.378 17.2159C121.405 17.7801 122.203 18.5368 122.773 19.4858L120.53 20.7939C120.214 20.2424 119.732 19.7936 119.086 19.4473C118.452 19.1011 117.721 18.8585 116.935 18.8585C115.668 18.8585 114.644 19.3511 113.821 20.1976C113.01 21.0312 112.652 22.1744 112.652 23.4569C112.652 24.7265 113.016 25.6929 113.84 26.5264C114.676 27.3472 115.771 27.8463 117.139 27.8463C118.153 27.8463 118.997 27.5332 119.656 27.0843C120.328 26.6226 120.784 25.9242 121.025 25.1291H116.733V22.6208H123.667Z",
                            fill: "black"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M125.414 30.3572V20.2859H127.92V30.3572H125.414Z",
                            fill: "black"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M125.627 18.566C125.921 18.8553 126.265 19 126.657 19C127.062 19 127.405 18.8553 127.687 18.566C127.981 18.2641 128.128 17.9119 128.128 17.5094C128.128 17.1069 127.981 16.7547 127.687 16.4528C127.405 16.1509 127.062 16 126.657 16C126.265 16 125.921 16.1509 125.627 16.4528C125.345 16.7547 125.204 17.1069 125.204 17.5094C125.204 17.9119 125.345 18.2641 125.627 18.566Z",
                            fill: "black"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M135.323 18.5727C133.861 18.5727 133.443 19.1086 133.443 20.1833V20.2819H135.323V22.8513H133.442V30.3572H130.937V22.8513H129.475L129.475 20.278H130.937V20.1788C130.937 18.7845 131.341 17.7262 132.097 17.0028C132.852 16.2794 133.443 16.0002 135.323 16.0002V18.5727Z",
                            fill: "black"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M142.71 22.8573H140.83V26.5001C140.83 26.8418 140.842 27.2779 141.039 27.4644C141.236 27.651 141.45 27.7595 141.77 27.7858C142.09 27.799 142.445 27.8121 142.919 27.7858V30.3572C140.517 30.3572 140.177 30.2468 139.473 29.7211C138.781 29.1954 138.325 28.1847 138.325 26.831V22.8573H136.444V20.2859H138.325V18.3579L140.83 17.2859V20.2859L142.71 20.2859V22.8573Z",
                            fill: "black"
                        }
                    }), a("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M148.871 30.3572C151.697 30.3572 153.988 28.0068 153.988 25.1073C153.988 22.2078 151.697 19.8574 148.871 19.8574C146.045 19.8574 143.754 22.2078 143.754 25.1073C143.754 28.0068 146.045 30.3572 148.871 30.3572ZM149.08 27.9998C150.637 27.9998 151.9 26.7047 151.9 25.107C151.9 23.5093 150.637 22.2142 149.08 22.2142C147.523 22.2142 146.26 23.5093 146.26 25.107C146.26 26.7047 147.523 27.9998 149.08 27.9998Z",
                            fill: "black"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M151.9 20.2856H154.406V30.357H151.9V20.2856Z",
                            fill: "black"
                        }
                    }), a("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M167.146 20.2858H169.652L166.717 30.3571H164.222L162.549 24.594L160.869 30.3579H158.374L155.45 20.2866H157.957L159.716 26.4704L161.298 20.2866H161.298L161.298 20.2858H163.804L165.564 26.4696L167.146 20.2858Z",
                            fill: "black"
                        }
                    }), a("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M174.978 30.3572C177.804 30.3572 180.095 28.0068 180.095 25.1073C180.095 22.2078 177.804 19.8574 174.978 19.8574C172.152 19.8574 169.861 22.2078 169.861 25.1073C169.861 28.0068 172.152 30.3572 174.978 30.3572ZM175.187 27.9998C176.744 27.9998 178.007 26.7047 178.007 25.107C178.007 23.5093 176.744 22.2142 175.187 22.2142C173.63 22.2142 172.368 23.5093 172.368 25.107C172.368 26.7047 173.63 27.9998 175.187 27.9998Z",
                            fill: "black"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M178.007 20.2856H180.513V30.357H178.007V20.2856Z",
                            fill: "black"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M189.389 20.2859H192L188.345 30.0689C187.823 31.4777 187.127 32.4951 186.256 33.1212C185.4 33.7604 184.148 34.0564 182.863 33.9912V31.6356C183.559 31.6486 184.288 31.5037 184.69 31.2037C185.105 30.9037 185.433 30.4211 185.674 29.7558L181.557 20.2859H184.171L186.996 26.9242L189.389 20.2859Z",
                            fill: "black"
                        }
                    }), a("path", {
                        attrs: {
                            d: "M16.7639 27H17.9583V24.7721H19.2204C20.7432 24.7721 21.561 23.8577 21.561 22.5892C21.561 21.3304 20.7529 20.4064 19.2365 20.4064H16.7639V27ZM17.9583 23.7901V21.4045H19.053C19.948 21.4045 20.344 21.8874 20.344 22.5892C20.344 23.2911 19.948 23.7901 19.0594 23.7901H17.9583ZM28.4902 23.7032C28.4902 21.5719 27.1895 20.3163 25.4606 20.3163C23.7285 20.3163 22.4311 21.5719 22.4311 23.7032C22.4311 25.8313 23.7285 27.0901 25.4606 27.0901C27.1895 27.0901 28.4902 25.8345 28.4902 23.7032ZM27.2893 23.7032C27.2893 25.2035 26.536 26.018 25.4606 26.018C24.3885 26.018 23.6319 25.2035 23.6319 23.7032C23.6319 22.2029 24.3885 21.3884 25.4606 21.3884C26.536 21.3884 27.2893 22.2029 27.2893 23.7032ZM30.8389 27H32.0172L33.3404 22.3735H33.3919L34.712 27H35.8903L37.7512 20.4064H36.4666L35.2786 25.255H35.2206L33.9489 20.4064H32.7802L31.5117 25.2518H31.4506L30.2626 20.4064H28.978L30.8389 27ZM38.5794 27H42.8936V25.9987H39.7739V24.199H42.6457V23.1977H39.7739V21.4077H42.8678V20.4064H38.5794V27ZM44.0864 27H45.2809V24.5854H46.4978L47.7921 27H49.125L47.6987 24.3857C48.4746 24.0734 48.8835 23.4102 48.8835 22.5152C48.8835 21.2564 48.0722 20.4064 46.559 20.4064H44.0864V27ZM45.2809 23.5937V21.4045H46.3755C47.2673 21.4045 47.6665 21.8133 47.6665 22.5152C47.6665 23.2171 47.2673 23.5937 46.3819 23.5937H45.2809ZM49.983 27H54.2972V25.9987H51.1774V24.199H54.0492V23.1977H51.1774V21.4077H54.2714V20.4064H49.983V27ZM57.7243 27C59.7333 27 60.9246 25.7573 60.9246 23.6968C60.9246 21.6427 59.7333 20.4064 57.7694 20.4064H55.49V27H57.7243ZM56.6844 25.9665V21.4399H57.7018C59.0411 21.4399 59.7398 22.1868 59.7398 23.6968C59.7398 25.2132 59.0411 25.9665 57.6664 25.9665H56.6844ZM64.3083 27H66.9773C68.4872 27 69.2277 26.2305 69.2277 25.2035C69.2277 24.2054 68.5194 23.6195 67.8176 23.5841V23.5197C68.4615 23.3684 68.9702 22.9176 68.9702 22.116C68.9702 21.134 68.2619 20.4064 66.8324 20.4064H64.3083V27ZM65.5027 26.0019V24.0702H66.8195C67.5568 24.0702 68.014 24.521 68.014 25.1101C68.014 25.6349 67.6534 26.0019 66.7873 26.0019H65.5027ZM65.5027 23.2106V21.3916H66.7101C67.4119 21.3916 67.7757 21.7618 67.7757 22.2705C67.7757 22.85 67.3057 23.2106 66.6843 23.2106H65.5027ZM69.8161 20.4064L72.2146 24.5403V27H73.4059V24.5403L75.8044 20.4064H74.4554L72.8424 23.3233H72.7781L71.1651 20.4064H69.8161Z",
                            fill: "black"
                        }
                    })])]), e._m(0)])
                }
                    , $r = [function() {
                    var e = this
                        , t = e.$createElement
                        , a = e._self._c || t;
                    return a("p", {
                        staticClass: "mt-4 text-center text-xs text-gray-chateau"
                    }, [e._v("eGift is a registered trademark of "), a("br"), e._v(" Giftaway © 2021 Giftaway Inc.")])
                }
                ]
                    , Nr = {}
                    , Ir = Object(Y["a"])(Nr, Ar, $r, !1, null, null, null)
                    , Hr = Ir.exports;
                r["default"].component("smooth-reflow", or),
                    r["default"].component("app-heading", Da),
                    r["default"].component("entry-layout", br),
                    r["default"].component("horizontal-layout", Sr),
                    r["default"].component("no-layout", _r),
                    r["default"].component("default-layout", Fr),
                    r["default"].component("font-awesome-icon", Mr["a"]),
                    r["default"].component("terms-and-condition", La),
                    r["default"].component("app-giftaway-badge", Hr);
                var Vr = a("a584")
                    , Gr = a("2b27")
                    , Zr = a.n(Gr)
                    , Wr = a("a4a1")
                    , qr = a.n(Wr)
                    , Br = (a("f6b9"),
                    a("bd8c"))
                    , Ur = a.n(Br);
                r["default"].use(Ur.a),
                    r["default"].use(qr.a),
                    r["default"].use(Zr.a),
                    r["default"].use(Vr["a"], {
                        config: {
                            id: f
                        }
                    }, Ga);
                var Jr = a("ecee")
                    , Yr = a("b81f")
                    , Kr = a("e018")
                    , Qr = a("584e");
                Jr["c"].add(Qr["d"], Kr["b"], Kr["a"], Kr["c"], Kr["d"], Yr["d"], Yr["b"], Qr["b"], Yr["a"], Qr["c"], Kr["e"], Yr["c"], Qr["a"]);
                a("28a5");
                var Xr = a("7618");
                a("a481"),
                    a("3b2b");
                !function(e, t, a) {
                    function r(e) {
                        var t = _.className
                            , a = y._config.classPrefix || "";
                        if (k && (t = t.baseVal),
                            y._config.enableJSClass) {
                            var r = new RegExp("(^|\\s)" + a + "no-js(\\s|$)");
                            t = t.replace(r, "$1" + a + "js$2")
                        }
                        y._config.enableClasses && (t += " " + a + e.join(" " + a),
                            k ? _.className.baseVal = t : _.className = t)
                    }
                    function n(e, t) {
                        return Object(Xr["a"])(e) === t
                    }
                    function s() {
                        var e, t, a, r, s, i, o;
                        for (var c in x)
                            if (x.hasOwnProperty(c)) {
                                if (e = [],
                                    t = x[c],
                                t.name && (e.push(t.name.toLowerCase()),
                                t.options && t.options.aliases && t.options.aliases.length))
                                    for (a = 0; a < t.options.aliases.length; a++)
                                        e.push(t.options.aliases[a].toLowerCase());
                                for (r = n(t.fn, "function") ? t.fn() : t.fn,
                                         s = 0; s < e.length; s++)
                                    i = e[s],
                                        o = i.split("."),
                                        1 === o.length ? y[o[0]] = r : (!y[o[0]] || y[o[0]]instanceof Boolean || (y[o[0]] = new Boolean(y[o[0]])),
                                            y[o[0]][o[1]] = r),
                                        w.push((r ? "" : "no-") + o.join("-"))
                            }
                    }
                    function i(e, t) {
                        return !!~("" + e).indexOf(t)
                    }
                    function o() {
                        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : k ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
                    }
                    function c(e) {
                        return e.replace(/([a-z])-([a-z])/g, (function(e, t, a) {
                                return t + a.toUpperCase()
                            }
                        )).replace(/^-/, "")
                    }
                    function l(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    }
                    function d(e, t, a) {
                        var r;
                        for (var s in e)
                            if (e[s]in t)
                                return !1 === a ? e[s] : (r = t[e[s]],
                                    n(r, "function") ? l(r, a || t) : r);
                        return !1
                    }
                    function u(e) {
                        return e.replace(/([A-Z])/g, (function(e, t) {
                                return "-" + t.toLowerCase()
                            }
                        )).replace(/^ms-/, "-ms-")
                    }
                    function p(t, a, r) {
                        var n;
                        if ("getComputedStyle"in e) {
                            n = getComputedStyle.call(e, t, a);
                            var s = e.console;
                            if (null !== n)
                                r && (n = n.getPropertyValue(r));
                            else if (s) {
                                var i = s.error ? "error" : "log";
                                s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                            }
                        } else
                            n = !a && t.currentStyle && t.currentStyle[r];
                        return n
                    }
                    function f() {
                        var e = t.body;
                        return e || (e = o(k ? "svg" : "body"),
                            e.fake = !0),
                            e
                    }
                    function m(e, a, r, n) {
                        var s, i, c, l, d = "modernizr", u = o("div"), p = f();
                        if (parseInt(r, 10))
                            for (; r--; )
                                c = o("div"),
                                    c.id = n ? n[r] : d + (r + 1),
                                    u.appendChild(c);
                        return s = o("style"),
                            s.type = "text/css",
                            s.id = "s" + d,
                            (p.fake ? p : u).appendChild(s),
                            p.appendChild(u),
                            s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)),
                            u.id = d,
                        p.fake && (p.style.background = "",
                            p.style.overflow = "hidden",
                            l = _.style.overflow,
                            _.style.overflow = "hidden",
                            _.appendChild(p)),
                            i = a(u, e),
                            p.fake ? (p.parentNode.removeChild(p),
                                _.style.overflow = l,
                                _.offsetHeight) : u.parentNode.removeChild(u),
                            !!i
                    }
                    function h(t, r) {
                        var n = t.length;
                        if ("CSS"in e && "supports"in e.CSS) {
                            for (; n--; )
                                if (e.CSS.supports(u(t[n]), r))
                                    return !0;
                            return !1
                        }
                        if ("CSSSupportsRule"in e) {
                            for (var s = []; n--; )
                                s.push("(" + u(t[n]) + ":" + r + ")");
                            return s = s.join(" or "),
                                m("@supports (" + s + ") { #modernizr { position: absolute; } }", (function(e) {
                                        return "absolute" == p(e, null, "position")
                                    }
                                ))
                        }
                        return a
                    }
                    function g(e, t, r, s) {
                        function l() {
                            u && (delete S.style,
                                delete S.modElem)
                        }
                        if (s = !n(s, "undefined") && s,
                            !n(r, "undefined")) {
                            var d = h(e, r);
                            if (!n(d, "undefined"))
                                return d
                        }
                        for (var u, p, f, m, g, b = ["modernizr", "tspan", "samp"]; !S.style && b.length; )
                            u = !0,
                                S.modElem = o(b.shift()),
                                S.style = S.modElem.style;
                        for (f = e.length,
                                 p = 0; f > p; p++)
                            if (m = e[p],
                                g = S.style[m],
                            i(m, "-") && (m = c(m)),
                            S.style[m] !== a) {
                                if (s || n(r, "undefined"))
                                    return l(),
                                    "pfx" != t || m;
                                try {
                                    S.style[m] = r
                                } catch (v) {}
                                if (S.style[m] != g)
                                    return l(),
                                    "pfx" != t || m
                            }
                        return l(),
                            !1
                    }
                    function b(e, t, a, r, s) {
                        var i = e.charAt(0).toUpperCase() + e.slice(1)
                            , o = (e + " " + j.join(i + " ") + i).split(" ");
                        return n(t, "string") || n(t, "undefined") ? g(o, t, r, s) : (o = (e + " " + L.join(i + " ") + i).split(" "),
                            d(o, t, a))
                    }
                    function v(e, t, r) {
                        return b(e, a, a, t, r)
                    }
                    var w = []
                        , x = []
                        , C = {
                        _version: "3.6.0",
                        _config: {
                            classPrefix: "",
                            enableClasses: !0,
                            enableJSClass: !0,
                            usePrefixes: !0
                        },
                        _q: [],
                        on: function(e, t) {
                            var a = this;
                            setTimeout((function() {
                                    t(a[e])
                                }
                            ), 0)
                        },
                        addTest: function(e, t, a) {
                            x.push({
                                name: e,
                                fn: t,
                                options: a
                            })
                        },
                        addAsyncTest: function(e) {
                            x.push({
                                name: null,
                                fn: e
                            })
                        }
                    }
                        , y = function() {};
                    y.prototype = C,
                        y = new y;
                    var _ = t.documentElement
                        , k = "svg" === _.nodeName.toLowerCase()
                        , O = "Moz O ms Webkit"
                        , j = C._config.usePrefixes ? O.split(" ") : [];
                    C._cssomPrefixes = j;
                    var L = C._config.usePrefixes ? O.toLowerCase().split(" ") : [];
                    C._domPrefixes = L;
                    var P = {
                        elem: o("modernizr")
                    };
                    y._q.push((function() {
                            delete P.elem
                        }
                    ));
                    var S = {
                        style: P.elem.style
                    };
                    y._q.unshift((function() {
                            delete S.style
                        }
                    )),
                        C.testAllProps = b,
                        C.testAllProps = v,
                        y.addTest("flexbox", v("flexBasis", "1px", !0)),
                        s(),
                        r(w),
                        delete C.addTest,
                        delete C.addAsyncTest;
                    for (var R = 0; R < y._q.length; R++)
                        y._q[R]();
                    e.Modernizr = y
                }(window, document);
                a("9aad"),
                    a("7e79");
                a("1368").polyfill(),
                    a("2e94"),
                    r["default"].config.productionTip = !1,
                    new r["default"]({
                        store: A,
                        router: Ga,
                        render: function(e) {
                            return e(Ja)
                        }
                    }).$mount("#app")
            },
            "5a5d": function(e, t, a) {
                "use strict";
                var r = a("67f6")
                    , n = a.n(r);
                n.a
            },
            "67f6": function(e, t, a) {},
            "7e79": function(e, t, a) {},
            "83f2": function(e, t) {},
            8409: function(e, t, a) {
                "use strict";
                var r = a("0f4f")
                    , n = a.n(r);
                n.a
            },
            9623: function(e, t, a) {
                "use strict";
                var r = a("83f2")
                    , n = a.n(r);
                t["default"] = n.a
            },
            "9aad": function(e, t, a) {},
            "9b48": function(e, t, a) {
                "use strict";
                var r = a("221e")
                    , n = a.n(r);
                n.a
            },
            cccb: function(e, t, a) {
                "use strict";
                var r = a("d563")
                    , n = a.n(r);
                n.a
            },
            d2ca: function(e, t, a) {
                "use strict";
                var r = a("403b")
                    , n = a("9623")
                    , s = a("2877")
                    , i = Object(s["a"])(n["default"], r["a"], r["b"], !0, null, null, null);
                t["default"] = i.exports
            },
            d563: function(e, t, a) {},
            e41a: function(e, t, a) {
                "use strict";
                var r = a("39a8")
                    , n = a.n(r);
                n.a
            },
            e55c: function(e, t, a) {}
        });
//# sourceMappingURL=app.js.map

    , n = a.n(r);
        n.a
    },
    d2ca: function(e, t, a) {
        "use strict";
        var r = a("403b")
            , n = a("9623")
            , s = a("2877")
            , i = Object(s["a"])(n["default"], r["a"], r["b"], !0, null, null, null);
        t["default"] = i.exports
    },
    d563: function(e, t, a) {},
    e41a: function(e, t, a) {
        "use strict";
        var r = a("39a8")
            , n = a.n(r);
        n.a
    },
    e55c: function(e, t, a) {}
})
//# sourceMappingURL=app.js.map
