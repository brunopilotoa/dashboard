import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Sidebar from '@/components/sidebar';
import HeaderAuth from '@/components/headerAuth';

export default function Page() {
	return (
		<>
			<Typography variant="h2" color="initial" ml={-2} mb={3}>
				Pagina Inicial
			</Typography>
			<div className="m-auto">
				<Image src={'/logo.png'} alt={''} width={300} height={300} />
			</div>

			<Typography variant="body1" color="initial" marginTop={5}>
				Realize Seu Cadastro Para Acessar as Paginas Restritas
			</Typography>
		</>
	);
}
