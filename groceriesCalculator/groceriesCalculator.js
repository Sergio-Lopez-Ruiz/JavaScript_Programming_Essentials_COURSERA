let length;
let width;

function calculate_TotalAmount() {
 GC1A = parseFloat(document.getElementById('GC1A').value);
 GC2A = parseFloat(document.getElementById('GC2A').value);
 GC3A = parseFloat(document.getElementById('GC3A').value);

 let total = GC1A + GC2A + GC3A;

  document.getElementById('result').innerText = `The area of the rectangle is: ${total}`;
}