const fs = require('fs');
const path = './src/app.supabase.js';
let content = fs.readFileSync(path, 'utf8');

// 1. Insert CSS
const cssToInsert = `
          .rank-modal-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(8px);
            z-index: 9999;
            display: none;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
          }
          .rank-modal-overlay.active {
            opacity: 1;
            pointer-events: auto;
          }
          .rank-modal-box {
            background: linear-gradient(145deg, #1e1e1e, #141414);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            width: 90%;
            max-width: 500px;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            transform: translateY(20px);
            transition: transform 0.3s ease;
            position: relative;
            padding: 24px;
            color: #fff;
            text-align: left;
          }
          .rank-modal-overlay.active .rank-modal-box {
            transform: translateY(0);
          }
          .rank-modal-close {
            position: absolute;
            top: 16px; right: 16px;
            background: rgba(255,255,255,0.1);
            border: none;
            color: #fff;
            width: 32px; height: 32px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            transition: background 0.2s;
          }
          .rank-modal-close:hover {
            background: rgba(255,255,255,0.2);
          }
          .rank-modal-title {
            margin: 0 0 16px 0;
            font-size: 1.5rem;
            color: #d20a0a;
            font-weight: 800;
          }
`;
if (!content.includes('.rank-modal-overlay')) {
  const styleCloseIdx = content.lastIndexOf('</style>');
  content = content.substring(0, styleCloseIdx) + cssToInsert + content.substring(styleCloseIdx);
}

// 2. Insert JS logic globally (attach to window)
const jsToInsert = `
window.closeRankingsModal = function() {
  const modal = document.getElementById('rank-modal-overlay');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
  }
}

window.openRankingsModal = function(type, champStr) {
  let modal = document.getElementById('rank-modal-overlay');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'rank-modal-overlay';
    modal.className = 'rank-modal-overlay';
    modal.onclick = (e) => { if (e.target === modal) window.closeRankingsModal(); };
    modal.innerHTML = \`
      <div class="rank-modal-box">
        <button class="rank-modal-close" onclick="closeRankingsModal()">×</button>
        <h2 class="rank-modal-title" id="rank-modal-title"></h2>
        <div class="rank-modal-body" id="rank-modal-body"></div>
      </div>
    \`;
    document.body.appendChild(modal);
  }

  const titleEl = document.getElementById('rank-modal-title');
  const bodyEl = document.getElementById('rank-modal-body');

  if (type === 'how') {
    titleEl.textContent = 'How Meta Rankings Work';
    bodyEl.innerHTML = \`
      <p style="color:#aaa; line-height:1.6; margin-bottom:12px;">As of June 20, 2026, the UFC transitioned from the historical media voting panel to the proprietary <strong>Meta UFC Rankings Algorithm</strong>.</p>
      <p style="color:#aaa; line-height:1.6; margin-bottom:12px;">This system relies on real-time data inputs including:</p>
      <ul style="color:#aaa; line-height:1.6; padding-left:20px;">
        <li style="margin-bottom:6px">Strength of schedule and opponent rank at time of fight</li>
        <li style="margin-bottom:6px">Method and decisiveness of victory</li>
        <li style="margin-bottom:6px">Activity level and recency of bouts</li>
      </ul>
      <p style="color:#aaa; line-height:1.6;">Changes are updated dynamically following any UFC event.</p>
    \`;
  } else if (type === 'news') {
    titleEl.textContent = 'Latest Rankings News';
    bodyEl.innerHTML = \`
      <div style="margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">
        <h4 style="margin:0 0 8px 0; color:#fff;">UFC Implements fully Algorithmic "Meta" Rankings</h4>
        <p style="margin:0; font-size:0.9rem; color:#888;">June 20, 2026 - The long-awaited transition replaces the traditional media panel with an AI-driven, data-heavy algorithm that adjusts instantly post-fight.</p>
      </div>
      <div style="margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">
        <h4 style="margin:0 0 8px 0; color:#fff;">Pound-for-Pound Shakeup After Massive Weekend</h4>
        <p style="margin:0; font-size:0.9rem; color:#888;">June 14, 2026 - With Justin Gaethje and Ciryl Gane securing major finishes, the P4P board sees a dramatic mathematical shift.</p>
      </div>
      <div style="margin-bottom: 0;">
        <h4 style="margin:0 0 8px 0; color:#fff;">New System Penalizes Inactivity</h4>
        <p style="margin:0; font-size:0.9rem; color:#888;">The Meta system enforces a strict penalty curve for fighters inactive over 12 months, radically shaking up the top 10s of several stagnant divisions.</p>
      </div>
    \`;
  } else if (type === 'profile') {
    try {
      const champ = JSON.parse(decodeURIComponent(champStr));
      titleEl.textContent = champ.name + ' Profile';
      bodyEl.innerHTML = \`
        <div style="display:flex; align-items:center; gap:16px; margin-bottom:20px;">
          <div style="width:80px; height:80px; border-radius:50%; background:#333; display:flex; align-items:center; justify-content:center; font-size:2rem;">
            \${champ.country === 'USA' ? '🇺🇸' : champ.country === 'BRA' ? '🇧🇷' : champ.country === 'ENG' ? '🏴󠁧󠁢󠁥󠁮󠁧󠁿' : champ.country === 'RUS' ? '🇷🇺' : '🥊'}
          </div>
          <div>
            <h3 style="margin:0; font-size:1.4rem;">\${champ.division}</h3>
            <span style="color:#d20a0a; font-weight:bold;">Record: \${champ.record}</span>
          </div>
        </div>
        <div style="background:rgba(255,255,255,0.05); padding:16px; border-radius:8px; display:grid; grid-template-columns:1fr 1fr; gap:12px;">
          <div><strong style="color:#888; font-size:0.8rem; display:block;">KO WINS</strong><span style="font-size:1.2rem;">\${champ.koWins || 0}</span></div>
          <div><strong style="color:#888; font-size:0.8rem; display:block;">SUB WINS</strong><span style="font-size:1.2rem;">\${champ.subWins || 0}</span></div>
          <div><strong style="color:#888; font-size:0.8rem; display:block;">DEC WINS</strong><span style="font-size:1.2rem;">\${champ.decWins || 0}</span></div>
          <div><strong style="color:#888; font-size:0.8rem; display:block;">LAST FIGHT</strong><span style="font-size:1.2rem;">\${champ.lastFightDate || 'TBD'}</span></div>
        </div>
        <div style="margin-top:20px; border-top: 1px solid rgba(255,255,255,0.1); padding-top:16px;">
          <h4 style="margin:0 0 8px 0; color:#aaa;">Next Scheduled Fight</h4>
          <div style="font-size:1.1rem;">vs. <strong style="color:#fff;">\${champ.nextFightOpponent}</strong> at \${champ.nextFightEvent} (\${champ.nextFightDate})</div>
        </div>
      \`;
    } catch(e) {
      titleEl.textContent = "Fighter Profile";
      bodyEl.innerHTML = "<p>Could not load fighter data.</p>";
    }
  }

  modal.style.display = 'flex';
  // Force reflow
  void modal.offsetWidth;
  modal.classList.add('active');
}
`;

