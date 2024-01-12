chrome.contextMenus.create({
    id: "jotoba-search",
    title: "Search on Jotoba",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if(info.menuItemId == "jotoba-search") {
        searchJotoba(info.selectionText);
    }
});

function searchJotoba(data) {
    browser.tabs.create({url:'https://jotoba.de/search/0/'+data});
}
