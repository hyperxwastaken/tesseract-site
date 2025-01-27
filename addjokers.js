let jokers = [
  { name: "Apple Pie",
    text: [
      "{C:mult}+24{} Mult ",
      "{C:mult}-6{} Mult if {C:attention}first{} played hand doesn't beat the {C:attention}blind{}"
    ],
    image_url: "img/apple pie.png",
    rarity: "Common"
  },
  {  name: "Conduit",
    text: [
      "Scored {C:attention}Mult Cards{} give {C:chips}+30{} Chips", 
      "Scored {C:attention}Bonus Cards{} give {C:mult}+4{} Mult"
    ],
    image_url: "img/Conduit.png",
    rarity: "Common"
  },
  {
    name: "Dada Joker",
    text: [
      "{C:chips}+20{} Chips for each {C:attention}Joker{} card"
    ],
    image_url: "img/dada joker.png",
    rarity: "Common"
  },
  { name: "Pineapple",
    text: [
      "{C:chips}+160{} Chips",
      "{C:chips}-40{} Chips if {C:attention}first{} played hand doesn't beat the {C:attention}blind{}"
    ],
    image_url: "img/pineapple.png",
    rarity: "Common"
  },
  {
    name: "Bismuth",
    text: [
    "Played {C:attention}Wild Cards",
    "are retriggered",
    "{C:attention}2{} times when scored"
     ],
    image_url: "img/bismuth.png",
    rarity: "Uncommon"
  },
  {
    name: "Blue Java",
    text: [
      "{C:chips}+200{} Chips"
    ],
    image_url: "img/blue java (1).png",
    rarity: "Uncommon"
  },
  {
    name: "Impossibility",
    text: [
      "{X:mult,C:white}X3{} Mult if scored hand contains a {C:attention}2{} and an {C:attention}8{}"
    ],
    image_url: "img/Impossible cube.png",
    rarity: "Uncommon"
  },
  {
    name: "Jimbette",
    text: [
      "Gains {C:mult}+4 {}Mult for every {C:attention}7{} {C:hearts}Hearts{} scored"
    ],
    image_url: "img/jimbette.png",
    rarity: "Uncommon"
  },
  {
    name: "Letter Blocks",
    text: [
      "Gains {C:mult}+2{} Mult for each {C:attention}lettered{} card {C:inactive}(A, K, Q, J) {}scored in {C:attention}first hand{} of round"
    ],
    image_url: "img/letter blocks.png",
    rarity: "Uncommon"
  },
  {
    name: "Mahjong Tile",
    text: [
      "Earn {C:money}$2{} if played hand contains a {C:attention}Pair{}"
    ],
    image_url: "img/mahjong.png",
    rarity: "Uncommon"
  },
  {
    name: "Mint Condition",
    text: [
      "Earn {C:money}$6{} at end of round and reduce this by {C:mult}1{}"
    ],
    image_url: "img/mint bloom.png",
    rarity: "Uncommon"
  },
  {
    name: "Reserve Leaflet",
    text: [
      "{X:mult,C:white}X2{} Mult for each {C:red}Rare{C:attention} Joker"
    ],
    image_url: "img/res.png",
    rarity: "Uncommon"
  },
  {
    name: "Chromatic Aberration",
    text: [
      "Played {C:attention}Wild Cards{} become {C:dark_edition}Polychrome{} before scoring"
    ],
    image_url: "img/chromatic aberration.png",
    rarity: "Rare"
  },
  {
    name: "Penrose",
    text: [
      "If played hand contains exactly {C:attention}three{} cards and one {C:attention}3{}, {C:attention}transform{} played cards into that {C:attention}3{}",
      "{C:inactive}(After scoring){}"
    ],
    image_url: "img/penrose.png",
    rarity: "Rare"
  },
  {
    name: "Waterfall",
    text: [
      "{C:red}+1{} discard per round Gains {C:chips}+3{} Chips when a {C:attention}3 {}or {C:attention}9{} is discarded"
    ],
    image_url: "img/waterfall.png",
    rarity: "Rare"
  }
  
]
  

// works the same. 
let consumables = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Tarot"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Planet"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Spectral"
  // },
]

let card_modifications = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Enhancement"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Edition"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Seal"
  // },
]

let decks = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Deck"
  // },
]

let stickers = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Sticker"
  // },
]

