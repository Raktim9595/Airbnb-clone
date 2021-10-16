import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import { useState } from "react";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  //transfroming the searchresult into required form
  const coordinates = searchResults?.map(item => ({
    longitude: item.long,
    latitude: item.lat,
  }));
  const [selectedLocation, setselectedLocation] = useState({});
  const center = getCenter(coordinates);
  const [viewPort, setviewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  
  return (
    <ReactMapGl
      mapStyle="mapbox://styles/raktim/ckut9h25607kp17qsl4cdphmo"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewPort}
      onViewportChange={(nextViewPort) => setviewPort(nextViewPort)}
    >
      {searchResults?.map(item => (
        <div key={item.long}>
          <Marker longitude={item.long} latitude={item.lat} offsetTop={-10} offsetLeft={-20}>
            <p onClick={() => setselectedLocation(item)} className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >📌</p>
          </Marker>
          {/* popup to show if we click the pointer  */}
          {selectedLocation.long === item.long && (
            <Popup 
              onClose={() => setselectedLocation({})}
              closeOnClick={true}
              latitude={item.lat}
              longitude={item.long}
            >
              <p className="py-1 px-4">{item.title}</p>
            </Popup>
          )}
        </div>
      ))}

    </ReactMapGl>
  )
}

export default Map;
