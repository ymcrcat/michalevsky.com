function Music(props) {
    return (
        <div>
            <section className="columns">
                <h2>Music</h2>
                <iframe 
                    title="Spotify"
                    style={{borderRadius: '12px'}} 
                    src="https://open.spotify.com/embed/artist/1xgoH38ElY1n9EnT1htz7e?utm_source=generator" 
                    width="100%" 
                    height="352" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy" />
                <br/>

                <iframe 
                    title="Soundcloud"
                    width="100%" 
                    height="450"
                    frameborder="no" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/44197455&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"/>
            </section>

            <section className="columns">
                <h3>Old</h3>
                This section contains some music I have composed long ago. Several pieces were
                written together with Vitaly Koshelev, using various DAWs software was used including
                MicroLogic Audio 
                , <a href="http://buzzmachines.com">Buzz Tracker</a>
                , <a href="http://www.modplug.com">Modplug Trucker</a>
                , <a href="http://www.rebirthmuseum.com/">Rebirth</a>
                , and <a href="http://www.propellerheads.se/products/recycle/">Recycle</a>.
                Composed during the period of 1997-2000.
            </section>

            <section className="columns">
                <a href="http://www.michalevsky.com/music/lovefire_rmx.mp3">Lovefire (House Remix)</a> - produced using ModPlug Tracker.<br/>
                <a href="http://www.michalevsky.com/music/wam.mp3">Walk Around Mad (House Remix)</a> - Yan Michalevsky and Vitaly Koshelev (V-Shark).<br/>
                <a href="http://www.michalevsky.com/music/rnarnd.mp3">Round and Round</a> - A remix of the famous dance track by Ti.Pi.Cal.
                Composed using ModPlug Tracker.<br/>
                <a href="http://www.michalevsky.com/music/k300.mp3">K-300</a> - produced using ModPlug Tracker.<br/>
                <a href="http://www.michalevsky.com/music/Afterdark1.mp3">After-dark Echoes</a> - produced using ModPlug Tracker.<br/>
                <a href="http://www.michalevsky.com/music/CyberSound-Track4.mp3">Track 4</a> - Unnamed track from CyberSound album.
                Composed using MicroLogic.<br/>
            </section>
        </div>
    )
}

export default Music;