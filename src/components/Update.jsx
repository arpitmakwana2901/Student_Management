import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        name: '',
        userName: '',
        email: '',
        phone: '',
        website: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:369/students/${id}`)
            .then(res => {
                setStudent(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        setStudent({...student, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:369/students/${id}`, student)
            .then(res => {
                navigate('/studentList');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container mx-auto p-6 min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Edit Student</h1>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={student.name} 
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
                            <input 
                                type="text" 
                                name="userName" 
                                value={student.userName} 
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={student.email} 
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                            <input 
                                type="text" 
                                name="phone" 
                                value={student.phone} 
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Website</label>
                            <input 
                                type="text" 
                                name="website" 
                                value={student.website} 
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
                        >
                            Update Student
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;