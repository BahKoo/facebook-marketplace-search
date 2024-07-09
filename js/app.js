const sections = [
  {
    title: "Nintendo",
    searchTerms: [
      "nintendo switch",
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
      "xbox",
      "dreamcast",
      "sega",
      "atari",
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

function openAll(event, searchTerms, key) {
  event?.preventDefault();
  if (key) {
    localStorage.setItem(key, new Date().getTime());
  }
  searchTerms.forEach(searchTerm => window.open(`https://www.facebook.com/marketplace/category/search?daysSinceListed=${daysSinceListed}&sortBy=creation_time_descend&query=${searchTerm}&exact=true`));
}

function openCustom() {
  let text = document.getElementById("custom").value;
  let searchTerms = text.split(",").map(x => x.trim());
  openAll(null, searchTerms);
}


function createSection(section) {
  let button = document.createElement('div');
  button.className = "button";
  button.innerHTML = "&#128279;";
  button.addEventListener("click", (e) => openAll(e, section.searchTerms, section.title) );

  let title = document.createElement('span');
  title.className = "title";
  title.innerText = section.title;

  let timer = document.createElement('span');
  createTimer(section.title, timer);

  let summary = document.createElement('summary');
  summary.appendChild(button);
  summary.appendChild(title);
  summary.appendChild(timer);

  let details = document.createElement('details');
  details.appendChild(summary);
  section.searchTerms.forEach(x => details.appendChild(createLink(x)));

  return details;
}

function createLink(searchTerm) {

  let div = document.createElement('div');
  div.className = "searchTerm";
  div.innerText = searchTerm;

  let link = document.createElement('a');
  link.href = `https://www.facebook.com/marketplace/category/search?daysSinceListed=${daysSinceListed}&sortBy=creation_time_descend&query=${searchTerm}&exact=true`;
  link.target = "_blank";
  link.appendChild(div);

  return link;
}


function createTimer(title, timer) {
  setInterval(function() {
    let last = localStorage.getItem(title);
    if (last) {
      let now = new Date().getTime();
      let distance = now - last;
      timer.innerHTML = `[ ${Math.floor(distance / 1000 / 60)} mins ]`;
    }
  }, 1000);
}


