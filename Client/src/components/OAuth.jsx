import { Button } from "flowbite-react";
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth';
import { app } from "../firebase";
import {useDispatch} from 'react-redux';
import {signInSucess} from '../redux/user/userSlice';
import {useNavigate} from 'react-router-dom'; 



export default function OAuth(){
    const dispatch = useDispatch();
    const auth = getAuth(app);
    const navigate = useNavigate();
    const handleGoogleClick = async () =>{
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt:'select_Account'})
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google',{
                    method:'POST',
                    headers :{'content-Type':'application/json'},
                    body: JSON.stringify({
                        name: resultsFromGoogle.user.displayName,
                        email: resultsFromGoogle.user.email,
                        googlePhotoURL: resultsFromGoogle.user.photoURL,
                    }),
            });
            const data = await res.json()
            if(res.ok){
                dispatch(signInSucess(date));
                navigate('/');
            }
        }catch(error){
            console.log(error);
        }
    }
    return (
        <Button type="button" gradientDuoTone='pinkToOrange' Outline OnClick={handleGoogleClick}>
        <AiFillGoogleCircle className='w-6 h-6 mr-5'/>
            Continue with Google  
        </Button>
    )


}
