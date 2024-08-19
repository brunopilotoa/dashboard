'use client';
import {
	Button,
	Grid,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	SelectChangeEvent,
	TextField,
	ThemeProvider,
	Typography,
	createTheme,
	styled,
} from '@mui/material';
import { useState } from 'react';

export default function MovimentForm() {
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

	const Title = styled(Typography)(() => ({
		// color: 'red',
		fontStretch: 'expanded',
		fontWeight: 'bold',
	}));
	return (
		<>
			<ThemeProvider theme={theme}>
				<Grid
					container
					direction="column"
					justifyContent={'center'}
					wrap="nowrap"
				>
					<p className="formTitle">Folha de movimento </p>
					<Paper elevation={10} sx={{ width: '100vh' }}>
						<form action="">
							<div className="flex flex-col  place-items-start">
								<div className="m-5 mt-8 flex flex-row ">
									<p className="formInput">DATA</p>
									<TextField type="date" size="small" />
									<p className="formInput">Aeronave</p>
									<TextField
										type="text"
										size="small"
										placeholder="Matricula da Aeronave"
										inputProps={{ maxLength: 6 }}
									/>
								</div>
								<div className="setFormItems">
									<p className="formInput">Origem</p>

									<TextField
										type="text"
										size="small"
										inputProps={{ maxLength: 4 }}
										placeholder="ICAO AD PARTIDA "
									/>
									<p className="formInput">Destino</p>
									<TextField
										type="text"
										size="small"
										inputProps={{ maxLength: 4 }}
										placeholder="icao AD destino "
									/>
								</div>
								<div className="setFormItems">
									<p className="formInput">Decolagem</p>
									<TextField
										type="text"
										size="small"
										inputProps={{ maxLength: 4 }}
										placeholder="Horario Z  "
									/>
									<p className="formInput">Pouso</p>
									<TextField
										type="tel"
										size="small"
										inputProps={{ maxLength: 4 }}
										placeholder="Horario Z		"
									/>
								</div>
								<div className="setFormItems">
									<p className="formInput">Pessoas A Bordo</p>
									<TextField
										type="text"
										size="small"
										inputProps={{ maxLength: 2 }}
										placeholder="Total de POB "
									/>
									<p className="formInput">Categoria</p>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={category}
										// label="Category"
										onChange={handleChange}
									>
										<MenuItem value={10}>Geral</MenuItem>
										<MenuItem value={20}>
											Instrucao
										</MenuItem>
										<MenuItem value={30}>
											Forcas Publicas
										</MenuItem>
									</Select>
								</div>
								<div className="setFormItems">
									<p className="formInput">
										Piloto em Comando
									</p>
									<TextField
										type="text"
										size="small"
										// inputProps={{ maxLength: 5 }}
										placeholder="Nome : "
									/>
								</div>

								<div className="setFormItems mb-5">
									<p className="formInput">Anac</p>
									<TextField
										type="tel"
										size="small"
										inputProps={{ maxLength: 6 }}
										placeholder="Codigo Anac"
										sx={{ marginRight: 4 }}
									/>
								</div>
								<div className="m-auto flex flex-row ml-48 mt-8 mb-8">
									<Button variant="contained">
										Cadastrar
									</Button>
									<Button
										variant="contained"
										color="secondary"
									>
										Cancelar
									</Button>
								</div>
							</div>
						</form>
					</Paper>
				</Grid>
			</ThemeProvider>
		</>
	);
}
