import work1 from './car-rental-full.c58b37da333d73238fdd.webp'
import work2 from './screencapture-e-commercy-surge-sh-categories-all-2023-09-04-11_26_07.png'
import work3 from './screencapture-stirring-squirrel-95d7bb-netlify-app-2024-05-01-09_18_40 (1).png'
import work5 from './screencapture-localhost-3000-2023-11-05-11_15_58.png'
import ProBox from "./ProBox";
import "./work.css"

function Projects() {
    return (
      <>
        <section id="projects" className="project">
          <div className="container">
            <div className="project-content">
              <h2 className='section__title'>portfolio</h2>
              <h3>Each project is a unique piece of development 🧩</h3>
              <div className="projects-grid">
                <ProBox
                  title="Car Rental"
                  img={work1}
                  description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                  techno1="React"
                  techno2="SCSS"
                  code="https://github.com/ESLAMARAF/car-rental.git"
                  demo="https://ornate-licorice-d3ed06.netlify.app"
                  scrollY="-83%"
                  icon="🚗"
                />
  
                <ProBox
                  title="Ecommerce"
                  img={work2}
                  description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                  techno1="React"
                  techno2="Vanila CSS"
                  code="https://github.com/ESLAMARAF/ecooo.git"
                  demo="https://glittering-concha-26e5b4.netlify.app"
                  scrollY="-65%"
                  icon="🛒"
                  cName="reversed-proj"
                />
  
               
  
                <ProBox
                  title="Gymate"
                  img={work3}
                  description="Gymate provides a space for people to improve their physical
                  fitness and overall health through regular exercise and physical
                  activity"
                  techno1="React.js"
                  techno2="Tailwind"
                  code=""
                  demo="https://stirring-squirrel-95d7bb.netlify.app/"
                  scrollY="-85%"
                  icon="🏋️‍♂️"
                  cName="reversed-proj"
                />
                <ProBox
                  title="Rick and Morty wiki"
                  img={work5}
                  description="Through this site, you can learn about the characters of RICK AND MORTY and search for any character, episodes, and the character’s appearance in any episode."
                  techno1="React.ts"
                  techno2="redux-toolkit"
                  code="https://github.com/ESLAMARAF/Rick-And-Morty-with-Rtk.git"
                  demo="rickandmority.netlify.app"
                  scrollY="-50%"
                  icon="🤠"
                />
              </div>
            </div>
            {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
          </div>
        </section>
      </>
    );
  }
  
  export default Projects;
  