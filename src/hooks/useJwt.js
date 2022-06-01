import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useJwt = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    // const callAboutPage = async () => {
    //     try {
    //         const res = await fetch('/about',{
    //             method: 'GET',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             credentials:"include"
    //         });

    //         const data = await res.json();
    //         console.log(data);
    //         console.log(data.email);
    //         setUser(data)

    //         if(!res.status === 200){
    //             const error = new Error(res.error)
    //             throw error;
    //         }

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() =>{
    //     callAboutPage();
        
    // },[]);

    useEffect(() => {
        fetch('/about')
            .then(res => res.json())
            .then(data => setUser(data))
            console.log(user);
    }, [user])
    
//     const [authError, setAuthError] = useState('');
//     const [admin, setAdmin] = useState(false);
//     const [token, setToken] = useState('');

//     const auth = getAuth();
//     const googleProvider = new GoogleAuthProvider();

//     const registerUser = (email, password, name, navigate) => {
//         setIsLoading(true);
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 setAuthError('');
//                 const newUser = { email, displayName: name};
//                 setUser(newUser);
//                 // save user to the database
//                 saveUser(email, name, 'POST');
//                 // send name to firebase after creation
//                 updateProfile(auth.currentUser, {
//                     displayName: name
//                 }).then(() => {
//                 }).catch((error) => {
//                 });
//                 navigate('/');
//             })
//             .catch((error) => {
//                 setAuthError(error.message);
//                 console.log(error);
//             })
//             .finally(() => setIsLoading(false));
//     }

//     const loginUser = (email, password, location, navigate) => {
//         setIsLoading(true);
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const destination = location?.state?.from || '/';
//                 navigate(destination);
//                 setAuthError('');
//             })
//             .catch((error) => {
//                 setAuthError(error.message);
//             })
//             .finally(() => setIsLoading(false));
//     }

//     const signInWithGoogle = (location, navigate) => {
//         setIsLoading(true);
//         signInWithPopup(auth, googleProvider)
//             .then((result) => {
//                 const user = result.user;
//                 saveUser(user.email, user.displayName, 'PUT');
//                 setAuthError('');
//                 const destination = location?.state?.from || '/';
//                 navigate(destination);
//             }).catch((error) => {
//                 setAuthError(error.message);
//             }).finally(() => setIsLoading(false));
//     }

//     // observer user state
//     useEffect(() => {
//         const unsubscribed = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setUser(user);
//                 getIdToken(user)
//                     .then(idToken => {
//                       console.log(idToken);  
//                        setToken(idToken);
//                    })
//             } else {
//                 setUser({})
//             }
//             setIsLoading(false);
//         });
//         return () => unsubscribed;
//     }, [auth])

    // useEffect(() => {
    // //     fetch(`https://blooming-bastion-94256.herokuapp.com/users/${user.email}`)
    //     fetch(`/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    // }, [user.email])

//     const logout = () => {
//         setIsLoading(true);
//         signOut(auth).then(() => {
//             // Sign-out successful.
//         }).catch((error) => {
//             // An error happened.
//         })
//            .finally(() => setIsLoading(false));
//     }

//     const saveUser = (email,  method) => {
//         const user = { email,  };
//     //     fetch('https://blooming-bastion-94256.herokuapp.com/users', {
//         fetch('/users', {
//             method: method,
//              headers: {
//                  'content-type': 'application/json'
//              },
//             body: JSON.stringify(user)
//          })
//             .then()
//    }

    return {
        user,
//         admin,
//         token,
        isLoading,
//         authError,
//         registerUser,
//         loginUser,
//         signInWithGoogle,
//         logout,
    }
}

export default useJwt;