if (!content.includes('window.openRankingsModal')) {
  // Insert right before window.renderRankings = function() {
  const renderIdx = content.indexOf('window.renderRankings = function');
  content = content.substring(0, renderIdx) + jsToInsert + '\n' + content.substring(renderIdx);
}

// 3. Patch Buttons

// Button 1: How Rankings Work
const oldBtn1 = '<button style="background:none; border:1px solid rgba(255,255,255,0.2); color:#ccc; padding:6px 12px; border-radius:6px; cursor:pointer;">How Rankings Work ⓘ</button>';
const newBtn1 = `<button style="background:none; border:1px solid rgba(255,255,255,0.2); color:#ccc; padding:6px 12px; border-radius:6px; cursor:pointer;" onclick="openRankingsModal('how')">How Rankings Work ⓘ</button>`;
content = content.replace(oldBtn1, newBtn1);

// Button 2: View Fighter Profile
const oldBtn2 = '<button class="rank-view-full-btn" style="background:transparent; font-size: 0.9rem; margin-top: 24px;">View Fighter Profile →</button>';
const newBtn2 = `<button class="rank-view-full-btn" style="background:transparent; font-size: 0.9rem; margin-top: 24px;" onclick="openRankingsModal('profile', '\${encodeURIComponent(JSON.stringify(champ))}')">View Fighter Profile →</button>`;
content = content.replace(oldBtn2, newBtn2);

// Button 3: View All News
const oldBtn3 = '<button class="rank-view-full-btn" style="background:transparent; font-size: 0.9rem;">View All News →</button>';
const newBtn3 = `<button class="rank-view-full-btn" style="background:transparent; font-size: 0.9rem;" onclick="openRankingsModal('news')">View All News →</button>`;
content = content.replace(oldBtn3, newBtn3);

fs.writeFileSync(path, content, 'utf8');
console.log("Patched Modals Successfully!");
