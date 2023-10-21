import React, { useState } from 'react'



export default function About(props) {
  
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#021930' : 'white'
  }





  return (
    <div className='container my-5' style={myStyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is TextUtils?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a versatile text manipulation application designed to simplify your interaction with text. Whether you need to change the case of your text, copy it to your clipboard, or remove unnecessary spaces, TextUtils has you covered. Our user-friendly interface and robust functionality ensure that you can perform these tasks quickly and efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Why Choose TextUtils?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Simplicity: TextUtils is designed with user-friendliness in mind. Whether you're a tech-savvy professional or a casual user, you'll find our interface intuitive and easy to navigate.

              Efficiency: Save time and effort by quickly transforming your text without the need for complex text editors or manual adjustments.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Get Started with TextUtils
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is entirely free to use and doesn't require any downloads or installations. Simply visit our website and start transforming your text instantly. We're committed to providing a hassle-free and reliable text processing experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
