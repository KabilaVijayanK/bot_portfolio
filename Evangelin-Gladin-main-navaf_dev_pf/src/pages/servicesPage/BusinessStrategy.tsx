import React from "react";

const BusinessStrategy = () => {
  return (
    <section className="strategy-wrapper">
      
      {/* HERO */}
      <div className="strategy-hero">
        <h1>
          Business Strategy <span>& Growth Consulting</span>
        </h1>

        <p>
          With <strong>19+ years</strong> of hands-on experience helping
          <strong> 50+ Indian brands</strong> scale globally, we build
          powerful systems that increase revenue and create clarity.
        </p>

        <button className="cta-btn">
          Book a Clarity Call
        </button>
      </div>

      {/* INCLUDED */}
      <h2 className="section-title">What's Included</h2>

      <div className="card-grid">

        <div className="strategy-card">
          🎯
          <h3>Go-To-Market Strategy</h3>
          <p>
            Identify ideal buyers, pricing, international positioning &
            growth roadmap.
          </p>
        </div>

        <div className="strategy-card">
          💰
          <h3>Sales Revenue Planning</h3>
          <p>
            Performance-based scalable sales model aligned with
            business targets.
          </p>
        </div>

        <div className="strategy-card">
          🚀
          <h3>Lead Generation Systems</h3>
          <p>
            WhatsApp, IndiaMART, email & inbound systems that produce
            consistent leads.
          </p>
        </div>

        <div className="strategy-card">
          🎙️
          <h3>1:1 Clarity Call</h3>
          <p>
            Deep strategy session to define your growth roadmap
            with practical execution steps.
          </p>
        </div>

      </div>
      
     {/* CASE STUDY */}
<div className="w-full flex justify-center mt-40 pt-20 px-6 border-t border-white/10">

  <div
    className="
      max-w-10xl w-full
      bg-white/5 backdrop-blur-xl 
      border border-white/10
      p-12 md:p-16 rounded-3xl
      grid md:grid-cols-2 gap-12
      shadow-2xl
    "
  >
    {/* LEFT */}
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
        🧩 Real Case Study:{" "}
        <span className="text-yellow-400">Groundscrew</span>
      </h2>

      <p className="text-3xl text-gray-300 leading-relaxed mb-8">
        One of our most impactful engagements was with
        <strong className="text-white"> Groundscrew </strong> – a startup that
        lacked a global expansion roadmap.
      </p>

      <ul className="space-y-8 text-3xl">
        <li>✅ Repositioned brand for global appeal</li>
        <li>✅ Built international go-to-market strategy</li>
        <li>✅ Enabled first export deals</li>
        <li>✅ Created scalable lead & revenue engines</li>
      </ul>
    </div>

    {/* RIGHT */}
    <div className="flex flex-col justify-center items-center">

      <div
        className="
          text-[90px] md:text-[120px]
          font-black
          bg-gradient-to-r from-green-400 to-cyan-500
          bg-clip-text text-transparent
          drop-shadow-lg mb-4
        "
      >
        ₹12cr
      </div>

      <p className="text-2xl md:text-3xl tracking-wide text-white">
        Revenue Generated
      </p>

    </div>
  </div>
</div>


    </section>
  );
};

export default BusinessStrategy;
