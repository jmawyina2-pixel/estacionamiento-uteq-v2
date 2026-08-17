import { EspacioCard } from './EspacioCard';

export const CuadriculaEstacionamiento = ({ espacios }) => {
  const columnas = [1, 2, 3, 4];

  return (
    <div className="columnas-grid">
      {columnas.map((col) => {
        const slots = espacios
          .filter((e) => e.columna === col)
          .sort((a, b) => a.numero - b.numero);

        return (
          <div key={col} className="columna-wrapper">
            <div className="columna-header">COLUMNA 0{col}</div>
            {slots.length === 0 ? (
              <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8', padding: '1rem' }}>Sin coincidencias</p>
            ) : (
              slots.map((slot) => <EspacioCard key={slot.id} espacio={slot} />)
            )}
          </div>
        );
      })}
    </div>
  );
};