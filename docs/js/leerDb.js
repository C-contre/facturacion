
// Función para cargar el archivo JSON
export async function dbMesas() {
  try {
    const data = await fetch("../json/db.json")
    const datos = await data.json()
	 const mesas = datos.mesas
    return mesas
  } catch (error) {
    console.log("error: ",error)
  }
}
  
export async function dbPrecios() {
  try {
    const data = await fetch("../json/db.json");
    const datos = await data.json();
    const precios = datos.datos;
    return precios
  } catch (error) {
    console.log("error: ",error)
  }
}

export async function dbTicket() {
  try {
    const data = await fetch("../json/db.json");
    const datos = await data.json();
    const infoTicket = datos.ticket;
    return infoTicket
  } catch (error) {
    console.log("error: ",error)
  }
}
