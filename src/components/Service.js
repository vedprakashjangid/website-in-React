import React from 'react'
import "./Service.css"

function Service() {
    return (
        <>
            <section id="service__section">
                <h1>My servives</h1>
                <div className="service__card__container">
                    <div className="service__card">
                        <i class="fa-solid fa-paintbrush"></i>
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste.</p>
                    </div>
                    <div className="service__card">
                    <i class="fa-solid fa-code"></i>
                        <h2>Coding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste.</p>
                    </div>
                    <div className="service__card">
                    <i class="fa-solid fa-brain"></i>
                        <h2>Planning</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste.</p>
                    </div>

                    <div className="service__card">
                    <i class="fa-solid fa-bug"></i>
                        <h2>Testing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste.</p>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Service