export async function getMetar	() {
	const res = await fetch(
		`https://api-redemet.decea.mil.br/mensagens/metar/
		SBGL
		?
		api_key
		=UACnpBpGciDQOUueqc6eY9PMZRVmm4vIrhlmLV2A`
	);
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

async function setMetar (){
  const data = await getData();
	const mensagem = data.data.data;
	const app = mensagem[0];
	const metar = app.mens;
  return metar
}