# 🗺️ FastAPI H3 Index Service

A simple FastAPI microservice that:
- Takes latitude, longitude, and resolution.
- Converts the point to an H3 index.
- Returns the H3 index, its centroid, and its polygon boundary.

## 🚀 How to run

1. Install dependencies:
   ```bash
   pip install -r requirements.txt

uvicorn main:app --reload
