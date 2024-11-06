let initialTabIndex = '0';
let initialTabIndexbid = '0';
let grade = '9';
let globalGrade = "";
const setNames = ['Base', 'Set', 'base','  set', 'BASE SET','Jungle', 'jungle', 'JUNGLE', 'Fossil', 'fossil', 'FOSSIL', 
      'Base Set 2', 'base set 2', 'BASE SET 2', 'Team Rocket', 'team rocket', 'TEAM ROCKET', 'Gym Heroes', 'gym heroes',
      'GYM HEROES', 'Gym Challenge', 'gym challenge', 'GYM CHALLENGE', 'Neo Genesis',
      'neo genesis', 'NEO GENESIS', 'Neo Discovery', 'neo discovery', 'NEO DISCOVERY', 'Neo Revelation',
      'neo revelation', 'NEO REVELATION', 'Neo Destiny', 'neo destiny', 'NEO DESTINY', 'Legendary Collection',
      'legendary collection', 'LEGENDARY COLLECTION', 'Expedition Base Set', 'expedition base set',
      'EXPEDITION BASE SET', 'Aquapolis', 'aquapolis', 'AQUAPOLIS', 'Skyridge', 'skyridge', 'SKYRIDGE',
      'EX Ruby & Sapphire', 'ex ruby & sapphire', 'EX RUBY & SAPPHIRE', 'EX Sandstorm', 'ex sandstorm',
      'EX SANDSTORM', 'EX Dragon', 'ex dragon', 'EX DRAGON', 'EX Team Magma vs Team Aqua', 'ex team magma vs team aqua', 
      'EX TEAM MAGMA VS TEAM AQUA', 'EX Hidden Legends', 'ex hidden legends', 'EX HIDDEN LEGENDS', 'EX FireRed & LeafGreen',
      'ex firered & leafgreen', 'EX FIRERED & LEAFGREEN', 'EX Team Rocket Returns', 'ex team rocket returns', 
      'EX TEAM ROCKET RETURNS', 'EX Deoxys', 'ex deoxys', 'EX DEOXYS', 'EX Emerald', 'ex emerald', 'EX EMERALD', 
      'EX Unseen Forces', 'ex unseen forces', 'EX UNSEEN FORCES', 'EX Delta Species', 'ex delta species', 'EX DELTA SPECIES', 
      'EX Legend Maker', 'ex legend maker', 'EX LEGEND MAKER','EX Legend maker','Ex Legend Maker','Ex Legend maker','EX Holon Phantoms', 'ex holon phantoms', 'EX HOLON PHANTOMS', 
      'EX Crystal Guardians', 'ex crystal guardians', 'EX CRYSTAL GUARDIANS', 'EX Dragon Frontiers', 'ex dragon frontiers', 
      'EX DRAGON FRONTIERS', 'EX Power Keepers', 'ex power keepers', 'EX POWER KEEPERS', 'Diamond & Pearl', 'diamond & pearl', 
      'DIAMOND & PEARL', 'Mysterious Treasures', 'mysterious treasures', 'MYSTERIOUS TREASURES', 'Secret Wonders', 'secret wonders', 
      'SECRET WONDERS', 'Great Encounters', 'great encounters', 'GREAT ENCOUNTERS', 'Majestic Dawn', 'majestic dawn', 'MAJESTIC DAWN',
      'Legends Awakened', 'legends awakened', 'LEGENDS AWAKENED', 'Stormfront', 'stormfront', 'STORMFRONT', 'Platinum', 'platinum', 
      'PLATINUM', 'Rising Rivals', 'rising rivals', 'RISING RIVALS', 'Supreme Victors', 'supreme victors', 'SUPREME VICTORS', 
      'Arceus', 'arceus', 'ARCEUS', 'HeartGold & SoulSilver', 'heartgold & soulSilver', 'HEARTGOLD & SOULSILVER', 'Unleashed', 
      'unleashed', 'UNLEASHED', 'Undaunted', 'undaunted', 'UNDAUNTED', 'Triumphant', 'triumphant', 'TRIUMPHANT', 'Call of Legends', 
      'call of legends', 'CALL OF LEGENDS', 'Black & White', 'black & white', 'BLACK & WHITE', 'Emerging Powers', 'emerging powers', 
      'EMERGING POWERS', 'Noble Victories', 'noble victories', 'NOBLE VICTORIES', 'Next Destinies', 'next destinies', 
      'NEXT DESTINIES', 'Dark Explorers', 'dark explorers', 'DARK EXPLORERS', 'Dragons Exalted', 'dragons exalted', 'DRAGONS EXALTED', 
      'Dragon Vault', 'dragon vault', 'DRAGON VAULT', 'Boundaries Crossed', 'boundaries crossed', 'BOUNDARIES CROSSED', 'Plasma Storm', 
      'plasma storm', 'PLASMA STORM', 'Plasma Freeze', 'plasma freeze', 'PLASMA FREEZE', 'Plasma Blast', 'plasma blast', 'PLASMA BLAST', 
      'Legendary Treasures', 'legendary treasures', 'LEGENDARY TREASURES', 'XY', 'xy', 'XY', 'Flashfire', 'flashfire', 'FLASHFIRE', 
      'Furious Fists', 'furious fists', 'FURIOUS FISTS', 'Phantom Forces', 'phantom forces', 'PHANTOM FORCES', 'Primal Clash', 
      'primal clash', 'PRIMAL CLASH', 'Roaring Skies', 'roaring skies', 'ROARING SKIES', 'Ancient Origins', 'ancient origins', 
      'ANCIENT ORIGINS', 'BREAKthrough', 'breakthrough', 'BREAKTHROUGH', 'BREAKpoint', 'breakpoint', 'BREAKPOINT', 'Generations', 
      'generations', 'GENERATIONS', 'Fates Collide', 'fates collide', 'FATES COLLIDE', 'Steam Siege', 'steam siege', 'STEAM SIEGE', 
      'Evolutions', 'evolutions', 'EVOLUTIONS', 'Sun & Moon', 'sun & moon', 'SUN & MOON', 'Guardians Rising', 'guardians rising', 
      'GUARDIANS RISING', 'Burning Shadows', 'burning shadows', 'BURNING SHADOWS', 'Shining Legends', 'shining legends', 
      'SHINING LEGENDS', 'Crimson Invasion', 'crimson invasion', 'CRIMSON INVASION', 'Ultra Prism', 'ultra prism', 'ULTRA PRISM', 
      'Forbidden Light', 'forbidden light', 'FORBIDDEN LIGHT', 'Celestial Storm', 'celestial storm', 'CELESTIAL STORM', 
      'Dragon Majesty', 'dragon majesty', 'DRAGON MAJESTY', 'Lost Thunder', 'lost thunder', 'LOST THUNDER', 'Team Up', 'team up',
      'Team up', 'team up', 'TEAM UP', 'Detective Pikachu', 'detective pikachu', 'DETECTIVE PIKACHU', 'Unbroken Bonds', 'unbroken bonds',
      'UNBROKEN BONDS', 'Unified Minds', 'unified minds', 'UNIFIED MINDS', 'Cosmic Eclipse', 'cosmic eclipse', 'COSMIC ECLIPSE', 
      'Sword & Shield', 'sword & shield', 'SWORD & SHIELD', 'Rebel Clash', 'rebel clash', 'REBEL CLASH', 'Darkness Ablaze', 
      'darkness ablaze', 'DARKNESS ABLAZE',"Champion's Path", "champion's path", "CHAMPION'S PATH", 'Vivid Voltage', 'vivid voltage', 'VIVID VOLTAGE', 'Battle Styles', 'battle styles', 
      'BATTLE STYLES', 'Chilling Reign', 'chilling reign', 'CHILLING REIGN', 'Evolving Skies', 'evolving skies', 'EVOLVING SKIES', 
      'Celebrations', 'celebrations', 'CELEBRATIONS', 'Fusion Strike', 'fusion strike', 'FUSION STRIKE', 'Brilliant Stars', 'brilliant stars', 
      'BRILLIANT STARS','Astral Radiance', 'astral radiance', 'ASTRAL RADIANCE','Lost Origin', 'LOST ORIGIN', 'lost origin',
      'Silver Tempest', 'SILVER TEMPEST', 'silver tempest','Crown Zenith', 'CROWN ZENITH', 'crown zenith','Scarlet & Violet',
      'SCARLET & VIOLET','scarlet & violet',"Paldea Evolved", "paldea evolved", "PALDEA EVOLVED", "Obsidian Flames", "obsidian flames", 
      "OBSIDIAN FLAMES","151","Paradox Rift", "paradox rift", "PARADOX RIFT", "Paldean Fates", "paldean fates", "PALDEAN FATES",
      "Temporal Forces", "temporal forces", "TEMPORAL FORCES", "Twilight Masquerade", "twilight masquerade", "TWILIGHT MASQUERADE",
      "Shrouded Fable", "shrouded fable", "SHROUDED FABLE",'Shrouded Fable', "Stellar Crown", "stellar crown", "STELLAR CROWN","Surging Sparks", 
      "surging sparks", "SURGING SPARKS"];
