var userUploadFun = null;
$(function() {
    var m = $skin;
    var n = "";
    var q = function() {
        var a = '<div class="tips_main"><div class="title1">\u5173\u4e8e\u6652\u5355\u5206\u4eab\u5956\u52b1\u5236\u5ea6\u8c03\u6574\u7684\u516c\u544a</div><div class="text"><p>\u4eb2\u7231\u7684\u62cd\u53cb\uff1a<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u4e3a\u8fdb\u4e00\u6b65\u63d0\u5347\u7528\u6237\u4f53\u9a8c\uff0c\u5e76\u7ed3\u5408\u5e7f\u5927\u62cd\u53cb\u63d0\u51fa\u7684\u5b9d\u8d35\u5efa\u8bae\uff0c\u81ea<span class="red">2014\u5e743\u67081\u65e5</span>\u8d77\uff08\u4ee5\u6652\u5355\u65f6\u95f4\u4e3a\u51c6\uff09\uff0c\u6211\u4eec\u5c06\u5bf9\u6652\u5355\u5206\u4eab\u5956\u52b1\u5236\u5ea6\u8fdb\u884c\u4f18\u5316\u5347\u7ea7\uff0c\u5b9e\u884c\u9636\u68af\u5f0f\u7684\u6652\u5355\u798f\u5206\u5956\u52b1\u5236\u5ea6\uff0c\u5236\u5ea6\u4ee5\u6652\u5355\u5185\u5bb9\u7684\u603b\u4f53\u8d28\u91cf\u4e3a\u51c6\uff0c\u5956\u52b1\u5e45\u5ea6\u4e3a<span class="red">400-1500</span>\u798f\u5206\uff0c\u539f\u5148\u56fa\u5b9a\u76841000\u798f\u5206\u5956\u52b1\u5236\u5ea6\u5c06\u4e0d\u518d\u5b9e\u884c\u3002\u8be6\u7ec6\u5236\u5ea6\u5982\u4e0b\uff1a</p><p>1\u3001 \u6652\u5355\u5185\u5bb9\u8d8a\u8be6\u7ec6\uff0c\u83b7\u5f97\u7684\u798f\u5206\u5956\u52b1\u5c31\u8d8a\u591a\uff08\u9650\u65f6\u5546\u54c1\u9664\u5916\uff09\uff1b<br />2\u3001 \u60a8\u7684\u6587\u5b57\u63cf\u8ff0\u5e94\u4e0d\u5c11\u4e8e<span class="red">100</span>\u5b57\uff0c\u9ad8\u6e05\u7684\u5546\u54c1\u5b9e\u62cd\u7167\u4e0d\u5c11\u4e8e<span class="red">3</span>\u5f20\uff1b<br />3\u3001 \u8bf7\u907f\u514d\u6652\u5355\u5185\u5bb9\u4e2d\u6587\u5b57\u4e0e\u56fe\u7247\u7684\u5927\u91cf\u91cd\u590d\uff1b<br />4\u3001 \u4e3a\u63d0\u9ad8\u6652\u5355\u7684\u771f\u5b9e\u6027\uff0c\u60a8\u53ef\u4ee5\u5c55\u793a\u771f\u5b9e\u6709\u6548\u7684<span class="red">\u5feb\u9012\u5355\u53f7</span>\uff1b<br />5\u3001 \u5efa\u8bae\u6652\u51fa<span class="red">\u60a8\u4e0e\u5546\u54c1\u7684\u5408\u7167</span>\uff0c\u60a8\u7684<span class="red">\u624b\u673a\u77ed\u4fe1\u3001\u90ae\u4ef6\u901a\u77e5</span>\u53ca' + $shortName + '\u7f51\u4e0a\u7684<span class="red">\u4ea4\u6613\u8be6\u60c5</span>\u9875\u9762\u622a\u56fe\u7b49\uff1b <br />6\u3001 \u6ce8\u610f\u4fdd\u6301\u6652\u5355\u5185\u5bb9\u4e0e\u83b7\u5f97\u5546\u54c1\u7684\u5173\u8054\u6027\uff0c\u8bf7\u52ff\u4f7f\u7528\u5176\u4ed6\u7f51\u7ad9\u7684\u56fe\u7247\uff0c\u8bf7\u52ff\u8fdd\u53cd\u56fd\u5bb6\u76f8\u5173\u89c4\u5b9a\uff0c\u5426\u5219\u6211\u4eec\u6709\u6743\u5220\u9664\u5e76\u51bb\u7ed3\u8d26\u53f7\uff0c\u4e14\u4fdd\u7559\u8ffd\u7a76\u5176\u6cd5\u5f8b\u8d23\u4efb\u7684\u6743\u5229\uff1b<br />7\u3001 \u5982\u679c\u6652\u5355\u5185\u5bb9\u975e\u5e38\u65b0\u9896\uff0c\u90a3\u4e48\u60a8\u6709\u53ef\u80fd\u4f1a\u83b7\u5f97\u66f4\u9ad8\u7684\u5956\u52b1\uff01</p><p><a href="#" target="_blank">\u8be6\u60c5\u8bf7\u70b9\u51fb</a></p></div><div class="btn"><a id="btnClose" href="javascript:;" class="btn_OK">\u77e5\u9053\u4e86</a> </div></div>';
        $.PageDialog(a, {
            W: 780,
            H: 500,
            close: false,
            autoClose: false,
            obj: $("div.R-content"),
            oL: 0,
            oT: -695,
            ready: function() {
                $("#btnClose").click(function() {
                    x("_memPostTip", "1", 1);
                    $.PageDialog.close()
                })
            }
        })
    };
    if (w("_memPostTip") != 1) {
        q()
    }
    function x(b, d, a) {
        var c = a;
        var e = new Date();
        e.setTime(e.getTime() + c * 24 * 60 * 60 * 1000);
        document.cookie = b + "=" + escape(d) + ";id=1ypg;path=/;expires=" + e.toGMTString() + ";domain=" + $domain
    }
    function w(b) {
        var a = document.cookie.match(new RegExp("(^| )" + b + "=([^;]*)(;|$)"));
        if (a != null) {
            return unescape(a[2])
        }
        return null
    }
    var r = $("#pageForm");
    var y = r.find("div.localBtn");
    var p = r.find("div.upImgLoading");
    var t, o;
    var z = y.find("div.btn");
    var u = $("#fuploadFile");
    y.parent().mousemove(function(b) {
        var a = $(window).width();
        if (o != a) {
            o = a;
            t = y.offset()
        }
        $("#FileControl").css({
            top: (b.pageY - t.top - 7) + "px",
            left: (b.pageX - t.left - 190) + "px"
        });
        z.attr("class", "btnhov")
    }).mouseout(function(a) {
        z.attr("class", "btn")
    });
    u.mouseover(function() {
        $(this).css("cursor", "pointer")
    });
    var s = function() {
        this.ShowUploadPic = function(e) {
            r.get(0).reset();
            p.addClass("hidden");
            y.removeClass("hidden");
            var d = $("#ulPicBox");
            var b = $("#hidPicAll");
            var c = b.val();
            if (c.indexOf(e) < 0) {
                c += (c == "" ? "": ",") + e;
                b.val(c);
                var a = '<div id="img' + e.substr(0, 13) + '"><img src="/uploadImages/' + e + '" alt="" /><a href="javascript:;" onclick="javascript:delPostPic(\'' + e + '\');" title="\u5220\u9664\u6b64\u56fe\u7247">\u5220\u9664\u6b64\u56fe\u7247</a></div>';
                d.append(a).show();
                $.PageDialog('<dl class="sAltOK"><dd>\u56fe\u7247\u4e0a\u4f20\u6210\u529f\uff01</dd></dl>', {
                    W: 180,
                    H: 50,
                    autoClose: true
                })
            } else {
                return false
            }
        };
        this.ShowUploadErr = function(a) {
            r.get(0).reset();
            p.addClass("hidden");
            y.removeClass("hidden");
            $.PageDialog('<dl class="sAltFail"><dd>' + a + "</dd></dl>", {
                W: 250,
                H: 50
            })
        }
    };
    userUploadFun = new s();
    u.bind("change",
    function() {
        var b = $(this).val();
        if (b != "") {
            var a = (b.substr(b.length - 5)).substr((b.substr(b.length - 5)).indexOf(".") + 1).toLowerCase();
            if (a != "png" && a != "jpg" && a != "bmp") {
                $(this).val("");
                $.PageDialog('<dl class="sAltFail"><dd>\u53ea\u80fd\u4e0a\u4f20PNG\u3001GIF\u6216BMP\u56fe\u7247!</dd></dl>', {
                    W: 250,
                    H: 50,
                    autoClose: true
                });
                return false
            } else {
                y.addClass("hidden");
                p.removeClass("hidden");
                r.submit()
            }
        } else {
            $.PageDialog('<dl class="sAltFail"><dd>\u8bf7\u5148\u9009\u62e9\u9700\u8981\u4e0a\u4f20\u7684\u6587\u4ef6!</dd></dl>', {
                W: 210,
                H: 50,
                autoClose: true
            });
            return false
        }
    });
    $("#upFrame").load(function() {
        var a = $(window.frames.upFrame.document.body).text();
        if (a != null) {
            UploadFileScriptAPI("", a)
        }
    });
    var v = function() {
        var b = ["\u6807\u9898\u4e0d\u5c11\u4e8e5\u4e2a\u5b57", "\u606d\u559c\u60a8" + $shortName + "\u6210\u529f\uff0c\u5728\u6b64\u8f93\u5165\u60a8\u7684" + $shortName + "\u611f\u8a00\u5427\uff0c\u5185\u5bb9\u4e0d\u5c11\u4e8e100\u5b57\uff0c\u5ba1\u6838\u901a\u8fc7\u5373\u53ef\u83b7\u5f97\u76f8\u5e94\u798f\u5206\u5956\u52b1\u54e6\uff01"];
        var a = $("#codeID").val();
        var c = function(e, d) {
            $.PageDialog('<dl class="sAltFail"><dd>' + d + "</dd></dl>", {
                W: 220,
                H: 50,
                autoClose: true
            });
            if (e != null) {
                e.focus().val(e.val())
            }
        };
        $("#but_ok").click(function() {
            if (!isLoaded) {
                return false
            }
            var d = $("#postTitle").val();
            var f = $("#postTitle");
            var g = $("#postContent").val();
            var e = $("#postContent");
            var h = $("#hidPicAll").val();
            var i = $("#hidPicAll").val().split(",");
            if (d == "" || d == b[0]) {
                c(f, "\u8bf7\u8f93\u5165\u4e3b\u9898\uff01");
                return false
            }
            if (d.length > 50) {
                c(f, "\u4e3b\u9898\u4e0d\u80fd\u8d85\u8fc750\u5b57\uff01");
                return false
            }
            if (d.length < 5) {
                c(f, "\u4e3b\u9898\u4e0d\u80fd\u5c11\u4e8e5\u4e2a\u5b57\uff01");
                return false
            }
            if (g == "" || g == b[1]) {
                c(e, "\u8bf7\u8f93\u5165" + $shortName + "\u611f\u8a00\uff01");
                return false
            }
            if (g.length > 800) {
                c(e, "" + $shortName + "\u611f\u8a00\u4e0d\u80fd\u8d85\u8fc7800\u5b57\uff01");
                return false
            }
            if (g.length < 20) {
                c(e, "" + $shortName + "\u611f\u8a00\u4e0d\u80fd\u5c11\u4e8e100\u4e2a\u5b57\uff01");
                return false
            }
            if (h.length < 53) {
                c(null, "\u8bf7\u4e0a\u4f203\u5f20\u4ee5\u4e0a\u539f\u521b\u56fe\u7247\uff01");
                return false;
            }
            if (i.length > 10) {
                c(null, "\u6700\u591a\u53ea\u80fd\u4e0a\u4f2010\u5f20\u56fe\u7247\uff01");
                return false
            }
            $.ajax({
                url: "/user/PostSingleAddShare.action",
                type: "post",
                data: "id=" + a + "&postTitle=" + d + "&postContent=" + g + "&postAllPic=" + h,
                success: function(j) {
                    if (j == "true") {
                        OKDialog("\u63d0\u4ea4\u6210\u529f!", 160);
                        location.replace("/user/PostSingleList.html")
                    } else {
                        OKDialog("\u63d0\u4ea4\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5!", 200)
                    }
                },
                error: function() {
                    c(null, "\u63d0\u4ea4\u5931\u8d25\uff01")
                }
            })
        });
        $("#postTitle").focus(function() {
            var d = $(this).val();
            if (d == b[0]) {
                $(this).val("").attr("class", "title_click")
            }
        }).blur(function() {
            if ($(this).val() == "") {
                $(this).val(b[0]).attr("class", "title")
            }
        });
        $("#postContent").focus(function() {
            var d = $(this).val();
            if (d == b[1]) {
                $(this).val("").attr("class", "textarea_click")
            }
        }).blur(function() {
            if ($(this).val() == "") {
                $(this).val(b[1]).attr("class", "textarea")
            }
        });
        $("#addnewPostPic").click(function() {
            var d = $("#hidPicAll").split(",");
            if (d.length < 10) {
                $.PageDialog('<iframe name="PostSingleFrame" id="PostSingleFrame"  scrolling="no" width="398" height="100" frameborder="0" src="about:blank"></iframe>', {
                    W: 398,
                    H: 150,
                    title: "\u4e0a\u4f20\u65b0\u6652\u5355\u56fe\u7247"
                });
                $("#PostSingleFrame").ready(function() {
                    $("#PostSingleFrame").attr("src", "uploadPostImg.html")
                })
            } else {
                alert("\u6700\u591a\u53ea\u80fd\u4e0a\u4f2010\u5f20\u56fe\u7247\uff01")
            }
        });
        isLoaded = true
    };
    $.getScript(m + "/js/ajaxfun.js?date=20130123", v)
});
function UploadFileScriptAPI(c, d) {
    if (c != "") {
        userUploadFun.ShowUploadErr(c)
    } else {
        userUploadFun.ShowUploadPic(d)
    }
}
function delPostPic(d) {
    var c = function() {
        var b = $("#hidPicAll");
        var a = b.val();
        if (a.indexOf(d) != -1) {
            a = ("," + a + ",").replace("," + d + ",", ",");
            b.val(a.substr(1, a.length - 2))
        }
        $("#img" + d.substr(0, 13)).remove()
    };
    $.PageDialog.showConfirm("\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8be5\u56fe\u7247\u5417\uff1f", c)
};