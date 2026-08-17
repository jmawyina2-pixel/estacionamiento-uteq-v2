import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const MapaEstacionamiento = ({ espacios = [] }) => {
  const center = [-1.012416, -79.467881];

  // Garantiza que solo se procesen coordenadas existentes
  const espaciosValidos = espacios.filter(
    (e) => e?.ubicacion?.boundingBox?.norte !== undefined
  );

  return (
    <div className="card" style={{ padding: '0.5rem', marginBottom: '2rem', overflow: 'hidden' }}>
      <div style={{ height: '380px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
        <MapContainer center={center} zoom={18} style={{ height: '100%', width: '100%' }}>
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          />
          {espaciosValidos.map((e) => {
            const { norte, sur, este, oeste } = e.ubicacion.boundingBox;
            const bounds = [
              [norte, oeste],
              [norte, este],
              [sur, este],
              [sur, oeste]
            ];
            const esLibre = e.estado === 'libre';
            return (
              <Polygon
                key={e.id}
                positions={bounds}
                pathOptions={{
                  color: esLibre ? '#22c55e' : '#ef4444',
                  fillColor: esLibre ? '#22c55e' : '#ef4444',
                  fillOpacity: 0.6,
                  weight: 1.5
                }}
              >
                <Popup>
                  <div style={{ padding: '4px', textAlign: 'center' }}>
                    <h4 style={{ margin: 0 }}>{e.id}</h4>
                    <p style={{ margin: '4px 0', fontSize: '0.85rem' }}>
                      Estado: <strong>{e.estado.toUpperCase()}</strong>
                    </p>
                    <small>Distancia: {e.distanciaDetectada} cm</small>
                  </div>
                </Popup>
              </Polygon>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};