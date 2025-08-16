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
                  <li>01/2023 - Current</li>
                  <ul class="type2">
                    <li>Price Accuracy Associate</li>
                    <li>Weis Markets</li>
                  </ul>
                </ul>
              </p>
              <p>
                <ul>
                  <li>10/2021 - 08/2022</li>
                  <ul class="type2">
                    <li>Customer Service Lead</li>
                    <li>Tops Friendly Markets</li>
                  </ul>
                </ul>
              </p>
              <p class="align-left">Education:</p>
              <p>
                <ul>
                  <li>07/2023 - 12/2026</li>
                  <ul class="type2">
                    <li>Bachelor of Science</li>
                    <li>Cybersecurity and Information Assurance</li>
                  </ul>
                </ul>
              </p>
              <p>
                <ul>
                  <li>08/2021 - 06/2022</li>
                  <ul class="type2">
                    <li>Regents High School Diploma</li>
                    <li>Member of the National Honor Society</li>
                  </ul>
                </ul>
              </p>
              <p class="align-left">Certifications:</p>
              <p>
                <ul>
                  <li>04/2024 - 04/2027</li>
                  <ul class="type2">
                    <li>CompTIA A+</li>
                    <li>Verification Code: 2HM5803RBJF1QX9P</li>
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