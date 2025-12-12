import React from "react";
import { Link } from "react-router-dom";

const servicesData = [
  
  {
    title: "Business Strategy & Growth Consulting",
    description:
      "For startups, small businesses, and founders aiming for scale.",
    route: "/services/business-strategy",
    icon: "bx-line-chart",
  },
  {
    title: "Branding & Positioning Services",
    description:
      "Helping brands become memorable and sales-ready.",
    route: "/services/branding",
    icon: "bx-palette",
  },
  {
    title: "Digital Presence Setup",
    description:
      "For founders or businesses starting from scratch.",
    route: "/services/digital-presence",
    icon: "bx-globe",
  },
  {
    title: "Sales Funnel & Lead Engine Creation",
    description:
      "Set up scalable lead systems via digital channels.",
    route: "/services/sales-funnel",
    icon: "bx-target-lock",
  },
  {
    title: "Content & Thought Leadership",
    description:
      "Positioning yourself as an expert across platforms.",
    route: "/services/content-leadership",
    icon: "bx-pencil",
  },
  {
    title: "Mentorship & One-on-One Coaching",
    description:
      "For founders, consultants, or agency owners looking to scale.",
    route: "/services/mentorship",
    icon: "bx-user-voice",
  },
];

const Services = () => {
  return (
    <section className="services-glass">
      <h2 className="services-title">
        My <span>Services</span>
      </h2>

      <div className="services-container center-last-row">

        {servicesData.map((item, index) => (
          <div className="glass-service-card" key={index}>
            <div className="glass-icon">
              <i className={`bx ${item.icon}`}></i>
            </div>

            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <Link to={item.route} className="glass-btn">
              Explore →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
