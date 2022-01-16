import * as Realm from "realm-web";

// const mgcCllection ="";

// const mgService ="";

// const mgDatabase ="";
      
export const Application = new Realm.App({ id: "coffee-app-xslgo" });
// export const Mongo = Application.services.mongodb(mgService);
// export const collection = Mongo.db(mgDatabase).collection(
//     mgcCllection
// );
      
export async function LoginWithGoogle(setAuthState) {
    // Redirect Uri : <AppDomain>/redirect
    const RedirectUri = "http://localhost:3000/redirect"
    const credentials = Realm.Credentials.google(RedirectUri);
    Application.logIn(credentials).then((user) => {
        setAuthState({
            isLoggedIn: true,
            currentUser: user,
        });
        console.log("signed in successfully with id:" + user.id);
    });
}