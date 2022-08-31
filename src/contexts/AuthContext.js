import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { 
    doc, 
    setDoc, 
    serverTimestamp, 
    getDoc,
    collection,
    query,
    onSnapshot,
    where
 } from "firebase/firestore"; 

import {auth, db} from "../firebase/config";
import { usd_to_trustcoin, trustcoin_to_usd } from "../DashboardUser/features/formulars";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userdata, setuserdata] = useState(null);
    const [routedata, setroutedata] = useState(null);
    const [trustcoins, settrustcoins] = useState(null);
    const [affiliates, setaffiliates] = useState(null);
    const [isSpinner, setIsSpinner] = useState(false);
    // const [affiliatesPercentage, setaffiliatesPercentage] = useState(10);
    const [affiliatesFee, setaffiliatesFee] = useState(null);
    const [teesforcoins, setteesforcoins] = useState('');
    const [teesforaffiliates, setteesforaffiliates] = useState('');
    const [coinrate, setcoinrate] = useState('');
    const [affiliatespercentage, setaffiliatespercentage] = useState(null);
    const [signupfee, setsignupfee] = useState('');
    const [bitcoinwallets, setbitcoinwallets] = useState([]);
    const [ethereumwallets, setethereumwallets] = useState([]);
    const [tronwallets, settronwallets] = useState([]);
    const [proofImg, setproofImg] = useState(null);
    const [my_avatars, set_my_avatars] = useState([]);
    const [hasKYC, set_hasKYC] = useState(null);
    const [withdrawRequest, set_withdrawRequest] = useState(null);
    const [affiliatesRequest, set_affiliatesRequest] = useState(null);
    const [myAvatar, setMyAvatar] = useState(null);

    const [system_rates, set_system_rates] = useState([]);


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
            coins: "0.00",
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
                affiliatespercentage: system_rates[0].percentage,
                affiliatesFee: system_rates[1].fee,
                // affiliatespercentage,
                // affiliatesFee,
            }
        }, { merge: true });
        await setDoc(doc(db, "affiliates", id), {});
        await setDoc(doc(db, "withdrawRequests", id), {
            id,
            type: "",
            walletType: "",
            walletAddress: "",
            amount: "",
            isServed: "pending",
            isEligible: false,
            names,
            email,
        });
        await setDoc(doc(db, "affiliateRequests", id), {
            id,
            type: "",
            walletType: "",
            walletAddress: "",
            amount: "",
            isServed: "pending",
            isEligible: false,
            names,
            email,
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
    const addAffiliatesRequest = async (id, type, walletType, walletAddress, amount) => {
        await setDoc(doc(db, "affiliateRequests", id), {
            id,
            type,
            walletType,
            walletAddress,
            amount,
            isServed: "pending",
            time: serverTimestamp(),
            isEligible: false,
        }, { merge: true });
        alert("Request placed successfully.")
    }
    const removeAffiliatesRequest = async (id) => {
        await setDoc(doc(db, "affiliateRequests", id), {
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
        // window.location.reload();
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
        // window.location.reload();
    }

    const userVerificationFirebase = async (id) => {
        let deducted = (signupfee - ((affiliatespercentage / 100) * signupfee));

        await setDoc(doc(db, "users", id), {
            isVerified: true,
        }, { merge: true });

        await setDoc(doc(db, "trust-coins", id), {
            // coins: deducted,
            coins: usd_to_trustcoin(deducted, coinrate),
        }, { merge: true });
        await setDoc(doc(db, "withdrawRequests", id), {
            isEligible: true,
        }, { merge: true });
        await setDoc(doc(db, "affiliateRequests", id), {
            isEligible: true,
        }, { merge: true });

        let userVerityData = getData(id).then(data=>{
            console.log("Veri data", data.refererId)
            approveAffiliate(data.refererId, id)
        })

        alert("User is now verified");
        // window.location.reload();
    }

    const approveAffiliate = async (ref_id, affiliate_id) => {
        await setDoc(doc(db, "affiliates", ref_id), {
            [affiliate_id]: {
                isVerified: true
            }
        }, { merge: true });
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
        let req_id = Math.random().toString();
        await setDoc(doc(db, "topup_proofs", id), {
            [req_id]: {
                id,
                req_id,
                img_url,
                amount,
                wallet_type,
                wallet_address,
                time_of_request: serverTimestamp(),
                time_of_response: "",
                isServed: false,
            }
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
            setUser(null);
            setuserdata(null);
            setroutedata(null);
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
    const getAffiliatesFee = async () => {
        const docRef = doc(db, "rates", "signupfee");
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
                    userType: udata.userType,
                    hasProof: udata.hasProof,
                })
                setuserdata({...udata})
            })

            currentUser && getCoins(currentUser.uid).then((udata) => settrustcoins({...udata}));
            // currentUser && getAffiliates(currentUser.uid).then((udata) => {
            //     setaffiliates(Object.values(udata))
            //     console.log("Expected data", Object.values(udata))
            // });

            currentUser && getCoinTees().then((udata) => setteesforcoins(udata.value));
            currentUser && getAffiliatesTees().then((udata) => setteesforaffiliates(udata.value));
            currentUser && getCoinRate().then((udata) => setcoinrate(udata.tc_per_usd));
            currentUser && getAffiliatesPercentage().then((udata) => setaffiliatespercentage(udata.percentage));
            currentUser && getSignupFee().then((udata) => setsignupfee(udata.fee));

            currentUser && getBitcoinWallets().then((udata) => setbitcoinwallets(Object.values(udata)));
            currentUser && getEthereumWallets().then((udata) => setethereumwallets(Object.values(udata)));
            currentUser && getTronWallets().then((udata) => settronwallets(Object.values(udata)));
            // currentUser && getKYCData(currentUser.uid).then((udata) => set_hasKYC(udata.hasKYC));
            // currentUser && getWithdrawRequest(currentUser.uid).then((udata) => set_withdrawRequest(udata));
            // currentUser && getAffiliatesRequest(currentUser.uid).then((udata) => set_affiliatesRequest(udata));
            // currentUser && getAffiliatesFee().then((udata) => setaffiliatesFee(udata.fee));
            currentUser && getAffiliatesFee().then((udata) => setaffiliatesFee(udata));

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

    useEffect(() => {
        const q = query(collection(db, "rates"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const system_rates = [];
          querySnapshot.forEach((doc) => {
            system_rates.push(doc.data());
          });
          set_system_rates(system_rates);
        });
    
        return () => {
          unsubscribe();
      }
      }, [])

    useEffect(() => {
        const q = query(collection(db, "avatars"), where("id", "==", `${user?.uid}`));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const my_avatar = [];
          querySnapshot.forEach((doc) => {
            my_avatar.push(doc.data());
          });
          setMyAvatar(my_avatar);
        //   console.log("My avita", my_avatar);
        });
    
        return () => {
          unsubscribe();
      }
      }, [user])

    useEffect(() => {
        const q = query(collection(db, "withdrawRequests"), where("id", "==", `${user?.uid}`));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const withdraw_request = [];
          querySnapshot.forEach((doc) => {
            withdraw_request.push(doc.data());
          });
          set_withdrawRequest(withdraw_request[0]);
        //   console.log("My requesta", withdraw_request);
        });
    
        return () => {
          unsubscribe();
      }
      }, [user])

    useEffect(() => {
        const q = query(collection(db, "KYC"), where("id", "==", `${user?.uid}`));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const myKYC = [];
          querySnapshot.forEach((doc) => {
            myKYC.push(doc.data());
          });
          set_hasKYC(myKYC[0]?.hasKYC);
        //   console.log("My KYCyo", myKYC);
        });
    
        return () => {
          unsubscribe();
      }
      }, [user])

    // useEffect(() => {
    //     // const q = query(collection(db, "affiliates"), where("id", "==", `${user?.uid}`));
    //     const q = query(collection(db, "affiliates", user?.uid));
    //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //       const myAffiliates = [];
    //       querySnapshot.forEach((doc) => {
    //         myAffiliates.push(doc.data());
    //       });
    //     //   set_hasKYC(myAffiliates[0]);
    //       console.log("My affiliata", myAffiliates);
    //     });
    
    //     return () => {
    //       unsubscribe();
    //   }
    //   }, [user])

      useEffect(() => {
        const unsub = onSnapshot(doc(db, "affiliates", `${user?.uid}`), (doc) => {
            setaffiliates(Object.values(doc.data()))
            console.log("Current afil data: ", Object.values(doc.data()));
        });

        return () => {
            unsub();
        }
      }, [user])

      useEffect(() => {
        const unsub = onSnapshot(doc(db, "affiliateRequests", `${user?.uid}`), (doc) => {
            set_affiliatesRequest(doc.data())
            console.log("Current afil reqs: ", doc.data());
        });
      }, [user])

      const getAffiliatesRequest = async (id) => {
        const docRef = doc(db, "affiliateRequests", id);
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

    //   const getKYCData = async (id) => {
    //     const docRef = doc(db, "KYC", id);
    //     const docSnap = await getDoc(docRef);

    //     try {
    //         const data = docSnap.data();
    //         return data
    //     } catch (error) {
    //         console.log("My error", error)
    //     }
    // }

    //   const getWithdrawRequest = async (id) => {
    //     const docRef = doc(db, "withdrawRequests", id);
    //     const docSnap = await getDoc(docRef);

    //     try {
    //         const data = docSnap.data();
    //         return data
    //     } catch (error) {
    //         console.log("My error", error)
    //     }
    // }

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
            addTopupProofFirebase,
            system_rates,
            affiliatesRequest,
            addAffiliatesRequest,
            removeAffiliatesRequest,
            myAvatar
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => useContext(AuthContext);