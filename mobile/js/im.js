document.write("<style type='text/css'>"
    + ".ImTable *{padding:0px;margin:0px}"
    + ".ImTable{border-collapse:collapse;border:9px solid #0a74cc;background:#fff}"
    + ".ImTable h2{font-size:14px;margin-top:5px;color:#333}"
    + ".ImHeader{height:90px;background:url(images/im_01.png) no-repeat}"
    + ".ImRow0{margin:0px 11px;background:#fff;height:34px;line-height:34px;}"
    + ".ImRow1{margin:0 11px;height:34px;background:#fff;line-height:34px;}"
    + "a.im,a:hover.im{text-decoration:none; color:#333;padding-left:10px;}"
    + ".ImFooter{height:201px;background:url(images/im_04.png) no-repeat;}"
    + "</style>");
var __oran_top_offset = -260;
function __oran_kf_get(elmId) { return document.getElementById(elmId); }
function writeIm(textS, siteNm, topOffset) {
    __oran_top_offset = topOffset;
    var textCrumbs = textS.split(',');
    if (textCrumbs.length == 0) return;
    if (!siteNm) siteNm = "Oran";
    var rowStr = "<div style='position:fixed;_position:absolute;right:0px;width:140px;top:" + __oran_top_offset + "px;z-index:999999;' id='divOranIm'><div id='kefubtn' style='text-align:right;cursor:pointer;display:none' ><img alt='打开客服菜单' src='images/kf-1.png' onclick='__oran_kf_setKf(1,true)'></div><div id='bodd'><div class='ImHeader' onclick='__oran_kf_setKf(0)' style='cursor:pointer' title='隐藏客服菜单'></div>";
    //rowStr = rowStr + "<div title=\"去此处咨询\" style=\"cursor: pointer;\"  class=\"Imliuyan\"><a href='/Help/Leaveword.aspx'><img src='images/liuy.png' /></a></div>";
    rowStr = rowStr + "<table class='ImTable' border='0' cellspacing='0' cellpadding='0' width='140'>";
    var online = [0];
    var imName = "qq";
    var altText;
    var imgPath;
    var classIm;
    var thisIm;
    var idCrumbs;
    for (var i = 0; i < textCrumbs.length; ++i) {
        classIm = textCrumbs[i].split('||');
        if (classIm[0]) {
              //rowStr += "<tr><td align='center' valign='middle' height='30'><img src='images/tit.png'></td></tr>";
        }
        idCrumbs = classIm[1].split('|');
        for (var j = 0; j < idCrumbs.length; ++j) {
            thisim = idCrumbs[j].split('$');
            rowStr += "<tr><td><div  class='ImRow" + (j % 2) + "'><a title='" + thisim[0] + "' target='_blank' class='im' href='";
            if (idCrumbs[j].indexOf('@') != -1) {
                rowStr += "msnim:chat?contact=";
                imName = "msn";
            } else if (idCrumbs[j].indexOf('?call') != -1) {
                rowStr += "skype:";
                imName = "skype";
            } else if (idCrumbs[j].indexOf('?ww') != -1) {
                rowStr += "http://www.taobao.com/webww/ww.php?ver=3&touid=";
                imName = "ww";
                rowStr += thisim[0].replace("?ww", "");
                rowStr += "&siteid=cntaobao&status=2&charset=utf-8";
            }
            else {
                // rowStr += "http://wpa.qq.com/msgrd?v=3&site=" + siteNm + "&menu=yes&uin=";
                rowStr += "http://wpa.qq.com/msgrd?v=3&site=" + siteNm + "&menu=yes&uin=";
                imName = "qq";
            }

            rowStr += thisim[0];
            switch (imName) {
                case "msn": altText = "MSN"; imgPath = "images/im_msn_online.gif"; break;
                case "qq": altText = "QQ"; imgPath = "images/button_121.png"; break;
                case "skype": altText = "Skype"; imgPath = "images/skype.gif"; break;
                case "ww": altText = "Wangwang"; imgPath = "images/ww.gif"; break;
            }
            rowStr += "'><img src='" + imgPath + "' alt='" + altText + "' style='border:none' align='absmiddle' border='0' /> " + thisim[1] + "</a></div></td></tr>";
        }
    }
    rowStr += "</table><div class='ImFooter' onclick='__oran_kf_setKf(0,true)' style='cursor:pointer' title='隐藏客服菜单'></div></div></div>";
    document.write(rowStr);
}
function __oran_kf_setKf(valtype, writeCookie) {
    if (valtype == 0) {
        __oran_kf_get("bodd").style.display = "none";
        __oran_kf_get("kefubtn").style.display = "";
        if (writeCookie)
            __oran_kf_setCookie("kefutype", 0);
    } else {
        __oran_kf_get("bodd").style.display = "";
        __oran_kf_get("kefubtn").style.display = "none";
        if (writeCookie)
            __oran_kf_setCookie("kefutype", 1);
    }
}
function __oran_kf_getPosition() {
    var top = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        top = document.documentElement.scrollTop;
    }
    else if (document.body && document.body.scrollTop) {
        top = document.body.scrollTop;
    }
    var left = document.documentElement.scrollLeft;
    var height = document.documentElement.clientHeight;
    var width = document.documentElement.clientWidth;
    return { top: top, left: left, height: height, width: width };
}
function __oran_kf_setPostion(objID) {
    var obj = __oran_kf_get(objID);
    window.onscroll = function () {

        var Position = __oran_kf_getPosition();
        if (document.all) {
            if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                obj.style.top = (Position.top) + __oran_top_offset + "px";
            }

        }
        obj.style.right = 0;
    };
    var show = true;
    var cookeVal = __oran_kf_getCookie("kefutype");
    if (cookeVal == null || cookeVal == "0") show = false;
    __oran_kf_setKf(show ? 1 : 0, true);
}
function __oran_kf_setCookie(name, value) {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 10000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}
function __oran_kf_getCookie(name) {
    var arr;
    var rgx = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(rgx)) return unescape(arr[2]);
    else return null;
}