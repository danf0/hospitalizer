import { Box } from '@mui/system';

const Wrapper = (props) => {
    const { height } = props

    return (  
            <Box sx={{
                backgroundColor: '#1f045a',
                width: '95vw',
                height: `${height}vh`,
                flex: 1,
                mb: 5,
                mx: 'auto',
                borderRadius: 2.5
            }}>
            </Box>
    );
}

export default Wrapper;