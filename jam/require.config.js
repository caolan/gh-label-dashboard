var jam = {
    "packages": [
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "lodash",
            "location": "jam/lodash",
            "main": "dist/lodash.compat.js"
        },
        {
            "name": "pithy",
            "location": "jam/pithy",
            "main": "lib/pithy.js"
        }
    ],
    "version": "0.2.17",
    "shim": {}
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "lodash",
            "location": "jam/lodash",
            "main": "dist/lodash.compat.js"
        },
        {
            "name": "pithy",
            "location": "jam/pithy",
            "main": "lib/pithy.js"
        }
    ],
    "shim": {}
});
}
else {
    var require = {
    "packages": [
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "lodash",
            "location": "jam/lodash",
            "main": "dist/lodash.compat.js"
        },
        {
            "name": "pithy",
            "location": "jam/pithy",
            "main": "lib/pithy.js"
        }
    ],
    "shim": {}
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}