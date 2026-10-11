import { useState } from 'react'

type Message = {
  id: number
  user: string
  text: string
  time: string
  mine?: boolean
}

type Post = {
  id: number
  author: string
  title: string
  description: string
  target: string
  raised: string
  progress: number
  tags: string[]
}

type Issue = {
  id: number
  title: string
  category: string
  status: string
  priority: 'High' | 'Medium' | 'Low'
}

type Group = {
  id: number
  name: string
  focus: string
  members: number
  status: string
}

const initialMessages: Message[] = [
  { id: 1, user: 'Aisha', text: 'I just joined the scholarship drive. Let’s bring more students in.', time: '10:14' },
  { id: 2, user: 'Kofi', text: 'I contributed ₦25,000 to the local food relief initiative.', time: '10:17', mine: true },
  { id: 3, user: 'Ruth', text: 'The weekend club meeting is set for Saturday at 4 PM.', time: '10:20' },
  { id: 4, user: 'Dami', text: 'Let’s post the live stream video for the mayoral town hall Q&A.', time: '10:22' },
]

const initialPosts: Post[] = [
  {
    id: 1,
    author: 'Nia Health',
    title: 'School support fundraiser',
    description: 'Helping 120 students with school fees and educational materials.',
    target: '₦640,000',
    raised: '₦460,000',
    progress: 72,
    tags: ['Education', 'Students'],
  },
  {
    id: 2,
    author: 'City Builders',
    title: 'Community clean-up project',
    description: 'We are raising funds to install bins and clean public spaces in the district.',
    target: '₦410,000',
    raised: '₦238,000',
    progress: 58,
    tags: ['Environment', 'Public'],
  },
  {
    id: 3,
    author: 'Makafio Hub',
    title: 'Youth skills incubation fund',
    description: 'Startup support and training for emerging founders and creators.',
    target: '₦1.2M',
    raised: '₦970,000',
    progress: 81,
    tags: ['Innovation', 'Startups'],
  },
]

const initialIssues: Issue[] = [
  { id: 1, title: 'Water access in Block 7', category: 'Infrastructure', status: 'Needs review', priority: 'High' },
  { id: 2, title: 'Mobile clinic schedule update', category: 'Health', status: 'Ready to vote', priority: 'Medium' },
  { id: 3, title: 'Youth talent showcase funding', category: 'Culture', status: 'Approved', priority: 'High' },
  { id: 4, title: 'Night market security plan', category: 'Public safety', status: 'In discussion', priority: 'Medium' },
]

const initialGroups: Group[] = [
  { id: 1, name: 'Women in Action', focus: 'Support & advocacy', members: 2350, status: 'Active' },
  { id: 2, name: 'Student Voice Circle', focus: 'Education & growth', members: 1700, status: 'Rising' },
  { id: 3, name: 'Creative Union', focus: 'Arts & media', members: 980, status: 'Growing' },
  { id: 4, name: 'Tech Founders Club', focus: 'Innovation & funding', members: 760, status: 'Active' },
]

const leaderboard = [
  { name: 'Mila Green', role: 'Top contributor', score: '8.9K' },
  { name: 'Dapo M.', role: 'Moderator', score: '7.6K' },
  { name: 'Sara K.', role: 'Community lead', score: '6.8K' },
]

const historyItems = [
  { label: 'This week', value: '184 new members', tone: 'positive' },
  { label: 'Funded', value: '₦3.6M raised', tone: 'positive' },
  { label: 'Discussions', value: '42 ideas in voting', tone: 'neutral' },
  { label: 'Attention', value: '4 urgent issues', tone: 'warning' },
]

const tabs = ['feed', 'issues', 'groups', 'chat', 'create'] as const

