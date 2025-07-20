import { useSignal } from "@preact/signals";

interface SidebarProps {
  currentPage: string;
}

export default function Sidebar({ currentPage }: SidebarProps) {
  const handleNavigation = (index: number) => {
    switch (index) {
      case 0: // Home
        window.location.href = "/";
        break;
      case 1: // About
        window.location.href = "/about";
        break;
      case 2: // Resume
        window.location.href = "/resume";
        break;
      case 3: // GitHub
        window.open("https://github.com/wick3d-git", "_blank");
        break;
      case 4: // LinkedIn
        window.open("https://linkedin.com/in/anthony-abaray", "_blank");
        break;
    }
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    
    // Save theme preference to local storage
    const theme = root.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  };

  const getActiveIndex = (currentPage: string): number => {
    switch (currentPage) {
      case "/":
      case "/index":
        return 0;
      case "/about":
        return 1;
      case "/resume":
        return 2;
      default:
        return 0;
    }
  };

  const activeIndex = getActiveIndex(currentPage);

  return (
    <nav class="sidebar">
      <div class="nav-icons">
        <button 
          class={`nav-icon ${activeIndex === 0 ? 'active' : ''}`}
          title="Home"
          onClick={() => handleNavigation(0)}
        >
          <i class="fas fa-home"></i>
        </button>
        <button 
          class={`nav-icon ${activeIndex === 1 ? 'active' : ''}`}
          title="About"
          onClick={() => handleNavigation(1)}
        >
          <i class="fas fa-id-card"></i>
        </button>
        <button 
          class={`nav-icon ${activeIndex === 2 ? 'active' : ''}`}
          title="Resume"
          onClick={() => handleNavigation(2)}
        >
          <i class="fas fa-briefcase"></i>
        </button>
        <button 
          class="nav-icon"
          title="GitHub"
          onClick={() => handleNavigation(3)}
        >
          <i class="fab fa-github"></i>
        </button>
        <button 
          class="nav-icon"
          title="LinkedIn"
          onClick={() => handleNavigation(4)}
        >
          <i class="fab fa-linkedin"></i>
        </button>
      </div>
      <div class="settings-icon">
        <button
          class="nav-icon theme-toggle"
          onClick={toggleTheme}
          title="Toggle Theme"
        >
          <i class="fa-solid fa-moon"></i>
          <i class="fa-solid fa-sun"></i>
        </button>
      </div>
    </nav>
  );
} 