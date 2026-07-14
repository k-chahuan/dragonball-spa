import type { Elemento } from "../types/Elemento";

interface Props {
  elemento: Elemento;
  onAgregarFavorito: (elemento: Elemento) => void;
}

export default function ElementoCard({ elemento, onAgregarFavorito }: Props) {
  return (
    <div className="card">
      <img src={elemento.imagen} alt={elemento.nombre} />
      <h3>{elemento.nombre}</h3>
      <p>Raza: {elemento.categoria}</p>
      <p>Ki: {elemento.estado}</p>
      <button onClick={() => onAgregarFavorito(elemento)}>Agregar a favoritos</button>
    </div>
  );
}
