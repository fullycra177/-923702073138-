let countdown = 30*30;
const timerEl = document.getElementById("timer");
const loadingEl = document.getElementById("loading");
const infoEl = document.getElementById("info");

function updateTimer(){
  const mins = String(Math.floor(countdown/30)).padStart(2,'0');
  const secs = String(countdown%30).padStart(2,'0');
  timerEl.textContent = `Loading: ${mins}:${secs}`;
  if(countdown<=0){ clearInterval(timer); endHack(); }
  countdown--;
}

function endHack(){
  loadingEl.style.display = "none";
  infoEl.style.display = "block";
  infoEl.innerHTML = `
    <h2>📱 Device Details</h2><ul>
      <li>Device: Vivo Y20</li>
      <li>IMEI: 865413027411235</li>
      <li>Android: 10 (Q)</li>
      <li>Battery: Charging (87%)</li>
      <li>Last Reboot: 3 hrs ago</li>
    </ul>

    <h2>🧑 Owner Info</h2><ul>
      <li>Name: ADNAN KHAN</li>
      <li>CNIC: 37405‑6547655‑9</li>
      <li>Gender: Male</li>
      <li>Email: tiktok72728@gmail.com</li>
      <li>Age: 45</li>
    </ul>

    <h2>📍 Location History</h2><ul>
      <li>Home: Haroon Chowk, Rawalpindi</li>
      <li>Last: Saddar Market</li>
      <li>Work: Dubai Plaza, Murree Road</li>
    </ul>

    <h2>📱 SIM Info</h2><ul>
      <li>Network: Zong 4G</li>
      <li>SIM Serial: 8992 0100 3441 2345</li>
      <li>Phone #: +92 370 2073138</li>
    </ul>

    <h2>💾 Storage Info</h2><ul>
      <li>Total: 64 GB</li>
      <li>Used: 48.3 GB</li>
      <li>Free: 15.7 GB</li>
      <li>Photos: 367</li>
      <li>Videos: 42</li>
      <li>Contacts: 129</li>
    </ul>

    <h2>⚠️ Security Warnings</h2><ul>
      <li>Unauthorized Access Detected</li>
      <li>Gallery Encryption Cracked</li>
      <li>Live Location Streaming Active</li>
    </ul>

    <h2>📲 Recent Activity</h2><ul>
      <li>Last App: TikTok</li>
      <li>Active Apps: WhatsApp, Facebook, YouTube</li>
      <li>Last Call: Raja G (5 mins ago)</li>
      <li>Wi‑Fi: PTCL_1234 (Connected)</li>
      <li>Screenshot Taken: Today 12:30 PM</li>
    </ul>

    <h2>📦 Installed Apps</h2><ul>
      <li>TikTok</li>
      <li>Snapchat (Recently Active)</li>
      <li>Bigo Live (Hidden)</li>
      <li>Tinder (Matched with Zara R.)</li>
      <li>Parallel Space</li>
    </ul>

    <h2>🔍 Search History</h2><ul>
      <li>How to recover deleted messages</li>
      <li>Girls WhatsApp number real 2025</li>
      <li>Unlock pattern bypass</li>
    </ul>

    <h2>🔐 Keylogger Logs</h2><ul>
      <li>loveuayesha123</li>
      <li>ayesha@2025</li>
      <li>Raja G ke sath plan confirm hai Friday ko</li>
    </ul>

    <h2>🔊 WhatsApp Messages</h2><ul>
      <li>آیان کے بھای کا نمبر دو</li>
      <li>آیان کی ماں کا نمبر نکالو</li>
      <li>اگلا پل</li>
      <li>ابھی میں باھر ھوں بھای</li>
      <li>اب ان دونو کو پتا ڄلے گا</li>
      <li>راجا ھارس اور آیان کی سکس</li>
    </ul>

    <h2>📞 Call Logs</h2><ul>
      <li>Mom – 01:21 AM (Outgoing)</li>
      <li>Zara – 11:17 PM (Missed)</li>
      <li>Unknown (3 blocked calls)</li>
    </ul>

    <h2>💬 SMS Preview</h2><ul>
      <li>Zong: Apka balance Rs. 0.98</li>
      <li>JazzCash: Rs. 3,500 sent to zeeshan R.</li>
      <li>zeeshan: “wapis aao...”</li>
    </ul>

    <h2>📸 Gallery Preview (blurred)</h2><ul>
      <li>Girl selfie – 11:32 PM</li>
      <li>PTCL bill screenshot – 2:14 AM</li>
      <li>Chat screenshot – “Don’t tell anyone!”</li>
    </ul>

    <h2>🧭 GPS Coordinates</h2><ul>
      <li>33.6844° N, 73.0479° E (±12 m)</li>
      <li>Speed: 0.3 km/h</li>
    </ul>

    <h2>📶 Connected Devices</h2><ul>
      <li>Mi Band 5</li>
      <li>Toyota Corolla Audio</li>
      <li>Nearby iPhone 14 Pro Max</li>
    </ul>

    <h2>🔒 Premium Features</h2>
    <button onclick="alert('Premium access required: Rs. 5000')">WhatsApp Chat Access</button>
    <button onclick="alert('Premium access required: Rs. 5000')">Decrypt Messages</button>
    <button onclick="alert('Premium access required: Rs. 5000')">Unlock Gallery</button>
    <button onclick="alert('Premium access required: Rs. 5000')">Track Live Location</button>
  `;
}

const timer = setInterval(updateTimer,1000);
