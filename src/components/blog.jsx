import Button2 from './button2.jsx'
import Button from './button.jsx'

import Footer from './footer.jsx'
import EnginesPage from './EnginesPage.jsx'
import './blog.css'
const Blog = () => {
  return (
    <>
      <div className='blog'>
        <div className="blogtopic">
          <h2>Journey of Innovation</h2>
          <p>The story of engines is more than a tale of machines; it is a chronicle of human ambition, creativity, and the relentless drive to go further, faster, and smarter. From the first practical internal combustion designs to the revolutionary V8s and finely tuned modern marvels, every engine reflects a chapter in the book of innovation. Each invention tells us not only about the mechanics of engineering but also about the dreams of the people who built them.

            This library of engines is not just a collection of facts—it is a celebration of progress. Every design carries lessons about persistence, experimentation, and problem-solving. For instance, the Mercedes 35 HP was not just a machine; it symbolized the birth of the modern automobile. The Ford Model T engine represented accessibility, putting cars into the hands of ordinary families. The Chevrolet Stovebolt Six showed how durability and affordability could transform the market. And innovations like Honda’s CVCC proved how necessity could spark solutions to global challenges like fuel efficiency and emissions.

            Here, we have gathered a short library of these beautiful works of art—not merely as engines, but as timeless creations that reflect human craftsmanship. Each engine card on this page is a window into a different era, inviting you to witness how imagination was turned into motion, and motion into history.

            By exploring these engines, we embark on a journey that highlights both triumphs and limitations. Some engines dazzled with power but fell short on efficiency; others excelled in simplicity but struggled with durability. Together, they form a timeline of constant trial and improvement—a true pulse of human progress.

            This page invites you to dive deeper into the mechanical hearts that powered revolutions, shaped industries, and changed lives. Whether you are a curious learner, a passionate enthusiast, or someone simply fascinated by the history of innovation, this journey reveals how far we have come—and sparks the imagination of how far we can still go.</p>
        </div>
        <EnginesPage />
      </div>
      <div className="button-area">
      <Button2 />
      <Button />
      </div>
      <Footer />
    </>
  );
}

export default Blog