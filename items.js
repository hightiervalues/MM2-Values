const items = [
  {name:"Chroma Lightbringer", type:"Gun", rarity:"Chroma", value:850},
  {name:"Chroma Darkbringer", type:"Gun", rarity:"Chroma", value:800},
  {name:"Harvester", type:"Knife", rarity:"Ancient", value:550},
  {name:"Elderwood Scythe", type:"Knife", rarity:"Godly", value:170},
  {name:"Icewing", type:"Knife", rarity:"Godly", value:1},
  {name:"Fire Bat", type:"Pet", rarity:"Godly", value:45}
];

const itemsDiv = document.getElementById("items");

function renderItems(list){
  itemsDiv.innerHTML="";
  list.forEach(i=>{
    itemsDiv.innerHTML+=`
      <div class="item">
        <h4>${i.name}</h4>
        <p>Type: ${i.type}</p>
        <p>Value: ${i.value}</p>
      </div>`;
  });
}

function filterType(type){
  if(type==="All") renderItems(items);
  else renderItems(items.filter(i=>i.type===type));
}

renderItems(items);
