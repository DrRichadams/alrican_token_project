import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { 
    doc, 
    setDoc, 
    serverTimestamp, 
    getDoc,
    collection,
    query,
    onSnapshot
 } from "firebase/firestore"; 

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
    const [proofImg, setproofImg] = useState(null);
    const [my_avatars, set_my_avatars] = useState([]);
    const [hasKYC, set_hasKYC] = useState(null);
    const [withdrawRequest, set_withdrawRequest] = useState(null);


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
            hasProof: false,
            // affiliates: [],
        });

        await setDoc(doc(db, "trust-coins", id), {
            id,
            air_drops: "0.00",
            coins: "0.00"
        });
        await setDoc(doc(db, "KYC", id), {
            id,
            hasKYC: false,
            KYC_type: "",
            KYC_url: "",
            isAccepted: false,
        });
        await setDoc(doc(db, "avatars", id), {
            id,
            avatar_id: "default",
            url: `https://firebasestorage.googleapis.com/v0/b/acm-crypto.appspot.com/o/avatars%2Fdefault.png?alt=media&token=140155b0-fc3e-4472-a9c5-8b89a752973b`,
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
        });
        await setDoc(doc(db, "affiliates", id), {});
        await setDoc(doc(db, "withdrawRequests", id), {
            id,
            type: "",
            walletType: "",
            walletAddress: "",
            amount: "",
            isServed: "pending",
            isEligible: false,
        });
    }

    const addWithdrawRequest = async (id, type, walletType, walletAddress, amount) => {
        await setDoc(doc(db, "withdrawRequests", id), {
            id,
            type,
            walletType,
            walletAddress,
            amount,
            isServed: "pending",
            time: serverTimestamp(),
            isEligible: false,
        }, { merge: true });
    }
    const removeWithdrawRequest = async (id) => {
        await setDoc(doc(db, "withdrawRequests", id), {
            type: "",
            walletType: "",
            walletAddress: "",
            amount: "",
            isServed: "pending",
            time: "",
            isEligible: true
        }, { merge: true });
        alert("Request cancelled successfully")
    }
    const addTeesFirebase = async (id, tees) => {
        await setDoc(doc(db, "tees_and_cees", id), {
            value: tees
        }, { merge: true });
    }
    const addKYCFirebase = async (id, url) => {
        await setDoc(doc(db, "KYC", id), {
            id,
            hasKYC: true,
            KYC_type: "",
            KYC_url: url,
        }, { merge: true });
        window.location.reload();
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
        alert("Wallet changed successfully");
        window.location.reload();
    }
    const updateAvatarFirebase = async (id, name, av_id) => { 
        await setDoc(doc(db, "avatars", id), {
            avatar_id: av_id,
            url: name
        }, { merge: true });
        alert("Avatar updated successfully");
        window.location.reload();
    }

    const userVerificationFirebase = async (id) => {
        // We have to later subtract the affiliates percentage from signup fee

        let deducted = (signupfee - ((affiliatespercentage / 100) * signupfee));

        await setDoc(doc(db, "users", id), {
            isVerified: true,
        }, { merge: true });

        await setDoc(doc(db, "trust-coins", id), {
            coins: deducted,
        }, { merge: true });
        alert("User is now verified");
        // window.location.reload();
    }
    const hasProvidedProofFirebase = async (user_id) => {
        await setDoc(doc(db, `users`, user_id), {
            hasProof: true,
        }, { merge: true });
    }
    const addImgUrlFirebase = async (user_id, collect_name, img_name) => {
        await setDoc(doc(db, `${collect_name}`, user_id), {
            id: user_id,
            img_name,
        }, { merge: true });
        console.log("img Url added to database");
        // window.location.reload();
    }

    const addTopupProofFirebase = async (id, img_url, amount, wallet_type, wallet_address) => {
        await setDoc(doc(db, "topup_proofs", id), {
            id,
            img_url,
            amount,
            wallet_type,
            wallet_address,
            time_of_request: serverTimestamp(),
            time_of_response: "",
        }, { merge: true });
    }

    // const getProofImg = async (id) => {
    //     const docRef = doc(db, "proofs", id);
    //     const docSnap = await getDoc(docRef);

    //     try {
    //         const data = docSnap.data();
    //         console.log(data)
    //         return data
    //     } catch (error) {
    //         console.log("My error", error)
    //     }
    // }

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
        return signOut(auth).then(() => {
            // window.location.reload();
        })
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
    const getKYCData = async (id) => {
        const docRef = doc(db, "KYC", id);
        const docSnap = await getDoc(docRef);

        try {
            const data = docSnap.data();
            return data
        } catch (error) {
            console.log("My error", error)
        }
    }
    const getWithdrawRequest = async (id) => {
        const docRef = doc(db, "withdrawRequests", id);
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
                    userType: udata.userType,
                    hasProof: udata.hasProof,
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
            currentUser && getKYCData(currentUser.uid).then((udata) => set_hasKYC(udata.hasKYC));
            currentUser && getWithdrawRequest(currentUser.uid).then((udata) => set_withdrawRequest(udata));

            // currentUser && getProofImg(currentUser.id).then((udata) => setproofImg(udata));
            // currentUser && getProofImg(currentUser.id);
        })
        return () => {
            unsubscribe();
        }
    }, []);


    useEffect(() => {
        const q = query(collection(db, "avatar-store"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const avatars = [];
          querySnapshot.forEach((doc) => {
            avatars.push(doc.data());
          });
          set_my_avatars(avatars);
        });
    
        return () => {
          unsubscribe();
      }
      }, [])

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
            addImgUrlFirebase,
            proofImg,
            userVerificationFirebase,
            hasProvidedProofFirebase,
            updateAvatarFirebase,
            my_avatars,
            addKYCFirebase,
            hasKYC,
            addWithdrawRequest,
            withdrawRequest,
            removeWithdrawRequest,
            addTopupProofFirebase
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => useContext(AuthContext);