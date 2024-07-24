// background.js
let ebayTabs = {};  // Object to track eBay tab states
let pricechartingTabs; // obj to delete tabs to prevent zombie tabs
chrome.runtime.onInstalled.addListener(() => {
    console.log("PriceChecker extension installed!");
});
//Open tab in background
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'openTabInBackground') {
        chrome.tabs.create({ url: request.url, active: false, pinned:true });
    }
});

//Sends same message upon noticing an ebay tab loaded
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    if (changeInfo.status === 'complete' && tab.url.includes('ebay.com/itm/')) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var ebayPageURL = tabs[0].url;
            chrome.tabs.sendMessage(tabs[0].id, { action: 'searchPokemon', ebayPageURL: ebayPageURL });
          });
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'fetchPSA9Price') {
        const ebayTabId = sender.tab.id;  // Get the eBay tab ID that made the request
        ebayTabs[ebayTabId] = ebayTabId;  // Store the eBay tab ID in the state
        const gotGrade = request.grade;

        chrome.tabs.query({ url: "*://*.pricecharting.com/*" }, function(tabs) {
            if (chrome.runtime.lastError) {
                console.error('Error querying tabs:', chrome.runtime.lastError.message);
                return;
            }

            if (tabs && tabs.length > 0) {
                const tabId = tabs[0].id;
                pricechartingTabs = tabId;
                chrome.tabs.sendMessage(tabId, { action: 'setGrade', grade: gotGrade });
            } else {
                console.log('Pricecharting tab is not open');
            }
        });
    } else if (request.action === 'PSA9Price') {
        const psa9price = request.price;
        const notificationOptions = {
            type: 'basic',
            iconUrl: 'icon.png',
            title: 'PSA 9 Price',
            message: 'PSA 9 price is: ' + psa9price,
        };
        //chrome.notifications.create(null, notificationOptions);

        // Send a message to each eBay tab that made the request
        for (let tabId in ebayTabs) {
            chrome.tabs.sendMessage(parseInt(tabId), { action: 'updateEbayPrice', price: psa9price });
        }
        chrome.tabs.remove(pricechartingTabs);   
    }
});
