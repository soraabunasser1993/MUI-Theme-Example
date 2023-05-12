import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.black,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));