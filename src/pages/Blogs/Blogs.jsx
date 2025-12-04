import React from 'react'
import './Blogs.css'
import Accordion from '../../components/Accordion/Accordion.jsx'

const Blogs = () => {
  return (
    <>
      <div className="blog-container">
        <h1>OUR BLOG</h1>
        <p>We source coffee from across the globe from our trusted network of
          suppliers to bring you a selection of high-quality coffees, each with
          its own distinct flavour profile and story.
          We source coffee from across the globe from our trusted network of
          suppliers to bring you a selection of high-quality coffees, each with
          its own distinct flavour profile and story.We source coffee from across
          the globe from our trusted network of
          suppliers to bring you a selection of high-quality coffees, each with
          its own distinct flavour profile and story.
          We source coffee from across the globe from our trusted network of
          suppliers to bring you a selection of high-quality coffees, each with
          its own distinct flavour profile and story
        </p>
      </div>

      <section className='video'>
        <div className="blog-video">
          <div className="blog-left">
            
            <a href="https://www.youtube.com/watch?v=AUUj47USB8k" target="_blank" rel="noopener noreferrer">
              <i id="blog-icon" class="fa-regular fa-circle-play"></i>
              <img src="https://i.pinimg.com/1200x/2b/5a/49/2b5a4927d53e78992073b3d7b7cc9c6b.jpg" />
              </a>
           {/* <iframe src="https://www.youtube.com/embed/AUUj47USB8k"></iframe> */}

          </div>
          <div className="blog-right">
            <h1>WHOLESALE COFFEE</h1>
            <p>We are a full-service speciality coffee roaster. We go beyond indicating the location
              of the production: we also tell you everything we know about the producer – the farm,
              the cooperative, or the processing station. In addition, we always indicate the period
              of the harvest, so that you are sure that you buy the coffee coming from the freshest
              and in-season crop. We put the quality score right on the front label, so that you can
              see it and make an informed choice.
              We are a full-service speciality coffee roaster. We go beyond indicating the location
              of the production: we also tell you everything we know about the producer – the farm,
              the cooperative, or the processing station. In addition, we always indicate the period
              of the harvest, so that you are sure that you buy the coffee coming from the freshest
              and in-season crop. We put the quality score right on the front label, so that you can
              see it and make an informed choice.
              We are a full-service speciality coffee roaster. We go beyond indicating the location
              of the production: we also tell you everything we know about the producer – the farm,
              the cooperative, or the processing station. In addition, we always indicate the period
              of the harvest, so that you are sure that you buy the coffee coming from the freshest
              and in-season crop.
            </p>
          </div>
        </div>
      </section>
      <Accordion />
    </>
  )
}

export default Blogs