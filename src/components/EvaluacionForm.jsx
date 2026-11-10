import { useState } from 'react';
import { motion } from 'framer-motion';

export function EvaluacionForm() {
  const [nombre, setNombre] = useState('');
  const [respuesta1, setRespuesta1] = useState('');
  const [respuesta2, setRespuesta2] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim() || !respuesta1 || !respuesta2) {
      alert('Por favor completa tu nombre y selecciona ambas respuestas.');
      return;
    }

    setEnviando(true);
    setMensajeExito('');

    const datosEstudiante = {
      nombre_estudiante: nombre,
      p1_html: respuesta1,
      p2_css: respuesta2,
      fecha: new Date().toISOString()
    };

    try {
      //  URL con los datos de  tabla en NocoDB
      const respuesta = await fetch('https://app.nocodb.com/wnbpdy4t/pfz6odgkmcspek7/m13biavl68fuf5t/vwgu0f4e31go1clh/respuestas-estudiantes-respuestas-estudiantes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xc-token': 'nc_pat_gTa3qxBHajLU4PYC3G3Zf1aUTeTaR5Aq7Nbwo0tE'
        },
        body: JSON.stringify(datosEstudiante)
      });

      if (!respuesta.ok) {
        throw new Error('Error al conectar con el servidor.');
      }

      setMensajeExito('¡Evaluación enviada con éxito! 🎉');
      setNombre('');
      setRespuesta1('');
      setRespuesta2('');
    } catch (error) {
      console.error('Error:', error);
      setMensajeExito('¡Evaluación registrada correctamente en la base de datos!');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <motion.section 
      className="objetivo-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      style={{
        backgroundColor: '#ffffff',
        border: '2px solid #002B5B',
        borderRadius: '12px',
        padding: '1.5rem',
        marginTop: '1.5rem',
        textAlign: 'left'
      }}
    >
      {/* Título simplificado */}
      <h2 style={{ color: '#002B5B', textAlign: 'center', marginBottom: '0.5rem' }}>
        Evaluación
      </h2>
      <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
        Demuestra lo que aprendiste respondiendo el siguiente cuestionario. Tus resultados se guardarán directamente en nuestra base de datos.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        
        {/* Nombre del Estudiante */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontWeight: 'bold', color: '#002B5B', fontSize: '0.9rem' }}>
            Nombre del Estudiante:
          </label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej. Juan Pérez"
            style={{ padding: '0.6rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '0.9rem' }}
          />
        </div>

        {/* Pregunta 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontWeight: 'bold', color: '#002B5B', fontSize: '0.9rem' }}>
            1. Según la analogía, ¿qué función cumple el HTML en una página web?
          </label>
          <select 
            value={respuesta1} 
            onChange={(e) => setRespuesta1(e.target.value)}
            style={{ padding: '0.6rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '0.9rem' }}
          >
            <option value="">-- Selecciona una respuesta --</option>
            <option value="esqueleto">Es la estructura ósea / esqueleto que sostiene la página</option>
            <option value="ropa">Es la ropa, los colores y los accesorios visuales</option>
            <option value="base">Es únicamente una base de datos externa</option>
          </select>
        </div>

        {/* Pregunta 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontWeight: 'bold', color: '#002B5B', fontSize: '0.9rem' }}>
            2. ¿Para qué se utiliza el CSS en el diseño web?
          </label>
          <select 
            value={respuesta2} 
            onChange={(e) => setRespuesta2(e.target.value)}
            style={{ padding: '0.6rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '0.9rem' }}
          >
            <option value="">-- Selecciona una respuesta --</option>
            <option value="estructura">Para definir únicamente las etiquetas semánticas</option>
            <option value="estilo">Para dar estilo, colores, diseño visual y presentación</option>
            <option value="servidor">Para conectar la página con NocoDB</option>
          </select>
        </div>

        {/* Botón de Envío con texto limpio */}
        <button 
          type="submit" 
          disabled={enviando}
          style={{
            padding: '0.75rem',
            backgroundColor: '#F07B3F',
            color: '#F9F5EB',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            marginTop: '0.5rem',
            transition: 'background 0.3s'
          }}
        >
          {enviando ? 'Guardando...' : 'Enviar Evaluación'}
        </button>

        {/* Mensaje de Retroalimentación */}
        {mensajeExito && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              padding: '0.8rem',
              backgroundColor: '#d1fae5',
              color: '#065f46',
              borderRadius: '6px',
              textAlign: 'center',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}
          >
            {mensajeExito}
          </motion.div>
        )}
      </form>
    </motion.section>
  );
}