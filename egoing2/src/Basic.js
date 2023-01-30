import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function Basic() {
    const [inputs, setInputs] = useState({
        username : '',
        address : ''
    });
    const { username, address } = inputs;
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }
    const [users, setUsers] = useState([
        {
            id : 1,
            username : 'velopert',
            address : 'seoul',
            active : true
        },
        {
            id : 2,
            username : 'tester',
            address : 'new york',
            active : true
        },
        {
            id : 3,
            username : 'liz',
            address : 'tokyo',
            active : true
        }
    ]);

    const nextId = useRef(4);
    const onCreate = () => {
        const user = {
            id : nextId.current,
            username,
            address
        };
        setUsers([...users, user]);
        setInputs({
            username : '',
            address : ''
        });
        nextId.current += 1;
    }

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    }
    const onToggle = id => {
        setUsers (users.map(user => user.id === id ? {...user, active : !user.active} : user))
    }
    return (
        <div>
            <CreateUser username={username} address={address} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        </div>
    )
}

export default Basic