"use client"; // Ensure this file runs as a client-side component (needed for useEffect, Plotly, etc.)

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function TestSignal() {
  const [data, setData] = useState(null);
  const [frequency, setFrequency] = useState(10);
  const [duration, setDuration] = useState(1);
  const [sampleRate, setSampleRate] = useState(1000);
  const [signalType, setSignalType] = useState("sine");
  const [domain, setDomain] = useState("time");

  const fetchSignal = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          frequency,
          duration,
          sample_rate: sampleRate,
          type: signalType,
        }),
      });
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Failed to fetch signal:", err);
    }
  };

  useEffect(() => {
    fetchSignal();
  }, []);

  return (
    <div className="min-h-screen bg-[#111] text-white py-12 px-6 md:px-16 font-sans">
      <h1 className="text-3xl font-bold text-center mb-10">
        DSP Playground: Signal Generator
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 justify-center">
        <div className="bg-[#1c1c1c] p-6 rounded-xl border border-gray-700 w-full max-w-sm">
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Frequency: {frequency} Hz
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={frequency}
              onChange={(e) => setFrequency(parseInt(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">
              Duration: {duration} sec
            </label>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={duration}
              onChange={(e) => setDuration(parseFloat(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">
              Sample Rate: {sampleRate} Hz
            </label>
            <input
              type="text"
              value={sampleRate}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (!isNaN(val)) setSampleRate(val);
              }}
              className="w-full p-2 rounded bg-[#222] border border-gray-600"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Signal Type:</label>
            <select
              value={signalType}
              onChange={(e) => setSignalType(e.target.value)}
              className="w-full p-2 rounded bg-[#222] border border-gray-600"
            >
              <option value="sine">Sine</option>
              <option value="square">Square</option>
              <option value="triangle">Triangle</option>
              <option value="sawtooth">Sawtooth</option>
            </select>
          </div>

          <button
            onClick={() => {
              fetchSignal();
              setDomain("time");
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold mb-2"
          >
            Generate Signal
          </button>
          <button
            onClick={() => {
              fetchSignal();
              setDomain("frequency");
            }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded font-semibold"
          >
            Generate Fourier Transform
          </button>
        </div>

        <div className="bg-white text-black p-4 rounded-xl shadow-xl w-full max-w-4xl align-center">
          <div className="flex justify-center overflow-hidden">
            {data ? (
              <Plot
                data={[
                  {
                    x: domain === "time" ? data.time : data.freq,
                    y: domain === "time" ? data.signal : data.fft,
                    type: "scatter",
                    mode: "lines",
                    line: {
                      color: domain === "time" ? "#1f77b4" : "crimson",
                      width: 2,
                    },
                  },
                ]}
                layout={{
                  width: 900,
                  height: 400,
                  plot_bgcolor: "#fff",
                  paper_bgcolor: "#fff",
                  font: {
                    color: "#222",
                    family: "Helvetica Neue, sans-serif",
                    size: 14,
                  },
                  xaxis: {
                    title: domain === "time" ? "Time (s)" : "Frequency (Hz)",
                    titlefont: { size: 16 },
                    tickfont: { size: 12 },
                    gridcolor: "#e0e0e0",
                    showline: true,
                    linecolor: "#aaa",
                  },
                  yaxis: {
                    title: domain === "time" ? "Amplitude" : "Magnitude",
                    titlefont: { size: 16 },
                    tickfont: { size: 12 },
                    gridcolor: "#e0e0e0",
                    showline: true,
                    linecolor: "#aaa",
                  },
                  margin: { t: 40, l: 60, r: 30, b: 50 },
                }}
                config={{ responsive: true, displayModeBar: false }}
              />
            ) : (
              <p className="text-center">Loading signal...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
