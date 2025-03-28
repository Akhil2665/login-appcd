import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CustomImageList from './CustomImageList';

const cards = [
  {
    id: 1,
    title: 'Plants',
    description: 'Plants are essential for all life.',
  },
//   {
//     id: 2,
//     title: 'Animals',
//     description: 'Animals are a part of nature.',
//   },
//   {
//     id: 3,
//     title: 'Humans',
//     description: 'Humans depend on plants and animals for survival.',
//   },
];

function DashboardCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(400px, 100%), 1fr))',
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card>
          <CustomImageList />
        </Card>
      ))}
    </Box>
  );
}

export default DashboardCard;
