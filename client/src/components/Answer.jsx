import React from "react";
import { Link, useParams } from "react-router-dom";
import "./questionDetails.css";
import moment from "moment";
import Avatar from "./Avatar";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnswer } from "../actions/question";
const Answer = ({ item }) => {
  const location = useLocation();
  const url = "https://stackoverflow-production.netlify.app";
  const shareme = url + location.pathname;
  const User = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
  };
  return (
    <div>
      {item.answer.map((ans, index) => (
        <div className="display-ans" key={index}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div className="">
              <CopyToClipboard
                text={shareme}
                onCopy={() => alert("Copied url: " + shareme)}
              >
                <button onClick>Share</button>
              </CopyToClipboard>
              {User?.result?._id === ans.userId && (
                <button
                  onClick={() => {
                    handleDelete(ans._id, item.noOfAnswers);
                  }}
                >
                  Delete
                </button>
              )}
            </div>
            <div className="">
              <p>answered {moment(ans.answeredOn).fromNow()}</p>
              <Link
                to={`/Users/${ans.userId}`}
                className="user-link"
                style={{ color: "#0086d8", textDecoration: "none" }}
              >
                <Avatar
                  children={ans.userAnswered.charAt(0).toUpperCase()}
                  backgroundColor="green"
                  py="8px"
                  px="5px"
                  color="white"
                />
                <div className="">{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Answer;
