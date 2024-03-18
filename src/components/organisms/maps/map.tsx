import React, { useState } from "react";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MarkerImage from "../../../assets/avionImage.png";
import BoxAtom from "../../atoms/box";

interface Coordinate {
  lat: number;
  lng: number;
  name: string; 
  id:string;
}

L.Marker.prototype.options.icon = L.icon({
  iconUrl: MarkerImage,
});

const center = { lat: 59.433421, lng: 24.75224 };

interface MapStreetProps {
  onMarkerClick: (
    position: Coordinate,
    isSource: boolean
  ) => void;
  isSource: boolean;
}

const MapStreet: React.FC<MapStreetProps> = ({
  onMarkerClick,
  isSource,
}) => {
  const [coordinatesList, setCoordinatesList] = useState<Coordinate[]>([
    { lat: 50.43046, lng: 24.728563, name: "Airport 1",id:"1" },
    { lat: 55.432, lng: 24.73, name: "Airport 2",id:"2" },
    { lat: 59.432, lng: 24.735, name: "Airport 3",id:"3" },
    // Add more coordinates as needed
  ]);
  return (
    <MapContainer style={{ height: "350px" }} center={center} zoom={2}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {coordinatesList.map((coords) => (
        <BoxAtom key={coords.id} onClick={() => onMarkerClick(coords, isSource)}>
          <Marker
            key={coords.id}
            position={[coords.lat, coords.lng]}
            eventHandlers={{ click: () => onMarkerClick(coords, isSource) }}
          >
            <Popup>
              {coords.name} <br />
              Latitude: {coords.lat} <br />
              Longitude: {coords.lng} <br />
            </Popup>
          </Marker>
        </BoxAtom>
      ))}
    </MapContainer>
  );
};

export default MapStreet;
