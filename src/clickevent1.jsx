function profilepic() {

    const imgurl = "./src/assets/images.jpg";
    const click = (e) => e.target.style.border = "2px solid blue";
    return(
        <img src={imgurl} alt="Profile Pic" onClick={(e) => click(e)} />
    );
}       
export default profilepic