
// Función para cargar el archivo JSON
const url = "https://c-contre.github.io/facturacion/json/db.json"
export async function dbMesas() {
  try {
    const data = await fetch(url)
    const datos = await data.json()
	 const mesas = datos.mesas
    return mesas
  } catch (error) {
    console.log("error: ",error)
  }
}
  
export async function dbPrecios() {
  try {
    const data = await fetch(url);
    const datos = await data.json();
    const precios = datos.datos;
    return precios
  } catch (error) {
    console.log("error: ",error)
  }
}

export async function dbTicket() {
  try {
    const data = await fetch(url);
    const datos = await data.json();
    const infoTicket = datos.ticket;
    return infoTicket
  } catch (error) {
    console.log("error: ",error)
  }
}
