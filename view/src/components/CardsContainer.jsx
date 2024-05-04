import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../models/firebase";
import Card from "./Card";

const CardsContainer = () => {
  const [students, setStudents] = useState([]);
  const studentRef = collection(db, "students");

  useEffect(() => {
    const fetchData = async () => {
      let list = [];

      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        querySnapshot.forEach((doc) => {
          list.push(doc);
          // เมื่อ list เปลี่ยน เริ่มทำงาน useeffect 
        });
        const data = await getDocs(studentRef);
        setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.student_id })));      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="cardscontainer">
      {students.map((s) => (
        <Card student={s} key={s.student_id} />
      ))}
    </div>
  );
};

export default CardsContainer;
