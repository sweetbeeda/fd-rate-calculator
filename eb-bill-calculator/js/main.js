function ebBIll() {
  let input = Number(document.getElementById("input").value);
  input = 0;
  if (input <= 50) {
    console.log("RS.75%");
  } 
  else{
    console.log("your unit of usage is more than 50 units")
  }
}
