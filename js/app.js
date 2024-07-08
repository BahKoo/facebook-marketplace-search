const sections = [
  {
    title: "Nintendo",
    searchTerms: [
      "switch",
      "gamecube",
      "n64",
      "wii",
      "ds",
      "3ds",
      "nes",
      "snes",
      "gameboy",
      "nintendo",
    ]
  },
  {
    title: "Playstation",
    searchTerms: [
      "ps4",
      "ps5",
      "ps2",
      "ps3",
      "playstation",
    ]
  },
  {
    title: "Other Video Games",
    searchTerms: [
      "360",
      "xbox",
      "xbone",
      "sega",
      "dreamcast",
      "game gear",
    ]
  },
  {
    title: "Toys",
    searchTerms: [
      "pokemon",
      "amiibo"
    ]
  },
  {
    title: "VR",
    searchTerms: [
      "vr",
      "vr2",
      "psvr",
      "oculus",
      "meta"
    ]
  },
  {
    title: "Power Tools",
    searchTerms: [
      "dewalt",
      "milwaukee",
      "makita",
      "rigid",
      "bosch",
      "ryobi"
    ]
  },
  {
    title: "Sales",
    searchTerms: [
      "garage sale",
      "yard sale",
      "clearance sale",
      "liquidation sale",
      "book sale",
      "sale"
    ]
  }
];

const daysSinceListed = 7;

const linksElement = document.getElementById("links");

sections.forEach(x => linksElement.appendChild(createSection(x)));

function openAll(searchTerms) {
  searchTerms.forEach(searchTerm => window.open(`https://www.facebook.com/marketplace/category/search?daysSinceListed=${daysSinceListed}&sortBy=creation_time_descend&query=${searchTerm}&exact=true`));
}

function createSection(section)
{
  let div = document.createElement('div');
  let title = document.createElement('h4');
  let button = document.createElement('div');

  title.innerText = section.title;
  button.className = "button";
  button.innerText = "Open All";
  button.addEventListener("click", () => openAll(section.searchTerms));

  div.appendChild(title);
  section.searchTerms.forEach(x => div.appendChild(createLink(x)));
  div.appendChild(button);

  return div;
}

function createLink(searchTerm) {
  let link = document.createElement('a');
  let div = document.createElement('div');

  link.href = `https://www.facebook.com/marketplace/category/search?daysSinceListed=${daysSinceListed}&sortBy=creation_time_descend&query=${searchTerm}&exact=true`;
  link.target = "_blank";
  div.innerText = searchTerm;

  link.appendChild(div);

  return link;
}
