import { useEffect } from 'react'
import homeLogic from './homelogic'
import './home.css'
import Button from './button.jsx'
import Footer from './footer.jsx'
const Home = () => {
  useEffect(() => {
    homeLogic();
  }, []);
  return (
    <>
      <div className="prime ">
        <div className="list">
          <div className="item">
            <img src="/image/image1.jpg" alt="" />
            <div className="content">
              <h3>World's first car engine</h3>
              <p>In 1886, Karl Benz patented the first gasoline-powered car, the Benz Patent-Motorwagen. <br />This revolutionary invention marked the beginning of the automotive era,<br /> paving the way for modern vehicles.</p>
            </div>

          </div>
          <div className="item">
            <img src="/image/image2.jpg" alt="" />
            <div className="content">
              <h3>World's first petrol engine</h3>
              <p>In 1876, Nikolaus Otto invented the first successful four-stroke petrol engine, known as the Otto cycle engine. <br />This innovation laid the foundation for modern internal combustion engines, revolutionizing transportation.</p>
            </div>

          </div>
          <div className="item">
            <img src="/image/image3.jpg" alt="" />
            <div className="content">
              <h3>World's first diesel engine</h3>
              <p>In 1892, Rudolf Diesel patented the diesel engine, <br />which used compression ignition to burn fuel more efficiently than gasoline engines. <br />This innovation paved the way for modern diesel engines, widely used in transportation and industry.</p>
            </div>

          </div>
          
        </div>
        <div className="thumbnail">
          <div className="item">
            <img src="/image/image1.jpg" alt="" />
            <div className="content">
              <h3>Item Title</h3>
              <p>description</p>
            </div>


          </div>
          <div className="item">
            <img src="/image/image2.jpg" alt="" />
            <div className="content">
              <h3>Item Title</h3>
              <p>description</p>
            </div>

          </div>
          <div className="item">
            <img src="/image/image3.jpg" alt="" />
            <div className="content">
              <h3>Item Title</h3>
              <p>description</p>
            </div>

          </div>
          
        </div>
        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
        </div>
        <div className="time"></div>
      </div>
      <div className="context">
        <h2>Pulse of the Engine </h2>
        <p>Pulse of the Engine is a journey into the heart of innovation, 
          where every revolution tells a story. From the first steam-driven machines to today’s advanced hybrid and electric engines, 
          this platform captures the evolution that powers our world.
           Engines are more than mechanical systems — they are the pulse that drives progress, speed, and performance.
            Here, you’ll explore the origins, categories, fuel types, and innovations shaping the automotive industry. 
            Whether you’re curious about history or fascinated by the future, 
            Pulse of the Engine keeps you connected to the rhythm that moves humanity forward.</p>
      </div>
      <div className="button-area1">
      <Button />
      </div>
      <Footer />
    </>
  )
}

export default Home