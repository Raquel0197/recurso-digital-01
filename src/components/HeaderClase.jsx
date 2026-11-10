import { motion } from 'framer-motion';

export function HeaderClase() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 120 }}
      dragElastic={0.4}
      whileTap={{ cursor: "grabbing", scale: 0.99 }}
      style={{
        backgroundColor: '#274C56',
        color: '#F6E2B3',
        padding: '2rem 1.5rem',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        marginBottom: '1.5rem',
        cursor: 'grab',
        position: 'relative',
        zIndex: 10
      }}
    >
      {/* Barra superior con botón anaranjado y docente */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%', 
        marginBottom: '1rem',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <span style={{ 
          backgroundColor: '#D96C2C', 
          color: '#F6E2B3', 
          padding: '0.40rem 1rem', 
          borderRadius: '20px', 
          fontWeight: 'bold', 
          fontSize: '0.85rem' 
        }}>
          Ciclo Básico • Área de TIC
        </span>
        <span style={{ color: '#F6E2B3', fontWeight: '600', fontSize: '0.9rem' }}>
          Docente: Raquel Aju
        </span>
      </div>

      {/* Título dividido en dos líneas */}
      <h1 style={{ color: '#ffffff', fontSize: '1.6rem', marginBottom: '0.5rem', lineHeight: '1.3' }}>
        Estructura y Estilo de una Página Web <br />
        <span style={{ color: '#F6E2B3', fontSize: '1.4rem' }}>HTML y CSS Básico</span>
      </h1>
      
      <p style={{ color: '#E7A84E', fontSize: '1rem', fontWeight: '500', margin: 0 }}>
        Plan de Clase Digital Interactivo
      </p>

      {/* Indicador visual sutil para arrastrar */}
      <div style={{
        width: '40px',
        height: '4px',
        backgroundColor: 'rgba(246, 226, 179, 0.4)',
        borderRadius: '2px',
        margin: '1rem auto 0 auto'
      }} title="Arrastra hacia abajo" />
    </motion.header>
  );
}