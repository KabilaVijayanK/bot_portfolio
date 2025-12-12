import { useEffect, useState } from "react";
import "./Consultation.css";
import { useNavigate } from "react-router-dom";
import {
  ClipboardList,
  Users,
  Target,
  Workflow,
  TrendingUp,
  BarChart3,
  Lightbulb,
  Cog
} from "lucide-react";
import {
  FileSearch,
  ClipboardCheck,
  Settings
} from "lucide-react";




const Consultation = () => {
    const navigate = useNavigate();

const goToContact = () => {
  navigate("/contact");
};

  const [scrollY, setScrollY] = useState(0);

  // Background parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const items = document.querySelectorAll(
      ".glass-item, .service-card, .process-step"
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("reveal");
            }, index * 120);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
  <div className="consultation-page" style={{minHeight:"unset"}}>


      {/* BACKGROUND ORBS */}
      <div className="bg-animation">
        <div
          className="gradient-orb orb-1"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)` }}
        ></div>
        <div
          className="gradient-orb orb-2"
          style={{ transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.12}px)` }}
        ></div>
        <div
          className="gradient-orb orb-3"
          style={{ transform: `translate(${scrollY * 0.05}px, ${-scrollY * 0.1}px)` }}
        ></div>
      </div>

      {/* HERO */}
      <div className="hero-section">
        <div className="floating-badge">🚀 Transform Your Business</div>
        <h1 className="hero-title">
          Consulting Services for <span className="gradient-text">SMEs</span> Looking to Scale with{" "}
          <span className="gradient-text">Clarity, Systems & Discipline</span>
        </h1>
        <p className="hero-subtitle">
          We build strong systems across sales, operations, HR, and leadership —
          so your business grows with structure, not chaos.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">SMEs Transformed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3x</div>
            <div className="stat-label">Average Growth</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>

     {/* FOUNDERS */}
<section className="section">
  <h2 className="section-title">Why Founders Choose Us</h2>

  <div className="glass-grid">

    {[
      { text: "Clear SOPs, KRAs & KPIs", icon: ClipboardList },
      { text: "Improved team performance", icon: Users },
      { text: "Accountability-driven culture", icon: Target },
      { text: "Streamlined operations", icon: Workflow },
      { text: "Strong sales systems", icon: TrendingUp },
      { text: "Real-time dashboards", icon: BarChart3 },
      { text: "Founder clarity", icon: Lightbulb },
      { text: "Systems-driven business", icon: Cog },
    ].map((item, i) => {
      const Icon = item.icon;

      return (
        <div key={i} className="glass-item flex items-center gap-4">

          {/* ICON */}
          <div
            className="
              w-12 h-12
              rounded-full
              flex items-center justify-center
              bg-gradient-to-br from-pink-500 to-purple-500
              shadow-lg
            "
          >
            <Icon size={22} className="text-white" />
          </div>

          {/* TEXT */}
          <span className="glass-text text-lg font-semibold">
            {item.text}
          </span>

        </div>
      );
    })}

  </div>
</section>


    {/* SERVICES */}
<section className="section">
  <h2 className="section-title">Core Consulting Services</h2>

  <div className="service-grid">

    {[
      {
        title: "30–Day Business Audit",
        desc: "Full operational analysis across sales, HR, processes & reporting.",
        icon: FileSearch
      },
      {
        title: "SOP, KRA & KPI Setup",
        desc: "Clear accountability systems for all roles.",
        icon: ClipboardCheck
      },
      {
        title: "Sales Consulting",
        desc: "Pipeline creation, performance tracking & conversion optimisation.",
        icon: TrendingUp
      },
      {
        title: "Operations Consulting",
        desc: "Workflow design for scalable service and delivery.",
        icon: Workflow
      },
      {
        title: "Dashboards & Reporting",
        desc: "Realtime performance visibility for founders.",
        icon: BarChart3
      },
      {
        title: "ERP & HRMS Consulting",
        desc: "Tool selection, setup & implementation guidance.",
        icon: Settings
      }
    ].map((service, i) => {
      const Icon = service.icon;

      return (
        <div key={i} className="service-card">

          {/* ICON */}
          <div
  className="
    service-icon
    mx-auto
    flex items-center justify-center

    w-20 h-20
    mb-4

    rounded-full
    bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600
    shadow-[0_0_30px_rgba(219,39,119,0.6)]
  "
>
  <Icon
    size={44}
    strokeWidth={2.2}
    className="text-white"
  />
</div>

          {/* TEXT */}
          <h3 className="service-title">{service.title}</h3>
          <p className="service-desc">{service.desc}</p>

          <div className="service-shine"></div>

        </div>
      );
    })}

  </div>
