var _Ptn = /^\d+$/;
var PagePOPLoginOK = null ;
var _IsLoadLoginJS = false;
var _UserBalance = 0;
var _IsLimitBuy = false;
var _LimitBuyNum = 0;
var _BuyedNum = 0;
var _GotoPayPage = false;
var _IsLogined = true;
var _IsLoadPlJs = false;
$.fn.GoodsItemFun = function() {
    var h = $(this);
    var f = h.attr("codeID");
    var g = h.attr("goodsID");
    var s = h.attr("singlePrice");
    h.hover(function() {
        var a = $(this);
        var c = parseInt(a.attr("limitBuy")) > 0;
        if (c) {
            a.addClass("products-hover")
        } else {
            if (parseInt(a.attr("idx")) % 4 == 0) {
                a.removeClass("soon-list4").addClass("soon-list-hover2")
            }
            a.addClass("soon-list-hover")
        }
        var b = a.find("div.f-add-attention");
        if (b.html() == "") {
            $.get("/products/checkCollectGoods.action", {
                id: g
            }, function(d) {
                var k = function() {
                    if (a.hasClass("soon-list-hover")) {
                        b.show()
                    }
                    b.html('<span>\u5173\u6ce8</span><a href="javascript:;" class="ng-box-bg transparent-png"></a>');
                    b.hover(function() {
                        $(this).addClass("attention-hover")
                    }, function() {
                        $(this).removeClass("attention-hover")
                    }).find("a").click(function() {
                        if (b.attr("isClt") == "1") {
                            return
                        }
                        var i = function() {
                            b.attr("isClt", "1");
                            var j = function(n) {
                                if (n == 0) {
                                    $("#divRTColect").attr("isChanged", "1");
                                    b.addClass("attention-ygz").html('<span>\u5df2\u5173\u6ce8</span><a href="javascript:;" class="ng-box-bg transparent-png"></a>');
                                    l()
                                } else {
                                    if (n == 1) {
                                        if (n == -1) {
                                            location.reload()
                                        } else {
                                            if (n == -2) {
                                                b.addClass("attention-ygz").html('<span>\u5df2\u5173\u6ce8</span><a href="javascript:;" class="ng-box-bg transparent-png"></a>');
                                                l()
                                            }
                                        }
                                    } else {
                                        location.reload()
                                    }
                                }
                                b.attr("isClt", "0")
                            }
                            ;
                            $.get("/products/addCollectGoods.action", {
                                id: g
                            }, function(m) {
                                j(m)
                            })
                        }
                        ;
                        if (!_IsLogined) {
                            loginFun(i)
                        } else {
                            i()
                        }
                        return false
                    })
                }
                ;
                var l = function() {
                    b.find("a").unbind("click").click(function() {
                        if (b.attr("isClt") == "1") {
                            return
                        }
                        b.attr("isClt", "1").removeClass("attention-ygz").html('<span>\u5df2\u53d6\u6d88</span><a href="javascript:;" class="ng-box-bg transparent-png"></a>');
                        var i = function(j) {
                            if (j.code == 0) {
                                $("#divRTColect").attr("isChanged", "1");
                                setTimeout(k, 2000)
                            }
                            b.attr("isClt", "0")
                        }
                        ;
                        $.get("/products/delCollectGoods.action", {
                            id: g
                        }, function(j) {
                            i(j)
                        });
                        return false
                    })
                }
                ;
                if (d == 0) {
                    b.addClass("attention-ygz").hover(function() {
                        $(this).addClass("attention-hover")
                    }, function() {
                        $(this).removeClass("attention-hover")
                    }).html('<span>\u5df2\u5173\u6ce8</span><a href="javascript:;" class="ng-box-bg transparent-png"></a>');
                    if (a.hasClass("soon-list-hover")) {
                        b.show()
                    }
                    l()
                } else {
                    if (d == 10) {
                        _IsLogined = false;
                        k()
                    } else {
                        k()
                    }
                }
            })
        } else {
            b.show()
        }
    }, function() {
        var a = parseInt($(this).attr("limitBuy")) > 0;
        if (a) {
            $(this).removeClass("products-hover")
        } else {
            if (parseInt($(this).attr("idx")) % 4 == 0) {
                $(this).addClass("soon-list4").removeClass("soon-list-hover2")
            }
            $(this).removeClass("soon-list-hover").children("div.u_buyCount").hide()
        }
        $(this).find("div.f-add-attention").hide()
    });
    var e = h.find("img[name='goodsImg']");
    h.find("li[name='buyBox']").GoodsBuyFun(e, g,s)
}
;
var stopBubble = function(b) {
    if (b && b.stopPropagation) {
        b.stopPropagation()
    } else {
        window.event.cancelBubble = true
    }
}
;
var addEvent = function(j, g, f, h) {
    var i = function() {
        f.apply(h, arguments)
    }
    ;
    window.addEventListener ? j.addEventListener(g, i, false) : j.attachEvent("on" + g, i)
}
  , removeEvent = function(f, e, d) {
    window.removeEventListener ? f.removeEventListener(e, d, false) : f.attachEvent("on" + e, d)
}
;
var getDefTip = function() {
    return _IsLimitBuy ? ("\u9650\u8d2d" + _LimitBuyNum + "\u4eba\u6b21") + (_BuyedNum > 0 ? "\uff0c\u60a8\u5df2\u53c2\u4e0e" + _BuyedNum + "\u4eba\u6b21" : "") : "\u8bf7\u9009\u62e9\u53c2\u4e0e\u4eba\u6b21"
}
;
var showPaypwdDiglog = function(e) {
    var d = '<div class="pop-pay-pwd"><dl><dt class="gray3">\u8bf7\u8f93\u51656\u4f4d\u652f\u4ed8\u5bc6\u7801</dt><dd><input type="password" maxlength="6" /></dd><dd class="red">&nbsp;</dd><dd><a href="javascript:;" class="z-btn-determine">\u786e\u8ba4\u652f\u4ed8</a></dd><dd class="gray6"><a href="/user/userAuth.html" target="_blank">\u5fd8\u8bb0\u652f\u4ed8\u5bc6\u7801\uff1f</a></dd></dl></div>';
    var f = function() {
        var h = $("#pageDialog");
        var c = h.find("input:password");
        c.keyup(function(g) {
            var m = window.event ? event.keyCode : g.keyCode;
            if (m == 8) {
                return false
            }
            var l = $(this).val();
            if (l != "") {
                var n = /^\d+/.exec(l);
                $(this).val(n == null  ? "" : n);
                a("&nbsp;")
            }
        }).focus().keydown(function(g) {
            var j = window.event ? event.keyCode : g.keyCode;
            if (j == 13) {
                b()
            }
        });
        var a = function(g) {
            h.find("dd.red").html(g)
        }
        ;
        var b = function() {
            var g = c.val();
            if (g == "") {
                c.focus();
                a("\u8bf7\u8f93\u5165\u60a8\u7684\u652f\u4ed8\u5bc6\u7801")
            } else {
                if (/^\d{6}$/.test(g)) {
                    GetJPData("https://passport.1yyg.com", "checkUPaypwd", "paypwd=" + g, function(j) {
                        if (j.state == 0) {
                            $.PageDialog('<div class="g-popup"><div class="g-buy-frame"><div id="buyBox" class="m-popup-buy"></div></div></div>', {
                                W: 435,
                                H: 240,
                                BShow: false,
                                ready: function() {
                                    e(j.str)
                                }
                            })
                        } else {
                            if (j.state == 1) {
                                if (j.num == -5) {
                                    a("\u652f\u4ed8\u5bc6\u7801\u8f93\u5165\u9519\u8bef\uff0c\u60a8\u8fd8\u53ef\u8f93\u5165" + j.str + "\u6b21")
                                } else {
                                    if (j.num == -4) {
                                        a("\u9519\u8bef\u6b21\u6570\u8fc7\u591a\uff0c\u652f\u4ed8\u5bc6\u7801\u5df2\u88ab\u51bb\u7ed3")
                                    }
                                }
                                c.focus()
                            } else {
                                a("\u652f\u4ed8\u5bc6\u7801\u9a8c\u8bc1\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")
                            }
                        }
                        c.val("").focus()
                    })
                } else {
                    a("\u8bf7\u8f93\u5165\u5b8c\u6574\u652f\u4ed8\u5bc6\u7801")
                }
            }
        }
        ;
        h.find("a.z-btn-determine").click(function() {
            b();
            return false
        })
    }
    ;
    $.PageDialog(d, {
        W: 350,
        H: 210,
        close: true,
        autoClose: false,
        ready: f
    })
}
;
$.fn.GoodsCountFun = function(b,s) {
	var sp = parseInt(s);
    var n = $(this).children("input");
    var c = parseInt(n.attr("surplus"));
    var o = n.prev();
    var l = n.next();
    var t = $("#btnConfirmBuy");
    var r = $("#pageDialogMain");
    var e = $("#pageDialogClose");
    var k = n.parent().next();
    var s = function(x) {
        if (x == "") {
            k.attr("class", "u-popup-Tip grayb").show().html(getDefTip())
        } else {
            k.attr("class", "u-popup-Tip orange").show().html(x)
        }
    }
    ;
    var u = "<s></s>\u5df2\u8d85\u8fc7100\u4eba\u6b21\uff0c\u8c28\u614e\u53c2\u4e0e\u54e6"
      , h = "<s></s>\u6700\u5c11\u9700\u53c2\u4e0e1\u4eba\u6b21";
    var m = function(x) {
        return _BuyedNum == 0 ? "<s></s>\u6700\u591a\u53ef\u53c2\u4e0e" + x + "\u4eba\u6b21" : "<s></s>\u60a8\u5df2\u53c2\u4e0e" + _BuyedNum + "\u4eba\u6b21\uff0c\u6700\u591a\u53ef\u53c2\u4e0e" + x + "\u4eba\u6b21"
    }
    ;
    var w = k.next("div.u-popup-paytip");
    var f = function(y, x) {
        _GotoPayPage = true;
        w.show().find("span.orange").html(y + ".00");
        t.html("\u4f7f\u7528\u5176\u5b83\u65b9\u5f0f\u652f\u4ed8");
        r.css("height", x + "px")
    }
    ;
    var d = 1;
    var q = function(x) {
        d = x;
        n.val(x);
        if (_UserBalance > 0) {
            if (x > _UserBalance) {
                f(x, 300)
            } else {
                _GotoPayPage = false;
                w.hide();
                r.css("height", "240px");
                t.html('\u786e\u8ba4\u652f\u4ed8<span class="mlr5">' + x + ".00</span>\u5143")
            }
        } else {
            f(x, 300)
        }
        i()
    }
    ;
    var i = function() {
        if (d == 1) {
            o.addClass("num_ban");
            l.removeClass("num_ban")
        } else {
            if (d == c) {
                o.removeClass("num_ban");
                l.addClass("num_ban")
            } else {
                o.removeClass("num_ban");
                if (_IsLimitBuy && d == (_LimitBuyNum - _BuyedNum)) {
                    l.addClass("num_ban")
                } else {
                    l.removeClass("num_ban")
                }
            }
        }
    }
    ;
    var scrollFunc;
    n.keyup(function(y) {
        var x = n.val();
        var num;
        if(sp > c || x > c){
        	num = c;
        }else{
        	num = sp;
        }
        if (x == "") {
            s(h);
            q(num)
        } else {
            if (!_Ptn.test(x)) {
                s("");
                q(d)
            } else {
                if (x == 0) {
                    s(h);
                    q(num)
                } else {
                    if (x <= c) {
                        x = Math.ceil(x/sp)*sp;
                    	if(x > c){
                    		x = c;
                    	}
                        if (_IsLimitBuy) {
                            if (x > _LimitBuyNum - _BuyedNum) {
                                x = _LimitBuyNum - _BuyedNum;
                                s(m(x))
                            } else {
                                if (x > 100 && sp != 100) {
                                    s(u)
                                } else {
                                    s("")
                                }
                            }
                        } else {
                            if (x > 100 && sp != 100) {
                                s(u)
                            } else {
                                s("")
                            }
                        }
                        q(x)
                    } else {
                        x = c;
                        if (_IsLimitBuy) {
                            if (x > _LimitBuyNum - _BuyedNum) {
                                x = _LimitBuyNum - _BuyedNum;
                                s(m(x))
                            } else {
                                if (x > 100 && sp != 100) {
                                    s(u)
                                } else {
                                    s("<s></s>\u6700\u591a\u53ef\u53c2\u4e0e" + x + "\u4eba\u6b21")
                                }
                            }
                        } else {
                            s("<s></s>\u6700\u591a\u53ef\u53c2\u4e0e" + x + "\u4eba\u6b21")
                        }
                        q(x)
                    }
                }
            }
        }
    }).keydown(function(x) {
        if (13 == ((window.event) ? event.keyCode : x.keyCode)) {
            j()
        }
    }).val(sp).select().focus().mouseover(function() {
        $(this).attr("mouseIn", "1").focus().select();
        scrollFunc = function(z) {
            z = z || window.event;
            if (z && z.preventDefault) {
                z.preventDefault()
            } else {
                window.event.returnValue = false
            }
            stopBubble(z);
            var A = 0;
            if (z.wheelDelta) {
                A = z.wheelDelta > 0 ? 1 : -1
            } else {
                if (z.detail) {
                    A = z.detail < 0 ? 1 : -1
                }
            }
            if (A && n.attr("mouseIn") == "1") {
                var y = parseInt(n.val());
                if (A > 0) {
                    if (y > 0) {
                        if (y >= c) {
                            y = c;
                            s("<s></s>\u6700\u591a\u53ef\u53c2\u4e0e" + y + "\u4eba\u6b21")
                        } else {
                            s("");
                            y = Math.ceil(y/sp)*sp+sp;
                            if (_IsLimitBuy) {
                                if (y > _LimitBuyNum - _BuyedNum) {
                                    y = _LimitBuyNum - _BuyedNum;
                                    s(m(y))
                                } else {
                                    if (y > 100&&sp!=100) {
                                        s(u)
                                    } else {
                                        s("")
                                    }
                                }
                            } else {
                                if (y > 100&&sp!=100) {
                                    s(u)
                                } else {
                                    s("")
                                }
                            }
                        }
                    } else {
                    	if(sp > c){
                        	y = c;
                        }else{
                        	y = sp;
                        }
                    }
                } else {
                    if (y > 1) {
                        y = Math.ceil(y/sp)*sp-parseInt(sp);
                    	if(y <= 0){
                    		y = sp
                    	}
                    	if(sp > c){
                    		y = c;
                    	}
                        if (y > 100&&sp!=100) {
                            s(u)
                        } else {
                            s("")
                        }
                    } else {
                    	if(sp > c){
                        	y = c;
                        }else{
                        	y = sp;
                        }
                        s(h)
                    }
                }
                n.val(y)
            }
        }
        ;
        var x = $(this).get(0);
        addEvent(x, "mousewheel", scrollFunc, x);
        addEvent(x, "DOMMouseScroll", scrollFunc, x)
    }).blur(function() {
        $(this).attr("mouseIn", "0");
        var y = n.val();
        y = Math.ceil(y/sp)*sp;
        if (y > c || sp > c) {
            y = c
        }
        q(y);
        var x = $(this).get(0);
        removeEvent(x, "mousewheel", scrollFunc);
        removeEvent(x, "DOMMouseScroll", scrollFunc)
    });
    o.click(function() {
        var x = n.val();
        if (_Ptn.test(x)) {
            var y = parseInt(x);
            if (y > 1) {
                s("");
                y = Math.ceil(y/sp)*sp-parseInt(sp);
                if(y <= 0){
                	y = sp;
                }
                if(sp > c){
                	y = c;
                }
                if (y > 100) {
                    s(u)
                } else {
                    s("")
                }
                q(y)
            } else {}
        }
        return false
    });
    l.click(function() {
        var x = n.val();
        if (_Ptn.test(x)) {
            var y = parseInt(x);
            if (y < c) {
                s("");
                y = Math.ceil(y/sp)*sp+parseInt(sp);
                if(sp > c || y > c){
                	y = c;
                }
                if (_IsLimitBuy) {
                    if (y > _LimitBuyNum - _BuyedNum) {
                        y = _LimitBuyNum - _BuyedNum;
                        s(m(y))
                    } else {
                        if (y > 100) {
                            s(u)
                        } else {
                            s("")
                        }
                    }
                } else {
                    if (y > 100) {
                        s(u)
                    } else {
                        s("")
                    }
                }
                q(y)
            } else {
                s("<s></s>\u6700\u591a\u53ef\u53c2\u4e0e" + c + "\u4eba\u6b21")
            }
        }
        return false
    });
    $("body").keydown(function(x) {
        if ($("#divSuccMain").length > 0 && 13 == ((window.event) ? event.keyCode : x.keyCode)) {
            $.PageDialog.close()
        }
    });
    var g = function() {
        var x = '<div class="content"><div id="divSuccMain" class="g-popup"><div class="g-pay-tip"><s class="f-pay-succeed"></s><p class="f-pay-tit gray6">\u652f\u4ed8\u6210\u529f\uff01</p><p class="gray9">\u8bf7\u8fdb\u5165\uff02<a href="/user/UserBuyList.html" target="_blank" class="gray6">\u6211\u7684' + $shortName + "\u8bb0\u5f55</a>\uff02\u67e5\u770b" + $shortName + '\u7801</p><p class="f-pay-btn"><a id="btnClose" href="javascript:;" class="orange_btn">\u7ee7\u7eed' + $shortName + "</a></p></div></div></div>";
        r.html(x);
        $("#btnClose").unbind("click").click(function(y) {
            if (y && y.stopPropagation) {
                y.stopPropagation()
            } else {
                window.event.cancelBubble = true
            }
            $.PageDialog.close()
        })
    }
    ;
    var p = function() {
        var x = '<div class="content"><div class="g-popup"><div class="g-pay-tip"><s class="f-pay-fail"></s><p class="f-pay-tit gray6">\u53c2\u4e0e\u5931\u8d25\uff01</p><p class="gray9">\u88ab\u62a2\u5149\u4e86\uff0c\u60a8\u4e0b\u624b\u592a\u6162\u4e86\uff01</p><p class="f-pay-btn"><a id="btnClose" href="javascript:;" class="orange_btn">\u786e \u8ba4</a></p></div></div></div>';
        r.html(x);
        $("#btnClose").unbind("click").click(function() {
            $.PageDialog.close();
            location.reload()
        })
    }
    ;
    var v = function() {
        var x = '<div class="content"><div class="g-popup"><div class="g-pay-tip"><s class="f-pay-fail"></s><p class="f-pay-tit gray6">\u53c2\u4e0e\u5931\u8d25\uff01</p><p class="gray9">\u5f88\u62b1\u6b49\uff0c\u8d2d\u4e70\u5931\u8d25\u4e86\uff01</p><p class="f-pay-btn"><a id="btnClose" href="javascript:;" class="orange_btn">\u786e \u8ba4</a></p></div></div></div>';
        r.html(x);
        $("#btnClose").unbind("click").click(function() {
            $.PageDialog.close();
            location.reload()
        })
    }
    ;
    var a = function() {
        var x = '<div class="content"><div class="g-popup"><div class="g-pay-tip"><s class="f-pay-fail"></s><p class="f-pay-tit gray6">\u63d0\u4ea4\u5931\u8d25\uff01</p><p class="gray9">\u63d0\u4ea4\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01</p><p class="f-pay-btn"><a id="btnClose" href="javascript:;" class="orange_btn">\u786e \u8ba4</a></p></div></div></div>';
        r.html(x);
        $("#btnClose").unbind("click").click(function() {
            $.PageDialog.close()
        })
    }
    ;
    var j = function() {
        if (parseInt(d) > 0) {
            $.ajax({
                url: "/list/isStatus.action",
                data: "id=" + b,
                success: function(x) {
                    if (x == "false") {
                        p()
                    } else {
                        if (_GotoPayPage) {
                            var count = parseInt(d);
                            var codeid = b;
                            var json = getCookie("products");
                            if (json == null  || json == "") {
                                var val = "[{'pId':" + codeid + ",'num':" + d + "}]";
                                SetCookieByExpires("products", val, 1)
                            } else {
                                var flag = false;
                                json = eval("(" + json + ")");
                                $.each(json, function(n, value) {
                                    if (codeid == value.pId) {
                                        value.num = (parseInt(value.num) + parseInt(d));
                                        if ((parseInt(value.num) + parseInt(d)) > count) {
                                            value.num = count
                                        }
                                        flag = true
                                    }
                                });
                                if (!flag) {
                                    json.push({
                                        pId: +codeid,
                                        num: d
                                    })
                                }
                                json = JSON.stringify(json);
                                SetCookieByExpires("products", json, 1)
                            }
                            location.href = "/mycart/payment.html"
                        } else {
                            if (_IsBuySubmiting) {
                                return
                            }
                            _IsBuySubmiting = true;
                            r.css({
                                width: "435px",
                                height: "225px"
                            });
                            $("#buyBox").attr("class", "g-submit").html('<p class="f-submit-tit gray6">\u6b63\u5728\u63d0\u4ea4\uff0c\u8bf7\u7a0d\u5019...</p><div class="u-progress u-progress-c3"><span class="pgbar" style="width:100%"><span class="pging"></span></span></div>');
                            e.hide();
                            var B = function() {
                                $.ajax({
                                    url: "/mycart/getShopResult.action",
                                    data: "id=" + b + "&moneyCount=" + d,
                                    success: function(P) {
                                        if (P == "success") {
                                            _IsCartChanged = true;
                                            g();
                                            var I = $("#ulGoodsList").find('div[goodsid="' + b + '"]');
                                            var L = I.find("li.g-progress");
                                            var F = L.find("span.orange").children("em");
                                            var J = parseInt(F.html()) + parseInt(d);
                                            F.html(J);
                                            F = L.find("span.gray6").children("em");
                                            var M = parseInt(F.html());
                                            F = L.find("span.blue").children("em");
                                            var K = parseInt(F.html()) - parseInt(d);
                                            F.html(K);
                                            var O = parseFloat(J) / M;
                                            var N = $(window).width() < 1190 ? 217 : 266;
                                            var H = parseInt(O * N);
                                            F = L.find("dl.m-progress").children("dt");
                                            F.attr("title", "\u5df2\u5b8c\u6210" + formatFloat(O * 100) + "%").html('<b style="width:' + (parseInt(H) == 0 ? 1 : H) + 'px;"></b>');
                                            F = I.children("div.u_buyCount");
                                            if (F.length > 0) {
                                                F.find("em").html(parseInt(F.find("em").html()) + parseInt(d))
                                            } else {
                                                var E = 1;
                                                if (parseInt(I.attr("idx")) % 4 == 0) {
                                                    E = 0
                                                }
                                                var D = I.width() - E;
                                                F.width(D + "px").html("<p></p><h3>\u60a8\u5df2\u53c2\u4e0e<em>" + d + "</em>\u4eba\u6b21</h3>")
                                            }
                                        } else {
                                            if (P == "over") {
                                                p()
                                            } else {
                                                if (P == "overLimit") {
                                                    showOverLimitFun()
                                                } else {
                                                    if (P == "moneyError") {
                                                        showFailFun("\u4f59\u989d\u4e0d\u8db3")
                                                    } else {
                                                        v()
                                                    }
                                                }
                                            }
                                        }
                                        _IsBuySubmiting = false
                                    },
                                    error: function() {
                                        setTimeout(B, 500)
                                    }
                                })
                            }
                            ;
                            setTimeout(B, 3000)
                        }
                    }
                },
                error: function() {
                    a()
                }
            })
        } else {
            n.focus().select()
        }
    }
    ;
    t.click(function() {
        j();
        return false
    }).hover(function() {
        if (!_GotoPayPage) {}
    }, function() {})
}
;
var showFailFun = function(b) {
    $.PageDialog('<div class="mAltFail"><s></s>' + b + "</div>", {
        W: 150,
        H: 60,
        close: false,
        autoClose: true,
        submit: function() {
            location.reload()
        }
    })
}
;
var showOverLimitFun = function() {
    $.PageDialog('<div class="mAltFail"><s></s>\u60a8\u53c2\u4e0e\u4eba\u6b21\u5df2\u8fbe\u4e0a\u9650\uff01</div>', {
        W: 180,
        H: 60,
        close: false,
        autoClose: true,
        submit: function() {}
    })
}
;
var loginFun = function(c) {
    var d = function() {
        var a = new popLogin();
        PagePOPLoginOK = function() {
            _IsLogined = true;
            a.hide();
            c()
        }
        ;
        a.show()
    }
    ;
    if (_IsLoadLoginJS) {
        d()
    } else {
        $.getScript("/js/poplogin.js?date=20140814", function() {
            _IsLoadLoginJS = true;
            d()
        })
    }
}
;
$.fn.GoodsBuyFun = function(b, a, s) {
    var c = $(this);
    c.children("a").eq(0).click(function() {
        _IsLimitBuy = parseInt($(this).parent().attr("limitBuy")) > 0;
        var e = function(j, i, g) {
            _UserBalance = j;
            _LimitBuyNum = parseInt(i);
            _BuyedNum = parseInt(g);
            _GotoPayPage = false;
            var l = parseInt(c.prev("li.g-progress").find("span.blue em").html());
            if (l > 0) {
                var h = '<div class="g-popup"><div class="g-buy-frame"><div id="buyBox" class="m-popup-buy"><p class="u-popup-remaining gray9">\u5269\u4f59 ' + l + ' \u4eba\u6b21</p><div id="divNumber" class="u-popup-number gray6"><label>\u53c2\u4e0e</label><a href="javascript:void();" class="num_del num_ban" id="num_del">-</a><input id="i_num" type="text" value="'+s+'" maxlength="7" surplus="' + l + '" class="num_dig"><a href="javascript:void();" class="num_add" id="num_add">+</a><label>\u4eba\u6b21</label></div><p class="u-popup-Tip grayb">' + getDefTip() + '</p><div class="u-popup-paytip" style="display:' + (_UserBalance > 0 ? "none" : "") + '"><p class="u-popup-paymoney gray3">\u603b\u9700\u652f\u4ed8<span class="orange FB">'+s+'.00</span>\u5143</p><p class="u-popup-payRecharge gray6">\u60a8\u7684\u5e10\u6237\u4f59\u989d\u4e0d\u8db3\uff0c<a href="/user/UserRecharge.html" target="_blank" class="blue">\u7acb\u5373\u5145\u503c <span>&gt;&gt;</span></a></p></div><p class="u-popup-balance gray9">\u60a8\u7684\u5e10\u6237\u4f59\u989d\uff1a <span class="gray6">' + j + '.00</span><span class="mlr5">\u5143</span></p><div class="arrow_boxj" style="display:none;"><div class="arrow_box"><span class="arrow_dq"></span>\u786e\u8ba4\u652f\u4ed8\u540e\u5c06\u76f4\u63a5\u4ece\u60a8\u7684\u8d26\u6237\u4e2d\u6263\u9664\uff01</div></div><div class="m-popup_buybtn"><a id="btnConfirmBuy" href="javascript:void();" class="orange_btn">' + (_UserBalance > 0 ? '\u786e\u8ba4\u652f\u4ed8<span class="mlr5">'+s+'.00</span>\u5143' : "\u4f7f\u7528\u5176\u5b83\u65b9\u5f0f\u652f\u4ed8") + "</a></div></div></div></div>";
                var k = 240;
                if (_UserBalance < 1) {
                    _GotoPayPage = true;
                    k = 300
                }
                $.PageDialog(h, {
                    W: 435,
                    H: k,
                    BShow: false,
                    ready: function() {
                        $("#divNumber").GoodsCountFun(a,s)
                    }
                })
            } else {
                showFailFun("\u5546\u54c1\u5df2\u88ab\u62a2\u5149\u4e86\uff01")
            }
        }
        ;
        var d = function() {
            var userId = getCookie("userId");
            if (userId != null  && userId != "") {
                $.get("/getIndexUserInfo.action", {
                    id: userId
                }, function(g) {
                    if (g != null ) {
                        e(g.userBalance, 0, 0)
                    }
                })
            } else {
                loginFun(d)
            }
        }
        ;
        var f = function() {
            $.get("/products/checkUserLimitBuy.action", {
                id: a
            }, function(g) {
                if (g.code == 0) {
                    e(g.userMoney, g.codeLimitBuy, g.buyNum)
                } else {
                    if (g.code == -5) {
                        showFailFun("\u5546\u54c1\u5df2\u88ab\u62a2\u5149\u4e86\uff01")
                    } else {
                        if (g.code == -6) {
                            showOverLimitFun()
                        } else {
                            if (g.code == -10) {
                                loginFun(f)
                            }
                        }
                    }
                }
            })
        }
        ;
        if (_IsLimitBuy) {
            f()
        } else {
            d()
        }
        return false
    });
    $(this).children("a").eq(1).click(function() {
        var d = $(this);
        $.ajax({
            url: "/list/isStatus.action",
            data: "id=" + a,
            success: function(data) {
                if (data == "false") {
                    showFailFun("\u5546\u54c1\u5df2\u88ab\u62a2\u5149\u4e86\uff01")
                } else {
                    if (data == 0) {
                        showOverLimitFun()
                    } else {
                        _IsCartChanged = true;
                        e();
                        var count = parseInt(data);
                        var codeid = a;
                        var json = getCookie("products");
                        var num;
                        if(s > data){
                        	num = data;
                        }else{
                        	num = s;
                        }
                        if (json == null  || json == "") {
                            var val = "[{'pId':" + codeid + ",'num':" + num + "}]";
                            SetCookieByExpires("products", val, 1)
                        } else {
                            var flag = false;
                            json = eval("(" + json + ")");
                            $.each(json, function(n, value) {
                                if (codeid == value.pId) {
                                    value.num = (parseInt(value.num) + parseInt(num));
                                    if ((parseInt(value.num) + parseInt(num)) > count) {
                                        value.num = count
                                    }
                                    flag = true
                                }
                            });
                            if (!flag) {
                                json.push({
                                    pId: +codeid,
                                    num: num
                                })
                            }
                            json = JSON.stringify(json);
                            SetCookieByExpires("products", json, 1)
                        }
                    }
                }
            },
            error: function() {
                showFailFun("\u5546\u54c1\u6dfb\u52a0\u5931\u8d25\uff01")
            }
        });
        var e = function() {
            var f = function() {
                showParabola(d, 1, b, function() {
                    _InsertIntoCart()
                })
            }
            ;
            if (_IsLoadPlJs) {
                f()
            } else {
                $.getScript("/js/parabola.js?date=150129", function() {
                    _IsLoadPlJs = true;
                    f()
                })
            }
        }
        ;
        return false
    })
}
;
var getListPaging = function(n, o, l, i, s) {
    var r = 1
      , m = 1
      , p = 1;
    var t = "";
    r = parseInt(n / o);
    if (n % o > 0) {
        r++
    }
    if (r < 1) {
        r = 1
    }
    t += '<div class="g-pagination w1190">';
    if (n > 0) {
        m = 1;
        while (m + i < r + 1 && m + i < l + 2) {
            m += i - 2
        }
        p = m + i - 1;
        if (p > r) {
            p = r
        }
        if (l == 1) {
            t += '<span class="f-noClick"><a title="\u4e0a\u4e00\u9875" href="javascript:;"><i class="f-tran f-tran-prev">&lt;</i>\u4e0a\u4e00\u9875</a></span>'
        } else {
            t += '<span><a title="\u4e0a\u4e00\u9875" href="' + s(l - 1) + '"><i class="f-tran f-tran-prev">&lt;</i>\u4e0a\u4e00\u9875</a></span>'
        }
        if (m > 1) {
            t += '<span><a href="' + s(1) + '">1</a></span><span>\u2026</span>'
        }
        for (var q = m; q <= p; q++) {
            if (q != l) {
                t += '<span><a href="' + s(q) + '">' + q + "</a></span>"
            } else {
                t += '<span class="current"><a>' + q + "</a></span>"
            }
        }
        if (p < r) {
            t += '<span>\u2026</span><span><a href="' + s(r) + '">' + r + "</a></span>"
        }
        if (l < r) {
            t += '<span><a href="' + s(l + 1) + '">\u4e0b\u4e00\u9875<i class="f-tran f-tran-next">&gt;</i></a></span>'
        } else {
            t += '<span class="f-noClick"><a>\u4e0b\u4e00\u9875<i class="f-tran f-tran-next">&gt;</i></a></span>'
        }
    }
    t += '<span class="f-mar-left">\u5171<em>' + r + "</em>\u9875\uff0c\u53bb\u7b2c</span>";
    t += '<span><input type="text" value="' + l + '">\u9875</span>';
    t += '<span class="f-mar-left"><a id="btnGotoPage" href="javascript:;" title="\u786e\u5b9a">\u786e\u5b9a</a></span>';
    t += "</div>";
    return t
}
;
