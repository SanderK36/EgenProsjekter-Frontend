const historyNavbar = /*HTML*/`
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" onclick="renderHomePage()">
      <img id="headerLogo" src="./Imgs/MetallicaSkull.jpg" alt="Logo" width="70" height="70" class="d-inline-block align-text-top" onerror="console.error('Failed to load image: ./Imgs/MetallicaSkull.jpg')">
    </a>
  </div>
</nav>
`;

function renderHistoryPage() {
    try {
        const app = document.getElementById("app");
        if (!app) {
            throw new Error("Element with id 'app' not found");
        }
        app.innerHTML = /*HTML*/`
        ${historyNavbar}
        <div class="historyContent">
            <h1>Metallica History</h1>
            <p>Dive into the legacy of Metallica, from their formation to global dominance.</p>
            <div class="timeline">
                <div class="timeline-item" data-year="1981">
                    <div class="timeline-year">1981</div>
                    <div class="timeline-details">
                        <h3>Formation of Metallica</h3>
                        <p>Metallica was formed in Los Angeles by drummer Lars Ulrich and guitarist James Hetfield after Ulrich placed an ad in The Recycler. They recruited Ron McGovney and Dave Mustaine, officially forming on October 28, 1981. The band name came from Ulrich's friend Ron Quintana’s fanzine idea.</p>
                        <img src="./Imgs/metallica-1981.jpg" alt="Metallica 1981" class="timeline-img" onerror="console.error('Failed to load image: ./Imgs/metallica-1981.jpg')">
                    </div>
                </div>
                <div class="timeline-item" data-year="1983">
                    <div class="timeline-year">1983</div>
                    <div class="timeline-details">
                        <h3>Kill 'Em All Released</h3>
                        <p>Metallica’s debut album, released July 25, 1983, via Megaforce Records. Recorded with a $15,000 budget, it introduced their thrash metal sound with tracks like "Hit the Lights." Cliff Burton joined as bassist, shaping the band’s early sound.</p>
                        <img src="./Imgs/kill-em-all_cover.jpg" alt="Kill 'Em All" class="timeline-img" onerror="console.error('Failed to load image: ./Imgs/kill-em-all_cover.jpg')">
                    </div>
                </div>
                <div class="timeline-item" data-year="1986">
                    <div class="timeline-year">1986</div>
                    <div class="timeline-details">
                        <h3>Master of Puppets & Tragedy</h3>
                        <p>Released March 3, 1986, Master of Puppets became a thrash masterpiece. Tragically, bassist Cliff Burton died in a bus accident on September 27, 1986, during a European tour. Jason Newsted joined as bassist soon after.</p>
                        <img src="./Imgs/master-of-puppets_cover.jpg" alt="Master of Puppets" class="timeline-img" onerror="console.error('Failed to load image: ./Imgs/master-of-puppets_cover.jpg')">
                    </div>
                </div>
                <div class="timeline-item" data-year="1991">
                    <div class="timeline-year">1991</div>
                    <div class="timeline-details">
                        <h3>The Black Album</h3>
                        <p>Released August 12, 1991, Metallica (The Black Album) marked their mainstream breakthrough with hits like "Enter Sandman." Produced by Bob Rock, it sold over 16 million copies in the U.S. alone.</p>
                        <img src="./Imgs/the-black-album_cover.jpg" alt="The Black Album" class="timeline-img" onerror="console.error('Failed to load image: ./Imgs/the-black-album_cover.jpg')">
                    </div>
                </div>
                <div class="timeline-item" data-year="2009">
                    <div class="timeline-year">2009</div>
                    <div class="timeline-details">
                        <h3>Rock and Roll Hall of Fame</h3>
                        <p>Metallica was inducted into the Rock and Roll Hall of Fame on April 4, 2009, including members James Hetfield, Lars Ulrich, Kirk Hammett, Robert Trujillo, Jason Newsted, and Cliff Burton.</p>
                        <img src="./Imgs/metallica-hall-of-fame.jpg" alt="Hall of Fame 2009" class="timeline-img" onerror="console.error('Failed to load image: ./Imgs/metallica-hall-of-fame.jpg')">
                    </div>
                </div>
                <div class="timeline-item" data-year="2023">
                    <div class="timeline-year">2023</div>
                    <div class="timeline-details">
                        <h3>72 Seasons Released</h3>
                        <p>Released April 14, 2023, 72 Seasons explores themes of personal growth. Produced by Greg Fidelman, it showcases Metallica’s enduring energy with tracks like "72 Seasons" and "Shadows Follow."</p>
                        <img src="./Imgs/72-seasons_cover.jpg" alt="72 Seasons" class="timeline-img" onerror="console.error('Failed to load image: ./Imgs/72-seasons_cover.jpg')">
                    </div>
                </div>
            </div>
        </div>
        `;
        console.log("History page rendered successfully");
    } catch (error) {
        console.error("Error rendering history page:", error);
        document.getElementById("app").innerHTML = "<h1>Error rendering history page. Check Console (F12).</h1>";
    }
}

window.renderHistoryPage = renderHistoryPage;
console.log("HistoryPage.js loaded");