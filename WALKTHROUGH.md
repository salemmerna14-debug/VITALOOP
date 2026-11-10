# VITAIOOP – Live Demo Walkthrough Script (for Judges & Reviewers)

> **Platform:** VITAIOOP – Astronaut Health & Wellbeing  
> **Tagline:** *"Beyond Health Monitoring, Toward Complete Astronaut Wellbeing."*  
> **Mission Context:** Mission Artemis III (Demo)  
> **URL:** `http://localhost:3000`  
> **Languages:** English & العربية (Click the **Language Switcher** in the top bar to toggle RTL Arabic).

---

## ⏱️ Recommended 3-Minute Live Showcase Flow

### Step 1: The Landing Page (`/`)
- Point out the headline: *"Because even in space... health matters"* and the mission badge: `Connected – Mission Artemis III (Demo)`.
- Notice the cute floating **Astronaut-Robot Mascot** greeting you.
- Click **"Launch Mission Dashboard"** or go to **Login**.

### Step 2: Login & 1-Click Role Switcher (`/login`)
- Show the split layout featuring astronaut artwork with *"Your health is our mission"*.
- Highlight the **1-Click Demo Accounts**:
  - `Dr. Sara Ahmed` (Astronaut / Mission Specialist)
  - `Dr. Marcus Vance` (Lead Flight Surgeon / Medical Team)
  - `Director Wei Chen` (Flight Operations Director / Mission Control)
- Click **Dr. Sara Ahmed** to log in instantly.

### Step 3: Astronaut Overview & 3D Hologram (`/overview`)
- **Top Bar:** Point out the live ticking UTC clock, greeting, role indicator, and the **Voice Assistant** button (Web Speech API speaks live vitals aloud).
- **Language Switcher:** Click `العربية` in the top bar to showcase the full Arabic translation and right-to-left (RTL) layout. Click back to `English` whenever desired.
- **3D Glowing Hologram Body:** Observe the animated wireframe body with rotating orbital rings and pulsing cardiac core hotspot.
- **Live Vitals Cards:** Heart Rate (64 BPM), SpO2 (98.2%), Skin Temperature (36.6°C), Stress Index (28/100).
- **Gamified Goals:** 14-day orbit streak, hydration progress bar (2.1L / 2.5L), zero-g sleep badge.
- **Emergency SOS:** Click "Send SOS Alert" on the Emergency card to see the confirmation safety dialog and broadcast transmission.

### Step 4: Non-Invasive Camera Optical Scan (`/camera-scan`)
- Click **"Camera Scan (rPPG)"** in the left sidebar.
- Read the strict medical honesty statement: *Camera measures optical pulse & respiration estimates only. Zero face video frames are stored or transmitted. Blood pressure & SpO2 are never derived from camera.*
- Click **"Initialize Camera"** and **"Start 15s Optical Scan"** to watch the real-time pulsatile green waveform graph and SNR quality validation.

### Step 5: Anomaly Injection & AI Intelligence (`/devices` & `/ai-intel`)
- Go to **Device & Simulator** (`/devices`) or use the top banner on Overview.
- Under **Interactive Anomaly Injection Sandbox**, click **+Tachycardia** (forces HR > 120 BPM).
- Notice the red warning badge appear in the top bar.
- Open **Alerts Center** (`/alerts`): See the auto-triaged High Priority alert created by our EWMA engine, and log a flight surgeon triage note.
- Open **AI Intelligence** (`/ai-intel`): Inspect the change-point onset time, Z-score deviation (+3.42σ), and predictive trend with 95% confidence bounds.
- Click **Reset / Clear Anomaly** to normalize telemetry.

### Step 6: Mental Wellbeing & Guided Breathing (`/wellbeing`)
- Open **Mental Wellbeing**: Start the animated **Zero-G Box Breathing tool** (4s Inhale, 4s Hold, 4s Exhale, 4s Rest).
- Showcase the **Confidential Wellbeing Check-In** form (mood, perceived stress, cabin comfort, personal reflection).

### Step 7: Earth Connection & Family Audio (`/social`)
- Open **Social Connection**: Play the audio memo letter from Cairo: *"Dearest Sara, the Moon looks so bright from Cairo tonight..."*
- View the scheduled Deep Space Network video passes calendar and inter-crew intercom chat.

### Step 8: Biomedical PDF Export (`/reports`)
- Open **Reports & PDF**: Select **Weekly Crew Synthesis**.
- Click **"Export Official PDF Report"**: A multi-page clinical dossier with data tables, personal baseline comparisons, environmental conditions, and flight surgeon signature is downloaded to your device.

### Step 9: Judges Dossier & Technical Defense (`/about-judges`)
- Click **About / Judges Mode**:
  - View the **Feature Status Matrix** (Implemented vs Simulated vs Planned).
  - Review the **22 Detailed Technical Blueprint Sections**.
  - Review the **2-Minute Live Presentation Script**.
  - Review the **Judges' Q&A and Technical Defense**.

