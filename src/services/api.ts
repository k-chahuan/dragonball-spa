export const cargarDatos = async (url: string) => {
  const respuesta = await fetch(url);
  if (!respuesta.ok) throw new Error("Error al obtener datos");
  const data = await respuesta.json();
  return data.items ?? data;
};
