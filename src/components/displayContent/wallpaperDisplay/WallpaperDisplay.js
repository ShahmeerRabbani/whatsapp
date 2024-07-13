import React from 'react';

function WallpaperDisplay({hoverColor, backgroundHoverColor, doodlesOpacity}) {
    return ( 
        <>
        <div style={{height: '100%', width: '100%',}}>
        <article style={{backgroundColor: backgroundHoverColor}}>
            <div className="background" style={{opacity: doodlesOpacity}}></div>
            <header style={{justifyContent: 'center'}}>
              <span>Wallpaper Preview</span>
            </header>
            <main>
              
            </main>
            <footer>
                
            </footer>
          </article>
        </div>
        </>
     );
}

export default WallpaperDisplay;