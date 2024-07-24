document.addEventListener('DOMContentLoaded', function () {
      
    document.getElementById('searchButton').addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var ebayPageURL = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, { action: 'searchPokemon', ebayPageURL: ebayPageURL });
      });
    });
    document.getElementById('bidButton').addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var ebayPageURL = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, { action: 'bidSearch', ebayPageURL: ebayPageURL });
      });
    });

    document.getElementById('ImageButton').addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          var activeTab = tabs[0];
          chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"}, function(response) {
            var imageURL = response.url;

           //chrome.tabs.create({ url: imageURL });
           //chrome.tabs.create({url: 'https://serpapi.com/search.json?engine=google_reverse_image&image_url='+imageURL});
          // const searchURL = `https://serpapi.com/search.json?engine=google_reverse_image&image_url=${encodeURIComponent(imageURL)}&api_key=${apiKey}&q=site:${siteFilter}`;
          });
        });
      });

    
  });
  