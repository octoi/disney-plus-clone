import { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { selectUserEmail } from '../features/user/userSlice';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';

export default function AuthProtected({ children }) {
    const userEmail = useSelector(selectUserEmail);
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(async user => {
            if (!user) {
                history.push("/login")
            }
        })
    }, [])

    return (
        <div>
            {children}
        </div>
    )
}
