:root {
  font-family: 'Inter', sans-serif;
  color: #ecf2ff;
  background: #081322;
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(74, 111, 255, 0.2), transparent 20%),
    linear-gradient(180deg, #07111d 0%, #0d1d29 100%);
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
}

#root {
  width: 100%;
}

.app-shell {
  max-width: 1380px;
  margin: 0 auto;
  padding: 28px 24px 48px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 26px;
  background: rgba(11, 24, 36, 0.7);
  border: 1px solid rgba(138, 180, 255, 0.15);
  border-radius: 22px;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 18px;
  z-index: 10;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6ee7d8, #4f7cff 70%);
  color: #081322;
  font-size: 1.5rem;
  font-weight: 800;
}

.brand-name,
.brand-sub {
  letter-spacing: 0.12em;
  font-size: 0.74rem;
  font-weight: 800;
}

.brand-sub {
  color: #9ec4ff;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 26px;
}

.main-nav a {
  color: #dfeeff;
  text-decoration: none;
  font-size: 0.93rem;
  opacity: 0.8;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.primary-btn,
.ghost-btn {
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 600;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, #58d1ff, #5d7bff);
  color: white;
  box-shadow: 0 10px 22px rgba(93, 123, 255, 0.35);
}

.ghost-btn {
  background: rgba(148, 177, 255, 0.08);
  color: #eaf4ff;
  border: 1px solid rgba(156, 186, 255, 0.18);
}

.primary-btn:hover,
.ghost-btn:hover {
  transform: translateY(-1px);
}

.large {
  padding: 14px 22px;
}

.small {
  padding: 8px 12px;
  font-size: 0.82rem;
}

.hero {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 28px;
  padding: 54px 0 32px;
}

.eyebrow {
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(93, 123, 255, 0.12);
  border: 1px solid rgba(120, 147, 255, 0.2);
  color: #a5d8ff;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.8rem, 5vw, 4.6rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
}

.hero-copy p {
  margin: 24px 0 0;
  color: #cdddf6;
  font-size: 1.08rem;
  max-width: 680px;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 26px;
}

.mini-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;
}

.mini-stat-box {
  min-width: 150px;
  padding: 16px 18px;
  border-radius: 16px;
  background: rgba(141, 171, 255, 0.04);
  border: 1px solid rgba(150, 175, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mini-stat-box strong {
  font-size: 1.4rem;
}

.mini-stat-box span {
  color: #b9c9ea;
  font-size: 0.8rem;
}

.panel-card {
  background: rgba(12, 25, 38, 0.86);
  border: 1px solid rgba(138, 180, 255, 0.12);
  border-radius: 24px;
  box-shadow: 0 18px 40px rgba(2, 8, 16, 0.38);
}

.hero-panel {
  padding: 24px;
}

.panel-header,
.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.section-head h2,
.section-head h3 {
  margin: 0;
  font-size: 1.3rem;
}

.panel-header {
  margin-bottom: 20px;
  color: #c8d9f7;
  font-size: 0.8rem;
}

.status-pill,
.pill,
.tag,
.user-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: 600;
}

.status-pill {
  background: rgba(52, 211, 153, 0.12);
  color: #7ff2c2;
  padding: 7px 10px;
  font-size: 0.74rem;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  gap: 12px;
}

.stat-card {
  background: rgba(145, 176, 255, 0.04);
  border: 1px solid rgba(144, 176, 255, 0.11);
  border-radius: 18px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-card span {
  color: #adc5ef;
  font-size: 0.78rem;
}

.stat-card strong {
  font-size: 1.8rem;
  letter-spacing: -0.05em;
}

.stat-card small {
  color: #85dbbf;
}

.dashboard {
  display: grid;
  grid-template-columns: 1.6fr 0.8fr;
  gap: 24px;
  margin-top: 18px;
}

.wide {
  padding: 22px;
}

.compact {
  margin-bottom: 18px;
}

.linkish {
  color: #a9cbff;
  font-size: 0.75rem;
}

.feed-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(210px, 1fr));
  gap: 18px;
  margin-top: 16px;
}

.fund-card {
  background: rgba(143, 173, 255, 0.04);
  border: 1px solid rgba(145, 180, 255, 0.11);
  border-radius: 18px;
  padding: 18px;
}

.fund-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.user-tag,
.pill,
.tag {
  padding: 6px 9px;
  font-size: 0.7rem;
}

.user-tag {
  background: rgba(105, 142, 255, 0.1);
  color: #dce8ff;
}

