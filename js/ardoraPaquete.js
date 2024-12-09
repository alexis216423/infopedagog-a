//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var indice, indiceMul, taboaContidos, maxIndice, menuLateral, menuActividades, anchoContidoIni,horaInicio, taboaIntentos;
var isListen=false;let speech=new SpeechSynthesisUtterance();
var startDate;
function inicia(){
$("#botonPechar").keydown(function(e){if (e.which!=9){PechaVentana();}});$("#suggestPost").keydown(function(e){if (e.which!=9){$("#suggestPost").click();}})
$("#suggestPost").click(function() {
window.open("avalia/avalia.htm","width=800,height=600,scrollbars='");
});
var data=new Date();//1
horaInicio=String(data.getHours()).padStart(2, '0')+":"+String(data.getMinutes()).padStart(2, '0')+":"+String(data.getSeconds()).padStart(2, '0')+" h";
   taboaIntentos=new Array();
   menuLateral='<h1> </h1><a class="lista" href="menuFiles/1ml_24ac41c7-280a-4ad6-93c3-a40fd9011582.jpeg" target="_blank">D</a>';
   menuActividades='<h2>ACTIVIDADES</h2><table width="150" border="0"><tr><td><p><a href="javascript:irA(0)" title="COLORES"><strong>1</strong></a></p></td><td><p><a href="javascript:irA(1)" title="NÚMEROS"><strong>2</strong></a></p></td><td><p><a href="javascript:irA(2)" title="ROMPECABEZAS"><strong>3</strong></a></p></td></tr></table>';
   if (window.opener == null){
      indice=0;
      }else{
      if (window.opener.indice == null){
         indice=0;
      }else{
         indice=window.opener.indice;
      }
   }
   maxIndice=2;
	taboaContidos=new Array();
taboaContidos[0]=new act("COLORES","COLORES","","<object class='ardobject' width='100%' height='420' type='text/html' data='COLOR/COLOR.htm'></object>",true,"",true,false,false);
taboaContidos[1]=new act("NÚMEROS","NÚMEROS","","<object class='ardobject' width='100%' height='420' type='text/html' data='N__MEROS/N__MEROS.htm'></object>",true,"",true,false,false);
taboaContidos[2]=new act("ROMPECABEZAS","ROMPECABEZAS","","<object class='ardobject' width='100%' height='420' type='text/html' data='ROMPECABEZAS/ROMPECABEZAS.htm'></object>",true,"",true,false,false);
document.getElementById("botonAdiante").href="javascript:avanza()";
document.getElementById("botonAtras").href="javascript:retrocede()";
document.getElementById("botonAxuda").target="_blank";
anchoContidoIni=document.getElementById("areaContido").style.width;
if (doLMSGetValue( "cmi.core.lesson_status" ) == "not attempted"){
   doLMSSetValue( "cmi.core.lesson_status" , "incomplete");
   startDate = new Date().getTime();
   doLMSCommit();
}
//2
actualiza();
$(window).on("resize",function(){do_responsive();});
}
$( document ).ready(function() {
inicia();
$(".svgico").css("fill","#FF9933");$(".svgico").css("cursor","pointer");
$("#listenBut path").css("stroke","#FF9933");
$("#aumentarFuente path").css("stroke","#FF9933");
$("#restablecerFuente path").css("stroke","#FF9933");
$("#disminuirFuente path").css("stroke","#FF9933");
$("#fontBut path").css("stroke","#FF9933");
$("#b_traduce path").css("stroke","#FF9933");
$("#b_access path").css("stroke","#FF9933");
$("#listenBut,#aumentarFuente,#restablecerFuente,#disminuirFuente,#fontBut,#b_traduce,#b_access").hover(function(){$(this).css("fill", "#CCCCFF");$(this).find("path").css("stroke", "#CCCCFF");}, function(){$(this).css("fill", "#FF9933");$(this).find("path").css("stroke", "#FF9933");});
if (colorToRgb($("#botons").css("background-color")) === colorToRgb($(".svgico").css("fill"))) {var cor=$("#menu li a").css("color");cor = (cor !== undefined) ? cor : "#CCCCFF";$("#b_access svg path").css({"stroke":cor, "stroke-width":25});$("#listenBut svg path").css({"fill":cor, "stroke-width":5});$("#aumentarFuente svg path").css("fill",cor);
$("#restablecerFuente svg path").css("fill",cor);$("#disminuirFuente svg path").css("fill",cor);$("#fontBut svg path").css("fill",cor);$("#b_traduce svg path").css("fill",cor);$("#b_access").hover(function() {$("#b_access svg path").css({"stroke":cor, "stroke-width":25});}, function() {$("#b_access svg path").css({"stroke":cor, "stroke-width":25});});}
document.getElementById("listenBut").addEventListener("click", function() {if (!isListen) {initRead();}else {stopRead();}});$("#listenBut").keydown(function(e) {if (e.which!=9) {if (!isListen) {initRead();}else {stopRead();}}});
});
function colorToRgb(color) {var fakeDiv = $("<div>").css("color", color).appendTo("body");var computedColor = getComputedStyle(fakeDiv[0]).color;fakeDiv.remove();return computedColor;}
function initRead() {var textoParaLeer=obtenerTextoSeleccionado();if (!textoParaLeer){var objDoc=document.querySelector('.ardobject').contentDocument;if (objDoc) {textoParaLeer = objDoc.body.innerText;} else {textoParaLeer=document.body.innerText;}}
if (speechSynthesis.speaking) {speechSynthesis.cancel();};speech.text = textoParaLeer;speech.lang = document.documentElement.lang || "es-ES";speech.onend = function(event) {isListen=false;};speechSynthesis.speak(speech);isListen = true;}
function obtenerTextoSeleccionado() {var texto="";if (window.getSelection) {texto=window.getSelection().toString();} else
if (document.selection && document.selection.type != "Control") {texto=document.selection.createRange().text;};if (texto==="") {var objDoc=document.querySelector('.ardobject').contentDocument;if (objDoc) {if (objDoc.getSelection) {texto=objDoc.getSelection().toString();} else if (objDoc.selection && objDoc.selection.type!="Control") {texto=objDoc.selection.createRange().text;}}};return texto;}
function stopRead() {speechSynthesis.cancel();isListen=false;}
function do_responsive(){var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);var isTablet = /iPad|Android/i.test(navigator.userAgent) && !/Mobile/i.test(navigator.userAgent);var deviceType = "PC";if (isMobile && !isTablet) {deviceType = "Mobile";} else if (isTablet) {deviceType = "Tablet";}if (deviceType=="PC"){do_responsivePC()}if (deviceType=="Mobile"){do_responsiveMobile()}if (deviceType=="Tablet"){do_responsiveMobile()}}
function do_responsiveMobile(){$("body").css("width","");$("body").css("height","");$("body").css("transform-origin","0 0");$("body").css("transform","scale(1)");$("#header").css("transform-origin","0 0");$("#header").css("transform","scale(1)");$("#header").css("width","");$("#header").css("height","");$("#suggestPost").css("z-index",10);var ori="top left";if ($("#menu").css("float")=="right"){ori="top right"}
$("#menu").ready(function() {$("#menu").css("transform-origin",ori);$("#menu").css("transform","scale(1)");$("#menu").show();$("#m_v").remove();$("#m_l").remove();});
$("#areaContido").css("transform-origin","0 0");$("#areaContido").css("transform","scale(1)");$("#page").css("transform-origin","0 0");$("#page").css("transform","scale(1)");$("#page").css("height","");var ardact=$(".ardobject").contents().find("#ardoraAct");$(ardact).ready(function() {ardact.css("transform-origin","0 0");ardact.css("transform","scale(1)");});
var ardenu=$(".ardobject").contents().find("#ardoraEnu");ardenu.css("transform-origin","0 0");ardenu.css("transform","scale(1)");ardenu.css("width","");$("#footer").ready(function() {$("#footer").css("transform-origin","0 0");$("#footer").css("transform","scale(1)");$("#footer").css("position","relative");$("#footer").css("bottom","auto");$("#footer").css("width","");$("#footer").css("height","");});
var ardtab=$(".ardobject").contents().find("#ardoraTab");$(ardtab).ready(function() {$(ardtab).show();ardtab.append($(".ardobject").contents().find("#buttonOk"));$(".ardobject").contents().find("#buttonOk").css("margin-left",0);var ardv_tab=$(".ardobject").contents().find("#v_tab");$(ardv_tab).remove();var score_tab=$(".ardobject").contents().find("#score_tab");$(score_tab).remove();$(".ardobject").css("height","");});var sc=1;
if ($( window ).height()>$( window ).width()) {//V E R T I C A L == M O B I L E
$(ardact).ready(function() {$("body").css("width", "");$("body").css("transform-origin", "0 0");$("body").css("transform", "scale(1)");do_responsiveml("left");$("#menu").hide();$(ardtab).hide();$("#areaContido").width("");
var vmargin = 10 + parseInt($("body").css("margin-left")) + parseInt($("body").css("margin-right")) + parseInt($("#page").css("margin-right")) + parseInt($("#page").css("margin-left")) + parseInt($("#areaContido").css("margin-right")) + parseInt($("#areaContido").css("margin-left")) + parseInt($("#areaContido").css("padding-left")) + parseInt($("#areaContido").css("padding-right")) + parseInt($(ardact).css("padding-right")) + parseInt($(ardact).css("margin-right")) + parseInt($(ardact).css("padding-left")) + parseInt($(ardact).css("margin-left"));
sc = ($(window).width() - vmargin) / ($(ardact).width() + vmargin);$("body").width(($(window).width() - 10) / sc);$("body").height($(window).height() - 10 / sc);if ($("#m_v").width() * sc > 60) {$("#m_v").width(60 / sc);$("#m_v").height(60 / sc);$("#m_v svg").attr("width", 50 / sc);$("#m_v svg").attr("height", 50 / sc);};
$("#botonAdiante svg").attr("height", 48 / sc);$("#botonAdiante svg").attr("width", 48 / sc);$("#botonAtras svg").attr("height", 48 / sc);$("#botonAtras svg").attr("width", 48 / sc);$("#botonPechar svg").attr("height", 48 / sc);$("#botonPechar svg").attr("width", 48 / sc);$("#botonAxuda svg").attr("height", 48 / sc);$("#botonAxuda svg").attr("width", 48 / sc);
$("#page").height(($(window).height() - $("#header").height() - $("#footer").height() - 100) / sc);$("#areaContido").width(($("#page").width() + vmargin) / sc);$("body").css("transform-origin", "0 0");$("body").css("transform", "scale(" + sc.toString() + ")");$("#page").css("overflow", "hidden");var ardmain = $(".ardobject").contents().find("body");$(ardmain).append("<div id='v_tab'></div>");var ardv_tab = $(".ardobject").contents().find("#v_tab");
$(ardv_tab).css("clear", "both");$(ardv_tab).css("position", "inherit");$(ardv_tab).css("margin-left","40px");$(ardv_tab).css("padding-top", "20px");ardv_tab.append($(".ardobject").contents().find("#buttonOk"));$(".ardobject").contents().find("#buttonOk").css("position", "inherit");$(".ardobject").contents().find("#buttonOk").css("float", "right");$(ardtab).hide();$(ardv_tab).append("<div id='score_tab'></div>");$(ardv_tab).css("width", $("body").width() - 100);var score_tab = $(".ardobject").contents().find("#score_tab");
$(score_tab).css("width", "auto");$(score_tab).css("float", "left");$(".ardobject").height($("#page").height() - 40 - $(".ardobject").contents().find("#buttonOk").height());while ($(".ardobject").contents().find("#ardoraEnu").width() * sc > $(window).width() - 20) {$(".ardobject").contents().find("#ardoraEnu").width($(".ardobject").contents().find("#ardoraEnu").width() - 1);}
$(ardv_tab).width($(".ardobject").contents().find("#ardoraEnu").width() - vmargin);$(".ardobject").height($("#page").height() - $(".ardobject").contents().find("#ardoraEnu").height());$(".ardobject").width($("#page").width());$(ardmain).css("overflow", "hidden");$("#header").css("overflow", "hidden");});
}else{  //H O R I Z O N T A L == M O B I L E
$(ardact).ready(function() {$("body").css("width", "");$("body").css("transform-origin", "0 0");$("body").css("transform", "scale(1)");var hmargin = 10 + parseInt($("body").css("margin-top")) + parseInt($("body").css("margin-bottom"));
var vmargin = 10 + parseInt($("body").css("margin-left")) + parseInt($("body").css("margin-right")) + parseInt($("#page").css("margin-right")) + parseInt($("#page").css("margin-left")) + parseInt($("#areaContido").css("margin-right")) + parseInt($("#areaContido").css("margin-left")) + parseInt($("#areaContido").css("padding-left")) + parseInt($("#areaContido").css("padding-right")) + parseInt($(ardact).css("padding-right")) + parseInt($(ardact).css("margin-right")) + parseInt($(ardact).css("padding-left")) + parseInt($(ardact).css("margin-left"));
sc = $(window).height() / $("body").height();$("body").width(($(window).width() - 10) / sc);$("body").height($(window).height() -10/ sc);$("#botonAdiante svg").attr("height", 28 / sc);$("#botonAdiante svg").attr("width", 28 / sc);$("#botonAtras svg").attr("height", 28 / sc);$("#botonAtras svg").attr("width", 28 / sc);
$("#botonPechar svg").attr("height", 28 / sc);$("#botonPechar svg").attr("width", 28 / sc);$("#botonAxuda svg").attr("height", 28 / sc);$("#botonAxuda svg").attr("width", 28 / sc);$("#page").height(($(window).height() - $("#header").height() - $("#footer").height()) / sc);$("body").css("transform-origin", "0 0");
$("body").css("transform", "scale(" + sc.toString() + ")");while ($("body").width() * sc < $(window).width()) {$("body").width($("body").width() + 1);};$("#page").css("overflow", "hidden");})}
}
function do_responsivePC(){var ori="top left";if ($("#menu").css("float")=="right"){ori="top right"}$("#contidoAct").css("transform-origin","0 0");$("#contidoAct").css("transform","scale(1)");$("#areaContido").css("transform-origin","0 0");$("#areaContido").css("transform","scale(1)");$("#page").css("transform-origin","0 0");$("#page").css("transform","scale(1)");$("#page").css("height","");$("#header").css("transform-origin","0 0");$("#header").css("transform","scale(1)");
$("#footer").css("transform-origin","0 0");$("#footer").css("transform","scale(1)");$("#suggestPost").css("z-index",10);$("#menu").css("transform-origin",ori);$("#menu").css("transform","scale(1)");$("body").css("scale","");$("body").css("width","");$("body").css("height","");var ardact=$(".ardobject").contents().find("#ardoraAct");$(ardact).ready(function() {ardact.css("transform-origin","0 0");ardact.css("transform","scale(1)");});var ardenu=$(".ardobject").contents().find("#ardoraEnu");ardenu.css("transform-origin","0 0");ardenu.css("transform","scale(1)");ardenu.css("width","");
$("#menu").ready(function() {$("#menu").show();$("#m_v").remove();$("#m_l").remove();});$("#footer").ready(function() {$("#footer").css("position","relative");});var ardtab=$(".ardobject").contents().find("#ardoraTab");
$(ardtab).ready(function() {$(ardtab).show();ardtab.append($(".ardobject").contents().find("#buttonOk"));$(".ardobject").contents().find("#buttonOk").css("margin-left",0);var ardv_tab=$(".ardobject").contents().find("#v_tab");$(ardv_tab).remove();var score_tab=$(".ardobject").contents().find("#score_tab");$(score_tab).remove();$(".ardobject").css("height","");});var sc=1;$("body").css("transform-origin","0 0");$("body").css("transform","scale(1)");
if ($( window ).height()>$( window ).width()) {//V E R T I C A L
$(ardact).ready(function() {$("body").css("width", "");$("body").css("transform-origin", "0 0");$("body").css("transform", "scale(1)");do_responsiveml("left");$("#menu").hide();$(ardtab).hide();var vmargin=10+parseInt($("body").css("margin-left"))+parseInt($("body").css("margin-right"))+parseInt($("#page").css("margin-right"))+parseInt($("#page").css("margin-left"))+parseInt($("#areaContido").css("margin-right"))+parseInt($("#areaContido").css("margin-left"))+parseInt($("#areaContido").css("padding-left"))+parseInt($("#areaContido").css("padding-right"))+parseInt($(ardact).css("padding-right"))+parseInt($(ardact).css("margin-right"))+parseInt($(ardact).css("padding-left"))+parseInt($(ardact).css("margin-left"));
sc=($(window).width()-vmargin)/($(ardact).width()+vmargin);$("body").width(($(window).width()-10)/sc);$("body").height($(window).height()-10/sc);if ($("#m_v").width() * sc > 20) {$("#m_v").width(20/sc);$("#m_v").height(20/sc);$("#m_v svg").attr("width",15/sc);$("#m_v svg").attr("height",15/sc);};$("#page").height(($(window).height()-$("#header").height() - $("#footer").height())/sc);$("#areaContido").width(($("#page").width())/sc);
$("body").css("transform-origin", "0 0");$("body").css("transform", "scale(" + sc.toString() + ")");$("#page").css("overflow", "hidden");var ardmain = $(".ardobject").contents().find("body");$(ardmain).append("<div id='v_tab'></div>");var ardv_tab = $(".ardobject").contents().find("#v_tab");$(ardv_tab).css("clear", "both");$(ardv_tab).css("position", "inherit");$(ardv_tab).css("margin-left", "5px");$(ardv_tab).css("padding-top", "20px");ardv_tab.append($(".ardobject").contents().find("#buttonOk"));$(".ardobject").contents().find("#buttonOk").css("position", "inherit");$(".ardobject").contents().find("#buttonOk").css("float", "right");
$(ardv_tab).append("<div id='score_tab'></div>");$(ardv_tab).css("width", $("body").width()-100);var score_tab=$(".ardobject").contents().find("#score_tab");$(score_tab).css("width", "auto");$(score_tab).css("float", "left");$(".ardobject").height($("#page").height()-40-$(".ardobject").contents().find("#buttonOk").height());
while ($(".ardobject").contents().find("#ardoraEnu").width() * sc + vmargin > $(window).width()) {$(".ardobject").contents().find("#ardoraEnu").width($(".ardobject").contents().find("#ardoraEnu").width() - 1);};$(ardv_tab).width($(".ardobject").contents().find("#ardoraEnu").width()-vmargin);$(".ardobject").height($("#page").height()-$(".ardobject").contents().find("#ardoraEnu").height());$(ardmain).css("overflow", "hidden");$("#header").css("overflow", "hidden");});
}else{  //H O R I Z O N T A L
$(ardact).ready(function() {var menuw = $("#menu").width();var ardtab=$(".ardobject").contents().find("#ardoraTab");var hmargin=10+parseInt($("body").css("margin-top"))+parseInt($("body").css("margin-bottom"))+parseInt($("#page").css("margin-top")) + parseInt($("#page").css("margin-bottom"))+parseInt($("#areaContido").css("margin-top"))+parseInt($("#areaContido").css("margin-bottom"))+parseInt($("#areaContido").css("padding-top"))+parseInt($("#areaContido").css("padding-bottom"))+parseInt($(ardact).css("padding-top"))+parseInt($(ardact).css("margin-top"))+parseInt($(ardact).css("padding-bottom"))+parseInt($(ardact).css("margin-bottom"));
$("#areaContido").css("width", "");var nh = $(ardtab).height();if ($(ardact).height() > nh) {nh = $(ardact).height()}
if ($(ardact).width() + $(ardtab).width() + menuw >= $(window).width() + 10 || nh + $("#header").height() + $("#footer").height()+hmargin >= $(window).height()) { //R E D U C I R
sc=1;$(ardact).ready(function() {do_responsiveml("right");$("#menu").hide();var vmargin = 10 + parseInt($("body").css("margin-left")) + parseInt($("body").css("margin-right")) + parseInt($("#page").css("margin-right")) + parseInt($("#page").css("margin-left")) + parseInt($("#areaContido").css("margin-right")) + parseInt($("#areaContido").css("margin-left")) + parseInt($("#areaContido").css("padding-left")) + parseInt($("#areaContido").css("padding-right")) + parseInt($(ardact).css("padding-right")) + parseInt($(ardact).css("margin-right")) + parseInt($(ardact).css("padding-left")) + parseInt($(ardact).css("margin-left"));
while ((($(ardact).width() + $(ardtab).width() + menuw+vmargin) * sc > $(window).width() - 10) || ($("body").height() * sc > $(window).height() - hmargin)) {sc=sc-0.001;}
$("body").width(($(window).width() - 10) / sc);$("body").height($(window).height() - 10 / sc);$("#areaContido").width(($("#page").width()) / sc);$("body").css("transform-origin", "0 0");$("body").css("transform", "scale(" + sc.toString() + ")");while ($("body").width() * sc < $(window).width()) {$("body").width($("body").width() + 1);}
if ($("#m_v").width() * sc > 20) {$("#m_v").width(20 / sc);$("#m_v").height(20 / sc);$("#m_v svg").attr("width", 15 / sc);$("#m_v svg").attr("height", 15 / sc);};
while ($(".ardobject").contents().find("#ardoraEnu").width() * sc + vmargin > $(window).width()) {$(".ardobject").contents().find("#ardoraEnu").width($(".ardobject").contents().find("#ardoraEnu").width() - 1);};});
}else{ // A M P L I A R
sc=1;$(ardact).ready(function() {while((($(ardact).width()+$(ardtab).width()+menuw)*sc<$(window).width()-10)
&& ($("body").height()*sc<$(window).height()-hmargin) ){sc=sc+0.001;}$("body").css("transform-origin","0 0");$("body").css("transform","scale("+sc.toString()+")");while($("body").width()*sc>$(window).width()){$("body").width($("body").width()-1);}});}})
}}
function do_responsiveml(ori){$("#m_v").remove();if ((taboaContidos[indice].ml) || (taboaContidos[indice].ma)){var me_ori=document.getElementById("menu");var me_oricopy=me_ori.cloneNode(true);var col="#CCCCFF";var m_i='<svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Second menu</desc><path d="M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" stroke="'+col+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill:#f60;stroke:'+col+';stroke-opacity:1"/></svg>';
$("#page").append("<div id='m_v'>"+m_i+"</div>");if (ori=="right"){$("#m_v").css("right",5)}if (ori=="left"){$("#m_v").css("left",10)};$("#m_v").css({"width":"60px","height":"60px","position":"absolute","border":"solid","bottom":$("#footer").height()+10,"border-color":col,"border-radius": "10px","padding-left": "8px","cursor": "pointer","box-shadow": "rgba(50, 50, 50, 0.5) 2px 2px 2px","z-index":20});
$("#m_v").attr("tabindex","0");$("#m_v").on("touchstart click", function(event){$("#page").append("<div id='m_l'></div>");if (ori=="right"){$("#m_l").css({"right":0,"border-left": "solid","border-left-color":col,"border-left-width":"2px"});};if (ori=="left"){$("#m_l").css({"left":0,"border-right": "solid","border-right-color":col,"border-right-width":"2px"});}
document.getElementById("m_l").appendChild(me_oricopy);$(me_oricopy).css({"width": $("body").width()/2,"height": "100%"});
$("#m_l").css({"width":$(me_oricopy).width(),"height":"100%","position":"absolute","top":0,"backgroundColor":"white","z-index":50000});
var b_csvg='<svg alt="close menu" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6 6 12 12m0-12L6 18" stroke="'+col+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke:'+col+';stroke-opacity:1"/></svg>';
$("#m_l").append("<div id='close_m_l'>"+b_csvg+"<div>");if (ori=="right"){$("#close_m_l").css("left",5)};if (ori=="left"){$("#close_m_l").css("right",5)};$("#close_m_l").css({"width":"35px","height":"35px","position":"absolute","bottom":5,"cursor": "pointer"});
$("#close_m_l").attr("tabindex","0");$("#close_m_l").on("touchstart click", function(event){$("#m_l").remove();});$("#close_m_l").keydown(function(e){if (e.which!=9){$("#close_m_l").click();}});$("#menu a").css({"font-size":"20px","margin":"10px 0 10px 50px"});$("#menu h4").css({"display":"inline"});});$("#m_v").keydown(function(e){if (e.which!=9){$("#m_v").click();}});}}
function actualiza(){
   document.getElementById("tituloAct").innerHTML=taboaContidos[indice].descricion;
   document.getElementById("enunciadoAct").innerHTML=taboaContidos[indice].enunciado;
   document.getElementById("contidoAct").innerHTML=taboaContidos[indice].areaContido;
   document.getElementById("botonAdiante").style.visibility="hidden";
   document.getElementById("botonAtras").style.visibility="hidden";
   document.getElementById("botonAxuda").style.visibility="hidden";
   if (eval(document.getElementById("menu")) != null){document.getElementById("menu").style.visibility="hidden";}
   if (taboaContidos[indice].seg_ant){
      if (indice>0){
         document.getElementById("botonAtras").title=taboaContidos[indice-1].descricionUTF8;
         document.getElementById("botonAtras").style.visibility="visible";
      }
      if (indice<maxIndice){
         document.getElementById("botonAdiante").title=taboaContidos[indice+1].descricionUTF8;
         document.getElementById("botonAdiante").style.visibility="visible";
      }
   }
   if (taboaContidos[indice].mp){
      document.getElementById("menuPrincipal").style.visibility="visible";
   }
   else{
      document.getElementById("menuPrincipal").style.visibility="hidden";
   }
   if (taboaContidos[indice].bAxuda.length>0){
      document.getElementById("botonAxuda").href=taboaContidos[indice].bAxuda;
      document.getElementById("botonAxuda").style.visibility="visible";
   }
   if ((taboaContidos[indice].ml) || (taboaContidos[indice].ma)){
	   contido="";
	   document.getElementById("menu").style.height="auto";
      document.getElementById("areaContido").style.width=anchoContidoIni;
	   if (taboaContidos[indice].ml){ contido=menuLateral;}
	   if (taboaContidos[indice].ma){ contido=contido+menuActividades;}
	   document.getElementById("menu").innerHTML=contido;
	   document.getElementById("menu").style.visibility="visible";
   }
   else{
        if (eval(document.getElementById("menu")) != null){document.getElementById("menu").style.height="0px";}
        document.getElementById("areaContido").style.width="calc(100% - 30px)";
   }
doLMSSetValue( "cmi.core.lesson_location" , taboaContidos[indice].descricion);
var puntos=dameTotal();
if (puntos>10) {doLMSSetValue( "cmi.core.lesson_status" , "passed");}
else{doLMSSetValue( "cmi.core.lesson_status" , "failed");}
doLMSSetValue( "cmi.core.score.raw",puntos+"");
doLMSCommit();
var ardobject=document.querySelector('.ardobject');ardobject.addEventListener("load", function() {do_responsive();});
}
function avanza(){if (indice<maxIndice){indice++; actualiza();
}}
function irA(num){
indice=num;actualiza();
}
function recarga(){irA(indice);}
function retrocede(){indice--; actualiza();
}
function act( descricion, descricionUTF8, enunciado, areaContido,ma, bAxuda, seg_ant, mp, ml ) {this.descricion=descricion;this.descricionUTF8=descricionUTF8;
   this.enunciado=enunciado;this.areaContido=areaContido;this.mp=mp;this.ml=ml;this.ma=ma;this.seg_ant=seg_ant;this.bAxuda=bAxuda;}
