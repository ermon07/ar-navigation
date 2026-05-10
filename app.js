window.addEventListener("DOMContentLoaded", () => {

  const status = document.querySelector("#status");

  const markerA = document.querySelector("#markerA");
  const markerB = document.querySelector("#markerB");

  const arrow = document.querySelector("#arrow");

  let destinationReached = false;

  // MARKER A DETECTED
  markerA.addEventListener("targetFound", () => {

    if (destinationReached) return;

    console.log("Marker A Found");

    status.innerHTML = "Follow the Arrow to Marker B";

    // Rotate arrow forward
    arrow.object3D.rotation.set(0, 0, 0);

  });


  // MARKER B DETECTED
  markerB.addEventListener("targetFound", () => {

    console.log("Marker B Found");

    destinationReached = true;

    status.innerHTML = "Destination Reached";

    // Hide arrow after arrival
    arrow.setAttribute("visible", false);

  });

});