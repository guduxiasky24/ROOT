$(document).ready(function(){var b=$("#resultCount").val();var a=0;var e=$("#hidPageUserID").val();$("#pagination").pagination(b,{current_page:a,prev_text:"\u4e0a\u4e00\u9875",next_text:"\u4e0b\u4e00\u9875",num_display_entries:5,num_edge_entries:1,link_to:"",prev_show_always:false,next_show_always:false,items_per_page:12,callback:c});function c(f){var g="/u/userFriendsAjaxPage.action?pageNo="+f+"&id="+e;$(".pageULEx").prepend('<li class="total_page" id="pageLoading"><img src="'+$img+'/Images/loding.gif" /></li>');$.ajax({url:g,type:"post",data:"json",beforeSend:d,success:function(k){$("#pageListItems").empty();if(b>0){$(".pageULEx").show();$(".pageULEx").prepend('<li class="total_page">\u9875\u6b21<i>'+(f+1)+"/"+Math.ceil(b/12)+"</i>&nbsp;&nbsp;\u5171<i>"+b+"</i>\u6761\u8bb0\u5f55</li>");for(var j=0;j<k.length;j++){var h="";h+='<li class=""><div class="friend-img"><a href="'+$www+"/u/"+k[j].userId+'.html"><img border="0" alt="'+k[j].userName+'" src="'+k[j].faceImg+'"></a></div>';h+='<div class="friend-info"><p class="friend-name"><a rel="nofollow" class="blue" href="'+$www+"/u/"+k[j].userId+'.html">'+k[j].userName+"</a></p>";h+='<p class="friend-class gray02">';if(k[j].experience<10000){h+='<span class="class-icon01"><s></s>'+$shortName+"\u5c0f\u5c06</span>"}else{if(k[j].experience<50000){h+='<span class="class-icon02"><s></s>'+$shortName+"\u5c11\u5c06</span>"}else{if(k[j].experience<100000){h+='<span class="class-icon03"><s></s>'+$shortName+"\u4e2d\u5c06</span>"}else{if(k[j].experience<500000){h+='<span class="class-icon04"><s></s>'+$shortName+"\u4e0a\u5c06</span>"}else{if(k[j].experience<1000000){h+='<span class="class-icon05"><s></s>'+$shortName+"\u5c11\u6821</span>"}else{if(k[j].experience<2000000){h+='<span class="class-icon06"><s></s>'+$shortName+"\u4e2d\u6821</span>"}else{if(k[j].experience<5000000){h+='<span class="class-icon07"><s></s>'+$shortName+"\u4e0a\u6821</span>"}}}}}}}h+='</p><p class="friend-intro gray02">'+k[j].signature+"</p></div></li>";$(h).appendTo("#pageListItems")}$("#pageLoading").hide()}else{$('<div class="tips-con"><i></i>TA\u8fd8\u6ca1\u6709\u6dfb\u52a0\u597d\u53cb\u54e6</div>').appendTo(".New-content");$(".pageULEx").hide()}}})}function d(){$("#pageLoading").show()}$.ajax({url:"/u/visitorsList.action?pageNo="+a+"&userId="+e,type:"get",date:"json",success:function(g){$("#visitors").empty();for(var f=0;f<g.length;f++){$('<dl class="clearfix sid-guest"><dt class="guest-pic"><a href="'+$www+"/u/"+g[f].userId+'.html" type="showCard" uweb="'+g[f].userId+'"><img width="50" height="50" border="0" alt="'+g[f].userName+'" src="'+g[f].faceImg+'"></a></dt><dd class="guest-con"><p class="sid-mane"><a rel="nofollow" class="blue" href="'+$www+"/u/"+g[f].userId+'.html" type="showCard" uweb="'+g[f].userId+'">'+g[f].userName+'</a></p><p class="sid-address gray02">'+g[f].ipLocation+'</p><p class="sid-time gray02">'+g[f].newDate+"</p></dd></dl>").appendTo("#visitors")}}})});