function iniciaActividade(){
var data=new Date();//3
hI=String(data.getHours()).padStart(2, '0')+":"+String(data.getMinutes()).padStart(2, '0')+":"+String(data.getSeconds()).padStart(2, '0')+" h";
   var x=taboaIntentos.length;
   taboaIntentos[x]=new infoAct(indice,hI,0,"exec","xx:xx",0);
}
function iniciaActividadeMul(){
   indiceMul=indice;
var data=new Date();//4
hI=String(data.getHours()).padStart(2, '0')+":"+String(data.getMinutes()).padStart(2, '0')+":"+String(data.getSeconds()).padStart(2, '0')+" h";
   var x=taboaIntentos.length;
   taboaIntentos[x]=new infoAct(indice,hI,0,"exec","xx:xx",0);
}
function infoAct( ind, hinicio, intentos, estado, hfin, puntos){
	this.ind=ind;
	this.hinicio=hinicio;
	this.intentos=intentos;
	this.estado=estado;
	this.hfin=hfin;
this.puntos=puntos;
}
function actualizaInfoAct(puntos,intentos,estado){
var data=new Date();
hF=String(data.getHours()).padStart(2, '0')+":"+String(data.getMinutes()).padStart(2, '0')+":"+String(data.getSeconds()).padStart(2, '0')+" h";
	var x=taboaIntentos.length-1;
	var hI=taboaIntentos[x].hinicio;
	taboaIntentos[x]=new infoAct(indice,hI,intentos,estado,hF,puntos);
}
function actualizaInfoActMul(){
var data=new Date();
hF=String(data.getHours()).padStart(2, '0')+":"+String(data.getMinutes()).padStart(2, '0')+":"+String(data.getSeconds()).padStart(2, '0')+" h";
	var x=taboaIntentos.length-1;
	var hI=taboaIntentos[x].hinicio;
	taboaIntentos[x]=new infoAct(indiceMul,hI,0,"--",hF,0);
}
function PechaVentana(){window.close()}
function AbreCentrada(theURL,winName,features, myWidth, myHeight, isCenter,aNume) {
	if(window.screen)if(isCenter)if(isCenter=="true"){
      var myLeft = (screen.width-myWidth)/2;
      var myTop = (screen.height-myHeight)/2;
      features+=(features!='')?',':'';
      features+=',left='+myLeft+',top='+myTop;
    }
    window.open(theURL,winName,features+((features!='')?',':'')+'width='+myWidth+',height='+myHeight);
    indice=aNume;
}
function mostrar(capa){
var obj = document.getElementById(capa)
if(obj.style.display == "block"){
   obj.style.display = "none"
   document.getElementById("contenido").style.width="95%";
}else{
   obj.style.display = "block";
   document.getElementById("contenido").style.width="75%";
}}
function hideMenu(menu,contido,wC){var obj=document.getElementById(menu);var con=document.getElementById(contido);
if (obj.style.display=="block"){obj.style.display="none";con.style.width="95%";}
else{obj.style.display="block";con.style.width=wC;}}
function MM_preloadImages() {
   var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
   var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
   if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_swapImgRestore() {var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;}
function MM_findObj(n, d) { //v4.01
   var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
   d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
   if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
   for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
      if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
   var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
window.onunload = function() {
   var formattedTime = "00:00:00.0";
   if ( startDate != 0 ){
      var currentDate = new Date().getTime();
      var elapsedSeconds = ( (currentDate - startDate) / 1000 );
      formattedTime = convertTotalSeconds( elapsedSeconds );
   }
   var puntos=dameTotal();
if (puntos>10) {doLMSSetValue( "cmi.core.lesson_status" , "passed");}
else{doLMSSetValue( "cmi.core.lesson_status" , "failed");}
   doLMSSetValue( "cmi.core.score.raw",puntos+"");
   doLMSSetValue("cmi.core.session_time",formattedTime);
   doLMSFinish();
}
function convertTotalSeconds(ts){
   var Sec = (ts % 60); ts -= Sec; var tmp = (ts % 3600); ts -= tmp;
   if ( (ts % 3600) != 0 ) var Hour = "00" ;
   else var Hour = ""+ (ts / 3600);
   if ( (tmp % 60) != 0 ) var Min = "00";
   else var Min = ""+(tmp / 60);
   Sec=""+Sec
   Sec=Sec.substring(0,Sec.indexOf("."))
   if (Hour.length < 2)Hour = "0"+Hour;
      if (Min.length < 2)Min = "0"+Min;
      if (Sec.length <2)Sec = "0"+Sec;
         var rtnVal = Hour+":"+Min+":"+Sec;
         return rtnVal;
}
function dameTotal(){
  var cantos=0;
  for (z=0;z<3;z++){
     cantos=cantos+parseInt(damePuntuacion(z));
}
return cantos;
}
function damePuntuacion(num){
   var cantos=0;
   for (i=0;i<taboaIntentos.length;i++){
      if (parseInt(taboaIntentos[i].ind)==num){cantos=taboaIntentos[i].puntos;}
   }
   return cantos;
}
