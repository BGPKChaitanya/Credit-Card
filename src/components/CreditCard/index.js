import { useState } from "react";
import {
  Heading,
  InnerContainer1,
  InnerContainerTwo,
  MainContainer,
  CardContainer,
  Para,
  CardInputContainer,
  InputData,
  Heading2,
} from "./styledComponents";

const CreditCard = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const cardNameUpperCase = cardName.toUpperCase();

  const onChangeName = (event) => {
    setCardName(event.target.value);
  };
  const onChangeNumber = (event) => {
    setCardNumber(event.target.value);
  };

  return (
    <MainContainer>
      <InnerContainer1>
        <Heading>CREDIT CARD</Heading>
        <CardContainer data-testid="creditCard">
          <Para>{cardNumber}</Para>
          <Para>CARDHOLDER NAME</Para>
          <Para>{cardNameUpperCase}</Para>
        </CardContainer>
      </InnerContainer1>
      <InnerContainerTwo>
        <CardInputContainer>
          <Heading2>Payment Method</Heading2>
          <InputData
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeNumber}
          />
          <InputData
            type="text"
            placeholder="Cardholder Name"
            value={cardName}
            onChange={onChangeName}
          />
        </CardInputContainer>
      </InnerContainerTwo>
    </MainContainer>
  );
};

export default CreditCard;
