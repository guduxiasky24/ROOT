(function(h){function e(a){}var f=document.body||document.getElementsByTagName("body")[0];e.prototype={constructor:e,init:function(a){this.options=a;this.iframe=g(this.options.iframeId)},open:function(a){if(!this.options){this.init(a)}this.setStyle(this.options.iframeId);this.iframe.style.display="block";f.style.overflowY="hidden"},setStyle:function(a,d){if(this.setStyleDone){return}var c=document.head||document.getElementsByTagName("head")[0],b=document.createElement("style"),d=d||"html,body{height:100%;}";b.type="text/css";if(b.styleSheet){b.styleSheet.cssText=d}else{b.appendChild(document.createTextNode(d))}c.appendChild(b);this.setStyleDone=true},close:function(){this.iframe.src="";this.iframe.style.display="none";f.style.overflowY=""},redirect:function(a){h.location.href=a},repay:function(){this.options.formId&&g(this.options.formId).click()},closepage:function(){this.iframe.src="";this.iframe.style.display="none";f.style.overflowY="";if(document.all){h.opener=null}h.open("","_top","");h.close();return false}};function g(a){return document.getElementById(a)}h.WYPLUS=new e()})(window);