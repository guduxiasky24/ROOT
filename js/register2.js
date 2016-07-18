$(document).ready(function() {
    var a = $skin;
    SetCookie("isCookie", "yes");
    var b = getCookie("isCookie");
    if (b == null  || b != "yes") {
        alert("\u6e29\u99a8\u63d0\u793a\uff1a\u60a8\u7684\u6d4f\u89c8\u5668\u5f53\u524d\u4e0d\u652f\u6301Cookies\u529f\u80fd\uff0c\u8bf7\u60a8\u542f\u7528\u6d4f\u89c8\u5668Cookie\u529f\u80fd\u6216\u66f4\u6362\u6d4f\u89c8\u5668\u3002");
        return
    }
    var c = function() {
        var z = $("#j-tips-wrap");
        var g = /\w+(@{1})$/i
          , n = ["qq.com", "vip.qq.com", "sina.com", "foxmail.com", "139.com", "sohu.com"]
          , K = ""
          , I = 0;
        var t = function(N) {
            var M = function(Q, R, O) {
                var P = new RegExp(R,"g");
                return Q.replace(P, O)
            }
            ;
            var N = escape(N);
            N = M(N, "\\+", "%2B");
            N = M(N, "/", "%2F");
            return N
        }
        ;
        var f = function(M) {
            var N = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;//普通邮箱
            return N.test(M)
        }
        ;
        var u = function(M) {
            var N = /^.*@(vip.)?(163|126|yeah)\.(com|net)$/;//网易邮箱
            return N.test(M)
        }
        ;
        var B = function(N) {
            var M = /^(?![A-z]+$)(?!\d+$)(?![\W_]+$)^.{8,20}$/;//英文字母
            return M.test(N)
        }
        ;
        var h = function(N) {
            var M = /^1\d{10}$/;
            return M.test(N)
        }
        ;
        var p = function(N, M) {
            $.PageDialog('<div class="mAltFail"><s></s>' + N + "</div>", {
                W: 300,
                H: 60,
                close: false,
                autoClose: true,
                submit: function() {
                    if (M) {
                        M()
                    }
                }
            })
        }
        ;
        var q = function(N, M) {
            $.PageDialog('<div class="mAltOK"><s></s>' + N + "</div>", {
                W: 300,
                H: 60,
                close: false,
                autoClose: true,
                submit: function() {
                    if (M) {
                        M()
                    }
                }
            })
        }
        ;
        var L = function() {
            try {
                if ($.browser.msie && parseInt($.browser.version) == 6) {
                    $.getScript(a + "/js/iepng.js?date=20150215", function() {
                        if (EvPNG != null  && EvPNG != undefined) {
                            EvPNG.fix(".transparent-png")
                        }
                    })
                }
            } catch (M) {}
        }
        ;
        var l = $("#txtUserName");
        var m = $("#txtPwd");
        var i = $("#txtConPwd");
        var A = $("#txtCode");
        var o = $("#imgCode");
        var y = ""
          , C = ""
          , x = ""
          , k = "";
        var v = function(M, N) {
            d(M);
            if ($(M).siblings(".orange").length > 0) {
                $(M).parent().addClass("error-text");
                $(M).siblings(".orange").html('<i class="passport-icon transparent-png"></i>' + N).show(5, function() {
                    L()
                })
            } else {
                $(M).parent().parent().addClass("error-text");
                $(M).parent().next(".orange").html('<i class="passport-icon transparent-png"></i>' + N).show(5, function() {
                    L()
                })
            }
            if ($(M).val() == "") {
                $(M).siblings("em").hide()
            }
            s = false
        }
        ;
        var j = function(M) {
            if ($(M).siblings(".orange").length > 0) {
                $(M).parent().removeClass("error-text");
                $(M).siblings(".orange").hide()
            } else {
                $(M).parent().parent().removeClass("error-text");
                $(M).parent().next(".orange").hide()
            }
        }
        ;
        var e = function(M) {
            j(M);
            $(M).parent().removeClass("enter-focus").addClass("correct-text");
            $(M).siblings("s.passport-icon").show()
        }
        ;
        var d = function(M) {
            $(M).parent().removeClass("correct-text");
            $(M).siblings("s.passport-icon").hide()
        }
        ;
        var F = null ;
        var J = "";
        var E = function() {
            this.checkUserName = function(N, M) {
                y = l.val().trim();
                if (y == "") {
                    if (N) {
                        l.focus()
                    }
                    v(l, "\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7/\u90ae\u7bb1\u5730\u5740");
                    J = "";
                    return false
                } else {
                    if (!h(y) && !f(y)) {
                        if (N) {
                            l.focus()
                        }
                        v(l, "\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7/\u90ae\u7bb1\u5730\u5740");
                        J = "";
                        return false
                    } else {
                        if (u(y)) {
                            if (N) {
                                l.focus()
                            }
                            v(l, "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u6216\u90ae\u7bb1\u5730\u5740");
                            J = "";
                            return false
                        } else {
                            if (M && (y != J)) {
                                J = y;
                                F = setTimeout(function() {
                                    $.getJSON("/user/isCheckName.html", {userName: y}, function(O) {
                                        w = true;
                                        if (O) {
                                            e(l)
                                        } else {
                                            v(l, '\u8d26\u53f7\u5df2\u6ce8\u518c\uff0c\u8bf7\u66f4\u6362\u6216<a href="login.html?account=' + escape(y) + '" class="blue">\u7acb\u5373\u767b\u5f55</a>')
                                        }
                                    })
                                }, 200)
                            }
                            return true
                        }
                    }
                }
            }
            ;
            this.checkPwd = function(M) {
                C = m.val().trim();
                if (C == "") {
                    if (M) {
                        m.focus()
                    }
                    v(m, "\u8bf7\u8bbe\u7f6e\u767b\u5f55\u5bc6\u7801");
                    return false
                } else {
                    if (!B(C)) {
                        if (M) {
                            m.focus()
                        }
                        v(m, "\u5bc6\u7801\u75318-20\u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u6216\u7b26\u53f7\u4e24\u79cd\u6216\u4ee5\u4e0a\u7ec4\u5408");
                        return false
                    } else {
                        e(m)
                    }
                }
                return true
            }
            ;
            this.checkConPwd = function(M) {
                C = m.val().trim();
                x = i.val().trim();
                if (x == "") {
                    if (M) {
                        i.focus()
                    }
                    v(i, "\u8bf7\u8f93\u5165\u786e\u8ba4\u5bc6\u7801");
                    return false
                } else {
                    if (!B(x)) {
                        if (M) {
                            i.focus()
                        }
                        v(i, "\u5bc6\u7801\u75318-20\u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u6216\u7b26\u53f7\u4e24\u79cd\u6216\u4ee5\u4e0a\u7ec4\u5408");
                        return false
                    } else {
                        if (C != x) {
                            if (M) {
                                i.focus()
                            }
                            v(i, "\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4");
                            return false
                        } else {
                            e(i)
                        }
                    }
                }
                return true
            }
            ;
            this.checkCode = function(N) {
                var M = /^[0-9A-Za-z]{4,6}$/;
                k = A.val().trim();
                if (k == "") {
                    if (N) {
                        A.focus()
                    }
                    v(A, "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");
                    return false
                } else {
                    if (!M.test(k)) {
                        if (N) {
                            A.focus().select()
                        }
                        v(A, "\u9a8c\u8bc1\u7801\u8f93\u5165\u6709\u8bef");
                        return false
                    } else {
                        e(A)
                    }
                }
                return true
            }
        }
        ;
        var H = new E();
        l.focus(function() {
            $(this).parent().addClass("enter-focus");
            $(this).siblings("em").html("\u63a8\u8350\u4f7f\u7528\u624b\u673a\u53f7\u6ce8\u518c")
        }).blur(function() {
            $(this).parent().removeClass("enter-focus");
            if ($(this).val() == "") {
                $(this).siblings("em").html("\u624b\u673a\u53f7/\u90ae\u7bb1\u5730\u5740").show();
                $(this).css("color", "#bbbbbb");
                j($(this));
                d($(this));
                return
            }
            H.checkUserName(false, true)
        }).click(function(M) {
            M = M || window.event;
            M.stopPropagation();
            if (z.children().length > 0 && l.val().indexOf("@") !== -1) {
                z.show()
            }
        }).keydown(function() {
            $(this).css("color", "#333333");
            $(this).siblings("em").hide();
            j($(this));
            d($(this))
        }).keyup(function() {
            var M = $(this).val().trim();
            if (M != "") {
                if (M != J) {
                    w = false;
                    r = -1
                }
            }
        });
        if (l.val() == "") {
            l.siblings("em").bind("click", function() {
                l.focus()
            }).show()
        }
        l.keyup(function(T) {
            T = T || window.event;
            T.stopPropagation();
            var N = this.value
              , R = 0
              , Q = 0
              , S = n.length
              , M = T.keyCode
              , O = "";
            if (g.test(N)) {
                for (; R < S; R++) {
                    K += "<li class='j-tips'>" + (N + n[R]) + "</li>"
                }
                z.show().empty().html(K);
                K = ""
            } else {
                if (N.indexOf("@") !== -1) {
                    var U = N.indexOf("@")
                      , P = N.slice(0, U + 1)
                      , W = N.slice(U + 1);
                    for (; Q < S; Q++) {
                        if (n[Q].indexOf(W) !== -1) {
                            O += "<li class='j-tips'>" + (P + n[Q]) + "</li>"
                        }
                    }
                    if (O !== "") {
                        z.show().empty().html(O)
                    } else {
                        z.hide();
                        I = 0
                    }
                } else {
                    I = 0;
                    z.hide()
                }
            }
            if (z.css("display") === "block") {
                var V = z.find("li");
                switch (M) {
                case 13:
                    if (I > 0) {
                        l.val(V.eq(I - 1).text().trim());
                        z.hide();
                        H.checkUserName(false, true);
                        I = 0
                    }
                    break;
                case 40:
                    I = I + 1 > V.length ? 1 : I + 1;
                    V.removeClass("selected").eq(I - 1).addClass("selected");
                    break;
                case 38:
                    I = I - 1 < 1 ? V.length : I - 1;
                    V.removeClass("selected").eq(I - 1).addClass("selected");
                    break;
                default:
                    break
                }
            }
        });
        z.click(function(N) {
            N = N || window.event;
            N.stopPropagation();
            var M = N.target || N.srcElement;
            if (M.tagName.toLowerCase() === "li") {
                l.val($(M).text().trim());
                H.checkUserName(false, true)
            }
            $(this).hide()
        });
        $(window).click(function(N) {
            if (z.css("display") !== "block") {
                return
            }
            N = N || window.event;
            var M = N.target || N.srcElement
              , O = M.id.toLowerCase();
            if (O !== "j-tips-wrap" || O !== "txtUserName") {
                z.hide()
            }
        });
        m.focus(function() {
            $(this).parent().addClass("enter-focus");
            $(this).siblings("em").html("8-20\u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u6216\u7b26\u53f7\u4e24\u79cd\u6216\u4ee5\u4e0a\u7ec4\u5408");
            z.hide()
        }).blur(function() {
            $(this).parent().removeClass("enter-focus");
            if ($(this).val() == "") {
                $(this).siblings("em").html("\u8bbe\u7f6e\u767b\u5f55\u5bc6\u7801").show();
                $(this).css("color", "#bbbbbb");
                j($(this));
                d($(this));
                return
            }
            H.checkPwd(false);
            $("#pwdStrength").hide()
        }).keydown(function() {
            $(this).css("color", "#333333");
            $(this).siblings("em").hide();
            j($(this));
            d($(this))
        }).bind("keyup", function() {
            D($(this).val())
        });
        if (m.val() == "") {
            m.siblings("em").bind("click", function() {
                m.focus()
            }).show()
        }
        i.focus(function() {
            $(this).parent().addClass("enter-focus");
            z.hide()
        }).blur(function() {
            $(this).parent().removeClass("enter-focus");
            if ($(this).val() == "") {
                $(this).siblings("em").show();
                $(this).css("color", "#bbbbbb");
                j($(this));
                d($(this));
                return
            }
            H.checkConPwd(false)
        }).keydown(function() {
            $(this).css("color", "#333333");
            $(this).siblings("em").hide();
            j($(this));
            d($(this))
        });
        if (i.val() == "") {
            i.siblings("em").bind("click", function() {
                i.focus()
            }).show()
        }
        A.focus(function() {
            $(this).parent().parent().addClass("enter-focus");
            z.hide()
        }).blur(function() {
            $(this).parent().parent().removeClass("enter-focus");
            if ($(this).val() == "") {
                $(this).siblings("em").show();
                $(this).css("color", "#bbbbbb");
                j($(this));
                d($(this));
                return
            }
            H.checkCode(false)
        }).keydown(function() {
            $(this).css("color", "#333333");
            $(this).siblings("em").hide();
            j($(this));
            d($(this))
        }).siblings("em").bind("click", function() {
            A.focus()
        }).show();
        o.click(function() {
            $(this).attr("src", $www + "/getbackpwd/getRandomCode.html?rnd=" + new Date().getTime());
            return false
        });
        $("#btnChangeCode").click(function() {
            o.attr("src", $www + "/getbackpwd/getRandomCode.html?rnd=" + new Date().getTime());
            return false
        });
        var G = function() {
            s = false;
            $("#btnAgreeBtn").removeClass("letter-noSpac").html("\u540c\u610f\u534f\u8bae\u5e76\u6ce8\u518c");
            o.attr("src", $www + "/getbackpwd/getRandomCode.html?rnd=" + new Date().getTime());
            d(A);
            A.val("").focus().siblings("em").hide()
        }
        ;
        var D = function(N) {
            var O = $("#pwdStrength");
            var Q = ["", '<p class="orange" ><strong>\u5b89\u5168\u5f3a\u5ea6\uff1a</strong><cite><dfn style="width:33.33%;"></dfn></cite>\u5f31</p>', '<p class="yellow" ><strong>\u5b89\u5168\u5f3a\u5ea6\uff1a</strong><cite><dfn style="width:66.66%;"></dfn></cite>\u4e2d</p>', '<p class="green" ><strong>\u5b89\u5168\u5f3a\u5ea6\uff1a</strong><cite><dfn style="width:100%;"></dfn></cite>\u5f3a</p>'];
            var M = function(R) {
                O.html(Q[R]).show()
            }
            ;
            var P = function(R) {
                if (R.length >= 8) {
                    if (/[a-zA-Z]+/.test(R) && /[0-9]+/.test(R) && /[^A-Za-z0-9]+/.test(R)) {
                        M(3)
                    } else {
                        if (/[a-zA-Z]+/.test(R) && /[0-9]+/.test(R)) {
                            M(2)
                        } else {
                            if (/[a-zA-Z]+/.test(R) && /[^A-Za-z0-9]+/.test(R)) {
                                M(2)
                            } else {
                                if (/[0-9]+/.test(R) && /[^A-Za-z0-9]+/.test(R)) {
                                    M(2)
                                } else {
                                    M(1)
                                }
                            }
                        }
                    }
                } else {
                    M(0)
                }
            }
            ;
            P(N)
        }
        ;
        var s = false;
        //var GetJPData = function(d, c, a, b) {
         //   $.getJSON(d + "/JPData?action=" + c + (a != "" ? "&" : "") + a + "&fun=?", b)
        //}
        $("#btnAgreeBtn").bind("click", function() {
            if (s) {
                return
            }
            s = true;
            if (F != null ) {
                clearTimeout(F)
            }
            if (!H.checkUserName(true, false)) {
                return
            }
            var M = $(this);
            var N = function(P) {
                if (P == 0) {
                    e(l);
                    if (!H.checkPwd(true) || !H.checkConPwd(true) || !H.checkCode(true)) {
                        return
                    }
                    M.addClass("letter-noSpac").html("\u6b63\u5728\u63d0\u4ea4\uff0c\u8bf7\u7a0d\u540e...");
                    var O = { userName:  y ,userPwd: t(C) , vCode:  k};
                    $.getJSON("/register/verifyregister.html", O, function(Q) {
                        if (Q.state == 0) {
                            location.replace("/register/registercheck.html?str=" + escape(Q.str) + "&forward=" + t($("#hidRegisterForward").val()))
                        } else {
                        //    if (Q.state == 1 && Q.num == -101) {//很抱歉，暂不支持此类邮箱，建议您使用QQ邮箱或手机号
                        //        p("\u5f88\u62b1\u6b49\uff0c\u6682\u4e0d\u652f\u6301\u6b64\u7c7b\u90ae\u7bb1\uff0c\u5efa\u8bae\u60a8\u4f7f\u7528QQ\u90ae\u7bb1\u6216\u624b\u673a\u53f7")
                        //   } else {
                                if (Q.state == 1 && Q.num == 2) {//频繁操作
                                    p("\u64cd\u4f5c\u592a\u9891\u7e41\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01", function() {
                                        location.reload()
                                    })
                                } else {
                                    if (Q.state == -6) {//验证码错误，请重新输入
                                        v(A, "\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165");
                                        G()
                                    } else {//注册失败，请重试！
                                        p("\u6ce8\u518c\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01", function() {
                                            location.reload()
                                        })
                                    }
                                }
                       //     }
                        }
                    })
                } else {
                    v(l, '\u8d26\u53f7\u5df2\u6ce8\u518c\uff0c\u8bf7\u66f4\u6362\u6216<a href="login.html?account=' + escape(y) + '" class="blue">\u7acb\u5373\u767b\u5f55</a>');
                    l.focus()
                }
            }
            ;
            var w = false;
            var r = -1;
            if (w) {
                N(r)
            } else {
            	$.getJSON("/user/isCheckName.html", {userName: y}, function(O) {
                    w = true;
                    N(O==true?0:-1)
                })
            }
        });
        $("div.register-form-con").keydown(function(N) {
            var M = (window.event) ? event.keyCode : N.keyCode;
            if (M == 32) {
                return false
            } else {
                if (M == 13) {
                    $("#btnAgreeBtn").trigger("click")
                }
            }
            return true
        })
    }
    ;
    $.getScript(a + "/js/ajaxfun.js?date=20130123", c)
});
