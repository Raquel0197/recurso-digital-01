import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function MaquetacionCasa() {
  const [seccionSeleccionada, setSeccionSeleccionada] = useState('header');

  const contenidoPartes = {
    header: {
      titulo: 'La Fachada y el Rótulo de Entrada (<header>)',
      texto: 'Así como una casa tiene una fachada principal que da la bienvenida, en una página web el <header> contiene el título principal, el logotipo y la navegación básica.',
      colorBorde: '#D96C2C'
    },
    main: {
      titulo: 'La Sala Principal y Habitaciones (<main>)',
      texto: 'Es el corazón de la casa o de la página web. Aquí adentro colocamos todo el contenido importante: textos, imágenes, formularios y las secciones de nuestro laboratorio.',
      colorBorde: '#274C56'
    },
    footer: {
      titulo: 'Los Cimientos y el Patio Trasero (<footer>)',
      texto: 'Es la base final y el soporte de abajo. Aquí se colocan los créditos, el autor de la página, enlaces de contacto y derechos de autor.',
      colorBorde: '#3E8E7E'
    }
  };

  return (
    <motion.section 
      className="objetivo-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{
        backgroundColor: '#ffffff',
        border: '2px solid #274C56',
        borderRadius: '12px',
        padding: '1.5rem',
        textAlign: 'left'
      }}
    >
      {/* Título actualizado */}
      <h2 style={{ color: '#274C56', textAlign: 'center', marginBottom: '0.4rem' }}>
        Estructura de Diseño Web
      </h2>
      <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '1.2rem', fontSize: '0.92rem', lineHeight: '1.4' }}>
        Para entender el desarrollo web usamos dos grandes ideas: <strong>Construir una casa</strong> (para organizar las etiquetas estructurales) y <strong>Vestir el cuerpo humano</strong> (para separar el esqueleto HTML del diseño CSS).
      </p>

      {/* Puente conceptual */}
      <div style={{ backgroundColor: '#fdf8ed', padding: '0.8rem 1rem', borderRadius: '8px', borderLeft: '4px solid #D96C2C', marginBottom: '1.5rem' }}>
        <p style={{ fontSize: '0.85rem', color: '#374151', margin: 0, lineHeight: '1.4' }}>
          💡 <strong>Paso 1 (La Casa):</strong> Primero ordenamos los espacios grandes de la página web con etiquetas semánticas. 
          <br />
          💡 <strong>Paso 2 (El Cuerpo,la Ropa que le da color y estilo):</strong> Luego, dentro de esos espacios, creamos el contenido (huesos/HTML) y le aplicamos colores (estilo/CSS) en el laboratorio.
        </p>
      </div>

      {/* Subtítulo limpio sin "Explora la Analogía 1" */}
      <h3 style={{ color: '#274C56', fontSize: '1.05rem', textAlign: 'center', marginBottom: '0.8rem' }}>
        La Casa en Construcción (Maquetación HTML)
      </h3>
      <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#6b7280', marginBottom: '1rem' }}>
        Haz clic en cada parte de la casa para ver su función:
      </p>

      {/* Botones de navegación de la casa */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
        <button 
          onClick={() => setSeccionSeleccionada('header')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: seccionSeleccionada === 'header' ? '#D96C2C' : '#274C56',
            color: '#F6E2B3',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.85rem'
          }}
        >
          🏠 Fachada (&lt;header&gt;)
        </button>

        <button 
          onClick={() => setSeccionSeleccionada('main')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: seccionSeleccionada === 'main' ? '#D96C2C' : '#274C56',
            color: '#F6E2B3',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.85rem'
          }}
        >
          🛋️ Sala Principal (&lt;main&gt;)
        </button>

        <button 
          onClick={() => setSeccionSeleccionada('footer')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: seccionSeleccionada === 'footer' ? '#D96C2C' : '#274C56',
            color: '#F6E2B3',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.85rem'
          }}
        >
          🧱 Cimientos (&lt;footer&gt;)
        </button>
      </div>

      {/* Tarjeta de información interactiva */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={seccionSeleccionada}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: '#f9fafb',
            borderLeft: `5px solid ${contenidoPartes[seccionSeleccionada].colorBorde}`,
            borderTop: '1px solid #e5e7eb',
            borderRight: '1px solid #e5e7eb',
            borderBottom: '1px solid #e5e7eb',
            borderRadius: '0 8px 8px 0',
            padding: '1.2rem'
          }}
        >
          <h4 style={{ color: '#274C56', fontSize: '1rem', marginBottom: '0.4rem' }}>
            {contenidoPartes[seccionSeleccionada].titulo}
          </h4>
          <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
            {contenidoPartes[seccionSeleccionada].texto}
          </p>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}