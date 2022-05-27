import firebase from './Firebase';

export const signup = async(email, password,info)=>{
    const nUser = firebase.auth().createUserWithEmailAndPassword(email,password);
    const user = (await nUser).user;
    const url = 'Users/'+user.uid.toString()+'/profile';
    const ref = firebase.database().ref(url);
    ref.set({
        email:email,
        name:info.name,
        uid:user.uid,
        password:password
    })
    return user;
}

export const passwordReset = async (email, setsuccess) => {
    (await firebase.auth().sendPasswordResetEmail(email)).then((event)=>{console.log('here')}).catch((error)=>{console.log(error)})
}   


export const getcurrusr = async () => {
    var curruser;
    try {
        const user = firebase.auth().currentUser;
        curruser = (await user);
        return (curruser);
    }
    catch (e) {
        console.log(e);
        return;
    };
}

export const signout = async () => {
    var user;
    try {
        user = firebase.auth().signOut();
        return user;
    } catch (e) { console.log(e.message); }
    return user;
}


export const socialsignin = async (e) => {
    var user;
    var provider;
    if(e==='google'){
        provider = new firebase.auth.GoogleAuthProvider();
        
    }else if(e==='twitter'){
        provider = new firebase.auth.TwitterAuthProvider();
    }    
    else if(e==='facebook'){
        provider = new firebase.auth.FacebookAuthProvider();
    }
    try {
        const nuser = firebase.auth().signInWithPopup(provider);
        user = (await nuser).user;
    } catch (e) { console.log(e) }
    return user;
}

export const signin = async (email, password) => {
    var user;
    try {
        const nuser = firebase.auth().signInWithEmailAndPassword(email, password);
        user = (await nuser).user;
    } catch (e) {
        console.log(e);
    }
    return user;
}