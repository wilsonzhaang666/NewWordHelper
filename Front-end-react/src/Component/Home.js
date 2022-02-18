import React, { useEffect, useState } from "react";
import WordComponent from "./WordComponent";
import HandledWord from "./HandledWord";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const NewWord = (props) => {
  const [handlepage, setHandlePage] = useState();
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const UnHandledWord = () => {
    setHandlePage(1);
  };
  const HandleWord = () => {
    setHandlePage(2);
  };

  const radios = [
    { name: "New Words", value: "1" },
    { name: "Handled Words", value: "2" },
  ];

  return (
    <>
      <h1 className="text-center">New Word List</h1>
      <div className="button-split">
        <ButtonGroup>
          <ToggleButton
            variant="danger"
            name="radio"
            checked={checked}
            onClick={() => UnHandledWord()}
          >
            New Words
          </ToggleButton>
          <ToggleButton
            variant="success"
            name="radio"
            checked={checked}
            onClick={() => HandleWord()}
          >
            Handled Words
          </ToggleButton>
        </ButtonGroup>
      </div>{" "}
      {(() => {
        if (handlepage === 1) {
          return <WordComponent />;
        } else if (handlepage === 2) {
          return <HandledWord />;
        }
      })()}
    </>
  );
};

export default NewWord;
