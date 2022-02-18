import axios from "axios";

const WORD_REST_API_URL =
  "http://springbootmysqlnewworldlearner-env.eba-3i3nsufp.ap-southeast-2.elasticbeanstalk.com/api/words";

async function getAllWords() {
  const response = await axios.get(WORD_REST_API_URL);

  return response;
}
async function craeteNewWord(word) {
  const response = await axios.post(WORD_REST_API_URL, word);

  return response;
}
async function updateWord(word) {
  const id = word.id;
  const response = await axios.put(WORD_REST_API_URL + "/" + id, word);

  return response;
}

async function deleteUsers(user) {
  const response = await axios.delete(WORD_REST_API_URL + "/" + user.id);

  return response;
}

export { getAllWords, updateWord, craeteNewWord, deleteUsers };
