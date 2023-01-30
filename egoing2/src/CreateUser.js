import React from 'react';

function CreateUser( { username, address, onChange, onCreate }){
    return (
        <div>
            <input
                name='username'
                placeholder='계정명'
                onChange = {onChange}
                value = {username}    
            />
            <input
                name='address'
                placeholder='이메일'
                onChange={onChange}
                value={address}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default CreateUser