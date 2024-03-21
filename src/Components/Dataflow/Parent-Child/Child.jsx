

var childStyle = {
    boxShadow: '0 0 10px red',
    margin: '40px 40px',
    padding: '30px'
}

const Child = ({ parentData }) => {
    return (
        <div style={childStyle}>
            <h2>Child Component</h2>
            <p>{parentData}</p>
        </div>
    )
}

export default Child;