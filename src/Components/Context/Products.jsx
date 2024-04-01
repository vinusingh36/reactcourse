import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    let getData = async () => {
        let url = `https://fakestoreapi.com/products`
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setProducts(data);
            })
    }

    return (

        <div>
            <h2>Products Component</h2>
            <div style={{
                padding: "50px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "30px",
            }}>
                {
                    products.map((product, i) => {
                        return (
                            <div key={i} style={{
                                boxShadow: "0 0 10px black",
                                textAlign: "center",
                                padding: "20px"
                            }}>
                                <img src={product.image} alt="" height={200} width={200} />
                                <h4>{product.title.slice(0, 30)}</h4>
                                <Link to={`/details/${product.id}`}>
                                    <button>Details</button>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products;