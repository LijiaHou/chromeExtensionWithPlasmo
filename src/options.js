
// 初始化url
const span = document.querySelector('.url')
chrome.storage.sync.get("url", (data) => {
    const curUrl = data.url
    span.innerHTML = curUrl
})

let inputValue
const inputEl = document.querySelector('input')
inputEl.addEventListener('input', (e) => {
    inputValue = e.target.value
})

inputEl.addEventListener('blur', () => {
    if (inputValue) {
        span.innerHTML = inputValue
        chrome.storage.sync.set({url: inputValue})
    }
})
