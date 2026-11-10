import { useState } from 'react';
import { HeaderClase } from './components/HeaderClase';
import { NavegacionRapida } from './components/NavegacionRapida';
import { ObjetivoCard } from './components/ObjetivoCard';
import  MaquetacionCasa  from './components/MaquetacionCasa';
import { ActividadItem } from './components/ActividadItem';
import  EvaluacionForm  from './components/EvaluacionForm';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  // Controlador de vista que se muestra en pantalla 
  const [seccionActiva, setSeccionActiva] = useState('objetivo');

  return (
    <div className="contenedor-principal">
      {/* Encabezado   */}
      <HeaderClase />

      {/* Botones de navegación tipo pestañas */}
      <NavegacionRapida 
        seccionActiva={seccionActiva} 
        setSeccionActiva={setSeccionActiva} 
      />

      {/* Contenido Dinámico  */}
      <main style={{ minHeight: '320px' }}>
        <AnimatePresence mode="wait">
          {seccionActiva === 'objetivo' && (
            <motion.div
              key="objetivo"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.25 }}
            >
              <ObjetivoCard />
            </motion.div>
          )}

          {seccionActiva === 'analogia' && (
            <motion.div
              key="analogia"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.25 }}
            >
              <MaquetacionCasa />
            </motion.div>
          )}

          {seccionActiva === 'laboratorio' && (
            <motion.div
              key="laboratorio"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.25 }}
            >
              <ActividadItem />
            </motion.div>
          )}

          {seccionActiva === 'evaluacion' && (
            <motion.div
              key="evaluacion"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.25 }}
            >
              <EvaluacionForm />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer 
        className="footer-clase"
        style={{ textAlign: 'center', padding: '1rem 0', fontSize: '0.85rem', color: '#274C56' }}
      >
        <p>Desarrollado para el curso de Programación de Aplicaciones Web • Universidad Rafael Landívar</p>
      </footer>
    </div>
  );
}

export default App;