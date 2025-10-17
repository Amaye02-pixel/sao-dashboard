function toggleCenter() {
    const panel = document.getElementById("centerPanel");
    panel.style.display = panel.style.display === "none" || panel.style.display === "" ? "flex" : "none";
}

function openMap() {
    closeAll();
    document.getElementById("mapView").style.display = "block";
}

function closeMap() {
    document.getElementById("mapView").style.display = "none";
}

function openPanel(type) {
    const panel = document.getElementById("centerPanel");
    const content = document.getElementById("panelContent");
    closeAll();
    panel.style.display = "flex";

    let html = "";
    switch (type) {
        case "inventory":
            html = "<h3>🎒 Inventory</h3><ul><li>AR Blade</li><li>Health Chip</li><li>Energy Field</li></ul>";
            break;
        case "status":
            html = "<h3>💠 Status</h3><p>Level: 42<br>HP: 98%<br>AR Sync: Stable<br>Network: Secure</p>";
            break;
        case "settings":
            html = "<h3>⚙ Settings</h3><p>Display: Holographic<br>Sound: Enabled<br>AR Link: Active</p>";
            break;
        default:
            html = "<p>System online. Awaiting input.</p>";
    }
    content.innerHTML = html;
}

function closeAll() {
    document.getElementById("mapView").style.display = "none";
    document.getElementById("centerPanel").style.display = "none";
}
