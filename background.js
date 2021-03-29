browser.contextMenus.create({
    id: "WanikaniKanjiSearch",
    title: "Search Kanji on Wanikani",
    contexts: ["selection"],
    "icons": {
        "16": "icons/kanji16.png",
        "32": "icons/kanji32.png"
      }
});

browser.contextMenus.create({
    id: "WanikaniVocabularySearch",
    title: "Search Vocabulary on Wanikani",
    contexts: ["selection"],
    "icons": {
        "16": "icons/vocab16.png",
        "32": "icons/vocab32.png"
      }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "WanikaniKanjiSearch") {
        const url = "https://www.wanikani.com/kanji/"+ info.selectionText;
        browser.tabs.create({url:url});
    } else if (info.menuItemId === "WanikaniVocabularySearch") {
        const url = "https://www.wanikani.com/vocabulary/"+ info.selectionText;
        browser.tabs.create({url:url});
    }
})