</section>


      {/* PROCESS */}
      <section className="section">
        <h2 className="section-title">Our Consulting Process</h2>

        <div className="process">
          {[
            "Clarity Call",
            "Business Audit",
            "System Design",
            "Team Alignment",
            "Performance Tracking",
          ].map((step, i) => (
            <div key={i} className="process-step">
              <div className="process-number">{i + 1}</div>
              <div className="process-label">{step}</div>
              {i < 4 && <div className="process-connector"></div>}
            </div>
          ))}
        </div>
      </section>
      {/* ===== FAQ SECTION ===== */}
<section className="section faq-section">
  <h2 className="section-title">Frequently Asked Questions</h2>

  <div className="faq-grid">

    {[
      {
        q: "What does your 30-day audit include?",
        a: "Our audit covers people, processes, reporting systems, role clarity, KRAs/KPIs, communication flow, team performance, sales structure, and operational efficiency. We identify growth blockers and provide a clear action plan."
      },
      {
        q: "Can you work with our existing team?",
        a: "Yes. In most cases, new hiring is not required. We improve your existing team through systems, structure, and accountability."
      },
      {
        q: "How soon can we see results?",
        a: "Most clients see results in 30–60 days including fewer escalations, better team performance, a clearer sales pipeline and smoother operations."
      },
      {
        q: "Do you work across India & the Gulf?",
        a: "Yes — we work with companies in India, UAE, Qatar, Oman, Bahrain and Saudi Arabia."
      },
      {
        q: "What size of companies do you work with?",
        a: "We focus on SMEs between ₹1 Cr – ₹100 Cr turnover scaling with systems & discipline."
      },
      {
        q: "What business problems do you solve?",
        a: "We solve unclear roles, weak sales systems, delays in operations, missing SOPs, poor reporting, performance tracking gaps, and founder dependency."
      },
      {
        q: "What happens after the audit?",
        a: "You receive a detailed report, system roadmap and department-wise action plan. Implementation support is optional."
      },
      {
        q: "Do you help with ERP / HRMS?",
        a: "Yes. We guide tool selection, customisation and complete ERP / HRMS implementation."
      },
      {
        q: "Are your services coaching or consulting?",
        a: "We provide hands-on consulting — not just modules but real execution."
      },
      {
        q: "How do we get started?",
        a: "Simply book a Clarity Consultation to discuss challenges and find the right growth roadmap."
      }
    ].map((item,i)=>(
      <details className="faq-card" key={i}>
        <summary>{item.q}</summary>
        <p>{item.a}</p>
      </details>
    ))}

  </div>
</section>


      {/* CTA */}
      <section className="cta-section">
        <div className="cta-card">
          <h2 className="cta-title">Book Your Free Clarity Consultation</h2>
          <p className="cta-text">
            Discuss your challenges and design your roadmap to growth.
          </p>
  <div className="flex justify-center mt-10">
  <a
    href="https://calendly.com/harry-thebot/consultation-with-thebot"
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-[520px]
      py-6

      text-center
      text-white text-2xl font-bold tracking-wide uppercase
      rounded-full

      bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600

      shadow-[0_0_30px_rgba(236,72,153,0.45)]
      hover:shadow-[0_0_45px_rgba(236,72,153,0.75)]

      transition-all duration-300
      hover:scale-105 hover:brightness-110
      active:scale-95
    "
  >
    BOOK CONSULTATION →
  </a>
</div>






        </div>
      </section>

    </div>

  );
};

export default Consultation;