//Graded selector
//#mainContent > div.vim.d-vi-evo-region > div.vim.x-item-condition.mar-t-20 > div.x-item-condition-text > div > span > span:nth-child(1) > span
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'searchPokemon') {
        var productName = extractPokemonNameFromPage();
        
        if (productName) {
            var pricechartingURL = 'https://www.pricecharting.com/search-products?q=' + encodeURIComponent(productName) + '&type=prices';
            chrome.runtime.sendMessage({ action: 'openTabInBackground', url: pricechartingURL });
            // Send message to background script to fetch PSA 9 price
            setTimeout(function() {
                console.log("Grade is before sending"+globalGrade);
                chrome.runtime.sendMessage({ action: 'fetchPSA9Price', grade:globalGrade});
            }, 2000);
        } else {
            alert('Pokemon name not found on the eBay page.');
        }
    } else if (request.action === 'updateEbayPrice') {
        var ebayPriceElement = document.querySelector('#mainContent > div > div.vim.x-item-title > h1 > span');
        if (ebayPriceElement) {
            var psa9PriceElement = document.createElement('span');
            psa9PriceElement.className = 'psa9-price'+initialTabIndex; // Add a class for easy reference
            psa9PriceElement.style.color = 'red'; // Optional: Style the PSA 9 price text
            psa9PriceElement.style.marginLeft = '10px'; // Optional: Add some spacing
            psa9PriceElementbid.textContent = 'PSA ' + globalGrade + ' Price: ' + request.price;

            // Check if a PSA 9 price element already exists for this tab
            var existingPsa9PriceElement = ebayPriceElement.querySelector('.psa9-price');
            if (!existingPsa9PriceElement && initialTabIndex==0) {
                ebayPriceElement.appendChild(psa9PriceElement);
                initialTabIndex= nextChar(initialTabIndex); //price indpendence happens here when first running the ext

            } else {
                existingPsa9PriceElement.textContent = 'PSA 9 Price: ' + request.price;
                initialTabIndex= nextChar(initialTabIndex); // who knows if this helps
            }
        }
    }
});

