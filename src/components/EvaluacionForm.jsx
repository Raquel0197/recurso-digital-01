import React, { useState } from 'react';

export default function EvaluacionForm() {
  const [nombre, setNombre] = useState('');
  const [p1Html, setP1Html] = useState('');
  const [p2Css, setP2Css] = useState('');
  const [mensaje, setMensaje] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje({ texto: 'Enviando respuesta...', tipo: 'info' });

    try {
      // URL completa a API de NocoDB
     const response = await fetch('https://app.nocodb.com/api/v2/tables/m13biavl68fuf5t/records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xc-token': 'nc_pat_gTa3qxBHajLU4PYC3G3Zf1aUTeTaR5Aq7Nbwo0tE',
        },
        body: JSON.stringify({
          "Nombre del Estudiante": nombre,
          "p1_html": p1Html,
          "p2_css": p2Css
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en el servidor: ${response.status}`);
      }

      const data = await response.json();
      setMensaje({ texto: '¡Respuesta guardada con éxito!', tipo: 'exito' });
      
      // Limpiar campos del formulario
      setNombre('');
      setP1Html('');
      setP2Css('');

    } catch (error) {
      console.error('Error detallado:', error);
      setMensaje({ texto: 'Hubo un error al enviar. Revisa la consola.', tipo: 'error' });
    }
  };

  return (
    <div style={{ backgroundColor: '#274C56', color: '#F6E2B3', padding: '2rem', borderRadius: '8px', maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Evaluación de HTML y CSS</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.3rem' }}>Nombre del Estudiante:</label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            required 
            style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: 'none', backgroundColor: '#F9F5EB', color: '#274C56' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.3rem' }}>1. ¿Qué función cumple el HTML en una página web?</label>
          <input 
            type="text" 
            value={p1Html} 
            onChange={(e) => setP1Html(e.target.value)} 
            required 
            style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: 'none', backgroundColor: '#F9F5EB', color: '#274C56' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.3rem' }}>2. ¿Para qué se utiliza el CSS en el diseño web?</label>
          <input 
            type="text" 
            value={p2Css} 
            onChange={(e) => setP2Css(e.target.value)} 
            required 
            style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: 'none', backgroundColor: '#F9F5EB', color: '#274C56' }}
          />
        </div>

        <button 
          type="submit" 
          style={{ backgroundColor: '#D96C2C', color: '#fff', padding: '0.75rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', marginTop: '0.5rem' }}
        >
          Enviar Respuesta
        </button>
      </form>

      {mensaje && (
        <p style={{ marginTop: '1rem', textAlign: 'center', fontWeight: 'bold', color: mensaje.tipo === 'error' ? '#ff8787' : '#69db7c' }}>
          {mensaje.texto}
        </p>
      )}
    </div>
  );
}