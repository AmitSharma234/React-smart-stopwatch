function Usergreet2(props){
    return(props.islogin? <h2 className="welcome">Welcome  {props.name}</h2>:
                        <h2 className="notwel">please login</h2>);
} 
export default Usergreet2