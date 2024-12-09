//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=1;
var successes=0; successesMax=8; attempts=0; attemptsMax=2;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="'Times New Roman', Times, serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES PUEDES RECONOCER NÚMEROS "; messageTime="SE TERMINO TU TIEMPO "; messageError="FALLAS LA PRÓXIMA LO ARAS MUCHO MEJOR "; messageErrorG="FALLAS LA PRÓXIMA LO ARAS MUCHO MEJOR "; messageAttempts="SE TERMINARON LOS INTENTOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Tl9fTUVST1M="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>UNO</p>","<p>DOS</p>","<p>TRES</p>","<p>CUATRO</p>","<p>CINCO</p>","<p>SEIS</p>","<p>SIETE</p>","<p>OCHO</p>"];
var iL=["","","","","","","",""];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["","","","","","","",""]; ansRL=["Mw==","NQ==","Mg==","NA==","Ng==","Nw==","MQ==","MA=="];
var iR=["<div  align='center'><img alt='' src='N__MEROS_resources/media/ocho.png'></div>","<div  align='center'><img alt='' src='N__MEROS_resources/media/siete.png'></div>","<div  align='center'><img alt='' src='N__MEROS_resources/media/tres.png'></div>","<div  align='center'><img alt='' src='N__MEROS_resources/media/UNO.png'></div>","<div  align='center'><img alt='' src='N__MEROS_resources/media/cuatro.png'></div>","<div  align='center'><img alt='' src='N__MEROS_resources/media/dos.png'></div>","<div  align='center'><img alt='' src='N__MEROS_resources/media/cinco.png'></div>","<div  align='center'><img alt='' src='N__MEROS_resources/media/seis.png'></div>"];
var auR=[8,7,3,1,4,2,5,6];
colorText="#323B2E";colorButton="#CCCCFF";colorBack="#FFFFFF";colorSele="#FF9933";goURLNext=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
