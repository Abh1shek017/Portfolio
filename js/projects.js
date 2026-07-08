/* ============================================================
   PORTFOLIO — Project Data (projects.js)
   All 7 project objects used by detail pages
   ============================================================ */

const PROJECTS = {
  medtrack: {
    id: 'medtrack',
    emoji: '💊',
    name: 'MedTrack',
    tagline: 'A back-office pharmacy management app for procurement, stock, and credit tracking',
    status: 'Completed',
    role: 'Solo Developer',
    platform: 'Android + Python Backend',
    description: 'MedTrack is a personal back-office system for independent pharmacy owners to manage everything behind the counter — the business relationship with distributors, stock/inventory management with batch & expiry tracking, B2B wholesale sales to clinics/shops, individual customer credit (Udhaar) tracking, expense management, smart distributor recommendations, and comprehensive reporting with PDF export. Features offline-first architecture with Drift/SQLite and a Python/FastAPI backend with PostgreSQL.',
    techStack: ['Flutter', 'Dart', 'Riverpod', 'Drift (SQLite)', 'Go Router', 'Freezed', 'Barcode Scanner', 'PDF Generation', 'Google Fonts', 'Python', 'FastAPI', 'PostgreSQL', 'Alembic', 'Docker', 'Firebase Admin SDK'],
    features: [
      'Product & Batch Management with MRP, expiry, and purchase rate tracking',
      'Supplier/Distributor Management with contacts and outstanding balance',
      'Bill Logging with auto-increment stock on receiving',
      'Payment Tracking (cash/UPI/cheque) with auto outstanding balance update',
      'B2B Shop & Clinic Module with wholesale sales and auto stock deduction',
      'Udhaar (Individual Credit) Tracker for local retail customers',
      'Expense Tracking with categories, payment methods, and analytics',
      'Smart Distributor Suggestions with AI scoring per product',
      'Draft Orders & Sourcing with WhatsApp dispatch',
      '11+ Reports including expiry alerts, low stock, outstanding, and payment history',
      'Global Search with FTS5 across all entities and grouped results',
      'Advanced Security with 2FA, biometric lock, session management, and login history',
      'PDF Generator for bills, invoices, and account statements'
    ],
    screens: [
      { name: 'Home Dashboard', desc: 'Total outstanding balance, expiry alerts, low stock alerts, quick actions, expandable global search' },
      { name: 'Products Screen', desc: 'Full medicine list with stock levels, batch details (batch no., expiry, MRP, purchase rate)' },
      { name: 'Suppliers Screen', desc: 'Distributor list with outstanding balance, bill/payment history, smart score' },
      { name: 'Bills Screen', desc: 'All distributor bills received, filterable by distributor and date range' },
      { name: 'Payments Screen', desc: 'All payments made to distributors with running outstanding balance' },
      { name: 'Udhaar Screen', desc: 'Individual customer credit ledger with balance tracking and collection marking' },
      { name: 'B2B Shops & Clinics', desc: 'Registered shops/clinics with wholesale invoicing, auto stock deduction, payment tracking' },
      { name: 'Reports Screen', desc: '11+ reports with filters, date pickers, and PDF export' },
      { name: 'Draft Orders & Sourcing', desc: 'Smart distributor suggestions, order dispatch via WhatsApp' },
      { name: 'Expense Management', desc: 'Log business expenses with categories and analytics' },
      { name: 'Security Settings', desc: '2FA, biometric lock, active sessions, login history' },
      { name: 'PDF Tools', desc: 'Generate and preview formatted PDF documents' }
    ],
    architecture: `
  ┌──────────────────────────────────────────────────────┐
  │                   Flutter Mobile App                  │
  │  ┌─────────┐  ┌──────────┐  ┌──────────────────────┐ │
  │  │ Screens │──│ Providers│──│ Drift (SQLite) Local │ │
  │  │  (UI)   │  │(Riverpod)│  │     Database         │ │
  │  └─────────┘  └──────────┘  └──────────┬───────────┘ │
  └────────────────────────────────────────┼─────────────┘
                                           │ Sync
                                           ▼
              ┌────────────────────────────────────────┐
              │          Python / FastAPI Backend       │
              │  ┌──────────┐  ┌──────────────────────┐│
              │  │  Routes  │──│  PostgreSQL Database  ││
              │  │  (REST)  │  │  (Alembic Migrations) ││
              │  └──────────┘  └──────────────────────┘│
              │  ┌──────────────────────────────────┐  │
              │  │  Firebase Admin SDK (Auth/Push)  │  │
              │  └──────────────────────────────────┘  │
              └────────────────────────────────────────┘`
  },

  agrisense: {
    id: 'agrisense',
    emoji: '🌾',
    name: 'AgriSense AI',
    tagline: 'An IoT-powered smart crop recommendation system using machine learning pipelines',
    status: 'Completed',
    role: 'Team Member (4-person team)',
    platform: 'Flutter Mobile + React Web + IoT Hardware',
    description: 'AgriSense AI is an end-to-end IoT-powered smart crop recommendation and farm management system. It bridges precision agriculture with practical farming by combining real-time sensor data (NPK, pH, moisture, temperature) from a simulated ESP32, external APIs (NASA POWER, Open-Meteo, SoilGrids), and an ensemble ML engine (Random Forest + SVM + MLP) to deliver accurate crop recommendations. Features a React web dashboard with GPS field mapping, crop rotation planning, and irrigation scheduling, plus a Flutter mobile app with offline support. Academic project at IIIT Nagpur.',
    techStack: ['Flutter', 'Dart', 'Riverpod', 'Hive', 'Firebase FCM', 'Dio', 'Geolocator', 'Lottie', 'React.js', 'D3.js', 'Chart.js', 'Leaflet', 'Python', 'Flask', 'scikit-learn', 'ESP32', 'MQTT', 'NASA POWER API', 'Open-Meteo API', 'SoilGrids API'],
    features: [
      'Real-time IoT sensor data acquisition (NPK, pH, moisture, temperature)',
      'Ensemble ML voting engine (Random Forest + SVM + MLP) for crop recommendations',
      'GPS field mapping and digital twin visualization',
      '14-day weather forecasting with crop suitability charts',
      'Multi-season crop rotation planner',
      'Water budget optimizer using FAO Penman-Monteith formula',
      'Kafka streaming pipeline monitor',
      'Offline-capable Flutter mobile app with Hive caching',
      'Firebase Cloud Messaging for anomaly alerts',
      'Wokwi ESP32 hardware simulation with OLED display'
    ],
    screens: [
      { name: 'Web Dashboard Hero', desc: 'Landing page with system overview and key metrics' },
      { name: 'Sensor Hub', desc: 'Real-time visualization of IoT sensor inputs (NPK, pH, moisture, temp)' },
      { name: 'IoT Pipeline & Circuit Animator', desc: 'Live visualization of sensor data flowing into cloud backend' },
      { name: 'ML Ensemble Voting Engine', desc: 'Parallel execution display with confidence scores for RF, SVM, and MLP' },
      { name: 'GPS Field Intelligence', desc: 'Interactive Leaflet map for drawing and managing farm zones' },
      { name: '14-Day Forecast & Crop Suitability', desc: 'Weather forecasting chart with crop suitability analysis' },
      { name: 'Crop Rotation Planner', desc: '4-season intelligent rotation planning tool' },
      { name: 'Irrigation Scheduler', desc: 'ET0-based daily watering recommendations' },
      { name: 'Mobile Dashboard', desc: 'Flutter app main screen with crop data and weather info' },
      { name: 'Mobile Field Map', desc: 'GPS-based field mapping on mobile' },
      { name: 'Mobile Settings', desc: 'App configuration and preferences' }
    ],
    architecture: `
  ┌──────────────┐   ┌──────────────────┐   ┌───────────────┐
  │  ESP32 IoT   │──▶│  Python / Flask   │◀──│ NASA POWER    │
  │  (Wokwi Sim) │   │  Backend Server   │◀──│ Open-Meteo    │
  │  NPK, pH,    │   │                   │◀──│ SoilGrids API │
  │  Moisture,   │   │  ┌─────────────┐  │   └───────────────┘
  │  Temp, DHT22 │   │  │ ML Ensemble │  │
  └──────────────┘   │  │ RF+SVM+MLP  │  │
                     │  └─────────────┘  │
                     └─────┬──────┬──────┘
                           │      │
              ┌────────────▼┐  ┌──▼──────────────┐
              │ React Web   │  │ Flutter Mobile   │
              │ Dashboard   │  │ App (Offline)    │
              │ D3, Charts, │  │ Hive DB, FCM,   │
              │ Leaflet Map │  │ Geolocator      │
              └─────────────┘  └─────────────────┘`
  },

  urbanleafs: {
    id: 'urbanleafs',
    emoji: '🌿',
    name: 'UrbanLeafs',
    tagline: 'A comprehensive business management app for small to medium enterprises',
    status: 'Completed',
    role: 'Solo Developer',
    platform: 'Android',
    description: 'UrbanLeafs is a full-featured business management Flutter application designed for small to medium enterprises to manage daily operations including attendance tracking, inventory management, order processing, payment tracking, expense management, and financial reporting. Features role-based access control, real-time dashboards, and Material Design 3 UI.',
    techStack: ['Flutter', 'Dart', 'Riverpod', 'Firebase Firestore', 'Firebase Auth', 'Firebase Storage', 'Go Router', 'Freezed', 'Shared Preferences', 'Material Design 3', 'Google Fonts', 'Table Calendar'],
    features: [
      'Real-time Dashboard with live statistics and date navigation',
      'Attendance Management for morning/afternoon shifts with history',
      'Inventory Management with stock tracking and low stock alerts',
      'Order Management with creation, tracking, and customer integration',
      'Payment Management (cash/online) with daily revenue tracking',
      'Expense Management with categories and cost analysis',
      'Balance Sheet with financial overview and customer details',
      'User Management with role-based access control (Admin/Regular)',
      'Settings with dark/light theme, language, and notifications'
    ],
    screens: [
      { name: 'Dashboard', desc: 'Real-time overview with quick access cards, live statistics, and date navigation' },
      { name: 'Attendance Management', desc: 'Track employee presence for morning/afternoon shifts with history' },
      { name: 'Inventory Management', desc: 'Monitor stock levels, add/edit items, low stock alerts' },
      { name: 'Order Management', desc: 'Create and manage customer orders with status tracking' },
      { name: 'Payment Management', desc: 'Record payments (cash/online), track daily revenue' },
      { name: 'Expense Management', desc: 'Log and categorize business expenses' },
      { name: 'Balance Sheet', desc: 'Comprehensive financial reporting with customer-wise details' },
      { name: 'Settings', desc: 'Theme toggle, language, notifications, privacy controls' },
      { name: 'Profile', desc: 'User profile customization and password management' }
    ],
    architecture: `
  ┌──────────────────────────────────────────┐
  │           Flutter Mobile App              │
  │  ┌─────────┐  ┌──────────┐  ┌─────────┐ │
  │  │ Screens │──│ Providers│──│ Services│ │
  │  │  (UI)   │  │(Riverpod)│  │ (Logic) │ │
  │  └─────────┘  └──────────┘  └────┬────┘ │
  └──────────────────────────────────┼──────┘
                                     │
              ┌──────────────────────▼──────────────┐
              │          Firebase Backend            │
              │  ┌───────────┐  ┌─────────────────┐ │
              │  │ Firestore │  │ Authentication  │ │
              │  │    (DB)   │  │  (Email/Pass)   │ │
              │  └───────────┘  └─────────────────┘ │
              │  ┌──────────────────────────────┐   │
              │  │       Cloud Storage          │   │
              │  │      (Images/Files)          │   │
              │  └──────────────────────────────┘   │
              └─────────────────────────────────────┘`
  },

  rebalance: {
    id: 'rebalance',
    emoji: '🌟',
    name: 'ReBalance',
    tagline: 'A digital wellness app that helps users manage screen time and build healthy digital habits',
    status: 'Completed',
    role: 'Solo Developer',
    platform: 'Android',
    description: 'ReBalance is a comprehensive digital wellness application that helps users take control of their screen time. It features real-time usage tracking, a unique "Digital Calorie" gamification system that converts screen time into calories with category-based multipliers, smart app limits with blocking capabilities, contextual activity suggestions with streak tracking, and intelligent notifications. Built with Flutter using Provider state management and Hive for local persistence.',
    techStack: ['Flutter', 'Dart', 'Provider', 'Hive', 'Android UsageStats API', 'Flutter Local Notifications', 'Flutter Overlay Window', 'FL Chart', 'Permission Handler'],
    features: [
      'Real-time app usage monitoring via Android UsageStats API',
      'Digital Calorie system with category multipliers (Social Media 2.0x, Gaming 2.2x, Education 0.6x)',
      'Late night penalty (1.5x multiplier for 11 PM – 6 AM usage)',
      'Daily screen time limits with per-app time limits and app blocking',
      'Smart notification system (5 types: warnings, limit reached, excessive, app-specific, continuous usage)',
      'Contextual activity suggestions (Exercise, Mindfulness, Social, Creative, Reading, Outdoor)',
      'Activity timer with streak tracking',
      'Usage phases (Normal, Warning, Limit, Restricted) with color-coded indicators',
      'Onboarding flow with permission management',
      'Light/Dark theme support'
    ],
    screens: [
      { name: 'Onboarding', desc: 'Welcome screens with permission explanations and daily limit setup' },
      { name: 'Home / Dashboard', desc: 'Real-time usage stats, digital calorie card, activity suggestions, pull-to-refresh' },
      { name: 'Digital Calorie Detail', desc: 'Detailed calorie breakdown by category and app, with goal settings' },
      { name: 'App Usage Screen', desc: 'Per-app usage stats with time limit setting and blocking toggle' },
      { name: 'Activities Screen', desc: 'Browse and start contextual activity suggestions' },
      { name: 'Activity Stats', desc: 'Activity history, streak tracking, and progress visualization' },
      { name: 'Settings', desc: 'Daily limit slider, notification toggle, theme preferences' }
    ],
    architecture: null
  },

  nextmove: {
    id: 'nextmove',
    emoji: '🚗',
    name: 'NextMove',
    tagline: 'A mobility mode prediction app that detects and tracks transportation modes using ML',
    status: 'In Progress',
    role: 'App Developer',
    platform: 'Android + Python Backend',
    description: 'NextMove is a mobility tracking application that uses machine learning to predict and detect transportation modes (walking, driving, cycling, etc.). It features real-time trip tracking with GPS, OTP-based phone authentication via Twilio, trip history with analytics, and a Python/FastAPI backend with ML model for mode prediction.',
    techStack: ['Flutter', 'Dart', 'Provider', 'Geolocator', 'Flutter Map', 'FL Chart', 'Sensors Plus', 'Background Services', 'Secure Storage', 'Python', 'FastAPI', 'PostgreSQL', 'Twilio', 'scikit-learn', 'Docker'],
    features: [
      'Real-time trip tracking with GPS location services',
      'ML-powered transportation mode prediction (walk, drive, cycle, etc.)',
      'Phone number OTP authentication via Twilio',
      'Trip history with start/stop/confirm workflow',
      'Interactive map visualization with Flutter Map',
      'Motion sensor integration (accelerometer, gyroscope)',
      'Charts and analytics for trip data',
      'Background service for continuous tracking',
      'Offline capability with secure local storage'
    ],
    screens: [
      { name: 'Auth / Login Screen', desc: 'Phone number OTP-based authentication via Twilio' },
      { name: 'Home Screen', desc: 'Main dashboard with current trip status and quick actions' },
      { name: 'Trip Tracking Screen', desc: 'Real-time GPS tracking with map visualization and mode detection' },
      { name: 'Trip History / Trips Screen', desc: 'List of past trips with details and analytics' },
      { name: 'Profile Screen', desc: 'User profile management' }
    ],
    architecture: `
  ┌──────────────────────────────────────────┐
  │           Flutter Mobile App              │
  │  ┌──────────┐  ┌──────────┐ ┌─────────┐ │
  │  │ Screens  │──│ Provider │─│ Services│ │
  │  │ Auth,    │  │  State   │ │ GPS,    │ │
  │  │ Trip,    │  │ Manager  │ │ Sensors │ │
  │  │ Profile  │  └──────────┘ └────┬────┘ │
  └──────────────────────────────────┼──────┘
                                     │ REST API
              ┌──────────────────────▼──────────────┐
              │        Python / FastAPI Backend       │
              │  ┌──────────┐  ┌──────────────────┐ │
              │  │ ML Model │  │   PostgreSQL DB   │ │
              │  │(sklearn) │  │   (Trip Records)  │ │
              │  └──────────┘  └──────────────────┘ │
              │  ┌──────────────────────────────┐   │
              │  │   Twilio (OTP Verification)  │   │
              │  └──────────────────────────────┘   │
              └─────────────────────────────────────┘`
  },

  'logic-grid': {
    id: 'logic-grid',
    emoji: '🧩',
    name: 'Logic Grid',
    tagline: 'A puzzle/strategy game with levels, leaderboards, community features, and cloud sync',
    status: 'In Progress',
    role: 'Solo Developer',
    platform: 'Android',
    description: 'Logic Grid is a feature-rich puzzle/strategy game built with Flutter. It includes a level selection system, algorithm-driven name generation, community features, seasonal events, rewards system, player statistics, and cloud sync via Supabase. Integrates Google Play Games Services for achievements and leaderboards, Google AdMob for monetization, and audio for immersive gameplay.',
    techStack: ['Flutter', 'Dart', 'Provider', 'Hive', 'Supabase', 'Google Play Games Services', 'Google AdMob', 'AudioPlayers', 'Google Fonts', 'Connectivity Plus'],
    features: [
      'Grid-based puzzle/strategy gameplay with level progression',
      'Algorithmic name generation for unique player identities',
      'Google Play Games integration (achievements, leaderboards)',
      'Supabase cloud sync for cross-device progress',
      'Community features and social interaction',
      'Seasonal events with special content',
      'Rewards and progression system',
      'Player statistics and analytics',
      'Sound effects and background music',
      'Google AdMob monetization',
      'Onboarding flow for new players',
      'Dark/light theme support'
    ],
    screens: [
      { name: 'Onboarding', desc: 'Welcome flow for new players with username generation' },
      { name: 'Home Screen', desc: 'Main hub with navigation to game, stats, community, events' },
      { name: 'Level Selection', desc: 'Browse and select game levels with difficulty indicators' },
      { name: 'Game Screen', desc: 'Core gameplay — grid-based puzzle/strategy with interactive elements' },
      { name: 'Profile Screen', desc: 'Player profile, username, and account settings' },
      { name: 'Stats Screen', desc: 'Player statistics, performance analytics, and progress tracking' },
      { name: 'Community Screen', desc: 'Social features and player interaction' },
      { name: 'Events Screen', desc: 'Seasonal events and special content' },
      { name: 'Rewards Screen', desc: 'Rewards collection and progression system' }
    ],
    architecture: null
  },

  'duel-fights': {
    id: 'duel-fights',
    emoji: '🎮',
    name: 'Duel Fights',
    tagline: 'A multiplayer Pong-style fighting game with nearby device connectivity',
    status: 'In Progress',
    role: 'Solo Developer',
    platform: 'Android',
    description: 'Duel Fights is a real-time multiplayer fighting/pong game built with Flutter and the Flame game engine. Players can connect with nearby devices using Google\'s Nearby Connections API for local multiplayer gameplay. Features offline and online game modes, a lobby system for matchmaking, and Flame-powered game rendering with smooth physics and animations.',
    techStack: ['Flutter', 'Dart', 'Flame (Game Engine)', 'Nearby Connections', 'Permission Handler'],
    features: [
      'Real-time multiplayer Pong/fighting gameplay',
      'Local multiplayer via Nearby Connections (Bluetooth/WiFi Direct)',
      'Flame game engine for smooth 2D rendering and physics',
      'Offline single-player mode',
      'Online multiplayer mode',
      'Lobby system for matchmaking',
      'Game selection screen with mode options'
    ],
    screens: [
      { name: 'Game Selection Screen', desc: 'Choose between offline and online game modes' },
      { name: 'Lobby Screen', desc: 'Matchmaking and nearby device discovery for multiplayer' },
      { name: 'Pong Game Screen', desc: 'Real-time gameplay with Flame engine rendering, paddles, ball physics, and scoring' }
    ],
    architecture: null
  },

  aeroprompt: {
    id: 'aeroprompt',
    emoji: '🚀',
    name: 'AeroPrompt',
    tagline: 'An AI prompt optimizer browser extension and companion website',
    status: 'Completed',
    role: 'Full Stack Developer',
    platform: 'Web + Browser Extension + API Backend',
    description: 'AeroPrompt is a comprehensive AI prompt optimization system designed to elevate interactions with LLMs. Fusing a Chrome browser extension built with Plasmo and TypeScript with a Next.js companion landing website and a FastAPI python backend. It intercepts prompts, analyzes dialogue history for context coherence, uses user Bio personalization, and adjusts tones (Professional, Concise, Friendly, Persuasive) to return polished "Super Prompts". Supported by Supabase database / authentication and Razorpay webhook integrations.',
    techStack: ['Next.js', 'React.js', 'TypeScript', 'TailwindCSS', 'Plasmo', 'FastAPI', 'Python', 'Supabase', 'PostgreSQL', 'Docker', 'Google Cloud Run', 'Razorpay', 'Resend'],
    features: [
      'Smart Enter: intercepts Enter key to automatically optimize prompts before submission',
      'Context Awareness: analyzes chat history to keep optimized prompts relevant to the conversation',
      'Personalization: tailors prompt styling using custom user Bio and style preferences',
      'Tone adjustments: select from Professional, Friendly, Concise, and Persuasive tones',
      'Multi-Platform content injectors adapting to ChatGPT, Claude, and Gemini inputs',
      'Subscription portal with Razorpay payment processing and billing webhooks',
      'Secure guest/user authentication flow managed by Supabase Auth',
      'Dockerized Google Cloud Run microservice deployment pipeline'
    ],
    screens: [
      { name: 'Extension Popup UI', desc: 'Sleek toggle panels, status monitors, and custom tone dropdown select menus' },
      { name: 'Platform Overlays', desc: 'Injected interface buttons and triggers on ChatGPT and Claude input wrappers' },
      { name: 'Marketing Website', desc: 'Landing homepage displaying product analytics, feature lists, and dynamic interactive demos' },
      { name: 'Subscription Center', desc: 'User checkout paths, billing intervals, and integrated Razorpay payment frames' },
      { name: 'User Profile Dashboard', desc: 'Secure console displaying active session lists, payment history, and custom bio editors' }
    ],
    architecture: `
  ┌──────────────────┐       ┌─────────────────┐       ┌──────────────────────┐
  │ Browser Extension│◀─────▶│ Next.js Website │◀─────▶│   Supabase Cloud DB  │
  │ (Plasmo/React/TS)│       │ (Dashboard/Pay) │       │ (PostgreSQL, Auth)   │
  └────────┬─────────┘       └────────┬────────┘       └──────────┬───────────┘
           │                          │                           │
           │ REST                     │ REST                      │ Client
           ▼                          ▼                           ▼
  ┌───────────────────────────────────────────────────────────────────────────┐
  │                          Python / FastAPI Backend                         │
  │     ┌───────────────────────┐             ┌────────────────────────┐      │
  │     │   Prompt Optimizer    │             │   Subscription Webhook │      │
  │     │   (LLM Inference)     │             │     (Razorpay Pay)     │      │
  │     └───────────────────────┘             └────────────────────────┘      │
  └─────────────────────────────────────┬─────────────────────────────────────┘
                                        ▼
                               ┌──────────────────┐
                               │ Google Cloud Run │
                               │  (Docker Deploy) │
                               └──────────────────┘`
  },

  manager: {
    id: 'manager',
    emoji: '💼',
    name: 'The Manager',
    tagline: 'An AI-powered developer project manager and operations cockpit',
    status: 'Completed',
    role: 'Solo Developer',
    platform: 'Web (Next.js + FastAPI)',
    description: 'The Manager is a self-hosted developer operations cockpit designed to organize projects, tasks, milestones, environments, and secrets in a single dashboard. It features a keyboard-first Omnibar (Ctrl+K) supporting quick navigation, custom status/priority filters, and natural language command parsing (powered by Groq Llama 3.3). Includes a Developer Vault for secure API key and port allocation management, workflow triage matrix lanes, and cost/burn rate monitoring trackers.',
    techStack: ['Next.js 15', 'App Router', 'TypeScript', 'Tailwind CSS', 'Zustand', 'FastAPI', 'SQLModel (SQLAlchemy)', 'PostgreSQL', 'SQLite', 'Groq SDK (Llama 3.3)', 'Docker Compose'],
    features: [
      'Omnibar (Ctrl+K): keyboard-first nav with slash commands (/p, /t, /goto) and filters (@, #, &, *)',
      'AI Command Engine: Groq Llama 3.3 parsing natural language queries into structured database operations',
      'Developer Vault: secure repository for API credentials, local ports registry, and hexagonal brand tokens',
      'Workflow Triage Matrix: P0/P1/P2 priorities, focus lists, and automatic task classification',
      'Environments Dashboard: tracks active setups, local host ports, and database sync metrics',
      'AI Operations Logger: versions system prompts, monitors token windows, and logs API spend burn rates'
    ],
    screens: [
      { name: 'Project Workspace', desc: 'Comprehensive cockpit showing active projects, blueprints, schemas, and schemas notes' },
      { name: 'Omnibar Overlay', desc: 'Ctrl+K search interface with command suggestions and natural language parser input' },
      { name: 'Task Board', desc: 'Interactive lanes representing priorities, showing triage matrices and AI categories' },
      { name: 'Secret Vault', desc: 'Secure database listing host ports, passwords, API keys, and brand assets' },
      { name: 'Environments Console', desc: 'List of running instances, host ports, and database connection sync logs' },
      { name: 'AI Prompts & Costs', desc: 'Config logs showing system prompts, token usage, and API billing rates' }
    ],
    architecture: `
  ┌────────────────────────────────────────────────────────┐
  │                 Next.js 15 Web Client                  │
  │   ┌───────────────┐  ┌───────────────┐ ┌───────────┐   │
  │   │  Omnibar UI   │  │ Project Board │ │ Vault UI  │   │
  │   └───────┬───────┘  └───────┬───────┘ └─────┬─────┘   │
  └───────────┼──────────────────┼───────────────┼─────────┘
              │                  │               │
              ▼                  ▼               ▼  REST API
  ┌────────────────────────────────────────────────────────┐
  │                  Python / FastAPI Backend              │
  │  ┌────────────────┐ ┌────────────────┐ ┌─────────────┐ │
  │  │   SQLModel     │ │   AI Service   │ │ Port/Vault  │ │
  │  │ (Postgre/Sqlite)│ │ (Groq Llama 3)│ │ Registry    │ │
  │  └────────────────┘ └────────────────┘ └─────────────┘ │
  └────────────────────────────────────────────────────────┘`
  }
};

// Project order for homepage grid (by recommended impact)
const PROJECT_ORDER = ['medtrack', 'agrisense', 'aeroprompt', 'manager', 'urbanleafs', 'rebalance', 'nextmove', 'logic-grid', 'duel-fights'];

