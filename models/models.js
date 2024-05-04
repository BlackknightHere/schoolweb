import { Timestamp, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db, storage } from "./firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

export const createStudent = async (item) => {
  const student_name = item.studentName;
  const student_id = item.studentId;
  const section_id = item.studentSect;
  const student_score = item.studentScore;
  const img = item.file;

  const imgRef = ref(storage, student_name);

  await uploadBytes(imgRef, img);

  await getDownloadURL(imgRef)
    .then((url) => {
      setDoc(doc(db, "students", student_id), {
        student_name,
        student_id,
        section_id,
        student_score,
        photoURL: url,
        created: Timestamp.now(),
      });
    })
    .catch((error) => {
      console.log("error kub");
    });
};

export const DeleteItem = async (id) => {
  await deleteDoc(doc(db, "students", id));
};

// export const UpdateStock = async (item, newStock) => {
//   await setDoc(doc(db, "items", item.i_id), {
//     i_id: item.i_id,
//     name: item.name,
//     i_collection: item.i_collection,
//     price: item.price,
//     instock: newStock,
//     photoURL: item.photoURL,
//     created: item.created,
//     last_update: Timestamp.now(),
//   });
// };

export const Delete = async (name) => {
  const imgRef = ref(storage, name);
  deleteObject(imgRef)
    .then(() => {})
    .catch((error) => {});
};
