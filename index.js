const message = {
    nodeList: () => document.querySelector('#app-mount .app-1q1i1E div').childNodes[1].firstElementChild.firstElementChild.lastElementChild.firstElementChild.childNodes[1].lastElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.childNodes,
    get: id => document.querySelector('#app-mount .app-1q1i1E div').childNodes[1].firstElementChild.firstElementChild.lastElementChild.firstElementChild.childNodes[1].lastElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.childNodes[id].firstElementChild.lastElementChild.textContent,
    edit(id, content) {
        document.querySelector('#app-mount .app-1q1i1E div').childNodes[1].firstElementChild.firstElementChild.lastElementChild.firstElementChild.childNodes[1].lastElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.childNodes[id].firstElementChild.lastElementChild.innerText = content
        return message.get(id)
    },
    fetch() {
        let messages = {}
        
        document.querySelector('#app-mount .app-1q1i1E div').childNodes[1].firstElementChild.firstElementChild.lastElementChild.firstElementChild.childNodes[1].lastElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.childNodes.forEach(x => {
            if (!x.id.includes('messages') || !x.firstElementChild) return
            messages[x.id.split('messages-')[1]] = x.firstElementChild.lastElementChild.textContent
        })
        
        return messages
    }
}
