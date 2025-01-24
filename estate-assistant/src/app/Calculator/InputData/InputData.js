"use client"

import { useEffect, useState } from 'react'
import {getUsdExchangeRate} from "@/app/core/parser/CurrencyParser/CurrencyParser";
import styles from './InputData.module.css'

export default function InputData({onCalculate}) {
    const [usdValue, setUsdValue] = useState('');
    const [cost, setCost] = useState('');
    const [square, setSquare] = useState('');

    useEffect(() => {
        getUsdExchangeRate().then((rate) => {
            if (rate) {
                setUsdValue(rate)
            }
            }
        );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cost && square && usdValue) {
            onCalculate(
                parseFloat(cost),
                parseFloat(square),
                parseFloat(usdValue)
            )
        }
    }

    return (
        <form className={styles.inputData} onSubmit={handleSubmit}>
            <label htmlFor="square">Общая площадь квартиры (кв.м.)</label>
            <input
                className={styles.inputValue}
                id="square" type="number"
                name="square"
                required
                onChange={(e) => setSquare(e.target.value)}
            />
            <br/>
            <label htmlFor="cost-dollar">Стоимость квартиры в USD</label>
            <input
                className={styles.inputValue}
                id="cost-dollar"
                type="number"
                name="cost-dollar"
                required
                onChange={(e) => setCost(e.target.value)}
            />
            <br/>
            <label htmlFor="nbrb-dollar">Курс USD НБРБ</label>
            <input
                className={styles.inputValue}
                id="nbrb-dollar"
                type="number"
                name="cost-dollar"
                value={usdValue}
                required
                readOnly
                onChange={(e) => setUsdValue(e.target.value)}
            />
            <button
                className={styles.button}
                id="calculator-btn"
                type="submit">Рассчитать</button>
        </form>
    )
}