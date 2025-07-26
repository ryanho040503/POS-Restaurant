import React, { useState}  from 'react';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Form submitted:', formData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <label className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>
                        Employee Email
                    </label>
                    <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
                        <input
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter employee email"
                            className="bg-transparent flex-1 text-white focus:outline-none"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>
                        Password
                    </label>
                    <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
                        <input
                            type="password"
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="bg-transparent flex-1 text-white focus:outline-none"
                            required
                        />
                    </div>
                </div>

                <button type="submit" className='w-full rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900'>
                    Sign in
                </button>
            </form>
        </div>
    )
}

export default Login