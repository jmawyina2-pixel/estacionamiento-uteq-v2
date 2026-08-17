import { useNavigate } from 'react-router-dom';

export const EspacioCard = ({ espacio }) => {
  const navigate = useNavigate();
  const esLibre = espacio.estado === 'libre';

  return (
    <div
      onClick={() => navigate(`/espacios/${espacio.id}`)}
      className={`slot-item ${esLibre ? 'slot-libre' : 'slot-ocupado'}`}
    >
      <div>
        <div className="slot-id">{espacio.id}</div>
        <span style={{ fontSize: '0.75rem', opacity: 0.85 }}>Fila #{espacio.numero}</span>
      </div>
      <div className="slot-meta">
        <strong style={{ textTransform: 'uppercase' }}>{espacio.estado}</strong>
        <span>{espacio.distanciaDetectada} cm</span>
      </div>
    </div>
  );
};