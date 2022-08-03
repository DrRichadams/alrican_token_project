import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore"; 

import {auth, db} from "../firebase/config";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userdata, setuserdata] = useState(null);
    const [routedata, setroutedata] = useState(null);
    const [trustcoins, settrustcoins] = useState(null);
    const [affiliates, setaffiliates] = useState(null);
    const [isSpinner, setIsSpinner] = useState(false);
    const [affiliatesPercentage, setaffiliatesPercentage] = useState(10);
    const [affiliatesFee, setaffiliatesFee] = useState(50);

    const addUserToFirestore = async (id, names, email, address, dob, cell, refId) => {
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
            refererId: refId,
            // affiliates: [],
        });

        await setDoc(doc(db, "trust-coins", id), {
            id,
            air_drops: "0.00",
            coins: "0.00"
        });
        await setDoc(doc(db, "affiliates", refId), {
            [id]: {
                id,
                isVerified: false,
                isClaimed: false,
                email,
                names,
                affiliatesPercentage: affiliatesPercentage,
                affiliatesFee: affiliatesFee,
            }
        }, { merge: true });
        await setDoc(doc(db, "affiliates", id), {});
    }

    const createUser = (email, password, names, address, dob, cell, refId) => {
        return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const {user} = userCredential;
            addUserToFirestore(user.uid, names, email, address, dob, cell, refId);
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

    const getCoins = async (uid) => {
        const docRef = doc(db, "trust-coins", uid);
        const docSnap = await getDoc(docRef);

        try {
            const data = docSnap.data();
            return data
        } catch (error) {
            console.log("My error", error)
        }
    }
    const getAffiliates = async (uid) => {
        const docRef = doc(db, "affiliates", uid);
        const docSnap = await getDoc(docRef);

        try {
            const data = docSnap.data();
            return data
        } catch (error) {
            console.log("My error", error)
        }
    }
    const getRates = async () => {
        const docRef = doc(db, "rates", "affiliateRates");
        const docSnap = await getDoc(docRef);

        try {
            const data = docSnap.data();
            return data
        } catch (error) {
            console.log("My error", error)
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // getData(currentUser.uid)
            // console.log("My ID", currentUser.uid)
            // console.log(currentUser);
            setUser(currentUser) 
            currentUser && getData(currentUser.uid).then((udata) => {
                setroutedata({
                    isVerified: udata.isVerified,
                    userType: udata.userType
                })
                setuserdata({...udata})
            })

            currentUser && getCoins(currentUser.uid).then((udata) => {
                settrustcoins({...udata});
                console.log("My coins", udata)
            })
            currentUser && getAffiliates(currentUser.uid).then((udata) => {
                // let affilArray = [];
                // for(const key in Object.keys(udata)) {
                //     affilArray.push(udata[key])
                //     console.log("My key", udata[key])
                // }
                setaffiliates(Object.values(udata));
                // setaffiliates(affilArray);
                console.log("My affiliates", Object.values(udata))
            })

            currentUser && getRates().then((udata) => {
                setaffiliatesFee(udata.affiliatesFee);
                setaffiliatesPercentage(udata.affiliatesPercentage);
                // console.log("My Rates", udata)
            })
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const loadSpinner = () => setIsSpinner(true);
    const unloadSpinner = () => setIsSpinner(false);

    return(
        <AuthContext.Provider value={{
            createUser, 
            user, 
            logout, 
            signIn, 
            routedata,
            isSpinner,
            loadSpinner,
            unloadSpinner,
            userdata,
            trustcoins,
            affiliates
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => useContext(AuthContext);