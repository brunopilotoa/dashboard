import { BarChart, Dataset } from '@mui/icons-material';

export default function FuelGraphic() {
	return (
		<>
			<BarChart
				dataset={Dataset}
				xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
				series={[
					{ dataKey: 'london', label: 'London', valueFormatter },
					{ dataKey: 'paris', label: 'Paris', valueFormatter },
					{ dataKey: 'newYork', label: 'New York', valueFormatter },
					{ dataKey: 'seoul', label: 'Seoul', valueFormatter },
				]}
				{...chartSetting}
			/>
			;
		</>
	);
}
