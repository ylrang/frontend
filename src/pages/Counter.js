import React, {useState} from 'react';

const Counter = () => {
    const [num, setNumber] = useState(0)   //기본값 0 인 num 변수, num 변수를 바꿀 수 있는 setter 함수 setNumber (지정한 변수는 setter 함수로만 상태 관리 가능)
    const increase = () => {
        setNumber(num + 1);     //num = num + 1
    }
    const decrease = () => {
        setNumber(num - 1);
    }
    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter;