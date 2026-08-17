export const ResumenEstacionamiento = ({ espacios }) => {
  const total = espacios.length;
  const libres = espacios.filter(e => e.estado === 'libre').length;
  const ocupados = espacios.filter(e => e.estado === 'ocupado').length;
  const porcentajeDisponible = total > 0 ? ((libres / total) * 100).toFixed(1) : 0;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
      <div className="card" style={{ borderLeft: '5px solid #64748b' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600 }}>TOTAL ESPACIOS</p>
        <h2 style={{ fontSize: '2rem', marginTop: '0.25rem' }}>{total}</h2>
      </div>
      
      <div className="card" style={{ borderLeft: '5px solid var(--status-free-border)', background: '#f0fdf4' }}>
        <p style={{ color: 'var(--status-free-text)', fontSize: '0.85rem', fontWeight: 600 }}>DISPONIBLES</p>
        <h2 style={{ fontSize: '2rem', marginTop: '0.25rem', color: 'var(--status-free-text)' }}>{libres}</h2>
      </div>
      
      <div className="card" style={{ borderLeft: '5px solid var(--status-busy-border)', background: '#fef2f2' }}>
        <p style={{ color: 'var(--status-busy-text)', fontSize: '0.85rem', fontWeight: 600 }}>OCUPADOS</p>
        <h2 style={{ fontSize: '2rem', marginTop: '0.25rem', color: 'var(--status-busy-text)' }}>{ocupados}</h2>
      </div>
      
      <div className="card" style={{ borderLeft: '5px solid var(--brand-blue)', background: '#f0f9ff' }}>
        <p style={{ color: '#0369a1', fontSize: '0.85rem', fontWeight: 600 }}>DISPONIBILIDAD</p>
        <h2 style={{ fontSize: '2rem', marginTop: '0.25rem', color: '#0369a1' }}>{porcentajeDisponible}%</h2>
      </div>
    </div>
  );
};