import Sidebar from "../islands/Sidebar.tsx";
import ThemeProvider from "../islands/ThemeProvider.tsx";
import TypingAnimation from "../islands/TypingAnimation.tsx";

export default function Home() {
  return (
    <div class="app-container">
      <ThemeProvider />
      <Sidebar currentPage="/" />

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

            {/* Terminal Commands */}
            <div class="terminal-output">
              <TypingAnimation />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
