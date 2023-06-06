import Header from './Header'
import './about.css'
import StoryImage from '../Images/DSC09952.jpg'
import VisionImage from '../Images/Mega1.png'
import MissionImage from '../Images/pps.png'
import AchieveImage from '../Images/Ach.jpg'
const about = () => {
  return (
    <>
    <div className='About'>

     <p>About Green Global Aggrovation</p>
    </div>

      <section className='about_story'>
        <div className="container about_story-container">

          <div className="about_section-content">
            <h1>Our Products</h1>
            <p className="Para">  Green Global Aggrovation offers a range of smart indoor gardens using its cutting-edge fogponics technology. 

</p>
            <p className="Para">Their product range includes:</p>
            <p className="Para">Mini Fogponics Pods: Ideal for small indoor spaces, these pods can grow a variety of plants with ease.</p>
            <p className="Para">Medium Fogponics Pods: Perfect for medium-sized indoor spaces, these pods offer a larger growing area and more advanced features.</p>
            <p className="Para">Mega Fogponics Pods: Designed for commercial use, these pods offer maximum growing potential for large scale operations.
</p>
            <p className="Para">In addition, Green Global Aggrovation also provides commercial farm setup services that utilize their fogponics technology to create sustainable and efficient indoor agriculture systems.</p>
            <p className="Para"> No matter the size of your operation, Green Global Aggrovation has the perfect solution for your indoor agriculture needs.</p>
          </div>
          <div className="about_section-image">
<img src={StoryImage} alt="Our Story "/>
          </div>
        </div>
     

    
        <div className="container about_Vision-container">
        <div className="about_section-image">
<img src={VisionImage} alt="Our Vision"/>
          </div>
          <div className="about_section-content">
            <h1>Our Technology & Vision</h1>
            <p className="Para">Our vertical fogponic systems are designed to deliver maximum plant growth and production, using a fraction of the resources required by traditional agriculture methods.</p>
            <p className="Para">Our unique fogponic technology uses 95% less water and 90% less land, while producing 5 times more predictable harvests. Say goodbye to pesticides and hello to locally grown, fresh, and nutritious produce, available 24/7, 365 days a year.
</p>
<p className="Para">Our vertical fogponic systems are fully automated, sustainable, and use only 5% of the water and 1/10th of the land used in traditional agriculture. Our all-in-one app allows users to grow, buy, or sell their produce, and our innovative technology delivers 100% organic and fresh produce, grown locally, 24/7, 365 days a year.</p>
            <p className="Para">Our vision is an evolved world of food abundance, free from malnutrition and hunger. Our mission is to make Earth a food-secure planet, one plant at a time.</p>

            <p className="Para">Join us on this journey towards a sustainable, efficient, and cost-effective food future. Discover the future of agriculture with Green Global Aggrovation.</p>
            
          </div>
        
        </div>
     


     
        <div className="container about_mission-container">

          <div className="about_section-content">
            <h1>Product Range & Services</h1>
            <p className="Para">
            We offer three different sizes of our vertical fogponic systems to meet the needs of different growers, whether you're starting a mini garden in your home, a medium-sized urban farm, or a large commercial operation. Our mini, medium, and mega models are designed to deliver maximum plant growth and production, no matter your space and resource constraints.
            </p>
            <p className="Para">Our Food Unlimited Network (F.U.N) connects growers within a city to create a self-sustaining economy where users can barter or sell their excess produce with each other.</p>
            <p className="Para"> This creates food transparency and promotes clean eating, disrupting the traditional supply chain and making our promise of "plant to plate" within minutes a reality.</p>
          </div>
          <div className="about_section-image">
<img src={MissionImage} alt="Our Mission"/>
          </div>
        </div>
        <div className="container about_Vision-container">
        <div className="about_section-image">
<img src={AchieveImage} alt="Our Vision"/>
          </div>
          <div className="about_section-content">
            <h1>Our Achievements</h1>
            <p className="Para">Green Global Aggrovation has received recognition for its innovative technology and commitment to sustainable agriculture. </p>
            {/* <p className="Para">Our unique fogponic technology uses 95% less water and 90% less land, while producing 5 times more predictable harvests. Say goodbye to pesticides and hello to locally grown, fresh, and nutritious produce, available 24/7, 365 days a year. */}
{/* </p> */}
<p className="Para">Some of our achievements include the Environmental Startup Award from Silicon Valley MSU Vision 2020, top 5 in India in NAARM's A-Idea Aggnite, winners of the Nuv Business Plan Competition, and top 25 in India in the UNDP SOLVED Challenge 2021.</p>
            {/* <p className="Para">Our vision is an evolved world of food abundance, free from malnutrition and hunger. Our mission is to make Earth a food-secure planet, one plant at a time.</p> */}

            {/* <p className="Para">Join us on this journey towards a sustainable, efficient, and cost-effective food future. Discover the future of agriculture with Green Global Aggrovation.</p> */}
            
          </div>
        
        </div>
     
      </section> 
    </>
  )
}

export default about