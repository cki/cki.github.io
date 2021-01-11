function focus(element) {
    element.dispatchEvent(new Event('focus'));
}

function type(element, key) {
    console.log('typing fired');
    element.dispatchEvent(new KeyboardEvent('keypress',{'key':key}));
}

function backspace(element) {
    console.log('backspace fired');
    const key = 'Backspace';
    element.dispatchEvent(new KeyboardEvent('keypress',{'keyCode': 8}));
    // element.dispatchEvent(new KeyboardEvent('keydown',{'keyCode': 20}));
}

document.addEventListener('keydown', function(event) {
    // silly computationally cheap test
    if (!(event.key === 'Enter' && event.shiftKey)) {
        return;
    }
    
    // we want to do this while somebody is typing in a roam document
    if (!(document.activeElement.tagName === 'TEXTAREA')) {
        return;
    }
    
    const textArea = document.activeElement;
    const text = textArea.value;
    
    // does not contain our text
    if (!(text.indexOf('**30') > 0)) return;

    console.log('we are running!!!');
    backspace(textArea);
    backspace(textArea);
    backspace(textArea);
    backspace(textArea);
    type(textArea, 'B');
    type(textArea, 'L');
    type(textArea, 'A');
});
