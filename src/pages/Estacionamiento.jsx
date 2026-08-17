import { useState, useEffect } from 'react';
import { useEspacios } from '../hooks/useEspacios';
import { ResumenEstacionamiento } from '../components/ResumenEstacionamiento';
import { FiltrosEspacios } from '../components/FiltrosEspacios';
import { MapaEstacionamiento } from '../components/MapaEstacionamiento';
import { CuadriculaEstacionamiento } from '../components/CuadriculaEstacionamiento';
import { inicializarEspaciosRTDB, startTelemetrySimulation } from '../services/simulator';

export const Estacionamiento = () => {
  const { espacios, loading } = useEspacios();
  const [filtroCol, setFiltroCol] = useState('todas');
  const [filtroEstado, setFiltroEstado] = useState('todos');

  useEffect(() => {
    const timer = startTelemetrySimulation();
    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Sincronizando con Firebase RTDB...</p>
      </div>
    );
  }

  const espaciosFiltrados = espacios.filter((e) => {
    const matchCol = filtroCol === 'todas' || e.columna === Number(filtroCol);
    const matchEstado = filtroEstado === 'todos' || e.estado === filtroEstado;
    return matchCol && matchEstado;
  });

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--text-primary)' }}>Parqueadero Central UTEQ</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>80 Sensores Telemáticos activos</p>
        </div>
        <button onClick={inicializarEspaciosRTDB} className="btn btn-secondary">
          ⚡ Regenerar / Resetear 80 Espacios
        </button>
      </div>

      <ResumenEstacionamiento espacios={espacios} />
      <FiltrosEspacios
        filtroCol={filtroCol}
        setFiltroCol={setFiltroCol}
        filtroEstado={filtroEstado}
        setFiltroEstado={setFiltroEstado}
      />
      <MapaEstacionamiento espacios={espacios} />
      <CuadriculaEstacionamiento espacios={espaciosFiltrados} />
    </div>
  );
};