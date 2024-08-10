import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
                style={{
                  padding: "20px",
                  borderRadius: "15px",
                  backgroundColor: "#2a2a72",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="right">
                  <h2 style={{ marginBottom: "8px", fontSize: "1.5rem", color: "#fff" }}>
                    {data.role}
                  </h2>
                  <h4 style={{ marginBottom: "12px", fontSize: "1.2rem", color: "#b0b0b0" }}>
                    {data.organisation}
                  </h4>
                  <h5 style={{ marginBottom: "0", fontSize: "1rem", color: "#fff" }}>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} - {data.endDate}
                    </span>{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
