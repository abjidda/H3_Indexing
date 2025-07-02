const form = document.getElementById('h3-form');
const h3IndexSpan = document.getElementById('h3-index');
const centroidSpan = document.getElementById('centroid');

const map = L.map('map').setView([24.43505, 54.7949], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let polygonLayer = null;
let centroidMarker = null;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const lat = parseFloat(document.getElementById('lat').value);
  const lng = parseFloat(document.getElementById('lng').value);
  const resolution = parseInt(document.getElementById('resolution').value);

  const response = await fetch(`http://localhost:8000/h3?lat=${lat}&lng=${lng}&resolution=${resolution}`);
  const data = await response.json();

  h3IndexSpan.textContent = data.h3_index;
  centroidSpan.textContent = `${data.centroid[0].toFixed(6)}, ${data.centroid[1].toFixed(6)}`;

  // Remove old layers
  if (polygonLayer) {
    map.removeLayer(polygonLayer);
  }
  if (centroidMarker) {
    map.removeLayer(centroidMarker);
  }

  // Add polygon
  const latlngs = data.polygon.map(coord => [coord[0], coord[1]]);
  polygonLayer = L.polygon(latlngs, {color: 'blue'}).addTo(map);

  // Add centroid marker
  centroidMarker = L.marker(data.centroid).addTo(map);

  // Fit map to polygon
  map.fitBounds(polygonLayer.getBounds());
});

