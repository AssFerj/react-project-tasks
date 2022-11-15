import { Typography } from "@mui/material";
import React from "react";

interface TitlePageProps {
  title: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ title }) => {
  return <Typography variant="h2">{title}</Typography>;
};
export default TitlePage;
