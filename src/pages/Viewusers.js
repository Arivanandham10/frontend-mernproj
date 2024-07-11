import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/view.css';

const Viewusers = () => {
    const [user, setUsers] = useState([]);
    const [filtered, setFiltered] = useState([]); 
    
    useEffect(() => {
        axios.get('http://localhost:4000/viewuser')
            .then((res) => {
                setUsers(res.data);
                setFiltered(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    
    const deleteUser = (id) => {
        axios.delete(`http://localhost:4000/deleteuser/${id}`)
            .then((res) => {
                console.log(res.data);
                const updatedUsers = user.filter(user => user._id !== id);
                setUsers(updatedUsers);
                setFiltered(updatedUsers);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    const searchUser = (e) => {
        const search = e.target.value.toLowerCase();
        const filtered = user.filter((user) => {
            return user.name.toLowerCase().includes(search);
        });
        setFiltered(filtered);
    };
    
    return (
        <div>
            <div className='container'>
                <div className='searchuser'>
                    <input 
                        type="search" 
                        placeholder='Search User' 
                        className='Suser' 
                        onChange={searchUser} 
                    />
                    <button className='sbtn'>Search</button>
                </div>
                <div className='userlist'>
                    <table className='tdata'>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phoneno</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneno}</td>
                                    <td>
                                        <Link to={`/updateuser/${user._id}`}>
                                            <button className='ubtn'>Update</button>
                                        </Link>
                                        <button className='dbtn' onClick={() => deleteUser(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Viewusers;
