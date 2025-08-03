const albumNavbar = /*HTML*/`
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" onclick="renderHomePage()">
      <img id="headerLogo" src="./Imgs/MetallicaSkull.jpg" alt="Logo" width="70" height="70" class="d-inline-block align-text-top" onerror="console.error('Failed to load image: ./Imgs/MetallicaSkull.jpg')">
    </a>
  </div>
</nav>
`;

function renderAlbumPage() {
    try {
        const app = document.getElementById("app");
        if (!app) {
            throw new Error("Element with id 'app' not found");
        }
        app.innerHTML = /*HTML*/`
        ${albumNavbar}
        <div class="albumContent">
            <h1>Albums</h1>
            <p>Explore Metallica's discography here.</p>
            <div id="albumGrid">
                <img class="albumImg" data-album="kill-em-all" src="./Imgs/kill-em-all_cover.jpg" alt="Kill 'Em All" onclick="showModal('kill-em-all')" onerror="console.error('Failed to load image: ./Imgs/kill-em-all_cover.jpg')">
                <img class="albumImg" data-album="ride-the-lightning" src="./Imgs/ride-the-lightning_cover.jpg" alt="Ride the Lightning" onclick="showModal('ride-the-lightning')" onerror="console.error('Failed to load image: ./Imgs/ride-the-lightning_cover.jpg')">
                <img class="albumImg" data-album="master-of-puppets" src="./Imgs/master-of-puppets_cover.jpg" alt="Master of Puppets" onclick="showModal('master-of-puppets')" onerror="console.error('Failed to load image: ./Imgs/master-of-puppets_cover.jpg')">
                <img class="albumImg" data-album="garage-days" src="./Imgs/garage-days-re-revisited_cover.jpg" alt="Garage Days Re-Revisited" onclick="showModal('garage-days')" onerror="console.error('Failed to load image: ./Imgs/garage-days-re-revisited_cover.jpg')">
                <img class="albumImg" data-album="and-justice" src="./Imgs/and-justice-for-all_cover.jpg" alt="...And Justice for All" onclick="showModal('and-justice')" onerror="console.error('Failed to load image: ./Imgs/and-justice-for-all_cover.jpg')">
                <img class="albumImg" data-album="black-album" src="./Imgs/the-black-album_cover.jpg" alt="The Black Album" onclick="showModal('black-album')" onerror="console.error('Failed to load image: ./Imgs/the-black-album_cover.jpg')">
                <img class="albumImg" data-album="load" src="./Imgs/load_cover.jpg" alt="Load" onclick="showModal('load')" onerror="console.error('Failed to load image: ./Imgs/load_cover.jpg')">
                <img class="albumImg" data-album="reload" src="./Imgs/reload_cover.jpg" alt="Reload" onclick="showModal('reload')" onerror="console.error('Failed to load image: ./Imgs/reload_cover.jpg')">
                <img class="albumImg" data-album="garage-inc" src="./Imgs/garage-inc_cover.jpg" alt="Garage Inc." onclick="showModal('garage-inc')" onerror="console.error('Failed to load image: ./Imgs/garage-inc_cover.jpg')">
                <img class="albumImg" data-album="sm" src="./Imgs/sm_cover.jpg" alt="S&M" onclick="showModal('sm')" onerror="console.error('Failed to load image: ./Imgs/sm_cover.jpg')">
                <img class="albumImg" data-album="st-anger" src="./Imgs/st-anger_cover.jpg" alt="St. Anger" onclick="showModal('st-anger')" onerror="console.error('Failed to load image: ./Imgs/st-anger_cover.jpg')">
                <img class="albumImg" data-album="death-magnetic" src="./Imgs/death-magnetic_cover.jpg" alt="Death Magnetic" onclick="showModal('death-magnetic')" onerror="console.error('Failed to load image: ./Imgs/death-magnetic_cover.jpg')">
                <img class="albumImg" data-album="through-the-never" src="./Imgs/metallica-through-the-never_cover.jpg" alt="Through the Never" onclick="showModal('through-the-never')" onerror="console.error('Failed to load image: ./Imgs/metallica-through-the-never_cover.jpg')">
                <img class="albumImg" data-album="hardwired" src="./Imgs/hardwired-to-self-destruct_cover.jpg" alt="Hardwired... to Self-Destruct" onclick="showModal('hardwired')" onerror="console.error('Failed to load image: ./Imgs/hardwired-to-self-destruct_cover.jpg')">
                <img class="albumImg" data-album="sm2" src="./Imgs/sm2_cover.jpg" alt="S&M2" onclick="showModal('sm2')" onerror="console.error('Failed to load image: ./Imgs/sm2_cover.jpg')">
                <img class="albumImg" data-album="72-seasons" src="./Imgs/72-seasons_cover.jpg" alt="72 Seasons" onclick="showModal('72-seasons')" onerror="console.error('Failed to load image: ./Imgs/72-seasons_cover.jpg')">
            </div>
            <div id="albumModal" class="modal">
                <div class="modal-content">
                    <span class="close-button" onclick="closeModal()">&times;</span>
                    <h2 id="modalTitle"></h2>
                    <p id="modalInfo"></p>
                </div>
            </div>
        </div>
        `;
        console.log("Album page rendered successfully");
    } catch (error) {
        console.error("Error rendering album page:", error);
        document.getElementById("app").innerHTML = "<h1>Error rendering album page. Check Console (F12).</h1>";
    }
}

