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
    radial-gradient(circle at top, rgba(74, 111, 255, 0.2), transparent 18%),
    linear-gradient(180deg, #07111d 0%, #0d1d29 100%);
}

button,
input,
textarea,
select {
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 28px 22px 48px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 24px;
  background: rgba(11, 24, 36, 0.72);
  border: 1px solid rgba(138, 180, 255, 0.14);
  border-radius: 22px;
  backdrop-filter: blur(12px);
  position: sticky;
  top: 18px;
  z-index: 15;
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
  font-size: 0.72rem;
  font-weight: 800;
}

.brand-sub {
  color: #9ec4ff;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.main-nav a {
  color: #dfeeff;
  text-decoration: none;
  opacity: 0.8;
  font-size: 0.93rem;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-badge {
  background: rgba(112, 148, 255, 0.12);
  border: 1px solid rgba(152, 175, 255, 0.15);
  color: #dfeeff;
  border-radius: 999px;
  padding: 9px 12px;
  font-size: 0.8rem;
}

.primary-btn,
.ghost-btn {
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 600;
  transition: transform 0.2s ease;
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

.workspace {
  display: grid;
  grid-template-columns: 290px 1fr;
  gap: 22px;
  margin-top: 24px;
}

.panel-card {
  background: rgba(12, 25, 38, 0.86);
  border: 1px solid rgba(138, 180, 255, 0.12);
  border-radius: 24px;
  box-shadow: 0 18px 40px rgba(2, 8, 16, 0.38);
}

.sidebar {
  padding: 18px;
}

.profile-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0 14px;
  border-bottom: 1px solid rgba(145, 176, 255, 0.09);
}

.avatar {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, #7fe7d9, #5d7bff);
  color: #07111d;
  font-weight: 800;
}

.profile-card strong {
  display: block;
  font-size: 0.96rem;
}

.profile-card span {
  color: #afd0ff;
  font-size: 0.74rem;
}

.sidebar-stats {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 18px;
}

.sidebar-stats div {
  background: rgba(140, 170, 255, 0.04);
  border: 1px solid rgba(145, 180, 255, 0.11);
  border-radius: 14px;
  padding: 12px 10px;
}

.sidebar-stats strong {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 6px;
}

.sidebar-stats span {
  color: #c2d8fd;
  font-size: 0.72rem;
}

.mini-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
}

.mini-nav-item,
.tab-button {
  border-radius: 12px;
  text-transform: capitalize;
  background: rgba(128, 157, 255, 0.04);
  color: #eaf4ff;
  border: 1px solid rgba(139, 175, 255, 0.1);
  padding: 12px 14px;
  font-weight: 600;
}

.mini-nav-item.active,
.tab-button.active {
  background: linear-gradient(135deg, rgba(88, 209, 255, 0.18), rgba(93, 123, 255, 0.2));
  border-color: rgba(136, 192, 255, 0.24);
}

.history-block {
  margin-top: 22px;
}

.history-block h4 {
  margin: 0 0 12px;
}

.history-item {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(145, 176, 255, 0.04);
  border: 1px solid rgba(145, 180, 255, 0.09);
  margin-top: 10px;
}

.history-item span {
  color: #c7d7f5;
  font-size: 0.76rem;
}

.history-item strong {
  font-size: 0.82rem;
}

.history-item.warning strong {
  color: #ffcf7c;
}

.history-item.positive strong {
  color: #7ef0c4;
}

.content-area {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.hero-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 26px;
}

.eyebrow {
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(93, 123, 255, 0.12);
  border: 1px solid rgba(120, 147, 255, 0.2);
  color: #a5d8ff;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.hero-strip h1 {
  margin: 0;
  font-size: clamp(2.1rem, 3vw, 3rem);
  letter-spacing: -0.06em;
}

.hero-actions {
  display: flex;
  gap: 12px;
}

.tab-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tab-button {
  min-width: 120px;
}

