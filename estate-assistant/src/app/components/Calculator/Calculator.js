"use client"

import InputData from "@/app/components/Calculator/InputData/InputData";
import OutputData from "@/app/components/Calculator/OutputData/OutputData";
import withAuth from "@/app/components/Auth/Login/withAuth";
import styles from './Calculator.module.css';
import {useState} from "react";

import {defaultAgencyPercent, getAgencyFraction, getFlatMeterCost} from "@/app/core/data/AgencyData";


function Calculator() {

    const [results, setResults] = useState({
        flatMeterCost: 0,
        agencyPercent: 0,
        agencyFraction: 0,
        sellerFraction: 0,
    });

    const handleCalculate = (cost, square, exchangeRate) => {
        const agencyPercent = defaultAgencyPercent(cost, exchangeRate);
        const flatMeterCost = getFlatMeterCost(cost, square);
        const agencyFraction = getAgencyFraction(cost, agencyPercent);
        const sellerFraction = cost - agencyFraction;

        setResults({
            flatMeterCost,
            agencyPercent,
            agencyFraction,
            sellerFraction,
        })
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

export default withAuth(Calculator);