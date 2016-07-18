var CBLFun = null;
var CBLRecordFun = null;
var PagePOPLoginOK = null;
var CBLPageFun = null;
$(function() {
	var skinDomain = $skin;
	var _CodeID = $("#hidCodeID").val();
	var _GoodsID = $("#hidGoodsID").val();
	var _CodeState = parseInt($("#hidCodeState").val());
	var _LimitBuy = parseInt($("#hidLimitBuy").val());
	var _IsEnd = parseInt($("#hidIsEnd").val()) == 1 ? true : false;
	var _myLimitSales = 0;
	var _CanBuy = 0;
	var _IsLogined = false;
	var userId = $("#userId").val();
	if (userId != null && userId != "") {
		_IsLogined = true
	}
	if ($(".o-title", "#divMainInfo").height() > 94) {
		$("div.ng-goods-detail", "#divMainInfo").addClass(
				"ng-goods-detail-height")
	}
	var BindEvents = function() {
		var stopBubble = function(e) {
			if (e && e.stopPropagation) {
				e.stopPropagation()
			} else {
				window.event.cancelBubble = true
			}
		};
		var preventDefault = function(e) {
			e = e || window.event;
			if (e && e.preventDefault) {
				e.preventDefault()
			} else {
				window.event.returnValue = false
			}
		};
		var showFailFun = function(str, callFun) {
			$.PageDialog('<div class="mAltFail"><s></s>' + str + "</div>", {
				W : 200,
				H : 60,
				close : false,
				autoClose : true,
				submit : function() {
					if (callFun) {
						callFun()
					}
				}
			})
		};
		var showOKFun = function(str, callFun) {
			$.PageDialog('<div class="mAltOK"><s></s>' + str + "</div>", {
				W : 175,
				H : 60,
				close : false,
				autoClose : true,
				submit : function() {
					if (callFun) {
						callFun()
					}
				}
			})
		};
		var loadShareFun = function() {
			try {
				var ShareTitle = $("#hidTitle").val();
				var SharePic = $("#middlePicBox").find("img").attr("src");
				var ShareUrl = "";
				var loadBDShareJS = function() {
					window._bd_share_config = {
						common : {
							bdSnsKey : {},
							bdText : ShareTitle,
							bdMini : "2",
							bdUrl : ShareUrl,
							bdPic : SharePic,
							bdStyle : "2",
							bdSize : "16"
						},
						share : {}
					};
					with (document) {
						0[(getElementsByTagName("head")[0] || body)
								.appendChild(createElement("script")).src = "http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion="
								+ ~(-new Date() / 3600000)]
					}
				};
				var _RID = $.cookie("_uid");
				if (_RID != null && parseInt(_RID) > 0) {
					var refUrl = function() {
					};
					var ShareCallFun = function(json) {
						if (json.code == 1 && json.data.urls[0].result) {
							ShareUrl = json.data.urls[0].url_short.replace(
									"t.cn", $www);
							loadBDShareJS()
						}
					};
					$.getJSON(
							"https://api.weibo.com/2/short_url/shorten.json?source=1681459862&url_long="
									+ refUrl() + "&callback=?", ShareCallFun)
				} else {
					ShareUrl = location.href + "?s=shared";
					loadBDShareJS()
				}
			} catch (e) {
			}
		};
		loadShareFun();
		var isCollectionFun = function() {
			if (_GoodsID > 0) {
				var _BtnColObj = $("#a_sc");
				var addCollFun = function() {
					var callFun = function(result) {
						if (result == 0) {
							$("#divRTColect").attr("isChanged", "1");
							_BtnColObj
									.addClass("has-in")
									.html(
											'<i class="t-icon sc-icon ng-box-bg sc-icon-past"></i>\u5df2\u5173\u6ce8')
									.unbind("click")
									.bind("click", function() {
										removeCollFun()
									})
									.hover(
											function() {
												_BtnColObj
														.html('<i class="t-icon sc-icon ng-box-bg sc-icon-past"></i>\u53d6\u6d88\u5173\u6ce8')
											},
											function() {
												_BtnColObj
														.html('<i class="t-icon sc-icon ng-box-bg sc-icon-past"></i>\u5df2\u5173\u6ce8')
											})
						} else {
							if (result == 10) {
								checkUserLoginFun(addCollFun)
							} else {
								showFailFun("\u5173\u6ce8\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01");
								location.reload()
							}
						}
					};
					$.get("/products/addCollectGoods.action", {
						id : _GoodsID
					}, function(data) {
						callFun(data)
					})
				};
				var removeCollFun = function() {
					var callFun = function(result) {
						if (result == 0) {
							$("#divRTColect").attr("isChanged", "1");
							_BtnColObj
									.html(
											'<i class="t-icon sc-icon ng-box-bg sc-icon-past"></i>\u5df2\u53d6\u6d88')
									.unbind("mouseenter").unbind("mouseleave");
							setTimeout(
									function() {
										_BtnColObj
												.removeClass("has-in")
												.html(
														'<i class="t-icon sc-icon ng-box-bg"></i>\u5173\u6ce8')
												.unbind("click").bind("click",
														function() {
															addCollFun()
														})
									}, 1000)
						} else {
							showFailFun("\u53d6\u6d88\u5173\u6ce8\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01");
							location.reload()
						}
					};
					$.get("/products/delCollectGoods.action", {
						id : _GoodsID
					}, function(data) {
						callFun(data)
					})
				};
				var callFun = function(result) {
					if (result == 0) {
						_BtnColObj
								.addClass("has-in")
								.html(
										'<i class="t-icon sc-icon ng-box-bg sc-icon-past"></i>\u5df2\u5173\u6ce8')
								.unbind("click")
								.bind("click", function() {
									removeCollFun()
								})
								.hover(
										function() {
											_BtnColObj
													.html('<i class="t-icon sc-icon ng-box-bg sc-icon-past"></i>\u53d6\u6d88\u5173\u6ce8')
										},
										function() {
											_BtnColObj
													.html('<i class="t-icon sc-icon ng-box-bg sc-icon-past"></i>\u5df2\u5173\u6ce8')
										})
					} else {
						_BtnColObj.bind("click", function() {
							addCollFun()
						})
					}
				};
				$.get("/products/checkCollectGoods.action", {
					id : _GoodsID
				}, function(data) {
					callFun(data)
				})
			}
		};
		isCollectionFun();
		var curMenuIndex = 0;
		var _InitMenuTop = $("#ul_menu").offset().top - 1;
		var showMenuFun = function(idx) {
			var _descObj = $("#div_desc");
			var _postObj = $("#div_postlist");
			var _liObj = $("#ul_menu").children("li");
			curMenuIndex = idx;
			if (_liObj.length == 3) {
				var _recordObj = $("#div_allrecord");
				if (idx == 0) {
					_liObj.eq(0).addClass("current");
					_liObj.eq(1).removeClass("current");
					_liObj.eq(2).removeClass("current");
					_descObj.show();
					_recordObj.show();
					_postObj.show();
					_recordObj.find(".rocord-header").show();
					_postObj.find(".ng-share-header").show()
				} else {
					if (idx == 1) {
						_liObj.eq(0).removeClass("current");
						_liObj.eq(1).addClass("current");
						_liObj.eq(2).removeClass("current");
						_descObj.hide();
						_postObj.hide();
						_recordObj.find(".rocord-header").hide();
						_recordObj.show();
						if (CBLRecordFun != null) {
							CBLRecordFun.initData()
						}
					} else {
						if (idx == 2) {
							_liObj.eq(0).removeClass("current");
							_liObj.eq(1).removeClass("current");
							_liObj.eq(2).addClass("current");
							_descObj.hide();
							_recordObj.hide();
							_postObj.find(".ng-share-header").hide();
							_postObj.show();
							CBLPageFun.initData()
						}
					}
				}
			} else {
				if (idx == 0) {
					_liObj.eq(0).addClass("current");
					_liObj.eq(1).removeClass("current");
					_descObj.show();
					_postObj.show();
					_postObj.find(".ng-share-header").show()
				} else {
					if (idx == 1) {
						_liObj.eq(0).removeClass("current");
						_liObj.eq(1).addClass("current");
						_descObj.hide();
						_postObj.find(".ng-share-header").hide();
						_postObj.show();
						CBLPageFun.initData()
					}
				}
			}
			if ($("#div_menu").attr("fixed") == "1") {
				$("body,html").animate({
					scrollTop : _InitMenuTop
				}, 0)
			}
		};
		var showBuyLast = function() {
			var _BuyListObj = $("#UserBuyNewList");
			var _liObj = _BuyListObj.children("li");
			if (_liObj.length == 0) {
				_BuyListObj
						.parent()
						.html(
								'<div class="null-tips-wrapper clearfix"><div class="gth-icon transparent-png"></div><div class="null-text"><p>\u8fd8\u6ca1\u6709\u4eba\u53c2\u4e0e\uff1f</p><p>\u68a6\u60f3\u4e0e\u60a8\u53ea\u67091\u5143\u7684\u8ddd\u79bb\uff01</p></div></div>');
				return
			}
			if (_liObj.length > 13) {
				var Trundle = function() {
					var _lastobj = _BuyListObj.find("li:last");
					var _lastheight = 30;
					_BuyListObj.prepend(_lastobj).css("marginTop",
							"-" + _lastheight + "px");
					_BuyListObj.animate({
						marginTop : "0px"
					}, 600)
				};
				if (_CodeState == 1) {
					var setTrundle = setInterval(Trundle, 2000);
					_BuyListObj.hover(function() {
						clearInterval(setTrundle);
						setTrundle = null
					}, function() {
						setTrundle = setInterval(Trundle, 2000)
					})
				}
				var _showall = _BuyListObj.parent().next("a");
				if (_showall.is(":hidden")) {
					_showall.show().bind("click", function() {
						$("body,html").animate({
							scrollTop : $("#ul_menu").offset().top
						}, 0);
						showMenuFun(1)
					})
				}
			}
		};
		showBuyLast();
		var isLoadMyRecord = false;
		var myBuyRecordFun = function() {
			if (_IsLogined) {
				if (isLoadMyRecord) {
					return
				}
				isLoadMyRecord = true;
				$("#a_login").parent().parent().hide();
				var _RecordObj = $("#div_myrecord").children("div.my-record");
				_RecordObj.html('<div class="ng-s-wait"></div>');
				var _GetCount = 48;
				$
						.ajax({
							url : "/products/getRandomNumberListPage.action",
							data : "id=" + _CodeID + "&userId=" + userId,
							success : function(data) {
								if (data != "") {
									var listItems = data;
									var len = listItems.length;
									if (len > 0) {
										var _html = "";
										var _k = 0;
										for (var i = 0; i < len; i++) {
											if (i == (len - 1)) {
												_html += '<dl class="clearfix last">'
											} else {
												_html += '<dl class="clearfix">'
											}
											_k += listItems[i].buyCount;
											_html += "<dt>"
													+ listItems[i].buyDate
													+ "</dt>";
											_html += "<dd>"
													+ listItems[i].randomNumbers
															.replace(
																	new RegExp(
																			",",
																			"gm"),
																	"</dd><dd>")
													+ "</dd>";
											_html += "</dl>"
										}
										_RecordObj.html(_html);
										var _showall = _RecordObj.next("a");
										if (_k > _GetCount
												&& _showall.is(":hidden")) {
											_showall.show()
													.attr(
															"href",
															"/user/UserBuyDetail-"
																	+ _CodeID
																	+ ".html")
										} else {
											var _TotalHeight = 0;
											_RecordObj
													.children("dl")
													.each(
															function() {
																_TotalHeight += parseInt($(
																		this)
																		.height())
															});
											if (_TotalHeight > parseInt(_RecordObj
													.height())) {
												_showall.show().attr(
														"href",
														"/user/UserBuyDetail-"
																+ _CodeID
																+ ".html")
											}
										}
									} else {
										_RecordObj
												.html('<div class="null-mytips-wrapper clearfix"><div class="gth-icon transparent-png"></div><span class="my-text">\u60a8\u8fd8\u6ca1\u6709\u53c2\u4e0e\u672c\u671f\u5546\u54c1\u54e6\uff01</span></div>')
									}
								} else {
									_RecordObj
											.html('<div class="null-mytips-wrapper clearfix"><div class="gth-icon transparent-png"></div><span class="my-text">\u60a8\u8fd8\u6ca1\u6709\u53c2\u4e0e\u672c\u671f\u5546\u54c1\u54e6\uff01</span></div>')
								}
							},
							error : function() {
								_RecordObj
										.html('<div class="null-mytips-wrapper clearfix"><div class="gth-icon transparent-png"></div><span class="my-text">\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01</span></div>')
							}
						})
			} else {
				$("#a_login").bind("click", function() {
					checkUserLoginFun(myBuyRecordFun)
				}).parent().parent().show()
			}
		};
		var checkUserLoginFun = function(callFun) {
			if (_IsLogined) {
				callFun()
			} else {
				var loginWin = new popLogin();
				PagePOPLoginOK = function() {
					_IsLogined = true;
					loginWin.hide();
					callFun();
					return false
				};
				loginWin.show()
			}
		};
		var _RecordLineArr = [ 0, 100 ];
		$("#div_buynav").children("a").each(function(idx) {
			$(this).bind("click", function() {
				$(this).addClass("current").siblings().removeClass("current");
				$(this).nextAll("div.b-line").animate({
					left : _RecordLineArr[idx]
				}, {
					queue : false,
					duration : 400,
					complete : function() {
					}
				});
				if (idx == 0) {
					$("#div_goodsrecord").show();
					$("#div_myrecord").hide()
				} else {
					if (idx == 1) {
						$("#div_goodsrecord").hide();
						$("#div_myrecord").show();
						myBuyRecordFun()
					}
				}
			})
		});
		var userBuyRNOCache = new Object();
		$.fn.showUserBuyRNO = function() {			
			var initRnoState = function() {
				$("#div_allrecord").find('a[name="showCode"]').each(function() {
					$(this).attr("isShow", "0")
				})
			};
			$(this)
					.click(
							function(e) {
								stopBubble(e);
								var _DiagRnoObj = $("#divRnoShow");
								var _ThisObj = $(this);
								if (_ThisObj.attr("isShow") == "1") {
									_DiagRnoObj.hide();
									_ThisObj.attr("isShow", "0");
									return
								}
								initRnoState();
								_ThisObj.attr("isShow", "1");
								var _vTop = _ThisObj.offset().top, _vLeft = _ThisObj
										.offset().left;
								var _UserHtml = _ThisObj.parent().prevAll(
										"span.name").html();
								_UserHtml = _UserHtml.replace("<i ", "<b ");
								_UserHtml = _UserHtml.replace("</i>", "</b>");
								var _BuyID = _ThisObj.attr("buyid");
								var _BuyNum = _ThisObj.attr("buynum");
								var _UID = _ThisObj.attr("uid");
								var _DiagHtml = '<div class="yungou-code-inner"><div class="yt">'
										+ _UserHtml
										+ "本次参与<span>"
										+ _BuyNum
										+ '</span>人次</div><div class="code-info"><div class="code-ul-wrapper"><ul class="code-ul"><div class="ng-s-wait"></div></ul></div></div><a href="javascript:;" class="close-btn ng-result-bg transparent-png" title="关闭"></a><i class="j"><b class="j"></b></i></div>';
								var _pageSize = 800;
								var _dataArr = [];
								var _pageIndex = 0;
								var _LiHtml = "";
								var _loadMoreFun = function() {
									if (_dataArr.length > 0) {
										if (_pageIndex == (_dataArr.length - 1)) {
											return
										}
										_pageIndex++;
										var _curHtml = _DiagRnoObj.find(
												"ul.code-ul").html();
										_curHtml += _dataArr[_pageIndex];
										_ShowDialog(_curHtml)
									}
								};
								var _ShowDialog = function(vStr) {
									_DiagRnoObj.find("ul.code-ul").html(vStr);
									_DiagRnoObj.find("a.close-btn").click(
											function() {
												$(this).parent().parent().hide();
												_ThisObj.attr("isShow", "0");
												return false
											});
									$("body").click(function() {
										_DiagRnoObj.hide();
										initRnoState()
									});											
									var _api = $("div.code-ul-wrapper",
											_DiagRnoObj).jScrollPane({
										verticalDragMinHeight : 15
									});
									_api
											.unbind("scroll")
											.bind(
													"scroll",
													function() {
														var _trackHeight = parseInt($(
																".jspTrack",
																_DiagRnoObj)
																.css("height"));
														var _dragHeight = parseInt($(
																".jspDrag",
																_DiagRnoObj)
																.css("height"));
														var _dragTop = parseInt($(
																".jspDrag",
																_DiagRnoObj)
																.css("top"));
														if (_dragHeight
																+ _dragTop >= (_trackHeight - 10)) {
															_loadMoreFun()
														}
													});
									_api
											.unbind("mousewheel")
											.bind(
													"mousewheel",
													function(e, delta) {
														var dir = delta > 0 ? "Up"
																: "Down";
														var scrollTop = _api
																.scrollTop();
														var scrollHegiht = _api[0].scrollHeight;
														var height = _api
																.height();
														if (scrollTop + height >= scrollHegiht
																&& delta < 0) {
															preventDefault(e)
														} else {
															if (scrollTop == 0
																	&& delta > 0) {
																preventDefault(e)
															}
														}
													})
								};
								if (_DiagRnoObj.length == 0) {
									_DiagRnoObj = $('<div id="divRnoShow" class="yungou-code-wrapper"></div>');
									$("body").append(_DiagRnoObj);
									_DiagRnoObj.click(function(e) {
										stopBubble(e)
									})
								}
								_vTop = _vTop - 96;
								_vLeft = _vLeft - 363;
								_vLeft = _vLeft - 10 - _BuyNum.length * 8;
								_DiagRnoObj.html(_DiagHtml).css({
									left : _vLeft,
									top : _vTop
								}).show();
								if (userBuyRNOCache["userBuyRnoArr" + _BuyID] != null) {
									_dataArr = userBuyRNOCache["userBuyRnoArr"
											+ _BuyID];
									if (_dataArr.length > 0) {
										_ShowDialog(_dataArr[_pageIndex])
									}
								} else {
									if (userBuyRNOCache["userBuyRnoStr"
											+ _BuyID] != null) {
										_LiHtml = userBuyRNOCache["userBuyRnoStr"
												+ _BuyID];
										_ShowDialog(_LiHtml)
									} else {
										$.ajax({
											url : "/products/getUserBuyCodeByBuyid.action",
											data : "id=" + _BuyID,
											success : function(data){
												if (data != "false") {
													var listItems = data;
													_LiHtml = "";
													_pageIndex = 0;
													var _k = 0;
													for (var i = 0; i < listItems.length; i++) {
														_k++;
														_LiHtml += "<li>"
																+ listItems[i]
																+ "</li>";
														if (parseInt(_BuyNum) > _pageSize) {
															if (_k % _pageSize == 0
																	&& _k < parseInt(_BuyNum)) {
																_LiHtml += "#"
															}
														}
													}
													if (parseInt(_BuyNum) > _pageSize) {
														_dataArr = _LiHtml
																.split("#");
														if (_dataArr.length > 0) {
															_ShowDialog(_dataArr[_pageIndex]);
															userBuyRNOCache["userBuyRnoArr"
																	+ _BuyID] = _dataArr
														}
													} else {
														_ShowDialog(_LiHtml);
														userBuyRNOCache["userBuyRnoStr"
																+ _BuyID] = _LiHtml
													}
												} else {
													showFailFun("抱歉，查询失败")
												}
											},
											error : function() {
												showFailFun("抱歉，查询失败")
											}
										})
									}
								}
							});
		};
		var showAllBuyListFun = function() {
			var _RecordObj = $("#div_allrecord").show();
			var _BuyListCache = new Object();
			var _isLoaded = false;
			var GetListDataFun = function() {
				if (_isLoaded) {
					return
				}
				_isLoaded = true;
				var resultCount = $("#resultCount").val();
				var pageNo = 0;
				$("#pagination").pagination(resultCount, {
					current_page : pageNo,
					prev_text : "\u4e0a\u4e00\u9875",
					next_text : "\u4e0b\u4e00\u9875",
					num_display_entries : 5,
					num_edge_entries : 1,
					link_to : "",
					prev_show_always : false,
					next_show_always : false,
					items_per_page : 20,
					callback : pageselectCallback
				});
				function pageselectCallback(pageNo) {
					var _RecordList = _RecordObj.children("div.record");
					_RecordList.next("div.g-pagination").remove();
					_RecordList.find("ul")
							.html('<div class="ng-b-wait"></div>');
					if (_BuyListCache["page" + pageNo] != null) {
						_RecordList.find("ul").html(
								_BuyListCache["page" + pageNo]);
						if (page == 1 && curMenuIndex == 1) {
							_RecordObj.find(".rocord-header").hide()
						}
					} else {
						var url = "/products/ajaxPage.action";
						$
								.ajax({
									url : url,
									data : "id=" + _CodeID + "&pageNo="
											+ pageNo,
									beforeSend : loading,
									success : function(data) {
										if (data.length > 0) {
											var listItems = data;
											var _html = '<li class="record-menu"><span class="time">\u65f6\u95f4</span><span class="name">\u4f1a\u5458</span><span class="people">\u53c2\u4e0e\u4eba\u6b21</span><span class="ip">IP</span><span class="form">\u6765\u6e90</span></li>';
											for (var i = 0; i < listItems.length; i++) {
												var item = listItems[i];
												_html += "<li>";
												_html += '<span class="time">'
														+ item.buyDate
														+ "</span>";
												_html += '<span class="name"><span class="w"><a href="/u/'
														+ item.userId
														+ '.html" target="_blank" title="'
														+ item.userName
														+ '"><i class="head-s-img"><img src="'
														+ item.userFace
														+ '" width="22" height="22"></i>'
														+ item.userName
														+ "</a></span></span>";
												_html += '<span class="people">'
														+ item.buyCount
														+ "<a name='showCode' buyid='"
														+ item.buyId
														+ "' uid='"
														+ item.userId
														+ "' buynum='"
														+ item.buyCount
														+ '\' href="javascript:;">查看云购码</a></span>';
												_html += '<span class="ip">'
														+ item.ip_location
														+ " IP:"
														+ item.ip_address
														+ "</span>";
												if (item.buySource == "1") {
													_html += '<span class="form"><a href="/app/mobile.html" target="_blank">\u624b\u673a\u89e6\u5c4f\u7248<i class="f-icon mobile"></i></a></span>'
												} else {
													if (item.buySource == "2") {
														_html += '<span class="form"><a href="/app/mobile.html" target="_blank">Android\u5ba2\u6237\u7aef<i class="f-icon andriod"></i></a></span>'
													} else {
														if (item.buySource == "3") {
															_html += '<span class="form"><a href="/app/microchannel.html" target="_blank">iOS\u5ba2\u6237\u7aef<i class="f-icon ios"></i></a></span>'
														} else {
															if (item.buySource == "4") {
																_html += '<span class="form"><a href="/app/mobile.html" target="_blank">\u5fae\u4fe1\u516c\u4f17\u5e73\u53f0<i class="f-icon wx"></i></a></span>'
															} else {
																_html += '<span class="form"><a href="javascript:;">PC\u7535\u8111<i class="f-icon pc"></i></a></span>'
															}
														}
													}
												}
												_html += "</li>"
											}
											_RecordList.find("ul").html(_html);
											_RecordList.find("li").hover(function() {
												$(this).addClass("current")
											}, function() {
												$(this).removeClass("current")
											});
											_RecordList.find('a[name="showCode"]').showUserBuyRNO();
											_BuyListCache["page" + pageNo] = _RecordList
													.find("ul").html();
											_isLoaded = false
										} else {
											if (curMenuIndex > 0) {
												_RecordObj
														.html('<div class="null-retips-wrapper"><div class="gth-icon transparent-png"></div><span>\u8fd8\u6ca1\u6709\u4eba\u53c2\u4e0e\uff1f\u68a6\u60f3\u4e0e\u60a8\u53ea\u67091\u5143\u7684\u8ddd\u79bb\uff01</span></div>')
											} else {
												_RecordObj
														.html('<div class="rocord-header">\u6240\u6709\u53c2\u4e0e\u8bb0\u5f55</div><div class="null-retips-wrapper"><div class="gth-icon transparent-png"></div><span>\u8fd8\u6ca1\u6709\u4eba\u53c2\u4e0e\uff1f\u68a6\u60f3\u4e0e\u60a8\u53ea\u67091\u5143\u7684\u8ddd\u79bb\uff01</span></div>')
											}
										}
									}
								})
					}
				}
			};
			this.initData = function() {
				GetListDataFun()
			}
		};
		function loading() {
			$("#div_allrecord").children("div.record").find("ul").html(
					'<div class="ng-b-wait"></div>')
		}
		function loading2() {
			$("#div_postlist").find("div.ng-share-wrapper").html(
					'<div class="ng-b-wait"></div>')
		}
		var showPostListFun = function() {
			var _PostObj = $("#div_postlist");
			var _PostListCache = new Object();
			var _isLoaded = false;
			var resultCount = $("#pageCount").val();
			var pageNo = 0;
			var getEventObj = function(html) {
				var _ItemObj = $(html);
				_ItemObj.find("a[type='showCard']").each(function() {
					$(this).ShowUserCard()
				});
				var initPicFun = function() {
					$("body").find("div.pic-hover").removeClass("current")
							.hide();
					$("body").find("div.ng-show-bigpic").remove();
					_isshow = false;
					_index = -1
				};
				var _ulObj = _ItemObj.find("ul");
				var _isshow = false;
				var _index = -1;
				var _isHide = true;
				_ulObj
						.children("li")
						.each(
								function(idx) {
									$(this)
											.hover(
													function(e) {
														stopBubble(e);
														_isHide = false;
														var _This = $(this);
														_ulObj
																.find(
																		"div.pic-hover")
																.removeClass(
																		"current")
																.hide();
														if (_index != idx) {
															_isshow = false
														} else {
															$(this)
																	.find(
																			"div.pic-hover")
																	.addClass(
																			"current")
																	.show();
															_isshow = true;
															return
														}
														var _picHover = _This
																.find(
																		"div.pic-hover")
																.show();
														_picHover
																.unbind("click")
																.bind(
																		"click",
																		function(
																				e) {
																			stopBubble(e);
																			_index = idx;
																			$(
																					"body")
																					.find(
																							"div.ng-show-bigpic")
																					.remove();
																			var _bigPic = $('<div class="ng-show-bigpic" style="display:none;"><img src="'
																					+ $img
																					+ _This
																							.attr("pic")
																					+ '"></div>');
																			$(
																					"body")
																					.append(
																							_bigPic);
																			_bigPic
																					.hover(
																							function() {
																								_isHide = false
																							},
																							function() {
																								_isHide = true;
																								setTimeout(
																										function() {
																											if (_isHide) {
																												initPicFun()
																											}
																										},
																										800)
																							})
																					.bind(
																							"click",
																							function(
																									e) {
																								stopBubble(e)
																							});
																			var _left = _This
																					.offset().left
																					- (_bigPic
																							.width() - _This
																							.width())
																					/ 2;
																			var _top = _This
																					.offset().top
																					+ _This
																							.height()
																					+ 10;
																			if (_isshow) {
																				_isshow = false;
																				$(
																						this)
																						.removeClass(
																								"current");
																				_bigPic
																						.hide();
																				_index = -1
																			} else {
																				_isshow = true;
																				$(
																						this)
																						.addClass(
																								"current");
																				_bigPic
																						.css(
																								{
																									left : +_left,
																									top : +_top
																								})
																						.show()
																			}
																		})
													}, function() {
													})
								});
				_ulObj.hover(function() {
				}, function() {
					_isHide = true;
					setTimeout(function() {
						if (_isHide) {
							initPicFun()
						}
					}, 800)
				});
				$("body").bind("click", function() {
					initPicFun()
				});
				_ItemObj
						.find("a.xianmu")
						.each(
								function() {
									var _BtnSmile = $(this);
									var _HitsVal = parseInt(_BtnSmile
											.attr("num"));
									var _PostID = _BtnSmile.attr("postid");
									var showClickedFun = function() {
										var _TsObj = $('<b class="has-heart">\u5df2\u7fa1\u6155</b>');
										_BtnSmile.append(_TsObj);
										_TsObj.fadeTo(2000, 0, function() {
											_TsObj.remove()
										})
									};
									var clickFun = function() {
										if (_PostID <= 0) {
											return
										}
										$
												.ajax({
													url : "/shareShow/upShareInfo.action",
													data : "shareId=" + _PostID,
													success : function(B) {
														if (B == "true") {
															_CKHits = _CKHits
																	+ _PostID
																	+ ",";
															SetCookieByExpires(
																	_Cookie,
																	_CKHits, 1);
															animateFun()
														}
													}
												});
										var animateFun = function() {
											_BtnSmile.addClass("xianmu-click");
											var _imgObj = _BtnSmile
													.children("img");
											var _width = _imgObj.width();
											var _height = _imgObj.height();
											var _left = _imgObj.parent()
													.offset().left + 14;
											var _top = _imgObj.parent()
													.offset().top;
											_imgObj.hide();
											var box = $(
													'<img style="display: none" src='
															+ _imgObj
																	.attr("src")
															+ ">").prependTo(
													"body");
											box.css({
												position : "absolute",
												left : _left + "px",
												top : _top + "px",
												width : _width,
												height : _height,
												"z-index" : 9999
											}).show();
											box
													.animate(
															{
																width : _width * 2,
																height : _height * 2,
																left : _left
																		- _width
																		/ 2,
																top : _top
																		- _height
																		/ 2,
																opacity : 0
															},
															700,
															function() {
																box.remove();
																_BtnSmile
																		.children(
																				"em")
																		.html(
																				_HitsVal + 1);
																_BtnSmile
																		.addClass("xianmu-past")
															})
										}
									};
									if (_CKHits.indexOf("," + _PostID + ",") >= 0) {
										_BtnSmile.bind("click", function() {
											showClickedFun()
										}).addClass("xianmu-past")
									} else {
										_BtnSmile.bind("click", function() {
											if (_CKHits.indexOf("," + _PostID
													+ ",") >= 0) {
												showClickedFun();
												return
											}
											clickFun()
										})
									}
								});
				return _ItemObj
			};
			var _Cookie = "postHits";
			var _CKHits = getCookie(_Cookie);
			if (_CKHits == null || _CKHits == "") {
				_CKHits = ","
			}
			var GetListDataFun = function() {
				if (_isLoaded) {
					return
				}
				_isLoaded = true;
				$("#pagination2").pagination(resultCount, {
					current_page : pageNo,
					prev_text : "\u4e0a\u4e00\u9875",
					next_text : "\u4e0b\u4e00\u9875",
					num_display_entries : 5,
					num_edge_entries : 1,
					link_to : "",
					prev_show_always : false,
					next_show_always : false,
					items_per_page : 20,
					callback : pageselectCallback2
				});
				function pageselectCallback2(pageNo) {
					if (_PostListCache["page" + pageNo] != null) {
						_PostObj.find("div.ng-share-wrapper").empty().append(
								getEventObj(_PostListCache["page" + pageNo]))
					} else {
						$
								.ajax({
									url : "/shareShow/productInfoShareListByProductId.action",
									data : "id=" + _GoodsID + "&pageNo="
											+ pageNo,
									beforeSend : loading2,
									success : function(Z) {
										if (Z.length > 0) {
											_PostObj
													.find(
															"div.ng-share-wrapper")
													.before(
															'<div class="total">\u672c\u5546\u54c1\u5df2\u6709<span class="gray6">'
																	+ resultCount
																	+ "</span>\u4f4d\u5e78\u8fd0\u7528\u6237\u6652\u5355 </div>");
											var listItems = Z;
											var _html = "";
											for (var i = 0; i < listItems.length; i++) {
												_html += '<div class="ng-share-detail clearfix">';
												_html += '<div class="ng-share-pic">';
												_html += '<a href="/u/'
														+ listItems[i].userId
														+ '.html" type="showCard" uweb="'
														+ listItems[i].userId
														+ '"  target="_blank">';
												_html += '<img src="'
														+ listItems[i].userFace
														+ '" alt="" width="80" height="80" /></a>';
												_html += "</div>";
												_html += '<div class="ng-share-con">';
												_html += '<div class="name-line">';
												_html += '<a href="/u/'
														+ listItems[i].userId
														+ '.html" target="_blank" rel="nofollow" class="u-name" >'
														+ listItems[i].userName
														+ "</a>";
												_html += '<span class="u-time">'
														+ listItems[i].shareDate
														+ "</span>";
												_html += "</div>";
												_html += '<div class="u-data">';
												_html += '<span class="u-num">\u7b2c<span>'
														+ listItems[i].productPeriod
														+ "</span>\u4e91\u6652\u5355</span>";
												_html += '<a href="/shareShow/'
														+ listItems[i].uid
														+ '.html" class="u-show" target="_blank">'
														+ listItems[i].shareTitle
														+ "</a>";
												_html += "</div>";
												_html += '<div class="share-info">';
												_html += '<p><a href="/shareShow/'
														+ listItems[i].uid
														+ '.html"  target="_blank">'
														+ listItems[i].shareContent
																.substring(0,
																		150)
														+ (listItems[i].shareContent.length > 150 ? "..."
																: "")
														+ "</a></p>";
												_html += "</div>";
												_html += '<div class="pic-list-wrap">';
												_html += '<ul class="pic-list clearfix">';
												var goodsPic = listItems[i].shareimageList;
												var _picLen = goodsPic.length > 5 ? 5
														: goodsPic.length;
												for (var j = 0; j < _picLen; j++) {
													_html += "<li pic=/UserPost/Big/"
															+ goodsPic[j].images
															+ ">";
													_html += "<span>";
													_html += '<img width="71px" height="71px" src="/Images/loading71.gif" src2="'
															+ $img
															+ "/UserPost/Small/"
															+ goodsPic[j].images
															+ '" /></span>';
													_html += '<div class="pic-hover transparent-png" style="display:none;"></div>';
													_html += "</li>"
												}
												_html += "</ul>";
												_html += '<div class="talk-wrap">';
												_html += '<a href="javascript:;" num=\''
														+ listItems[i].upCount
														+ "' postid='"
														+ listItems[i].uid
														+ '\' class="xianmu">';
												_html += '<i class="transparent-png"></i>';
												_html += "\u7fa1\u6155(<em>"
														+ listItems[i].upCount
														+ "</em>)";
												_html += '<img class="transparent-png" src="/Images/xin.png">';
												_html += "</a>";
												_html += '<a rel="nofollow" href="/shareShow/'
														+ listItems[i].uid
														+ '.html" target="_blank" class="pinglun">';
												_html += '<i class="transparent-png"></i>';
												_html += "\u8bc4\u8bba(<em>"
														+ listItems[i].replyCount
														+ "</em>)";
												_html += "</a>";
												_html += "</div>";
												_html += "</div>";
												_html += "</div>";
												_html += '<div class="clear"></div>';
												_html += "</div>"
											}
											var _ItemObj = getEventObj(_html);
											_PostObj.find(
													"div.ng-share-wrapper")
													.empty().append(_ItemObj);
											loadImgFun();
											_PostListCache["page" + pageNo] = _PostObj
													.find(
															"div.ng-share-wrapper")
													.html();
											var _stop = _InitMenuTop;
											$("body,html").animate({
												scrollTop : _stop
											}, 0);
											_isLoaded = false
										} else {
											if (curMenuIndex > 0) {
												_PostObj
														.html('<div class="ng-share-header" style="display:none;"><span class="title">\u5546\u54c1\u6652\u5355</span></div><div class="null-retips-wrapper"><div class="gth-icon transparent-png"></div><span>\u6682\u65e0\u6652\u5355\u8bb0\u5f55\u54e6\uff01</span></div>')
											} else {
												_PostObj
														.html('<div class="ng-share-header"><span class="title">\u5546\u54c1\u6652\u5355</span></div><div class="null-retips-wrapper"><div class="gth-icon transparent-png"></div><span>\u6682\u65e0\u6652\u5355\u8bb0\u5f55\u54e6\uff01</span></div>')
											}
										}
									}
								})
					}
					if (curMenuIndex > 0) {
						_PostObj.find(".ng-share-header").hide()
					} else {
						_stop = _PostObj.find(".ng-share-header").offset().top
					}
				}
			};
			this.initData = function() {
				GetListDataFun()
			}
		};
		if (!_IsEnd) {
			CBLRecordFun = new showAllBuyListFun()
		}
		CBLPageFun = new showPostListFun();
		$("#ul_menu").children("li").each(function(idx) {
			$(this).bind("click", function() {
				showMenuFun(idx);
				$("#div_menu").removeAttr("style").attr("fixed", "0");
				if ((_IsEnd && idx == 1) || (!_IsEnd && idx == 2)) {
					loadImgFun()
				}
			})
		});
		var floatMenuFun = function() {
			if (curMenuIndex > 0) {
				$("#btnAdd2Card").hide();
				return
			}
			var _sTop = $(document).scrollTop();
			var _mTop = _InitMenuTop;
			var _pTop = $("#div_postlist").offset().top;
			var _rTop = $("#div_allrecord").offset().top;
			var _liObj = $("#ul_menu").children("li");
			var _mObj = $("#div_menu");
			if (_sTop > _mTop) {
				_mObj.css({
					position : "fixed",
					top : 0,
					marginTop : 0,
					"z-index" : 999
				}).attr("fixed", "1");
				if (_liObj.length == 3) {
					if (_sTop > (_rTop - 40)) {
						_liObj.eq(0).removeClass("current");
						_liObj.eq(1).addClass("current");
						_liObj.eq(2).removeClass("current")
					} else {
						_liObj.eq(0).addClass("current");
						_liObj.eq(1).removeClass("current");
						_liObj.eq(2).removeClass("current")
					}
					if (_sTop > (_pTop - 40)) {
						_liObj.eq(0).removeClass("current");
						_liObj.eq(1).removeClass("current");
						_liObj.eq(2).addClass("current")
					}
				} else {
					if (_sTop > (_pTop - 40)) {
						_liObj.eq(0).removeClass("current");
						_liObj.eq(1).addClass("current")
					} else {
						_liObj.eq(0).addClass("current");
						_liObj.eq(1).removeClass("current")
					}
				}
				$("#btnAdd2Card").show()
			} else {
				$("#btnAdd2Card").hide();
				_mObj.removeAttr("style").attr("fixed", "0")
			}
			if (CBLRecordFun != null) {
				if (_sTop >= (_rTop - 600)) {
					CBLRecordFun.initData()
				}
			}
			if (_sTop >= (_pTop - 500)) {
				CBLPageFun.initData()
			}
		};
		$(window).scroll(floatMenuFun);
		floatMenuFun();
		var bindProcessFun = function() {
			var _NumberArea = $("#divNumber");
			var _BuyNumObj = _NumberArea.find("input.input-num");
			var _DelObj = _NumberArea.find("a").eq(0);
			var _AddObj = _NumberArea.find("a").eq(1);
			var _ulQuick = _NumberArea.next("ul");
			var _BuyArea = $("#divBuy");
			var _BtnBuy = _BuyArea.find("a").eq(0);
			var _BtnCart = _BuyArea.find("a").eq(1);
			var _CodeQuantity = parseInt($("#CodeQuantity").html());
			var _CodeStock = parseInt($("#CodeLift").html());
			var _OldNum = parseInt(_BuyNumObj.val());
			var _imgObj = $("#imgGoodsPic");
			var _changeTipObj = _NumberArea.parent().find("div.mine-prob");
			var _sltChange = null;
			var _Ptn = /^\d+$/;
			var _IsLoadPlJs = false;
			var showBtnState = function() {
				if (_LimitBuy > 0) {
					if (_CanBuy < _CodeStock) {
						_CodeStock = _CanBuy
					}
				}
				if (_CodeStock == 0) {
					_DelObj.addClass("cur");
					_AddObj.addClass("cur")
				} else {
					if (_OldNum == 1) {
						_DelObj.addClass("cur");
						if (_CodeStock > 1) {
							_AddObj.removeClass("cur")
						}
					} else {
						if (_OldNum == _CodeStock) {
							_AddObj.addClass("cur");
							if (_CodeStock > 1) {
								_DelObj.removeClass("cur")
							}
						} else {
							_DelObj.removeClass("cur");
							_AddObj.removeClass("cur")
						}
					}
				}
			};
			showBtnState();
			if (_LimitBuy > 0 && _CanBuy == 0) {
				_BuyNumObj.attr("disabled", true);
				_BtnBuy.addClass("consume-end");
				_BtnCart.addClass("consume-addend");
				return
			}
			var formatPercent = function(num, total) {
				var intpart, pointpart, newPointPart = "";
				var val = String(num * 100 / total);
				if (val.indexOf(".") == -1) {
					intpart = val;
					pointpart = "00"
				} else {
					intpart = val.substring(0, val.indexOf("."));
					pointpart = val.substring(val.indexOf(".") + 1) + "0"
				}
				var _iszore = true;
				for (var i = 0; i < pointpart.length; i++) {
					var character = pointpart.substring(i, i + 1);
					newPointPart += character;
					if (character != "0") {
						_iszore = false;
						if (i > 0) {
							break
						}
					}
				}
				if (_iszore) {
					return intpart + "%"
				}
				return intpart + "." + newPointPart + "%"
			};
			var showResult = function(_Num) {
				if (_Num == "") {
					return
				}
				if (!_Ptn.test(_Num)) {
					_BuyNumObj.val("1")
				} else {
					if (_LimitBuy > 0 && _CanBuy < _CodeStock) {
						_CodeStock = _CanBuy
					}
					_Num = parseInt(_Num);
					if (_Num <= 0) {
						_OldNum = 1;
						_BuyNumObj.val("1")
					} else {
						if (_Num >= _CodeStock) {
							_OldNum = _CodeStock;
							_BuyNumObj.val(_CodeStock)
						} else {
							_OldNum = _Num;
							_BuyNumObj.val(_Num)
						}
					}
				}
				var _tmpNum = _Num > 0 ? _Num : 1;
				if (_tmpNum > _CodeStock) {
					_tmpNum = _CodeStock
				}
				if (_sltChange != null) {
					clearTimeout(_sltChange);
					_sltChange = null
				}
				_changeTipObj.html(
						'<span class="txt">\u83b7\u5f97\u673a\u7387'
								+ formatPercent(_tmpNum, _CodeQuantity)
								+ "<i></i></span>").show(10, function() {
					_sltChange = setTimeout(function() {
						_changeTipObj.fadeOut("slow");
						_sltChange = null
					}, 3000)
				});
				showBtnState()
			};
			var changeCodeNum = function(type) {
				_ulQuick.children("li").removeClass("current");
				var _Num = _BuyNumObj.val();
				if (_Ptn.test(_Num)) {
					if (type == "add") {
						if (_Num < _CodeStock) {
							_Num++
						}
					} else {
						if (_Num > 1) {
							_Num--
						}
					}
					showResult(_Num)
				}
			};
			var add2CartFun = function(_cartObj) {
				var _Num = _BuyNumObj.val();
				var _Ptn = /^\d+$/;
				if (_Ptn.test(_Num)) {
					$
							.ajax({
								url : "/list/isStatus.action",
								data : "id=" + _GoodsID,
								success : function(data) {
									if (data == "false") {
										showFailFun(
												"\u554a\u54e6\uff01\uff01\u5269\u4e0b\u7684\u88ab\u62a2\u5149\u4e86\uff01",
												function() {
													loction.reload()
												})
									} else {
										var count = parseInt(data);
										var codeid = _GoodsID;
										var json = getCookie("products");
										if (json == null || json == "") {
											var val = "[{'pId':" + codeid
													+ ",'num':" + _Num + "}]";
											SetCookieByExpires("products", val,
													1)
										} else {
											var flag = false;
											json = eval("(" + json + ")");
											$
													.each(
															json,
															function(n, value) {
																if (codeid == value.pId) {
																	value.num = (parseInt(value.num) + parseInt(_Num));
																	if ((parseInt(value.num) + parseInt(_Num)) > count) {
																		value.num = count
																	}
																	flag = true
																}
															});
											if (!flag) {
												json.push({
													pId : +codeid,
													num : _Num
												})
											}
											json = JSON.stringify(json);
											SetCookieByExpires("products",
													json, 1)
										}
										_IsCartChanged = true;
										showPlFlyFun()
									}
								},
								error : function() {
									showFailFun(
											"\u5bf9\u4e0d\u8d77\uff0c\u52a0\u5165\u5931\u8d25\uff01",
											function() {
												loction.reload()
											})
								}
							})
				}
				var showPlFlyFun = function() {
					var showFun = function() {
						showParabola(_cartObj, 1, _imgObj, function() {
							_InsertIntoCart()
						})
					};
					if (_IsLoadPlJs) {
						showFun()
					} else {
						$.getScript("/js/parabola.js?date=150129", function() {
							_IsLoadPlJs = true;
							showFun()
						})
					}
				}
			};
			var buyGoodsFun = function() {
				var _Num = _BuyNumObj.val();
				if (_Ptn.test(_Num)) {
					$
							.ajax({
								url : "/list/isStatus.action",
								data : "id=" + _GoodsID,
								success : function(data) {
									if (data == "false") {
										showFailFun(
												"\u554a\u54e6\uff01\uff01\u5269\u4e0b\u7684\u88ab\u62a2\u5149\u4e86\uff01",
												function() {
													loction.reload()
												})
									} else {
										var count = parseInt(data);
										var codeid = _GoodsID;
										var json = getCookie("products");
										if (json == null || json == "") {
											var val = "[{'pId':" + codeid
													+ ",'num':" + _Num + "}]";
											SetCookieByExpires("products", val,
													1)
										} else {
											var flag = false;
											json = eval("(" + json + ")");
											$
													.each(
															json,
															function(n, value) {
																if (codeid == value.pId) {
																	value.num = (parseInt(value.num) + parseInt(_Num));
																	if ((parseInt(value.num) + parseInt(_Num)) > count) {
																		value.num = count
																	}
																	flag = true
																}
															});
											if (!flag) {
												json.push({
													pId : +codeid,
													num : _Num
												})
											}
											json = JSON.stringify(json);
											SetCookieByExpires("products",
													json, 1)
										}
										location.href = $www
												+ "/mycart/index.html"
									}
								},
								error : function() {
									showFailFun(
											"\u5bf9\u4e0d\u8d77\uff0c\u52a0\u5165\u5931\u8d25\uff01",
											function() {
												loction.reload()
											})
								}
							})
				} else {
					showFailFun(
							"\u60a8\u8f93\u5165\u7684\u4eba\u6b21\u6709\u8bef\uff01",
							function() {
								_BuyNumObj.val("1")
							})
				}
			};
			_BuyNumObj.bind("keyup", function() {
				_ulQuick.children("li").removeClass("current");
				showResult(_BuyNumObj.val())
			}).mouseover(function() {
				$(this).focus().select()
			}).bind("blur", function() {
				if (_BuyNumObj.val().trim() == "") {
					_BuyNumObj.val("1")
				}
			});
			_ulQuick.children("li").bind("click", function() {
				$(this).addClass("current").siblings().removeClass("current");
				showResult($(this).html())
			});
			_DelObj.bind("click", function() {
				changeCodeNum("sub");
				return false
			});
			_AddObj.bind("click", function() {
				changeCodeNum("add");
				return false
			});
			_BtnBuy.bind("click", function() {
				buyGoodsFun();
				return false
			});
			_BtnCart.bind("click", function() {
				add2CartFun($(this));
				return false
			});
			$("#btnAdd2Card").bind("click", function() {
				add2CartFun($(this));
				return false
			})
		};
		var bindLotteryTimeFun = function() {
			$.getScript(skinDomain + "/js/goodsdetaillottery.js?date=141130",
					function() {
						startTimeOut();
						showMenuFun(1)
					})
		};
		var _DivMainObj = $("#divMain");
		var _ScrollObj;
		if ($("#li_more").length > 0) {
			var LoadPaneJs = function() {
				$
						.getScript(
								skinDomain
										+ "/js/jquery.jscrollpane.js?date=20150513",
								function() {
									$("#li_more")
											.bind(
													"click",
													function(e) {
														stopBubble(e);
														var _height = _DivMainObj
																.height();
														var _showcount = 0;
														var showMorePeriodFun = function() {
															this.TotalCount = 0;
															this.PageMax = 100;
															this.CurrentIndex = 1;
															this.PageCount = 0;
															var isLoadPeriod = false;
															var _SendData = {
																FIdx : 1,
																EIdx : this.PageMax,
																IsCount : 1,
																goodsID : _GoodsID,
																codeID : _CodeID
															};
															var GetListDataFun = function() {
																var getParaFun = function() {
																	var _Paras = "";
																	_Paras += "id="
																			+ _SendData.goodsID;
																	_Paras += "&codeID="
																			+ _SendData.codeID;
																	_Paras += "&pageNo="
																			+ _SendData.FIdx;
																	_Paras += "&pageSize="
																			+ _SendData.EIdx;
																	_Paras += "&IsCount="
																			+ _SendData.IsCount;
																	return _Paras
																};
																var callFun = function(
																		result) {
																	if (isLoadPeriod) {
																		return
																	}
																	isLoadPeriod = true;
																	if (result.length > 0) {
																		if (_SendData.isCount == 1) {
																			_SendData.isCount = 0;
																			CBLFun.TotalCount = result[0].spellbuyCount;
																			CBLFun.PageCount = parseInt(CBLFun.TotalCount
																					/ CBLFun.PageMax);
																			if (CBLFun.TotalCount
																					% CBLFun.PageMax > 0) {
																				CBLFun.PageCount++
																			}
																			if (CBLFun.PageCount < 1) {
																				CBLFun.PageCount = 1
																			}
																		}
																		if (CBLFun.TotalCount > 0) {
																			var _html = "";
																			var _listItems = result;
																			for (var i = 0; i < _listItems.length; i++) {
																				var item = _listItems[i];
																				if (item.status == 0) {
																					if (item.spellbuyProductId == _CodeID) {
																						_html += '<li class="current"><a href="/products/'
																								+ item.productId
																								+ '.html">\u7b2c'
																								+ item.productPeriod
																								+ '\u671f<b>\u8fdb\u884c\u4e2d<span class="dotting"></span></b></a></li>'
																					} else {
																						_html += '<li><a class="orange" href="/products/'
																								+ item.productId
																								+ '.html">\u7b2c'
																								+ item.productPeriod
																								+ '\u671f<b>\u8fdb\u884c\u4e2d<span class="dotting"></span></b></a></li>'
																					}
																				} else {
																					if (item.spellbuyProductId == _CodeID) {
																						_html += '<li class="current"><a href="/products/'
																								+ item.spellbuyProductId
																								+ '.html">\u7b2c'
																								+ item.productPeriod
																								+ "\u671f</a></li>"
																					} else {
																						_html += '<li><a href="/products/'
																								+ item.spellbuyProductId
																								+ '.html">\u7b2c'
																								+ item.productPeriod
																								+ "\u671f</a></li>"
																					}
																				}
																			}
																			if (CBLFun.CurrentIndex == 1) {
																				_ScrollObj
																						.html('<ul class="ng-pt-inner clearfix">'
																								+ _html
																								+ "</ul>")
																			} else {
																				_ScrollObj
																						.find(
																								"ul")
																						.append(
																								_html)
																			}
																			if (CBLFun.TotalCount > _showcount) {
																				var _bgTop = $("#ng_bg_top");
																				var _bgBottom = $(
																						"#ng_bg_bottom")
																						.show();
																				var _api = _ScrollObj
																						.jScrollPane({
																							verticalDragMinHeight : 15
																						});
																				_api
																						.unbind(
																								"scroll")
																						.bind(
																								"scroll",
																								function(
																										e) {
																									var _trackHeight = parseInt($(
																											".jspTrack",
																											_ScrollObj)
																											.css(
																													"height"));
																									var _dragHeight = parseInt($(
																											".jspDrag",
																											_ScrollObj)
																											.css(
																													"height"));
																									var _dragTop = parseInt($(
																											".jspDrag",
																											_ScrollObj)
																											.css(
																													"top"));
																									if (_dragHeight
																											+ _dragTop < _trackHeight) {
																										_bgTop
																												.show();
																										_bgBottom
																												.show()
																									} else {
																										if (_dragHeight
																												+ _dragTop >= (_trackHeight - 10)) {
																											_bgTop
																													.show();
																											_bgBottom
																													.hide();
																											CBLFun
																													.gotoPageIndex()
																										}
																									}
																									if (_dragTop == 0) {
																										_bgTop
																												.hide();
																										_bgBottom
																												.show()
																									}
																								});
																				_api
																						.unbind(
																								"mousewheel")
																						.bind(
																								"mousewheel",
																								function(
																										e,
																										delta) {
																									var dir = delta > 0 ? "Up"
																											: "Down";
																									var scrollTop = _api
																											.scrollTop();
																									var scrollHegiht = _api[0].scrollHeight;
																									var height = _api
																											.height();
																									if (scrollTop
																											+ height >= scrollHegiht
																											&& delta < 0) {
																										preventDefault(e)
																									} else {
																										if (scrollTop == 0
																												&& delta > 0) {
																											preventDefault(e)
																										}
																									}
																								})
																			}
																		}
																		isLoadPeriod = false
																	}
																};
																$
																		.ajax({
																			url : "/products/getGoodsPeriodPage.action",
																			data : getParaFun(),
																			success : function(
																					data) {
																				if (data.length > 0) {
																					callFun(data)
																				}
																			}
																		})
															};
															this.gotoPageIndex = function() {
																if (CBLFun.CurrentIndex >= CBLFun.PageCount) {
																	return
																}
																CBLFun.CurrentIndex++;
																_SendData.FIdx += 1;
																if (_SendData.EIdx > CBLFun.TotalCount) {
																	_SendData.EIdx = CBLFun.TotalCount
																}
																if (CBLFun.CurrentIndex > 1) {
																	_SendData.isCount = 0
																} else {
																	_SendData.isCount = 1
																}
																GetListDataFun()
															};
															this.initData = function() {
																_SendData.FIdx = 1;
																_SendData.EIdx = CBLFun.PageMax;
																_SendData.isCount = 1;
																GetListDataFun()
															}
														};
														var getHtmlFun = function() {
															var _html = '<div class="ng-show-past"><div class="ng-main clearfix"><div class="ng-period"><div class="ng-period-inner"><div class="select-wrap"><div class="input-wrapper"> <div class="label">\u76f4\u8fbe\u7b2c</div><div class="inp"><input id="txtPeriod" maxlength="7" value="\u8bf7\u8f93\u5165"></div><div class="unit">\u671f</div>  <a id="btnGo" href="javascript:;" class="fly ng-result-bg transparent-png"></a> </div></div><div id="div_ngpt" class="ng-pt" ><div class="ng-b-wait"></div></div><div id="ng_bg_bottom" class="ng-pt-bg" style="display:none;"></div><div id="ng_bg_top" class="ng-pt-bg ng-pt-top" style="display:none;"></div><a id="a_close" href="javascript:;" title="\u5173\u95ed" class="ng-frame-close ng-result-bg transparent-png">\u5173\u95ed</a></div></div></div></div>';
															return _html
														};
														var ReadyFun = function(
																showObj) {
															_ScrollObj = $(
																	"#div_ngpt",
																	showObj);
															var _closeBtn = $(
																	"#a_close",
																	showObj);
															var _goBtn = $(
																	"#btnGo",
																	showObj);
															var _txtPeriod = $(
																	"#txtPeriod",
																	showObj);
															_txtPeriod
																	.bind(
																			"keyup",
																			function() {
																				var _Tmp = /^[1-9]\d*/
																						.exec(_txtPeriod
																								.val());
																				_txtPeriod
																						.val((_Tmp == null || _Tmp == undefined) ? ""
																								: _Tmp)
																			})
																	.keydown(
																			function(
																					e) {
																				var _KeyCode = window.event ? event.keyCode
																						: e.keyCode;
																				if (_KeyCode == 13) {
																					_goBtn
																							.trigger("click")
																				}
																			})
																	.bind(
																			"focus",
																			function() {
																				if ($(
																						this)
																						.val() == "\u8bf7\u8f93\u5165") {
																					$(
																							this)
																							.val(
																									"")
																				}
																				$(
																						this)
																						.css(
																								"color",
																								"#666666");
																				$(
																						this)
																						.parent()
																						.parent()
																						.addClass(
																								"current")
																			})
																	.bind(
																			"blur",
																			function() {
																				if ($(
																						this)
																						.val() == "") {
																					$(
																							this)
																							.val(
																									"\u8bf7\u8f93\u5165");
																					$(
																							this)
																							.css(
																									"color",
																									"#bbbbbb")
																				}
																				$(
																						this)
																						.parent()
																						.parent()
																						.removeClass(
																								"current")
																			});
															var closeFun = function() {
																showObj
																		.animate(
																				{
																					marginTop : -1
																							* _height
																							+ "px"
																				},
																				{
																					queue : false,
																					duration : 400,
																					complete : function() {
																						_txtPeriod
																								.val("\u8bf7\u8f93\u5165");
																						_txtPeriod
																								.css(
																										"color",
																										"#bbbbbb")
																					}
																				});
																return false
															};
															_closeBtn
																	.click(function() {
																		closeFun()
																	});
															_DivMainObj
																	.bind(
																			"click",
																			function(
																					e) {
																				stopBubble(e)
																			});
															$("body")
																	.bind(
																			"click",
																			function() {
																				closeFun()
																			});
															_goBtn
																	.bind(
																			"click",
																			function() {
																				if (_txtPeriod
																						.val() == "\u8bf7\u8f93\u5165") {
																					return
																				}
																				var _period = parseInt(_txtPeriod
																						.val());
																				var _mostPeriod = parseInt($(
																						"#hidMostPeriod")
																						.val());
																				if (isNaN(_period)) {
																					_txtPeriod
																							.val("");
																					return
																				}
																				if (_period > 0
																						&& _period <= _mostPeriod) {
																					var callFun = function(
																							result) {
																						if (result.length > 0) {
																							if (result[0].spStatus == 0) {
																								location
																										.replace("/products/"
																												+ result[0].fkProductId
																												+ ".html")
																							} else {
																								location
																										.replace("/lotteryDetail/"
																												+ result[0].spellbuyProductId
																												+ ".html")
																							}
																						}
																					};
																					$
																							.get(
																									"/products/getGoodsPeriodInfo.action",
																									{
																										id : _GoodsID,
																										startDate : _period
																									},
																									function(
																											data) {
																										callFun(data)
																									})
																				} else {
																					_txtPeriod
																							.val("")
																				}
																			});
															_showcount = Math
																	.floor(_ScrollObj
																			.height() / 47) * 7;
															CBLFun = new showMorePeriodFun();
															CBLFun.initData()
														};
														var showDialoggFun = function() {
															var _ShowObj = _DivMainObj
																	.children("div.ng-show-past");
															if (_ShowObj.length == 0) {
																_DivMainObj
																		.prepend(getHtmlFun());
																_ShowObj = _DivMainObj
																		.children("div.ng-show-past");
																_ShowObj
																		.css(
																				{
																					"margin-top" : -1
																							* _height
																							+ "px",
																					height : _height
																							+ "px"
																				})
																		.animate(
																				{
																					marginTop : 0
																				},
																				400,
																				function() {
																					ReadyFun(_ShowObj)
																				})
															} else {
																_ShowObj
																		.animate(
																				{
																					marginTop : 0
																				},
																				400,
																				function() {
																				})
															}
														};
														showDialoggFun()
													})
								})
			};
			$.getScript(skinDomain + "/js/jquery.mousewheel.js?date=20150513",
					LoadPaneJs)
		}
		if (_CodeState == 2) {
			bindLotteryTimeFun()
		} else {
			bindProcessFun()
		}
	};
	var LoadAjaxJs = function() {
		var loadUserInfoJs = function() {
			var LoadPageJs = function() {
				var initParamsFun = function() {
					var showLimitTip = function(msg) {
						$("#span_tip").html(msg)
					};
					$
							.get(
									"/products/checkUserLimitBuy.action",
									"id=" + _GoodsID,
									function(result) {
										_IsLogined = true;
										if (result.code == 0) {
											_LimitBuy = result.codeLimitBuy;
											_myLimitSales = result.buyNum;
											_CanBuy = _LimitBuy - _myLimitSales;
											var _msg = '<div class="xg-tips"><i></i>\u9650\u8d2d<span>'
													+ _LimitBuy
													+ "</span>\u4eba\u6b21</div>";
											if (_CanBuy > 0
													&& _myLimitSales > 0) {
												_msg = '<div class="xg-tips"><i></i>\u9650\u8d2d<span>'
														+ _LimitBuy
														+ "</span>\u4eba\u6b21\uff0c\u60a8\u5df2\u53c2\u4e0e"
														+ _myLimitSales
														+ "\u4eba\u6b21</div>"
											}
											showLimitTip(_msg)
										} else {
											if (result.code == -10) {
												_IsLogined = false;
												_myLimitSales = 0;
												_CanBuy = _LimitBuy;
												if (_LimitBuy > 0) {
													showLimitTip('<div class="xg-tips"><i></i>\u9650\u8d2d<span>'
															+ _LimitBuy
															+ "</span>\u4eba\u6b21</div>")
												}
											} else {
												if (result.code == -6) {
													_myLimitSales = _LimitBuy;
													_CanBuy = 0;
													showLimitTip('<div class="xg-tips"><i></i>\u9650\u8d2d<span>'
															+ _LimitBuy
															+ "</span>\u4eba\u6b21\uff0c\u60a8\u53c2\u4e0e\u4eba\u6b21\u5df2\u8fbe\u4e0a\u9650</div>")
												} else {
													if (result.code == -5) {
													} else {
														if (result.code == -4) {
														}
													}
												}
											}
										}
										BindEvents()
									})
				};
				if (_LimitBuy > 0) {
					initParamsFun()
				} else {
					BindEvents()
				}
			};
			$.getScript(skinDomain + "/js/userinfofun.js?date=20150214",
					LoadPageJs)
		};
		$
				.getScript(skinDomain + "/js/ajaxfun.js?date=20150213",
						loadUserInfoJs)
	};
	$.getScript(skinDomain + "/js/poplogin.js?date=20150213", LoadAjaxJs);
	$(".jqzoom").imagezoom();
	$("#mycarousel li").eq(0).addClass("current");
	var T = $("#onload");
	$("#mycarousel li").hover(
			function() {
				$(this).addClass("current").siblings().removeClass("current");
				T.show();
				$(".jqzoom").attr("src", $(this).find("img").attr("big")).load(
						function() {
							T.hide()
						});
				$(".jqzoom").attr("rel", $(this).find("img").attr("big"))
			});
	function SetCookie(name, value) {
		document.cookie = name + "=" + escape(value)
				+ ";id=1ypg;path=/;domain=" + $domain
	}
	function SetCookieByExpires(name, value, date) {
		var Days = date;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value)
				+ ";id=1ypg;path=/;expires=" + exp.toGMTString() + ";domain="
				+ $domain
	}
	function getCookie(name) {
		var arr = document.cookie.match(new RegExp("(^| )" + name
				+ "=([^;]*)(;|$)"));
		if (arr != null) {
			return unescape(arr[2])
		}
		return null
	}
	function delCookie(name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = getCookie(name);
		if (cval != null) {
			document.cookie = name + "=" + cval + ";id=1ypg;path=/;expires="
					+ exp.toGMTString() + ";domain=" + $domain
		}
	}
});
