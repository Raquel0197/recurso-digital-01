import React, { useState } from 'react';
import { HeaderClase } from './components/HeaderClase';
import MaquetacionCasa from './components/MaquetacionCasa';
import ActividadItem from './components/ActividadItem';
import EvaluacionForm from './components/EvaluacionForm';
import ObjetivoCard from './components/ObjetivoCard';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState('objetivo');

  return (
    <div className="contenedor-principal" style={{ paddingBottom: '2rem' }}>
      {/* Encabezado con los botones integrados */}
      <HeaderClase 
        seccionActiva={seccionActiva} 
        setSeccionActiva={setSeccionActiva} 
      />
      
      {/* Contenido Dinámico */}
      <main style={{ minHeight: '320px', maxWidth: '750px', margin: '0 auto', padding: '0 1rem' }}>
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
        style={{ textAlign: 'center', padding: '2rem 0 1rem 0', fontSize: '0.85rem', color: '#274C56' }}
      >
        <p>Desarrollado por Raquel Aju • 2026 • Universidad Rafael Landívar</p>
      </footer>
    </div>
  );
}