import React, {useState} from 'react';

const SignUp = () => {
    
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "", 
        isAccepted: false
    })

    

    return (
        <div>
            <form>
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.name} />
                </div>
                <div>
                    <label>password</label>
                    <input type="password" name="name" value={data.name} />
                </div>
                <div>
                    <label>confirm Password</label>
                    <input type="password" name="name" value={data.name} />
                </div>
                <div>
                    <label>I accept terms of privacy policy</label>
                    <input type="checkBox" name="name" value={data.name} />
                </div>
                <button>Login</button>
                <button>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;