import { logDOM } from "@testing-library/react";

const AddTodoitem = ({ todoitem, deleteItem, handleToggle }) => {



    return (
        <div>
            <h2>ToDo Item</h2>
            {
                todoitem.map((item, i) => {
                    return (
                        <div key={i + 1} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <h3>{item.title} </h3>&emsp;&emsp;
                            <h4 style={{ color: "orangered" }}>{item.status ? "Comleted" : "Not Completed"}</h4>&emsp;&emsp;
                            <button onClick={() => handleToggle(i)} >Toggle</button>&emsp;
                            <button onClick={() => { deleteItem(i) }} >Delete</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default AddTodoitem;