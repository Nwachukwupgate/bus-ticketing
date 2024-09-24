// src/MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  height: "500px",
  width: "100%"
};

const center = {
  lat: 37.7749, // Replace with your desired latitude
  lng: -122.4194 // Replace with your desired longitude
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDQWSE0-OT0RUK6Cy3NTtwEqpcLFh6u4SI">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        options={{
          styles: [ /* Optional: Add custom styles here */ ],
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