function getAlbumData(albumId) {
    const albumInfo = {
        "kill-em-all": { 
            title: "Kill 'Em All", 
            year: 1983, 
            tracks: "Hit the Lights, The Four Horsemen, Motorbreath, ...", 
            info: "Kill 'Em All is Metallica's debut studio album released on July 25, 1983, through the independent label Megaforce Records. After forming in 1981, Metallica began by playing shows in local clubs in Los Angeles. They recorded several demos to gain attention from club owners and eventually relocated to San Francisco to secure the services of bassist Cliff Burton. The group's No Life 'til Leather demo tape (1982) was noticed by Megaforce label head Jon Zazula, who signed them and provided a budget of $15,000 (equivalent to $48,835.49 in 2025) for recording. The album was recorded in May with producer Paul Curcio at the Music America Studios in Rochester, New York. It was originally intended to be titled Metal Up Your Ass, with cover art featuring a hand clutching a dagger emerging from a toilet bowl. Zazula convinced the band to change the name because distributors feared that releasing an album with such an offensive title and artwork would diminish its chances of commercial success." 
        },
        "ride-the-lightning": { 
            title: "Ride the Lightning", 
            year: 1984, 
            tracks: "Fight Fire with Fire, Ride the Lightning, ...", 
            info: "Ride the Lightning, released on July 27, 1984, is Metallica's second studio album. Recorded in Copenhagen, Denmark, it marked a shift toward more complex songwriting and themes, including mortality and injustice. The album introduced bassist Cliff Burton’s influence, with intricate basslines and the instrumental 'The Call of Ktulu.' It was a critical and commercial success, establishing Metallica as a leading force in thrash metal." 
        },
        "master-of-puppets": { 
            title: "Master of Puppets", 
            year: 1986, 
            tracks: "Battery, Master of Puppets, ...", 
            info: "Released on March 3, 1986, Master of Puppets is Metallica’s third album and a landmark in heavy metal. Recorded in Denmark with producer Flemming Rasmussen, it explores themes of control and addiction. The album is considered a masterpiece, featuring complex compositions and the band’s tightest performances, with tracks like 'Master of Puppets' and 'Orion' showcasing their musical evolution." 
        },
        "garage-days": { 
            title: "The $5.98 E.P.: Garage Days Re-Revisited", 
            year: 1987, 
            tracks: "Helpless, The Small Hours, ...", 
            info: "This EP, released on August 21, 1987, features cover songs recorded to break in new bassist Jason Newsted after Cliff Burton’s death. Recorded in a garage, it captures a raw, loose vibe, paying tribute to influences like Diamond Head and Misfits. The EP’s low price and gritty energy made it a fan favorite." 
        },
        "and-justice": { 
            title: "...And Justice for All", 
            year: 1988, 
            tracks: "Blackened, ...And Justice for All, ...", 
            info: "Released on August 25, 1988, this album is known for its complex, progressive song structures and themes of political and social injustice. It was Metallica’s first album with Jason Newsted and faced criticism for its thin production, particularly the low bass mix. The track 'One' earned the band their first Grammy nomination." 
        },
        "black-album": { 
            title: "Metallica (The Black Album)", 
            year: 1991, 
            tracks: "Enter Sandman, Sad but True, ...", 
            info: "Released on August 12, 1991, the Black Album marked Metallica’s mainstream breakthrough. Produced by Bob Rock, it features a polished sound and accessible songs like 'Enter Sandman' and 'Nothing Else Matters.' The album sold over 16 million copies in the U.S. alone and redefined heavy metal’s commercial potential." 
        },
        "load": { 
            title: "Load", 
            year: 1996, 
            tracks: "Ain't My Bitch, 2 X 4, ...", 
            info: "Released on June 4, 1996, Load saw Metallica experimenting with a more hard rock and alternative sound. The band’s new image and shorter songs sparked debate among fans, but the album still achieved commercial success. It was recorded over a year with producer Bob Rock." 
        },
        "reload": { 
            title: "Reload", 
            year: 1997, 
            tracks: "Fuel, The Memory Remains, ...", 
            info: "Released on November 18, 1997, Reload continued the stylistic shift from Load, featuring tracks recorded during the same sessions. It includes hits like 'Fuel' and 'The Memory Remains,' with a mix of hard rock and blues influences, maintaining Metallica’s commercial dominance." 
        },
        "garage-inc": { 
            title: "Garage Inc.", 
            year: 1998, 
            tracks: "Free Speech for the Dumb, It's Electric, ...", 
            info: "This double album, released on November 24, 1998, compiles cover songs from Metallica’s career, including the Garage Days EP and new recordings of tracks by bands like Black Sabbath and Motorhead. It showcases the band’s influences and love for raw, unpolished music." 
        },
        "sm": { 
            title: "S&M", 
            year: 1999, 
            tracks: "The Ecstasy of Gold, The Call of Ktulu, ...", 
            info: "S&M, released on November 23, 1999, is a live album recorded with the San Francisco Symphony, conducted by Michael Kamen. It blends Metallica’s heavy metal with orchestral arrangements, featuring reimagined versions of classics like 'Master of Puppets' and new track 'No Leaf Clover.'" 
        },
        "st-anger": { 
            title: "St. Anger", 
            year: 2003, 
            tracks: "Frantic, St. Anger, ...", 
            info: "Released on June 5, 2003, St. Anger marked a raw, aggressive return for Metallica during a turbulent period. Produced by Bob Rock, it features a stripped-down sound and controversial snare drum tone. The album reflects the band’s internal struggles and recovery." 
        },
        "death-magnetic": { 
            title: "Death Magnetic", 
            year: 2008, 
            tracks: "That Was Just Your Life, The End of the Line, ...", 
            info: "Released on September 12, 2008, Death Magnetic was a return to Metallica’s thrash roots. Produced by Rick Rubin, it features complex, high-energy tracks and restored the band’s critical acclaim after St. Anger. The album also marked Robert Trujillo’s studio debut." 
        },
        "through-the-never": { 
            title: "Through the Never", 
            year: 2013, 
            tracks: "Creeping Death, For Whom the Bell Tolls, ...", 
            info: "Released on September 24, 2013, this is the soundtrack to Metallica’s 3D concert film. Recorded live, it captures the band’s raw energy with performances of classics like 'Master of Puppets' and 'Enter Sandman,' tied to a narrative-driven cinematic experience." 
        },
        "hardwired": { 
            title: "Hardwired... to Self-Destruct", 
            year: 2016, 
            tracks: "Hardwired, Atlas, Rise!, ...", 
            info: "Released on November 18, 2016, this album marked a return to Metallica’s aggressive, thrash-inspired sound. Produced by Greg Fidelman, it features tight, riff-heavy tracks like 'Moth Into Flame.' It was a commercial and critical success, topping charts worldwide." 
        },
        "sm2": { 
            title: "S&M2", 
            year: 2020, 
            tracks: "All Within My Hands, Nothing Else Matters, ...", 
            info: "Released on August 28, 2020, S&M2 is a follow-up to the original S&M, recorded live with the San Francisco Symphony. It features new orchestral arrangements of songs like 'All Within My Hands' and classics, blending metal with symphonic elements." 
        },
        "72-seasons": { 
            title: "72 Seasons", 
            year: 2023, 
            tracks: "72 Seasons, Shadows Follow, ...", 
            info: "Released on April 14, 2023, 72 Seasons explores themes of personal growth and life’s stages. Produced by Greg Fidelman, it features heavy, intricate tracks and showcases Metallica’s enduring energy. The album received praise for its vitality and cohesion." 
        }
    };
    return albumInfo[albumId] || { title: "Unknown Album", year: "N/A", tracks: "No track information available.", info: "No additional information available." };
}

function showModal(albumId) {
    try {
        const modal = document.getElementById("albumModal");
        const modalTitle = document.getElementById("modalTitle");
        const modalInfo = document.getElementById("modalInfo");
        if (!modal || !modalTitle || !modalInfo) {
            throw new Error("Modal elements not found");
        }
        const albumData = getAlbumData(albumId);
        modalTitle.textContent = albumData.title;
        modalInfo.innerHTML = `
            <strong>Released:</strong> ${albumData.year}<br>
            <strong>Sample Tracks:</strong> ${albumData.tracks}<br>
            <strong>Info:</strong> ${albumData.info}
        `;
        modal.style.display = "flex";
        console.log(`Modal opened for album: ${albumId}`);
    } catch (error) {
        console.error("Error showing modal:", error);
    }
}

function closeModal() {
    try {
        const modal = document.getElementById("albumModal");
        if (!modal) {
            throw new Error("Modal element not found");
        }
        modal.style.display = "none";
        console.log("Modal closed");
    } catch (error) {
        console.error("Error closing modal:", error);
    }
}

window.renderAlbumPage = renderAlbumPage;
window.closeModal = closeModal;
window.showModal = showModal;
console.log("AlbumPage.js loaded");