// //Same thing as above but for auctions:
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'bidSearch') {
      var productName = extractPokemonNameFromPage();
      
      if (productName) {
          var pricechartingURL = 'https://www.pricecharting.com/search-products?q=' + encodeURIComponent(productName) + '&type=prices';
            chrome.runtime.sendMessage({ action: 'openTabInBackground', url: pricechartingURL });
          // Send message to background script to fetch PSA 9 price
          setTimeout(function() {
              chrome.runtime.sendMessage({ action: 'fetchPSA9Price' });
          }, 2000);
      } else {
          alert('Pokemon name not found on the eBay page.');
      }
  } else if (request.action === 'updateEbayPrice') {
      var ebayPriceElementbid = document.querySelector('#mainContent > div > div.vim.x-item-title > h1 > span');
      if (ebayPriceElementbid) {
          var psa9PriceElementbid = document.createElement('span');
          psa9PriceElementbid.className = 'psa9-price'+initialTabIndexbid; // Add a class for easy reference
          psa9PriceElementbid.style.color = '#0064D2'; // Optional: Style the PSA 9 price text
          psa9PriceElementbid.style.marginLeft = '10px'; // Optional: Add some spacing
          psa9PriceElementbid.style.fontSize = '24px'; // Add sizing
          psa9PriceElementbid.textContent = 'PSA ' + globalGrade + ' Price: ' + request.price;
          var newLineDiv = document.createElement('div');
          newLineDiv.appendChild(psa9PriceElementbid);
      
          // Check if a PSA 9 price element already exists for this tab
          var existingPsa9PriceElementbid = ebayPriceElementbid.querySelector('div > .psa9-price');
          if (!existingPsa9PriceElementbid && initialTabIndexbid==0) {
              ebayPriceElementbid.appendChild(newLineDiv);
              initialTabIndexbid= nextChar(initialTabIndexbid); //price indpendence happens here when first running the ext

          } else {
              //existingPsa9PriceElementbid.textContent = 'PSA 9 Price: ' + request.price;
              initialTabIndexbid= nextChar(initialTabIndexbid); // who knows if this helps
          }
      }
  }
});

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var imageURL = getImageURL();
      sendResponse({url: imageURL});
    }
  }
);

function getImageURL() {
  var imageElement = document.querySelector('img[loading="eager"][data-zoom-src]');
  console.log(imageElement);
  return imageElement ? imageElement.getAttribute('data-zoom-src') : null;
}

