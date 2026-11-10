import { useState } from 'react';
import { motion } from 'framer-motion';

export function ActividadItem() {
  // Estados para controlar qué elementos del esqueleto HTML están activos
  const [tieneTitulo, setTieneTitulo] = useState(true);
  const [tieneTexto, setTieneTexto] = useState(true);
  const [tieneBoton, setTieneBoton] = useState(true);

  // Estados para que el estudiante escriba su propio contenido
  const [textoTitulo, setTextoTitulo] = useState('Mi primera página web');
  const [textoParrafo, setTextoParrafo] = useState('Hola, estoy aprendiendo cómo funciona HTML y CSS.');

  // Estado para aplicar la "ropa" y diseño (CSS)
  const [estiloAplicado, setEstiloAplicado] = useState(false);

  return (
    <motion.section 
      className="objetivo-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h2>Laboratorio Práctico: Diseña tu Propia Página</h2>
      <p>
        Escribe tu propio título y párrafo para armar la estructura (HTML). Luego, presiona el botón de CSS para ponerle estilo, colores a tu diseño.
      </p>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1.5rem', justifyContent: 'space-between' }}>
        
        {/* Panel de Control y Edición para el Estudiante */}
        <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <h3>1. Escribir el Esqueleto (HTML)</h3>
          
          {/* Input para personalizar el título */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', textAlign: 'left' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#002B5B' }}>
              Texto del Título (&lt;h1&gt;):
            </label>
            <input 
              type="text" 
              value={textoTitulo} 
              onChange={(e) => setTextoTitulo(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #002B5B', fontSize: '0.9rem' }}
            />
            <button 
              onClick={() => setTieneTitulo(!tieneTitulo)}
              style={{ marginTop: '0.2rem', padding: '0.4rem', backgroundColor: tieneTitulo ? '#002B5B' : '#d1d5db', color: tieneTitulo ? '#F9F5EB' : '#374151', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600' }}
            >
              {tieneTitulo ? '✔ Ocultar Título HTML' : '➕ Mostrar Título HTML'}
            </button>
          </div>

          {/* Input para personalizar el párrafo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', textAlign: 'left' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#002B5B' }}>
              Texto del Párrafo (&lt;p&gt;):
            </label>
            <input 
              type="text" 
              value={textoParrafo} 
              onChange={(e) => setTextoParrafo(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #002B5B', fontSize: '0.9rem' }}
            />
            <button 
              onClick={() => setTieneTexto(!tieneTexto)}
              style={{ marginTop: '0.2rem', padding: '0.4rem', backgroundColor: tieneTexto ? '#002B5B' : '#d1d5db', color: tieneTexto ? '#F9F5EB' : '#374151', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600' }}
            >
              {tieneTexto ? '✔ Ocultar Párrafo HTML' : '➕ Mostrar Párrafo HTML'}
            </button>
          </div>

          {/* Botón de control */}
          <button 
            onClick={() => setTieneBoton(!tieneBoton)}
            style={{ padding: '0.5rem', backgroundColor: tieneBoton ? '#002B5B' : '#d1d5db', color: tieneBoton ? '#F9F5EB' : '#374151', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600', textAlign: 'left' }}
          >
            {tieneBoton ? '✔ Botón Interactivo (<button>)' : '➕ Agregar Botón HTML'}
          </button>

          <h3 style={{ marginTop: '0.2rem' }}>2. Elegir el Estilo (CSS)</h3>
          <button 
            onClick={() => setEstiloAplicado(!estiloAplicado)}
            style={{ padding: '0.75rem', backgroundColor: '#F07B3F', color: '#F9F5EB', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          >
            {estiloAplicado ? '🎨 Quitar Estilo CSS (Esqueleto Puro)' : '✨ Aplicar Ropa y Colores CSS'}
          </button>
        </div>

        {/* Vista Previa Interactiva en Vivo */}
        <div style={{ flex: 1, minWidth: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div 
            animate={{ 
              backgroundColor: estiloAplicado ? '#F9F5EB' : '#ffffff',
              borderColor: estiloAplicado ? '#F07B3F' : '#002B5B',
              boxShadow: estiloAplicado ? '0px 12px 30px rgba(240, 123, 63, 0.25)' : 'none'
            }}
            transition={{ duration: 0.4 }}
            style={{
              width: '100%',
              padding: '1.5rem',
              borderRadius: estiloAplicado ? '16px' : '0px',
              border: '3px solid',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              minHeight: '220px',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            {tieneTitulo && (
              <motion.h4 
                initial={{ scale: 0.8, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                key={textoTitulo}
                style={{ color: estiloAplicado ? '#002B5B' : '#111', margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}
              >
                {textoTitulo}
              </motion.h4>
            )}

            {tieneTexto && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                key={textoParrafo}
                style={{ fontSize: '0.9rem', color: estiloAplicado ? '#4b5563' : '#333', margin: 0 }}
              >
                {textoParrafo}
              </motion.p>
            )}

            {tieneBoton && (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.5rem 1.2rem',
                  backgroundColor: estiloAplicado ? '#002B5B' : '#e5e7eb',
                  color: estiloAplicado ? '#F6E2B3' : '#374151',
                  border: 'none',
                  borderRadius: estiloAplicado ? '8px' : '0px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                ¡Clic aquí!
              </motion.button>
            )}

            {!tieneTitulo && !tieneTexto && !tieneBoton && (
              <p style={{ color: '#9ca3af', fontStyle: 'italic' }}>El esqueleto está vacío. Activa los elementos desde el panel izquierdo.</p>
            )}
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}