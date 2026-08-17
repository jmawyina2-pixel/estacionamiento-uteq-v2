export const FiltrosEspacios = ({ filtroCol, setFiltroCol, filtroEstado, setFiltroEstado }) => {
  return (
    <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', padding: '1rem 1.5rem' }}>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, marginRight: '0.5rem', color: 'var(--text-secondary)' }}>COLUMNA:</label>
          <select 
            value={filtroCol} 
            onChange={(e) => setFiltroCol(e.target.value)}
            style={{ padding: '0.4rem 0.8rem', borderRadius: '6px', border: '1px solid var(--border-color)', fontWeight: 500 }}
          >
            <option value="todas">Todas (1 a 4)</option>
            <option value="1">Columna 1</option>
            <option value="2">Columna 2</option>
            <option value="3">Columna 3</option>
            <option value="4">Columna 4</option>
          </select>
        </div>

        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, marginRight: '0.5rem', color: 'var(--text-secondary)' }}>ESTADO:</label>
          <select 
            value={filtroEstado} 
            onChange={(e) => setFiltroEstado(e.target.value)}
            style={{ padding: '0.4rem 0.8rem', borderRadius: '6px', border: '1px solid var(--border-color)', fontWeight: 500 }}
          >
            <option value="todos">Todos los Estados</option>
            <option value="libre">Solo Libres</option>
            <option value="ocupado">Solo Ocupados</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'var(--status-free-border)' }}></span> Libre (&gt; 50 cm)
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'var(--status-busy-border)' }}></span> Ocupado (≤ 50 cm)
        </span>
      </div>
    </div>
  );
};