module.exports = {
    title: "Magic MacGuffins",
    summary: "Plants magic MacGuffins in Homestuck pages",
    author: "nattropaic",
    modVersion: "1.0.0",

    edit(archive) {
        for (const i in macguffins) {
            const replacement = macguffins[i] || ["juju", "macguffin"];
            archive.mspa.story[i].content = archive.mspa.story[i].content.replace(...replacement);
        }
    },
};

const macguffins = {
    "007604": null,
};
