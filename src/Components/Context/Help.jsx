import { useSearchParams } from "react-router-dom";



const Help = () => {
    const [searchParams] = useSearchParams();
    return (

        <div>
            <h2>Help Component : {searchParams.get("name")} {searchParams.get("city")}</h2>
        </div>
    )
}

export default Help;