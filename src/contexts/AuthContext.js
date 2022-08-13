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
    // const [affiliatesPercentage, setaffiliatesPercentage] = useState(10);
    const [affiliatesFee, setaffiliatesFee] = useState(50);
    const [teesforcoins, setteesforcoins] = useState('');
    const [teesforaffiliates, setteesforaffiliates] = useState('');
    const [coinrate, setcoinrate] = useState('');
    const [affiliatespercentage, setaffiliatespercentage] = useState('');
    const [signupfee, setsignupfee] = useState('');
    const [bitcoinwallets, setbitcoinwallets] = useState([]);
    const [ethereumwallets, setethereumwallets] = useState([]);
    const [tronwallets, settronwallets] = useState([]);


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
                affiliatesPercentage: affiliatespercentage,
                affiliatesFee: affiliatesFee,
            }
        }, { merge: true });
        await setDoc(doc(db, "affiliates", id), {});
    }

    const addTeesFirebase = async (id, tees) => {
        await setDoc(doc(db, "tees_and_cees", id), {
            value: tees
        }, { merge: true });
    }
    const addWalletFirebase = async (id, name, address) => {
        const cur_id = Math.random().toString();
        await setDoc(doc(db, "wallets", id), {
            [cur_id]: {
                id: cur_id,
                name: `${name} (${id})`, 
                address,
                isActive: false,
                dateCreated: serverTimestamp(),
            }
        }, { merge: true });
    }

    const addCoinRateFirebase = async (rate) => {
        await setDoc(doc(db, "rates", "trustcoinrate"), { tc_per_usd: rate }, { merge: true });
        setcoinrate(rate)
    }
    const addAffiliatesPercentageFirebase = async (percentage) => {
        await setDoc(doc(db, "rates", "affiliates_percentage"), { percentage: percentage }, { merge: true });
        setaffiliatespercentage(percentage)
    }
    const addSignUpFeeFirebase = async (fee) => {
        await setDoc(doc(db, "rates", "signupfee"), { fee: fee }, { merge: true });
        setsignupfee(fee)
    }

    const updateWalletsFirebase = async (id, toEnable, toDisable) => {
        await setDoc(doc(db, "wallets", id), {
            [toEnable]: {
                isActive: true
            },
            [toDisable]: {
                isActive: false
            }
        }, { merge: true });
        alert("Wallet chabges successfully");
        window.location.reload();
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
    // const getRates = async () => {
    //     const docRef = doc(db, "rates", "affiliateRates");
    //     const docSnap = await getDoc(docRef);

    //     try {
    //         const data = docSnap.data();
    //         return data
    //     } catch (error) {
    //         console.log("My error", error)
    //     }
    // }
    const getCoinTees = async () => {
        const docRef = doc(db, "tees_and_cees", "forcoins");
        const docSnap = await getDoc(docRef);

        try {
            const data = docSnap.data();
            return data
        } catch (error) {
            console.log("My error", error)
        }
    }
    const getAffiliatesTees = async () => {
        const docRef = doc(db, "tees_and_cees", "foraffiliates");
        const docSnap = await getDoc(docRef);

        try {
            const data = docSnap.data();
            return data
        } catch (error) {
            console.log("My error", error)
        }
    }
    const getCoinRate = async () => {
        const docRef = doc(db, "rates", "trustcoinrate");
        const docSnap = await getDoc(docRef);

        try {
            const data = docSnap.data();
            return data
        } catch (error) {
            console.log("My error", error)
        }
    }
    const getAffiliatesPercentage = async () => {
        const docRef = doc(db, "rates", "affiliates_percentage");
        const docSnap = await getDoc(docRef);

        try {
            const data = docSnap.data();
            return data
        } catch (error) {
            console.log("My error", error)
        }
    }
    const getSignupFee = async () => {
        const docRef = doc(db, "rates", "signupfee");
        const docSnap = await getDoc(docRef);

        try {
            const data = docSnap.data();
            return data
        } catch (error) {
            console.log("My error", error)
        }
    }
    const getBitcoinWallets = async () => {
        const docRef = doc(db, "wallets", "bitcoin");
        const docSnap = await getDoc(docRef);

        try {
            const data = docSnap.data();
            return data
        } catch (error) {
            console.log("My error", error)
        }
    }
    const getEthereumWallets = async () => {
        const docRef = doc(db, "wallets", "ethereum");
        const docSnap = await getDoc(docRef);

        try {
            const data = docSnap.data();
            return data
        } catch (error) {
            console.log("My error", error)
        }
    }
    const getTronWallets = async () => {
        const docRef = doc(db, "wallets", "tron");
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
            setUser(currentUser) 
            currentUser && getData(currentUser.uid).then((udata) => {
                setroutedata({
                    isVerified: udata.isVerified,
                    userType: udata.userType
                })
                setuserdata({...udata})
            })

            currentUser && getCoins(currentUser.uid).then((udata) => settrustcoins({...udata}));
            currentUser && getAffiliates(currentUser.uid).then((udata) => setaffiliates(Object.values(udata)));

            currentUser && getCoinTees().then((udata) => setteesforcoins(udata.value));
            currentUser && getAffiliatesTees().then((udata) => setteesforaffiliates(udata.value));
            currentUser && getCoinRate().then((udata) => setcoinrate(udata.tc_per_usd));
            currentUser && getAffiliatesPercentage().then((udata) => setaffiliatespercentage(udata.percentage));
            currentUser && getSignupFee().then((udata) => setsignupfee(udata.fee));

            currentUser && getBitcoinWallets().then((udata) => setbitcoinwallets(Object.values(udata)));
            currentUser && getEthereumWallets().then((udata) => setethereumwallets(Object.values(udata)));
            currentUser && getTronWallets().then((udata) => settronwallets(Object.values(udata)));

            // currentUser && updateWalletsFirebase().then((udata) => alert("Wallets updated successfully"));
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
            affiliates,
            teesforcoins,
            teesforaffiliates,
            addTeesFirebase,
            coinrate,
            affiliatespercentage,
            signupfee,
            addCoinRateFirebase,
            addAffiliatesPercentageFirebase,
            addSignUpFeeFirebase,
            addWalletFirebase,
            bitcoinwallets,
            ethereumwallets,
            tronwallets,
            updateWalletsFirebase,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => useContext(AuthContext);