import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function MaquetacionCasa() {
  const [seccionActiva, setSeccionActiva] = useState('header');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ 
        backgroundColor: '#ffffff', 
        color: '#274C56', 
        padding: '2rem', 
        borderRadius: '8px', 
        border: '1px solid #274C56', 
        maxWidth: '650px', 
        margin: '0 auto' 
      }}
    >
      <h3 style={{ textAlign: 'center', color: '#274C56', marginBottom: '1rem' }}>¿como interactua html y css dentro de una pagina web?</h3>
      
      {/* Analogía 1: HTML la Estructura / Esqueleto */}
      <div style={{ backgroundColor: '#FFF9F2', borderLeft: '4px solid #D96C2C', padding: '1rem', borderRadius: '6px', marginBottom: '1rem' }}>
        <p style={{ fontWeight: 'bold', margin: 0, color: '#D96C2C' }}>🦴   El Esqueleto Humano y la Casa (HTML)</p>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', lineHeight: '1.4' }}>
          Así como el esqueleto da forma al cuerpo o los cimientos sostienen una casa,<strong>HTML</strong> es la estructura lógica y los espacios semánticos indispensables de la página web.
        </p>
      </div>

      {/* Analogía 2: CSS como la Ropa / Estética */}
      <div style={{ backgroundColor: '#F0F7F9', borderLeft: '4px solid #274C56', padding: '1rem', borderRadius: '6px', marginBottom: '1.5rem' }}>
        <p style={{ fontWeight: 'bold', margin: 0, color: '#274C56' }}>👕  La Ropa y la Pintura (CSS)</p>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', lineHeight: '1.4' }}>
          La <strong>ropa que vestimos</strong> o la pintura de una casa no cambian la estructura ósea ni las paredes; simplemente aportan color, estilo, tipografías y presentación estética. Eso es exactamente lo que hace <strong>CSS</strong> dentro de una pagina web.
        </p>
      </div>

      <h4 style={{ textAlign: 'center', marginTop: '1.5rem', marginBottom: '1rem' }}>La Casa en Construcción (Maquetación HTML)</h4>
      <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#666', marginBottom: '1rem' }}>
        Haga clic en cada parte de la estructura para ver su función:
      </p>

      {/* Botones Interactivos */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        <button 
          onClick={() => setSeccionActiva('header')}
          style={{ 
            backgroundColor: seccionActiva === 'header' ? '#D96C2C' : '#274C56', 
            color: '#fff', 
            border: 'none', 
            padding: '0.5rem 1rem', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            fontWeight: 'bold' 
          }}
        >
          Fachada (&lt;header&gt;)
        </button>
        <button 
          onClick={() => setSeccionActiva('main')}
          style={{ 
            backgroundColor: seccionActiva === 'main' ? '#D96C2C' : '#274C56', 
            color: '#fff', 
            border: 'none', 
            padding: '0.5rem 1rem', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            fontWeight: 'bold' 
          }}
        >
          Sala Principal (&lt;main&gt;)
        </button>
        <button 
          onClick={() => setSeccionActiva('footer')}
          style={{ 
            backgroundColor: seccionActiva === 'footer' ? '#D96C2C' : '#274C56', 
            color: '#fff', 
            border: 'none', 
            padding: '0.5rem 1rem', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            fontWeight: 'bold' 
          }}
        >
          Cimientos (&lt;footer&gt;)
        </button>
      </div>

      {/* Detalle interactivo */}
      <motion.div 
        key={seccionActiva}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        style={{ backgroundColor: '#F9F5EB', padding: '1rem', borderRadius: '6px', borderLeft: '4px solid #D96C2C' }}
      >
        {seccionActiva === 'header' && (
          <div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#274C56' }}>La Fachada (&lt;header&gt;)</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Es la parte superior que da la bienvenida a la página web, donde se ubican el título, el menú y el logotipo.
            </p>
          </div>
        )}
        {seccionActiva === 'main' && (
          <div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#274C56' }}>La Sala Principal (&lt;main&gt;)</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Es el espacio central de la página donde se presenta el contenido educativo principal.
            </p>
          </div>
        )}
        {seccionActiva === 'footer' && (
          <div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#274C56' }}>Los Cimientos (&lt;footer&gt;)</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Ubicado al final de la página web con información sobre el autor, derechos reservados o enlaces secundarios.
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}