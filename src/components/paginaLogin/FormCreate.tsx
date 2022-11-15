import React from "react";
import { Container } from "@mui/material";
import { InputEmail, InputPassword } from "./Inputs/Inputs";
import ButtonDefault from "../Buttons/ButtonDefault";
import TitlePage from "../TitlePage";
import AppBar from "../AppBar/AppBar";

const FormCreate: React.FC = () => {
  return (
    <React.Fragment>
      <AppBar />
      <Container
        maxWidth="sm"
        sx={{
          marginTop: "5rem",
        }}
      >
        <TitlePage title="Cadastro" />
        <InputEmail />
        <InputPassword />
        <InputPassword />
        <ButtonDefault name={"Fazer Cadastro"} />
      </Container>
    </React.Fragment>
  );
};

export default FormCreate;
