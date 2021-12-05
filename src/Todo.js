import react, { useState } from "react";
import './Todo.css';


const Todo = () => {

    const [value, setValue] = useState('');
    const [arrList, setArrList] = useState([])

    const saveToState = (event) => {
        setValue(event.target.value)
    }

    const addToList = () => {
        setArrList((oldVal) => {
            return [...oldVal, value]
        })
        setValue('');
    }

    const deleteTask = (id) => {
       const updatedList= arrList.filter((itm, index) => {
            return index !== id;
        })
       
        setArrList([...updatedList])
        // console.log('one');
    }

    return (
        <>
            <div className="todoList">
                <h1>
                    TODO LIST
                </h1>
                <div className='addInput'>
                    <input type="text" placeholder='Input the List Item' value={value} onChange={saveToState} />
                    <button onClick={addToList} className="addTO">Add TO List</button>
                </div>
                <div className="showList">

                    {
                        arrList.map((itm, index) => {
                            return (
                                <div className='single-list' key={index}>
                                    <input type="checkbox"/>
                                    <li>{itm}</li>
                                    <button onClick={() => deleteTask(index)} className="deleteBtn">X</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Todo;