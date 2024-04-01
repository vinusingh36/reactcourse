import { Link, useNavigate, useSearchParams } from "react-router-dom";



const Profile = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const addQueryParams = () => {
        setSearchParams({
            name: "jnv",
            city: "lko"
        })
    }


    return (

        <div style={{ textAlign: "center" }}>
            <h2>Profile Component</h2>
            <button onClick={addQueryParams} >Add Query Params</button>&emsp;
            <button onClick={() => {
                setSearchParams({
                    name: "mmmut",
                    city: "blr"
                })
            }}>Update Query Params</button>&emsp;
            <Link to='/help?name=vineet&city=lko'>GO TO HELP</Link>&emsp;




        </div>
    )
}

export default Profile;