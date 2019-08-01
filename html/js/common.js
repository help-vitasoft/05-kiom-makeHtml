// List형 서적내용 미리보기 열기, 닫기
function showHide(i){
  if(document.all["pv" + i].style.display == "")
    document.all["pv" + i].style.display = "none";
  else
    document.all["pv" + i].style.display = "";
}

// div 숨기기, 보이기
function hidden_view(idMyDiv){
  var objDiv = document.getElementById(idMyDiv);
  if(objDiv.style.display == "block"){
    objDiv.style.display = "none";
  } else{
    objDiv.style.display = "block";
  }
}

function hidden_view_slide(idMyDiv){
  var objDiv = document.getElementById(idMyDiv);
  if(objDiv.style.display == "block" || objDiv.style.display == ""){
    $('#'+objDiv.id).slideUp({duration:50});
  } else{
    $('#'+objDiv.id).slideDown({duration:50});
  }
}

/*textarea 글자수 세기*/
function calBytes(str) {
  var tcount = 0;
  var tmpStr = new String(str);
  var temp = tmpStr.length;
  var onechar;
  for ( k=0; k<temp; k++ ) {
  onechar = tmpStr.charAt(k);
  if (escape(onechar).length > 4) {
  tcount += 2;
  } else {
  tcount += 1;
  }
  }
  return tcount;
}