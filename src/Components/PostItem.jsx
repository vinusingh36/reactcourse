

const PostItem = ({ data }) => {
    return (
        <div>
            {
                data.length > 0 ? <ul>
                    {
                        data.map((data) => {
                            return <li key={data.id}>
                                {data.title}
                            </li>
                        })
                    }
                </ul> :
                    <h3 style={{ color: "orangered" }}>No Post Available</h3>
            }
        </div>
    )
}

export default PostItem;