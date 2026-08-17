import { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { ref, onValue } from 'firebase/database';

export const useEspacios = () => {
  const [espacios, setEspacios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const espaciosRef = ref(db, 'espacios');
    const unsubscribe = onValue(
      espaciosRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Filtra estrictamente los 80 cajones de estacionamiento
          const items = Object.values(data).filter(
            (item) => item?.id && /^ESP-C0[1-4]-(0[1-9]|1[0-9]|20)$/.test(item.id)
          );
          setEspacios(items);
        } else {
          setEspacios([]);
        }
        setLoading(false);
      },
      (err) => {
        console.error("RTDB Error:", err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { espacios, loading };
};