/**
 * Loggings JS 
 * by Elex
 */
const L = {
    enabled: true,
    level: 0,
    v: function (message) { if (L.enabled && L.level <= 0) console.log(message) },
    d: function (message) { if (L.enabled && L.level <= 1) console.debug(message) },
    i: function (message) { if (L.enabled && L.level <= 2) console.info(message) },
    w: function (message) { if (L.enabled && L.level <= 3) console.warn(message) },
    e: function (message) { if (L.enabled && L.level <= 4) console.error(message) }
};

module.exports = L;

