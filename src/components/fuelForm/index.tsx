'use client';
import {
	Button,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	SelectChangeEvent,
	TextField,
	ThemeProvider,
	createTheme,
	styled,
} from '@mui/material';
import '../../app/globals.css';

import { FormEvent, useState } from 'react';

export default function FuelForm() {
	const [category, setCategory] = useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setCategory(event.target.value);
	};
	const theme = createTheme({
		palette: {
			secondary: {
				main: '#f50057',
			},
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						paddingTop: 3,
						marginRight: 5,
						fontWeight: 'bold',
						// color: 'black',
						// backgroundColor: 'transparent',
					},
				},
			},
		},
	});
	const InputForm = styled(InputLabel)(() => ({
		marginRight: 8,
		marginLeft: 8,
		marginTop: 8,
		fontWeight: 'bold',
		fontSize: 14,
		textTransform: 'uppercase',
	}));

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const response = await fetch('/api/submit', {
			method: 'POST',
			body: formData,
		});

		// Handle response if necessary
		const data = await response.json();
		// ...
	}
	return (
		<>
			<ThemeProvider theme={theme}>
				<p className="formTitle">Cadastro de Abastecimento</p>
				<Paper elevation={10}>
					<form action={'/api/submit'} method="post">
						<div className="flex flex-col  place-items-start">
							<div className="m-5 mt-8 flex flex-row ">
								<p className="formInput">DATA</p>
								<TextField
									type="date"
									size="small"
									name="data"
								/>
								<p className="formInput">Aeronave</p>
								<TextField
									type="text"
									size="small"
									name="aircraft"
									placeholder="Matricula da Aeronave"
									inputProps={{ maxLength: 6 }}
								/>
							</div>
							<div className="m-5 mt-8 flex flex-row">
								<p className="formInput">Litros</p>

								<TextField
									type="text"
									size="small"
									name="litros"
									inputProps={{ maxLength: 3 }}
									placeholder="Quantidade Abastecida "
								/>
								<p className="formInput">Inicial</p>
								<TextField
									type="number"
									size="small"
									name="inicial"
									inputProps={{ maxLength: 5 }}
									placeholder="Hidrometro Inicial "
								/>
							</div>
							<div className="m-5 mt-8 flex flex-row">
								<p className="formInput">Final</p>
								<TextField
									type="text"
									size="small"
									name="final"
									inputProps={{ maxLength: 6 }}
									placeholder="Hidrometro Final "
								/>
								<p className="formInput">Categoria</p>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={category}
									name="categoria"
									// label="Category"
									onChange={handleChange}
								>
									<MenuItem value={10}>Aeroclube</MenuItem>
									<MenuItem value={20}>Socios</MenuItem>
									<MenuItem value={30}>Nao Socios</MenuItem>
								</Select>
							</div>
							<div className="m-5 mt-8 flex flex-row">
								<p className="formInput">Responsavel</p>
								<TextField
									type="text"
									size="small"
									name="responsavel"
									inputProps={{ maxLength: 5 }}
									placeholder="Abastecedor "
									sx={{ marginRight: 5 }}
								/>
							</div>
						</div>

						<div className="mt-12 mb-5 ml-52">
							<Button variant="contained" type="submit">
								Cadastrar
							</Button>
							<a href="/">
								<Button
									variant="contained"
									color="secondary"
									type="reset"
								>
									Cancelar
								</Button>
							</a>
						</div>
					</form>

					{/* </div> */}
				</Paper>
			</ThemeProvider>
		</>
	);
}
