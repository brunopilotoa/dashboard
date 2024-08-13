// 'use client';
import {
	Box,
	Button,
	Card,
	Container,
	FormGroup,
	Grid,
	Input,
	TextField,
	Typography,
} from '@mui/material';
// import { useEffect, useState } from 'react';

// import { getMetar, getData, setMetar } from '../api/metar/metar';

// getData();
// export default function Page() {
// 	async function getMetar() {
// 		const res = await fetch(
// 			`https://api-redemet.decea.mil.br/mensagens/metar/
// 			SBGL
// 			?
// 			api_key
// 			=UACnpBpGciDQOUueqc6eY9PMZRVmm4vIrhlmLV2A`
// 		);
// 		// The return value is *not* serialized
// 		// You can return Date, Map, Set, etc.

// 		if (!res.ok) {
// 			// This will activate the closest `error.js` Error Boundary
// 			throw new Error('Failed to fetch data');
// 		}

// 		return res.json();
// 	}

// 	async function setMetar() {
// 		const data = await getMetar();
// 		const mensagem = data.data.data;
// 		const app = mensagem[0];
// 		const metar = app.mens;
// 		return metar;
// 	}

// const [getMetar, setMetar] = useState();

// useEffect(()=>{
// 	fetch ('https://api-redemet.decea.mil.br/mensagens/metar/SBGL?api_key=UACnpBpGciDQOUueqc6eY9PMZRVmm4vIrhlmLV2A')
// 	.then((res) => res.json())
//       .then((data) => {
//         setMetar(data)
//         // setLoading(false)
//       })
// })

export default function Page() {
	return (
		<Grid
			item
			xs={4}
			spacing={0}
			justifyContent={'center'}
			textAlign={'center'}
			// marginLeft={}
		>
			<Grid item xs={8}>
				<FormGroup>
					<Card sx={{ marginRight: 5 }}>
						<Typography
							sx={{ fontWeight: 'bold', fontStyle: 'italic', marginY: 5 }}
						>
							Aplicativo de Consulta Aeronautica
						</Typography>
						<Typography sx={{ fontWeight: 'bold', marginY: 5 }}>
							Insira os Codigos ICAO dos Aerodromos Envolvidos na Operacao :
						</Typography>

						<TextField
							id="outlined"
							label="Aerodromos	 "
							variant="filled"
							type="search"
							// color="secondary"
						/>
						<Grid item xs={12} my={1}>
							<Button variant="outlined" sx={{ margin: 2 }}>
								Pesquisar
							</Button>
							<Button variant="outlined">Mostrar</Button>
						</Grid>
						<Box>Aqui serao mostrado os resultados </Box>
					</Card>
				</FormGroup>
			</Grid>
		</Grid>
		// </Grid>
	);
}