// function getPSA9price() {
//   var price = 0;
//   if (window.location.hostname === 'www.pricecharting.com') {
//     price = document.querySelectorAll('#graded_price > span.price.js-price');
//   }
//   console.log("Price of query all"+ price);
//   return price;
// }
var pokemonNames = [ "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise",
  "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata",
  "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀",
  "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff",
  "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth",
  "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine",
  "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout",
  "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke",
  "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk",
  "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler",
  "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing",
  "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking",
  "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp",
  "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar",
  "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite",
  "Mewtwo", "Mew", "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw",
  "Feraligatr", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat",
  "Chinchou", "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic", "Natu", "Xatu", "Mareep",
  "Flaaffy", "Ampharos", "Bellossom", "Marill", "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff",
  "Aipom", "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", "Murkrow", "Slowking",
  "Misdreavus", "Unown", "Wobbuffet", "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull",
  "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring", "Slugma", "Magcargo",
  "Swinub", "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom",
  "Kingdra", "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Smoochum", "Elekid",
  "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", "Lugia",
  "Ho-oh", "Celebi", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp",
  "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox",
  "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper",
  "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking",
  "Nincada", "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass",
  "Skitty", "Delcatty", "Sableye", "Mawile", "Aron", "Lairon", "Aggron", "Meditite", "Medicham", "Electrike",
  "Manectric", "Plusle", "Minun", "Volbeat", "Illumise", "Roselia", "Gulpin", "Swalot", "Carvanha", "Sharpedo",
  "Wailmer", "Wailord", "Numel", "Camerupt", "Torkoal", "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava",
  "Flygon", "Cacnea", "Cacturne", "Swablu", "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach",
  "Whiscash", "Corphish", "Crawdaunt", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas",
  "Milotic", "Castform", "Kecleon", "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol",
  "Wynaut", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth",
  "Luvdisc", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel",
  "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Turtwig", "Grotle", "Torterra",
  "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon", "Starly", "Staravia", "Staraptor", "Bidoof",
  "Bibarel", "Kricketot", "Kricketune", "Shinx", "Luxio", "Luxray", "Budew", "Roserade", "Cranidos", "Rampardos",
  "Shieldon", "Bastiodon", "Burmy", "Wormadam", "Mothim", "Combee", "Vespiquen", "Pachirisu", "Buizel", "Floatzel",
  "Cherubi", "Cherrim", "Shellos", "Gastrodon", "Ambipom", "Drifloon", "Drifblim", "Buneary", "Lopunny", "Mismagius",
  "Honchkrow", "Glameow", "Purugly", "Chingling", "Stunky", "Skuntank", "Bronzor", "Bronzong", "Bonsly", "Mime Jr.",
  "Happiny", "Chatot", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Riolu", "Lucario", "Hippopotas",
  "Hippowdon", "Skorupi", "Drapion", "Croagunk", "Toxicroak", "Carnivine", "Finneon", "Lumineon", "Mantyke", "Snover",
  "Abomasnow", "Weavile", "Magnezone", "Lickilicky", "Rhyperior", "Tangrowth", "Electivire", "Magmortar", "Togekiss", "Yanmega",
  "Leafeon", "Glaceon", "Gliscor", "Mamoswine", "Porygon-Z", "Gallade", "Probopass", "Dusknoir", "Froslass", "Rotom",
  "Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", "Phione",
  "Manaphy", "Darkrai", "Shaymin", "Arceus", "Victini", "Snivy", "Servine", "Serperior", "Tepig", "Pignite",
  "Emboar", "Oshawott", "Dewott", "Samurott", "Patrat", "Watchog", "Lillipup", "Herdier", "Stoutland", "Purrloin",
  "Liepard", "Pansage", "Simisage", "Pansear", "Simisear", "Panpour", "Simipour", "Munna", "Musharna", "Pidove",
  "Tranquill", "Unfezant", "Blitzle", "Zebstrika", "Roggenrola", "Boldore", "Gigalith", "Woobat", "Swoobat", "Drilbur",
  "Excadrill", "Audino", "Timburr", "Gurdurr", "Conkeldurr", "Tympole", "Palpitoad", "Seismitoad", "Throh", "Sawk",
  "Sewaddle", "Swadloon", "Leavanny", "Venipede", "Whirlipede", "Scolipede", "Cottonee", "Whimsicott", "Petilil", "Lilligant",
  "Basculin", "Sandile", "Krokorok", "Krookodile", "Darumaka", "Darmanitan", "Maractus", "Dwebble", "Crustle", "Scraggy",
  "Scrafty", "Sigilyph", "Yamask", "Cofagrigus", "Tirtouga", "Carracosta", "Archen", "Archeops", "Trubbish", "Garbodor",
  "Zorua", "Zoroark", "Minccino", "Cinccino", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus",
  "Ducklett", "Swanna", "Vanillite", "Vanillish", "Vanilluxe", "Deerling", "Sawsbuck", "Emolga", "Karrablast", "Escavalier",
  "Foongus", "Amoonguss", "Frillish", "Jellicent", "Alomomola", "Joltik", "Galvantula", "Ferroseed", "Ferrothorn", "Klink",
  "Klang", "Klinklang", "Tynamo", "Eelektrik", "Eelektross", "Elgyem", "Beheeyem", "Litwick", "Lampent", "Chandelure",
  "Axew", "Fraxure", "Haxorus", "Cubchoo", "Beartic", "Cryogonal", "Shelmet", "Accelgor", "Stunfisk", "Mienfoo",
  "Mienshao", "Druddigon", "Golett", "Golurk", "Pawniard", "Bisharp", "Bouffalant", "Rufflet", "Braviary", "Vullaby",
  "Mandibuzz", "Heatmor", "Durant", "Deino", "Zweilous", "Hydreigon", "Larvesta", "Volcarona", "Cobalion", "Terrakion",
  "Virizion", "Tornadus", "Thundurus", "Reshiram", "Zekrom", "Landorus", "Kyurem", "Keldeo", "Meloetta", "Genesect",
  "Chespin", "Quilladin", "Chesnaught", "Fennekin", "Braixen", "Delphox", "Froakie", "Frogadier", "Greninja", "Bunnelby",
  "Diggersby", "Fletchling", "Fletchinder", "Talonflame", "Scatterbug", "Spewpa", "Vivillon", "Litleo", "Pyroar", "Flabébé",
  "Floette", "Florges", "Skiddo", "Gogoat", "Pancham", "Pangoro", "Furfrou", "Espurr", "Meowstic", "Honedge",
  "Doublade", "Aegislash", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Inkay", "Malamar", "Binacle", "Barbaracle",
  "Skrelp", "Dragalge", "Clauncher", "Clawitzer", "Helioptile", "Heliolisk", "Tyrunt", "Tyrantrum", "Amaura", "Aurorus",
  "Sylveon", "Hawlucha", "Dedenne", "Carbink", "Goomy", "Sliggoo", "Goodra", "Klefki", "Phantump", "Trevenant",
  "Pumpkaboo", "Gourgeist", "Bergmite", "Avalugg", "Noibat", "Noivern", "Xerneas", "Yveltal", "Zygarde", "Diancie",
  "Hoopa", "Volcanion", "Rowlet", "Dartrix", "Decidueye", "Litten", "Torracat", "Incineroar", "Popplio", "Brionne",
  "Primarina", "Pikipek", "Trumbeak", "Toucannon", "Yungoos", "Gumshoos", "Grubbin", "Charjabug", "Vikavolt", "Crabrawler",
  "Crabominable", "Oricorio", "Cutiefly", "Ribombee", "Rockruff", "Lycanroc", "Wishiwashi", "Mareanie", "Toxapex", "Mudbray",
  "Mudsdale", "Dewpider", "Araquanid", "Fomantis", "Lurantis", "Morelull", "Shiinotic", "Salandit", "Salazzle", "Stufful",
  "Bewear", "Bounsweet", "Steenee", "Tsareena", "Comfey", "Oranguru", "Passimian", "Wimpod", "Golisopod", "Sandygast",
  "Palossand", "Pyukumuku", "Type: Null", "Silvally", "Minior", "Komala", "Turtonator", "Togedemaru", "Mimikyu", "Bruxish",
  "Drampa", "Dhelmise", "Jangmo-o", "Hakamo-o", "Kommo-o", "Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini", "Cosmog",
  "Cosmoem", "Solgaleo", "Lunala", "Nihilego", "Buzzwole", "Pheromosa", "Xurkitree", "Celesteela", "Kartana", "Guzzlord",
  "Necrozma", "Magearna", "Marshadow", "Poipole", "Naganadel", "Stakataka", "Blacephalon", "Zeraora", "Meltan", "Melmetal",
  "Grookey", "Thwackey", "Rillaboom", "Scorbunny", "Raboot", "Cinderace", "Sobble", "Drizzile", "Inteleon", "Skwovet",
  "Greedent", "Rookidee", "Corvisquire", "Corviknight", "Blipbug", "Dottler", "Orbeetle", "Nickit", "Thievul", "Gossifleur",
  "Eldegoss", "Wooloo", "Dubwool", "Chewtle", "Drednaw", "Yamper", "Boltund", "Rolycoly", "Carkol", "Coalossal",
  "Applin", "Flapple", "Appletun", "Silicobra", "Sandaconda", "Cramorant", "Arrokuda", "Barraskewda", "Toxel", "Toxtricity",
  "Sizzlipede", "Centiskorch", "Clobbopus", "Grapploct", "Sinistea", "Polteageist", "Hatenna", "Hattrem", "Hatterene", "Impidimp",
  "Morgrem", "Grimmsnarl", "Obstagoon", "Perrserker", "Cursola", "Sirfetch'd", "Mr. Rime", "Runerigus", "Milcery", "Alcremie",
  "Falinks", "Pincurchin", "Snom", "Frosmoth", "Stonjourner", "Eiscue", "Indeedee", "Morpeko", "Cufant", "Copperajah",
  "Dracozolt", "Arctozolt", "Dracovish", "Arctovish", "Duraludon", "Dreepy", "Drakloak", "Dragapult", "Zacian", "Zamazenta",
  "Eternatus", "Kubfu", "Urshifu", "Zarude", "Regieleki", "Regidrago", "Glastrier", "Spectrier", "Calyrex", "Deoxys",
  "Jirachi", "Mew", "Celebi", "Victini", "Keldeo", "Meloetta", "Genesect", "Diancie", "Hoopa", "Volcanion",
  "Magearna", "Marshadow", "Zeraora", "Zarude", "Meltan", "Melmetal", "Kubfu", "Urshifu", "Zacian", "Zamazenta",
  "Eternatus", "Calyrex", "Wyrdeer", "Kleavor", "Ursaluna", "Basculegion", "Sneasler", "Overqwil", "Enamorus", "Sprigatito",
  "Floragato", "Meowscarada", "Fuecoco", "Crocalor", "Skeledirge", "Quaxly", "Quaxwell", "Quaquaval", "Lechonk", "Oinkologne",
  "Tarountula", "Spidops", "Nymble", "Lokix", "Pawmi", "Pawmo", "Pawmot", "Tandemaus", "Maushold", "Fidough",
  "Dachsbun", "Smoliv", "Dolliv", "Arboliva", "Squawkabilly", "Nacli", "Naclstack", "Garganacl", "Charcadet", "Armarouge",
  "Ceruledge", "Tadbulb", "Bellibolt", "Wattrel", "Kilowattrel", "Maschiff", "Mabosstiff", "Shroodle", "Grafaiai", "Bramblin",
  "Brambleghast", "Toedscool", "Toedscruel", "Klawf", "Capsakid", "Scovillain", "Rellor", "Rabsca", "Flittle", "Espathra",
  "Tinkatink", "Tinkatuff", "Tinkaton", "Wiglett", "Wugtrio", "Bombirdier", "Finizen", "Palafin", "Varoom", "Revavroom",
  "Cyclizar", "Orthworm", "Glimmet", "Glimmora", "Greavard", "Houndstone", "Flamigo", "Cetoddle", "Cetitan", "Veluza",
  "Dondozo", "Tatsugiri", "Annihilape", "Clodsire", "Farigiraf", "Dudunsparce", "Kingambit", "Great Tusk", "Scream Tail", "Brute Bonnet",
  "Flutter Mane", "Slither Wing", "Sandy Shocks", "Iron Treads", "Iron Bundle", "Iron Hands", "Iron Jugulis", "Iron Moth",
  "Iron Thorns", "Frigibax", "Arctibax", "Baxcalibur", "Gimmighoul", "Gholdengo", "Wo-Chien", "Chien-Pao", "Ting-Lu", "Chi-Yu",
  "Roaring Moon", "Iron Valiant", "Koraidon", "Miraidon", "Walking Wake", "Iron Leaves", "Dipplin", "Poltchageist", "Sinistcha",
  "Okidogi", "Munkidori", "Fezandipiti", "Ogerpon", "Archaludon", "Hydrapple", "Gouging Fire", "Raging Bolt", "Iron Boulder",
  "Iron Crown", "Terapagos", "Pecharunt"]
 
