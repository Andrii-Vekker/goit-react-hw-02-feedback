import { ControlsBox, BtnStyles } from "./Controls.styled";

export default function Controls({onIncrement}) {
    return (
        <ControlsBox>
            <BtnStyles type="button" name="good" onClick={onIncrement}>Good</BtnStyles>
            <BtnStyles type="button" name="neutral" onClick={onIncrement}>Neutral</BtnStyles>
            <BtnStyles type="button" name="bad" onClick={onIncrement}> Bad</BtnStyles>
        </ControlsBox>
  );
};
