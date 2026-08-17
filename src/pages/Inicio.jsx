import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className="container" style={{ maxWidth: '850px', textAlign: 'center', marginTop: '2rem' }}>
      <div className="card" style={{ padding: '3.5rem 2rem' }}>
        <span style={{ fontSize: '3rem' }}>🚗</span>
        <h1 style={{ fontSize: '2.25rem', color: 'var(--uteq-dark)', marginTop: '1rem' }}>
          Sistema de Estacionamiento Inteligente
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '1.25rem auto 2rem auto', maxWidth: '600px' }}>
          Plataforma telemática en tiempo real para el monitoreo de 80 plazas de parqueo ubicadas en el campus de la Universidad Técnica Estatal de Quevedo mediante Firebase RTDB y sensores ultrasónicos.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/estacionamiento" className="btn btn-primary">
            Ver Monitor en Tiempo Real →
          </Link>
        </div>
      </div>
    </div>
  );
};