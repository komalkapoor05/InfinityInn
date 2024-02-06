mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", //style URL
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 })
      .setHTML(
        `<h5>${listing.location}</h5><p>Exact location will be provided after booking!</p>`
      )
      .setMaxWidth("300px")
  )
  .addTo(map);

// map.on("load", () => {
//   // Load an image from an external URL.
//   map.loadImage(
//     "https://th.bing.com/th/id/OIP.jGZEEP2Nl2FF3KtOYs-C1AHaHa?rs=1&pid=ImgDetMain",
//     (error, image) => {
//       if (error) throw error;

//       // Add the image to the map style.
//       map.addImage("infinityinn", image);

//       // Add a data source containing one point feature.
//       map.addSource("point", {
//         type: "geojson",
//         data: {
//           type: "FeatureCollection",
//           features: [
//             {
//               type: "Feature",
//               geometry: {
//                 type: "Point",
//                 coordinates: [-77.4144, 25.0759],
//               },
//             },
//           ],
//         },
//       });

//       // Add a layer to use the image to represent the data.
//       map.addLayer({
//         id: "points",
//         type: "symbol",
//         source: "point", // reference the data source
//         layout: {
//           "icon-image": "infinityinn", // reference the image
//           "icon-size": 0.25,
//         },
//       });
//     }
//   );
// });
