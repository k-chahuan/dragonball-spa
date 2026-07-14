interface Props {
  busqueda: string;
  setBusqueda: (valor: string) => void;
}

export default function Buscador({ busqueda, setBusqueda }: Props) {
  return (
    <input
      type="text"
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      placeholder="Buscar personaje..."
    />
  );
}
