// The following example creates five accessible and
// focusable markers.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 12.0022, lng: 8.5920 },
    });
    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const tourStops = [
        [{ lat: 11.969962, lng: 8.532914 }, "New H B Paediatric Hospital"],
        [{ lat: 11.96307373, lng: 8.541687012 }, "Hausawa Primary Health Center"],
        [{ lat: 11.97474, lng: 8.538099 }, "Triump Hospital"],
        [{ lat: 11.955208, lng: 8.540782 }, "Premier Clinic"],
        [{ lat: 11.95955248, lng: 8.555939523 }, "Darmanawa Health Clinic"],

    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    // Create the markers.
    tourStops.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${i + 1}. ${title}`,
            label: `${i + 1}`,
            optimized: false,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
    });
}