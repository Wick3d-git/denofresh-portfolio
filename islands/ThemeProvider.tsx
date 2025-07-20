import { useEffect } from "preact/hooks";

export default function ThemeProvider() {
  useEffect(() => {
    // Load saved theme on page load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }

    // Setup keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + D for theme toggle
      if ((e.ctrlKey || e.metaKey) && e.key === "d") {
        e.preventDefault();
        const root = document.documentElement;
        root.classList.toggle("dark");
        const theme = root.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", theme);
      }

      // Ctrl/Cmd + R for refresh (let browser handle this naturally)
      if ((e.ctrlKey || e.metaKey) && e.key === "r") {
        // Don't prevent default, let browser handle refresh
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // This component doesn't render anything visible
  return null;
} 