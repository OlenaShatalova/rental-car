import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = ({ height = 'auto' }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: { height },
      }}
    >
      <CircularProgress color="primary" sx={{ color: '#3470FF' }} />
    </Box>
  );
};

export default Loader;
