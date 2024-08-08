import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "./config.tsx";

export const onCreateDocument = (testdata: {}) => {
  const ref = collection(firestore, "workouts");
  let data = {
    testData: testdata,
  };
  try {
    addDoc(ref, data);
  } catch (err) {
    console.log(err);
  }
};
