import React, { useState } from 'react';

function Register(props) {
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
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch("http://localhost:5000/users", config);

        if (response.status === 201) {
            setMessage("Registered Successfully")
        } else {
            console.log("something went wrong");
        }
    }

    return (
        <form>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input type="text" name='name' className='form-control' onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type="email" name='email' className='form-control' onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type="password" name='password' className='form-control' onChange={handleChange} />
            </div>
            <p>{message}</p>
            <button onClick={submitForm} className='btn btn-primary'>Register</button>
        </form>
    );
}

export default Register;