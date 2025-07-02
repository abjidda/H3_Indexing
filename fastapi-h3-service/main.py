from fastapi import FastAPI, Query
from pydantic import BaseModel
from h3 import h3
from typing import List

app = FastAPI(
    title="H3 Index Service",
    description="Get H3 index, centroid, and polygon for a given lat/lng",
    version="1.0.0"
)

class H3Response(BaseModel):
    h3_index: str
    centroid: List[float]
    polygon: List[List[float]]

@app.get("/h3", response_model=H3Response)
def get_h3_index(
    lat: float = Query(..., description="Latitude"),
    lng: float = Query(..., description="Longitude"),
    resolution: int = Query(7, ge=0, le=15, description="H3 resolution (0-15)")
):
    # Calculate H3 index
    h3_index = h3.geo_to_h3(lat, lng, resolution)

    # Get centroid back (same as input point if doing geo_to_h3, but this uses the cell center)
    centroid = h3.h3_to_geo(h3_index)  # returns [lat, lng]

    # Get polygon boundary
    polygon = h3.h3_to_geo_boundary(h3_index, geo_json=True)  # list of [lat, lng]

    return {
        "h3_index": h3_index,
        "centroid": centroid,
        "polygon": polygon
    }
