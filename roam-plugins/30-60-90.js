var lasteventkey = [];

document.addEventListener('keydown', function(event) {
    // we do not want to do our thing
    if (event.key === 'Enter' && event.shiftKey) {
        console.log('we will do our thing!');
        return;
    }
});
