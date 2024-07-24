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
       'darkness ablaze', 'DARKNESS ABLAZE', 'Vivid Voltage', 'vivid voltage', 'VIVID VOLTAGE', 'Battle Styles', 'battle styles', 
       'BATTLE STYLES', 'Chilling Reign', 'chilling reign', 'CHILLING REIGN', 'Evolving Skies', 'evolving skies', 'EVOLVING SKIES', 
       'Celebrations', 'celebrations', 'CELEBRATIONS', 'Fusion Strike', 'fusion strike', 'FUSION STRIKE', 'Brilliant Stars', 'brilliant stars', 
       'BRILLIANT STARS','Silver Tempest', 'SILVER TEMPEST', 'silver tempest'];
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
      'Jungle', 'jungle', 'JUNGLE', 'Fossil', 'fossil', 'FOSSIL', 'Base Set 2', 'base set 2',
      'BASE SET 2', 'Team Rocket', 'team rocket', 'TEAM ROCKET', 'Gym Heroes', 'gym heroes',
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
      'darkness ablaze', 'DARKNESS ABLAZE', 'Vivid Voltage', 'vivid voltage', 'VIVID VOLTAGE', 'Battle Styles', 'battle styles', 
      'BATTLE STYLES', 'Chilling Reign', 'chilling reign', 'CHILLING REIGN', 'Evolving Skies', 'evolving skies', 'EVOLVING SKIES', 
      'Celebrations', 'celebrations', 'CELEBRATIONS', 'Fusion Strike', 'fusion strike', 'FUSION STRIKE', 'Brilliant Stars', 'brilliant stars', 
      'BRILLIANT STARS','Silver Tempest', 'SILVER TEMPEST', 'silver tempest','POKEMON', 'Pokemon', 'FULL', 'Full', 'full', 'Art', 'Psa', 'PSA','psa', 'CGC', 'Cgc', '9', '10', 'holo', 
      'HOLO', 'lv x', '-','uq5', 'tcg', 'Tcg', 'Unlimited','unlimited', '1', '2', 'Set', 'set', 'Card', 'card', 'EX', 'fire', 'red',
      'leaf', 'green', 'sun', 'moon', '&amp',';','gem', 'mint', '&amp;amp;', 'trainer', '&Amp;', 'Bgs', 'bgs', 'Black', 'black','white',
      'boundaries', 'crossed', '#', '8.5', '9.5', '&amp;', 'Pokémon', 'pokémon', 'cgc', '8', '7', '00','swsh', 'lost origin', 'Lost Origin',
      '(pop 8)', '(Pop 8)', '(', ')', 'pop', 'Pop', 'POP', 'ex deoxys', '(POP 8)', 'S-Chinese', 'Sword&Amp;Shield', 's-chinese', 'sword&amp;shield',
      'black star','promo', 'Black', 'Star', 'star','box', 'Box', 'Cs4bc', 'cs4bc', 'Ultra', 'ultra', 'tef','TEF','SIR', 'sir', 'Sir', 'Silver Tempest', 'Alt', 'alt', 'graded', 'Graded'];

    
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
  const holoType = ["HOLO", "Holo","holo", "holo rare", "Holo Rare", "HOLO RARE"];
  // Initialize variables
  let company = null;
  let grade = null;
  let setName = null;
  let cardEdition = null;
  let holo = null;
  
  // Split the title into words
  const words = lowercasedTitle.split(/\s+/);
  
  // Iterate through the words to identify grading company and grade
  for (let word of words) {
      if (gradingCompanies.includes(word)) {
          company = word.toUpperCase();
      }
      else if (!isNaN(parseFloat(word)) && grade ==null && company !=null) {
          grade = parseFloat(word);
      }
      if (edition.includes(word)){
        cardEdition = "[1st edition]";
      }
      else cardEdition = "";
      if(holoType.includes(word)){
        holo = "[holo]";
      }
      else holo = "";
  }
    
  // Iterate through set names to find a match in the title
  for (let name of setNames) {
      if (lowercasedTitle.includes(name.toLowerCase())) {
          setName = name;
      }
  }  
  // Return the extracted information
  return {
      company,
      grade,
      setName,
      cardEdition, //this is just the edition
      holo,
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
  } else {
      console.log("Invalid title format");
  }
    var cleanedTitle = lowercasedTitle.split(' ').filter(function(word) {
      // Check if the word is not in the excludedWords array.
      return !excludedWords.includes(word);
    }).join(' ');
    if(cardInfo.setName == null) cardInfo.setName = "";
    if(cardInfo.grade == null) cardInfo.grade = "0";
    cleanedTitle= cleanedTitle.split('/')[0];
    
    cleanedTitle = cleanedTitle +" "+cardInfo.cardEdition + cardInfo.holo +cardInfo.setName;
    globalGrade = cardInfo.grade;
    return cleanedTitle;
  }