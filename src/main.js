/**
This module is the main access point to the library. it contains two functions which either create a static or a dynamic sound and other
functions to configurate the library
**/

var souljs = {

    /**
     * JUST A DUMMY YET!
     */
    initSoul: function() {
        console.log("creating a new soul.");
    },

    /**
     * This function creates and returns a soulJS-object which plays a static sound on calling the play() method.
     * JUST A DUMMY YET!
     */
    createStaticSound: function() {
        console.log("Created a static sound.");
    },

    /**
     * This function return a soulJS-object which doesn't have a specific length and can be manipulated while it is played.
     * JUST A DUMMY YET!
     */
    createDynamicSound: function() {
        console.log("Created a dynamic sound.");
    }
};

module.exports = souljs;