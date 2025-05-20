import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

const locations = [
  {
    name: "Jaipur, Rajasthan",
    coords: [26.9124, 75.7873],
    description: "Explore palaces, forts, and colorful markets.",
  },
  {
    name: "Manali, Himachal Pradesh",
    coords: [32.2396, 77.1887],
    description: "Perfect for snow, adventure, and mountain serenity.",
  },
  {
    name: "Goa",
    coords: [15.2993, 74.1240],
    description: "Beach paradise with nightlife and water sports.",
  },
  {
    name: "Varanasi, Uttar Pradesh",
    coords: [25.3176, 82.9739],
    description: "Spiritual capital of India, famous for Ganga Aarti.",
  },
  {
    name: "Munnar, Kerala",
    coords: [10.0889, 77.0595],
    description: "Lush green hills and tea plantations.",
  },
];

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -40],
});

const InteractiveMap = () => {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <section id="map" className="py-20 bg-white px-4">
      <h2 className="text-4xl font-bold text-center mb-10">Explore Destinations on the Map</h2>
      <div className="h-[400px] sm:h-[500px] md:h-[600px] max-w-6xl mx-auto rounded-lg shadow-2xl overflow-hidden border">
        <MapContainer
          center={[22.5937, 78.9629]}
          zoom={5}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((loc, i) => (
            <Marker key={i} position={loc.coords} icon={customIcon}>
              <Tooltip>{loc.name}</Tooltip>
              <Popup>
                <div className="text-sm">
                  <h3 className="font-bold text-lg mb-1">{loc.name}</h3>
                  <p>{loc.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default InteractiveMap;