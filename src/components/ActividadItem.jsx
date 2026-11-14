import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ActividadItem() {
  // Estados iniciales en false para que el esqueleto empiece vacío
  const [tieneTitulo, setTieneTitulo] = useState(false);
  const [tieneTexto, setTieneTexto] = useState(false);
  const [tieneBoton, setTieneBoton] = useState(false);

  const [textoTitulo, setTextoTitulo] = useState('Mi primera página web');
  const [textoParrafo, setTextoParrafo] = useState('Hola, estoy aprendiendo cómo funciona HTML y CSS.');

  const [estiloAplicado, setEstiloAplicado] = useState(false);

  return (
    <motion.section
      className="objetivo-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      style={{
        backgroundColor: '#ffffff',
        border: '2px solid #3E8E7E',
        borderRadius: '12px',
        padding: '1.5rem',
        textAlign: 'left'
      }}
    >
      <h2 style={{ color: '#274C56', textAlign: 'center', marginBottom: '0.5rem' }}>
        Laboratorio Práctico: Diseña tu Propia Página
      </h2>
      <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
        Escribe tu propio título y párrafo para armar el esqueleto (HTML). Luego descubre cómo el diseño (CSS) le da vida.
      </p>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        
        {/* Panel Izquierdo: Controles */}
        <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <h3 style={{ color: '#274C56', fontSize: '1.1rem' }}>1. Escribir el Esqueleto (HTML)</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#274C56' }}>
              Texto del Título (&lt;h1&gt;):
            </label>
            <input
              type="text"
              value={textoTitulo}
              onChange={(e) => setTextoTitulo(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #274C56', fontSize: '0.9rem' }}
            />
            <button
              onClick={() => setTieneTitulo(!tieneTitulo)}
              style={{
                marginTop: '0.2rem',
                padding: '0.4rem',
                backgroundColor: tieneTitulo ? '#274C56' : '#d1d5db',
                color: tieneTitulo ? '#fff' : '#374151',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.85rem'
              }}
            >
              {tieneTitulo ? '✓ Ocultar Título HTML' : '+ Mostrar Título HTML'}
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#274C56' }}>
              Texto del Párrafo (&lt;p&gt;):
            </label>
            <input
              type="text"
              value={textoParrafo}
              onChange={(e) => setTextoParrafo(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #274C56', fontSize: '0.9rem' }}
            />
            <button
              onClick={() => setTieneTexto(!tieneTexto)}
              style={{
                marginTop: '0.2rem',
                padding: '0.4rem',
                backgroundColor: tieneTexto ? '#274C56' : '#d1d5db',
                color: tieneTexto ? '#fff' : '#374151',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.85rem'
              }}
            >
              {tieneTexto ? '✓ Ocultar Párrafo HTML' : '+ Mostrar Párrafo HTML'}
            </button>
          </div>

          <button
            onClick={() => setTieneBoton(!tieneBoton)}
            style={{
              padding: '0.5rem',
              backgroundColor: tieneBoton ? '#274C56' : '#d1d5db',
              color: tieneBoton ? '#fff' : '#374151',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.85rem'
            }}
          >
            {tieneBoton ? '✓ Botón Interactivo (<button>)' : '+ Agregar Botón HTML'}
          </button>

          {/* Sección teórica del CSS integrada */}
          <div style={{ backgroundColor: '#fff8ed', padding: '0.8rem', borderRadius: '8px', borderLeft: '4px solid #D96C2C', marginTop: '0.5rem' }}>
            <h4 style={{ color: '#D96C2C', fontSize: '0.9rem', marginBottom: '0.3rem' }}>🎨 ¿Qué hace el CSS aquí?</h4>
            <p style={{ fontSize: '0.8rem', color: '#374151', lineHeight: '1.4', margin: 0 }}>
              El CSS funciona como la <strong>ropa en el ser humano que le da colores y estilo</strong>. Toma los elementos planos de HTML y les añade diseño, tipografías agradables, bordes redondeados y colores institucionales.
            </p>
          </div>

          <h3 style={{ color: '#274C56', fontSize: '1.1rem', marginTop: '0.5rem' }}>2. Elegir el Estilo (CSS)</h3>
          <button
            onClick={() => setEstiloAplicado(!estiloAplicado)}
            style={{
              padding: '0.75rem',
              backgroundColor: '#D96C2C',
              color: '#F6E2B3',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}
          >
            {estiloAplicado ? '🎨 Quitar Estilo CSS (Esqueleto Puro)' : '✨ Aplicar estilo y Colores CSS'}
          </button>
        </div>

        {/* Vista Previa Interactiva en Vivo */}
        <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#274C56', marginBottom: '0.5rem' }}>Vista Previa en el Navegador:</span>
          
          <motion.div
            animate={{
              backgroundColor: estiloAplicado ? '#F6E2B3' : '#ffffff',
              borderColor: estiloAplicado ? '#D96C2C' : '#274C56',
              boxShadow: estiloAplicado ? '0px 12px 30px rgba(217, 108, 44, 0.25)' : 'none'
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
                style={{ color: estiloAplicado ? '#274C56' : '#111', margin: 0, fontSize: '1.2rem' }}
              >
                {textoTitulo}
              </motion.h4>
            )}

            {tieneTexto && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={textoParrafo}
                style={{ fontSize: '0.9rem', color: estiloAplicado ? '#374151' : '#333', margin: 0 }}
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
                  backgroundColor: estiloAplicado ? '#274C56' : '#e5e7eb',
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
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#9ca3af', fontStyle: 'italic' }}>
                El esqueleto está vacío. Activa los elementos desde el panel izquierdo.
              </motion.p>
            )}
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}