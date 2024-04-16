import "./HeroSection.css";
import myimg from "../../assets/myimg.png"

export default function HeroSection(){
    return (
        <div className="herosection">
           <div className="left">
         <div className="para">
           <p> Web Developer,</p>
         </div>
         <div className="herosectionh1">
            <h1>I'm <span>Aanchal</span></h1>
         </div>
         <div className="stack">
            <h1>Full Stack Developer</h1>
         </div>
         <div className="para2">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quam voluptatibus totam velit rem? Dolorem, eligendi exercitationem dolore .</p>
         </div>
           </div>
           <div className="right">
          <img src={myimg} alt="" />
           </div>
           
        </div>
    )
}