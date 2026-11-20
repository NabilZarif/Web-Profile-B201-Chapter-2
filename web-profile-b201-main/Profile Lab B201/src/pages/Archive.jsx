import { useState } from "react";
import { archiveData } from "../data/archiveData";
import "../styles/archive.css";

export default function Archive() {
  const years = [2020, 2021, 2022, 2023, 2024, 2025];

  const [selectedYear, setSelectedYear] = useState(2025);

  const currentData = archiveData[selectedYear] || [];

  return (
    <div className="archive-page">

      <div className="archive-header">
        <h1>Archive</h1>
        <p>
          Archive of LAB B201 students and final projects.
        </p>
      </div>

      <div className="archive-container">

        {/* SIDEBAR TAHUN */}
        <aside className="archive-sidebar">
          {years.map((year) => (
            <button
              key={year}
              className={
                selectedYear === year
                  ? "archive-year active"
                  : "archive-year"
              }
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </aside>

        {/* CONTENT KANAN */}
        <main className="archive-content">

          <h2>{selectedYear}</h2>

          {currentData.length > 0 ? (
            <div className="archive-grid">

              {currentData.map((person, index) => (
                <div className="archive-card" key={index}>

                  {/* TEMPAT FOTO */}
                  <div className="archive-photo">
                    <span>PHOTO</span>
                  </div>

                  <div className="archive-info">
                    <h3>{person.name}</h3>

                    <p>{person.thesis}</p>
                  </div>

                </div>
              ))}

            </div>
          ) : (
            <div className="archive-empty">
              <p>
                Belum ada data archive untuk tahun {selectedYear}.
              </p>
            </div>
          )}

        </main>

      </div>
    </div>
  );
}