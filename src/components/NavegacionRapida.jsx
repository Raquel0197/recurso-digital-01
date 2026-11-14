export function NavegacionRapida({ seccionActiva, setSeccionActiva }) {
  const pestanas = [
    { id: 'objetivo', label: 'Competencia' },
    { id: 'analogia', label: ' Clase' },
    { id: 'laboratorio', label: 'Actividad' },
    { id: 'evaluacion', label: ' Evaluación' }
  ];

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      flexWrap: 'wrap',
      margin: '0 0 1.2rem 0',
      padding: '0.5rem',
      borderRadius: '10px',
      backgroundColor: 'rgba(39, 76, 86, 0.08)'
    }}>
      {pestanas.map((tab) => {
        const activa = seccionActiva === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setSeccionActiva(tab.id)}
            style={{
              padding: '0.55rem 0.9rem',
              backgroundColor: activa ? '#D96C2C' : '#274C56',
              color: '#F6E2B3',
              border: activa ? '2px solid #274C56' : '2px solid transparent',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: activa ? '0 4px 8px rgba(0,0,0,0.15)' : 'none'
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}