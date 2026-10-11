const communityStats = [
  { label: 'Active Members', value: '18.4K', highlight: '+24%' },
  { label: 'Contributors', value: '9.2K', highlight: '+18%' },
  { label: 'Open Issues', value: '1,246', highlight: '18 urgent' },
  { label: 'Live Groups', value: '312', highlight: '+9 this week' },
]

const feedCards = [
  {
    user: 'Nia Health',
    title: 'School support fundraiser',
    details: 'Helping 120 students with school fees and educational materials.',
    amount: '₦640,000',
    progress: '72%',
    tags: ['Education', 'Students'],
  },
  {
    user: 'City Builders',
    title: 'Community clean-up project',
    details: 'We are raising funds to install bins and clean public spaces.',
    amount: '₦410,000',
    progress: '58%',
    tags: ['Environment', 'Public'],
  },
  {
    user: 'Makafio Hub',
    title: 'Youth skills incubation fund',
    details: 'Startup support and training for emerging founders and creators.',
    amount: '₦1.2M',
    progress: '81%',
    tags: ['Innovation', 'Startups'],
  },
]

const issueList = [
  { title: 'Water access in Block 7', status: 'Needs review', priority: 'High' },
  { title: 'Mobile clinic schedule update', status: 'Ready to vote', priority: 'Medium' },
  { title: 'Youth talent showcase funding', status: 'Approved', priority: 'High' },
  { title: 'Night market security plan', status: 'In discussion', priority: 'Medium' },
]

const groups = [
  { name: 'Women in Action', members: '2.3K', theme: 'Support & advocacy' },
  { name: 'Student Voice Circle', members: '1.7K', theme: 'Education & growth' },
  { name: 'Creative Union', members: '980', theme: 'Arts & media' },
  { name: 'Tech Founders Club', members: '760', theme: 'Innovation & funding' },
]

const leaderboard = [
  { name: 'Mila Green', role: 'Top contributor', score: '8.9K' },
  { name: 'Dapo M.', role: 'Moderator', score: '7.6K' },
  { name: 'Sara K.', role: 'Community lead', score: '6.8K' },
]

const chatMessages = [
  { user: 'Aisha', text: 'I just joined the scholarship drive. Let’s bring more students in.', time: '10:14' },
  { user: 'Kofi', text: 'I contributed ₦25,000 to the local food relief initiative.', time: '10:17' },
  { user: 'Ruth', text: 'The weekend club meeting is set for Saturday at 4 PM.', time: '10:20' },
  { user: 'Dami', text: 'Let’s post the live stream video for the mayoral town hall Q&A.', time: '10:22' },
]

const trendStats = [
  { label: 'All-time growth', value: '42.6%' },
  { label: 'Response rate', value: '94%' },
  { label: 'Community trust', value: '96%' },
]

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">E</div>
          <div>
            <div className="brand-name">ETONO</div>
            <div className="brand-sub">COMMUNITY</div>
          </div>
        </div>

        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#community">Community</a>
          <a href="#groups">Groups</a>
          <a href="#funding">Funding</a>
          <a href="#live">Live</a>
        </nav>

        <div className="top-actions">
          <button className="ghost-btn">Log in</button>
          <button className="primary-btn">Join now</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">Build together • Solve together • Grow together</div>
            <h1>Powering a community that funds dreams, fixes issues, and grows stronger.</h1>
            <p>
              ETONO COMMUNITY brings people together in one trusted digital center where members can join groups,
              raise issues, contribute funds, share videos, and create real impact with transparent progress tracking.
            </p>

            <div className="cta-row">
              <button className="primary-btn large">Create community</button>
              <button className="ghost-btn large">Explore groups</button>
            </div>

            <div className="mini-stats">
              {trendStats.map((item) => (
                <div key={item.label} className="mini-stat-box">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel panel-card">
            <div className="panel-header">
              <span>Community pulse</span>
              <span className="status-pill">Live</span>
            </div>

            <div className="impact-grid">
              {communityStats.map((item) => (
                <div key={item.label} className="stat-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <small>{item.highlight}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dashboard" id="community">
          <div className="panel-card wide">
            <div className="section-head">
              <h2>Community funding</h2>
              <button className="ghost-btn small">View all</button>
            </div>

            <div className="feed-grid">
              {feedCards.map((card) => (
                <article key={card.title} className="fund-card">
                  <div className="fund-topline">
                    <span className="user-tag">{card.user}</span>
                    <span className="pill">{card.progress} funded</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.details}</p>
                  <div className="progress-row">
                    <div className="progress-bar">
                      <span style={{ width: card.progress }} />
                    </div>
                    <strong>{card.amount}</strong>
                  </div>
                  <div className="tag-row">
                    {card.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="side-stack">
            <div className="panel-card">
              <div className="section-head compact">
                <h3>Issue board</h3>
                <span className="linkish">New</span>
              </div>
              <ul className="issue-list">
                {issueList.map((issue) => (
                  <li key={issue.title}>
                    <div>
                      <strong>{issue.title}</strong>
                      <span>{issue.status}</span>
                    </div>
                    <em>{issue.priority}</em>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel-card" id="groups">
              <div className="section-head compact">
                <h3>Community groups</h3>
                <span className="linkish">+ Create</span>
              </div>
              <div className="group-list">
                {groups.map((group) => (
                  <div key={group.name} className="group-item">
                    <div className="group-badge">C</div>
                    <div>
                      <strong>{group.name}</strong>
                      <span>{group.theme}</span>
                    </div>
                    <small>{group.members}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="lower-grid">
          <div className="panel-card chat-panel">
            <div className="section-head compact">
              <h3>Community chat</h3>
              <span className="linkish">WhatsApp style</span>
            </div>

            <div className="chat-box">
              {chatMessages.map((msg) => (
                <div key={`${msg.user}-${msg.time}`} className="chat-message">
                  <span className="chat-user">{msg.user}</span>
                  <p>{msg.text}</p>
                  <time>{msg.time}</time>
                </div>
              ))}
            </div>

            <div className="chat-input-row">
              <input type="text" placeholder="Write a message..." />
              <button className="primary-btn small">Send</button>
            </div>
          </div>

          <div className="panel-card leaderboard-panel">
            <div className="section-head compact">
              <h3>Top contributors</h3>
              <span className="linkish">Leaderboard</span>
            </div>

            <div className="leaderboard-list">
              {leaderboard.map((person, index) => (
                <div key={person.name} className="leader-row">
                  <div className="rank">#{index + 1}</div>
                  <div className="leader-info">
                    <strong>{person.name}</strong>
                    <span>{person.role}</span>
                  </div>
                  <div className="leader-score">{person.score}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="media-section" id="live">
          <div className="panel-card media-panel">
            <div className="section-head compact">
              <h3>Content & live updates</h3>
              <span className="linkish">Video + live</span>
            </div>

            <div className="video-card">
              <div className="video-preview">
                <div className="play-button">▶</div>
              </div>
              <div className="video-meta">
                <strong>Community town hall live</strong>
                <span>12.4K views • 842 comments • 2.9K likes</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
