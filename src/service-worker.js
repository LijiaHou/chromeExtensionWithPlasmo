const url = 'http://www.baidu.com'

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({url})
    console.log(`Default url is set to: ${url}`)
})
