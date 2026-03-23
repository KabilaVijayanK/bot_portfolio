import React from "react";

const CLIENTS = [
  {
    name: "Chemiplant Engineering",
    domain: "chemiplantindia.com",
    category: "Manufacturing",
  },
  {
    name: "Danesh Industries",
    domain: "daneshindustries.com",
    category: "Manufacturing",
  },
  { name: "Yagnm Industries", domain: "yagnm.com", category: "Manufacturing" },
  {
    name: "Yugma Impression",
    domain: "yugmaimpressions.com",
    category: "Manufacturing",
  },
  {
    name: "Rushabh Sealink",
    domain: "rushabhsealink.com",
    category: "Logistics",
  },
  {
    name: "Global Softwares",
    domain: "globalsoftwares.net",
    category: "Software",
  },
];

const ClientsSection = () => {
  return (
    <section className="about" style={{ paddingBottom: "5rem" }}>
      <div
        className="about-content"
        style={{ width: "100%", textAlign: "center" }}
      >
        <h2 className="heading">
          Trusted <span>Clients</span>
        </h2>
        <p style={{ fontSize: "1.6rem", marginBottom: "4rem", color: "#ccc" }}>
          Partnering with industry leaders across Manufacturing, Logistics, and
          Software.
        </p>

        <div className="clients-grid">
          {CLIENTS.map((client, index) => (
            <div className="client-card" key={index}>
              <img
                src={`https://logo.clearbit.com/${client.domain}`}
                alt={client.name}
                className="client-logo"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <h3 className="client-fallback">{client.name}</h3>
              <span className="client-category">{client.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
