import { Button } from "../../components/button/Button";
import "./Contact.scss";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="black-container">
        <div className="contact-left">
          <h1 className="contact-header">Book a call with me</h1>
          <h3 className="contact-description">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </h3>
        </div>
        <div className="contact-right">
          <Button type="secondary" label="Free Consultation" />
        </div>
      </div>
    </div>
  );
};
