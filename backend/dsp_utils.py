import numpy as np

# Generate a sine wave with given frequency, duration, and sampling rate
def generate_sine_wave(freq=5, duration=1, sample_rate=1000):
    # Create time vector from 0 to duration (exclusive), evenly spaced
    t = np.linspace(0, duration, int(sample_rate * duration), endpoint=False)
    # Compute sine wave using the formula A*sin(2πft)
    y = np.sin(2 * np.pi * freq * t)
    return t, y  # Return time and amplitude arrays

# Generate a square wave by taking the sign of a sine wave
def generate_square_wave(freq=5, duration=1, sample_rate=1000):
    t = np.linspace(0, duration, int(sample_rate * duration), endpoint=False)
    # Sign function creates a signal that jumps between -1 and 1
    y = np.sign(np.sin(2 * np.pi * freq * t))
    return t, y

# Generate a triangle wave using a sawtooth pattern and absolute values
def generate_triangle_wave(freq=5, duration=1, sample_rate=1000):
    t = np.linspace(0, duration, int(sample_rate * duration), endpoint=False)
    # Triangle wave formula: linear ramp up and down between -1 and 1
    y = 2 * np.abs(2 * (t * freq - np.floor(t * freq + 0.5))) - 1
    return t, y

# Generate a sawtooth wave with a linear rise and sharp drop
def generate_sawtooth_wave(freq=5, duration=1, sample_rate=1000):
    t = np.linspace(0, duration, int(sample_rate * duration), endpoint=False)
    # Sawtooth wave increases linearly and then jumps down
    y = 2 * (t * freq - np.floor(t * freq + 0.5))
    return t, y

# Dispatcher function that selects wave type based on a string input
def generate_custom_wave(freq=5, duration=1, sample_rate=1000, wave_type='sine'):
    if wave_type == 'sine':
        return generate_sine_wave(freq, duration, sample_rate)
    elif wave_type == 'square':
        return generate_square_wave(freq, duration, sample_rate)
    elif wave_type == 'triangle':
        return generate_triangle_wave(freq, duration, sample_rate)
    elif wave_type == 'sawtooth':
        return generate_sawtooth_wave(freq, duration, sample_rate)
    else:
        raise ValueError("Unsupported wave type. Choose from 'sine', 'square', 'triangle', or 'sawtooth'.")

# Compute the FFT of a signal and return positive frequencies and magnitudes
def fast_fourier_transform(signal, sample_rate=1000):
    n = len(signal) # Number of samples in signal
    # Generate corresponding frequency bins
    freq = np.fft.fftfreq(n, d=1/sample_rate)
    # Compute FFT using numpy (returns complex values)
    fft_values = np.fft.fft(signal)
    # Return only the positive frequencies and their magnitudes
    return freq[:n // 2], np.abs(fft_values)[:n // 2]
