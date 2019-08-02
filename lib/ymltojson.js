'use babel';
const fs = require('fs');
YAML = require('yamljs');
YAML2 = require('js-yaml');

export default class YmlToJson {
	constructor(editor){
		var path = editor.getPath();
		if(!fs.existsSync(path))throw('파일을 읽을 수 없습니다.:'+path);
		var data=fs.readFileSync(path,'utf8');
		data=this.replaceWord(data);
		var o = YAML.parse(data);
		if(o != undefined){
			var str=this.createHtml(o);
			var idx=path.indexOf("contents");
			path=path.substr(0,idx-1);
			path=path+"\\html";
			this.writeFile(path,"");
			this.appendFile(path,str.join("\n"));
		}
	}
	replaceWord(data){
		data = data.replace(/(:\s)([\{\}\[\]\?\.\,\;\:\|\)\*\~\`\!\^\-\_\+\<\>\@\#\$\%\&\\\=\(\'\"])/gi,"$1\\$2");
		data = data.replace(/(-\s)([\{\}\[\]\?\.\,\;\:\|\)\*\~\`\!\^\-\_\+\<\>\@\#\$\%\&\\\=\(\'\"])/gi,"$1\\$2");
		return data;
	}
	createHtml(o){
		var str=[];
		str=this.creHtmlForm(str);

		if(o){
			for(var i=0;i<o.length;i++){
				var data=this.replaceOrigin(o[i]);
				data = this.insertTag(data);
				if(data.tagname.indexOf("h")==-1){
					str.push("<div><div class='sec_div sec_txt'>");
					str.push("<dl>");
				}
				if(data.OR) str.push(data.OR);
				if(data.KO) str.push(data.KO);
				if(data.EN) str.push(data.EN);
				if(data.tagname.indexOf("h")==-1){
					str.push("</dl>");
					str.push("<div class='clearfix'></div>");
					str.push("</div></div>");
				}

			}
			str.push("</div>");
		}
		str=this.endHtmlForm(str);
		return str;
	}
	endHtmlForm(str){
		str.push('</div><div><div class="section_desc pT30 sec_node ann" id="annoList"></div></div><hr></div></div></div></div></div></div><script src="js/jquery-scrollspy.js"></script><script src="js/clipboard.min.js"></script><script src="js/contents.js"></script><script src="js/base.js"></script><scriptsrc="js/scripts.js"></script>  <link type="text/css" rel="stylesheet" href="splitter/layout-default-latest.css"><link type="text/css" rel="stylesheet" href="splitter/jquery.ui.theme.css"><script type="text/javascript" src="splitter/jquery-latest.js"></script><script type="text/javascript" src="splitter/jquery-ui-latest.js"></script><script type="text/javascript" src="splitter/jquery.js"></script><script src="js/jquery.fancytree.ui-deps.js"></script><link href="cssui.fancytree.css" rel="stylesheet"><script src="js/jquery.fancytree.js"></script></body></html>');
		return str;
	}
	creHtmlForm(str){
		str.push('<!DOCTYPE html>');
		str.push('<html lang="ko">');
		str.push('<head>');
		str.push('<meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="">');
		str.push('<link href="font-awesome/css/font-awesome.css" rel="stylesheet" />');
		str.push('<link href="css/style.css" rel="stylesheet">');
		str.push('<script src="js/jquery-1.9.1.min.js"></script>');
		str.push('<script src="js/jquery.tooltipster.js"></script>');
		str.push('<script src="js/pace.min.js"></script>');
		str.push('</head>');
		str.push('<style type="text/css">');
		str.push('html, body, #wrap  {width:100%; height:100%; padding:0; margin:0;}');
		str.push('#spl {height:1000px;min-height: auto;margin:0 auto;width:100%;}');
		str.push('<style type="text/css">');
		str.push('</style>');
		str.push('<body class="pace-done" style="zoom: 1;">');
		str.push('<div id="wrap">');
		str.push('<div id="header"><div class="logo"><h1><a href="/">한의학고전DB</a></h1></div><div id="global"><div class="gnb"><a class="gnb_open" href="javascript:;" onclick="hidden_view("gnb"); return false;" role="button" title="menuOpen">메뉴 열기</a><ul class="gnb_list" id="gnb"><li><a href="Scrap Book">열람</a></li><li><a target="_blank" href="http://info.mediclassics.kr/document/">My Page</a></li><li><a href="">Guide</a></li><li><a href="">Sign out</a></li><li><a href="">admin</a></li></ul></div></div></div>');
		str.push('<div id="container">');
		str.push('<div id="spl" class="ui-layout-container" style="overflow: hidden; position: relative;"><div class="pane ui-layout-center ui-layout-pane ui-layout-pane-center" style="position: absolute; margin: 0px; left: 218px; right: 272px; top: 0px; bottom: 0px; height: 1000px; width: 910px; z-index: 0; display: block; visibility: visible;">');
		str.push('<div class="sch_result">');
		str.push('<div class="book_tit" style="margin-bottom: 20px !important; padding: 0 20px !important;"></div>');
		str.push('<div class="book_view">');
		str.push('<div class="book_txt"><hr>');
		str.push('<div id="titleList"><div class="section_desc fst" style="font-size: 16px;" id="cont_2apq7b5b0j6on" hash="2apq7b5b0j6on" prt="2wqphe92z9eir"><div class="sec_div title_section sec_h4 bottomCollapseDirectionClose" style="background-color: rgb(255, 255, 255);"><div class="left" id="childNum"></div>');
		str.push('<div class="h-div" id="contentDetail" style="cursor: default;">');
		return str;
	}
	replaceOrigin(data){
		if(data.KO) data.KO = data.KO.replace(/\\/gi,"");
		if(data.OR) data.OR = data.OR.replace(/\\/gi,"");
		if(data.EN) data.EN = data.EN.replace(/\\/gi,"");
		return data;
	}
	insertTag(data){
		if(data.OR){
			if(data.tagname.indexOf("h")>-1){
				var content = "<"+data.tagname+" class='chinese sec_node or'>";
				content += '<a href="javascript:;" role="" title="표제어 펼치기/접기" style="cursor: default;">';
				content += '<span class="sec_title" id="contentOr">'+data.OR+'</span>'
				content += '</a>';
				content += "</"+data.tagname+">";
				data.OR = content;
			}else if(data.tagname.indexOf("p")>-1){
				data.OR = "<dd class='chinese or sec_node' id='contentOr'>"+data.OR+"</dd>";
			}
		}
		if(data.KO){
			if(data.tagname.indexOf("h")>-1){
				var content = "<"+data.tagname+" class='sec_node ko'>";
				content += '<a href="javascript:;" role="" title="표제어 펼치기/접기" style="cursor: default;">';
				content += '<span class="sec_title" id="contentKo">'+data.KO+'</span>'
				content += '</a>';
				content += "</"+data.tagname+">";
				data.KO = content;
			}else if(data.tagname.indexOf("p")>-1){
				data.KO = "<dd class='ko sec_node' id='contentKo'>"+data.KO+"</dd>";
			}
		}
		if(data.EN){
			if(data.tagname.indexOf("h")>-1){
				var content = "<"+data.tagname+" class='sec_node en'>";
				content += '<a href="javascript:;" role="" title="표제어 펼치기/접기" style="cursor: default;">';
				content += '<span class="sec_title" id="contentEn">'+data.EN+'</span>'
				content += '</a>';
				content += "</"+data.tagname+">";
				data.EN = content;
			}else if(data.tagname.indexOf("p")>-1){
				data.EN = "<dd class='en sec_node' id='contentEn'>"+data.EN+"</dd>";
			}
		}
		return data;
	}
	writeFile(filePath,data){
	  var fs = require('fs');
	  var copydir = require('copy-dir');
	  !fs.existsSync(filePath) && fs.mkdirSync(filePath);
	  var oldPath =atom.packages.getPackageDirPaths()+"\\05-kiom-preview\\html";
	  copydir.sync(oldPath, filePath, {
		  utimes: true,  // keep add time and modify time
		  mode: true,    // keep file mode
		  cover: true    // cover file when exists, default is true
		});
	  filePath=filePath+"\\volume-contents.html";
	  fs.writeFileSync(filePath, data, 'utf8');
	//console.log("파일 생성 완료");
	}
	appendFile(filePath,data){
	  var fs = require('fs');
	  var copydir = require('copy-dir');
	  !fs.existsSync(filePath) && fs.mkdirSync(filePath);
	  var oldPath =atom.packages.getPackageDirPaths()+"\\05-kiom-preview\\html";
	  copydir.sync(oldPath, filePath, {
		  utimes: true,  // keep add time and modify time
		  mode: true,    // keep file mode
		  cover: true    // cover file when exists, default is true
		});
	  filePath=filePath+"\\volume-contents.html";
	  fs.appendFileSync(filePath, data, 'utf8');
	  //console.log("파일 생성 완료");
	}
}
