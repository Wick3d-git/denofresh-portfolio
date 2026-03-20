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
                I'm a senior at Western Governors University pursuing a B.S. in
                Cybersecurity & Information Assurance, with an expected
                graduation date of December 2026. I currently hold the CompTIA
                Trifecta (A+, Network+ and Security+) and am actively building
                toward a career in IT and cybersecurity.
              </p>
              <p>
                My technical foundation is hands-on and self-paced. I deploy and
                manage a self-hosted infrastructure running 40 Docker containers
                across 27 services, with a focus on real-world security
                practices. Starting with zero-trust network design via
                Cloudflare Tunnel, DNS management, SSL configuration, and
                granular access control across all exposed services. Beyond the
                homelab, I bring experience leading teams, managing data
                integrity in enterprise inventory systems, and resolving complex
                issues under pressure.
              </p>
              <p>
                I'm currently seeking entry-level IT and cybersecurity roles. If
                you have any leads on positions that might be a good fit, feel
                free to reach out to me on LinkedIn. I would love to connect.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

