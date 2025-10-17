const clickSound = document.getElementById("clickSound");
const linkStartSound = document.getElementById("linkStartSound");
const startScreen = document.getElementById("startScreen");
const panel = document.getElementById("centerPanel");
const mapView = document.getElementById("mapView");
const content = document.getElementById("panelContent");

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", async () => {
    try {
        await linkStartSound.play();
        startScreen.classList.add("fade-out");
        setTimeout(() => (startScreen.style.display = "none"), 1000);
    } catch (err) {
        console.error("Audio playback failed:", err);
    }
});

// === CLICK SOUND ===
function playClick() {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => { });
}

// === MENU PANEL ===
function togglePanel() {
    playClick();
    if (panel.classList.contains("active")) {
        panel.classList.remove("active");
        setTimeout(() => (panel.style.display = "none"), 300);
    } else {
        panel.style.display = "flex";
        setTimeout(() => panel.classList.add("active"), 10);
    }
}

// === MAP ===
function openMap() {
    playClick();
    panel.style.display = "none";
    panel.classList.remove("active");
    mapView.style.display = "block";
}

function closeMap() {
    playClick();
    mapView.style.display = "none";
}

// === PANELS ===
function openPanel(type) {
    playClick();
    mapView.style.display = "none";
    panel.style.display = "flex";
    setTimeout(() => panel.classList.add("active"), 10);

    switch (type) {
        case "inventory":
            content.innerHTML = `
        <h3>🎒 Inventory</h3>
        <ul>
          <li>Photon Blade</li>
          <li>AR Chip</li>
          <li>Energy Field</li>
        </ul>`;
            break;
        case "status":
            content.innerHTML = `
        <h3>💠 Status</h3>
        <p>Level: 42<br>HP: 98%<br>AR Sync: Stable<br>Network: Secure</p>`;
            break;
        case "settings":
            content.innerHTML = `
        <h3>⚙ Settings</h3>
        <p>Display: Holographic<br>Sound: Enabled<br>AR Link: Active</p>`;
            break;
        default:
            content.innerHTML = `<p>System online. Awaiting input.</p>`;
    }
}

/* ===== SAO CURSOR ===== */
document.body.style.cursor = "none";
const cursor = document.createElement("div");
cursor.classList.add("sao-cursor");
document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(animateCursor);
}
animateCursor();
