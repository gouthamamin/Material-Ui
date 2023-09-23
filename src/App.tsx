import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box, Button, IconButton, InputBase, Tabs, Tab, alpha, styled } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SearchIcon from '@mui/icons-material/Search';
import HomePageContent from './Components/HomePageContent';
// import ServicesContent from './Components/ServicesContent';
// import HelpContent from './Components/HelpContent';

function App() {

	const [selectedTab, setSelectedTab] = useState('home');

	const handleChange = (event: any, newValue: any) => {
		setSelectedTab(newValue);
	};

	const getContent = () => {
		switch (selectedTab) {
			case 'home':
				return <HomePageContent />;

			case 'services':
				// return <ServicesContent />;
				return null;
			case 'help':
				// return <HelpContent />;
				return null;
			default:
				return null;
		}
	};


	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	}));

	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}));

	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: 'inherit',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('md')]: {
				width: '20ch',
			},
		},
	}));
	return (
		<Box>
			<AppBar position="static" sx={{ bgcolor: "#primary" }}>
				<Toolbar>
					<IconButton style={{ fontSize: '3rem', color: 'white' }}>
						<SportsEsportsIcon></SportsEsportsIcon>
					</IconButton>

					<Typography variant="h6" sx={{ fontWeight: 'bolder' }}>Material Ui</Typography>

					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>

					<Tabs
						value={selectedTab}
						onChange={handleChange}
						textColor="inherit"
						variant="scrollable"
						scrollButtons="auto"
					>
						<Tab label="Home" value="home" />
						<Tab label="Our Works" value="ourWorks" />
						<Tab
							label="Services"
							value="services"
							aria-controls="services-tabpanel"
							aria-haspopup="true"
							id="services-tab"
						/>
						<Tab label="Help" value="help" />
					</Tabs>

				</Toolbar>
			</AppBar>
			<Container>
				{getContent()}
			</Container>
		</Box >
	);
}

export default App;
