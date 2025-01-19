import InputData from "@/app/components/Main/InputData/InputData";
import OutputData from "@/app/components/Main/OutputData/OutputData";
import styles from './CalculatorWrapper.module.css'
import {useState} from "react";

import {defaultAgencyPercent, getAgencyFraction, getFlatMeterCost} from "@/app/core/data/AgencyData";


export default function CalculatorWrapper(props) {

    const [results, setResults] = useState({
        flatMeterCost: 0,
        agencyPercent: 0,
        agencyFraction: 0,
        sellerFraction: 0,
    });

    const handleCalculate = (cost, square, exchangeRate) => {
        const agencyPercent = defaultAgencyPercent(cost);
        const flatMeterCost = getFlatMeterCost(cost, square);
        const agencyFraction = getAgencyFraction(cost, square, agencyPercent);
        const sellerFraction = cost - agencyFraction;
    }

    return(
        <main className={styles.main}>
            <div className={styles.container}>
                <InputData onCalculate={handleCalculate}/>
                <OutputData results={results}/>
            </div>
        </main>
    )
}