import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useGeolocated } from "react-geolocated";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Box } from "@chakra-ui/react";

// Define the type for geolocation coordinates
interface Coordinates {
  latitude: number;
  longitude: number;
}

// Component to update the map center
const MapCenterUpdater: React.FC<{ position: Coordinates | null }> = ({ position }) => {
  const map = useMap();
  
  useEffect(() => {
    if (position) {
      map.setView([position.latitude, position.longitude], 13);
    }
  }, [position, map]);

  return null;
};

const MapComponent: React.FC = () => {
  const [position, setPosition] = useState<Coordinates | null>(null);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true
    },
    userDecisionTimeout: 5000
  });

  useEffect(() => {
    if (coords) {
      setPosition({
        latitude: coords.latitude,
        longitude: coords.longitude
      });
    }
  }, [coords]);

  if (!isGeolocationAvailable) {
    return <div>Your browser does not support Geolocation.</div>;
  }

  if (!isGeolocationEnabled) {
    return <div>Geolocation is not enabled. Please enable it to view the map.</div>;
  }

  return (
    <Box
      display={{ base: "none", md: "block" }} // Hide on small screens, show on medium and larger
      height="100%"
      width="100%"
    >
      <MapContainer
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapCenterUpdater position={position} />
        {position && (
          <Marker position={[position.latitude, position.longitude]}>
            <Popup>
              You are here
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </Box>
  );
};

export default MapComponent;
