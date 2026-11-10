import { useState } from 'react';
import { motion } from 'framer-motion';

export function MaquetacionCasa() {
  const [seccionActiva, setSeccionActiva] = useState('header');

  const secciones = {
    header: {
      etiqueta: '<header>',
      parteCasa: 'La Fachada y el Rótulo de Entrada',
      descripcion: 'Es la parte superior que recibe a los visitantes. Contiene el título principal, el logotipo y la navegación básica de la página.'
    },
    main: {
      etiqueta: '<main>',
      parteCasa: 'La Sala y las Habitaciones Principales',
      descripcion: 'Es el corazón de la casa donde ocurre la acción. Aquí va el contenido principal: textos, imágenes y actividades interactivas.'
    },
    footer: {
      etiqueta: '<footer>',
      parteCasa: 'Los Cimientos y el Patio Trasero',
      descripcion: 'Es la base final donde se colocan los créditos, el nombre del autor, enlaces de contacto y derechos de autor.'
    }
  };

  return (
    <motion.section 
      className="objetivo-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2>La Casa en Construcción (Maquetación Web)</h2>
      <p>
        Así como una casa se divide en espacios con funciones específicas, una página web usa etiquetas semánticas para ordenar su contenido. Haz clic en cada parte de la casa:
      </p>

      {/* Botones interactivos de selección */}
      <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.2rem' }}>
        <button 
          onClick={() => setSeccionActiva('header')}
          style={{
            padding: '0.6rem 1.2rem',
            backgroundColor: seccionActiva === 'header' ? '#F07B3F' : '#002B5B',
            color: '#F9F5EB',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          🏠 Fachada (&lt;header&gt;)
        </button>

        <button 
          onClick={() => setSeccionActiva('main')}
          style={{
            padding: '0.6rem 1.2rem',
            backgroundColor: seccionActiva === 'main' ? '#F07B3F' : '#002B5B',
            color: '#F9F5EB',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          🛋️ Sala Principal (&lt;main&gt;)
        </button>

        <button 
          onClick={() => setSeccionActiva('footer')}
          style={{
            padding: '0.6rem 1.2rem',
            backgroundColor: seccionActiva === 'footer' ? '#F07B3F' : '#002B5B',
            color: '#F9F5EB',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          🧱 Cimientos (&lt;footer&gt;)
        </button>
      </div>

      {/* Tarjeta de explicación animada */}
      <motion.div
        key={seccionActiva}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          marginTop: '1.5rem',
          padding: '1.5rem',
          backgroundColor: '#F9F5EB',
          borderLeft: '6px solid #EA5455',
          borderRadius: '10px',
          textAlign: 'left'
        }}
      >
        <span style={{ 
          backgroundColor: '#002B5B', 
          color: '#F9F5EB', 
          padding: '0.2rem 0.6rem', 
          borderRadius: '4px', 
          fontFamily: 'monospace',
          fontWeight: 'bold'
        }}>
          {secciones[seccionActiva].etiqueta}
        </span>
        <h3 style={{ marginTop: '0.6rem', color: '#002B5B' }}>
          {secciones[seccionActiva].parteCasa}
        </h3>
        <p style={{ marginTop: '0.4rem', color: '#374151' }}>
          {secciones[seccionActiva].descripcion}
        </p>
      </motion.div>
    </motion.section>
  );
}