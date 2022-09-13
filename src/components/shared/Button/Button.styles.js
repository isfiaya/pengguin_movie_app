import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[700]),
    backgroundColor: grey[700],
    '&:hover': {
        backgroundColor: grey[700],
    },
}));

export default ColorButton
