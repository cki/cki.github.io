var lasteventkey = [];



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
    if (!(text.indexOf('**30') < 0)) return;

    console.log('we are running!!!');

});
