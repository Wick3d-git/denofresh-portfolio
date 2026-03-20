import Sidebar from "../../islands/Sidebar.tsx";
import ThemeProvider from "../../islands/ThemeProvider.tsx";

export default function Resume() {
  return (
    <div class="app-container">
      <ThemeProvider />
      <Sidebar currentPage="/resume" />

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

              {/* Work Experience */}
              <p class="align-left">Work Experience:</p>
              <p>
                <ul>
                  <li>Jan 2026 – Present</li>
                  <ul class="type2">
                    <li>Head Cashier - Sprouts</li>
                    <li>
                      Led, trained, and supervised up to 6 cashiers while
                      resolving POS system errors, cash discrepancies, and
                      register issues to keep checkout operations running
                      smoothly.
                    </li>
                  </ul>
                </ul>
              </p>
              <p>
                <ul>
                  <li>Jan 2023 – Aug 2025</li>
                  <ul class="type2">
                    <li>Price Accuracy Associate - Weis Markets</li>
                    <li>
                      Maintained data integrity across thousands of SKUs in the
                      store inventory system, processing weekly price updates,
                      new item entries, and correcting pricing errors to ensure
                      system accuracy.
                    </li>
                  </ul>
                </ul>
              </p>
              <p>
                <ul>
                  <li>Sep 2021 – Aug 2022</li>
                  <ul class="type2">
                    <li>Customer Service Lead - Tops Friendly Markets</li>
                    <li>
                      Led a team of 8–10 customer service representatives
                      handling escalated calls, returns, and refunds across a
                      high-volume retail environment.
                    </li>
                  </ul>
                </ul>
              </p>

              {/* Education */}
              <p class="align-left">Education:</p>
              <p>
                <ul>
                  <li>In Progress — Exp. Dec 2026</li>
                  <ul class="type2">
                    <li>Bachelor of Science</li>
                    <li>Cybersecurity & Information Assurance</li>
                    <li>Western Governors University</li>
                  </ul>
                </ul>
              </p>

              {/* Certifications */}
              <p class="align-left">Certifications:</p>
              <p>
                <ul>
                  <li>Apr 2024 – Feb 2029</li>
                  <ul class="type2">
                    <li>CompTIA A+</li>
                    <li>Verification Code: 2HM5803RBJF1QX9P</li>
                  </ul>
                </ul>
              </p>
              <p>
                <ul>
                  <li>Dec 2025 – Feb 2029</li>
                  <ul class="type2">
                    <li>CompTIA Network+</li>
                    <li>Verification Code: c3c3d19e3f794c4690773b742ee96d5c</li>
                  </ul>
                </ul>
              </p>
              <p>
                <ul>
                  <li>Feb 2026 – Feb 2029</li>
                  <ul class="type2">
                    <li>CompTIA Security+</li>
                    <li>Verification Code: 76511718cf404b5eb3157e30c498c872</li>
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
