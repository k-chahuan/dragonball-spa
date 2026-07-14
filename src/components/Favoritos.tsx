import type { Elemento } from "../types/Elemento";

interface Props {
  favoritos: Elemento[];
  onEliminar: (id: number) => void;
  onActualizar: (id: number, nuevoDato: Partial<Elemento>) => void;
}

export default function Favoritos({ favoritos, onEliminar, onActualizar }: Props) {
  return (
    <div>
      <h2>Favoritos</h2>
      {favoritos.map((f) => (
        <div key={f.id}>
          <h4>{f.nombre}</h4>
          <button onClick={() => onEliminar(f.id)}>Eliminar</button>
          <button onClick={() => onActualizar(f.id, { estado: "Entrenando" })}>
            Actualizar estado
          </button>
        </div>
      ))}
    </div>
  );
}
