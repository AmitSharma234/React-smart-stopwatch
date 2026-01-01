import Props from 'prop-types';

function props(props) {
    return (
        <div>
            <h1>Title: {props.title}</h1>
            <p>Description: {props.description}</p>
            <p>Age: {props.age}</p>
            <p>Is Student: {props.isstudent ? "Yes" : "No"}</p>
        </div>
    );
}
export default props


props.propTypes = {
    title: Props.string.isRequired,
    description: Props.string.isRequired,
    age: Props.number.isRequired,
    isstudent: Props.bool.isRequired
};

props.defaultProps = {
    title: "Default Title",
    description: "Default Description",
    age: 0,
    isstudent: false
};  