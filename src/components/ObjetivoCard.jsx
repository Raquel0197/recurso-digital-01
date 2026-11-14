import { motion } from 'framer-motion';

export default function ObjetivoCard() {
  return (
    <motion.section
      className="objetivo-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{
        backgroundColor: '#ffffff',
        border: '2px solid #F07B3F',
        borderRadius: '12px',
        padding: '1.5rem',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        marginBottom: '1.5rem'
      }}
    >
      {/* Competencia */}
      <div style={{ marginBottom: '1.2rem' }}>
        <span style={{
          backgroundColor: '#002B5B',
          color: '#F9F5EB',
          padding: '0.3rem 1rem',
          borderRadius: '20px',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          display: 'inline-block',
          marginBottom: '0.5rem'
        }}>
          Competencia
        </span>
        <p style={{ color: '#002B5B', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>
          Diferencia la estructura lógica de una página web (HTML) de su diseño visual y presentación estética (CSS) mediante analogías y recursos interactivos.
        </p>
      </div>

      {/* Indicador de Logro */}
      <div>
        <span style={{
          backgroundColor: '#F07B3F',
          color: '#ffffff',
          padding: '0.3rem 1rem',
          borderRadius: '20px',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          display: 'inline-block',
          marginBottom: '0.5rem'
        }}>
          Indicador de Logro
        </span>
        <p style={{ color: '#002B5B', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>
          Construye una estructura web básica utilizando etiquetas HTML y aplicaciones de estilos dinámicos interactivos para comprender la separación entre contenido y diseño.
        </p>
      </div>
    </motion.section>
  );
}