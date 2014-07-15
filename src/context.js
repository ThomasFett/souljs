define( [], function() {

    // Creating the AudioContext, depending on the vendor prefixes.
    var context = (function() {
            if (window.hasOwnProperty( 'webkitAudioContext' )) {
                return new webkitAudioContext();
            }
            else if (window.hasOwnProperty( 'AudioContext' )) {
                return new AudioContext();
            }
            else {
                console.log("This browser doesn't support the Web Audio API. Please use the current version of Chrome!");
            }
        })();

    return context;
});