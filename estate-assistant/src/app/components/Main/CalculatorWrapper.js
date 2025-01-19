import InputData from "@/app/components/Main/InputData/InputData";
import OutputData from "@/app/components/Main/OutputData/OutputData";
import styles from './CalculatorWrapper.module.css'

export default function CalculatorWrapper(props) {
    return(
        <main className={styles.main}>
            <div className={styles.container}>
                <InputData {...props}/>
                <OutputData />
            </div>
        </main>
    )
}