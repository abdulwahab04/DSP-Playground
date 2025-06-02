# 🎛️ DSP Playground

**DSP Playground** is an interactive educational tool for exploring digital signal processing concepts in real time. Built with a Python Flask backend and a Next.js + React frontend, it allows you to generate signals, visualize them in both time and frequency domains, and tweak key parameters to observe their effects.

---

## 🚀 Features

- 🎚️ Adjustable signal parameters: frequency, duration, sample rate, and type  
- 📈 Real-time plotting with Plotly.js  
- 🧠 FFT (Fast Fourier Transform) visualization  
- 🔁 Toggle between time-domain and frequency-domain views  
- 🌀 Support for various waveform types: sine, square, triangle, sawtooth  
- 💡 Built with Flask + Next.js for full-stack interactivity  

---

## 🧩 Tech Stack

- **Frontend**: Next.js (React), Tailwind CSS, Plotly.js  
- **Backend**: Python, Flask, NumPy  
- **Other Tools**: Flask-CORS for cross-origin requests, dynamic imports for SSR-safe plotting

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/dsp-playground.git
cd dsp-playground
```

### 2. Backend setup (Flask)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows use venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

> The Flask server will start on `http://localhost:5000`

### 3. Frontend setup (Next.js)

```bash
cd frontend
npm install
npm run dev
```

> The Next.js app will be available at `http://localhost:3000`

---

## 📂 Folder Structure

```
dsp-playground/
├── backend/
│   ├── app.py               # Flask server
│   ├── dsp_utils.py         # Signal generation + FFT logic
│   └── requirements.txt
├── frontend/
│   ├── pages/               # Next.js routes
│   ├── components/          # React components (optional modularization)
│   └── app/                 # App directory with Home and Signal page
└── README.md
```

## 🧑‍💻 Author

Abdul Wahab  
📫 [wahab0.0a8@gmail.com]  
🔗 [https://github.com/abdulwahab04]
