import { Button } from "../../components/button/Button";
import profile from "../../assets/image-amy.webp";
import "./About.scss";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-container-left">
        <img src={profile} alt="profile" className="about-profile-img" />
      </div>
      <div className="about-container-right">
        <h1 className="about-container-header">
          I’m Amy, and I’d love to work on your next project
        </h1>
        <span className="about-container-subtitle">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </span>
        <Button label="Free Consultation" type="secondary" />
      </div>
    </div>
  );
};
