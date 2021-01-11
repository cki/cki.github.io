var lasteventkey = [];

document.addEventListener('keydown', function(event) {
    // we do not want to do our thing
    if (event.key !== 'ENTER' ||
        !event.shiftKey ||
        document.activeElement.tagName !== 'TEXTAREA') {

        return;
    }
    
    console.log('we will do our thing');
    
});
