// TileTxtSelect control
// This is what is described in "Tegels 1."
// - Shows an image when there is no text
// - Shows a h2 and the text (can be several p) when there is text
// I prefer to select on the presence of an img src as implemented in Tile()

function TileTxtSelect({title, src, children}) {
    if (children === undefined) {
        return (
            <section>
                <img src={src} alt={title}/>
            </section>
        );
    } else {
        return (
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        );
    }
}

export default TileTxtSelect;