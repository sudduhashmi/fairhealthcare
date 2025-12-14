"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./header.css";

const topMenu = [
  { title: "Proctology", items: ["Piles", "Fissure", "Fistula", "Pilonidal Sinus"] },
  { title: "Laparoscopy", items: ["Hernia", "Gall Bladder", "Appendix"] },
  { title: "Gynaecology", items: ["PCOD", "Fibroids", "Infertility"] },
  { title: "ENT", items: ["Tonsils", "Sinusitis", "Hearing Loss"] },
  { title: "Urology", items: ["Kidney Stones", "Prostate", "UTI"] },
  { title: "Vascular", items: ["Varicose Veins", "DVT"] },
  { title: "Aesthetics", items: ["Rhinoplasty", "Hair Transplant"] },
  { title: "Orthopedics", items: ["Knee", "Hip", "Spine"] },
  { title: "Ophthalmology", items: ["Cataract", "Lasik", "Specs Removal"] },
  { title: "Dermatology", items: ["Skin Care", "Cosmetic"] },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <main>
       <header>

      {/* 🔵 TOP DROPDOWN MENU BAR */}
      <div className="top-header">
        {topMenu.map((m, i) => (
          <div className="dropdown" key={i}>
            <span className="drop-btn">
              {m.title} <i className="chevron"></i>
            </span>

            <div className="dropdown-menu">
              {m.items.map((it, j) => (
                <Link href="/" key={j}>{it}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 🔵 MOBILE TOGGLE */}
      <div className="mobile-toggle" onClick={() => setOpen(!open)}>
        <i className="fa-solid fa-bars"></i>
      </div>

      {/* 🔵 MAIN HEADER */}
      <div className="header-grid container">

        {/* ===== LEFT MENU ===== */}
        <nav className={`left-nav ${open ? "show" : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/hospitals">Hospitals</Link>
          <Link href="/treatments">Treatments</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blogs">Blogs</Link>
        </nav>

        {/* ===== LOGO CENTER ===== */}
        <div className="center-logo">
          <Link href="/">
            <Image src="/logo.png" width={130} height={45} alt="logo" />
          </Link>
        </div>

        {/* ===== RIGHT ACTIONS ===== */}
      <div className={`right-nav ${open ? "show" : ""}`}>

  {/* TOP PART */}
 <div className={`right-nav ${open ? "show" : ""}`}>

  {/* TOP ROW */}
  <div className="right-top">
    <Link href="/list-your-hospital">
      <button className="fill-btn">
        <i className="fa-solid fa-plus"></i> List your Hospital
      </button>
    </Link>

    <Link href="/user-login">
      <button className="login-btn">
        <i className="fa-regular fa-user"></i> User Login
      </button>
    </Link>
  </div>

  {/* BOTTOM ROW */}
  <div className="right-bottom">
    <Link href="/get-treatment">
      <button className="assist-btn">Get Treatment Assistance</button>
    </Link>

    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-youtube"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-x-twitter"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
    </div>
  </div>

</div>


</div>


      </div>

    </header>
    </main>
   
  );
}
