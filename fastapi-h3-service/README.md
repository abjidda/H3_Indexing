# 🗺️ FastAPI H3 Index Service

A simple FastAPI microservice that:
- Takes latitude, longitude, and resolution.
- Converts the point to an H3 index.
- Returns the H3 index, its centroid, and its polygon boundary.

## 🚀 How to run

1. Install dependencies:
   ```bash
   pip install -r requirements.txt

2. Run the server:

uvicorn main:app --reload

3. Open in browser:

Swagger UI: http://localhost:8000/docs
Example: http://localhost:8000/h3?lat=24.435050&lng=54.794900&resolution=7

🔗 Useful links

H3 Docs
FastAPI Docs


---

## ✅ **How to test**
1. Start the service with `uvicorn`.
2. Use the `/docs` Swagger UI to try out:
   - `lat`: 24.43505
   - `lng`: 54.7949
   - `resolution`: 7
3. You’ll get back:
   - `h3_index` (string)
   - `centroid` ([lat, lng])
   - `polygon` ([[lat, lng], ...])

---

## 🚀 **Why this is great for your portfolio**
- Shows a **Python web API** with FastAPI.
- Uses a **geo-spatial library** (H3) that’s very practical for location-based apps.
- Neatly documented and RESTful.
- Easy to deploy as a microservice.

---

If you want, I can show you how to:
- Add unit tests for it.
- Containerize it with Docker.
- Or deploy it to something like **Railway**, **Render**, or **Fly.io** for a free live demo!

Let me know — want the extras? 🚀
