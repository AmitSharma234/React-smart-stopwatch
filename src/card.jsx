import profilrpic from './assets/images.jpg';

function card(){
    return(
        <div className="card">
            <img src={profilrpic} alt="Profile Picture" />
            <h2>LAND CRUSIER</h2>
            <p>Make By The Toyta(Japanese Techmology)</p>
        </div>
    );
}
export default card
