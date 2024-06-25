import React, { useState } from 'react';

function Login(props) {
    const [formData, setFormData] = useState(null);
    const [message, setMessage] = useState("");
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }
        ))
    }

    const submitForm = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });

        if (response.ok) {
            const user = await response.json();
            if (user.length > 0) {
                setMessage("successfully logged in");
            } else {
                setMessage("email/password incorrect");
            }
        } else {
            setMessage("something went wrong");
        }
    }

    return (
        <form>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type="email" name='email' className='form-control' onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type="password" name='password' className='form-control' onChange={handleChange} />
            </div>
            <p>{message}</p>
            <button onClick={submitForm} className='btn btn-primary'>Login</button>
        </form>
    );
}

export default Login;