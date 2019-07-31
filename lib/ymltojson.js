'use babel';
const fs = require('fs');
YAML = require('yamljs');
YAML2 = require('js-yaml');

export default class YmlToJson {
	constructor(editor){
		var path = editor.getPath();
		if(!fs.existsSync(path))throw('파일을 읽을 수 없습니다.:'+path);
		var data=fs.readFileSync(path,'utf8');
		var o = YAML.parse(data);
		if(o != undefined){
			console.log(o);
		}
	}
}
