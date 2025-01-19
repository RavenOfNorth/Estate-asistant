"use client"

import { useEffect, useState } from 'react'
import {getUsdExchangeRate} from "@/app/parser/CurrencyParser/CurrencyParser";

import styles from './InputData.module.css'

export default function InputData() {
    const [usdValue, setUsdValue] = useState('');

    useEffect(() => {
        getUsdExchangeRate().then((rate) => {
            if (rate) {
                setUsdValue(rate)
            }
            }
        );
    }, [])

    return (
        <div className={styles.inputData}>
            <label htmlFor="square">Общая площадь квартиры (кв.м.)</label>
            <input className={styles.inputValue} id="square" type="number" name="square" required/><br/>
            <label htmlFor="cost-dollar">Стоимость квартиры в USD</label>
            <input className={styles.inputValue} id="cost-dollar" type="number" name="cost-dollar" required/><br/>
            <label htmlFor="nbrb-dollar">Курс USD НБРБ</label>
            <input className={styles.inputValue} id="nbrb-dollar" type="number" name="cost-dollar" value={usdValue} required readOnly/>
            <button className={styles.button} id="calculator-btn" type="submit">Рассчитать</button>
        </div>
    )
}