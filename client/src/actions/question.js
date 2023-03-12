import * as api from "../api";
export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.POSTQUESTION(questionData);
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchAllQuestions());
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchAllQuestions = () => async (dispatch) => {
  try {
    const { data } = await api.GETQUESTIONS();
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
    const { data } = api.DELETEQUESTION(id);
    dispatch(fetchAllQuestions());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const VoteQuestion = (id, value, userId) => async (dispatch) => {
  try {
    const { data } = await api.VOTEQUESTION(id, value, userId);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};

export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const { id, noOfAnswers, answerBody, userAnswered, userId } = answerData;
    const { data } = await api.POSTANSWER(
      id,
      noOfAnswers,
      answerBody,
      userAnswered,
      userId
    );
    dispatch({ type: "POST_ANSWER", payload: data });
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
  try {
    const { data } = await api.DELETEANSWER(id, answerId, noOfAnswers);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};
