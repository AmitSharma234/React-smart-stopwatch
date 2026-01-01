function Button1() {
    const handleClick = (e) => e.target.textContent = "Clicked";
    return (
        <button onClick={(e) => handleClick(e)}>Click Me</button>
    );
}
export default Button1