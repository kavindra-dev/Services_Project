import React, {createContext, useState} from "react";
import auth from '@react-native-firebase/auth';
import firebaserel from '@react-native-firebase/database';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    return(
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login : async (email,password) =>{
                    try {
                        await auth().signInWithEmailAndPassword(email,password);
                    } catch (error) {
                        console.log(error);
                    }
                },
                register: async (fullName,userName,phoneNo,email,password,userType) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email,password)
                        .then(() =>{
                            firebaserel().ref('users').child(auth().currentUser.uid).set({
                                fullName:fullName,
                                userName:userName,
                                phone:phone,
                                email:result.user.email,
                                password:password,
                                uid:auth().currentUser.uid,
                                userType:userType
                            })                        })
                    } catch (error) {
                        console.log(error);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (error) {
                        console.log(error);
                    }
                },
            }}>
            {children}
        </AuthContext.Provider>
    );
}