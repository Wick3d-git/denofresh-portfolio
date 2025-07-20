import { useEffect, useRef } from "preact/hooks";

export default function TypingAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initially hide all elements
    const commands = container.querySelectorAll(".command-line");
    const outputs = container.querySelectorAll(".output");

    commands.forEach((cmd) => {
      (cmd as HTMLElement).style.opacity = "0";
    });
    outputs.forEach((output) => {
      (output as HTMLElement).style.opacity = "0";
    });

    // Animate them in sequence
    let delay = 500; // Start after 500ms
    commands.forEach((cmd, index) => {
      setTimeout(() => {
        (cmd as HTMLElement).style.transition = "opacity 0.5s ease";
        (cmd as HTMLElement).style.opacity = "1";

        // Show corresponding output after command
        setTimeout(() => {
          if (outputs[index]) {
            (outputs[index] as HTMLElement).style.transition =
              "opacity 0.5s ease";
            (outputs[index] as HTMLElement).style.opacity = "1";
          }
        }, 300);
      }, delay);
      delay += 800;
    });
  }, []);

  const handleSkillClick = (skill: string) => {
    const skillInfo = {
      python:
        "Advanced proficiency in Python for automation, data analysis, and web development",
      html5: "Expert knowledge of HTML5 semantic markup and web standards",
      css3:
        "Advanced CSS3 skills including Flexbox, Grid, and responsive design",
      js: "Proficient in modern JavaScript (ES6+) and framework development",
      linux:
        "Strong Linux/Unix system administration and command-line expertise",
    };

    const info = skillInfo[skill as keyof typeof skillInfo] ||
      "Skill information not available";
    console.log(`${skill.toUpperCase()}: ${info}`);
  };

  return (
    <div ref={containerRef}>
      <div class="command-line">
        <span class="prompt">$</span>
        <span class="command">whoami</span>
      </div>
      <div class="output">
        <span class="username">Anthony Abaray</span>
      </div>

      <div class="command-line">
        <span class="prompt">$</span>
        <span class="command">cat skills.txt</span>
      </div>
      <div class="output">
        <div class="skills-icons">
          <a
            href="https://www.python.org/"
            target="_blank"
            onClick={() => handleSkillClick("python")}
          >
            <i class="fab fa-python" title="Python"></i>
          </a>
          <a
            href="https://www.w3.org/html/"
            target="_blank"
            onClick={() => handleSkillClick("html5")}
          >
            <i class="fab fa-html5" title="HTML5"></i>
          </a>
          <a
            href="https://www.w3.org/Style/CSS/Overview.en.html"
            target="_blank"
            onClick={() => handleSkillClick("css3")}
          >
            <i class="fab fa-css3-alt" title="CSS3"></i>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            onClick={() => handleSkillClick("js")}
          >
            <i class="fab fa-js-square" title="JavaScript"></i>
          </a>
          <a
            href="https://www.kernel.org/"
            target="_blank"
            onClick={() => handleSkillClick("linux")}
          >
            <i class="fab fa-linux" title="Linux"></i>
          </a>
        </div>
      </div>

      <div class="command-line">
        <span class="prompt">$</span>
        <span class="command">groups Anthony</span>
      </div>
      <div class="output">
        <span class="groups">College Student, CyberSecurity</span>
      </div>
    </div>
  );
} 