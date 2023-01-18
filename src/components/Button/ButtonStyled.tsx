import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { teal } from "@mui/material/colors";

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(teal[500]),
  backgroundColor: teal[200],
  "&:hover": {
    backgroundColor: teal[500],
  },
}));