.section-panel {
  padding: 22px;
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.section-head h3,
.section-head h2,
.form-card h4 {
  margin: 0;
}

.stack,
.issue-layout,
.group-layout,
.create-grid {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.feed-grid,
.bottom-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.bottom-grid {
  grid-template-columns: 1fr 1fr;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: 600;
}

.user-tag {
  background: rgba(105, 142, 255, 0.1);
  color: #dce8ff;
  padding: 6px 9px;
  font-size: 0.7rem;
}

.pill {
  background: rgba(92, 224, 175, 0.13);
  color: #7ef0c4;
  padding: 6px 9px;
  font-size: 0.7rem;
}

.fund-card h4 {
  margin: 16px 0 12px;
  font-size: 1.2rem;
}

.fund-card p {
  margin: 0;
  color: #d3dff8;
  min-height: 72px;
}

.progress-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
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

.mini-amount-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
  color: #d7e5f7;
  font-size: 0.8rem;
}

.support-row {
  display: flex;
  gap: 8px;
  margin-top: 14px;
}

.support-row input {
  flex: 1;
  min-height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(139, 175, 255, 0.12);
  background: rgba(93, 124, 179, 0.08);
  color: white;
  padding: 0 12px;
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
  padding: 6px 9px;
  font-size: 0.7rem;
}

.leaderboard-list,
.issue-list,
.group-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.leaderboard-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 14px;
}

.leader-row {
  display: grid;
  grid-template-columns: 38px 1fr auto;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(136, 164, 255, 0.04);
  border: 1px solid rgba(151, 176, 255, 0.1);
}

.rank {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(95, 135, 255, 0.12);
  color: #dce9ff;
  font-weight: 700;
}

.leader-info strong,
.issue-item strong,
.group-item strong {
  display: block;
  margin-bottom: 4px;
}

.leader-info span,
.issue-item span,
.group-item span,
.video-meta span {
  color: #b9caf1;
  font-size: 0.78rem;
}

.leader-score {
  font-weight: 700;
  color: #9dffda;
}

.video-card {
  display: grid;
  gap: 16px;
  margin-top: 10px;
}

.video-preview {
  min-height: 260px;
  border-radius: 18px;
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
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: grid;
  place-items: center;
  font-size: 2rem;
  color: white;
}

.issue-layout,
.group-layout {
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 18px;
}

.issue-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.issue-item {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(135, 160, 255, 0.04);
  border: 1px solid rgba(145, 180, 255, 0.09);
}

.issue-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.issue-meta em {
  font-style: normal;
  font-size: 0.72rem;
  font-weight: 700;
}

.issue-meta small {
  color: #bfd0f4;
  font-size: 0.72rem;
}

em.high {
  color: #ff9d5c;
}

em.medium {
  color: #7fe7d9;
}

em.low {
  color: #aacbff;
}

.form-card {
  background: rgba(135, 160, 255, 0.04);
  border: 1px solid rgba(145, 180, 255, 0.09);
  border-radius: 18px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-card input,
.form-card textarea,
.form-card select {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(140, 172, 255, 0.12);
  background: rgba(110, 133, 160, 0.08);
  color: white;
  padding: 12px 14px;
}

.form-card textarea {
  min-height: 110px;
  resize: vertical;
}

.group-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.group-item {
  display: grid;
  grid-template-columns: 44px 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(135, 160, 255, 0.04);
  border: 1px solid rgba(145, 180, 255, 0.09);
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

.group-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}

.group-meta small {
  color: #bfd0f4;
  font-size: 0.72rem;
}

.chat-box {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px;
  border-radius: 18px;
  background: rgba(120, 151, 255, 0.04);
  border: 1px solid rgba(133, 164, 255, 0.09);
  min-height: 260px;
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

.chat-message.mine {
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

.action-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.full {
  width: 100%;
}

.auth-screen {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

.auth-card {
  width: min(100%, 460px);
  padding: 30px 24px;
}

.auth-brand {
  justify-content: center;
  margin-bottom: 22px;
}

.auth-card h1 {
  margin: 0;
  text-align: center;
  font-size: 2.1rem;
}

.auth-card p {
  text-align: center;
  color: #d3dff8;
  margin: 12px 0 22px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.auth-form input {
  min-height: 46px;
  border-radius: 12px;
  border: 1px solid rgba(140, 172, 255, 0.12);
  background: rgba(110, 133, 160, 0.08);
  color: white;
  padding: 0 14px;
}

@media (max-width: 1100px) {
  .workspace {
    grid-template-columns: 1fr;
  }

  .feed-grid,
  .bottom-grid,
  .issue-layout,
  .group-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 780px) {
  .topbar,
  .hero-strip {
    flex-direction: column;
    align-items: flex-start;
  }

  .main-nav,
  .top-actions,
  .hero-actions {
    flex-wrap: wrap;
  }

  .chat-message {
    max-width: 100%;
  }
}
