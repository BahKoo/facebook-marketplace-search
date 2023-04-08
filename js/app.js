const searchTerms = [
  "nintendo",
  "xbox",
  "ps2",
  "ps3",
  "ps4",
  "playstation",
];

const daysSinceListed = 7;

document.getElementById("openAll").addEventListener("click", openAll);

const linksElement = document.getElementById("links");

searchTerms.forEach(x => linksElement.appendChild(createLink(x)));

function openAll() {
  searchTerms.forEach(searchTerm => window.open(`https://www.facebook.com/marketplace/category/search?daysSinceListed=${daysSinceListed}&sortBy=creation_time_descend&query=${searchTerm}&exact=true`));
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