import React, { useState } from 'react'
import Language from "../api/Language"
import "./About.css"



function About() {
  const [lang, setLang] = useState(Language);
  return (<>
    <section id="about__section" >

      <div className="intro"  >

        <div className="line1">hello, my name is</div>
        <div className="line2">ved prakash jangid</div>
        <div className="line3">I am a frontend <span>developer</span></div>
        <button>how can i help you</button>
      </div>
    </section>

    <section id="about__me__section">
      <h1>about me</h1>
      <div className="about__me">
        <div className="about__left">
          <img src="img/myPhoto.jpg" alt="" />
        </div>
        <div className="about__right">
          <h3>i am ved prakash and i am a web developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis libero deserunt aspernatur reiciendis. Deleniti error quibusdam ex sapiente molestias cupiditate aliquid impedit numquam expedita magni, nobis necessitatibus sed nostrum ut?</p>


        </div>

      </div>
      <div className="language__container">
        <h2>these are my best friends</h2>
        <div className="language">

          {
            Language.map((item) => {
              return (
                <div className="language__card" key={item.id}>
                  <i class={item.icon}></i>
                  <h2>{item.heading}</h2>
                  <p>{item.para}</p>
                </div>

              )
            })
          }


          {/* <div className="language__card">
            <i class="fa-solid fa-code"></i>
            <h2>HTML</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores culpa tempora adipisci accusamus. Provident nesciunt dignissimos ducimus aliquid mollitia eveniet magnam laboriosam, repellat est dolore assumenda animi sint necessitatibus quas.</p>
          </div>

          <div className="language__card">
            <i class="fa-solid fa-code"></i>
            <h2>HTML</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores culpa tempora adipisci accusamus. Provident nesciunt dignissimos ducimus aliquid mollitia eveniet magnam laboriosam, repellat est dolore assumenda animi sint necessitatibus quas.</p>
          </div>

          <div className="language__card">
            <i class="fa-solid fa-code"></i>
            <h2>HTML</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores culpa tempora adipisci accusamus. Provident nesciunt dignissimos ducimus aliquid mollitia eveniet magnam laboriosam, repellat est dolore assumenda animi sint necessitatibus quas.</p>
          </div>

          <div className="language__card">
            <i class="fa-solid fa-code"></i>
            <h2>HTML</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores culpa tempora adipisci accusamus. Provident nesciunt dignissimos ducimus aliquid mollitia eveniet magnam laboriosam, repellat est dolore assumenda animi sint necessitatibus quas.</p>
          </div>

          <div className="language__card">
            <i class="fa-solid fa-code"></i>
            <h2>HTML</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores culpa tempora adipisci accusamus. Provident nesciunt dignissimos ducimus aliquid mollitia eveniet magnam laboriosam, repellat est dolore assumenda animi sint necessitatibus quas.</p>
          </div>

          <div className="language__card">
            <i class="fa-solid fa-code"></i>
            <h2>HTML</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores culpa tempora adipisci accusamus. Provident nesciunt dignissimos ducimus aliquid mollitia eveniet magnam laboriosam, repellat est dolore assumenda animi sint necessitatibus quas.</p>
          </div> */}
        </div>
      </div>
    </section>

  </>
  )
}

export default About