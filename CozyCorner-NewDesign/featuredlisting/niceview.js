function showContactDetails() {
  var contactDetails = document.getElementById("contact-details");
  if (
    contactDetails.style.display === "none" ||
    contactDetails.style.display === ""
  ) {
    contactDetails.style.display = "block";
  } else {
    contactDetails.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    video: true, // Ensures video links are handled
  });
});

function initMap() {
  var location = { lat: 40.7128, lng: -74.006 }; // New York City coordinates
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: location,
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

// Initialize the map once the window has loaded
window.onload = initMap;
