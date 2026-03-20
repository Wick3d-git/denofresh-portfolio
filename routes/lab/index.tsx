import Sidebar from "../../islands/Sidebar.tsx";
import ThemeProvider from "../../islands/ThemeProvider.tsx";

export default function About() {
  return (
    <div class="app-container">
      <ThemeProvider />
      <Sidebar currentPage="/lab" />

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

            {/* Homelab Setup*/}
            <div class="resume">
              <p class="align-left">My Homelab Setup:</p>
              <br></br>
              <p>
                I run a self-hosted homelab on NixOS using Docker Compose,
                currently managing 40 containers across 27 services. External
                services are securely exposed via Cloudflare Tunnel with
                zero-trust access policies, making for no open inbound ports.
              </p>
              <p>
                <ul>
                  <br></br>
                  <li>External Apps:</li>
                  <ul class="type2">
                    <li>
                      SearXNG
                      <span class="text-muted"> - private search engine</span>
                    </li>
                    <li>
                      OpenWebUI/Ollama
                      <span class="text-muted"> - local AI interface</span>
                    </li>
                    <li>
                      Vaultwarden
                      <span class="text-muted"> - local password manager</span>
                    </li>
                    <li>
                      Portainer
                      <span class="text-muted"> - container management</span>
                    </li>
                    <li>
                      Immich
                      <span class="text-muted"> - photo library</span>
                    </li>
                    <li>
                      Monica CRM
                      <span class="text-muted"> - contact manager</span>
                    </li>
                    <li>
                      Nextcloud
                      <span class="text-muted"> - Gdrive replacement</span>
                    </li>
                    <li>
                      Homarr
                      <span class="text-muted"> - homelab dashboard</span>
                    </li>
                    <li>
                      Memos
                      <span class="text-muted"> - quick notes + calendar</span>
                    </li>
                    <li>
                      Navidrome
                      <span class="text-muted"> - music streaming server</span>
                    </li>
                    <li>
                      Linkwarden
                      <span class="text-muted"> - bookmark manager</span>
                    </li>
                    <li>
                      Excalidraw
                      <span class="text-muted"> - collab whiteboard</span>
                    </li>
                    <li>
                      Gitea
                      <span class="text-muted"> - github replacement</span>
                    </li>
                  </ul>
                  <br></br>
                  <li>Internal Apps</li>
                  <ul class="type2">
                    <li>
                      Affine Notes
                      <span class="text-muted"> - notion replacement</span>
                    </li>
                    <li>
                      Jellyfin
                      <span class="text-muted"> - media server</span>
                    </li>
                    <li>
                      Jellyseerr
                      <span class="text-muted"> - media request manager</span>
                    </li>
                    <li>
                      Prowlarr
                      <span class="text-muted"> - indexer manager</span>
                    </li>
                    <li>
                      Radarr
                      <span class="text-muted"> - movie library manager</span>
                    </li>
                    <li>
                      Sonarr
                      <span class="text-muted"> - tv series manager</span>
                    </li>
                    <li>
                      Lidarr
                      <span class="text-muted"> - music library manager</span>
                    </li>
                    <li>
                      Invidious
                      <span class="text-muted"> - Youtube frontend</span>
                    </li>
                    <li>
                      Actual Financial
                      <span class="text-muted"> - personal budgeting</span>
                    </li>
                    <li>
                      Lazy Librarian
                      <span class="text-muted"> - book manager</span>
                    </li>
                    <li>
                      Cloudflared
                      <span class="text-muted"> - secure tunnel daemon</span>
                    </li>
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
