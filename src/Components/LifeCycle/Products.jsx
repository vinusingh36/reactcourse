
import { logDOM } from "@testing-library/react";
import { useEffect, useState } from "react";


const Products = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        getData();
    }, [page]);

    const getData = async () => {
        let res = await fetch(`https://reqres.in/api/users?page=${page}`);
        let productData = await res.json();
        setData(productData.data);

    }

    const pageChange = (value) => {
        setPage(page + value)
    }

    return (
        <div  >
            <h2>Products Component</h2>
            <button disabled={page === 1} onClick={() => pageChange(-1)} >Prev</button>&emsp;
            <button>{page}</button>&emsp;
            <button disabled={page === 2} onClick={() => pageChange(+1)}>Next</button>
            <br />
            <br />
            {
                data.length > 0 ?
                    (<div style={{
                        display: "grid",
                        textAlign: "center",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "15px",
                    }}>
                        {
                            data.map((item) => {
                                return <div key={item.id} style={{
                                    boxShadow: "0 0 10px black",
                                    padding: "15px"
                                }} >
                                    <img src={item.avatar} alt="" width={200} height={200} />
                                    <h4>{item.first_name} {item.last_name}</h4>
                                    <h4>{item.email}</h4>
                                </div>
                            })
                        }
                    </div>) : (<div>
                        <h2>No Data Found</h2>
                    </div>)
            }
        </div>
    )
}

export default Products;