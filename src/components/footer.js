import Link from "next/link";
import "./footer.css";
export default function Footer() {
  return (
    <main >
     <footer className="footer">

      {/* ===== CONTAINER ===== */}
      <div className="container">

        {/* TOP FOOTER */}
        <div className="footer-top row">

          {/* LEFT ABOUT */}
          <div className="footer-about col-lg-4 col-md-12">
            <h3>Fair Health Price</h3>
            <p>
              Fair Health Price is a health care based online portal,
              which offers people the opportunity to compare and
              pick up from an overflowing basket of health care
              treatment and check-up from different hospitals and
              nursing homes in India.
            </p>
          </div>

          {/* DEPARTMENTS */}
          <div className="footer-col col-lg-2 col-md-4 col-sm-6">
            <h4>Departments</h4>
            <ul>
              <li><Link href="#">Cardiology</Link></li>
              <li><Link href="#">Sports Injury</Link></li>
              <li><Link href="#">Radiology</Link></li>
              <li><Link href="#">Lung Diseases</Link></li>
              <li><Link href="#">Gynecology</Link></li>
              <li><Link href="#">Eye Care</Link></li>
            </ul>
          </div>

          {/* HOSPITALS */}
          <div className="footer-col col-lg-2 col-md-4 col-sm-6">
            <h4>Hospitals</h4>
            <ul>
              <li><Link href="#">Apollo Hospitals</Link></li>
              <li><Link href="#">Fortis Healthcare</Link></li>
              <li><Link href="#">Max Hospital</Link></li>
              <li><Link href="#">Medanta</Link></li>
              <li><Link href="#">Vision Eye Centre</Link></li>
              <li><Link href="#">Manipal Hospitals</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col col-lg-2 col-md-4 col-sm-6">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Hospitals</Link></li>
              <li><Link href="#">Blogs</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

        </div> {/* footer-top row end */}

        {/* MIDDLE ROW */}
        <div className="footer-middle row align-items-center">
          <div className="social col-md-6 col-sm-12 mb-3 mb-md-0">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>

          <div className="newsletter col-md-6 col-sm-12">
            <h4>Newsletter</h4>
            <div className="newsletter-box">
              <input type="email" placeholder="Email*" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>


      </div> {/* container end */}
      
      
     <div className="footer-bottom">
  <div className="container">
    <div className="row align-items-center">
      
      <div className="col-md-6 col-sm-12 text-center text-md-start ">
        <p className="mb-0">© Copyright Fair Health Price 2025. All Rights Reserved.</p>
      </div>

      <div className="col-md-6 col-sm-12 text-center text-md-end bottom-links">
        <Link href="#">Terms & Conditions</Link>
        <span>|</span>
        <Link href="#">Privacy Policy</Link>
        <span>|</span>
        <Link href="#">Refund Policy</Link>
      </div>

    </div> {/* row end */}
  </div> {/* container end */}
</div> {/* footer-bottom end */}


    </footer>
    </main>
  
  );
}
