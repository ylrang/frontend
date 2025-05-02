import React, {useState} from 'react';

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    })

    const {name, email, tel} = inputs; // inputs 객체 배열에 있는 객체를 각각 빼주기

    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setInputs({
            ...inputs,  //inputs 배열을 deep copy
            [name]: value   // 기존의 입력을 새 입력으로 업데이트
        });
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" name="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" name="email" value={email} onChange={onChange} />
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" name="tel" value={tel} onChange={onChange}/>
            </div>
            <br />
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>
        </div>
    );
};

export default Input2;