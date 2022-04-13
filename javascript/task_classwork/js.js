document.write('<table border="2px">');
  document.write("<tr>")
    const startLetter = 'c';
    const startLetterCode = startLetter.charCodeAt(0);
    const lastLetterCode = startLetterCode+7

  for (var i = startLetterCode; i < lastLetterCode; i++) {
    document.write(`<td>${ String.fromCharCode(i)}</td>
  `);
  }
  document.write("</tr>")
