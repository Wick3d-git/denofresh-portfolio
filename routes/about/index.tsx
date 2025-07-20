import Sidebar from "../../islands/Sidebar.tsx";
import ThemeProvider from "../../islands/ThemeProvider.tsx";

export default function About() {
  return (
    <div class="app-container">
      <ThemeProvider />
      <Sidebar currentPage="/about" />
      
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

            {/* About Me Content */}
            <div class="about-me">
              <p>About Me:</p>
              <p>
                I'm a highly motivated and detail-oriented individual with a
                strong foundation in customer service, leadership, and technical
                proficiency.
              </p>
              <p>
                My experience includes successfully leading and supervising
                teams at Weis Markets and Tops Friendly Markets, constantly
                prioritizing efficiency and customer satisfaction.
              </p>
              <p>
                I possess excellent communication skills, a proven ability to
                resolve complex issues, and a track record of providing a
                exceptional customer experience and support network.
              </p>
              <p>
                Currently I am pursuing a Bachelor of Science in Cybersecurity
                and Information Assurance and Western Governors University, with
                an anticipated graduation date of 12/2026.
              </p>
              <p>Certifications held include CompTIA A+</p>
              <p>
                Eager to leverage my skills in leadership, problem-solving, and
                technically advanced and challenging environments.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 