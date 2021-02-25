! function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Localbase = t()
    }
}((function () {
    return function t(e, n, r) {
        function o(u, a) {
            if (!n[u]) {
                if (!e[u]) {
                    var f = "function" == typeof require && require;
                    if (!a && f) return f(u, !0);
                    if (i) return i(u, !0);
                    var c = new Error("Cannot find module '" + u + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var s = n[u] = {
                    exports: {}
                };
                e[u][0].call(s.exports, (function (t) {
                    return o(e[u][1][t] || t)
                }), s, s.exports, t, e, n, r)
            }
            return n[u].exports
        }
        for (var i = "function" == typeof require && require, u = 0; u < r.length; u++) o(r[u]);
        return o
    }({
        1: [function (t, e, n) {
            "use strict";
            var r;
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = ((r = t(16)) && r.__esModule ? r : {
                default: r
            }).default;
            n.default = o, e.exports = n.default
        }, {
            16: 16
        }],
        2: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function (t) {
                return o.default.call(this), r.default.error.call(this, t), "Error: ".concat(t)
            };
            var r = i(t(18)),
                o = i(t(3));

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.exports = n.default
        }, {
            18: 18,
            3: 3
        }],
        3: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function () {
                this.collectionName = null, this.orderByProperty = null, this.orderByDirection = null, this.limitBy = null, this.docSelectionCriteria = null, this.userErrors = []
            }, e.exports = n.default
        }, {}],
        4: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function () {
                var t;
                return this.collectionName || this.docSelectionCriteria ? this.collectionName && !this.docSelectionCriteria ? t = "collection" : this.collectionName && this.docSelectionCriteria && (t = "doc") : t = "db", t
            }, e.exports = n.default
        }, {}],
        5: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function () {
                for (var t = 0; t < this.userErrors.length; t++) r.default.error.call(this, this.userErrors[t]);
                o.default.call(this)
            };
            var r = i(t(18)),
                o = i(t(3));

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.exports = n.default
        }, {
            18: 18,
            3: 3
        }],
        6: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function (t, e) {
                return o.default.call(this), r.default.log.call(this, t, e), "Success: ".concat(t, " ").concat(JSON.stringify(e))
            };
            var r = i(t(18)),
                o = i(t(3));

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.exports = n.default
        }, {
            18: 18,
            3: 3
        }],
        7: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function (t, e) {
                var n, u = this;
                if (t ? "object" == (n = t, ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(n)) && t instanceof Array == 0 || this.userErrors.push("Data passed to .add() must be an object. Not an array, string, number or boolean.") : this.userErrors.push('No data specified in add() method. You must use an object, e.g { id: 1, name: "Bill", age: 47 }'), !this.userErrors.length) {
                    var f = this.collectionName;
                    return new Promise((function (n, i) {
                        var c;
                        return c = e || a.generate(), u.lf[f].setItem(c, t).then((function () {
                            n(r.default.call(u, 'Document added to "'.concat(f, '" collection:'), {
                                key: c,
                                data: t
                            }))
                        })).catch((function (t) {
                            i(o.default.call(u, "Could not add Document to ".concat(f, " collection.")))
                        }))
                    }))
                }
                i.default.call(this)
            };
            var r = u(t(6)),
                o = u(t(2)),
                i = u(t(5));

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var a = t(21);
            e.exports = n.default
        }, {
            2: 2,
            21: 21,
            5: 5,
            6: 6
        }],
        8: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function () {
                var t = this;
                return new Promise((function (e, n) {
                    if (t.deleteDatabase = function () {
                            var n = t.dbName;
                            indexedDB.deleteDatabase(n), e(u.default.call(t, 'Database "'.concat(n, '" deleted.')))
                        }, t.deleteCollection = function () {
                            var r = t.dbName,
                                o = t.collectionName;
                            t.addToDeleteCollectionQueue = function (e) {
                                t.deleteCollectionQueue.queue.push(e), t.runDeleteCollectionQueue()
                            }, t.runDeleteCollectionQueue = function () {
                                0 == t.deleteCollectionQueue.running && (t.deleteCollectionQueue.running = !0, t.deleteNextCollectionFromQueue())
                            }, t.deleteNextCollectionFromQueue = function () {
                                if (t.deleteCollectionQueue.queue.length) {
                                    var o = t.deleteCollectionQueue.queue[0];
                                    t.deleteCollectionQueue.queue.shift(), t.lf[o].dropInstance({
                                        name: r,
                                        storeName: o
                                    }).then((function () {
                                        t.deleteNextCollectionFromQueue(), e(u.default.call(t, 'Collection "'.concat(o, '" deleted.')))
                                    })).catch((function (e) {
                                        n(e.call(t, 'Collection "'.concat(o, '" could not be deleted.')))
                                    }))
                                } else t.deleteCollectionQueue.running = !1
                            }, t.addToDeleteCollectionQueue(o)
                        }, t.deleteDocument = function () {
                            var i, f = t.collectionName,
                                c = t.docSelectionCriteria;
                            return t.deleteDocumentByCriteria = function () {
                                var i = [];
                                t.lf[f].iterate((function (t, e) {
                                    (0, r.default)(t, c) && i.push(e)
                                })).then((function () {
                                    i.length || n(a.default.call(t, 'No Documents found in "'.concat(f, '" Collection with criteria ').concat(JSON.stringify(c), ". No documents deleted."))), i.length > 1 && o.default.warn.call(t, "Multiple documents (".concat(i.length, ") with ").concat(JSON.stringify(c), " found."))
                                })).then((function () {
                                    i.forEach((function (r, o) {
                                        t.lf[f].removeItem(r).then((function () {
                                            o === i.length - 1 && e(u.default.call(t, "".concat(i.length, " Document").concat(i.length > 1 ? "s" : "", " with ").concat(JSON.stringify(c), " deleted.")))
                                        })).catch((function (e) {
                                            n(a.default.call(t, "Could not delete ".concat(i.length, " Documents in ").concat(f, " Collection.")))
                                        }))
                                    }))
                                }))
                            }, t.deleteDocumentByKey = function () {
                                t.lf[f].getItem(c).then((function (r) {
                                    r ? t.lf[f].removeItem(c).then((function () {
                                        e(u.default.call(t, "Document with key ".concat(JSON.stringify(c), " deleted.")))
                                    })).catch((function (t) {
                                        n(a.default.call(this, 'No Document found in "'.concat(f, '" Collection with key ').concat(JSON.stringify(c), ". No document was deleted.")))
                                    })) : n(a.default.call(t, 'No Document found in "'.concat(f, '" Collection with key ').concat(JSON.stringify(c), ". No document was deleted.")))
                                }))
                            }, "object" == (i = c, ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                                return typeof t
                            } : function (t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(i)) ? t.deleteDocumentByCriteria() : t.deleteDocumentByKey()
                        }, t.userErrors.length) f.default.call(t);
                    else {
                        var c = i.default.call(t);
                        if ("db" == c) return t.deleteDatabase();
                        if ("collection" == c) return t.deleteCollection();
                        if ("doc" == c) return t.deleteDocument()
                    }
                }))
            };
            var r = c(t(17)),
                o = c(t(18)),
                i = c(t(4)),
                u = c(t(6)),
                a = c(t(2)),
                f = c(t(5));

            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.exports = n.default
        }, {
            17: 17,
            18: 18,
            2: 2,
            4: 4,
            5: 5,
            6: 6
        }],
        9: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function () {
                var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        keys: !1
                    };
                if (this.getCollection = function () {
                        var n = t.collectionName,
                            r = t.orderByProperty,
                            u = t.orderByDirection,
                            a = t.limitBy,
                            f = [];
                        return t.lf[n].iterate((function (t, n) {
                            var r;
                            r = e.keys ? {
                                key: n,
                                data: t
                            } : t, f.push(r)
                        })).then((function () {
                            var c = 'Got "'.concat(n, '" collection');
                            return r && (c += ', ordered by "'.concat(r, '"'), e.keys ? f.sort((function (t, e) {
                                return t.data[r].toString().localeCompare(e.data[r].toString())
                            })) : f.sort((function (t, e) {
                                return t[r].toString().localeCompare(e[r].toString())
                            }))), "desc" == u && (c += " (descending)", f.reverse()), a && (c += ", limited to ".concat(a), f = f.splice(0, a)), c += ":", o.default.log.call(t, c, f), i.default.call(t), f
                        }))
                    }, this.getDocument = function () {
                        var e = t.collectionName,
                            n = t.docSelectionCriteria,
                            u = [],
                            a = {};
                        return t.getDocumentByCriteria = function () {
                            return t.lf[e].iterate((function (t, e) {
                                (0, r.default)(t, n) && u.push(t)
                            })).then((function () {
                                if (u.length) return a = u[0], o.default.log.call(t, "Got Document with ".concat(JSON.stringify(n), ":"), a), i.default.call(t), a;
                                o.default.error.call(t, 'Could not find Document in "'.concat(e, '" collection with criteria: ').concat(JSON.stringify(n)))
                            }))
                        }, t.getDocumentByKey = function () {
                            return t.lf[e].getItem(n).then((function (r) {
                                return (a = r) ? o.default.log.call(t, "Got Document with key ".concat(JSON.stringify(n), ":"), a) : o.default.error.call(t, 'Could not find Document in "'.concat(e, '" collection with Key: ').concat(JSON.stringify(n))), i.default.call(t), a
                            })).catch((function (r) {
                                o.default.error.call(t, 'Could not find Document in "'.concat(e, '" collection with Key: ').concat(JSON.stringify(n))), i.default.call(t)
                            }))
                        }, "object" == c(n) ? t.getDocumentByCriteria() : t.getDocumentByKey()
                    }, "object" != c(e) || e instanceof Array != 0 ? this.userErrors.push('Data passed to .get() must be an object. Not an array, string, number or boolean. The object must contain a "keys" property set to true or false, e.g. { keys: true }') : e.hasOwnProperty("keys") ? "boolean" != typeof e.keys && this.userErrors.push('Property "keys" passed into get() method must be assigned a boolean value (true or false). Not a string or integer.') : this.userErrors.push('Object passed to get() method must contain a "keys" property set to boolean true or false, e.g. { keys: true }'), this.userErrors.length) return a.default.call(this), null;
                var n = u.default.call(this);
                return "collection" == n ? this.getCollection() : "doc" == n ? this.getDocument() : void 0
            };
            var r = f(t(17)),
                o = f(t(18)),
                i = f(t(3)),
                u = f(t(4)),
                a = f(t(5));

            function f(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            e.exports = n.default
        }, {
            17: 17,
            18: 18,
            3: 3,
            4: 4,
            5: 5
        }],
        10: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function (t) {
                var e = this,
                    n = this.collectionName,
                    f = this.docSelectionCriteria;
                return new Promise((function (s, l) {
                    if (e.setDocumentByCriteria = function () {
                            var a = [];
                            e.lf[n].iterate((function (e, n) {
                                (0, o.default)(e, f) && a.push({
                                    key: n,
                                    newDocument: t
                                })
                            })).then((function () {
                                a.length || l(u.default.call(e, "No Documents found in ".concat(n, " Collection with criteria ").concat(JSON.stringify(f), "."))), a.length > 1 && r.default.warn.call(e, "Multiple documents (".concat(a.length, ") with ").concat(JSON.stringify(f), " found for setting."))
                            })).then((function () {
                                a.forEach((function (r, o) {
                                    e.lf[n].setItem(r.key, r.newDocument).then((function (r) {
                                        o === a.length - 1 && s(i.default.call(e, "".concat(a.length, " Document").concat(a.length > 1 ? "s" : "", ' in "').concat(n, '" collection with ').concat(JSON.stringify(f), " set to:"), t))
                                    })).catch((function (t) {
                                        l(u.default.call(e, "Could not set ".concat(a.length, " Documents in ").concat(n, " Collection.")))
                                    }))
                                }))
                            }))
                        }, e.setDocumentByKey = function () {
                            e.lf[n].setItem(f, t).then((function (r) {
                                s(i.default.call(e, 'Document in "'.concat(n, '" collection with key ').concat(JSON.stringify(f), " set to:"), t))
                            })).catch((function (t) {
                                l(u.default.call(e, 'Document in "'.concat(n, '" collection with key ').concat(JSON.stringify(f), " could not be set.")))
                            }))
                        }, t ? "object" == c(t) && t instanceof Array == 0 || e.userErrors.push("Data passed to .set() must be an object. Not an array, string, number or boolean.") : e.userErrors.push('No new Document object provided to set() method. Use an object e.g. { id: 1, name: "Bill", age: 47 }'), !e.userErrors.length) return "object" == c(f) ? e.setDocumentByCriteria() : e.setDocumentByKey();
                    a.default.call(e)
                }))
            };
            var r = f(t(18)),
                o = f(t(17)),
                i = f(t(6)),
                u = f(t(2)),
                a = f(t(5));

            function f(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            e.exports = n.default
        }, {
            17: 17,
            18: 18,
            2: 2,
            5: 5,
            6: 6
        }],
        11: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function (t) {
                var e = this,
                    n = this.collectionName,
                    c = this.docSelectionCriteria;
                return new Promise((function (l, h) {
                    e.updateDocumentByCriteria = function () {
                        var f = [];
                        e.lf[n].iterate((function (e, n) {
                            if ((0, o.default)(e, c)) {
                                var r = (0, i.default)(e, t);
                                f.push({
                                    key: n,
                                    newDocument: r
                                })
                            }
                        })).then((function () {
                            f.length || h(a.default.call(e, "No Documents found in ".concat(n, " Collection with criteria ").concat(JSON.stringify(c), "."))), f.length > 1 && r.default.warn.call(e, "Multiple documents (".concat(f.length, ") with ").concat(JSON.stringify(c), " found for updating."))
                        })).then((function () {
                            f.forEach((function (r, o) {
                                e.lf[n].setItem(r.key, r.newDocument).then((function (r) {
                                    o === f.length - 1 && l(u.default.call(e, "".concat(f.length, " Document").concat(f.length > 1 ? "s" : "", ' in "').concat(n, '" collection with ').concat(JSON.stringify(c), " updated with:"), t))
                                })).catch((function (t) {
                                    h(a.default.call(e, "Could not update ".concat(f.length, " Documents in ").concat(n, " Collection.")))
                                }))
                            }))
                        }))
                    }, e.updateDocumentByKey = function () {
                        var r = {};
                        e.lf[n].getItem(c).then((function (o) {
                            r = (0, i.default)(o, t), e.lf[n].setItem(c, r), l(u.default.call(e, 'Document in "'.concat(n, '" collection with key ').concat(JSON.stringify(c), " updated to:"), r))
                        })).catch((function (t) {
                            h(a.default.call(e, 'No Document found in "'.concat(n, '" collection with key ').concat(JSON.stringify(c))))
                        }))
                    }, t ? "object" == s(t) && t instanceof Array == 0 || e.userErrors.push("Data passed to .update() must be an object. Not an array, string, number or boolean.") : e.userErrors.push('No update object provided to update() method. Use an object e.g. { name: "William" }'), e.userErrors.length ? f.default.call(e) : "object" == s(c) ? e.updateDocumentByCriteria() : e.updateDocumentByKey()
                }))
            };
            var r = c(t(18)),
                o = c(t(17)),
                i = c(t(19)),
                u = c(t(6)),
                a = c(t(2)),
                f = c(t(5));

            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function s(t) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            e.exports = n.default
        }, {
            17: 17,
            18: 18,
            19: 19,
            2: 2,
            5: 5,
            6: 6
        }],
        12: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function (t) {
                return t ? Number.isInteger(t) ? this.limitBy = t : this.userErrors.push("Limit parameter in limit() method must be an integer (e.g. 3) and not a float, boolean, string or object.") : this.userErrors.push("No integer specified in limit() method."), this
            }, e.exports = n.default
        }, {}],
        13: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function (t, e) {
                return t ? "string" != typeof t ? this.userErrors.push("First parameter in orderBy() method must be a string (a field name) e.g. 'name'") : this.orderByProperty = t : this.userErrors.push("No field name specified in orderBy() method. Use a string e.g. 'name'"), e && ("asc" !== e && "desc" !== e ? this.userErrors.push("Second parameter in orderBy() method must be a string set to 'asc' or 'desc'.") : this.orderByDirection = e), this
            }, e.exports = n.default
        }, {}],
        14: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function (t) {
                if (t) {
                    if ("string" != typeof t) return this.userErrors.push("Collection name in collection() method must be a string and not an object, number or boolean."), this;
                    this.collectionName = t;
                    var e = this.dbName;
                    return t in this.lf || (this.lf[t] = o.default.createInstance({
                        driver: o.default.INDEXEDDB,
                        name: e,
                        storeName: t
                    })), this
                }
                return this.userErrors.push("No collection name specified in collection() method."), this
            };
            var r, o = (r = t(20)) && r.__esModule ? r : {
                default: r
            };
            e.exports = n.default
        }, {
            20: 20
        }],
        15: [function (t, e, n) {
            "use strict";

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function (t) {
                return t ? "string" != typeof t && "object" !== r(t) ? this.userErrors.push("Document criteria specified in doc() method must not be a number or boolean. Use a string (with a key) or an object (with criteria) e.g. { id: 1 }") : this.docSelectionCriteria = t : this.userErrors.push("No document criteria specified in doc() method. Use a string (with a key) or an object (with criteria) e.g. { id: 1 }"), this
            }, e.exports = n.default
        }, {}],
        16: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = h(t(14)),
                o = h(t(15)),
                i = h(t(13)),
                u = h(t(12)),
                a = h(t(9)),
                f = h(t(7)),
                c = h(t(11)),
                s = h(t(10)),
                l = h(t(8));

            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            n.default = function t(e) {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.dbName = e, this.lf = {}, this.collectionName = null, this.orderByProperty = null, this.orderByDirection = null, this.limitBy = null, this.docSelectionCriteria = null, this.deleteCollectionQueue = {
                    queue: [],
                    running: !1
                }, this.config = {
                    debug: !0
                }, this.userErrors = [], this.collection = r.default.bind(this), this.doc = o.default.bind(this), this.orderBy = i.default.bind(this), this.limit = u.default.bind(this), this.get = a.default.bind(this), this.add = f.default.bind(this), this.update = c.default.bind(this), this.set = s.default.bind(this), this.delete = l.default.bind(this)
            }, e.exports = n.default
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            7: 7,
            8: 8,
            9: 9
        }],
        17: [function (t, e, n) {
            "use strict";

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function t(e, n) {
                return Object.keys(n).every((function (o) {
                    return "object" == r(n[o]) ? t(e[o], n[o]) : n[o] === e[o]
                }))
            }, e.exports = n.default
        }, {}],
        18: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = {
                baseStyle: "\n    padding: 2px 5px;\n    background-color: #124F5C;\n    border-radius: 4px;\n    color: white; \n  ",
                colors: {
                    log: "#124F5C",
                    error: "#ed2939",
                    warn: "#f39c12"
                },
                log: function (t, e) {},
                error: function (t, e) {},
                warn: function (t, e) {}
            };
            n.default = r, e.exports = n.default
        }, {}],
        19: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function (t) {
                for (var e = 1; e < arguments.length; e++)
                    for (var n in arguments[e]) {
                        var r = arguments[e][n];
                        t[n] = r
                    }
                return t
            }, e.exports = n.default
        }, {}],
        20: [function (t, e, n) {
            (function (r) {
                ! function (t) {
                    "object" == typeof n && void 0 !== e ? e.exports = t() : ("undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : this).localforage = t()
                }((function () {
                    return function e(n, r, o) {
                        function i(a, f) {
                            if (!r[a]) {
                                if (!n[a]) {
                                    var c = "function" == typeof t && t;
                                    if (!f && c) return c(a, !0);
                                    if (u) return u(a, !0);
                                    var s = new Error("Cannot find module '" + a + "'");
                                    throw s.code = "MODULE_NOT_FOUND", s
                                }
                                var l = r[a] = {
                                    exports: {}
                                };
                                n[a][0].call(l.exports, (function (t) {
                                    return i(n[a][1][t] || t)
                                }), l, l.exports, e, n, r, o)
                            }
                            return r[a].exports
                        }
                        for (var u = "function" == typeof t && t, a = 0; a < o.length; a++) i(o[a]);
                        return i
                    }({
                        1: [function (t, e, n) {
                            (function (t) {
                                "use strict";
                                var n, r, o = t.MutationObserver || t.WebKitMutationObserver;
                                if (o) {
                                    var i = 0,
                                        u = new o(s),
                                        a = t.document.createTextNode("");
                                    u.observe(a, {
                                        characterData: !0
                                    }), n = function () {
                                        a.data = i = ++i % 2
                                    }
                                } else if (t.setImmediate || void 0 === t.MessageChannel) n = "document" in t && "onreadystatechange" in t.document.createElement("script") ? function () {
                                    var e = t.document.createElement("script");
                                    e.onreadystatechange = function () {
                                        s(), e.onreadystatechange = null, e.parentNode.removeChild(e), e = null
                                    }, t.document.documentElement.appendChild(e)
                                } : function () {
                                    setTimeout(s, 0)
                                };
                                else {
                                    var f = new t.MessageChannel;
                                    f.port1.onmessage = s, n = function () {
                                        f.port2.postMessage(0)
                                    }
                                }
                                var c = [];

                                function s() {
                                    var t, e;
                                    r = !0;
                                    for (var n = c.length; n;) {
                                        for (e = c, c = [], t = -1; ++t < n;) e[t]();
                                        n = c.length
                                    }
                                    r = !1
                                }
                                e.exports = function (t) {
                                    1 !== c.push(t) || r || n()
                                }
                            }).call(this, void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                        }, {}],
                        2: [function (t, e, n) {
                            "use strict";
                            var r = t(1);

                            function o() {}
                            var i = {},
                                u = ["REJECTED"],
                                a = ["FULFILLED"],
                                f = ["PENDING"];

                            function c(t) {
                                if ("function" != typeof t) throw new TypeError("resolver must be a function");
                                this.state = f, this.queue = [], this.outcome = void 0, t !== o && d(this, t)
                            }

                            function s(t, e, n) {
                                this.promise = t, "function" == typeof e && (this.onFulfilled = e, this.callFulfilled = this.otherCallFulfilled), "function" == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected)
                            }

                            function l(t, e, n) {
                                r((function () {
                                    var r;
                                    try {
                                        r = e(n)
                                    } catch (o) {
                                        return i.reject(t, o)
                                    }
                                    r === t ? i.reject(t, new TypeError("Cannot resolve promise with itself")) : i.resolve(t, r)
                                }))
                            }

                            function h(t) {
                                var e = t && t.then;
                                if (t && ("object" == typeof t || "function" == typeof t) && "function" == typeof e) return function () {
                                    e.apply(t, arguments)
                                }
                            }

                            function d(t, e) {
                                var n = !1;

                                function r(e) {
                                    n || (n = !0, i.reject(t, e))
                                }

                                function o(e) {
                                    n || (n = !0, i.resolve(t, e))
                                }
                                var u = y((function () {
                                    e(o, r)
                                }));
                                "error" === u.status && r(u.value)
                            }

                            function y(t, e) {
                                var n = {};
                                try {
                                    n.value = t(e), n.status = "success"
                                } catch (r) {
                                    n.status = "error", n.value = r
                                }
                                return n
                            }
                            e.exports = c, c.prototype.catch = function (t) {
                                return this.then(null, t)
                            }, c.prototype.then = function (t, e) {
                                if ("function" != typeof t && this.state === a || "function" != typeof e && this.state === u) return this;
                                var n = new this.constructor(o);
                                return this.state !== f ? l(n, this.state === a ? t : e, this.outcome) : this.queue.push(new s(n, t, e)), n
                            }, s.prototype.callFulfilled = function (t) {
                                i.resolve(this.promise, t)
                            }, s.prototype.otherCallFulfilled = function (t) {
                                l(this.promise, this.onFulfilled, t)
                            }, s.prototype.callRejected = function (t) {
                                i.reject(this.promise, t)
                            }, s.prototype.otherCallRejected = function (t) {
                                l(this.promise, this.onRejected, t)
                            }, i.resolve = function (t, e) {
                                var n = y(h, e);
                                if ("error" === n.status) return i.reject(t, n.value);
                                var r = n.value;
                                if (r) d(t, r);
                                else {
                                    t.state = a, t.outcome = e;
                                    for (var o = -1, u = t.queue.length; ++o < u;) t.queue[o].callFulfilled(e)
                                }
                                return t
                            }, i.reject = function (t, e) {
                                t.state = u, t.outcome = e;
                                for (var n = -1, r = t.queue.length; ++n < r;) t.queue[n].callRejected(e);
                                return t
                            }, c.resolve = function (t) {
                                return t instanceof this ? t : i.resolve(new this(o), t)
                            }, c.reject = function (t) {
                                var e = new this(o);
                                return i.reject(e, t)
                            }, c.all = function (t) {
                                var e = this;
                                if ("[object Array]" !== Object.prototype.toString.call(t)) return this.reject(new TypeError("must be an array"));
                                var n = t.length,
                                    r = !1;
                                if (!n) return this.resolve([]);
                                for (var u = new Array(n), a = 0, f = -1, c = new this(o); ++f < n;) s(t[f], f);
                                return c;

                                function s(t, o) {
                                    e.resolve(t).then((function (t) {
                                        u[o] = t, ++a !== n || r || (r = !0, i.resolve(c, u))
                                    }), (function (t) {
                                        r || (r = !0, i.reject(c, t))
                                    }))
                                }
                            }, c.race = function (t) {
                                if ("[object Array]" !== Object.prototype.toString.call(t)) return this.reject(new TypeError("must be an array"));
                                var e = t.length,
                                    n = !1;
                                if (!e) return this.resolve([]);
                                for (var r, u = -1, a = new this(o); ++u < e;) r = t[u], this.resolve(r).then((function (t) {
                                    n || (n = !0, i.resolve(a, t))
                                }), (function (t) {
                                    n || (n = !0, i.reject(a, t))
                                }));
                                return a
                            }
                        }, {
                            1: 1
                        }],
                        3: [function (t, e, n) {
                            (function (e) {
                                "use strict";
                                "function" != typeof e.Promise && (e.Promise = t(2))
                            }).call(this, void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                        }, {
                            2: 2
                        }],
                        4: [function (t, e, n) {
                            "use strict";
                            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                                    return typeof t
                                } : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                },
                                o = function () {
                                    try {
                                        if ("undefined" != typeof indexedDB) return indexedDB;
                                        if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
                                        if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
                                        if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                                        if ("undefined" != typeof msIndexedDB) return msIndexedDB
                                    } catch (t) {
                                        return
                                    }
                                }();

                            function i(t, e) {
                                t = t || [], e = e || {};
                                try {
                                    return new Blob(t, e)
                                } catch (o) {
                                    if ("TypeError" !== o.name) throw o;
                                    for (var n = new("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), r = 0; r < t.length; r += 1) n.append(t[r]);
                                    return n.getBlob(e.type)
                                }
                            }
                            "undefined" == typeof Promise && t(3);
                            var u = Promise;

                            function a(t, e) {
                                e && t.then((function (t) {
                                    e(null, t)
                                }), (function (t) {
                                    e(t)
                                }))
                            }

                            function f(t, e, n) {
                                "function" == typeof e && t.then(e), "function" == typeof n && t.catch(n)
                            }

                            function c(t) {
                                return "string" != typeof t && (console.warn(t + " used as a key, but it is not a string."), t = String(t)), t
                            }

                            function s() {
                                if (arguments.length && "function" == typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1]
                            }
                            var l = void 0,
                                h = {},
                                d = Object.prototype.toString;

                            function y(t) {
                                var e = h[t.name],
                                    n = {};
                                n.promise = new u((function (t, e) {
                                    n.resolve = t, n.reject = e
                                })), e.deferredOperations.push(n), e.dbReady ? e.dbReady = e.dbReady.then((function () {
                                    return n.promise
                                })) : e.dbReady = n.promise
                            }

                            function p(t) {
                                var e = h[t.name].deferredOperations.pop();
                                if (e) return e.resolve(), e.promise
                            }

                            function v(t, e) {
                                var n = h[t.name].deferredOperations.pop();
                                if (n) return n.reject(e), n.promise
                            }

                            function g(t, e) {
                                return new u((function (n, r) {
                                    if (h[t.name] = h[t.name] || {
                                            forages: [],
                                            db: null,
                                            dbReady: null,
                                            deferredOperations: []
                                        }, t.db) {
                                        if (!e) return n(t.db);
                                        y(t), t.db.close()
                                    }
                                    var i = [t.name];
                                    e && i.push(t.version);
                                    var u = o.open.apply(o, i);
                                    e && (u.onupgradeneeded = function (e) {
                                        var n = u.result;
                                        try {
                                            n.createObjectStore(t.storeName), e.oldVersion <= 1 && n.createObjectStore("local-forage-detect-blob-support")
                                        } catch (r) {
                                            if ("ConstraintError" !== r.name) throw r;
                                            console.warn('The database "' + t.name + '" has been upgraded from version ' + e.oldVersion + " to version " + e.newVersion + ', but the storage "' + t.storeName + '" already exists.')
                                        }
                                    }), u.onerror = function (t) {
                                        t.preventDefault(), r(u.error)
                                    }, u.onsuccess = function () {
                                        n(u.result), p(t)
                                    }
                                }))
                            }

                            function m(t) {
                                return g(t, !1)
                            }

                            function b(t) {
                                return g(t, !0)
                            }

                            function w(t, e) {
                                if (!t.db) return !0;
                                var n = !t.db.objectStoreNames.contains(t.storeName),
                                    r = t.version < t.db.version,
                                    o = t.version > t.db.version;
                                if (r && (t.version !== e && console.warn('The database "' + t.name + "\" can't be downgraded from version " + t.db.version + " to version " + t.version + "."), t.version = t.db.version), o || n) {
                                    if (n) {
                                        var i = t.db.version + 1;
                                        i > t.version && (t.version = i)
                                    }
                                    return !0
                                }
                                return !1
                            }

                            function _(t) {
                                return i([function (t) {
                                    for (var e = t.length, n = new ArrayBuffer(e), r = new Uint8Array(n), o = 0; o < e; o++) r[o] = t.charCodeAt(o);
                                    return n
                                }(atob(t.data))], {
                                    type: t.type
                                })
                            }

                            function S(t) {
                                return t && t.__local_forage_encoded_blob
                            }

                            function E(t) {
                                var e = this,
                                    n = e._initReady().then((function () {
                                        var t = h[e._dbInfo.name];
                                        if (t && t.dbReady) return t.dbReady
                                    }));
                                return f(n, t, t), n
                            }

                            function I(t, e, n, r) {
                                void 0 === r && (r = 1);
                                try {
                                    var o = t.db.transaction(t.storeName, e);
                                    n(null, o)
                                } catch (i) {
                                    if (r > 0 && (!t.db || "InvalidStateError" === i.name || "NotFoundError" === i.name)) return u.resolve().then((function () {
                                        if (!t.db || "NotFoundError" === i.name && !t.db.objectStoreNames.contains(t.storeName) && t.version <= t.db.version) return t.db && (t.version = t.db.version + 1), b(t)
                                    })).then((function () {
                                        return function (t) {
                                            y(t);
                                            for (var e = h[t.name], n = e.forages, r = 0; r < n.length; r++) {
                                                var o = n[r];
                                                o._dbInfo.db && (o._dbInfo.db.close(), o._dbInfo.db = null)
                                            }
                                            return t.db = null, m(t).then((function (e) {
                                                return t.db = e, w(t) ? b(t) : e
                                            })).then((function (r) {
                                                t.db = e.db = r;
                                                for (var o = 0; o < n.length; o++) n[o]._dbInfo.db = r
                                            })).catch((function (e) {
                                                throw v(t, e), e
                                            }))
                                        }(t).then((function () {
                                            I(t, e, n, r - 1)
                                        }))
                                    })).catch(n);
                                    n(i)
                                }
                            }
                            var N = {
                                    _driver: "asyncStorage",
                                    _initStorage: function (t) {
                                        var e = this,
                                            n = {
                                                db: null
                                            };
                                        if (t)
                                            for (var r in t) n[r] = t[r];
                                        var o = h[n.name];
                                        o || (o = {
                                            forages: [],
                                            db: null,
                                            dbReady: null,
                                            deferredOperations: []
                                        }, h[n.name] = o), o.forages.push(e), e._initReady || (e._initReady = e.ready, e.ready = E);
                                        var i = [];

                                        function a() {
                                            return u.resolve()
                                        }
                                        for (var f = 0; f < o.forages.length; f++) {
                                            var c = o.forages[f];
                                            c !== e && i.push(c._initReady().catch(a))
                                        }
                                        var s = o.forages.slice(0);
                                        return u.all(i).then((function () {
                                            return n.db = o.db, m(n)
                                        })).then((function (t) {
                                            return n.db = t, w(n, e._defaultConfig.version) ? b(n) : t
                                        })).then((function (t) {
                                            n.db = o.db = t, e._dbInfo = n;
                                            for (var r = 0; r < s.length; r++) {
                                                var i = s[r];
                                                i !== e && (i._dbInfo.db = n.db, i._dbInfo.version = n.version)
                                            }
                                        }))
                                    },
                                    _support: function () {
                                        try {
                                            if (!o || !o.open) return !1;
                                            var t = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                                                e = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                                            return (!t || e) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
                                        } catch (n) {
                                            return !1
                                        }
                                    }(),
                                    iterate: function (t, e) {
                                        var n = this,
                                            r = new u((function (e, r) {
                                                n.ready().then((function () {
                                                    I(n._dbInfo, "readonly", (function (o, i) {
                                                        if (o) return r(o);
                                                        try {
                                                            var u = i.objectStore(n._dbInfo.storeName).openCursor(),
                                                                a = 1;
                                                            u.onsuccess = function () {
                                                                var n = u.result;
                                                                if (n) {
                                                                    var r = n.value;
                                                                    S(r) && (r = _(r));
                                                                    var o = t(r, n.key, a++);
                                                                    void 0 !== o ? e(o) : n.continue()
                                                                } else e()
                                                            }, u.onerror = function () {
                                                                r(u.error)
                                                            }
                                                        } catch (f) {
                                                            r(f)
                                                        }
                                                    }))
                                                })).catch(r)
                                            }));
                                        return a(r, e), r
                                    },
                                    getItem: function (t, e) {
                                        var n = this;
                                        t = c(t);
                                        var r = new u((function (e, r) {
                                            n.ready().then((function () {
                                                I(n._dbInfo, "readonly", (function (o, i) {
                                                    if (o) return r(o);
                                                    try {
                                                        var u = i.objectStore(n._dbInfo.storeName).get(t);
                                                        u.onsuccess = function () {
                                                            var t = u.result;
                                                            void 0 === t && (t = null), S(t) && (t = _(t)), e(t)
                                                        }, u.onerror = function () {
                                                            r(u.error)
                                                        }
                                                    } catch (a) {
                                                        r(a)
                                                    }
                                                }))
                                            })).catch(r)
                                        }));
                                        return a(r, e), r
                                    },
                                    setItem: function (t, e, n) {
                                        var r = this;
                                        t = c(t);
                                        var o = new u((function (n, o) {
                                            var a;
                                            r.ready().then((function () {
                                                return a = r._dbInfo, "[object Blob]" === d.call(e) ? function (t) {
                                                    return "boolean" == typeof l ? u.resolve(l) : function (t) {
                                                        return new u((function (e) {
                                                            var n = t.transaction("local-forage-detect-blob-support", "readwrite"),
                                                                r = i([""]);
                                                            n.objectStore("local-forage-detect-blob-support").put(r, "key"), n.onabort = function (t) {
                                                                t.preventDefault(), t.stopPropagation(), e(!1)
                                                            }, n.oncomplete = function () {
                                                                var t = navigator.userAgent.match(/Chrome\/(\d+)/),
                                                                    n = navigator.userAgent.match(/Edge\//);
                                                                e(n || !t || parseInt(t[1], 10) >= 43)
                                                            }
                                                        })).catch((function () {
                                                            return !1
                                                        }))
                                                    }(t).then((function (t) {
                                                        return l = t
                                                    }))
                                                }(a.db).then((function (t) {
                                                    return t ? e : (n = e, new u((function (t, e) {
                                                        var r = new FileReader;
                                                        r.onerror = e, r.onloadend = function (e) {
                                                            var r = btoa(e.target.result || "");
                                                            t({
                                                                __local_forage_encoded_blob: !0,
                                                                data: r,
                                                                type: n.type
                                                            })
                                                        }, r.readAsBinaryString(n)
                                                    })));
                                                    var n
                                                })) : e
                                            })).then((function (e) {
                                                I(r._dbInfo, "readwrite", (function (i, u) {
                                                    if (i) return o(i);
                                                    try {
                                                        var a = u.objectStore(r._dbInfo.storeName);
                                                        null === e && (e = void 0);
                                                        var f = a.put(e, t);
                                                        u.oncomplete = function () {
                                                            void 0 === e && (e = null), n(e)
                                                        }, u.onabort = u.onerror = function () {
                                                            var t = f.error ? f.error : f.transaction.error;
                                                            o(t)
                                                        }
                                                    } catch (c) {
                                                        o(c)
                                                    }
                                                }))
                                            })).catch(o)
                                        }));
                                        return a(o, n), o
                                    },
                                    removeItem: function (t, e) {
                                        var n = this;
                                        t = c(t);
                                        var r = new u((function (e, r) {
                                            n.ready().then((function () {
                                                I(n._dbInfo, "readwrite", (function (o, i) {
                                                    if (o) return r(o);
                                                    try {
                                                        var u = i.objectStore(n._dbInfo.storeName).delete(t);
                                                        i.oncomplete = function () {
                                                            e()
                                                        }, i.onerror = function () {
                                                            r(u.error)
                                                        }, i.onabort = function () {
                                                            var t = u.error ? u.error : u.transaction.error;
                                                            r(t)
                                                        }
                                                    } catch (a) {
                                                        r(a)
                                                    }
                                                }))
                                            })).catch(r)
                                        }));
                                        return a(r, e), r
                                    },
                                    clear: function (t) {
                                        var e = this,
                                            n = new u((function (t, n) {
                                                e.ready().then((function () {
                                                    I(e._dbInfo, "readwrite", (function (r, o) {
                                                        if (r) return n(r);
                                                        try {
                                                            var i = o.objectStore(e._dbInfo.storeName).clear();
                                                            o.oncomplete = function () {
                                                                t()
                                                            }, o.onabort = o.onerror = function () {
                                                                var t = i.error ? i.error : i.transaction.error;
                                                                n(t)
                                                            }
                                                        } catch (u) {
                                                            n(u)
                                                        }
                                                    }))
                                                })).catch(n)
                                            }));
                                        return a(n, t), n
                                    },
                                    length: function (t) {
                                        var e = this,
                                            n = new u((function (t, n) {
                                                e.ready().then((function () {
                                                    I(e._dbInfo, "readonly", (function (r, o) {
                                                        if (r) return n(r);
                                                        try {
                                                            var i = o.objectStore(e._dbInfo.storeName).count();
                                                            i.onsuccess = function () {
                                                                t(i.result)
                                                            }, i.onerror = function () {
                                                                n(i.error)
                                                            }
                                                        } catch (u) {
                                                            n(u)
                                                        }
                                                    }))
                                                })).catch(n)
                                            }));
                                        return a(n, t), n
                                    },
                                    key: function (t, e) {
                                        var n = this,
                                            r = new u((function (e, r) {
                                                t < 0 ? e(null) : n.ready().then((function () {
                                                    I(n._dbInfo, "readonly", (function (o, i) {
                                                        if (o) return r(o);
                                                        try {
                                                            var u = i.objectStore(n._dbInfo.storeName),
                                                                a = !1,
                                                                f = u.openKeyCursor();
                                                            f.onsuccess = function () {
                                                                var n = f.result;
                                                                n ? 0 === t || a ? e(n.key) : (a = !0, n.advance(t)) : e(null)
                                                            }, f.onerror = function () {
                                                                r(f.error)
                                                            }
                                                        } catch (c) {
                                                            r(c)
                                                        }
                                                    }))
                                                })).catch(r)
                                            }));
                                        return a(r, e), r
                                    },
                                    keys: function (t) {
                                        var e = this,
                                            n = new u((function (t, n) {
                                                e.ready().then((function () {
                                                    I(e._dbInfo, "readonly", (function (r, o) {
                                                        if (r) return n(r);
                                                        try {
                                                            var i = o.objectStore(e._dbInfo.storeName).openKeyCursor(),
                                                                u = [];
                                                            i.onsuccess = function () {
                                                                var e = i.result;
                                                                e ? (u.push(e.key), e.continue()) : t(u)
                                                            }, i.onerror = function () {
                                                                n(i.error)
                                                            }
                                                        } catch (a) {
                                                            n(a)
                                                        }
                                                    }))
                                                })).catch(n)
                                            }));
                                        return a(n, t), n
                                    },
                                    dropInstance: function (t, e) {
                                        e = s.apply(this, arguments);
                                        var n, r = this.config();
                                        if ((t = "function" != typeof t && t || {}).name || (t.name = t.name || r.name, t.storeName = t.storeName || r.storeName), t.name) {
                                            var i = t.name === r.name && this._dbInfo.db ? u.resolve(this._dbInfo.db) : m(t).then((function (e) {
                                                var n = h[t.name],
                                                    r = n.forages;
                                                n.db = e;
                                                for (var o = 0; o < r.length; o++) r[o]._dbInfo.db = e;
                                                return e
                                            }));
                                            n = t.storeName ? i.then((function (e) {
                                                if (e.objectStoreNames.contains(t.storeName)) {
                                                    var n = e.version + 1;
                                                    y(t);
                                                    var r = h[t.name],
                                                        i = r.forages;
                                                    e.close();
                                                    for (var a = 0; a < i.length; a++) {
                                                        var f = i[a];
                                                        f._dbInfo.db = null, f._dbInfo.version = n
                                                    }
                                                    return new u((function (e, r) {
                                                        var i = o.open(t.name, n);
                                                        i.onerror = function (t) {
                                                            i.result.close(), r(t)
                                                        }, i.onupgradeneeded = function () {
                                                            i.result.deleteObjectStore(t.storeName)
                                                        }, i.onsuccess = function () {
                                                            var t = i.result;
                                                            t.close(), e(t)
                                                        }
                                                    })).then((function (t) {
                                                        r.db = t;
                                                        for (var e = 0; e < i.length; e++) {
                                                            var n = i[e];
                                                            n._dbInfo.db = t, p(n._dbInfo)
                                                        }
                                                    })).catch((function (e) {
                                                        throw (v(t, e) || u.resolve()).catch((function () {})), e
                                                    }))
                                                }
                                            })) : i.then((function (e) {
                                                y(t);
                                                var n = h[t.name],
                                                    r = n.forages;
                                                e.close();
                                                for (var i = 0; i < r.length; i++) r[i]._dbInfo.db = null;
                                                return new u((function (e, n) {
                                                    var r = o.deleteDatabase(t.name);
                                                    r.onerror = r.onblocked = function (t) {
                                                        var e = r.result;
                                                        e && e.close(), n(t)
                                                    }, r.onsuccess = function () {
                                                        var t = r.result;
                                                        t && t.close(), e(t)
                                                    }
                                                })).then((function (t) {
                                                    n.db = t;
                                                    for (var e = 0; e < r.length; e++) p(r[e]._dbInfo)
                                                })).catch((function (e) {
                                                    throw (v(t, e) || u.resolve()).catch((function () {})), e
                                                }))
                                            }))
                                        } else n = u.reject("Invalid arguments");
                                        return a(n, e), n
                                    }
                                },
                                B = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                                C = /^~~local_forage_type~([^~]+)~/,
                                A = "__lfsc__:".length,
                                D = A + "arbf".length,
                                j = Object.prototype.toString;

                            function O(t) {
                                var e, n, r, o, i, u = .75 * t.length,
                                    a = t.length,
                                    f = 0;
                                "=" === t[t.length - 1] && (u--, "=" === t[t.length - 2] && u--);
                                var c = new ArrayBuffer(u),
                                    s = new Uint8Array(c);
                                for (e = 0; e < a; e += 4) n = B.indexOf(t[e]), r = B.indexOf(t[e + 1]), o = B.indexOf(t[e + 2]), i = B.indexOf(t[e + 3]), s[f++] = n << 2 | r >> 4, s[f++] = (15 & r) << 4 | o >> 2, s[f++] = (3 & o) << 6 | 63 & i;
                                return c
                            }

                            function x(t) {
                                var e, n = new Uint8Array(t),
                                    r = "";
                                for (e = 0; e < n.length; e += 3) r += B[n[e] >> 2], r += B[(3 & n[e]) << 4 | n[e + 1] >> 4], r += B[(15 & n[e + 1]) << 2 | n[e + 2] >> 6], r += B[63 & n[e + 2]];
                                return n.length % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : n.length % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r
                            }
                            var R = {
                                serialize: function (t, e) {
                                    var n = "";
                                    if (t && (n = j.call(t)), t && ("[object ArrayBuffer]" === n || t.buffer && "[object ArrayBuffer]" === j.call(t.buffer))) {
                                        var r, o = "__lfsc__:";
                                        t instanceof ArrayBuffer ? (r = t, o += "arbf") : (r = t.buffer, "[object Int8Array]" === n ? o += "si08" : "[object Uint8Array]" === n ? o += "ui08" : "[object Uint8ClampedArray]" === n ? o += "uic8" : "[object Int16Array]" === n ? o += "si16" : "[object Uint16Array]" === n ? o += "ur16" : "[object Int32Array]" === n ? o += "si32" : "[object Uint32Array]" === n ? o += "ui32" : "[object Float32Array]" === n ? o += "fl32" : "[object Float64Array]" === n ? o += "fl64" : e(new Error("Failed to get type for BinaryArray"))), e(o + x(r))
                                    } else if ("[object Blob]" === n) {
                                        var i = new FileReader;
                                        i.onload = function () {
                                            var n = "~~local_forage_type~" + t.type + "~" + x(this.result);
                                            e("__lfsc__:blob" + n)
                                        }, i.readAsArrayBuffer(t)
                                    } else try {
                                        e(JSON.stringify(t))
                                    } catch (u) {
                                        console.error("Couldn't convert value into a JSON string: ", t), e(null, u)
                                    }
                                },
                                deserialize: function (t) {
                                    if ("__lfsc__:" !== t.substring(0, A)) return JSON.parse(t);
                                    var e, n = t.substring(D),
                                        r = t.substring(A, D);
                                    if ("blob" === r && C.test(n)) {
                                        var o = n.match(C);
                                        e = o[1], n = n.substring(o[0].length)
                                    }
                                    var u = O(n);
                                    switch (r) {
                                        case "arbf":
                                            return u;
                                        case "blob":
                                            return i([u], {
                                                type: e
                                            });
                                        case "si08":
                                            return new Int8Array(u);
                                        case "ui08":
                                            return new Uint8Array(u);
                                        case "uic8":
                                            return new Uint8ClampedArray(u);
                                        case "si16":
                                            return new Int16Array(u);
                                        case "ur16":
                                            return new Uint16Array(u);
                                        case "si32":
                                            return new Int32Array(u);
                                        case "ui32":
                                            return new Uint32Array(u);
                                        case "fl32":
                                            return new Float32Array(u);
                                        case "fl64":
                                            return new Float64Array(u);
                                        default:
                                            throw new Error("Unkown type: " + r)
                                    }
                                },
                                stringToBuffer: O,
                                bufferToString: x
                            };

                            function k(t, e, n, r) {
                                t.executeSql("CREATE TABLE IF NOT EXISTS " + e.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, r)
                            }

                            function M(t, e, n, r, o, i) {
                                t.executeSql(n, r, o, (function (t, u) {
                                    u.code === u.SYNTAX_ERR ? t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [e.storeName], (function (t, a) {
                                        a.rows.length ? i(t, u) : k(t, e, (function () {
                                            t.executeSql(n, r, o, i)
                                        }), i)
                                    }), i) : i(t, u)
                                }), i)
                            }
                            var T = {
                                _driver: "webSQLStorage",
                                _initStorage: function (t) {
                                    var e = this,
                                        n = {
                                            db: null
                                        };
                                    if (t)
                                        for (var r in t) n[r] = "string" != typeof t[r] ? t[r].toString() : t[r];
                                    var o = new u((function (t, r) {
                                        try {
                                            n.db = openDatabase(n.name, String(n.version), n.description, n.size)
                                        } catch (o) {
                                            return r(o)
                                        }
                                        n.db.transaction((function (o) {
                                            k(o, n, (function () {
                                                e._dbInfo = n, t()
                                            }), (function (t, e) {
                                                r(e)
                                            }))
                                        }), r)
                                    }));
                                    return n.serializer = R, o
                                },
                                _support: "function" == typeof openDatabase,
                                iterate: function (t, e) {
                                    var n = this,
                                        r = new u((function (e, r) {
                                            n.ready().then((function () {
                                                var o = n._dbInfo;
                                                o.db.transaction((function (n) {
                                                    M(n, o, "SELECT * FROM " + o.storeName, [], (function (n, r) {
                                                        for (var i = r.rows, u = i.length, a = 0; a < u; a++) {
                                                            var f = i.item(a),
                                                                c = f.value;
                                                            if (c && (c = o.serializer.deserialize(c)), void 0 !== (c = t(c, f.key, a + 1))) return void e(c)
                                                        }
                                                        e()
                                                    }), (function (t, e) {
                                                        r(e)
                                                    }))
                                                }))
                                            })).catch(r)
                                        }));
                                    return a(r, e), r
                                },
                                getItem: function (t, e) {
                                    var n = this;
                                    t = c(t);
                                    var r = new u((function (e, r) {
                                        n.ready().then((function () {
                                            var o = n._dbInfo;
                                            o.db.transaction((function (n) {
                                                M(n, o, "SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [t], (function (t, n) {
                                                    var r = n.rows.length ? n.rows.item(0).value : null;
                                                    r && (r = o.serializer.deserialize(r)), e(r)
                                                }), (function (t, e) {
                                                    r(e)
                                                }))
                                            }))
                                        })).catch(r)
                                    }));
                                    return a(r, e), r
                                },
                                setItem: function (t, e, n) {
                                    return function t(e, n, r, o) {
                                        var i = this;
                                        e = c(e);
                                        var f = new u((function (u, a) {
                                            i.ready().then((function () {
                                                void 0 === n && (n = null);
                                                var f = n,
                                                    c = i._dbInfo;
                                                c.serializer.serialize(n, (function (n, s) {
                                                    s ? a(s) : c.db.transaction((function (t) {
                                                        M(t, c, "INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [e, n], (function () {
                                                            u(f)
                                                        }), (function (t, e) {
                                                            a(e)
                                                        }))
                                                    }), (function (n) {
                                                        if (n.code === n.QUOTA_ERR) {
                                                            if (o > 0) return void u(t.apply(i, [e, f, r, o - 1]));
                                                            a(n)
                                                        }
                                                    }))
                                                }))
                                            })).catch(a)
                                        }));
                                        return a(f, r), f
                                    }.apply(this, [t, e, n, 1])
                                },
                                removeItem: function (t, e) {
                                    var n = this;
                                    t = c(t);
                                    var r = new u((function (e, r) {
                                        n.ready().then((function () {
                                            var o = n._dbInfo;
                                            o.db.transaction((function (n) {
                                                M(n, o, "DELETE FROM " + o.storeName + " WHERE key = ?", [t], (function () {
                                                    e()
                                                }), (function (t, e) {
                                                    r(e)
                                                }))
                                            }))
                                        })).catch(r)
                                    }));
                                    return a(r, e), r
                                },
                                clear: function (t) {
                                    var e = this,
                                        n = new u((function (t, n) {
                                            e.ready().then((function () {
                                                var r = e._dbInfo;
                                                r.db.transaction((function (e) {
                                                    M(e, r, "DELETE FROM " + r.storeName, [], (function () {
                                                        t()
                                                    }), (function (t, e) {
                                                        n(e)
                                                    }))
                                                }))
                                            })).catch(n)
                                        }));
                                    return a(n, t), n
                                },
                                length: function (t) {
                                    var e = this,
                                        n = new u((function (t, n) {
                                            e.ready().then((function () {
                                                var r = e._dbInfo;
                                                r.db.transaction((function (e) {
                                                    M(e, r, "SELECT COUNT(key) as c FROM " + r.storeName, [], (function (e, n) {
                                                        var r = n.rows.item(0).c;
                                                        t(r)
                                                    }), (function (t, e) {
                                                        n(e)
                                                    }))
                                                }))
                                            })).catch(n)
                                        }));
                                    return a(n, t), n
                                },
                                key: function (t, e) {
                                    var n = this,
                                        r = new u((function (e, r) {
                                            n.ready().then((function () {
                                                var o = n._dbInfo;
                                                o.db.transaction((function (n) {
                                                    M(n, o, "SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [t + 1], (function (t, n) {
                                                        var r = n.rows.length ? n.rows.item(0).key : null;
                                                        e(r)
                                                    }), (function (t, e) {
                                                        r(e)
                                                    }))
                                                }))
                                            })).catch(r)
                                        }));
                                    return a(r, e), r
                                },
                                keys: function (t) {
                                    var e = this,
                                        n = new u((function (t, n) {
                                            e.ready().then((function () {
                                                var r = e._dbInfo;
                                                r.db.transaction((function (e) {
                                                    M(e, r, "SELECT key FROM " + r.storeName, [], (function (e, n) {
                                                        for (var r = [], o = 0; o < n.rows.length; o++) r.push(n.rows.item(o).key);
                                                        t(r)
                                                    }), (function (t, e) {
                                                        n(e)
                                                    }))
                                                }))
                                            })).catch(n)
                                        }));
                                    return a(n, t), n
                                },
                                dropInstance: function (t, e) {
                                    e = s.apply(this, arguments);
                                    var n = this.config();
                                    (t = "function" != typeof t && t || {}).name || (t.name = t.name || n.name, t.storeName = t.storeName || n.storeName);
                                    var r, o = this;
                                    return a(r = t.name ? new u((function (e) {
                                        var r;
                                        r = t.name === n.name ? o._dbInfo.db : openDatabase(t.name, "", "", 0), t.storeName ? e({
                                            db: r,
                                            storeNames: [t.storeName]
                                        }) : e(function (t) {
                                            return new u((function (e, n) {
                                                t.transaction((function (r) {
                                                    r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], (function (n, r) {
                                                        for (var o = [], i = 0; i < r.rows.length; i++) o.push(r.rows.item(i).name);
                                                        e({
                                                            db: t,
                                                            storeNames: o
                                                        })
                                                    }), (function (t, e) {
                                                        n(e)
                                                    }))
                                                }), (function (t) {
                                                    n(t)
                                                }))
                                            }))
                                        }(r))
                                    })).then((function (t) {
                                        return new u((function (e, n) {
                                            t.db.transaction((function (r) {
                                                function o(t) {
                                                    return new u((function (e, n) {
                                                        r.executeSql("DROP TABLE IF EXISTS " + t, [], (function () {
                                                            e()
                                                        }), (function (t, e) {
                                                            n(e)
                                                        }))
                                                    }))
                                                }
                                                for (var i = [], a = 0, f = t.storeNames.length; a < f; a++) i.push(o(t.storeNames[a]));
                                                u.all(i).then((function () {
                                                    e()
                                                })).catch((function (t) {
                                                    n(t)
                                                }))
                                            }), (function (t) {
                                                n(t)
                                            }))
                                        }))
                                    })) : u.reject("Invalid arguments"), e), r
                                }
                            };

                            function U(t, e) {
                                var n = t.name + "/";
                                return t.storeName !== e.storeName && (n += t.storeName + "/"), n
                            }
                            var L = {
                                    _driver: "localStorageWrapper",
                                    _initStorage: function (t) {
                                        var e = {};
                                        if (t)
                                            for (var n in t) e[n] = t[n];
                                        return e.keyPrefix = U(t, this._defaultConfig), ! function () {
                                            try {
                                                return localStorage.setItem("_localforage_support_test", !0), localStorage.removeItem("_localforage_support_test"), !1
                                            } catch (t) {
                                                return !0
                                            }
                                        }() || localStorage.length > 0 ? (this._dbInfo = e, e.serializer = R, u.resolve()) : u.reject()
                                    },
                                    _support: function () {
                                        try {
                                            return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem
                                        } catch (t) {
                                            return !1
                                        }
                                    }(),
                                    iterate: function (t, e) {
                                        var n = this,
                                            r = n.ready().then((function () {
                                                for (var e = n._dbInfo, r = e.keyPrefix, o = r.length, i = localStorage.length, u = 1, a = 0; a < i; a++) {
                                                    var f = localStorage.key(a);
                                                    if (0 === f.indexOf(r)) {
                                                        var c = localStorage.getItem(f);
                                                        if (c && (c = e.serializer.deserialize(c)), void 0 !== (c = t(c, f.substring(o), u++))) return c
                                                    }
                                                }
                                            }));
                                        return a(r, e), r
                                    },
                                    getItem: function (t, e) {
                                        var n = this;
                                        t = c(t);
                                        var r = n.ready().then((function () {
                                            var e = n._dbInfo,
                                                r = localStorage.getItem(e.keyPrefix + t);
                                            return r && (r = e.serializer.deserialize(r)), r
                                        }));
                                        return a(r, e), r
                                    },
                                    setItem: function (t, e, n) {
                                        var r = this;
                                        t = c(t);
                                        var o = r.ready().then((function () {
                                            void 0 === e && (e = null);
                                            var n = e;
                                            return new u((function (o, i) {
                                                var u = r._dbInfo;
                                                u.serializer.serialize(e, (function (e, r) {
                                                    if (r) i(r);
                                                    else try {
                                                        localStorage.setItem(u.keyPrefix + t, e), o(n)
                                                    } catch (a) {
                                                        "QuotaExceededError" !== a.name && "NS_ERROR_DOM_QUOTA_REACHED" !== a.name || i(a), i(a)
                                                    }
                                                }))
                                            }))
                                        }));
                                        return a(o, n), o
                                    },
                                    removeItem: function (t, e) {
                                        var n = this;
                                        t = c(t);
                                        var r = n.ready().then((function () {
                                            var e = n._dbInfo;
                                            localStorage.removeItem(e.keyPrefix + t)
                                        }));
                                        return a(r, e), r
                                    },
                                    clear: function (t) {
                                        var e = this,
                                            n = e.ready().then((function () {
                                                for (var t = e._dbInfo.keyPrefix, n = localStorage.length - 1; n >= 0; n--) {
                                                    var r = localStorage.key(n);
                                                    0 === r.indexOf(t) && localStorage.removeItem(r)
                                                }
                                            }));
                                        return a(n, t), n
                                    },
                                    length: function (t) {
                                        var e = this.keys().then((function (t) {
                                            return t.length
                                        }));
                                        return a(e, t), e
                                    },
                                    key: function (t, e) {
                                        var n = this,
                                            r = n.ready().then((function () {
                                                var e, r = n._dbInfo;
                                                try {
                                                    e = localStorage.key(t)
                                                } catch (o) {
                                                    e = null
                                                }
                                                return e && (e = e.substring(r.keyPrefix.length)), e
                                            }));
                                        return a(r, e), r
                                    },
                                    keys: function (t) {
                                        var e = this,
                                            n = e.ready().then((function () {
                                                for (var t = e._dbInfo, n = localStorage.length, r = [], o = 0; o < n; o++) {
                                                    var i = localStorage.key(o);
                                                    0 === i.indexOf(t.keyPrefix) && r.push(i.substring(t.keyPrefix.length))
                                                }
                                                return r
                                            }));
                                        return a(n, t), n
                                    },
                                    dropInstance: function (t, e) {
                                        if (e = s.apply(this, arguments), !(t = "function" != typeof t && t || {}).name) {
                                            var n = this.config();
                                            t.name = t.name || n.name, t.storeName = t.storeName || n.storeName
                                        }
                                        var r, o = this;
                                        return a(r = t.name ? new u((function (e) {
                                            t.storeName ? e(U(t, o._defaultConfig)) : e(t.name + "/")
                                        })).then((function (t) {
                                            for (var e = localStorage.length - 1; e >= 0; e--) {
                                                var n = localStorage.key(e);
                                                0 === n.indexOf(t) && localStorage.removeItem(n)
                                            }
                                        })) : u.reject("Invalid arguments"), e), r
                                    }
                                },
                                P = function (t, e) {
                                    for (var n, r, o = t.length, i = 0; i < o;) {
                                        if ((n = t[i]) === (r = e) || "number" == typeof n && "number" == typeof r && isNaN(n) && isNaN(r)) return !0;
                                        i++
                                    }
                                    return !1
                                },
                                F = Array.isArray || function (t) {
                                    return "[object Array]" === Object.prototype.toString.call(t)
                                },
                                z = {},
                                q = {},
                                J = {
                                    INDEXEDDB: N,
                                    WEBSQL: T,
                                    LOCALSTORAGE: L
                                },
                                Q = [J.INDEXEDDB._driver, J.WEBSQL._driver, J.LOCALSTORAGE._driver],
                                W = ["dropInstance"],
                                K = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(W),
                                V = {
                                    description: "",
                                    driver: Q.slice(),
                                    name: "localforage",
                                    size: 4980736,
                                    storeName: "keyvaluepairs",
                                    version: 1
                                };

                            function Y(t, e) {
                                t[e] = function () {
                                    var n = arguments;
                                    return t.ready().then((function () {
                                        return t[e].apply(t, n)
                                    }))
                                }
                            }

                            function X() {
                                for (var t = 1; t < arguments.length; t++) {
                                    var e = arguments[t];
                                    if (e)
                                        for (var n in e) e.hasOwnProperty(n) && (F(e[n]) ? arguments[0][n] = e[n].slice() : arguments[0][n] = e[n])
                                }
                                return arguments[0]
                            }
                            var G = new(function () {
                                function t(e) {
                                    for (var n in function (t, e) {
                                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                        }(this, t), J)
                                        if (J.hasOwnProperty(n)) {
                                            var r = J[n],
                                                o = r._driver;
                                            this[n] = o, z[o] || this.defineDriver(r)
                                        } this._defaultConfig = X({}, V), this._config = X({}, this._defaultConfig, e), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch((function () {}))
                                }
                                return t.prototype.config = function (t) {
                                    if ("object" === (void 0 === t ? "undefined" : r(t))) {
                                        if (this._ready) return new Error("Can't call config() after localforage has been used.");
                                        for (var e in t) {
                                            if ("storeName" === e && (t[e] = t[e].replace(/\W/g, "_")), "version" === e && "number" != typeof t[e]) return new Error("Database version must be a number.");
                                            this._config[e] = t[e]
                                        }
                                        return !("driver" in t && t.driver) || this.setDriver(this._config.driver)
                                    }
                                    return "string" == typeof t ? this._config[t] : this._config
                                }, t.prototype.defineDriver = function (t, e, n) {
                                    var r = new u((function (e, n) {
                                        try {
                                            var r = t._driver,
                                                o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                            if (!t._driver) return void n(o);
                                            for (var i = K.concat("_initStorage"), f = 0, c = i.length; f < c; f++) {
                                                var s = i[f];
                                                if ((!P(W, s) || t[s]) && "function" != typeof t[s]) return void n(o)
                                            }! function () {
                                                for (var e = function (t) {
                                                        return function () {
                                                            var e = new Error("Method " + t + " is not implemented by the current driver"),
                                                                n = u.reject(e);
                                                            return a(n, arguments[arguments.length - 1]), n
                                                        }
                                                    }, n = 0, r = W.length; n < r; n++) {
                                                    var o = W[n];
                                                    t[o] || (t[o] = e(o))
                                                }
                                            }();
                                            var l = function (n) {
                                                z[r] && console.info("Redefining LocalForage driver: " + r), z[r] = t, q[r] = n, e()
                                            };
                                            "_support" in t ? t._support && "function" == typeof t._support ? t._support().then(l, n) : l(!!t._support) : l(!0)
                                        } catch (h) {
                                            n(h)
                                        }
                                    }));
                                    return f(r, e, n), r
                                }, t.prototype.driver = function () {
                                    return this._driver || null
                                }, t.prototype.getDriver = function (t, e, n) {
                                    var r = z[t] ? u.resolve(z[t]) : u.reject(new Error("Driver not found."));
                                    return f(r, e, n), r
                                }, t.prototype.getSerializer = function (t) {
                                    var e = u.resolve(R);
                                    return f(e, t), e
                                }, t.prototype.ready = function (t) {
                                    var e = this,
                                        n = e._driverSet.then((function () {
                                            return null === e._ready && (e._ready = e._initDriver()), e._ready
                                        }));
                                    return f(n, t, t), n
                                }, t.prototype.setDriver = function (t, e, n) {
                                    var r = this;
                                    F(t) || (t = [t]);
                                    var o = this._getSupportedDrivers(t);

                                    function i() {
                                        r._config.driver = r.driver()
                                    }

                                    function a(t) {
                                        return r._extend(t), i(), r._ready = r._initStorage(r._config), r._ready
                                    }
                                    var c = null !== this._driverSet ? this._driverSet.catch((function () {
                                        return u.resolve()
                                    })) : u.resolve();
                                    return this._driverSet = c.then((function () {
                                        var t = o[0];
                                        return r._dbInfo = null, r._ready = null, r.getDriver(t).then((function (t) {
                                            r._driver = t._driver, i(), r._wrapLibraryMethodsWithReady(), r._initDriver = function (t) {
                                                return function () {
                                                    var e = 0;
                                                    return function n() {
                                                        for (; e < t.length;) {
                                                            var o = t[e];
                                                            return e++, r._dbInfo = null, r._ready = null, r.getDriver(o).then(a).catch(n)
                                                        }
                                                        i();
                                                        var f = new Error("No available storage method found.");
                                                        return r._driverSet = u.reject(f), r._driverSet
                                                    }()
                                                }
                                            }(o)
                                        }))
                                    })).catch((function () {
                                        i();
                                        var t = new Error("No available storage method found.");
                                        return r._driverSet = u.reject(t), r._driverSet
                                    })), f(this._driverSet, e, n), this._driverSet
                                }, t.prototype.supports = function (t) {
                                    return !!q[t]
                                }, t.prototype._extend = function (t) {
                                    X(this, t)
                                }, t.prototype._getSupportedDrivers = function (t) {
                                    for (var e = [], n = 0, r = t.length; n < r; n++) {
                                        var o = t[n];
                                        this.supports(o) && e.push(o)
                                    }
                                    return e
                                }, t.prototype._wrapLibraryMethodsWithReady = function () {
                                    for (var t = 0, e = K.length; t < e; t++) Y(this, K[t])
                                }, t.prototype.createInstance = function (e) {
                                    return new t(e)
                                }, t
                            }());
                            e.exports = G
                        }, {
                            3: 3
                        }]
                    }, {}, [4])(4)
                }))
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        21: [function (t, e, n) {
            (function (n) {
                "use strict";
                var r = t(22);
                e.exports = {
                    generate: function () {
                        var t = r.v1();
                        return t.substr(14, 4) + t.substr(9, 4) + t.substr(0, 8) + t.substr(19, 4) + t.substr(24, t.length)
                    },
                    toBinary16: function (t) {
                        return new n(t, "hex")
                    },
                    fromBinary16: function (t) {
                        return t.toString("hex")
                    }
                }
            }).call(this, t(28).Buffer)
        }, {
            22: 22,
            28: 28
        }],
        22: [function (t, e, n) {
            var r = t(25),
                o = t(26),
                i = o;
            i.v1 = r, i.v4 = o, e.exports = i
        }, {
            25: 25,
            26: 26
        }],
        23: [function (t, e, n) {
            for (var r = [], o = 0; o < 256; ++o) r[o] = (o + 256).toString(16).substr(1);
            e.exports = function (t, e) {
                var n = e || 0,
                    o = r;
                return [o[t[n++]], o[t[n++]], o[t[n++]], o[t[n++]], "-", o[t[n++]], o[t[n++]], "-", o[t[n++]], o[t[n++]], "-", o[t[n++]], o[t[n++]], "-", o[t[n++]], o[t[n++]], o[t[n++]], o[t[n++]], o[t[n++]], o[t[n++]]].join("")
            }
        }, {}],
        24: [function (t, e, n) {
            var r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (r) {
                var o = new Uint8Array(16);
                e.exports = function () {
                    return r(o), o
                }
            } else {
                var i = new Array(16);
                e.exports = function () {
                    for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), i[e] = t >>> ((3 & e) << 3) & 255;
                    return i
                }
            }
        }, {}],
        25: [function (t, e, n) {
            var r, o, i = t(24),
                u = t(23),
                a = 0,
                f = 0;
            e.exports = function (t, e, n) {
                var c = e && n || 0,
                    s = e || [],
                    l = (t = t || {}).node || r,
                    h = void 0 !== t.clockseq ? t.clockseq : o;
                if (null == l || null == h) {
                    var d = i();
                    null == l && (l = r = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]), null == h && (h = o = 16383 & (d[6] << 8 | d[7]))
                }
                var y = void 0 !== t.msecs ? t.msecs : (new Date).getTime(),
                    p = void 0 !== t.nsecs ? t.nsecs : f + 1,
                    v = y - a + (p - f) / 1e4;
                if (v < 0 && void 0 === t.clockseq && (h = h + 1 & 16383), (v < 0 || y > a) && void 0 === t.nsecs && (p = 0), p >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                a = y, f = p, o = h;
                var g = (1e4 * (268435455 & (y += 122192928e5)) + p) % 4294967296;
                s[c++] = g >>> 24 & 255, s[c++] = g >>> 16 & 255, s[c++] = g >>> 8 & 255, s[c++] = 255 & g;
                var m = y / 4294967296 * 1e4 & 268435455;
                s[c++] = m >>> 8 & 255, s[c++] = 255 & m, s[c++] = m >>> 24 & 15 | 16, s[c++] = m >>> 16 & 255, s[c++] = h >>> 8 | 128, s[c++] = 255 & h;
                for (var b = 0; b < 6; ++b) s[c + b] = l[b];
                return e || u(s)
            }
        }, {
            23: 23,
            24: 24
        }],
        26: [function (t, e, n) {
            var r = t(24),
                o = t(23);
            e.exports = function (t, e, n) {
                var i = e && n || 0;
                "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null);
                var u = (t = t || {}).random || (t.rng || r)();
                if (u[6] = 15 & u[6] | 64, u[8] = 63 & u[8] | 128, e)
                    for (var a = 0; a < 16; ++a) e[i + a] = u[a];
                return e || o(u)
            }
        }, {
            23: 23,
            24: 24
        }],
        27: [function (t, e, n) {
            "use strict";
            n.byteLength = function (t) {
                var e = c(t),
                    n = e[0],
                    r = e[1];
                return 3 * (n + r) / 4 - r
            }, n.toByteArray = function (t) {
                var e, n, r = c(t),
                    u = r[0],
                    a = r[1],
                    f = new i(function (t, e, n) {
                        return 3 * (e + n) / 4 - n
                    }(0, u, a)),
                    s = 0,
                    l = a > 0 ? u - 4 : u;
                for (n = 0; n < l; n += 4) e = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)], f[s++] = e >> 16 & 255, f[s++] = e >> 8 & 255, f[s++] = 255 & e;
                return 2 === a && (e = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4, f[s++] = 255 & e), 1 === a && (e = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2, f[s++] = e >> 8 & 255, f[s++] = 255 & e), f
            }, n.fromByteArray = function (t) {
                for (var e, n = t.length, o = n % 3, i = [], u = 0, a = n - o; u < a; u += 16383) i.push(s(t, u, u + 16383 > a ? a : u + 16383));
                return 1 === o ? (e = t[n - 1], i.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")), i.join("")
            };
            for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, f = u.length; a < f; ++a) r[a] = u[a], o[u.charCodeAt(a)] = a;

            function c(t) {
                var e = t.length;
                if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var n = t.indexOf("=");
                return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
            }

            function s(t, e, n) {
                for (var o, i, u = [], a = e; a < n; a += 3) o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), u.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                return u.join("")
            }
            o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
        }, {}],
        28: [function (t, e, n) {
            (function (e) {
                "use strict";
                var r = t(27),
                    o = t(29);
                n.Buffer = e, n.SlowBuffer = function (t) {
                    return +t != t && (t = 0), e.alloc(+t)
                }, n.INSPECT_MAX_BYTES = 50;

                function i(t) {
                    if (t > 2147483647) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                    var n = new Uint8Array(t);
                    return n.__proto__ = e.prototype, n
                }

                function e(t, e, n) {
                    if ("number" == typeof t) {
                        if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                        return f(t)
                    }
                    return u(t, e, n)
                }

                function u(t, n, r) {
                    if ("string" == typeof t) return function (t, n) {
                        if ("string" == typeof n && "" !== n || (n = "utf8"), !e.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                        var r = 0 | l(t, n),
                            o = i(r),
                            u = o.write(t, n);
                        return u !== r && (o = o.slice(0, u)), o
                    }(t, n);
                    if (ArrayBuffer.isView(t)) return c(t);
                    if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                    if (U(t, ArrayBuffer) || t && U(t.buffer, ArrayBuffer)) return function (t, n, r) {
                        if (n < 0 || t.byteLength < n) throw new RangeError('"offset" is outside of buffer bounds');
                        if (t.byteLength < n + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                        var o;
                        return (o = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r)).__proto__ = e.prototype, o
                    }(t, n, r);
                    if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                    var o = t.valueOf && t.valueOf();
                    if (null != o && o !== t) return e.from(o, n, r);
                    var u = function (t) {
                        if (e.isBuffer(t)) {
                            var n = 0 | s(t.length),
                                r = i(n);
                            return 0 === r.length || t.copy(r, 0, 0, n), r
                        }
                        return void 0 !== t.length ? "number" != typeof t.length || L(t.length) ? i(0) : c(t) : "Buffer" === t.type && Array.isArray(t.data) ? c(t.data) : void 0
                    }(t);
                    if (u) return u;
                    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return e.from(t[Symbol.toPrimitive]("string"), n, r);
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
                }

                function a(t) {
                    if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
                    if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
                }

                function f(t) {
                    return a(t), i(t < 0 ? 0 : 0 | s(t))
                }

                function c(t) {
                    for (var e = t.length < 0 ? 0 : 0 | s(t.length), n = i(e), r = 0; r < e; r += 1) n[r] = 255 & t[r];
                    return n
                }

                function s(t) {
                    if (t >= 2147483647) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647..toString(16) + " bytes");
                    return 0 | t
                }

                function l(t, n) {
                    if (e.isBuffer(t)) return t.length;
                    if (ArrayBuffer.isView(t) || U(t, ArrayBuffer)) return t.byteLength;
                    if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                    var r = t.length,
                        o = arguments.length > 2 && !0 === arguments[2];
                    if (!o && 0 === r) return 0;
                    for (var i = !1;;) switch (n) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                            return k(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return M(t).length;
                        default:
                            if (i) return o ? -1 : k(t).length;
                            n = ("" + n).toLowerCase(), i = !0
                    }
                }

                function h(t, e, n) {
                    var r = t[e];
                    t[e] = t[n], t[n] = r
                }

                function d(t, n, r, o, i) {
                    if (0 === t.length) return -1;
                    if ("string" == typeof r ? (o = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), L(r = +r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                        if (i) return -1;
                        r = t.length - 1
                    } else if (r < 0) {
                        if (!i) return -1;
                        r = 0
                    }
                    if ("string" == typeof n && (n = e.from(n, o)), e.isBuffer(n)) return 0 === n.length ? -1 : y(t, n, r, o, i);
                    if ("number" == typeof n) return n &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, n, r) : Uint8Array.prototype.lastIndexOf.call(t, n, r) : y(t, [n], r, o, i);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function y(t, e, n, r, o) {
                    var i, u = 1,
                        a = t.length,
                        f = e.length;
                    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        u = 2, a /= 2, f /= 2, n /= 2
                    }

                    function c(t, e) {
                        return 1 === u ? t[e] : t.readUInt16BE(e * u)
                    }
                    if (o) {
                        var s = -1;
                        for (i = n; i < a; i++)
                            if (c(t, i) === c(e, -1 === s ? 0 : i - s)) {
                                if (-1 === s && (s = i), i - s + 1 === f) return s * u
                            } else -1 !== s && (i -= i - s), s = -1
                    } else
                        for (n + f > a && (n = a - f), i = n; i >= 0; i--) {
                            for (var l = !0, h = 0; h < f; h++)
                                if (c(t, i + h) !== c(e, h)) {
                                    l = !1;
                                    break
                                } if (l) return i
                        }
                    return -1
                }

                function p(t, e, n, r) {
                    n = Number(n) || 0;
                    var o = t.length - n;
                    r ? (r = Number(r)) > o && (r = o) : r = o;
                    var i = e.length;
                    r > i / 2 && (r = i / 2);
                    for (var u = 0; u < r; ++u) {
                        var a = parseInt(e.substr(2 * u, 2), 16);
                        if (L(a)) return u;
                        t[n + u] = a
                    }
                    return u
                }

                function v(t, e, n, r) {
                    return T(k(e, t.length - n), t, n, r)
                }

                function g(t, e, n, r) {
                    return T(function (t) {
                        for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                        return e
                    }(e), t, n, r)
                }

                function m(t, e, n, r) {
                    return g(t, e, n, r)
                }

                function b(t, e, n, r) {
                    return T(M(e), t, n, r)
                }

                function w(t, e, n, r) {
                    return T(function (t, e) {
                        for (var n, r, o, i = [], u = 0; u < t.length && !((e -= 2) < 0); ++u) r = (n = t.charCodeAt(u)) >> 8, o = n % 256, i.push(o), i.push(r);
                        return i
                    }(e, t.length - n), t, n, r)
                }

                function _(t, e, n) {
                    return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
                }

                function S(t, e, n) {
                    n = Math.min(t.length, n);
                    for (var r = [], o = e; o < n;) {
                        var i, u, a, f, c = t[o],
                            s = null,
                            l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                        if (o + l <= n) switch (l) {
                            case 1:
                                c < 128 && (s = c);
                                break;
                            case 2:
                                128 == (192 & (i = t[o + 1])) && (f = (31 & c) << 6 | 63 & i) > 127 && (s = f);
                                break;
                            case 3:
                                i = t[o + 1], u = t[o + 2], 128 == (192 & i) && 128 == (192 & u) && (f = (15 & c) << 12 | (63 & i) << 6 | 63 & u) > 2047 && (f < 55296 || f > 57343) && (s = f);
                                break;
                            case 4:
                                i = t[o + 1], u = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & u) && 128 == (192 & a) && (f = (15 & c) << 18 | (63 & i) << 12 | (63 & u) << 6 | 63 & a) > 65535 && f < 1114112 && (s = f)
                        }
                        null === s ? (s = 65533, l = 1) : s > 65535 && (s -= 65536, r.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), r.push(s), o += l
                    }
                    return function (t) {
                        var e = t.length;
                        if (e <= E) return String.fromCharCode.apply(String, t);
                        for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += E));
                        return n
                    }(r)
                }
                n.kMaxLength = 2147483647, e.TYPED_ARRAY_SUPPORT = function () {
                    try {
                        var t = new Uint8Array(1);
                        return t.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function () {
                                return 42
                            }
                        }, 42 === t.foo()
                    } catch (e) {
                        return !1
                    }
                }(), e.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(e.prototype, "parent", {
                    enumerable: !0,
                    get: function () {
                        if (e.isBuffer(this)) return this.buffer
                    }
                }), Object.defineProperty(e.prototype, "offset", {
                    enumerable: !0,
                    get: function () {
                        if (e.isBuffer(this)) return this.byteOffset
                    }
                }), "undefined" != typeof Symbol && null != Symbol.species && e[Symbol.species] === e && Object.defineProperty(e, Symbol.species, {
                    value: null,
                    configurable: !0,
                    enumerable: !1,
                    writable: !1
                }), e.poolSize = 8192, e.from = function (t, e, n) {
                    return u(t, e, n)
                }, e.prototype.__proto__ = Uint8Array.prototype, e.__proto__ = Uint8Array, e.alloc = function (t, e, n) {
                    return function (t, e, n) {
                        return a(t), t <= 0 ? i(t) : void 0 !== e ? "string" == typeof n ? i(t).fill(e, n) : i(t).fill(e) : i(t)
                    }(t, e, n)
                }, e.allocUnsafe = function (t) {
                    return f(t)
                }, e.allocUnsafeSlow = function (t) {
                    return f(t)
                }, e.isBuffer = function (t) {
                    return null != t && !0 === t._isBuffer && t !== e.prototype
                }, e.compare = function (t, n) {
                    if (U(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)), U(n, Uint8Array) && (n = e.from(n, n.offset, n.byteLength)), !e.isBuffer(t) || !e.isBuffer(n)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (t === n) return 0;
                    for (var r = t.length, o = n.length, i = 0, u = Math.min(r, o); i < u; ++i)
                        if (t[i] !== n[i]) {
                            r = t[i], o = n[i];
                            break
                        } return r < o ? -1 : o < r ? 1 : 0
                }, e.isEncoding = function (t) {
                    switch (String(t).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, e.concat = function (t, n) {
                    if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return e.alloc(0);
                    var r;
                    if (void 0 === n)
                        for (n = 0, r = 0; r < t.length; ++r) n += t[r].length;
                    var o = e.allocUnsafe(n),
                        i = 0;
                    for (r = 0; r < t.length; ++r) {
                        var u = t[r];
                        if (U(u, Uint8Array) && (u = e.from(u)), !e.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
                        u.copy(o, i), i += u.length
                    }
                    return o
                }, e.byteLength = l, e.prototype._isBuffer = !0, e.prototype.swap16 = function () {
                    var t = this.length;
                    if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) h(this, e, e + 1);
                    return this
                }, e.prototype.swap32 = function () {
                    var t = this.length;
                    if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) h(this, e, e + 3), h(this, e + 1, e + 2);
                    return this
                }, e.prototype.swap64 = function () {
                    var t = this.length;
                    if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8) h(this, e, e + 7), h(this, e + 1, e + 6), h(this, e + 2, e + 5), h(this, e + 3, e + 4);
                    return this
                }, e.prototype.toString = function () {
                    var t = this.length;
                    return 0 === t ? "" : 0 === arguments.length ? S(this, 0, t) : function (t, e, n) {
                        var r = !1;
                        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                        if ((n >>>= 0) <= (e >>>= 0)) return "";
                        for (t || (t = "utf8");;) switch (t) {
                            case "hex":
                                return B(this, e, n);
                            case "utf8":
                            case "utf-8":
                                return S(this, e, n);
                            case "ascii":
                                return I(this, e, n);
                            case "latin1":
                            case "binary":
                                return N(this, e, n);
                            case "base64":
                                return _(this, e, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return C(this, e, n);
                            default:
                                if (r) throw new TypeError("Unknown encoding: " + t);
                                t = (t + "").toLowerCase(), r = !0
                        }
                    }.apply(this, arguments)
                }, e.prototype.toLocaleString = e.prototype.toString, e.prototype.equals = function (t) {
                    if (!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    return this === t || 0 === e.compare(this, t)
                }, e.prototype.inspect = function () {
                    var t = "",
                        e = n.INSPECT_MAX_BYTES;
                    return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
                }, e.prototype.compare = function (t, n, r, o, i) {
                    if (U(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)), !e.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                    if (void 0 === n && (n = 0), void 0 === r && (r = t ? t.length : 0), void 0 === o && (o = 0), void 0 === i && (i = this.length), n < 0 || r > t.length || o < 0 || i > this.length) throw new RangeError("out of range index");
                    if (o >= i && n >= r) return 0;
                    if (o >= i) return -1;
                    if (n >= r) return 1;
                    if (this === t) return 0;
                    for (var u = (i >>>= 0) - (o >>>= 0), a = (r >>>= 0) - (n >>>= 0), f = Math.min(u, a), c = this.slice(o, i), s = t.slice(n, r), l = 0; l < f; ++l)
                        if (c[l] !== s[l]) {
                            u = c[l], a = s[l];
                            break
                        } return u < a ? -1 : a < u ? 1 : 0
                }, e.prototype.includes = function (t, e, n) {
                    return -1 !== this.indexOf(t, e, n)
                }, e.prototype.indexOf = function (t, e, n) {
                    return d(this, t, e, n, !0)
                }, e.prototype.lastIndexOf = function (t, e, n) {
                    return d(this, t, e, n, !1)
                }, e.prototype.write = function (t, e, n, r) {
                    if (void 0 === e) r = "utf8", n = this.length, e = 0;
                    else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                    else {
                        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        e >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                    }
                    var o = this.length - e;
                    if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    for (var i = !1;;) switch (r) {
                        case "hex":
                            return p(this, t, e, n);
                        case "utf8":
                        case "utf-8":
                            return v(this, t, e, n);
                        case "ascii":
                            return g(this, t, e, n);
                        case "latin1":
                        case "binary":
                            return m(this, t, e, n);
                        case "base64":
                            return b(this, t, e, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return w(this, t, e, n);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), i = !0
                    }
                }, e.prototype.toJSON = function () {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var E = 4096;

                function I(t, e, n) {
                    var r = "";
                    n = Math.min(t.length, n);
                    for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
                    return r
                }

                function N(t, e, n) {
                    var r = "";
                    n = Math.min(t.length, n);
                    for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
                    return r
                }

                function B(t, e, n) {
                    var r, o = t.length;
                    (!e || e < 0) && (e = 0), (!n || n < 0 || n > o) && (n = o);
                    for (var i = "", u = e; u < n; ++u) i += (r = t[u]) < 16 ? "0" + r.toString(16) : r.toString(16);
                    return i
                }

                function C(t, e, n) {
                    for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                    return o
                }

                function A(t, e, n) {
                    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                    if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
                }

                function D(t, n, r, o, i, u) {
                    if (!e.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (n > i || n < u) throw new RangeError('"value" argument is out of bounds');
                    if (r + o > t.length) throw new RangeError("Index out of range")
                }

                function j(t, e, n, r, o, i) {
                    if (n + r > t.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range")
                }

                function O(t, e, n, r, i) {
                    return e = +e, n >>>= 0, i || j(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4
                }

                function x(t, e, n, r, i) {
                    return e = +e, n >>>= 0, i || j(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8
                }
                e.prototype.slice = function (t, n) {
                    var r = this.length;
                    (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (n = void 0 === n ? r : ~~n) < 0 ? (n += r) < 0 && (n = 0) : n > r && (n = r), n < t && (n = t);
                    var o = this.subarray(t, n);
                    return o.__proto__ = e.prototype, o
                }, e.prototype.readUIntLE = function (t, e, n) {
                    t >>>= 0, e >>>= 0, n || A(t, e, this.length);
                    for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
                    return r
                }, e.prototype.readUIntBE = function (t, e, n) {
                    t >>>= 0, e >>>= 0, n || A(t, e, this.length);
                    for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);) r += this[t + --e] * o;
                    return r
                }, e.prototype.readUInt8 = function (t, e) {
                    return t >>>= 0, e || A(t, 1, this.length), this[t]
                }, e.prototype.readUInt16LE = function (t, e) {
                    return t >>>= 0, e || A(t, 2, this.length), this[t] | this[t + 1] << 8
                }, e.prototype.readUInt16BE = function (t, e) {
                    return t >>>= 0, e || A(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, e.prototype.readUInt32LE = function (t, e) {
                    return t >>>= 0, e || A(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }, e.prototype.readUInt32BE = function (t, e) {
                    return t >>>= 0, e || A(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, e.prototype.readIntLE = function (t, e, n) {
                    t >>>= 0, e >>>= 0, n || A(t, e, this.length);
                    for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
                    return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r
                }, e.prototype.readIntBE = function (t, e, n) {
                    t >>>= 0, e >>>= 0, n || A(t, e, this.length);
                    for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256);) i += this[t + --r] * o;
                    return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i
                }, e.prototype.readInt8 = function (t, e) {
                    return t >>>= 0, e || A(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                }, e.prototype.readInt16LE = function (t, e) {
                    t >>>= 0, e || A(t, 2, this.length);
                    var n = this[t] | this[t + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, e.prototype.readInt16BE = function (t, e) {
                    t >>>= 0, e || A(t, 2, this.length);
                    var n = this[t + 1] | this[t] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, e.prototype.readInt32LE = function (t, e) {
                    return t >>>= 0, e || A(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, e.prototype.readInt32BE = function (t, e) {
                    return t >>>= 0, e || A(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, e.prototype.readFloatLE = function (t, e) {
                    return t >>>= 0, e || A(t, 4, this.length), o.read(this, t, !0, 23, 4)
                }, e.prototype.readFloatBE = function (t, e) {
                    return t >>>= 0, e || A(t, 4, this.length), o.read(this, t, !1, 23, 4)
                }, e.prototype.readDoubleLE = function (t, e) {
                    return t >>>= 0, e || A(t, 8, this.length), o.read(this, t, !0, 52, 8)
                }, e.prototype.readDoubleBE = function (t, e) {
                    return t >>>= 0, e || A(t, 8, this.length), o.read(this, t, !1, 52, 8)
                }, e.prototype.writeUIntLE = function (t, e, n, r) {
                    t = +t, e >>>= 0, n >>>= 0, r || D(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var o = 1,
                        i = 0;
                    for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255;
                    return e + n
                }, e.prototype.writeUIntBE = function (t, e, n, r) {
                    t = +t, e >>>= 0, n >>>= 0, r || D(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var o = n - 1,
                        i = 1;
                    for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;
                    return e + n
                }, e.prototype.writeUInt8 = function (t, e, n) {
                    return t = +t, e >>>= 0, n || D(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
                }, e.prototype.writeUInt16LE = function (t, e, n) {
                    return t = +t, e >>>= 0, n || D(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                }, e.prototype.writeUInt16BE = function (t, e, n) {
                    return t = +t, e >>>= 0, n || D(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                }, e.prototype.writeUInt32LE = function (t, e, n) {
                    return t = +t, e >>>= 0, n || D(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
                }, e.prototype.writeUInt32BE = function (t, e, n) {
                    return t = +t, e >>>= 0, n || D(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                }, e.prototype.writeIntLE = function (t, e, n, r) {
                    if (t = +t, e >>>= 0, !r) {
                        var o = Math.pow(2, 8 * n - 1);
                        D(this, t, e, n, o - 1, -o)
                    }
                    var i = 0,
                        u = 1,
                        a = 0;
                    for (this[e] = 255 & t; ++i < n && (u *= 256);) t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / u >> 0) - a & 255;
                    return e + n
                }, e.prototype.writeIntBE = function (t, e, n, r) {
                    if (t = +t, e >>>= 0, !r) {
                        var o = Math.pow(2, 8 * n - 1);
                        D(this, t, e, n, o - 1, -o)
                    }
                    var i = n - 1,
                        u = 1,
                        a = 0;
                    for (this[e + i] = 255 & t; --i >= 0 && (u *= 256);) t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / u >> 0) - a & 255;
                    return e + n
                }, e.prototype.writeInt8 = function (t, e, n) {
                    return t = +t, e >>>= 0, n || D(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                }, e.prototype.writeInt16LE = function (t, e, n) {
                    return t = +t, e >>>= 0, n || D(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                }, e.prototype.writeInt16BE = function (t, e, n) {
                    return t = +t, e >>>= 0, n || D(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                }, e.prototype.writeInt32LE = function (t, e, n) {
                    return t = +t, e >>>= 0, n || D(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
                }, e.prototype.writeInt32BE = function (t, e, n) {
                    return t = +t, e >>>= 0, n || D(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                }, e.prototype.writeFloatLE = function (t, e, n) {
                    return O(this, t, e, !0, n)
                }, e.prototype.writeFloatBE = function (t, e, n) {
                    return O(this, t, e, !1, n)
                }, e.prototype.writeDoubleLE = function (t, e, n) {
                    return x(this, t, e, !0, n)
                }, e.prototype.writeDoubleBE = function (t, e, n) {
                    return x(this, t, e, !1, n)
                }, e.prototype.copy = function (t, n, r, o) {
                    if (!e.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                    if (r || (r = 0), o || 0 === o || (o = this.length), n >= t.length && (n = t.length), n || (n = 0), o > 0 && o < r && (o = r), o === r) return 0;
                    if (0 === t.length || 0 === this.length) return 0;
                    if (n < 0) throw new RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                    if (o < 0) throw new RangeError("sourceEnd out of bounds");
                    o > this.length && (o = this.length), t.length - n < o - r && (o = t.length - n + r);
                    var i = o - r;
                    if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(n, r, o);
                    else if (this === t && r < n && n < o)
                        for (var u = i - 1; u >= 0; --u) t[u + n] = this[u + r];
                    else Uint8Array.prototype.set.call(t, this.subarray(r, o), n);
                    return i
                }, e.prototype.fill = function (t, n, r, o) {
                    if ("string" == typeof t) {
                        if ("string" == typeof n ? (o = n, n = 0, r = this.length) : "string" == typeof r && (o = r, r = this.length), void 0 !== o && "string" != typeof o) throw new TypeError("encoding must be a string");
                        if ("string" == typeof o && !e.isEncoding(o)) throw new TypeError("Unknown encoding: " + o);
                        if (1 === t.length) {
                            var i = t.charCodeAt(0);
                            ("utf8" === o && i < 128 || "latin1" === o) && (t = i)
                        }
                    } else "number" == typeof t && (t &= 255);
                    if (n < 0 || this.length < n || this.length < r) throw new RangeError("Out of range index");
                    if (r <= n) return this;
                    var u;
                    if (n >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                        for (u = n; u < r; ++u) this[u] = t;
                    else {
                        var a = e.isBuffer(t) ? t : e.from(t, o),
                            f = a.length;
                        if (0 === f) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                        for (u = 0; u < r - n; ++u) this[u + n] = a[u % f]
                    }
                    return this
                };
                var R = /[^+\/0-9A-Za-z-_]/g;

                function k(t, e) {
                    var n;
                    e = e || 1 / 0;
                    for (var r = t.length, o = null, i = [], u = 0; u < r; ++u) {
                        if ((n = t.charCodeAt(u)) > 55295 && n < 57344) {
                            if (!o) {
                                if (n > 56319) {
                                    (e -= 3) > -1 && i.push(239, 191, 189);
                                    continue
                                }
                                if (u + 1 === r) {
                                    (e -= 3) > -1 && i.push(239, 191, 189);
                                    continue
                                }
                                o = n;
                                continue
                            }
                            if (n < 56320) {
                                (e -= 3) > -1 && i.push(239, 191, 189), o = n;
                                continue
                            }
                            n = 65536 + (o - 55296 << 10 | n - 56320)
                        } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                        if (o = null, n < 128) {
                            if ((e -= 1) < 0) break;
                            i.push(n)
                        } else if (n < 2048) {
                            if ((e -= 2) < 0) break;
                            i.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((e -= 3) < 0) break;
                            i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return i
                }

                function M(t) {
                    return r.toByteArray(function (t) {
                        if ((t = (t = t.split("=")[0]).trim().replace(R, "")).length < 2) return "";
                        for (; t.length % 4 != 0;) t += "=";
                        return t
                    }(t))
                }

                function T(t, e, n, r) {
                    for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
                    return o
                }

                function U(t, e) {
                    return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
                }

                function L(t) {
                    return t != t
                }
            }).call(this, t(28).Buffer)
        }, {
            27: 27,
            28: 28,
            29: 29
        }],
        29: [function (t, e, n) {
            n.read = function (t, e, n, r, o) {
                var i, u, a = 8 * o - r - 1,
                    f = (1 << a) - 1,
                    c = f >> 1,
                    s = -7,
                    l = n ? o - 1 : 0,
                    h = n ? -1 : 1,
                    d = t[e + l];
                for (l += h, i = d & (1 << -s) - 1, d >>= -s, s += a; s > 0; i = 256 * i + t[e + l], l += h, s -= 8);
                for (u = i & (1 << -s) - 1, i >>= -s, s += r; s > 0; u = 256 * u + t[e + l], l += h, s -= 8);
                if (0 === i) i = 1 - c;
                else {
                    if (i === f) return u ? NaN : 1 / 0 * (d ? -1 : 1);
                    u += Math.pow(2, r), i -= c
                }
                return (d ? -1 : 1) * u * Math.pow(2, i - r)
            }, n.write = function (t, e, n, r, o, i) {
                var u, a, f, c = 8 * i - o - 1,
                    s = (1 << c) - 1,
                    l = s >> 1,
                    h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    d = r ? 0 : i - 1,
                    y = r ? 1 : -1,
                    p = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, u = s) : (u = Math.floor(Math.log(e) / Math.LN2), e * (f = Math.pow(2, -u)) < 1 && (u--, f *= 2), (e += u + l >= 1 ? h / f : h * Math.pow(2, 1 - l)) * f >= 2 && (u++, f /= 2), u + l >= s ? (a = 0, u = s) : u + l >= 1 ? (a = (e * f - 1) * Math.pow(2, o), u += l) : (a = e * Math.pow(2, l - 1) * Math.pow(2, o), u = 0)); o >= 8; t[n + d] = 255 & a, d += y, a /= 256, o -= 8);
                for (u = u << o | a, c += o; c > 0; t[n + d] = 255 & u, d += y, u /= 256, c -= 8);
                t[n + d - y] |= 128 * p
            }
        }, {}]
    }, {}, [1])(1)
}));