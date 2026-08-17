// Bounding box oficial UTEQ delimitado por los 4 puntos
export const BOUNDS_UTEQ = {
  norte: -1.0122617572453996,
  sur: -1.012570971500396,
  oeste: -79.4682998912032,
  este: -79.46746240847104
};

export const calcularGrid80Espacios = () => {
  const dLat = (BOUNDS_UTEQ.sur - BOUNDS_UTEQ.norte) / 20; // 20 filas
  const dLng = (BOUNDS_UTEQ.este - BOUNDS_UTEQ.oeste) / 4;   // 4 columnas
  const catalogo = {};

  for (let col = 1; col <= 4; col++) {
    for (let fila = 1; fila <= 20; fila++) {
      const id = `ESP-C0${col}-${fila < 10 ? '0' + fila : fila}`;
      const n = BOUNDS_UTEQ.norte + (fila - 1) * dLat;
      const s = BOUNDS_UTEQ.norte + fila * dLat;
      const o = BOUNDS_UTEQ.oeste + (col - 1) * dLng;
      const e = BOUNDS_UTEQ.oeste + col * dLng;

      const distancia = Math.random() > 0.45 
        ? Number((52 + Math.random() * 140).toFixed(1)) 
        : Number((12 + Math.random() * 35).toFixed(1));
      const estado = distancia <= 50 ? 'ocupado' : 'libre';
      const timestamp = Date.now();

      catalogo[id] = {
        id,
        columna: col,
        numero: fila,
        distanciaDetectada: distancia,
        estado,
        fechaHora: timestamp,
        ubicacion: {
          nombre: "Parqueadero Central UTEQ",
          latitud: (n + s) / 2,
          longitud: (o + e) / 2,
          boundingBox: { norte: n, sur: s, oeste: o, este: e }
        }
      };
    }
  }
  return catalogo;
};