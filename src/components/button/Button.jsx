// Button control
// - logs text to console when clicked
// - can be set to disabled/enabled

function Button({title, disabled}) {
    //using disabled as parameter so that it can be omitted and default to false making the default button enabled
    return (
        <button
            onClick={() => console.log({title})}
            disabled={disabled}
        >
            {title}
        </button>
    );
}

export default Button;