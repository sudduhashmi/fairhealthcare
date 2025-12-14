import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { LuArrowUpRight, LuMove } from "react-icons/lu";
import { PiMoneyWavyLight } from "react-icons/pi";
import "./globals.css";

export default function HomeHero() {
    const items = [
    { icon: "/icon/1.png", title: "Eye Care", count: "15 Treatments" },
    { icon: "/icon/4.png", title: "Orthopaedics", count: "20 Treatments" },
    { icon: "/icon/2.png", title: "Cardiology", count: "12 Treatments" },
    { icon: "/icon/6.png", title: "Neurology", count: "15 Treatments" },
    { icon: "/icon/13.png", title: "Oncology", count: "20 Treatments" },
    { icon: "/icon/14.png", title: "Pediatrics", count: "12 Treatments" },
    { icon: "/icon/9.png", title: "Uterine Fibroid", count: "11 Treatments" },
    { icon: "/icon/8.png", title: "Septoplasty", count: "5 Treatments" },

    { icon: "/icon/11.png", title: "Gynecology", count: "20 Treatments" },
    { icon: "/icon/12.png", title: "Nephrology", count: "13 Treatments" },
    { icon: "/icon/3.png", title: "Pulmonology", count: "16 Treatments" },
    { icon: "/icon/10.png", title: "Gastroenterology", count: "20 Treatments" },
     { icon: "/icon/12.png", title: "Gastroenterology", count: "20 Treatments" },
      { icon: "/icon/7.png", title: "Gastroenterology", count: "20 Treatments" },
       { icon: "/icon/16.png", title: "Gastroenterology", count: "20 Treatments" },
        { icon: "/icon/5.png", title: "Gastroenterology", count: "20 Treatments" },
 
  ];
const treatments = [
  {
    name: "Apollo Hospitals",
    location: "Sarita Vihar, Delhi",
    treatment: "Total Knee Replacement",
    rating: 4.8,
    reviews: 2543,
    price: "₹5,00,000",
    image: "/hostiptal/17.png",
  },
  {
    name: "Fortis Healthcare",
    location: "Sector 44, Gurgaon",
    treatment: "Shoulder Arthroscopy",
    rating: 4.6,
    reviews: 1983,
    price: "₹4,00,000",
    image: "/hostiptal/1.png",
  },
  {
    name: "Medanta Mediclinic",
    location: "Defence Colony, New Delhi",
    treatment: "Pacemaker Implantation",
    rating: 4.8,
    reviews: 2543,
    price: "₹12,00,000",
    image: "/hostiptal/2.png",
  },
  {
    name: "Vision Eye Centre",
    location: "Rohini, New Delhi",
    treatment: "LASIK Eye Surgery",
    rating: 4.7,
    reviews: 1980,
    price: "₹1,00,000",
    image: "/hostiptal/11.png",
  },
   {
    name: "Vision Eye Centre",
    location: "Rohini, New Delhi",
    treatment: "LASIK Eye Surgery",
    rating: 4.7,
    reviews: 1980,
    price: "₹1,00,000",
    image: "/hostiptal/7.png",
  },
   {
    name: "Vision Eye Centre",
    location: "Rohini, New Delhi",
    treatment: "LASIK Eye Surgery",
    rating: 4.7,
    reviews: 1980,
    price: "₹1,00,000",
    image: "/hostiptal/4.png",
  },
   {
    name: "Vision Eye Centre",
    location: "Rohini, New Delhi",
    treatment: "LASIK Eye Surgery",
    rating: 4.7,
    reviews: 1980,
    price: "₹1,00,000",
    image: "/hostiptal/6.png",
  },
   {
    name: "Vision Eye Centre",
    location: "Rohini, New Delhi",
    treatment: "LASIK Eye Surgery",
    rating: 4.7,
    reviews: 1980,
    price: "₹1,00,000",
    image: "/hostiptal/16.png",
  },
];

 const partners = [
    "/partner/1.png",
    "/partner/2.png",
    "/partner/3.png",
    "/partner/4.png",
    "/partner/5.png",
    "/partner/6.png",
  ];
const blogs = [
    {
      img: "/images/8.png",
      title: "Insights into Modern Medicine Exploring the Latest Breakthroughs",
      date: "08 Nov 2025"
    },
    {
      img: "/images/6.png",
      title: "The work is top-notch and I consistently outrank all my...",
      date: "08 Nov 2025"
    },
    {
      img: "/images/7.png",
      title: "Health Matters A Journey Through Medical Science",
      date: "08 Nov 2025"
    }
  ];

  

  return (
    <main>
    <section className="hero py-5">

  <div className="container">

    {/* MAIN HEADING */}
    <h1 className="text-center mb-4 text-white">
      Search Hospitals, Departments & Treatments
    </h1>

    <div className="search-card mx-auto p-4 p-md-5 rounded-4">

      {/* SEARCH BAR */}
      <div className="search-bar d-flex flex-column flex-md-row gap-3 align-items-center mb-4">

        <input
          type="text"
          className="form-control search-input"
          placeholder="Search"
        />

        <button className="city-btn d-flex align-items-center gap-2">
          <Search size={18} />
          <span>Select City</span>
          <span className="chevron"></span>
        </button>
      </div>

      {/* TAGS */}
      <div className="tags d-flex flex-wrap gap-2 mb-4">
        {[
          "Heart","Surgery","Dialysis","Pacemaker","Cardiac",
          "Bypass Surgery","Pericardiotomy","Knee Replacement",
          "Root Canals","Kidney","Uterine Surgery","Lung","Dental Crowns"
        ].map((t,i)=>(
          <a key={i} href="#" className="tag-pill">{t}</a>
        ))}
      </div>

      <h4 className="nearby mb-3">Nearby Hospitals</h4>

      {/* HOSPITAL LIST */}
      <div className="hospital-list d-flex flex-column gap-3">

        {[
          {name:"Apollo Hospitals",rate:"4.8",rev:"2543",km:"2.3 km",tags:["Cardiology","Orthopedics"]},
          {name:"Fortis Healthcare",rate:"4.6",rev:"1832",km:"3.1 km",tags:["Eye Care","General"]},
          {name:"Max Hospital",rate:"4.7",rev:"2156",km:"4.5 km",tags:["Neurology","Cardiology"]},
          {name:"Medanta – The Medicity",rate:"4.9",rev:"3021",km:"5.2 km",tags:["Orthopedics","Cardiology"]},
          {name:"Vision Eye Centre",rate:"4.5",rev:"1245",km:"3.8 km",tags:["Eyecare","Neurology"]}
        ].map((h,i)=>(
          <div className="hospital-row d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center p-3 rounded-3" key={i}>
            
            <div className="name fw-semibold">{h.name}</div>

            <div className="info">
              ⭐ {h.rate} ({h.rev} reviews) &nbsp; 📍 {h.km}
            </div>

            <div className="spec d-flex gap-2 flex-wrap">
              {h.tags.map((s,j)=>(
                <span className="spec-tag" key={j}>{s}</span>
              ))}
            </div>

            <div className="arrow">↗</div>
          </div>
        ))}

      </div>

      {/* BROWSE */}
      <div className="browse d-flex flex-wrap gap-3 mt-4">
        <a href="#" className="browse-item">👁 Eye Care</a>
        <a href="#" className="browse-item">🦴 Orthopedics</a>
        <a href="#" className="browse-item">❤️ Cardiology</a>
        <a href="#" className="browse-item">🧠 Neurology</a>
        <a href="#" className="browse-item more">More →</a>
      </div>

    </div>
  </div>

</section>

<section className="hero-wrapper py-5">
  <div className="container">
    <div className="row align-items-center">

      {/* LEFT COLUMN */}
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <h1>
          Simplifying <br /> <span>Healthcare</span> for Everyone
        </h1>

        <p className="hero-text">
          No more running from hospital to hospital.
          Find everything you need—treatments, departments, doctors—on one screen.
        </p>

        <button className="hero-btn">
          Get Treatment Assistance
        </button>
      </div>

      {/* RIGHT COLUMN */}
    <div className="col-12 col-md-6">
  <Image
    src="/images/5.png"
    alt="hero"
    width={800}
    height={600}
    className="img-fluid w-100"
  />
</div>

    </div>
  </div>
</section>



<section className="hospitals-section py-5">
  <div className="container">

    {/* TOP TITLE */}
    <div className="top-title text-center mb-4">
      <span className="browse">Browse</span>
      <h2>Top hospitals online for any health concern</h2>
    </div>

    {/* HOSPITAL GRID */}
    <div className="row g-4">

      {[
        { img: "/hostiptal/9.png", name: "Apollo Hospitals", loc: "Sarita Vihar, Delhi", rate: "4.8", reviews: "2543" },
        { img: "/hostiptal/10.png", name: "Fortis Healthcare", loc: "Sector 44, Gurgaon", rate: "4.6", reviews: "1832" },
        { img: "/hostiptal/2.png", name: "Medanta Mediclinic", loc: "Defence Colony, New Delhi", rate: "4.7", reviews: "1287" },
        { img: "/hostiptal/3.png", name: "BLK MAX Hospital", loc: "Rajendra Nagar, New Delhi", rate: "4.8", reviews: "1491" },
        { img: "/hostiptal/4.png", name: "Max Hospital", loc: "Saket, New Delhi", rate: "4.6", reviews: "1832" },
        { img: "/hostiptal/5.png", name: "Max Hospital", loc: "Saket, New Delhi", rate: "4.6", reviews: "1832" },
        { img: "/hostiptal/6.png", name: "Max Hospital", loc: "Saket, New Delhi", rate: "4.6", reviews: "1832" },
        { img: "/hostiptal/7.png", name: "Max Hospital", loc: "Saket, New Delhi", rate: "4.6", reviews: "1832" },
        { img: "/hostiptal/11.png", name: "Max Hospital", loc: "Saket, New Delhi", rate: "4.6", reviews: "1832" },
        { img: "/hostiptal/8.png", name: "Max Hospital", loc: "Saket, New Delhi", rate: "4.6", reviews: "1832" }
      ].map((item, i) => (
    <div className="col-6 col-sm-4 col-md-3 col-lg-five" key={i}>
  <div className="hospital-card text-center">
    <Image src={item.img} width={400} height={250} alt="" className="img-fluid" />
    <h3>{item.name}</h3>
    <p className="location">{item.loc}</p>
    <p className="rating">
      {item.rate} ⭐⭐⭐⭐⭐ <span>{item.reviews} reviews</span>
    </p>
  </div>
</div>

      ))}

    </div>
  </div>
</section>

<section className="why-section py-5">
  <div className="container">
    <div className="row align-items-center">

      {/* LEFT SIDE */}
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <h2 className="fw-bold">
          Why Fair Health <br />
          <span className="text-primary">Price?</span>
        </h2>

        <p className="mt-3 text-muted">
          Giving every Indian the power to choose the right care at the right price.
        </p>

        <button className="btn btn-primary mt-3 px-4 py-2 rounded-pill">
          Book Free Appointment
        </button>
      </div>

      {/* RIGHT SIDE */}
    <div className="col-12 col-md-6">

  <div className="why-wrapper d-flex flex-column flex-sm-row gap-4">

    {/* LEFT SIDE 2 CARDS */}
    <div className="left-cards d-flex flex-column gap-4 flex-grow-1">

      {/* CARD 1 */}
      <div className="why-card p-4 rounded-4 shadow-sm bg-light-green">
        <LuArrowUpRight size={28} className="mb-2" />
        <h3 className="fw-bold">Transparency That Empowers You</h3>
        <p>
          Get clear, unbiased pricing and quality insights for every hospital
          and treatment — no hidden costs, no surprises.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="why-card p-4 rounded-4 shadow-sm bg-light-green">
        <LuMove size={28} className="mb-2" />
        <h3 className="fw-bold">Smart Comparisons, Better Decisions</h3>
        <p>
          Compare hospitals based on cost, reviews, ratings, and popularity.
        </p>
      </div>

    </div>

    {/* RIGHT SIDE — CENTER CARD */}
    <div className="right-card d-flex align-items-center">
      <div className="why-card p-4 rounded-4 shadow-sm bg-light-green">
        <PiMoneyWavyLight size={28} className="mb-2" />
        <h3 className="fw-bold">Save More on Every Treatment</h3>
        <p>
          Fair Health Price helps you save up to 400%, ensuring top-quality care
          at the fairest and most affordable cost.
        </p>
      </div>
    </div>

  </div>

</div>


    </div>
  </div>
</section>



<section className="specialities-section py-5 bg-white">
  <h3 className="text-center text-info fw-medium">Browse by Speciality</h3>
  <h1 className="text-center fw-bold mt-2" style={{ fontSize: "32px" }}>
    Trusted Specialities for Every Health Concern
  </h1>

  <div className="container mt-5">
    <div className="row g-4">

      {items.map((item, i) => (
        <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={i}>
          <div className="speciality-card d-flex flex-column justify-content-between h-100  text-center shadow-sm bg-white rounded-3">

            <div className="py-4">
              <img src={item.icon} alt={item.title} className="mb-3" width="60" height="60" />
              <h5 className="fw-semibold">{item.title}</h5>
              <p className="text-muted small">{item.count}</p>
            </div>

            <button className="btn btn-info btn-sm  w-100 ">
              Explore All Treatments
            </button>

          </div>
        </div>
      ))}

    </div>
  </div>

  <div className="d-flex justify-content-center mt-4">
    <button className="btn btn-info px-5 py-2 rounded-pill fs-5 shadow">
      View More
    </button>
  </div>
</section>

<section className="advisor-section pt-3 pb-5">
  <div className="container">
    <div className="advisory-s">
        <div className="row align-items-center  rounded-5">

      {/* Left Column */}
      <div className="col-md-6 mb-4 mb-md-0">
        <p className="small text-muted mb-1">Need Help</p>

        <h2 className="fw-bold mb-3">Talk to an Healthcare Advisor</h2>

        <p className="mb-3 text-muted" style={{ maxWidth: "450px" }}>
          From selecting specialists to understanding treatment costs, our advisors
          are here to help you make informed decisions. Share your concern and
          get expert support instantly.
        </p>

        <button className="btn btn-dark px-4 py-2 rounded-3">
          Let's Connect
        </button>
      </div>

      {/* Right Column */}
    <div className="col-md-6">
  <img
    src="/images/4.png"
    alt="hands"
    className="img-fluid w-100"
  />
</div>


    </div>
    </div>

  </div>
</section>


  <div className="container py-5">
      <p className="text-success fw-bold mb-2">Treatments</p>
      <h2 className="fw-bold mb-4">Specialised Treatments for Every Need</h2>
      <div className="row g-4">
        {treatments.map((t, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={t.image}
                className="card-img-top rounded-3"
                alt={t.name}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body p-3">
                <h5 className="card-title fw-bold">{t.name}</h5>
                <p className="text-muted mb-2">{t.location}</p>
              </div>
              <div
                className="p-3 text-white"
                style={{
                  backgroundColor: "#55E6C1",
                  borderBottomLeftRadius: ".75rem",
                  borderBottomRightRadius: ".75rem",
                }}
              >
                <p className="mb-1 fw-bold">{t.treatment}</p>
                <p className="mb-1">
                  {t.rating}{" "}
                  <span className="text-warning">
                    {"★".repeat(Math.floor(t.rating))}
                  </span>{" "}
                  {t.reviews} reviews
                </p>
                <p className="mb-0 badge bg-light text-dark">{t.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <section className="py-5">
      <div className="container">

        <div className="partner-marquee overflow-hidden">
          <div className="marquee-track d-flex align-items-center">
            {partners.concat(partners).map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="mx-5"
                style={{ height: "55px", objectFit: "contain" }}
                alt=""
              />
            ))}
          </div>
        </div>

      </div>

    
     
    </section>

     <section className="py-5">
      <div className="container">

        {/* Heading + View More */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Blog post</h2>
          <button className="btn btn-outline-info px-4 py-2 rounded-3">
            View More
          </button>
        </div>

        {/* Blog Cards */}
        <div className="row g-4">
          {blogs.map((b, i) => (
            <div className="col-md-4" key={i}>
              <div className="blog-card">

                <img
                  src={b.img}
                  alt={b.title}
                  className="img-fluid rounded-4 mb-3"
                  style={{ height: "250px", width: "100%", objectFit: "cover" }}
                />

                <h5 className="fw-semibold lh-sm">{b.title}</h5>

                <p className="text-muted mt-2 small">{b.date}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          
          {/* Left Images */}
<div className="col-lg-6">
  <Image
    src="/images/1.png" // no import needed
    alt="Doctor"
    className="rounded-3 w-100"
    style={{ height: "100%", objectFit: "cover" }}
    width={500}   // required
    height={500}  // required
    priority
  />
</div>



          {/* Right Text */}
          <div className="col-lg-6">
            <p className="text-uppercase text-info fw-bold mb-2">About Us</p>
            <h2 className="fw-bold mb-3">
              Our aim is make health treatment easy and fairly comparable in the country.
            </h2>
            <p className="mb-4">
              Fair Health Price is a health care based online portal, which offers people the
              opportunity to compare and pick up from an overflowing basket of health care
              treatment and check-up from different hospitals and nursing homes in India.
              Typically people need to go physically at hospitals or nursing homes to know
              the treatment cost and procedure. Every hospital offers different rates for
              treatments based upon its brand value, credibility and user feedbacks. We
              aim to help people to compare the treatment cost among these hospitals online
              without going anywhere. Fair Health Price offers a comparison of various
              healthcare treatments based on price, quality and key benefits.
            </p>

            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-info text-white px-4 py-2">Learn More</button>
              <button className="btn btn-light rounded-circle p-3">
                <i className="bi bi-play-fill text-info"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
    

        <div className="container my-5">
      <div
        className="row align-items-center p-4 rounded-4 position-relative"
        style={{ backgroundColor: "#1dd2c8", overflow: "hidden" }}
      >
        {/* Left Images */}
     <div className="col-lg-6">
  <img
    src="/images/3.png"
    alt="Doctor"
    className="img-fluid"
  />
</div>


        {/* Right Text & Form */}
        <div className="col-lg-6 text-white">
          <h2 className="fw-bold mb-3" style={{ lineHeight: 1.2 }}>
            Are you still not <br /> sure?
          </h2>
          <p className="mb-4">
            Our experts will help you select the right hospital at convenient schedule of visits.
          </p>
          <form className="d-flex flex-column gap-3">
            <input
              type="text"
              className="form-control rounded"
              placeholder="Enter your name"
            />
            <input
              type="text"
              className="form-control rounded"
              placeholder="Enter your number"
            />
            <button
              type="submit"
              className="btn btn-light text-info rounded"
              style={{ height: "50px" }}
            >
              Make Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
    </main>
  
  );
}
