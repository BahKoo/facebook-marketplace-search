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
      "ps1",
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
    title: "Valuable Video Games",
    searchTerms: [
      "pokémon",
      "silent hill",
      "fire emblem"
    ]
  },
  // {
  //   title: "Toys",
  //   searchTerms: [
  //     "pokemon",
  //     "amiibo"
  //   ]
  // },
  {
    title: "Gym",
    searchTerms: [
      "dumbbell",
      "kettlebell",
      "barbell",
      "bowflex",
      "gym"
    ]
  },
  // {
  //   title: "Cell Phones",
  //   searchTerms: [
  //     "iphone",
  //     "samsung galaxy"
  //   ]
  // },
  // {
  //   title: "Power Tools",
  //   searchTerms: [
  //     "dewalt",
  //     "milwaukee",
  //     "makita",
  //     "rigid",
  //     "bosch",
  //     "ryobi"
  //   ]
  // },
  // {
  //   title: "VR",
  //   searchTerms: [
  //     "vr",
  //     "vr2",
  //     "psvr",
  //     "oculus",
  //     "meta"
  //   ]
  // },
  // {
  //   title: "Vitamix",
  //   searchTerms: [
  //     "vitamix"
  //   ]
  // },
  // {
  //   title: "Sales",
  //   searchTerms: [
  //     "garage sale",
  //     "yard sale",
  //     "clearance sale",
  //     "book sale",
  //     "sale"
  //   ]
  // }
];

const sections2 = [
  {
    title: "Vitamix",
    searchTerms: [
      "vitamix",
      "food cycler",
      "thermomix",
      "blendtec",
    ]
  },
  {
    title: "Dehydrators",
    searchTerms: [
      "dehydrator",
      "excalibur",
      "sedona",
    ]
  },
  {
    title: "Cell Phones",
    searchTerms: [
      "iphone",
    ]
  },
  {
    title: "Garden",
    searchTerms: [
      "tower garden",
    ]
  },
  {
    title: "Summer",
    searchTerms: [
      "canoe",
      "seal line",
      "sleeping bags",
    ]
  },
  {
    title: "Winter",
    searchTerms: [
      "capot",
      "mukluks",
    ]
  },
];

const linksElement = document.getElementById("links");
sections.forEach(x => linksElement.appendChild(createSection(x)));

const links2Element = document.getElementById("links2");
sections2.forEach(x => links2Element.appendChild(createSection(x)));

function openAll(event, searchTerms, key) {
  event?.preventDefault();
  if (key) {
    localStorage.setItem(key, new Date().getTime());
  }
  searchTerms.forEach(searchTerm => window.open(`https://www.facebook.com/marketplace/winni/search?sortBy=creation_time_descend&query=${searchTerm}&exact=true`));
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
  link.href = `https://www.facebook.com/marketplace/category/search?sortBy=creation_time_descend&query=${searchTerm}&exact=true`;
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


