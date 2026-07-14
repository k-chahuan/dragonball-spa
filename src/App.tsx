import { useEffect, useState } from "react";
import { cargarDatos } from "./services/api";
import type { Elemento } from "./types/Elemento";
import Buscador from "./components/Buscador";
import ListaElementos from "./components/ListaElementos";
import Favoritos from "./components/Favoritos";

const URL_API = "https://dragonball-api.com/api/characters";

function App() {
  const [datos, setDatos] = useState<Elemento[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [favoritos, setFavoritos] = useState<Elemento[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCargando(true);
        setError("");
        const data = await cargarDatos(URL_API);
        const transformados: Elemento[] = data.items.map((item: any) => ({
          id: item.id,
          nombre: item.name,
          imagen: item.image,
          categoria: item.race,
          estado: item.ki,
        }));

        setDatos(transformados);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error inesperado");
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const guardados = localStorage.getItem("favoritos");
    if (guardados) setFavoritos(JSON.parse(guardados));
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const agregarFavorito = (elemento: Elemento) => {
    if (!favoritos.find(f => f.id === elemento.id)) {
      setFavoritos([...favoritos, elemento]);
    }
  };

  const eliminarFavorito = (id: number) => {
    setFavoritos(favoritos.filter(f => f.id !== id));
  };

  const actualizarFavorito = (id: number, nuevoDato: Partial<Elemento>) => {
    setFavoritos(
      favoritos.map(f => (f.id === id ? { ...f, ...nuevoDato } : f))
    );
  };

  const filtrados = datos.filter(d =>
    d.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1>Explorador Dragon Ball</h1>
      <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
      {cargando && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      <ListaElementos datos={filtrados} onAgregarFavorito={agregarFavorito} />
      <Favoritos
        favoritos={favoritos}
        onEliminar={eliminarFavorito}
        onActualizar={actualizarFavorito}
      />
    </div>
  );
}

export default App;


