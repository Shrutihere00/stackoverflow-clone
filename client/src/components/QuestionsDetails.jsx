import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLocation } from "react-router-dom";
import "../pages/displayQuestions.css";
import Answer from "./Answer";
import Avatar from "./Avatar.jsx";
import "./questionDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuestion, postAnswer, VoteQuestion } from "../actions/question";
const QuestionsDetails = () => {
  const { id } = useParams();
  const questionList = useSelector((state) => state.questionsReducer);
  const [answer, setAnswer] = useState("");
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const url = "https://stackover-clone.onrender.com";
  const shareme = url + location.pathname;
  const handlePostAnswer = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question");
      navigate("/Auth");
    } else {
      if (answer === "") {
        alert("Enter a answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: answer,
            userAnswered: User.result.name,
            userId: User.result._id,
          })
        );
      }
    }
  };
  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate));
  };
  const handleUpVote = () => {
    dispatch(VoteQuestion(id, "upVote", User.result._id));
  };
  const handleDownVote = () => {
    dispatch(VoteQuestion(id, "downVote", User.result._id));
  };
  return (
    <div>
      {questionList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionList.data
            .filter((question) => question._id === id)
            .map((item, key) => {
              return (
                <div key={key} className="">
                  <section className="question-details-container">
                    <h1>{item.questionTitle}</h1>
                    <div className="question-details-container-2">
                      <div className="question-votes">
                        <i
                          onClick={handleUpVote}
                          className="fa-solid fa-caret-up votes-icon"
                        ></i>
                        <p>{item.upVote.length - item.downVote.length}</p>
                        <i
                          onClick={handleDownVote}
                          className="fa-solid fa-caret-down votes-icon"
                        ></i>
                      </div>
                      <div className="" style={{ width: "100%" }}>
                        <p className="question-body">{item.questionBody}</p>
                        <div className="question-details-tags">
                          {item.questionTags.map((tag, index) => {
                            return <p key={index}>{tag}</p>;
                          })}
                        </div>
                        <div className="question-actions-user">
                          <div className="">
                            <CopyToClipboard
                              text={shareme}
                              onCopy={() => alert("Copied url: " + shareme)}
                            >
                              <button onClick>Share</button>
                            </CopyToClipboard>
                            {User?.result?._id === item.userId && (
                              <button onClick={handleDelete}>Delete</button>
                            )}
                          </div>
                          <div className="">
                            <p>asked {moment(item.askedOn).fromNow()}</p>
                            <Link
                              to={`/Users/${item.userId}`}
                              className="user-link"
                              style={{
                                color: "#0086d8",
                                textDecoration: "none",
                              }}
                            >
                              <Avatar
                                children={item.userPosted
                                  .charAt(0)
                                  .toUpperCase()}
                                backgroundColor="orange"
                                py="8px"
                                px="5px"
                                color="white"
                              />
                              <div>{item.userPosted}</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {item.noOfAnswers !== 0 && (
                    <section>
                      <h3>{item.noOfAnswers} Answers</h3>
                      <Answer key={item._id} item={item} />
                    </section>
                  )}
                  <section className="post-ans-container">
                    <h3>Your Answer</h3>
                    <form
                      onSubmit={(e) => handlePostAnswer(e, item.answer.length)}
                    >
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                      ></textarea>
                      <br />
                      <input
                        type="submit"
                        className="post-ans-btn"
                        value="Post Your Answer"
                      />
                    </form>
                    <p>
                      Browse other Question tagged{" "}
                      {item.questionTags.map((tag, index) => (
                        <Link to="/Tags" key={index} className="ans-tags">
                          {tag}
                        </Link>
                      ))}{" "}
                      or{" "}
                      <Link
                        to="/AskQuestion "
                        style={{ textDecoration: "none", color: "#0086d8" }}
                      >
                        ask your own question.
                      </Link>
                    </p>
                  </section>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