.pill {
  background: rgba(92, 224, 175, 0.13);
  color: #7ef0c4;
}

.fund-card h3 {
  margin: 16px 0 12px;
  font-size: 1.1rem;
}

.fund-card p {
  margin: 0;
  color: #c9d9f4;
  min-height: 72px;
}

.progress-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 18px;
}

.progress-bar {
  flex: 1;
  height: 10px;
  border-radius: 999px;
  background: rgba(110, 138, 190, 0.18);
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #49d9c2, #5d7bff);
  border-radius: inherit;
}

.progress-row strong {
  font-size: 0.9rem;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.tag {
  background: rgba(131, 169, 255, 0.08);
  color: #d8e6ff;
}

.side-stack {
  display: grid;
  gap: 24px;
}

.side-stack .panel-card {
  padding: 20px;
}

.issue-list,
.group-list,
.leaderboard-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.issue-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.issue-list li {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(152, 180, 255, 0.08);
}

.issue-list li:last-child {
  border-bottom: none;
}

.issue-list strong,
.group-item strong,
.leader-info strong {
  display: block;
  margin-bottom: 4px;
}

.issue-list span,
.group-item span,
.leader-info span,
.video-meta span {
  color: #b9caf1;
  font-size: 0.78rem;
}

.issue-list em {
  color: #8cd9b9;
  font-style: normal;
  font-size: 0.72rem;
  align-self: start;
  padding-top: 6px;
}

.group-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.group-item {
  display: grid;
  grid-template-columns: 44px 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(152, 180, 255, 0.08);
}

.group-item:last-child {
  border-bottom: none;
}

.group-badge {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #7fe7d9, #5d7bff);
  color: #0d1d29;
  font-weight: 800;
}

.group-item small {
  color: #9bd8ff;
  font-size: 0.72rem;
}

.lower-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 24px;
  margin-top: 24px;
}

.chat-panel,
.leaderboard-panel,
.media-panel {
  padding: 20px;
}

.chat-box {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 16px;
  border-radius: 18px;
  background: rgba(120, 151, 255, 0.04);
  border: 1px solid rgba(133, 164, 255, 0.09);
  min-height: 240px;
}

.chat-message {
  max-width: 82%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(137, 157, 255, 0.08);
}

.chat-message:nth-child(2n) {
  align-self: flex-end;
  background: rgba(76, 143, 255, 0.14);
}

.chat-user {
  font-size: 0.74rem;
  font-weight: 700;
  color: #9fd2ff;
}

.chat-message p {
  margin: 0;
  color: #edf5ff;
}

.chat-message time {
  font-size: 0.7rem;
  color: #a2b0c8;
}

.chat-input-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
}

.chat-input-row input {
  flex: 1;
  min-height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(140, 172, 255, 0.12);
  background: rgba(110, 133, 160, 0.08);
  color: white;
  padding: 0 14px;
}

.chat-input-row input::placeholder {
  color: #a7c0ea;
}

.leaderboard-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.leader-row {
  display: grid;
  grid-template-columns: 38px 1fr auto;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border: 1px solid rgba(151, 176, 255, 0.1);
  border-radius: 16px;
  background: rgba(136, 164, 255, 0.04);
}

.rank {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(95, 135, 255, 0.12);
  color: #dce9ff;
  font-weight: 700;
}

.leader-score {
  font-weight: 700;
  color: #9dffda;
}

.media-section {
  margin-top: 24px;
}

.video-card {
  display: grid;
  gap: 16px;
  margin-top: 10px;
}

.video-preview {
  min-height: 280px;
  border-radius: 20px;
  background:
    linear-gradient(180deg, rgba(10, 18, 29, 0.4), rgba(10, 18, 29, 0.7)),
    linear-gradient(135deg, rgba(87, 146, 255, 0.9), rgba(44, 214, 182, 0.7));
  position: relative;
  overflow: hidden;
}

.video-preview::before {
  content: '';
  position: absolute;
  inset: 18% 22%;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.play-button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.24);
  display: grid;
  place-items: center;
  font-size: 2rem;
  color: white;
}

.video-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media (max-width: 1100px) {
  .dashboard,
  .lower-grid,
  .hero {
    grid-template-columns: 1fr;
  }

  .feed-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 780px) {
  .topbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  .main-nav {
    order: 3;
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero-copy h1 {
    font-size: 2.7rem;
  }

  .impact-grid {
    grid-template-columns: 1fr;
  }

  .chat-message {
    max-width: 100%;
  }
}
