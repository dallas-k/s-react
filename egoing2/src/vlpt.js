import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });
    const abc = useRef();

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }

    const onReset = () => {
        setInputs({
            name : '',
            nickname : ''
        });
        abc.current.focus();
    }

    return (
        <div>
            <input name='name' placeholder='이름' onChange={onChange} value={name} />
            <input name='nickname' placeholder='닉네임' onChange={onChange} value={nickname} ref={abc} />
            <button onClick={onReset}>Reset</button>
            <div>
                <h3>값</h3>
                {name} : "{nickname}"
            </div>
        </div>
    )
}

export default InputSample;