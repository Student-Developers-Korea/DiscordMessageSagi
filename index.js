function getMessage(id) {
    return $('#app-mount .app-1q1i1E div').childNodes[1].firstElementChild.firstElementChild.lastElementChild.firstElementChild.childNodes[1].lastElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.childNodes[id].firstElementChild.lastElementChild.textContent
}

function editMessage(id, content) {
    $('#app-mount .app-1q1i1E div').childNodes[1].firstElementChild.firstElementChild.lastElementChild.firstElementChild.childNodes[1].lastElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.childNodes[id].firstElementChild.lastElementChild.innerText = content.toString()
    return getMessage(id)
}

function fetchMessage() {
    var messages = {}
    $('#app-mount .app-1q1i1E div').childNodes[1].firstElementChild.firstElementChild.lastElementChild.firstElementChild.childNodes[1].lastElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.childNodes.forEach(x => {
        if (!x.id.includes('messages')) return
        if (!x.firstElementChild) return
        messages[x.id.split('messages-')[1]] = x.firstElementChild.lastElementChild.textContent
    })
    return messages
}
