import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Input,
  VStack,
  Box,
  Center,
  Spinner,
} from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useGeolocated } from "react-geolocated";

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

const LocationModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
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
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select Location</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <Text>Search for a location:</Text>
            <Input placeholder="Search..." />
            <Box
              height="100%"
              width="100%"
              position="relative"
            >
              {false && (
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
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MapCenterUpdater position={position} />
                {position && (
                  <Marker position={[position.latitude, position.longitude]}>
                    <Popup>You are here</Popup>
                  </Marker>
                )}
              </MapContainer>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LocationModal;
