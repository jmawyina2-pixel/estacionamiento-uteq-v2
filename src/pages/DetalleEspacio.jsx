import { useParams, Link } from 'react-router-dom';
import { useEspacios } from '../hooks/useEspacios';
import { useHistorialEspacio } from '../hooks/useHistorialEspacio';

export const DetalleEspacio = () => {
  const { id } = useParams();
  const { espacios } = useEspacios();
  const { historial } = useHistorialEspacio(id);
  const espacio = espacios.find((e) => e.id === id);

  if (!espacio) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <p>Buscando información del sensor...</p>
        <Link to="/estacionamiento" className="btn btn-primary" style={{ marginTop: '1rem' }}>Volver al Panel</Link>
      </div>
    );
  }

  const esLibre = espacio.estado === 'libre';

  return (
    <div className="container" style={{ maxWidth: '900px' }}>
      <Link to="/estacionamiento" style={{ textDecoration: 'none', color: 'var(--brand-blue)', fontWeight: 600, fontSize: '0.9rem' }}>
        ← Volver al Parqueadero
      </Link>

      <div className="card" style={{ marginTop: '1rem', borderTop: `6px solid ${esLibre ? 'var(--status-free-border)' : 'var(--status-busy-border)'}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.6rem' }}>Espacio: {espacio.id}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Sensor ultrasónico en tiempo real</p>
          </div>
          <span className={`nav-badge`} style={{ background: esLibre ? 'var(--status-free-bg)' : 'var(--status-busy-bg)', color: esLibre ? 'var(--status-free-text)' : 'var(--status-busy-text)', fontSize: '0.9rem', padding: '0.4rem 1rem' }}>
            {espacio.estado.toUpperCase()}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem', background: '#f8fafc', padding: '1.25rem', borderRadius: '8px' }}>
          <div><strong style={{ color: 'var(--text-secondary)' }}>Columna:</strong> <div>#{espacio.columna}</div></div>
          <div><strong style={{ color: 'var(--text-secondary)' }}>Número:</strong> <div>#{espacio.numero}</div></div>
          <div><strong style={{ color: 'var(--text-secondary)' }}>Distancia:</strong> <div>{espacio.distanciaDetectada} cm</div></div>
          <div><strong style={{ color: 'var(--text-secondary)' }}>Última Lectura:</strong> <div>{new Date(espacio.fechaHora).toLocaleTimeString()}</div></div>
        </div>

        <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Coordenadas Centrales</h4>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Lat: {espacio.ubicacion.latitud.toFixed(6)} | Lng: {espacio.ubicacion.longitud.toFixed(6)}
        </p>

        <h4 style={{ marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Historial de Transiciones</h4>
        <div style={{ maxHeight: '280px', overflowY: 'auto', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead style={{ background: '#f1f5f9', position: 'sticky', top: 0 }}>
              <tr>
                <th style={{ padding: '0.75rem 1rem' }}>Timestamp</th>
                <th style={{ padding: '0.75rem 1rem' }}>Estado</th>
                <th style={{ padding: '0.75rem 1rem' }}>Distancia</th>
              </tr>
            </thead>
            <tbody>
              {historial.length === 0 ? (
                <tr><td colSpan="3" style={{ padding: '1rem', textAlign: 'center', color: '#94a3b8' }}>Sin registros históricos recientes</td></tr>
              ) : (
                historial.map((h, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '0.65rem 1rem' }}>{new Date(h.fechaHora).toLocaleString()}</td>
                    <td style={{ padding: '0.65rem 1rem', fontWeight: 600, color: h.estado === 'libre' ? 'var(--status-free-text)' : 'var(--status-busy-text)' }}>
                      {h.estado.toUpperCase()}
                    </td>
                    <td style={{ padding: '0.65rem 1rem' }}>{h.distanciaDetectada} cm</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};