type Tab = (typeof tabs)[number]

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('feed')
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [chatInput, setChatInput] = useState('')
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [issues, setIssues] = useState<Issue[]>(initialIssues)
  const [groups, setGroups] = useState<Group[]>(initialGroups)

  const [newIssue, setNewIssue] = useState({ title: '', category: 'Infrastructure' })
  const [newGroup, setNewGroup] = useState({ name: '', focus: 'Education' })
  const [newPost, setNewPost] = useState({ title: '', target: '₦250,000', description: '' })

  const totalMembers = groups.reduce((sum, group) => sum + group.members, 0)

  const handleSendMessage = () => {
    const text = chatInput.trim()
    if (!text) return

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        user: 'You',
        text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mine: true,
      },
    ])
    setChatInput('')
  }

  const handleCreateIssue = () => {
    const title = newIssue.title.trim()
    if (!title) return

    setIssues((current) => [
      {
        id: Date.now(),
        title,
        category: newIssue.category,
        status: 'New',
        priority: 'Medium',
      },
      ...current,
    ])
    setNewIssue({ title: '', category: 'Infrastructure' })
    setActiveTab('issues')
  }

  const handleCreateGroup = () => {
    const name = newGroup.name.trim()
    if (!name) return

    setGroups((current) => [
      {
        id: Date.now(),
        name,
        focus: newGroup.focus,
        members: 120,
        status: 'New',
      },
      ...current,
    ])
    setNewGroup({ name: '', focus: 'Education' })
    setActiveTab('groups')
  }

  const handleCreatePost = () => {
    const title = newPost.title.trim()
    const description = newPost.description.trim()
    if (!title || !description) return

    setPosts((current) => [
      {
        id: Date.now(),
        author: 'You',
        title,
        description,
        target: newPost.target,
        raised: '₦0',
        progress: 0,
        tags: ['New', 'Community'],
      },
      ...current,
    ])

    setNewPost({ title: '', target: '₦250,000', description: '' })
    setActiveTab('feed')
  }

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
          <a href="#feed">Feed</a>
          <a href="#issues">Issues</a>
          <a href="#groups">Groups</a>
          <a href="#chat">Chat</a>
          <a href="#live">Live</a>
        </nav>

        <div className="top-actions">
          <button className="ghost-btn">Log in</button>
          <button className="primary-btn">Join now</button>
        </div>
      </header>

      <main className="workspace">
        <aside className="sidebar panel-card">
          <div className="profile-card">
            <div className="avatar">Z</div>
            <div>
              <strong>Zeddy Community</strong>
              <span>Verified member</span>
            </div>
          </div>

          <div className="sidebar-stats">
            <div>
              <strong>18.4K</strong>
              <span>Members</span>
            </div>
            <div>
              <strong>9.2K</strong>
              <span>Contributors</span>
            </div>
            <div>
              <strong>{totalMembers.toLocaleString()}</strong>
              <span>Group members</span>
            </div>
          </div>

          <div className="mini-nav">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? 'mini-nav-item active' : 'mini-nav-item'}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="history-block">
            <h4>Community history</h4>
            {historyItems.map((item) => (
              <div key={item.label} className={`history-item ${item.tone}`}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </aside>

        <section className="content-area">
          <div className="hero-strip panel-card">
            <div>
              <div className="eyebrow">Community center</div>
              <h1>ETONO COMMUNITY</h1>
            </div>
            <div className="hero-actions">
              <button className="primary-btn">Create group</button>
              <button className="ghost-btn">Go live</button>
            </div>
          </div>

          <div className="tab-bar">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? 'tab-button active' : 'tab-button'}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'feed' && 'Feed'}
                {tab === 'issues' && 'Issues'}
                {tab === 'groups' && 'Groups'}
                {tab === 'chat' && 'Chat'}
                {tab === 'create' && 'Create'}
              </button>
            ))}
          </div>

          {activeTab === 'feed' && (
            <div className="stack">
              <div className="panel-card section-panel">
                <div className="section-head">
                  <h3>Community funding</h3>
                  <button className="ghost-btn small">View all</button>
                </div>

                <div className="feed-grid">
                  {posts.map((post) => (
                    <article key={post.id} className="fund-card">
                      <div className="fund-topline">
                        <span className="user-tag">{post.author}</span>
                        <span className="pill">{post.progress}% funded</span>
                      </div>

                      <h4>{post.title}</h4>
                      <p>{post.description}</p>

                      <div className="progress-row">
                        <div className="progress-bar">
                          <span style={{ width: `${post.progress}%` }} />
                        </div>
                        <strong>{post.target}</strong>
                      </div>

                      <div className="mini-amount-row">
                        <span>Raised: {post.raised}</span>
                        <button className="primary-btn small">Support</button>
                      </div>

                      <div className="tag-row">
                        {post.tags.map((tag) => (
                          <span key={`${post.id}-${tag}`} className="tag">{tag}</span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="bottom-grid">
                <div className="panel-card section-panel">
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

                <div className="panel-card section-panel">
                  <div className="section-head compact">
                    <h3>Live media</h3>
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
              </div>
            </div>
          )}

          {activeTab === 'issues' && (
            <div className="panel-card section-panel">
              <div className="section-head">
                <h3>Issue board</h3>
                <button className="ghost-btn small">Request review</button>
              </div>

              <div className="issue-layout">
                <ul className="issue-list">
                  {issues.map((issue) => (
                    <li key={issue.id} className="issue-item">
                      <div>
                        <strong>{issue.title}</strong>
                        <span>{issue.category}</span>
                      </div>
                      <div className="issue-meta">
                        <em className={issue.priority.toLowerCase()}>{issue.priority}</em>
                        <small>{issue.status}</small>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="form-card">
                  <h4>Raise a new issue</h4>
                  <input
                    value={newIssue.title}
                    onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })}
                    placeholder="Issue title"
                  />
                  <select
                    value={newIssue.category}
                    onChange={(e) => setNewIssue({ ...newIssue, category: e.target.value })}
                  >
                    <option>Infrastructure</option>
                    <option>Education</option>
                    <option>Health</option>
                    <option>Public safety</option>
                    <option>Culture</option>
                  </select>
                  <button className="primary-btn" onClick={handleCreateIssue}>Submit issue</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'groups' && (
            <div className="panel-card section-panel">
              <div className="section-head">
                <h3>Community groups</h3>
                <button className="ghost-btn small">Create club</button>
              </div>

              <div className="group-layout">
                <div className="group-list">
                  {groups.map((group) => (
                    <div key={group.id} className="group-item">
                      <div className="group-badge">C</div>
                      <div>
                        <strong>{group.name}</strong>
                        <span>{group.focus}</span>
                      </div>
                      <div className="group-meta">
                        <small>{group.status}</small>
                        <strong>{group.members.toLocaleString()}</strong>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="form-card">
                  <h4>Create a group</h4>
                  <input
                    value={newGroup.name}
                    onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
                    placeholder="Group name"
                  />
                  <select
                    value={newGroup.focus}
                    onChange={(e) => setNewGroup({ ...newGroup, focus: e.target.value })}
                  >
                    <option>Education</option>
                    <option>Health</option>
                    <option>Arts</option>
                    <option>Technology</option>
                    <option>Community</option>
                  </select>
                  <button className="primary-btn" onClick={handleCreateGroup}>Create group</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'chat' && (
            <div className="panel-card section-panel">
              <div className="section-head">
                <h3>Community chat</h3>
                <span className="linkish">WhatsApp-style</span>
              </div>

              <div className="chat-box">
                {messages.map((message) => (
                  <div key={message.id} className={message.mine ? 'chat-message mine' : 'chat-message'}>
                    <span className="chat-user">{message.user}</span>
                    <p>{message.text}</p>
                    <time>{message.time}</time>
                  </div>
                ))}
              </div>

              <div className="chat-input-row">
                <input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSendMessage()
                  }}
                  placeholder="Write a message..."
                />
                <button className="primary-btn small" onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          )}

          {activeTab === 'create' && (
            <div className="panel-card section-panel">
              <div className="section-head">
                <h3>Create a new campaign</h3>
                <button className="ghost-btn small">Save draft</button>
              </div>

              <div className="create-grid">
                <div className="form-card">
                  <h4>Funding campaign</h4>
                  <input
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    placeholder="Campaign title"
                  />
                  <input
                    value={newPost.target}
                    onChange={(e) => setNewPost({ ...newPost, target: e.target.value })}
                    placeholder="Target amount"
                  />
                  <textarea
                    value={newPost.description}
                    onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                    placeholder="Describe the cause or project"
                  />
                  <button className="primary-btn" onClick={handleCreatePost}>Publish campaign</button>
                </div>

                <div className="form-card">
                  <h4>Quick actions</h4>
                  <div className="action-list">
                    <button className="ghost-btn full">Create association</button>
                    <button className="ghost-btn full">Start club party</button>
                    <button className="ghost-btn full">Invite contributors</button>
                    <button className="ghost-btn full">Share live video</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
