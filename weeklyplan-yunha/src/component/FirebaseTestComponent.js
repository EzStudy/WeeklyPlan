
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase";
import {useState} from "react";

export default async function FirebaseTestComponent() {

    const [docs, setDocs] = useState("");
    let result = '';
    const querySnapshot = await getDocs(collection(db, "test"));
    querySnapshot.forEach((doc) => {
        setDocs(doc.id);
        console.log(`${doc.id} => ${doc.data()}`);
        result = doc.data().testId;
        console.log(`${doc.data().testId}`);

    });

    return result;

}

