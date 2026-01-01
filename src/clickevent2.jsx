function ClickEvent2() {
    const handleClick = (e) => {
        e.target.style.backgroundColor = "yellow";
    }
    return (
        <div onClick={(e) => handleClick(e)} style={{width: "200px", height: "100px", border: "1px solid black", textAlign: "center", lineHeight: "100px"}}>
            Click this box
        </div>
    );
}       
export default ClickEvent2