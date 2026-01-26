import Sidebar from "../../islands/Sidebar.tsx";
import ThemeProvider from "../../islands/ThemeProvider.tsx";

export default function Resume() {
  return (
    <div class="app-container">
      <ThemeProvider />
      <Sidebar currentPage="/resume" />

      {/* Main Content */}
      <main class="main-content">
        <div class="terminal-container">
          <div class="terminal-window">
            {/* Profile Image */}
            <div class="profile-section">
              <div class="profile-image">
                <img src="/logo.png" alt="Anthony Abaray" />
              </div>
            </div>

            {/* Resume Content */}
            <div class="resume">
              <a href="/Resume-Anthony-Abaray.pdf" class="download-link">
                <p class="align-left">
                  Download <i class="fa-solid fa-download"></i>
                </p>
              </a>
              <p class="align-left">Resume:</p>
              <p>
                <ul>
                  <li>01/2026 - Present</li>
                  <ul className="type2">
                    <li>Head Cashier</li>
                    <li>Sprouts</li>
                  </ul>
                </ul>
              </p>
              <p>
                <ul>
                  <li>01/2023 - 08/2025</li>
                  <ul className="type2">
                    <li>Price Accuracy Associate</li>
                    <li>Weis Markets</li>
                  </ul>
                </ul>
              </p>
              <p>
                <ul>
                  <li>10/2021 - 08/2022</li>
                  <ul className="type2">
                    <li>Customer Service Lead</li>
                    <li>Tops Friendly Markets</li>
                  </ul>
                </ul>
              </p>
              <p class="align-left">Education:</p>
              <p>
                <ul>
                  <li>07/2023 - 12/2026</li>
                  <ul className="type2">
                    <li>Bachelor of Science</li>
                    <li>Cybersecurity and Information Assurance</li>
                  </ul>
                </ul>
              </p>
              <p>
                <ul>
                  <li>08/2021 - 06/2022</li>
                  <ul className="type2">
                    <li>Regents High School Diploma</li>
                    <li>Member of the National Honor Society</li>
                  </ul>
                </ul>
              </p>
              <p class="align-left">Certifications:</p>
              <p>
                <ul>
                  <li>04/2024 - 02/2029</li>
                  <ul className="type2">
                    <li>CompTIA A+</li>
                    <li>Verification Code: 2HM5803RBJF1QX9P</li>
                  </ul>
                </ul>
              </p>
              <p>
                <ul>
                  <li>12/2025 - 02/2029</li>
                  <ul className="type2">
                    <li>CompTIA Net+</li>
                    <li>Verification Code: c3c3d19e3f794c4690773b742ee96d5c</li>
                  </ul>
                </ul>
              </p>
              <p>
                <ul>
                  <li>02/2026 - 02/2029</li>
                  <ul className="type2">
                    <li>CompTIA Sec+</li>
                    <li>Verification Code: 8LF243HY6JE419C9</li>
                  </ul>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 