function extractPokemonNameFromPage() {
  // Use the provided CSS selector to target the element containing the Pokémon card name.
  var productNameElement = document.querySelector('#mainContent > div > div.vim.x-item-title > h1 > span');

// Check if the element was found and has text content.
  if (productNameElement && productNameElement.textContent) {
    // Get the raw title text.
    var rawTitle = productNameElement.textContent.trim();
    console.log("Raw title: " + rawTitle);
    // List of words to exclude.
    var excludedWords = ['waifu', 'Mint', 'MINT', 'Mint!', 'MINT!', 'art', 'rare', 'pokemon',
     'japenese','1999','2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010',
      '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021',
      '2022', '2023', '2024', 'HOLO', 'Holo', 'Rare', 'RARE','Base', 'Set', 'base','  set', 'BASE SET',
      'Jungle', 'jungle', 'JUNGLE', 'Fossil', 'fossil', 'FOSSIL','Base Set 2', 'base set 2', 'BASE SET 2', 'Team Rocket', 
      'team rocket', 'TEAM ROCKET', 'Gym Heroes', 'gym heroes','GYM HEROES', 'Gym Challenge', 'gym challenge', 'GYM CHALLENGE', 
      'Neo Genesis','neo genesis', 'NEO GENESIS', 'Neo Discovery', 'neo discovery', 'NEO DISCOVERY', 'Neo Revelation',
      'neo revelation', 'NEO REVELATION', 'Neo Destiny', 'neo destiny', 'NEO DESTINY', 'Legendary Collection',
      'legendary collection', 'LEGENDARY COLLECTION', 'Expedition Base Set', 'expedition base set',
      'EXPEDITION BASE SET', 'Aquapolis', 'aquapolis', 'AQUAPOLIS', 'Skyridge', 'skyridge', 'SKYRIDGE',
      'EX Ruby & Sapphire', 'ex ruby & sapphire', 'EX RUBY & SAPPHIRE', 'EX Sandstorm', 'ex sandstorm',
      'EX SANDSTORM', 'EX Dragon', 'ex dragon', 'EX DRAGON', 'EX Team Magma vs Team Aqua', 'ex team magma vs team aqua', 
      'EX TEAM MAGMA VS TEAM AQUA', 'EX Hidden Legends', 'ex hidden legends', 'EX HIDDEN LEGENDS', 'EX FireRed & LeafGreen',
      'ex firered & leafgreen', 'EX FIRERED & LEAFGREEN', 'EX Team Rocket Returns', 'ex team rocket returns', 
      'EX TEAM ROCKET RETURNS', 'EX Deoxys', 'ex deoxys', 'EX DEOXYS', 'EX Emerald', 'ex emerald', 'EX EMERALD', 
      'EX Unseen Forces', 'ex unseen forces', 'EX UNSEEN FORCES', 'EX Delta Species', 'ex delta species', 'EX DELTA SPECIES', 
      'EX Legend Maker', 'ex legend maker', 'EX LEGEND MAKER', 'EX Holon Phantoms', 'ex holon phantoms', 'EX HOLON PHANTOMS', 
      'EX Crystal Guardians', 'ex crystal guardians', 'EX CRYSTAL GUARDIANS', 'EX Dragon Frontiers', 'ex dragon frontiers', 
      'EX DRAGON FRONTIERS', 'EX Power Keepers', 'ex power keepers', 'EX POWER KEEPERS', 'Diamond & Pearl', 'diamond & pearl', 
      'DIAMOND & PEARL', 'Mysterious Treasures', 'mysterious treasures', 'MYSTERIOUS TREASURES', 'Secret Wonders', 'secret wonders', 
      'SECRET WONDERS', 'Great Encounters', 'great encounters', 'GREAT ENCOUNTERS', 'Majestic Dawn', 'majestic dawn', 'MAJESTIC DAWN',
      'Legends Awakened', 'legends awakened', 'LEGENDS AWAKENED', 'Stormfront', 'stormfront', 'STORMFRONT', 'Platinum', 'platinum', 
      'PLATINUM', 'Rising Rivals', 'rising rivals', 'RISING RIVALS', 'Supreme Victors', 'supreme victors', 'SUPREME VICTORS', 
      'Arceus', 'arceus', 'ARCEUS', 'HeartGold & SoulSilver', 'heartgold & soulSilver', 'HEARTGOLD & SOULSILVER', 'Unleashed', 
      'unleashed', 'UNLEASHED', 'Undaunted', 'undaunted', 'UNDAUNTED', 'Triumphant', 'triumphant', 'TRIUMPHANT', 'Call of Legends', 
      'call of legends', 'CALL OF LEGENDS', 'Black & White', 'black & white', 'BLACK & WHITE', 'Emerging Powers', 'emerging powers', 
      'EMERGING POWERS', 'Noble Victories', 'noble victories', 'NOBLE VICTORIES', 'Next Destinies', 'next destinies', 
      'NEXT DESTINIES', 'Dark Explorers', 'dark explorers', 'DARK EXPLORERS', 'Dragons Exalted', 'dragons exalted', 'DRAGONS EXALTED', 
      'Dragon Vault', 'dragon vault', 'DRAGON VAULT', 'Boundaries Crossed', 'boundaries crossed', 'BOUNDARIES CROSSED', 'Plasma Storm', 
      'plasma storm', 'PLASMA STORM', 'Plasma Freeze', 'plasma freeze', 'PLASMA FREEZE', 'Plasma Blast', 'plasma blast', 'PLASMA BLAST', 
      'Legendary Treasures', 'legendary treasures', 'LEGENDARY TREASURES', 'XY', 'xy', 'XY', 'Flashfire', 'flashfire', 'FLASHFIRE', 
      'Furious Fists', 'furious fists', 'FURIOUS FISTS', 'Phantom Forces', 'phantom forces', 'PHANTOM FORCES', 'Primal Clash', 
      'primal clash', 'PRIMAL CLASH', 'Roaring Skies', 'roaring skies', 'ROARING SKIES', 'Ancient Origins', 'ancient origins', 
      'ANCIENT ORIGINS', 'BREAKthrough', 'breakthrough', 'BREAKTHROUGH', 'BREAKpoint', 'breakpoint', 'BREAKPOINT', 'Generations', 
      'generations', 'GENERATIONS', 'Fates Collide', 'fates collide', 'FATES COLLIDE', 'Steam Siege', 'steam siege', 'STEAM SIEGE', 
      'Evolutions', 'evolutions', 'EVOLUTIONS', 'Sun & Moon', 'sun & moon', 'SUN & MOON', 'Guardians Rising', 'guardians rising', 
      'GUARDIANS RISING', 'Burning Shadows', 'burning shadows', 'BURNING SHADOWS', 'Shining Legends', 'shining legends', 
      'SHINING LEGENDS', 'Crimson Invasion', 'crimson invasion', 'CRIMSON INVASION', 'Ultra Prism', 'ultra prism', 'ULTRA PRISM', 
      'Forbidden Light', 'forbidden light', 'FORBIDDEN LIGHT', 'Celestial Storm', 'celestial storm', 'CELESTIAL STORM', 
      'Dragon Majesty', 'dragon majesty', 'DRAGON MAJESTY', 'Lost Thunder', 'lost thunder', 'LOST THUNDER', 'Team Up', 'team up',
      'Team up', 'team up', 'TEAM UP', 'Detective Pikachu', 'detective pikachu', 'DETECTIVE PIKACHU', 'Unbroken Bonds', 'unbroken bonds',
      'UNBROKEN BONDS', 'Unified Minds', 'unified minds', 'UNIFIED MINDS', 'Cosmic Eclipse', 'cosmic eclipse', 'COSMIC ECLIPSE', 
      'Sword & Shield', 'sword & shield', 'SWORD & SHIELD', 'Rebel Clash', 'rebel clash', 'REBEL CLASH', 'Darkness Ablaze', 
      'darkness ablaze', 'DARKNESS ABLAZE',"Champion's Path", "champion's path", "CHAMPION'S PATH", 'Vivid Voltage', 'vivid voltage', 'VIVID VOLTAGE', 'Battle Styles', 'battle styles', 
      'BATTLE STYLES', 'Chilling Reign', 'chilling reign', 'CHILLING REIGN', 'Evolving Skies', 'evolving skies', 'EVOLVING SKIES', 
      'Celebrations', 'celebrations', 'CELEBRATIONS', 'Fusion Strike', 'fusion strike', 'FUSION STRIKE', 'Brilliant Stars', 'brilliant stars', 
      'BRILLIANT STARS','Astral Radiance', 'astral radiance', 'ASTRAL RADIANCE','Lost Origin', 'LOST ORIGIN', 'lost origin',
      'Silver Tempest', 'SILVER TEMPEST', 'silver tempest','Crown Zenith', 'CROWN ZENITH', 'crown zenith','Scarlet & Violet',
      'SCARLET & VIOLET','scarlet & violet',"Paldea Evolved", "paldea evolved", "PALDEA EVOLVED", "Obsidian Flames", "obsidian flames", 
      "OBSIDIAN FLAMES","151","Paradox Rift", "paradox rift", "PARADOX RIFT", "Paldean Fates", "paldean fates", "PALDEAN FATES",
      "Temporal Forces", "temporal forces", "TEMPORAL FORCES", "Twilight Masquerade", "twilight masquerade", "TWILIGHT MASQUERADE",
      "Shrouded Fable", "shrouded fable", "SHROUDED FABLE","Stellar Crown", "stellar crown", "STELLAR CROWN","Surging Sparks", 
      "surging sparks", "SURGING SPARKS", 'shrouded', 'fable',
      'POKEMON', 'Pokemon', 'FULL', 'Full', 'full', 'Art', 'Psa', 'PSA','psa','CGC', 'Cgc', '9', '10', 'holo', 
      'HOLO', 'lv x', '-','uq5', 'tcg', 'Tcg', 'Unlimited','unlimited', '1', '2', 'Set', 'set', 'Card', 'card', 'EX', 'fire', 'red',
      'leaf', 'green', 'sun', 'moon', '&amp',';','gem', 'mint', '&amp;amp;', 'trainer', '&Amp;', 'Bgs', 'bgs', 'Black', 'black','white',
      'boundaries', 'crossed', '#', '8.5', '9.5', '&amp;', 'Pokémon', 'pokémon', 'cgc', '8', '7', '00','swsh', 'lost origin', 'Lost Origin',
      '(pop 8)', '(Pop 8)', '(', ')', 'pop', 'Pop', 'POP', 'ex deoxys', '(POP 8)', 'S-Chinese', 'Sword&Amp;Shield', 's-chinese', 'sword&amp;shield',
      'black star','promo', 'Black', 'Star', 'star','box', 'Box', 'Cs4bc', 'cs4bc', 'Ultra', 'ultra', 'tef','TEF','SIR', 'sir', 'Sir', 'Silver Tempest', 'Alt', 'alt', 'graded', 'Graded',
      'Fa', 'fa','FA', '#', '#0','No.','No','no','.','Team','team','Up','up','Detective','detective','Pikachu','pikachu','Unbroken',
      'unbroken','Bonds','bonds','Unified','unified','Minds','minds', 'Cosmic','cosmic','Eclipse','eclipse','Sword','sword','Shield',
      'shield','Rebel','rebel','Clash','clash','Darkness','darkness','Ablaze','ablaze','Champion','champion','Path','path','Vivid',
      'vivid','Voltage','voltage','Battle','battle','Styles','styles','Chilling','chilling','Reign','reign','Evolving','evolving',
      'Skies','skies','Celebrations','celebrations','Fusion','fusion','Strike','strike','Brilliant','brilliant','Stars','stars',
      'Astral','astral','Radiance','radiance','Lost','lost','Origin','origin','Silver','silver','Tempest','tempest','Crown','crown',
      'Zenith','zenith','Scarlet','scarlet','Violet','violet','Paldea','paldea','Evolved','evolved','Obsidian','obsidian','Flames',
      'flames','Paradox','paradox','Rift','rift','Fates','fates','Temporal','temporal','Forces','forces','Twilight','twilight',
      'Masquerade','masquerade','Shrouded','shrouded','Fable','fable','Stellar','stellar','Surging','surging','Sparks','sparks',
      'base','set','Base','Set','EX','ex','Fire','Red','fire','red','Leaf','Green','leaf','green','Sun','Moon','sun','moon',
      'team','Team','Rocket','rocket','Gym','gym','Heroes','heroes','Challenge','challenge','Neo','neo','Genesis','genesis',
      'Discovery','discovery','Revelation','revelation','Destiny','destiny','Legendary','legendary','Collection','collection',
      'Expedition','expedition','Aquapolis','aquapolis','Skyridge','skyridge','Ruby','Sapphire','ruby','sapphire','Sandstorm',
      'sandstorm','Dragon','dragon','Magma','magma','Aqua','aqua','Hidden','hidden','Legends','legends','FireRed','LeafGreen',
      'firered','leafgreen','Returns','returns','Deoxys','deoxys','Emerald','emerald','Unseen','unseen','Forces','forces',
      'Delta','delta','Species','species','Legend','legend','Maker','maker','Holon','holon','Phantoms','phantoms','Crystal',
      'crystal','Guardians','guardians','Dragon','Frontiers','frontiers','Power','power','Keepers','keepers','Diamond','diamond',
      'Pearl','pearl','Mysterious','mysterious','Treasures','treasures','Secret','secret','Wonders','wonders','Great','great',
      'Encounters','encounters','Majestic','majestic','Dawn','dawn','Awakened','awakened','Stormfront','stormfront','Platinum',
      'platinum','Rising','rising','Rivals','rivals','Supreme','supreme','Victors','victors','Arceus','arceus','HeartGold',
      'SoulSilver','heartgold','soulsilver','Unleashed','unleashed','Undaunted','undaunted','Triumphant','triumphant','Call',
      'call','Black','White','black','white','Emerging','emerging','Powers','powers','Noble','noble','Next','next','Destinies',
      'destinies','Dark','Explorers','explorers','Dragons','dragons','Exalted','exalted','Vault','vault','Boundaries','boundaries',
      'Crossed','crossed','Plasma','plasma','Storm','storm','Freeze','freeze','Blast','blast','Legendary','legendary','Treasures',
      'treasures','XY','xy','Flashfire','flashfire','Furious','furious','Fists','fists','Phantom','phantom','Forces','forces',
      'Primal','primal','Clash','clash','Roaring','roaring','Skies','skies','Ancient','ancient','Origins','origins','BREAKthrough',
      'breakthrough','BREAKpoint','breakpoint','Generations','generations','Fates','fates','Collide','collide','Steam','steam',
      'Siege','siege','Evolutions','evolutions','Sun','Moon','sun','moon','Guardians','Rising','guardians','rising','Burning',
      'Shadows','burning','shadows','Shining','shining','Legends','legends','Crimson','crimson','Invasion','invasion','Ultra',
      'Prism','prism','Forbidden','forbidden','Light','light','Celestial','celestial','Storm','storm','Dragon','Majesty','majesty',
      'Stamp','stamp','Center','center','cgc9','CGC9','&','tag'];

    
   // Remove excluded words from the title.
   var cleanedTitle = excludeWords(rawTitle, excludedWords);

   console.log('Cleaned Title:', cleanedTitle);  // Log the cleaned title.

   return cleanedTitle;
 } else {
   console.log('Extraction Failed.');  // Log if the extraction fails.
   return null; // Return null if the extraction fails.
 }
}

