import './App.css';

function App() {
  return (
    <div className="contenedor-principal">
      <header className="header-clase">
        <div className="header-top">
          <span className="badge-grado">Ciclo Básico • Área de TIC</span>
          <span className="nombre-maestra">Docente: Raquel Aju</span>
        </div>
        
        <h1>Estructura y Estilo de una Página Web: HTML y CSS Básico</h1>
        <p>Plan de Clase Digital Interactivo</p>
      </header>

      <main>
        <section className="objetivo-card">
          <h2>Objetivo del Plan de Clase</h2>
          <p>
            Comprender la importancia de separar la estructura de una página web y su diseño visual 
            utilizando la analogía del cuerpo humano (HTML como esqueleto y  CSS como la ropa que le da estilo y color a la pagina web). 
            Los estudiantes explorarán de forma interactiva la maquetación web, aplicarán estilos dinámicos 
            y se evaluará sus conocimientos mediante actividades conectadas a una base de datos en la nube.
          </p>
        </section>
      </main>

      <footer className="footer-clase">
        <p>Desarrollado para el curso de Programación de Aplicaciones Web • URL</p>
      </footer>
    </div>
  );
}

export default App;