let blinds = [
  // {
  //   name: "The Wall",
  //   text: [
  //     "Extra large blind",
  //     "{C:inactive}({C:red}4x{C:inactive} Base for {C:attention}$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 2)"
  //   ],
  //   image_url: "img/the_wall.png",
  //   rarity: "Boss Blind"
  // },
  // {
  //   name: "Violet Vessel",
  //   text: [
  //     "Very large blind",
  //     "{C:inactive}({C:red}6x{C:inactive} Base for {C:attention}$$$$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 8)"
  //   ],
  //   image_url: "img/violet_vessel.png",
  //   rarity: "Showdown"
  // },
]

let shop_items = [
  //{
  //  name: "Joker",
 //   text: [
  //    "{C:mult}+4{} Mult"
   // ],
   // image_url: "img/j_joker.png",
   // rarity: "Voucher"
  //},
  //{
    //name: "Joker",
    //text: [
   //   "{C:mult}+4{} Mult"
   // ],
   // image_url: "img/j_joker.png",
   // rarity: "Pack"
  //},
]

let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#5d5dff",
  ETERNAL: "#c75985",
  INACTIVE: "#ffffff99",
  HEARTS: "#f03464",
  DIAMONDS: "#f06b3f",
  SPADES: "#403995",
  CLUBS: "#235955",
  ENHANCED: "#8389DD",
  JOKER: "#708b91",
  TAROT: "#a782d1",
  PLANET: "#13afce",
  SPECTRAL: "#4584fa",
  VOUCHER: "#fd682b",
  EDITION: "#4ca893",
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Joker": "#708b91",
  "Tarot": "#a782d1",
  "Planet": "#13afce",
  "Spectral": "#4584fa",
  "Voucher": "#fd682b",
  "Pack": "#9bb6bd",
  "Enhancement": "#8389DD",
  "Edition": "#4ca893",
  "Seal": "#4584fa",
  "Deck": "#9bb6bd",
  "Sticker": "#5d5dff",
  "Boss Blind": "#5d5dff",
  "Showdown": "#4584fa",
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokers, jokers_div) => {
  for (let joker of jokers) {
    console.log("adding joker", joker.name);
  
    joker.text = joker.text.map((line) => { return line + "{}"});
  
    joker.text = joker.text.join("<br/>");
    joker.text = joker.text.replaceAll("{}", "</span>");
    joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
      let classes = p1.split(",");
  
      let css_styling = "";
  
      for (let i = 0; i < classes.length; i++) {
        let parts = classes[i].split(":");
        if (parts[0] === "C") {
          css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
        } else if (parts[0] === "X") {
          css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
        }
      }
  
      return `</span><span style='${css_styling}'>`;
    });
  
    let joker_div = document.createElement("div");
    joker_div.classList.add("joker");
    if (joker.rarity === "Sticker" || joker.rarity == "Seal") {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else if (joker.soul) {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    }
  
    jokers_div.appendChild(joker_div);
  }
}

if (jokers.length === 0) {
  document.querySelector(".jokersfull").style.display = "none"
} else {
  let jokers_div = document.querySelector(".jokers");
  add_cards_to_div(jokers, jokers_div);
}

if (consumables.length === 0) {
  document.querySelector(".consumablesfull").style.display = "none"
} else {
  let consumables_div = document.querySelector(".consumables");
  add_cards_to_div(consumables, consumables_div);
}

if (card_modifications.length === 0) {
  document.querySelector(".cardmodsfull").style.display = "none"
} else {
  let cardmods_div = document.querySelector(".cardmods");
  add_cards_to_div(card_modifications, cardmods_div);
}

if (decks.length === 0) {
  document.querySelector(".decksfull").style.display = "none"
} else {
  let decks_div = document.querySelector(".decks");
  add_cards_to_div(decks, decks_div);
}

if (stickers.length === 0) {
  document.querySelector(".stickersfull").style.display = "none"
} else {
  let stickers_div = document.querySelector(".stickers");
  add_cards_to_div(stickers, stickers_div);
}

if (blinds.length === 0) {
  document.querySelector(".blindsfull").style.display = "none"
} else {
  let blinds_div = document.querySelector(".blinds");
  add_cards_to_div(blinds, blinds_div);
}

if (shop_items.length === 0) {
  document.querySelector(".shopitemsfull").style.display = "none"
} else {
  let shopitems_div = document.querySelector(".shopitems");
  add_cards_to_div(shop_items, shopitems_div);
}
