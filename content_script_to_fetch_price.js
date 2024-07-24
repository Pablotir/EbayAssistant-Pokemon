chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'setGrade') {
        const grade = request.grade;

        // Switch cases implementation or any logic based on grade
        let selector;
        let correctedGrade = Math.ceil(grade);
        switch (parseInt(correctedGrade)) {
            case 8:
                selector = '#new_price > span.price.js-price';
                break;
            case 9:
                selector = '#graded_price > span.price.js-price';
                break;
            case 10:
                selector = '#manual_only_price > span.price.js-price';
                break;  
            case 0:
                selector = '#used_price > span.price.js-price';
            default:
                selector = '#used_price > span.price.js-price';
        }

        const priceElement = document.querySelector(selector);
        const psa9price = priceElement ? priceElement.textContent.trim() : 'Price element not found';
        console.log(priceElement);
        // Send the price information back to the background script
        chrome.runtime.sendMessage({ action: 'PSA9Price', price: psa9price });
    }
});
