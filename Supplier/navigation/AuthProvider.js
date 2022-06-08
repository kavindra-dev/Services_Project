import React, {createContext, useState} from "react";
import auth from '@react-native-firebase/auth';
import firebaserel, { firebase } from '@react-native-firebase/database';

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
                        await auth().signInWithEmailAndPassword(email,password)
                        .then(setUser(auth().currentUser().uid));
                    } catch (error) {
                        console.log(error);
                    }
                },
                register: async (fullName,userName,phone,email,password,userType) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email,password)
                        .then(() =>{
                            firebaserel().ref('users').child(auth().currentUser.uid).set({
                                fullName:fullName,
                                userName:userName,
                                phone:phone,
                                //email:result.user.email,
                                email:email,
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
                orderAddress: async(address1, address2, userType, userId) =>{
                    try {
                        firebase.database().ref("orders/").child(userId).set({
                            address1: address1,
                            address2: address2,
                            userType: userType,
                            uid: userId,
                            orderstatus : "0",
                        })
                    } catch (error) {
                        
                    } 
                },
                orderFinished: async(address1, address2, userType, userId) =>{
                    try {
                        firebase.database().ref("ordersDone/").child(userId).set({
                            address1: address1,
                            address2: address2,
                            userType: userType,
                            uid: userId,
                            orderstatus : "3",
                        })
                    } catch (error) {
                        
                    }
                },
            }}>
            {children}
        </AuthContext.Provider>
    );
}