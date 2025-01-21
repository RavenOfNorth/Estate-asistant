import {signIn} from "next-auth/react";

export default function SignIn() {
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    signIn("credentials", {
                        redirect: true,
                        username: e.target.username.value,
                        password: e.target.password.value,
                    });
                }}
            >
                <label>
                    Username:
                    <input type="text" name="username"/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password"/>
                </label>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}