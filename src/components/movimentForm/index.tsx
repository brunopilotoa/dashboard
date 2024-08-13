'use client';
import { AddBoxRounded } from '@mui/icons-material';
import {
	Container,
	FormGroup,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	SelectChangeEvent,
	TextField,
	Typography,
	Grid,
	Button,
	styled,
	Box,
	ThemeProvider,
	createTheme,
} from '@mui/material';
import { blue, green } from '@mui/material/colors';
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
					<Title
						variant="h4"
						color="initial"
						textTransform={'uppercase'}
						marginTop={3}
						marginBottom={4}
					>
						Folha de Pista
					</Title>
					<Paper elevation={10}>
						<Box
							margin={'auto'}
							paddingTop={4}
							marginRight={4}
							marginLeft={4}
							// marginBottom={4}
							display={'flex'}
							flexDirection={'row'}
							width={'100dvh'}
						>
							<InputForm>DATA</InputForm>
							<TextField type="date" size="small" />
							<InputForm>Aeronave</InputForm>
							<TextField
								type="text"
								size="small"
								placeholder="Matricula da Aeronave"
								inputProps={{ maxLength: 6 }}
							/>
						</Box>
						<Box
							marginTop={2}
							marginBottom={4}
							display={'flex'}
							flexDirection={'row'}
							width={'100vh'}
						>
							<InputForm>Origem</InputForm>

							<TextField
								type="text"
								size="small"
								inputProps={{ maxLength: 4 }}
								placeholder="ICAO AD PARTIDA "
							/>
							<InputForm>Destino</InputForm>
							<TextField
								type="text"
								size="small"
								inputProps={{ maxLength: 4 }}
								placeholder="icao AD destino "
							/>
						</Box>
						<Box display={'flex'} flexDirection={'row'}>
							<InputForm>Decolagem</InputForm>
							<TextField
								type="text"
								size="small"
								inputProps={{ maxLength: 4 }}
								placeholder="Horario Z  "
							/>
							<InputForm>Pouso</InputForm>
							<TextField
								type="tel"
								size="small"
								inputProps={{ maxLength: 4 }}
								placeholder="Horario Z		"
							/>
						</Box>
						<Box
							marginTop={2}
							marginBottom={2}
							display={'flex'}
							flexDirection={'row'}
							width={'100vh'}
						>
							<InputForm>Pessoas A Bordo</InputForm>
							<TextField
								type="text"
								size="small"
								inputProps={{ maxLength: 2 }}
								placeholder="Total de POB "
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
								// label="Category"
								onChange={handleChange}
							>
								<MenuItem value={10}>Geral</MenuItem>
								<MenuItem value={20}>Instrucao</MenuItem>
								<MenuItem value={30}>Forcas Publicas</MenuItem>
							</Select>
						</Box>
						<Box display={'flex'} flexDirection={'row'}>
							<InputForm>Piloto em Comando</InputForm>
							<TextField
								type="text"
								size="small"
								// inputProps={{ maxLength: 5 }}
								placeholder="Nome : "
							/>
						</Box>

						<Box
							display={'flex'}
							justifyContent={'center'}
							marginTop={5}
							marginBottom={4}
						>
							<InputForm>Anac</InputForm>
							<TextField
								type="tel"
								size="small"
								inputProps={{ maxLength: 6 }}
								placeholder="Codigo Anac"
								sx={{ marginRight: 4 }}
							/>
							<Button variant="contained">Cadastrar</Button>
							<Button variant="contained" color="secondary">
								Cancelar
							</Button>
						</Box>
					</Paper>
				</Grid>
			</ThemeProvider>
		</>
	);
}
