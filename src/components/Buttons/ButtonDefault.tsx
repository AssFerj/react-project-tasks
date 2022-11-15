import Button from "@mui/material/Button";
import React from "react";

interface ButtonProps {
  name: string;
}

const ButtonDefault: React.FC<ButtonProps> = ({ name }) => {
  return (
    <Button fullWidth variant="contained">
      {name}
    </Button>
  );
};

export default ButtonDefault;
