from flask import Flask, request, jsonify
from flask_cors import CORS
from dsp_utils import *

app = Flask(__name__)
CORS(app)  # lets Next.js talk to Flask without security errors

@app.route("/api/generate", methods=["POST"])
def generate():
    # Parse JSON body from frontend
    data = request.json
    freq = data.get("frequency", 5)
    duration = data.get("duration", 1)
    sample_rate = data.get("sample_rate", 1000)
    type = data.get("type", "sine")

    # Generate time-domain signal
    t, y = generate_custom_wave(freq, duration, sample_rate, type)
    # Generate frequency-domain (FFT) signal
    f, fft_mag = fast_fourier_transform(y, sample_rate)
    
    return jsonify({
        "time": t.tolist(),
        "signal": y.tolist(),
        "freq": f.tolist(),
        "fft": fft_mag.tolist()
    })

if __name__ == "__main__":
    app.run(debug=True)
