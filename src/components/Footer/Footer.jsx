import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footerContent">
        <div className="col">
          <h3>MyStore</h3>
          <p>Your favorite place for online shopping.</p>
        </div>

        <div className="col">
          <h4>Quick Links</h4>
          <ul>
            <Link to={"/Home"}><li>Home</li></Link>
            <Link to={"/About"}><li>About</li></Link>
            <Link to={"/"}><li>Accessories</li></Link>
            <Link to={"/"}><li>Blog</li></Link>
            <Link to={"/"}><li>Contact</li></Link> 
          </ul>
        </div>

        <div className="col">
          <h4>Contact</h4>
          <p>Email: nouranalamir16@gmail.com</p>
          <p>Addresse: Egypt</p>
        </div>
      <div className="container icons">
        <a
          className="email"
          href="mailto:nouranalmir16@gmail.com?subject=Hello&body=I want to ask about..."
        >
          <MdOutlineEmail />
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/nouran-alamir-a99441344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        >
          <FaLinkedinIn />
        </a>
        <a className="github" href="https://github.com/nouranalamir16">
          <FaGithub />
        </a>
      </div>
      </div>
      <div className="footerBottom">
        © {new Date().getFullYear()} MyStore. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
