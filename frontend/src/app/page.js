import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#111] text-gray-900 dark:text-gray-100 flex flex-col items-center justify-between px-6 py-10">
      {/* Hero Section */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4">🧠 DSP Playground</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          An interactive signal processing sandbox for students, hobbyists, and engineers. Visualize waveforms, apply FFTs and filters, and explore the beauty of DSP — all in your browser.
        </p>
      </header>

      {/* Feature Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mb-16">
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1c1c1c] shadow-sm text-center">
          <h2 className="text-xl font-semibold mb-2">📊 Real-Time Signal Visualization</h2>
          <p className="text-sm">Plot and manipulate waveforms with adjustable parameters. Time and frequency domain views included.</p>
        </div>
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1c1c1c] shadow-sm text-center">
          <h2 className="text-xl font-semibold mb-2">🔍 Learn by Experimenting</h2>
          <p className="text-sm">Adjust sliders, apply noise, and see how DSP concepts play out with real signals.</p>
        </div>
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1c1c1c] shadow-sm text-center">
          <h2 className="text-xl font-semibold mb-2">🎛️ Interactive Filters & Tools</h2>
          <p className="text-sm">Test different filters, add noise, and clean it up. Convolution, sampling, and more coming soon.</p>
        </div>
      </section>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
        <Link
          href="/test"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold text-center"
        >
          🚀 Launch Signal Generator
        </Link>

        <Link
          href="/filter"
          className="px-6 py-3 border border-gray-400 hover:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg text-lg font-medium text-center"
        >
          🔧 Explore Filters
        </Link>
      </div>

      {/* Footer */}
      <footer className="text-sm text-gray-500 dark:text-gray-400 text-center">
        <p className="mb-1">Built with ❤️ using Next.js, Flask, and Python</p>
        <p>
          <a href="https://github.com/abdulwahab04/DSP-Playground" target="_blank" className="underline hover:text-blue-600">View Source on GitHub</a>
        </p>
      </footer>
    </div>
  );
}
