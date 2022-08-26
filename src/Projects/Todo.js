import React, { useState, useEffect } from 'react'
import "./Todo.css"


// get the localStorage data back
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");

    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
};

const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);
    
  // add the items fucnction
  const addItem = () => {
    if (!inputdata) {
      alert("Please enter the task to add");
    } else if (inputdata && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputdata };
          }
          return curElem;
        })
      );

      setInputData("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };

  //edit the items
  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    setInputData(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  };

  // how to delete items section
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };
// adding localStorage
useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);
  const removeAll = () => {
    setItems([]);
  };
    return (
        <><section id="todo__section">
          <h1>Project 4</h1>
            <h1> Todo App in React with LocalStorage</h1>
           
            <form action="">
                <div className="input__container">
                    <input type="text" placeholder="Enter Task..."
                        value={inputdata}
                        onChange={(event) => setInputData(event.target.value)}
                     

                    />
                    
                    {toggleButton ? (
                        <i className="fa-solid fa-pen-to-square" style={{color:"green"}} onClick={addItem}></i>
                    ) : (
                        <i className="fa-solid fa-plus" style={{color:"blue"}} onClick={addItem}></i>
                    )}


                </div>


            </form>
            {/* todo list */}

            <div className="todo__container">
                {
                    items.map((curElem,index) => {
                        return (

                            <div className="task__container" key={curElem.id}>
                                <div className="task"><span>{index+1}.</span> {curElem.name}</div>
                                <div className="icon">
                                    <i className="fa-solid fa-pen-to-square" onClick={() => editItem(curElem.id)}></i>

                                    <i className="fa-solid fa-trash-can" onClick={() => deleteItem(curElem.id)}></i>
                                </div>

                            </div>

                        )
                    })
                }

                {/* <div className="task__container">
                    <div className="task"><span>01</span> vgvs bdsh jkdshuihd hbsdfhd</div>
                    <div className="icon">
                    <i class="fa-solid fa-pen-to-square"></i>

                    <i class="fa-solid fa-trash-can"></i> 
                    </div>

                </div> */}
                <div className="btnn">
            <button  onClick={removeAll}>Delete All</button>
           </div>
            </div>
            </section>
        </>)
}

export default Todo