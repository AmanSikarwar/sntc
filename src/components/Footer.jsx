import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 p-2">
        <div className="flex flex-row items-center justify-center gap-2 mt-2">
          <Link to="https://instagram.com/sntc_iitmandi" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="text-gray-300" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/sntc-iit-mandi-340904255"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-gray-300" />
          </Link>
          <Link to="/" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} className="text-gray-300" />
          </Link>
          <Link
            to="mailto:technical_secretary@students.iitmandi.ac.in"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-300" />
          </Link>
        </div>
        <div className="text-sm text-center text-gray-300">
          &copy; 2023 Science and Technology Council, IIT Mandi
        </div>
      </div>
    </div>
  );
}

export default Footer;
