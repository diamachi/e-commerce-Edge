import React, { PureComponent, useState } from "react";
import data from "./data.json";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import "./Order.css";
import CustomInputt from "./CustomInputt";

const Order = () => {
  const [comment, setComment] = useState(data);
  const userId = "01a";
  const avatarUrl = "https://ui-avatars.com/api/name=Riya&background=random";
  const name = "Peeyush Yadav";
  const signinUrl = "/signin";
  const signupUrl = "/signup";
  let count = 0;
  comment.map((i) => {
    count += 1;
    i.replies && i.replies.map((i) => (count += 1));
  });
  const customInputFunc = (props) => {
    return (
      <CustomInputt
        parentId={props.parentId}
        cancellor={props.cancellor}
        value={props.value}
        edit={props.edit}
        submit={props.submit}
        handleCancel={props.handleCancel}
      />
    );
  };

  return (
    // <div classname="both-equal">
    //   <div className="cols-left">
    //     <p>col2</p>
    //   </div>
    <div className="products">
      <h1 className="heading">Product Id</h1>
      <div className="cols">
        <div className="commentSection">
          {/* <CommentSection
    currentUser={
      userId && { userId: userId, avatarUrl: avatarUrl, name: name }
    }
    commentsArray={comment}
    setComment={setComment}
    signinUrl={signinUrl}
    signupUrl={signupUrl}
  /> */}
          <div className="header"> </div>
          <CommentSection
            currentUser={
              userId && { userId: userId, avatarUrl: avatarUrl, name: name }
            }
            commentsArray={comment}
            setComment={setComment}
            signinUrl={signinUrl}
            signupUrl={signupUrl}
            customInput={customInputFunc}
          />
        </div>
        {/* <div class='verticalLine'></div> */}
        {/* <div className="commentSection">
    <div className="header">{count} Comments (user not logged in)</div>
    <CommentSection commentsArray={comment}
      setComment={setComment} signinUrl={signinUrl} signupUrl={signupUrl} />
  </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Order;
