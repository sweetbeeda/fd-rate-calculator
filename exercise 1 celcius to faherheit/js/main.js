function cal(){
  let degree = Number(document.getElementById("input").value);
  let convert =degree * 9 / 5 + 32;
  let result = document.getElementById("result");
  result.innerHTML = convert;
}
