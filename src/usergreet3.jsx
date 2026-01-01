import prop from 'prop-types'

function usergreet3(props){
    const welcome = <h2 className="welcome">Welcome  {props.name}</h2>
    const notwelcome =  <h2 className="notwel">please login this page </h2>

    return( props.islogin ? welcome : notwelcome 
    );
}

 
usergreet3.prototype = {
    islogin: prop.bool
}

usergreet3.defaultProps={
    islogin : false,
    namd : "guest",
}
export default usergreet3