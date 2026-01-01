// Inline css like that type of css file is give 
// by same page using const styles that type of css is known as Inline css 

function Button(){

    const Styles={
            backgroundColor:'blue',
            color:'white',
            padding:'10px 20px',
            border:'none',
            borderRadius:'5px',
            cursor:'pointer'
        }
    return(
        <button style={Styles}>Click Me!</button>
    );
}
export default Button

