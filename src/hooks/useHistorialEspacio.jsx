import { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { ref, onValue } from 'firebase/database';

export const useHistorialEspacio = (id) => {
  const [historial, setHistorial] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const histRef = ref(db, `historial/${id}`);
    const unsubscribe = onValue(
      histRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const list = Object.values(data).sort((a, b) => b.fechaHora - a.fechaHora);
          setHistorial(list);
        } else {
          setHistorial([]);
        }
        setLoading(false);
      },
      (err) => {
        console.error("RTDB Historial Error:", err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [id]);

  return { historial, loading };
};