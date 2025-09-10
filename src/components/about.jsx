import React from 'react'
import './about.css'
import Button2 from './button2.jsx'
import Button from './button.jsx'

import Footer from './footer.jsx'

const about = () => {
  return (
    <>
      <div className="about">
        <div className="list">
          <div className="item">

            <div className="content">
              <h2>To Our Family</h2>
              <p>Every project begins with inspiration, and ours is deeply rooted in the idea of family.
                Pulse of the Engine is not just a platform about machines and technology—it is a heartfelt dedication to the people who have stood beside us,
                believed in us, and fueled our journey with their constant support.
                Just like an engine cannot function without its essential parts, we cannot grow without the love, guidance, and encouragement of our family.

                To our family, you are the first spark that ignites our passion. Every word we write, every idea we share, and every innovation we explore carries the rhythm of your trust and blessings.
                You’ve shown us that progress is not only about moving forward but also about remembering where we started and who walked with us along the way.

                This space is more than a project—it’s a reflection of your faith in us.
                With every milestone we achieve, we carry your strength in our hearts.
                Pulse of the Engine is as much yours as it is ours, and we dedicate it to you with gratitude, respect, and endless love.</p>
            </div>
            <img src="image/image5.jpg" alt="" />
          </div>
          <div className="item">
            <img src="image/image6.jpg" alt="" className='pc-image' />
            <div className="content">
              <h2>Our Mission</h2>
              <p>When we started Pulse of the Engine, we wanted it to be more than just a project—it’s a passion. Engines have always fascinated us, not just as machines but as the very pulse that powers human progress. From the first Mercedes-built engine to the latest electric and hybrid innovations, every engine tells a story of creativity, persistence, and hope for the future.

                Our mission is simple: to share those stories with our family of readers. We believe that learning about engines shouldn’t feel overwhelming or limited to experts. Instead, it should feel inspiring, relatable, and even personal. That’s why we’ve built this platform—to make knowledge accessible, to connect the dots between history and modern technology, and to celebrate the brilliance of human invention.

                This project reflects our belief that engines are more than technical wonders—they’re milestones of human achievement. As we step into an era where sustainability and smart technology matter more than ever, Pulse of the Engine is our way of guiding others to see not just how engines work, but how they shape our world.

                We see this project as a shared journey—with you, with our community, and with the future.</p>
                
            </div>
            <img src="image/image6.jpg" alt="Mobile View" className="mobile-image" />
          </div>
          <div className="item">

            <div className="content">
              <h2>Our Vision</h2>
              <p>At the heart of Pulse of the Engine lies a simple yet powerful vision — to bridge the gap between curiosity and understanding in the world of engines. Engines have always been more than just machines; they are symbols of human progress, innovation, and resilience. From the very first internal combustion engine to today’s hybrid and electric marvels, each breakthrough tells a story of how far we’ve come and where we are heading.

                Our vision is to make this story accessible to everyone. We want to create a space where students, enthusiasts, professionals, and everyday learners can explore the evolution of engines in a way that is clear, engaging, and inspiring. By offering detailed insights, comparisons, and real-world pros and cons, we hope to simplify complex concepts and spark curiosity in every reader.

                Ultimately, Pulse of the Engine is not just about technology — it’s about people. It’s about empowering individuals with knowledge, inspiring innovation, and celebrating the human spirit that has driven invention for centuries. Our vision is to become a trusted guide for anyone who wants to understand the pulse that powers our world — the engine.<br/>

                ✨ “Because every engine tells a story.”</p>
            </div>
            <img src="image/image7.jpg" alt="" />
          </div>
          
        </div>
      </div>
      <div className="button-area">
        <Button2 />
        <Button />
      </div>
      <Footer />
    </>
  )
}
export default about