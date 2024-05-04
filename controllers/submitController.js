import { createStudent } from "../models/models";

export const handlesSubmitStudent = async (name, id, sect, score, fle) => {
  let item = {
    studentName: name,
    studentId: id,
    studentSect: sect,
    studentScore: score,
    file: fle,
  };
  await createStudent(item);
};
