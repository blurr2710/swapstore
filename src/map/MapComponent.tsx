import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useGeolocated } from "react-geolocated";
import "leaflet/dist/leaflet.css";
import { Box, Spinner, Center } from "@chakra-ui/react";

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
  const [loading, setLoading] = useState<boolean>(true);

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

  useEffect(() => {
    // Set loading to false once the map component has mounted and loaded
    setLoading(false);
  }, []);

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
      position="relative"
    >
      {loading && (
        <Center
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={1}
        >
          <Spinner size="lg" />
        </Center>
      )}
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        whenReady={() => setLoading(false)} // Use whenReady instead of whenCreated
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
