const yourSelect = document.getElementById("yourSelect");
const theirSelect = document.getElementById("theirSelect");

items.forEach(i=>{
  yourSelect.innerHTML += `<option value="${i.value}">${i.name}</option>`;
  theirSelect.innerHTML += `<option value="${i.value}">${i.name}</option>`;
});

let yourTotal = 0;
let theirTotal = 0;

function addItem(side){
  if(side==="you"){
    const v = Number(yourSelect.value);
    yourTotal += v;
    document.getElementById("yourItems").innerHTML += `<li>${yourSelect.options[yourSelect.selectedIndex].text}</li>`;
    document.getElementById("yourTotal").innerText = yourTotal;
  } else {
    const v = Number(theirSelect.value);
    theirTotal += v;
    document.getElementById("theirItems").innerHTML += `<li>${theirSelect.options[theirSelect.selectedIndex].text}</li>`;
    document.getElementById("theirTotal").innerText = theirTotal;
  }
  calculate();
}

function calculate(){
  const diff = yourTotal - theirTotal;
  const percent = Math.abs(diff) / Math.max(yourTotal, theirTotal);

  let result = "⚖ FAIR";
  if(percent > 0.05){
    result = diff > 0 ? "✅ WIN" : "❌ LOSE";
  }

  document.getElementById("result").innerText =
    `${result} (${diff > 0 ? "+" : ""}${diff})`;
}
