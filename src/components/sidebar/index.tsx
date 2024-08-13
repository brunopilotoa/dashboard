'use client';
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Box, Grid, Link, SvgIcon, Typography } from '@mui/material';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import DeskIcon from '@mui/icons-material/Desk';
import ComputerIcon from '@mui/icons-material/Computer';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import Image from 'next/image';

export default function Sidebar() {
	const [open, setOpen] = React.useState(true);
	const [openSecondCategory, setOpenSecondCategory] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	const handleClickSecondCategory = () => {
		setOpenSecondCategory(!openSecondCategory);
	};
	return (
		<Grid
			sx={{
				backgroundColor: '#1c1c1c	',
				width: '250px',
				height: '100vh',
			}}
		>
			<List
				sx={{
					margin: 0,
					padding: 0,

				}}
				component="nav"
				aria-labelledby="nested-list-subheader"
			>
				<ListItemButton>
					<HomeIcon sx={{ color: '#fff', marginRight: 1, marginLeft: 2 }} />
					<Link href="/" sx={{ textDecoration: 'none', color: 'white' }}>
						<ListItemText primary="Pagina Inicial" />
					</Link>
				</ListItemButton>
				<ListItemButton onClick={handleClick}>
					<ComputerIcon sx={{ color: '#fff', marginRight: 1, marginLeft: 2 ,  }} />
					<ListItemText primary="Cadastros" sx={{ color: '#fff' }} />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItemButton>
							<ListItemIcon></ListItemIcon>
							<LocalGasStationIcon sx={{ color: '#fff', marginRight: 1 }} />
							<Link
								href="/fuel"
								sx={{ textDecoration: 'none', color: 'white' }}
							>
								<ListItemText primary="Combustivel " />
							</Link>
						</ListItemButton>
					</List>
				</Collapse>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItemButton>
							<ListItemIcon></ListItemIcon>
							<AirplanemodeActiveIcon sx={{ color: '#fff', marginRight: 1 }} />
							<Link href="/folhadepista " underline="none" color={'Menu'}>
								<ListItemText primary="Folha de Pista " />
							</Link>
						</ListItemButton>
					</List>
				</Collapse>
				{/*<ListItemButton onClick={handleClickSecondCategory}>*/}
				{/*	<AirplanemodeActiveIcon*/}
				{/*		sx={{ color: '#fff', marginRight: 1, marginLeft: 4 }}*/}
				{/*	/>*/}
				{/*	<ListItemText primary="Aeronaves" sx={{ color: '#21acd7' }} />*/}
				{/*	{openSecondCategory ? <ExpandLess /> : <ExpandMore />}*/}
				{/*</ListItemButton>*/}
				{/*<Collapse in={openSecondCategory} timeout="auto" unmountOnExit>*/}
				{/*	<List component="div" disablePadding>*/}
				{/*		<ListItemButton sx={{ pl: 4 }}>*/}
				{/*			<ListItemIcon></ListItemIcon>*/}
				{/*			<Link href="/aircraftComponents">*/}
				{/*				<ListItemText primary="Mapa de Componentes" />*/}
				{/*			</Link>*/}
				{/*		</ListItemButton>*/}
				{/*	</List>*/}
				{/*</Collapse>*/}
				{/*<Collapse in={openSecondCategory} timeout="auto" unmountOnExit>*/}
				{/*	<List component="div" disablePadding>*/}
				{/*		<ListItemButton sx={{ pl: 4 }}>*/}
				{/*			<ListItemIcon></ListItemIcon>*/}
				{/*			<ListItemText primary="Validades Items Obrigatorios" />*/}
				{/*		</ListItemButton>*/}
				{/*	</List>*/}
				{/*</Collapse>*/}
				{/*<Collapse in={openSecondCategory} timeout="auto" unmountOnExit>*/}
				{/*	<List component="div" disablePadding>*/}
				{/*		<ListItemButton sx={{ pl: 4 }}>*/}
				{/*			<ListItemIcon></ListItemIcon>*/}
				{/*			<ListItemText primary="Revisoes" />*/}
				{/*		</ListItemButton>*/}
				{/*	</List>*/}
				{/*</Collapse>*/}
				{/*<Collapse in={openSecondCategory} timeout="auto" unmountOnExit>*/}
				{/*	<List component="div" disablePadding>*/}
				{/*		<ListItemButton sx={{ pl: 4 }}>*/}
				{/*			<ListItemIcon></ListItemIcon>*/}
				{/*			<ListItemText primary="Horas Voadas " />*/}
				{/*		</ListItemButton>*/}
				{/*		<ListItemButton sx={{ pl: 4 }}>*/}
				{/*			<ListItemIcon></ListItemIcon>*/}
				{/*			<ListItemText primary="Login " />*/}
				{/*		</ListItemButton>*/}
				{/*	</List>*/}
				{/*</Collapse>*/}
				<ListItemButton>
					<LogoutIcon
						sx={{
							color: '#fff',
							marginLeft: 3,
							marginRight: 1,
							alignItems: 'flex-end',
							justifyContent: 'flex-end',
						}}
					/>
					<ListItemText primary="Logoff" sx={{ color: '#fff' }} />{' '}
				</ListItemButton>
			</List>
		</Grid>
	);
}
