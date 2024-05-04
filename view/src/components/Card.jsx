import React, { useEffect, useState } from "react";
// import { handleUpdateStock } from "../../../controllers/submitController";
import { handleDeleteItem } from "../../../controllers/deleteController";

const Card = ({ student }) => {
  // const [count, setCount] = useState(item.instock);
  const id = student.student_id;

  // const clickAdd = () => {
  //   setCount(count + 1);
  // };

  // const clickMi = () => {
  //   setCount(count - 1);
  // };

  const clickDelete = () => {
    try {
      handleDeleteItem(student.student_id, student.student_name);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   handleUpdateStock(student, count);
  // }, [count]);

  return (
    <div className="card">
      <div className="imgBox">
        <img src={student.photoURL} />
      </div>
      <div className="itemDetails">
        <h2>
          {student.student_name}
          <br />
        </h2>
        <h3>ID: {student.student_id}</h3>
        <h3>Score: {student.student_score}</h3>
        <h4>Section: {student.section_id} </h4>
        <div className="buttons">
          {/*<button className="ad">
            +
          </button>
          <button className="mi">
            -
          </button>
          <button className="editBtn">Edit</button>*/}
          <button className="deleteBtn" onClick={clickDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
