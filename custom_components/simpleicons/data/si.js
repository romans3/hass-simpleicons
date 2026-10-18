const icons = {};

async function getIcon(name) {
    try {
        if (icons[name]) {
            return {
                path: icons[name].path,
                viewBox: "-1 -1 26 26",
            };
        }

        const response = await fetch(`/simpleicons/icons/${name}`);

        if (!response.ok) {
            return {};
        }

        const si = await response.json();

        icons[name] = si;

        return {
            path: si.path,
            viewBox: "-1 -1 26 26",
        };
    } catch (err) {
        console.error("Simple Icons:", err);
        return {};
    }
}

async function getIconList() {
    try {
        const response = await fetch(`/simpleicons/icons`);

        if (!response.ok) {
            return [];
        }

        return await response.json();
    } catch (err) {
        console.error("Simple Icons:", err);
        return [];
    }
}

window.customIcons = window.customIcons || {};
window.customIcons.si = { getIcon, getIconList };
