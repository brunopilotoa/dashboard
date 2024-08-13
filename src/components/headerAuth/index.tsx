import { Container, Typography, Grid } from '@mui/material';

function HeaderAuth() {
	return (
		<>
			<Grid
				container
				spacing={1}
				direction="row"
				justify="flex-start"
				alignItems="flex-start"
				alignContent="stretch"
				wrap="nowrap"
			>
				<Typography alignSelf={'start'} fontSize={'1rem'}>
					Sistema Aeroclube De Pindamonhangaba
				</Typography>
			</Grid>
		</>
	);
}

export default HeaderAuth;
