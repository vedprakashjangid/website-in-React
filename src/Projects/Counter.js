import React,{ useState} from 'react'
import "./Counter.css"

function Counter() {
    const[value,setValue] = useState(10)
    return (<>
    <section id='project__section'>
        <h1>Project 1</h1>
        <h3>Increment and decrement counter using useState() hook </h3>
       <div className="project__container">
       <div className="counterVal">{value}</div>
         <div className="btn">
            <button className='inc' onClick={()=>setValue(value+1)}>Increment</button>
            {/* <button className='inc' onClick={()=>value <0 ? setValue(0):setValue(value-1) }>Increment</button> */}
            <button className='dec' onClick={()=>setValue(value-1)}>Decrement</button>
         </div>
       </div>
        

    </section>
    
    </>
    )
}

export default Counter