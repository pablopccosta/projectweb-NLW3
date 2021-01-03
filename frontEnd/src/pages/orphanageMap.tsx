import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import { MapContainer, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../image/map-marker.svg';

import '../styles/pages/orphanage-map.css';

function orphanagesMap () {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>
                
                <footer>
                    <strong>Ferraz de Vaasconcelos</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <MapContainer
            center={[-23.5289379,-46.3723371]}
            zoom={15}
            style={{width:'100%', height:'100%' }}
            >

                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
            

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div> 
    );
}

export default orphanagesMap;