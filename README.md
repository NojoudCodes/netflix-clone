# 🎬 Netflix Clone: Enhanced Edition

A high-performance, responsive Netflix UI replica built to demonstrate modern frontend architecture. This version goes beyond a static clone by integrating real-time data from **The Movie Database (TMDB) API** and featuring a custom-built, mobile-first user experience.

---

## 🚀 Key Features

* **Live API Integration:** Uses the native **Fetch API** with `async/await` to pull live data from TMDB (Trending, Top Rated, and Genre-specific categories).
* **Intelligent Component Logic:** A reusable `MovieCard` component that dynamically switches API endpoints based on props.
* **Fully Responsive UI:** A mobile-first approach using **Tailwind CSS**, ensuring a seamless experience from smartphones to ultra-wide monitors.
* **Dynamic Carousels:** High-performance, touch-ready sliders powered by **Swiper.js** with custom breakpoints.
* **Smart Rendering:** Specialized UI logic to handle distinct layouts for "Top 10" rankings and "Continue Watching" progress bars.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React.js** | UI architecture using `useState` and `useEffect` hooks. |
| **Tailwind CSS** | Utility-first styling for rapid, responsive design. |
| **Fetch API** | Native browser method for handling asynchronous network requests. |
| **Swiper.js** | Touch-enabled, hardware-accelerated slider functionality. |
| **Vite** | Modern frontend tooling for a fast development loop. |

---

## 🔌 API Mapping logic

The application maps internal category types to specific **TMDB v3** endpoints to populate the rows:

* **Top Picks:** `movie/top_rated`
* **Trending:** `trending/movie/day`
* **Animations:** `discover/movie?with_genres=16`
* **New Releases:** `movie/now_playing`

---

## ⚙️ Setup & Installation

1. **Clone the repository:**
   
   ```bash
   git clone [https://github.com/yourusername/netflix-clone.git](https://github.com/yourusername/netflix-clone.git)
   ```
2. **Install dependencies:**
   
    ```bash
   npm install
   ```
3. **Run the development server:**
   
   ```bash
   npm run dev
   ```
4. **Set up Environment Variables:**
   <br/>Create a `.env` file in the root directory and add your key:
   
   ```bash
   VITE_TMDB_API_KEY=your_key_here
    ```
