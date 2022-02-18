import React, { useEffect, useState } from "react";
import { getAllWords, updateWord, craeteNewWord } from "../Service/WordService";

const HandledWord = (props) => {
  const [data, setData] = useState([]);

  const [newWord, setNewWord] = useState({
    id: "",
    word: "",
    chineseWord: "",
    handle: false,
  });

  useEffect(() => {
    async function loadProfiles() {
      const response = await getAllWords();
      setData(response.data);
    }
    loadProfiles();
  }, []);

  const setHandle = (word) => {
    const updatedAreas = [...data];

    var idIndex;
    for (let i = 0; i < updatedAreas.length; i++) {
      if (updatedAreas.at(i).id === word.id) {
        idIndex = i;
      }
      updatedAreas.at(idIndex).handle = false;
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
            .filter((word) => word.handle === true)
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
                    className="btn btn-danger"
                  >
                    UnHandle
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <button onClick={() => fakebut()}>Added Column</button> */}
    </div>
  );
};
export default HandledWord;
