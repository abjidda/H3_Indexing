# 🌐 H3 Index API + Web Viewer

A simple **geo-spatial microservice** and **web app** that demonstrates how to use the [H3 hexagonal indexing system](https://h3geo.org/) to work with latitude/longitude coordinates, compute H3 indexes, and visualize the results on an interactive map.

---

## 🚀 What This Includes

### ✅ 1️⃣ FastAPI H3 Service

A lightweight Python API built with FastAPI that:
- Accepts `latitude`, `longitude`, and an optional `resolution` (0–15)
- Computes the corresponding **H3 index**
- Returns:
  - The **H3 index**
  - The **centroid** of the H3 cell
  - The **polygon boundary** coordinates of the H3 cell

📎 **Example request:**

GET /h3?lat=24.43505&lng=54.7949&resolution=7


📎 **Example response:**
```json
{
  "h3_index": "871fa4d8fffffff",
  "centroid": [24.435, 54.7949],
  "polygon": [[24.44, 54.79], ...]
}

✅ 2️⃣ H3 Index Viewer (Frontend)
A simple web app built with:

HTML + CSS + Vanilla JavaScript
Leaflet.js for interactive map rendering
Users can:

Enter coordinates and resolution.
Click Get H3 Index to call the API.
See the resulting hex cell polygon and centroid on the map.
View the H3 index and centroid coordinates in real-time.

🗂️ Project Structure

.
├── fastapi-h3-service/
│   ├── main.py
│   ├── requirements.txt
│   └── README.md
│
├── h3-index-viewer/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
└── README.md (this file)

⚙️ How to Run Locally
🐍 Run FastAPI Service
1. Navigate to fastapi-h3-service/
2. Install dependencies:
  pip install -r requirements.txt
3. Run the server:
  uvicorn main:app --reload --host 0.0.0.0 --port 8000
4. Test your API:
  Swagger docs: http://localhost:8000/docs

🌐 Run the Viewer
1. Make sure the FastAPI server is running.
2. Open h3-index-viewer/index.html in your browser.
3. Enter latitude, longitude, and resolution, then click Get H3 Index.
4. The map will update with the hex cell polygon and centroid marker.
