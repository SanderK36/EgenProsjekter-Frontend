const homeNavbar = /*HTML*/`
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" onclick="renderHomePage()">
      <img id="headerLogo" src="./Imgs/MetallicaSkull.jpg" alt="Logo" width="70" height="70" class="d-inline-block align-text-top" onerror="console.error('Failed to load image: ./Imgs/MetallicaSkull.jpg')">
    </a>
  </div>
</nav>
`;

function renderHomePage() {
    try {
        const app = document.getElementById("app");
        if (!app) {
            throw new Error("Element with id 'app' not found");
        }
        app.innerHTML = /*HTML*/`
        ${homeNavbar}
        <div class="infoList">
            <div class="infoListText" onclick="renderAlbumPage()">Album</div>
            <div class="infoListText">Members</div>
            <div class="infoListText" onclick="renderHistoryPage()">History</div>
            <div class="infoListText">Fun facts</div>
        </div>
        `;
        console.log("Home page rendered successfully");
    } catch (error) {
        console.error("Error rendering home page:", error);
        document.getElementById("app").innerHTML = "<h1>Error rendering home page. Check Console (F12).</h1>";
    }
}

try {
    if (!document.getElementById("app")) {
        throw new Error("Element with id 'app' not found on initial load");
    }
    renderHomePage();
    console.log("Initial home page rendered successfully");
} catch (error) {
    console.error("Error rendering initial home page:", error);
    document.getElementById("app").innerHTML = "<h1>Error loading initial page. Check Console (F12).</h1>";
}

window.renderHomePage = renderHomePage;
console.log("HomePage.js loaded");