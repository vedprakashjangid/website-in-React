import React, { useState } from 'react';
import MenuApi from "../api/MenuApi";
import "./Restaurant.css"


function Restaurant() {
  const [api, setApi] = useState(MenuApi);
  const filterItem = (catagoryAsParameter)=>{
    const filteredData = MenuApi.filter((item)=>{
      return item.category === catagoryAsParameter;
    })
    setApi(filteredData);
  }
 

  return <>
  <section id="project__restaurant">
    <h1 id="myh11">Project 2</h1>
    <h3 id="myh13">Menu list using useState() hooks and API </h3>
    <div className="heading">
      <h1>order your favourite dish</h1>
      <hr />
    </div>
    <div className="catogory__button">
      <button className={`active`} onClick={()=>filterItem("breakfast")}>breakfast</button>
      <button onClick={()=>filterItem("launch")}>launch</button>
      <button onClick={()=>filterItem("dinner")}>dinner</button>
      <button onClick={()=>filterItem("snacks")}>snacks</button>
      <button onClick={()=>filterItem("time-pass")}>time-pass</button>
      <button onClick={()=>setApi(MenuApi)}>all</button>
    </div>

    <div className="menu__container">

      {
        api.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="img__container">
                <img src={item.img} alt="" />
              </div>
              <div className="content__container">
                <div className="name">{item.name}</div>
                <div className="description">{item.description.substring(0,50)}<span>...</span></div>
                <div className="price__and__order__container">
                  <div className="price"> {item.price}</div>
                  <div className="order"><button>Order now</button></div>
                </div>
                <p className='condition'>*order will not be cancelled </p>
              </div>
            </div>

          )
        })
      }








    </div>


    </section>
  </>

}

export default Restaurant;
