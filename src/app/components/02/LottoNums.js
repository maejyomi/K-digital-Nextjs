import style from './Lotto.module.css'

const LottoNums = ({ns}) => {

    console.log("Lotto Nums : ", ns);

    const nsTag = ns.map((item, idx) => 
        {
            console.log(idx);
            let n = Math.floor(item / 10);
            let temp = "";
            if(idx==6) temp = "+";
            return (
                <>
                    {temp}<div key={'ns'+idx} className={style[`lottonum${n+1}`]}>{item}</div>
                </>
            );
        }
    );
    return (
        <div className={style.lottobox}>
            {nsTag}
        </div>
    )
}

export default LottoNums

