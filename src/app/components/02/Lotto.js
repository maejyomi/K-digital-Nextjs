"use client"
import { useEffect, useState } from "react";
import LottoNums from "./LottoNums";

const Lotto = () => {
    const [nums, setNums] = useState();

    // 버튼 클릭 이벤트
    const handleClick = () => {
        let temp = [];

        while(temp.length < 7){
            let n = Math.floor(Math.random()*45)+1;
            if(temp.indexOf(n)<0) temp.push(n);
        }
        setNums(temp);
    }

    // nums 변수 변경시 수행
    useEffect(()=>{
       console.log("nums = ", nums)
    }, [nums]);

    return (
        <main className="flex justify-center">
            <article>
                <header className="flex justify-center my-5">
                    <h1>로또 생성기</h1>
                </header>
                { nums? <LottoNums ns={nums} /> : '숫자가 없습니다' }
                <footer className="flex justify-center">
                    <button onClick={handleClick} className="bg-blue-400 hover:bg-blue-600 text-white p-2 rounded-md mt-5">생성하기</button>
                </footer>
            </article>
        </main>
    );
};

export default Lotto;