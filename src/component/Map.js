import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: -30, coordinates: [73, 22.6037] },
  { markerOffset: 15, coordinates: [78.1193, 11.4897] },
  { markerOffset: 15, coordinates: [84.8825, 22.7942] },
  { markerOffset: 15, coordinates: [76.6693, 33.4489] },
  { markerOffset: 15, coordinates: [95.0721, 28.711] },
  
];

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-79.0, -25.0],
        scale: 900
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .filter(d => d.properties.REGION_UN === "Asia")
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="33.809" viewBox="0 0 20 33.809">
  <path id="Exclusion_1" data-name="Exclusion 1" d="M10,33.809h0L.749,13.893H.811A9.922,9.922,0,0,1,2.929,2.917a10.019,10.019,0,0,1,14.142,0,9.935,9.935,0,0,1,2.118,10.977h.061L10,33.809ZM10,3.485a6.224,6.224,0,1,0,6.25,6.223A6.244,6.244,0,0,0,10,3.485Z" fill="#e88248"/>
</svg>



          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default Map;
