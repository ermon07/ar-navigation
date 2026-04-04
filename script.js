// Load navigation data
let locations = {};

fetch('data/locations.json')
  .then(res => res.json())
  .then(data => {
    locations = data;
  });

// Elements
const locationName = document.getElementById('locationName');
const directionText = document.getElementById('directionText');

// Marker detection
const entranceMarker = document.querySelector('#entranceMarker');
const hallwayMarker = document.querySelector('#hallwayMarker');

// Entrance detected
entranceMarker.addEventListener('markerFound', () => {
  updateUI('entrance');
});

// Hallway detected
hallwayMarker.addEventListener('markerFound', () => {
  updateUI('hallway');
});

function updateUI(locationKey) {
  const location = locations[locationKey];

  if (!location) return;

  locationName.textContent = location.name;
  directionText.textContent = location.direction;
}