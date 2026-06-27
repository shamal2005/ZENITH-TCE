# Project Zenith: The Celestial Eye

Project Zenith is a premium, high-fidelity 3D space tracking and orbital simulation web application. Designed as a professional glassmorphic mission control center, it visualizes current spacecraft trajectories, space debris concentration, and provides interactive simulations for orbital collision cascades (Kessler Syndrome). Built using **TanStack Start**, **Vite**, **CesiumJS**, and **Resium**, it brings scientific-grade tracking into a stunning, responsive user interface.

---

## Installation and Setup Instructions

Follow these steps to configure and run Project Zenith locally on your machine.

### Prerequisites

Ensure you have the following installed:
* **Node.js**: `v18.x` or higher (recommended: `v20.x`)
* **npm**: `v9.x` or higher (packaged with Node)
* **Git**: For cloning the repository

### 1. Clone the Repository

Clone the project to your local environment and navigate into the project directory:

```bash
git clone https://github.com/your-username/celestial-eye-opener.git
cd celestial-eye-opener
```

### 2. Install Dependencies

Install all package dependencies configured in `package.json`:

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory to store your Cesium Ion access token:

```env
# Get a free token from https://ion.cesium.com/
VITE_CESIUM_ION_TOKEN=your_cesium_ion_token_here
```

### 4. Start the Development Server

Start the local Vite development server:

```bash
npm run dev
```

The application will launch and be accessible at:
* Local: `http://localhost:8080/` (or the fallback port indicated in the terminal, e.g. `8082`)

### 5. Build for Production

To compile client-side and server-side assets for production:

```bash
npm run build
```

This compiles optimized bundles and initiates the **Nitro** server builder. The production-ready files are generated inside:
* `.output/public` (Static assets, HTML, images, styles)
* `.output/server` (Compiled server-side rendering logic)

### 6. Run the Production Build Locally

Preview the production server build locally:

```bash
npm run start
```

---

## Website Functionality and Unique Features

### Interactive 3D Earth Visualization
At the center of Project Zenith is an interactive, high-resolution 3D Earth globe powered by CesiumJS. Users can rotate, zoom, and tilt the perspective to inspect orbital paths, ground tracks, and satellite placement.

### Zenith View
The default tracking layout displaying active orbital routes, detailed telemetry readouts, and global coverage vectors in a premium sidebar configuration.

### Live Satellite Tracking
Propagates and tracks real-time locations of major spacecraft using SGP4 orbital mechanics. Includes tracking for:
* **ISS (International Space Station)**
* **Hubble Space Telescope**
* **Tiangong Space Station**
* **Starlink Constellation**
* **Landsat satellites**

### Day/Night Earth Visualization
Projects real-time solar positioning onto the globe, shading the dark side of the Earth and illuminating the day side. Features glowing night lights over major cities.

### Constellation Visibility
Determines which astronomical constellations are currently visible in the night sky relative to the user's geographic coordinates, highlighting alignment and peak angles.

### Tonight's Sky Predictions
Provides personalized forecasts of visible orbital passes (like the ISS) and celestial events happening above the user's location over the upcoming hours.

### Graveyard Mode
An educational dashboard visualizing the concentration of decommissioned satellites and cataloged space junk orbiting the Earth, emphasizing the growing issue of orbital debris.

### Kessler Simulation
A cinematic, multi-phase mission control simulator demonstrating the impact of a collision cascade (Kessler Syndrome):
* **Standby Mode**: Two featured satellites (**Aegis-7** and **Cosmos-2489**) are isolated as stationary focus targets above the horizon while other satellites orbit normally.
* **Cinematic Initialization**: Cycles through orbital telemetry locks and locks collision trajectories.
* **Countdown Sequence**: Triggers warning overlays, draws pulsing crimson trajectory lines, and counts down to zero.
* **First Collision & Shard Generation**: Animates smooth convergence, triggers a white impact flash and expanding shockwave, instantly removes the destroyed satellites, and spawns 45 expanding metallic debris fragments.

---

## What Makes This Project Unique

* **High-Aesthetic Mission Control UI**: Eschews traditional flat informational sidebars in favor of a responsive, glowing glassmorphic interface with micro-animations and status telemetry badges.
* **Real-time Orbit Propagation**: Uses real SGP4 models (`satellite.js`) to propagate positions rather than repeating canned animations, ensuring realistic satellite positions.
* **Cinematic Physics Storytelling**: Integrates realistic collision warnings, cameras shakes, shockwaves, and metal shard models to educate users about the dangers of orbital congestion.

---

## Dependencies

The project uses the following major packages and frameworks:

| Package / Library | Purpose |
| :--- | :--- |
| **React (v19)** | UI rendering and component architecture |
| **TypeScript** | Static typing and interface enforcement |
| **Vite** | High-performance build tool and bundler |
| **CesiumJS (v1.142)** | 3D web mapping and globe engine |
| **Resium (v1.23)** | React wrapper for Cesium components |
| **@tanstack/react-start** | Server-side rendering (SSR) and full-stack framework |
| **@tanstack/react-router** | Type-safe layout and route management |
| **@tanstack/react-query** | Data fetching, caching, and state synchronization |
| **Tailwind CSS** | Styling utility framework |
| **satellite.js** | SGP4 orbit propagator for TLE calculation |
| **astronomy-engine** | Planetary coordinates and celestial body calculations |
| **recharts** | Telemetry and debris density charts |
| **lucide-react** | SVG icon elements |
| **zod** | Schema verification and type validation |

---

## Project Structure

```text
celestial-eye-opener/
├── .tanstack/          # Temporary router outputs
├── public/             # Static public assets (Cesium workers, models, textures)
├── scripts/            # Helper scripts (e.g. copy-cesium asset script)
└── src/
    ├── assets/         # Static images and icons
    ├── components/     # UI elements (GlobeView, Panels, Navigation)
    ├── hooks/          # React hooks (tracking, debris density, visible constellations)
    ├── lib/            # Business logic utilities (spacecraft service, error logging)
    ├── routes/         # TanStack file-based routes (index.tsx home layout)
    ├── router.tsx      # Router configuration
    ├── server.ts       # Server SSR handler entry
    ├── start.ts        # Client bootstrapper
    └── styles.css      # Custom scrollbars, glassmorphism layers, and animations
```

---

## Future Improvements

* **Full Kessler Chain Reaction**: Model secondary collisions where generated debris hits other active satellites in orbit, triggering further cascades.
* **Advanced Orbital Physics**: Integrate atmospheric drag, solar radiation pressure, and orbital decay projections into the simulation.
* **Additional Satellite Datasets**: Expand the tracked catalogue to include thousands of live object coordinates directly from CelesTrak.
* **Simulation Speed Controls**: Add playback controls (pause, speed multipliers, rewind) to collision sequences.

---

## License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it.
