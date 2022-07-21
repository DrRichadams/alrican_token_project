import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore"; 

import {auth, db} from "../firebase/config";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [routedata, setroutedata] = useState(null)

    const addUserToFirestore = async (id, names, email, address, dob, cell) => {
        await setDoc(doc(db, "users", id), {
            id,
            names,
            email,
            address,
            dob,
            cell,
            photoUrl: "",
            userType: "normal",
            isVerified: false,
            createdAt: serverTimestamp(),
        });
    }

    const createUser = (email, password, names, address, dob, cell) => {
        return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const {user} = userCredential;
            addUserToFirestore(user.uid, names, email, address, dob, cell);
            console.log(user);
        });
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    const getData = async (uid) => {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        try {
            const data = docSnap.data();
            return data
        } catch (error) {
            console.log("My error", error)
        }

        // if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        // } else {
        // // doc.data() will be undefined in this case
        // console.log("No such document!");
        // }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // getData(currentUser.uid)
            // console.log("My ID", currentUser.uid)
            // console.log(currentUser);
            setUser(currentUser)
            getData(currentUser.uid).then((udata) => {
                setroutedata({
                    isVerified: udata.isVerified,
                    userType: udata.userType
                })
                // console.log("My udata", udata.isVerified)
                // console.log("My udata", udata.userType)
            })
        })
        return () => {
            unsubscribe();
        }
    }, []);

    return(
        <AuthContext.Provider value={{createUser, user, logout, signIn, routedata}}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => useContext(AuthContext);