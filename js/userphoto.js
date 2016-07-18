var seltion;
var userUploadFun = null;
var userSaveFun = null;
function UploadPhotoScriptAPI(c, d) {
	if (c != "") {
		userUploadFun.ShowUploadErr(c)
	} else {
		$("#divImgTip").html("");
		userUploadFun.ShowUploadPic(d)
	}
}
$(function() {
	var b = $skin;
	var d = $("#userId").val();
	var e = function() {
		var p = $("#pageForm");
		var n = p.find("div.localBtn");
		var m = p.find("div.upImgLoading");
		var c, o;
		var l = n.find("div.btn");
		n.parent().mousemove(function(f) {
			var g = $(window).width();
			if (o != g) {
				o = g;
				c = n.offset()
			}
			$("#FileControl").css({
				top : (f.pageY - c.top - 7) + "px",
				left : (f.pageX - c.left - 190) + "px"
			});
			l.attr("class", "btnhov")
		}).mouseout(function(f) {
			l.attr("class", "btn")
		});
		$("#fuploadFace").mouseover(function() {
			$(this).css("cursor", "pointer")
		});
		var q = function() {
			var f = function(j, h) {
				if (!h.width || !h.height) {
					return
				}
				var i = 160 / h.width;
				var g = 160 / h.height;
				$("#img160").css({
					width : Math.round(i * 300),
					height : Math.round(g * 300),
					marginLeft : -Math.round(i * h.x1),
					marginTop : -Math.round(g * h.y1)
				});
				i = 80 / h.width;
				g = 80 / h.height;
				$("#img80").css({
					width : Math.round(i * 300),
					height : Math.round(g * 300),
					marginLeft : -Math.round(i * h.x1),
					marginTop : -Math.round(g * h.y1)
				});
				i = 30 / h.width;
				g = 30 / h.height;
				$("#img30").css({
					width : Math.round(i * 300),
					height : Math.round(g * 300),
					marginLeft : -Math.round(i * h.x1),
					marginTop : -Math.round(g * h.y1)
				});
				$("#cutX").val(h.x1);
				$("#cutY").val(h.y1);
				$("#cutW").val(h.width);
				$("#cutH").val(h.height)
			};
			this.ShowUploadPic = function(h) {
				var g = $www;
				var i = g + h;
				p.get(0).reset();
				m.addClass("hidden");
				n.removeClass("hidden");
				$("#imgPhoto").attr("src", i).show();
				$("#img160").attr("src", i);
				$("#img80").attr("src", i);
				$("#img30").attr("src", i);
				$("#hidPicUrl").val(h);
				$("#imgPhoto").imgAreaSelect({
					aspectRatio : "1:1",
					handles : true,
					fadeSpeed : 200,
					onSelectChange : f
				});
				$("#imgPhoto").imgAreaSelect({
					x1 : 75,
					y1 : 75,
					x2 : 235,
					y2 : 235,
					onInit : f
				})
			};
			this.ShowUploadErr = function(g) {
				p.get(0).reset();
				m.addClass("hidden");
				n.removeClass("hidden");
				alert(g, 250)
			}
		};
		var a = function() {
			this.btnSaveUserUploadPhoto_click = function() {
				var k = $("#hidPicUrl").val();
				if (k == "") {
					$
							.PageDialog(
									'<dl class="sAltFail"><dd>\u8bf7\u5148\u4e0a\u4f20\u5934\u50cf!</dd></dl>',
									{
										W : 160,
										H : 50,
										autoClose : true
									});
					return false
				}
				var u = $("#cutX").val();
				var h = $("#cutY").val();
				var j = $("#cutW").val();
				var g = $("#cutH").val();
				if (u == "" || h == "" || j == "" || g == "") {
					$
							.PageDialog(
									'<dl class="sAltFail"><dd>\u8bf7\u5148\u9009\u62e9\u88c1\u526a\u533a\u57df!</dd></dl>',
									{
										W : 170,
										H : 50,
										autoClose : true
									});
					return false
				}
				var i = $("#hidUserPhotoName").val();
				var t = {
					action : "updateFace",
					userId : d,
					hidPicUrl : k,
					oldSrc : i,
					x1 : u,
					y1 : h,
					w : j,
					h : g,
					t : Math.random()
				};
				f(t)
			};
			var f = function(g) {
				$
						.ajax({
							url : "/user/updateFace.action",
							data : g,
							beforeSend : function() {
								$("#btnSavePhoto").attr("disabled", true).val(
										"\u8bf7\u7a0d\u5019...")
							},
							success : function(h) {
								$("#btnSavePhoto").attr("disabled", false).val(
										"\u4fdd\u5b58\u5934\u50cf");
								if (h == "success") {
									$
											.PageDialog(
													'<dl class="sAltOK"><dd>\u64cd\u4f5c\u6210\u529f!</dd></dl>',
													{
														W : 160,
														H : 50,
														autoClose : true
													});
									setTimeout(function() {
										window.location.href = $www
												+ "/user/index.html"
									}, 1500)
								} else {
									alert("\u4fdd\u5b58\u5931\u8d25\uff01\u8bf7\u7a0d\u5019\u518d\u8bd5\uff01")
								}
							}
						})
			}
		};
		userUploadFun = new q();
		userSaveFun = new a();
		$("#btnSavePhoto").bind("click",
				userSaveFun.btnSaveUserUploadPhoto_click);
		$("#fuploadFace")
				.bind(
						"change",
						function() {
							var f = $(this).val();
							if (f != "") {
								var g = (f.substr(f.length - 5))
										.substr(
												(f.substr(f.length - 5))
														.indexOf(".") + 1)
										.toLowerCase();
								if (g != "jpeg" && g != "jpg") {
									$(this).val("");
									$
											.PageDialog(
													'<dl class="sAltFail"><dd>\u53ea\u80fd\u4e0a\u4f20jpeg\u6216jpg\u56fe\u7247!</dd></dl>',
													{
														W : 250,
														H : 50,
														autoClose : true
													});
									return false
								} else {
									n.addClass("hidden");
									m.removeClass("hidden");
									p.submit()
								}
							} else {
								$
										.PageDialog(
												'<dl class="sAltFail"><dd>\u8bf7\u9009\u62e9\u8981\u4e0a\u4f20\u7684\u56fe\u7247!</dd></dl>',
												{
													W : 250,
													H : 50,
													autoClose : true
												});
								return false
							}
						});
		$("#upFrame").load(function() {
			var f = $(window.frames.upFrame.document.body).text();
			if (f != null) {
				UploadPhotoScriptAPI("", f)
			}
		})
	};
	e()
});