function extractCardInfo(title, setNames) {
  // Convert the title to lowercase for case-insensitive comparison.
  const lowercasedTitle = title.toLowerCase();
  
  // Define grading companies
  const gradingCompanies = ["psa", "cgc", "bgs"];
  const edition = ["1st edition", "1st ed", "ed", "1 ed","1st"];
  const holoType = ["HOLO", "Holo","holo", "holo rare", "Holo Rare", "HOLO RARE", "Reverse Holo", "reverse holo", "REVERSE HOLO","Reverse","reverse"];
  // Initialize variables
  let company = null;
  let grade = null;
  let setName = null;
  let cardEdition = null;
  let holo = null;
  let cardNumber = null;  //To differentiate the different # IDs

  // Split the title into words
  const words = lowercasedTitle.split(/\s+/);
  
  let toggler = false; //toggler
  // Iterate through the words to identify grading company and grade
  for (let word of words) {
      //console.log("Word is " + word); //Debug statement
      if (gradingCompanies.includes(word)) {
          company = word.toUpperCase();
          console.log("Company is " + company);
      }
      if (!isNaN(parseFloat(word)) && grade ==null && company !=null) {
          grade = parseFloat(word);
          console.log("Grade is " + grade);
      }
      else if (company==null && gradingCompanies.some(company => word.startsWith(company))) {
        company = word.replace(/[0-9]/g, '').toUpperCase();
        grade = parseFloat(word.replace(/[^0-9]/g, ''));
      }
      if (edition.includes(word)){
        cardEdition = "[1st edition]";
      }
      else cardEdition = "";
      if(holoType.includes(word) && toggler == false){
        holo = "["+word+"]";
        toggler = true;
        console.log("TOGGLED");
      }
      if(word.includes("#0")){
        cardNumber = "#" + word.substring(2);
        console.log("Substringed card number is " + cardNumber);
      }
    }
  // Iterate through set names to find a match in the title
  for (let name of setNames) {
      if (lowercasedTitle.includes(name.toLowerCase())) {
          setName = name;
      }
  }  
  // Return the extracted information
  console.log("Before returned card number is " + cardNumber);

  return {
      company,
      grade,
      setName,
      cardEdition, //this is just the edition
      holo,
      cardNumber,
  };
}

 function excludeWords(title, excludedWords) {
    // Convert the title to lowercase for case-insensitive comparison.
    var lowercasedTitle = title.toLowerCase();
    // Filter out excluded words.
    const cardInfo = extractCardInfo(lowercasedTitle,setNames);
    if (cardInfo) {
      console.log(cardInfo.grade);
      console.log(cardInfo.company);
      console.log(cardInfo.setName);
      console.log(cardInfo.holo);
      console.log(cardInfo.cardEdition);
      console.log(cardInfo.cardNumber);
  } else {
      console.log("Invalid title format");
  }
    var cleanedTitle = lowercasedTitle.split(' ').filter(function(word) {
      // Check if the word is not in the excludedWords array.
      return !excludedWords.includes(word);
    }).join(' ');
    // Remove set names from the title. Who knows if it works but might as well
    cleanedTitle = cleanedTitle.split(' ').filter(function(word) {
      return !setNames.includes(word);
    }).join(' ');
    // Replace "&" with "and"
    cleanedTitle = cleanedTitle.replace(/&/g, 'and');
    if(cardInfo.setName == null) cardInfo.setName = "";
    if(cardInfo.grade == null) cardInfo.grade = "0";
    if(cardInfo.holo == null) cardInfo.holo = "";
    if(cardInfo.cardNumber == null) cardInfo.cardNumber = "";
    cleanedTitle= cleanedTitle.split('/')[0];
    cleanedTitle= cleanedTitle.split('#')[0];

    
    cleanedTitle = cleanedTitle +" "+cardInfo.cardEdition+" "+cardInfo.holo+" "+cardInfo.cardNumber+" "+cardInfo.setName;
    globalGrade = cardInfo.grade;
    return cleanedTitle;
  }