import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";



const Details = () => {
    const [product, setProduct] = useState("");
    const { id } = useParams();


    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            })
    }

    if (!product.rating) return;
    //  console.log(product.rating);

    return (
        <div>
            <h2>Products Details Component</h2>
            <div style={{
                textAlign: "center",
                margin: "20px auto",
                width: "50%",
                boxShadow: " 0 0 10px black",
                padding: "25px"
            }} >
                <img src={product.image} alt="" width={200} height={200} />
                <h3>{product.title}</h3>
                <h4>{product.category}</h4>
                <p>{product.description}</p>
                <div style={{
                    display: "flex",
                }}>
                    <p>Price : $ {product.price}</p>&emsp;
                    <p>Rating : {product.rating.rate}</p>&emsp;
                    <p>Rating Count : {product.rating.count}</p>
                </div>
            </div>
        </div>
    )
}

export default Details;