
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid px-5">

        <div className="row">

          {/* Company */}
          <div className="col-md-3 mb-4">
            <h6>Company</h6>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Our Blog</a></li>
              <li><a href="#">We're Hiring</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Accessibility Statement</a></li>
              <li><a href="#">For Business</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="col-md-3 mb-4">
            <h6>Community</h6>
            <ul>
              <li><a href="#">Community Forum</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Repair Guides</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="col-md-6 mb-4">
            <h6>Subscribe</h6>

            <p>
              Stay up to date with our newsletter.
            </p>

            <form className="subscribe-form"
              onSubmit={(event) => event.preventDefault()}>

              <input
                type="email"
                className="form-control"
                placeholder="Your email"
              />

              <button type="submit" className="btn signup-btn">
                Sign up
              </button>

            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>© 2026 Your Company Name. All rights reserved.</p>

          <div className="copyright-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Warranty</a>
            <a href="#">Terms of Sale</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
