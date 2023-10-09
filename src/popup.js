const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    chrome.storage.sync.get("url", (data) => {
        chrome.tabs.create({url: data.url})
    })
})