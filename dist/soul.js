(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.soul = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG5UaGlzIG1vZHVsZSBpcyB0aGUgbWFpbiBhY2Nlc3MgcG9pbnQgdG8gdGhlIGxpYnJhcnkuIGl0IGNvbnRhaW5zIHR3byBmdW5jdGlvbnMgd2hpY2ggZWl0aGVyIGNyZWF0ZSBhIHN0YXRpYyBvciBhIGR5bmFtaWMgc291bmQgYW5kIG90aGVyXG5mdW5jdGlvbnMgdG8gY29uZmlndXJhdGUgdGhlIGxpYnJhcnlcbioqL1xuXG52YXIgc291bGpzID0ge1xuXG4gICAgLyoqXG4gICAgICogSlVTVCBBIERVTU1ZIFlFVCFcbiAgICAgKi9cbiAgICBpbml0U291bDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgYSBuZXcgc291bC5cIik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhbmQgcmV0dXJucyBhIHNvdWxKUy1vYmplY3Qgd2hpY2ggcGxheXMgYSBzdGF0aWMgc291bmQgb24gY2FsbGluZyB0aGUgcGxheSgpIG1ldGhvZC5cbiAgICAgKiBKVVNUIEEgRFVNTVkgWUVUIVxuICAgICAqL1xuICAgIGNyZWF0ZVN0YXRpY1NvdW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDcmVhdGVkIGEgc3RhdGljIHNvdW5kLlwiKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXR1cm4gYSBzb3VsSlMtb2JqZWN0IHdoaWNoIGRvZXNuJ3QgaGF2ZSBhIHNwZWNpZmljIGxlbmd0aCBhbmQgY2FuIGJlIG1hbmlwdWxhdGVkIHdoaWxlIGl0IGlzIHBsYXllZC5cbiAgICAgKiBKVVNUIEEgRFVNTVkgWUVUIVxuICAgICAqL1xuICAgIGNyZWF0ZUR5bmFtaWNTb3VuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRlZCBhIGR5bmFtaWMgc291bmQuXCIpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc291bGpzOyJdfQ==
