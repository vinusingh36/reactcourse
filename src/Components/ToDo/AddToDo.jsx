import { useState } from "react";
import AddTodoitem from "./AddTodoitem";
import { logDOM } from "@testing-library/react";

const AddToDo = () => {
    const [text, setText] = useState("")
    const [todoData, setTodoData] = useState([]);

    const addTodoData = () => {
        let newItem = {
            title: text,
            status: false
        }

        setTodoData([...todoData, newItem]);
    }

    const deleteItem = (i) => {
        let filterData = todoData.filter((item, index) => {
            return i != index;
        })

        setTodoData(filterData);
    }

    const handleToggle = (i) => {
        let toggleArray = todoData.map((item, idx) => {
            return idx === i ? { ...item, status: !item.status } : item;
        });
        setTodoData(toggleArray)
    }

    return (
        <div style={{ marginTop: "50px" }}>
            <h2>Todo Example</h2>
            <input type="text" value={text} placeholder="Enter your Todo here" onChange={(e) => setText(e.target.value)} /> &emsp;&emsp;
            <button onClick={addTodoData} >Add Item</button>
            <AddTodoitem todoitem={todoData} deleteItem={deleteItem} handleToggle={handleToggle} />
        </div>
    )
}

export default AddToDo;