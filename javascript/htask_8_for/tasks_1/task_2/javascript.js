
let letONum = 1;
let rowNum = 10;

document.write('<pre>')
for (var i = 0; i < rowNum; i++) {
  for (var j = 0; j < letONum; j++) {
  document.write("o")
  }
  document.write("</br>")
  letONum++
}
document.write('</pre>')
