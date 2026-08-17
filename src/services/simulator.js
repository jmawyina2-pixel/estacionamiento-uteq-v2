import { db } from './firebase';
import { ref, set, update } from 'firebase/database';
import { calcularGrid80Espacios } from './geometria';

export const inicializarEspaciosRTDB = async () => {
  const catalogo = calcularGrid80Espacios();
  // Sobrescribe limpiamente el nodo para garantizar exactamente 80 registros
  await set(ref(db, 'espacios'), catalogo);
  return catalogo;
};

export const startTelemetrySimulation = () => {
  return setInterval(() => {
    const col = Math.floor(Math.random() * 4) + 1;
    const fila = Math.floor(Math.random() * 20) + 1;
    const id = `ESP-C0${col}-${fila < 10 ? '0' + fila : fila}`;

    const distancia = Math.random() > 0.5
      ? Number((55 + Math.random() * 120).toFixed(1))
      : Number((15 + Math.random() * 30).toFixed(1));
    const estado = distancia <= 50 ? 'ocupado' : 'libre';
    const timestamp = Date.now();

    const payload = {};
    payload[`espacios/${id}/distanciaDetectada`] = distancia;
    payload[`espacios/${id}/estado`] = estado;
    payload[`espacios/${id}/fechaHora`] = timestamp;
    payload[`historial/${id}/${timestamp}`] = { distanciaDetectada: distancia, estado, fechaHora: timestamp };

    update(ref(db), payload);
  }, 3200);
};