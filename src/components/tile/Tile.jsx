// Tile control
// This is what is described in "Tegels 2."
// - Shows an image when there is an image src provided
// - Shows a h2 and the text (can be several p) when there is no image src provided
// I prefer this implementation as it is more often the choice to display an image or not
// If there is the need to select upon the presence of text, then TileTxtSelect() can be used

function Tile({title, src, children}) {
    if (src === undefined) {
        return (
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        );
    } else {
        return (
            <section>
                <img src={src} alt={title}/>
            </section>
        );
    }
}

export default Tile;