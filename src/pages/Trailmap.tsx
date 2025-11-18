import MapComponent from "../components/Map";
import "maplibre-gl/dist/maplibre-gl.css"
import AppLayout from "../layouts/AppLayout"
import '../styles/Trailmap.scss';


const Trailmap = () => {
    return(
        <AppLayout >
            <div className="trailmap">
                <section className="mapContainer">
                    <MapComponent />
                </section>
            </div>
        </AppLayout>
    )
}

export default Trailmap;