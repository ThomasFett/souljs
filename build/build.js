({
    include: ["main", "../vendor/almond.js"],
    optimize: "none",
    baseUrl: "../src/",
    wrap: {
        startFile: "intro.js",
        endFile: "outro.js"
    }
})