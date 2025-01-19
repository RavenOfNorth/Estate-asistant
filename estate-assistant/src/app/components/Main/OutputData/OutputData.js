import styles from './OutputData.module.css'

export default function OutputData() {
    return(
        <div className={styles.resultData}>
            <label htmlFor="adr-cost">Стоимость 1 кв.м.</label>
            <p className={styles.resultValue} id="adr-cost"></p>
            <label htmlFor="transaction-fee">Процент от сделки (%)</label>
            <p className={styles.resultValue} id="transaction-fee"></p>
            <label htmlFor="agency-fraction">Доля агенства (USD)</label>
            <p className={styles.resultValue} id="agency-fraction"></p>
            {/*<label for="agent-fraction">Доля агента (USD)</label>*/}
            {/*<p class="result-value" id="agent-fraction"></p>*/}
            <label htmlFor="seller-fraction">Доля продавца (USD)</label>
            <p className={styles.resultValue} id="seller-fraction"></p>

            {/*// TODO: Replace div below into other component*/}
        {/*    <div className="explanation">*/}
        {/*        <p className="explanation__main">Размер базовой величины - <span*/}
        {/*            className="solid">40 белорусских рублей</span><span*/}
        {/*            className="note">*</span></p>*/}
        {/*        <p className="explanation__note"><span>*</span> - размер базовой величины, действующий для*/}
        {/*            договоров, заключённых до 31.12.2024</p>*/}
        {/*    </div>*/}
        {/*    <div className="new-version-link">*/}
        {/*        <a className="new-version-link-item" href="https://ravenofnorth.github.io/realt-calculator-2025/">Новая*/}
        {/*            версия</a>*/}
        {/*    </div>*/}
        </div>
    )
}