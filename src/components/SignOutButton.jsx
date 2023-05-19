import { auth } from '../../firebaseClient.js'

function SignOutButton() {
    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            // Handle error
        }
    };

    return <button onClick={handleSignOut}>Sign Out</button>;
}