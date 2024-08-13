'use client';
import {
	Box,
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
				<Grid
					container
					direction="column"
					justifyContent={'center'}
					wrap="nowrap"
				>
					<p
						className="text-5xl	mb-8"
						// variant="h4"
						// color="initial"
						// textTransform={'uppercase'}
						// marginBottom={4}
					>
						Cadastro de Abastecimento
					</p>
					<Paper elevation={10} sx={{ margin: 'auto' }}>
						{/* <div className="m-5"> */}
						<form onSubmit={onSubmit} action={'/fuel'} method="post">
							<Box
								margin={5}
								display={'flex'}
								flexDirection={'row'}
								width={'100dvh'}
							>
								<InputForm>DATA</InputForm>
								<TextField type="date" size="small" name="data" />
								<InputForm>Aeronave</InputForm>
								<TextField
									type="text"
									size="small"
									name="aircraft"
									placeholder="Matricula da Aeronave"
									inputProps={{ maxLength: 6 }}
								/>
							</Box>
							<Box
								marginTop={2}
								marginBottom={4}
								margin={6}
								display={'flex'}
								flexDirection={'row'}
								width={'100vh'}
							>
								<InputForm>Litros</InputForm>

								<TextField
									type="text"
									size="small"
									name="litros"
									inputProps={{ maxLength: 3 }}
									placeholder="Quantidade Abastecida "
								/>
								<InputForm>Inicial</InputForm>
								<TextField
									type="number"
									size="small"
									name="inicial"
									inputProps={{ maxLength: 5 }}
									placeholder="Hidrometro Inicial "
								/>
							</Box>
							<Box
								margin={5}
								display={'flex'}
								flexDirection={'row'}
								width={'100vh'}
							>
								<InputForm>Final</InputForm>
								<TextField
									type="text"
									size="small"
									name="final"
									inputProps={{ maxLength: 6 }}
									placeholder="Hidrometro Final "
								/>
								<InputForm
									id="demo-simple-select-label"
									size="small"
									sx={{
										marginLeft: 3,
										marginTop: 0,
										padding: 0,
										marginBottom: 3,
									}}
								>
									Categoria
								</InputForm>
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
							</Box>
							<Box
								display={'flex'}
								justifyContent={'center'}
								// marginTop={5}
								marginBottom={4}
							>
								<InputForm>Responsavel</InputForm>
								<TextField
									type="text"
									size="small"
									name="responsavel"
									inputProps={{ maxLength: 5 }}
									placeholder="Abastecedor "
									sx={{ marginRight: 5 }}
								/>
								<Button variant="contained" type="submit">
									Cadastrar
								</Button>
								<Button variant="contained" color="secondary" type="reset">
									Cancelar
								</Button>
							</Box>
						</form>

						{/* </div> */}
					</Paper>
				</Grid>
			</ThemeProvider>
		</>
	);
}
