import { useState, useEffect, useCallback, useMemo, SetStateAction } from "react";
import ReactMapGL, { Marker, Source, Layer, GeolocateControl } from "react-map-gl/maplibre";
import { useAppSelector } from "../lib/store/hooks";
import * as turf from "@turf/turf";
import 'maplibre-gl/dist/maplibre-gl.css';
import Pin from "../layouts/pins/pin";
import Biker from "../layouts/pins/biker";
import Shop from "../layouts/pins/shop";
import { RootState } from "../lib/store/store";

interface Markertype {
    longitude: number,
    latitude: number,
    art: string
}

interface ViewState {
    longitude: number;
    latitude: number;
    zoom: number;
}

const MapComponent: React.FC = () => {
    const [viewState, setViewState] = useState<ViewState>({
        longitude: 8.6821,
        latitude: 50.1109,
        zoom: 9
    });

    const [centerPoint, setCenterPoint] = useState<{ position: { lngLat: { lng: number; lat: number } } } | null>(null);
    const [radius, setRadius] = useState<number>(5);
    const [filteredMarkers, setFilteredMarkers] = useState<Markertype[]>([]);
    const Allmarkers: Markertype[] = useAppSelector((state: RootState) => state.trailmap) as Markertype[];


  const onMove = useCallback((evt: { viewState: SetStateAction<ViewState>; }) => {
    setViewState(evt.viewState);
  }, []);
  //lng: position.lngLat.lng, lat: position.lngLat.lat

  const onMapClick = useCallback((position: any) => {
    setCenterPoint({position});
  }
  , []);

  useEffect(() => {
    if (centerPoint) {
        const center = turf.point([centerPoint.position.lngLat.lng, centerPoint.position.lngLat.lat]);
        const newFilteredMarkers = Allmarkers.filter(marker => {
          const point = turf.point([marker.longitude, marker.latitude]);
          return turf.distance(center, point, { units: 'kilometers' }) <= radius;
        });
        setFilteredMarkers(newFilteredMarkers);
    } else {
        setFilteredMarkers(Allmarkers);
    }
  }, [centerPoint, radius, Allmarkers]);

  const circleData = useMemo(() => {
      if (!centerPoint) return null;
    const center = [centerPoint.position.lngLat.lng, centerPoint.position.lngLat.lat];
    const myCircle = turf.circle(center, radius, { units: 'kilometers', steps: 64 });
    return myCircle;
  }, [centerPoint, radius]);

  const handleRadiusChange = (event: { target: { value: string; }; }) => {
      setRadius(parseFloat(event.target.value));
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
        <ReactMapGL {...viewState} onMove={onMove} onClick={onMapClick} 
          mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json">
            <GeolocateControl 
                positionOptions={{ enableHighAccuracy: true }} 
                trackUserLocation={true}
                onGeolocate={(position) => {
                    setCenterPoint({ position: { lngLat: { lng: position.coords.longitude, lat: position.coords.latitude } } });
                    setViewState(prev => ({
                        ...prev,
                        longitude: position.coords.longitude,
                        latitude: position.coords.latitude
                    }));
                    console.log(position);
                }}
            />
            {centerPoint && (
                <Marker longitude={centerPoint.position.lngLat.lng} latitude={centerPoint.position.lngLat.lat} anchor="bottom">
                    <div style={{backgroundColor: 'red', width: '10px', height: '10px', borderRadius: '50%'}}></div>
                </Marker>
            )}
            {circleData && (
                <Source id="circle-source" data={circleData} type="geojson" >
                    <Layer id="landuse" type="fill" paint={{ 'fill-color': '#007cdf', 'fill-opacity': 0.3 }} />
                    <Layer id="landuse" type="line" paint={{ 'line-color': '#007cdf', 'line-width': 2 }} />
                </Source>
            )}
            {filteredMarkers.map((marker, index) => (
              
                <Marker
                    key={`marker-${index}`}
                    longitude={marker.longitude}
                    latitude={marker.latitude}
                    anchor="bottom"
                >
                    {(() => {
                    switch(marker.art) {
                        case "bikepark": return <Biker/>;
                        case "trail": return <Biker/>;
                        case "shop": return <Shop/>;
                        default: return <Pin/>
                    }
                    })()}
                </Marker>
            ))}
        </ReactMapGL>
        <div>
            <div>
                <label htmlFor="radius-input">Radius (km): </label>
                <input 
                    name="radius" 
                    type="number" 
                    id="radius-input" 
                    value={radius} 
                    onChange={handleRadiusChange}
                    min="1" 
                    max="100" 
                />
            </div>
            { centerPoint && (
                <div>
                    Zentrum: {centerPoint.position.lngLat.lng.toFixed(4)}, {centerPoint.position.lngLat.lat.toFixed(4)}
                    <button onClick={() => setCenterPoint(null)} style={{}}>Reset</button>
                </div>
            )}
            <p>Gefilterte Marker: {filteredMarkers.length}</p>
        </div>
    </div>
  );
} 
;
export default MapComponent;