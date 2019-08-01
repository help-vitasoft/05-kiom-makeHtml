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
			path=path+"\\contents\\volume-contents.html";
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
		str.push('<!DOCTYPE html>');
		str.push('<html lang="ko">');
		str.push('<head>');
		str.push('<meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="">');
		str.push('</head>');
		str.push('<body>');
		if(o){
			for(var i=0;i<o.length;i++){
				var data=this.replaceOrigin(o[i]);
				data = this.insertTag(data);
				if(data.OR) str.push(data.OR);
				if(data.KO) str.push(data.KO);
				if(data.EN) str.push(data.EN);
			}

		}
		str.push('</body></html>');
		return str;
	}
	replaceOrigin(data){
		if(data.KO) data.KO = data.KO.replace(/\\/gi,"");
		if(data.OR) data.OR = data.OR.replace(/\\/gi,"");
		if(data.EN) data.EN = data.EN.replace(/\\/gi,"");
		return data;
	}
	insertTag(data){
		if(data.KO) data.KO = "<"+data.tagname+">"+data.KO+"</"+data.tagname+">";
		if(data.OR) data.OR = "<"+data.tagname+">"+data.OR+"</"+data.tagname+">";
		if(data.EN) data.EN = "<"+data.tagname+">"+data.EN+"</"+data.tagname+">";
		return data;
	}
	writeFile(filePath,data){
	  var fs = require('fs');
	  fs.writeFileSync(filePath, data, 'utf8');
	//console.log("파일 생성 완료");
	}
	appendFile(filePath,data){
	  var fs = require('fs');
	  fs.appendFileSync(filePath, data, 'utf8');
	  //console.log("파일 생성 완료");
	}
}
