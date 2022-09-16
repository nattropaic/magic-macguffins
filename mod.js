module.exports = {
    title: "Magic MacGuffins",
    summary: "Plants magic MacGuffins in Homestuck pages",
    author: "nattropaic",
    modVersion: "1.0.0",

    edit(archive) {
        for (const macguffin of macguffins) {
            const page = macguffin[0];
            // If omitted, replace the content field.
            const field = macguffin.length > 1 ? macguffin[1] : "content";
            // If omitted, replace every lowercase "juju" with "macguffin".
            const replacement = macguffin.length > 2 ? macguffin.slice(2) : [/\bjuju/g, "macguffin"];

            archive.mspa.story[page][field] = archive.mspa.story[page][field].replace(...replacement);
        }
    },
};

// The replacements to make! This is a list (not an Object or Map), so one page
// can get multiple replacements.
//
// These pages were identified by searching in the mspa.json for "juju" with
// these capitalizations. These replacements are made with editorial discretion!
const macguffins = [
    ["006548", "content", /\bJuJu/g, "MAGIC MACGuFFIN"],
    ["006548"],
    ["006549", "content", /\bJuJu/g, "MAGIC MACGuFFIN"],
    ["006550", "content", /\bJuJu/g, "MACGuFFIN"],
    ["006550", "title", /\bjuju/, "magical macguffin"],
    ["006862", "content", /\bjUjU/, "lUck"],
    ["006862", "content", /\bjUjU/, "magical macgUffin"],
    ["006862", "content", /\bjUjU/g, "macgUffin"],
    ["006862"],
    ["006974", "content", /\bJuJu/g, "MACGuFFIN"],
    ["006975", "content", /\bJuJu/g, "MACGuFFIN"],
    ["007003", "content", /\bJUJU/g, "MACGUFFIN"],
    ["007015", "content", /\bJUJU/g, "MACGUFFIN"],
    ["007016", "content", /\bJUJU/g, "MACGUFFIN"],
    ["007018"],
    ["007346"],
    ["007574", "content", /\bJUJU/, "MAGIC MACGUFFIN"],
    ["007574", "content", /\bJUJU/g, "MACGUFFIN"],
    ["007574"],
    ["007575", "content", /\bJUJU/g, "MACGUFFIN"],
    ["007575"],
    ["007576", "content", /\bJUJU/g, "MACGUFFIN"],
    ["007578", "content", /\bJUJU/g, "MACGUFFIN"],
    ["007591", "content", /\bjuju/g, "magic macguffin"],
    ["007592"],
    ["007594", "content", /\bjUjU/g, "macgUffin"],
    ["007602", "title"],
    ["007602"],
    ["007604", "title"],
    ["007604"],
    ["007606", "content", /\bJujus/, "MacGuffins"],
    ["007606", "title"],
    ["007607"],
    ["007608"],
    ["007610", "content", /\bJUJU/g, "MACGUFFIN"],
    ["007679", "content", /\bJUJU/g, "MACGUFFIN"],
    ["007681", "content", /\bJUJU/g, "MACGUFFIN"],
    ["007681"],
    ["007883"],
    ["007890"],
    ["007974"],
    ["007993"],
    ["008011"],
    ["008039"],
    ["009165"],
    ["009311", "content", /\bJUJU/g, "MACGUFFIN"],
    ["009315", "content", /\bJUJU/g, "MACGUFFIN"],
    ["009322", "content", /\bJUJU/g, "MACGUFFIN"],
    ["009323", "content", /\bJUJU/g, "MACGUFFIN"],
    ["009324", "content", /\bJUJU/g, "MACGUFFIN"],
    ["009326", "content", /\bJUJU/g, "MACGUFFIN"],
    ["009343", "content", /\bJUJU/g, "MACGUFFIN"],
    ["009344", "content", /\bJUJU/g, "MACGUFFIN"],
    ["009427"],
    ["009650"],
    ["009749"],
];
