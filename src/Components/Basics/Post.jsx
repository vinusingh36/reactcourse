import { logDOM } from "@testing-library/react";
import { useState } from "react";
import PostItem from "./PostItem";


const Post = () => {
    const [data, setData] = useState([]);
    const [buttonStatus, setButtonStatus] = useState(true)

    const getPostDetails = async () => {
        let url = `https://jsonplaceholder.typicode.com/posts`
        const res = await fetch(url);
        const postData = await res.json();
        //  console.log(data);
        setData(postData);
        setButtonStatus(false);
    }

    // const hidePost = () => {
    //     setData([]);
    // }

    return (
        <div>
            <h2>Post Component</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, minima. Eaque tempore dolorem perferendis quia hic amet labore dolorum obcaecati blanditiis ab est, nam debitis. Corporis blanditiis distinctio nemo similique.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quo laboriosam quis omnis. Animi blanditiis voluptate non in, aperiam, est sed fuga quidem minima quam reiciendis magnam, excepturi corrupti quibusdam?
            </p>

            {
                buttonStatus ? <button onClick={getPostDetails}>Get Post</button> : <button onClick={() => { setData([]); setButtonStatus(true) }} >Hide Post</button>
            }

            <PostItem data={data} />

        </div>
    )
}

export default Post;