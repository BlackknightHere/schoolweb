import React from "react";
import { handlesSubmitStudent } from "../../../controllers/submitController";
import { useNavigate } from "react-router-dom";
import Add from "../images/plus.png";
//import { collection } from "firebase/firestore";
//import { db } from "../../../models/firebase";

const CreateStudent = () => {
  //const [items, setItems] = useState([]);
  //const iRef = collection(db, "items");

  const navigate = useNavigate();
  const Submit = async (e) => {
    e.preventDefault();
    const studentName = e.target[0].value;
    const studentId = e.target[1].value;
    const studentRoom = e.target[2].value;
    const studentScore = e.target[3].value;
    const file = e.target[4].files[0];
    handlesSubmitStudent(studentName, studentId, studentRoom, studentScore, file);
    navigate("/");
  };

  const Back = () => {
    navigate("/");
  };

  /*
  useEffect(() => {
    
  }, [ ])
  */

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo" onClick={Back}>
          REGISTER
        </span>
        <form onSubmit={Submit}>
          <input type="text" placeholder="Student Name" />
          <input type="text" placeholder="Student ID" />
          <input type="text" placeholder="Section ID" />
          <input type="number" placeholder="Test Score (30)" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add Your photo</span>
          </label>
          <button>CONFIRM</button>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
