import React, { useEffect, useState } from "react";
import {
  getAllWords,
  updateWord,
  craeteNewWord,
  deleteUsers,
} from "../Service/WordService";

const WordComponent = (props) => {
  const [data, setData] = useState([]);
  const [originaldata, setOriginalData] = useState([]);
  const [columnstatus, setColumnstatus] = useState(true);
  const [submit, setSubmit] = useState(true);
  const [newWord, setNewWord] = useState({
    id: "",
    word: "",
    chineseWord: "",
    handle: false,
  });

  const handleEdit = () => {
    setColumnstatus(false);
  };

  const handleWordChange = (e) => {
    const wordid = Math.max.apply(
      Math,
      data.map(function (o) {
        return o.id;
      })
    );
    const theId = wordid + 1;
    setNewWord({ ...newWord, word: e.target.value, id: theId });
  };
  console.log(newWord);
  const handleChineseWordChange = (e) => {
    const wordid = Math.max.apply(
      Math,
      data.map(function (o) {
        return o.id;
      })
    );
    const theId = wordid + 1;
    setNewWord({ ...newWord, chineseWord: e.target.value, id: theId });
  };

  useEffect(() => {
    async function loadProfiles() {
      const response = await getAllWords();
      setData(response.data);
      setOriginalData(response.data);
    }
    loadProfiles();
  }, []);

  const submitNewWord = () => {
    craeteNewWord(newWord);
    console.log(newWord);
    const newArray = data.concat(newWord);
    setData(newArray);
    setNewWord({
      id: "",
      word: "",
      chineseWord: "",
      handle: false,
    });
  };
  const setHandle = (word) => {
    const updatedAreas = [...data];

    var idIndex;
    for (let i = 0; i < updatedAreas.length; i++) {
      if (updatedAreas.at(i).id === word.id) {
        idIndex = i;
      }
      updatedAreas.at(idIndex).handle = true;
      setData(updatedAreas);
      updateWord(updatedAreas[idIndex]);
    }
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Id</td>
            <td>Word</td>
            <td>Chinese Meaning</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((word) => word.handle !== true)
            .map((word) => (
              <tr key={word.id}>
                <td>{word.id} </td>
                <td>{word.word}</td>
                <td>{word.chineseWord}</td>

                <td>{word.handle ? <td>handled</td> : <td>Not handle</td>}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => setHandle(word)}
                    className="btn btn-primary"
                  >
                    Handled!
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td>{newWord.id}</td>
            <td>
              {" "}
              <input
                value={newWord.word}
                onChange={(e) => handleWordChange(e)}
              />
            </td>
            <td>
              {" "}
              <input
                value={newWord.chineseWord}
                onChange={(e) => handleChineseWordChange(e)}
              />
            </td>
            <td>
              {" "}
              <button
                onClick={() => submitNewWord()}
                className="btn btn-success"
              >
                Added New Word
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      {/* <button onClick={() => fakebut()}>Added Column</button> */}
    </div>
  );
};
export default WordComponent;
