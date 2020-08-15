import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import { colors } from "~/styles/variables";

import Button from "~/components/Button";
import AlignCenter from "~/components/AlignCenter";
import PopUp from "~/components/PopUp";

export default function Info({ location }) {
  return (
    <PopUp>
      <Container>
        <h1>Observações</h1>
        <p>
          Cerifique-se que o corretor ortográfico do seu navegador está ativo.
        </p>

        <p>
          Ao destacar as palavras repetidas, elas são convertidas para letras
          minúsculas e toda paragrafação é perdida.
        </p>

        <AlignCenter>
          <Button background={colors.btnTransparent}>
            <Link to={`/home${location.search}`}>Voltar</Link>
          </Button>
        </AlignCenter>
        <p></p>
      </Container>
    </PopUp>
  );
}
