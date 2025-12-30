const items = [
  { name: "Chroma Lightbringer", value: 850, demand: "High" },
  { name: "Chroma Darkbringer", value: 800, demand: "High" },
  { name: "Icewing", value: 1, demand: "Low" },
  { name: "Elderwood Scythe", value: 170, demand: "Medium" },
  { name: "Harvester", value: 550, demand: "High" }
];

const itemsDiv = document.getElementById("items");
const searchInput = document.getElementById("search");

function displayItems(list) {
  itemsDiv.innerHTML = "";
  list.forEach(item => {
    itemsDiv.innerHTML += `
      <div class="item">
        <h3>${item.name}</h3>
        <p class="value">Value: ${item.value}</p>
        <p class="demand">Demand: ${item.demand}</p>
      </div>
    `;
  });
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(value)
  );
  displayItems(filtered);
});

displayItems(items);
