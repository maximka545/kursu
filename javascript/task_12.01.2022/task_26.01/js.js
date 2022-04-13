function getStatus() {
  const inp = document.getElementById('age')
  const age = parseInt(inp.value)
  let status
  if (age > 65) status = 'pensioner'
  else if (age < 16) status = 'child'
  else status = "worker"
  const resSpan = document.getElementById('statusResult')
  resSpan.innerText = status;
}
