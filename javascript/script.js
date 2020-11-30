function initMap() {
  const nida = { lat: 55.305, lng: 20.995 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: nida,
  });
  const marker = new google.maps.Marker({
    position: nida,
    map: map,
  });
}

