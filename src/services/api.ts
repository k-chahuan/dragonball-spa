export const cargarDatos = async () => {
  const respuesta = await fetch("https://dragonball-api.com/api/characters");
  if (!respuesta.ok) throw new Error("Error al obtener datos");
  const data = await respuesta.json();
  return data.items ?? data;
};
