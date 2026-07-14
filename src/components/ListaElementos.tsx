import type { Elemento } from "../types/Elemento";
import ElementoCard from "./ElementoCard";

interface Props {
  datos: Elemento[];
  onAgregarFavorito: (elemento: Elemento) => void;
}

export default function ListaElementos({ datos, onAgregarFavorito }: Props) {
  if (datos.length === 0) return <p>No hay coincidencias</p>;

  return (
    <div>
      {datos.map((item) => (
        <ElementoCard
          key={item.id}
          elemento={item}
          onAgregarFavorito={onAgregarFavorito}
        />
      ))}
    </div>
  );
}
