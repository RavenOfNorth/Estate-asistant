import Header from "@/app/components/Header/Header";
import CalculatorWrapper from "@/app/components/Main/CalculatorWrapper";
import {getParserInfo} from "@/app/parser/Parser";



export default function Main() {
    const props ={
        usdValue: getParserInfo
    }
    return (
        <div className="app">
            <Header />
            <CalculatorWrapper {...props}/>
        </div>
    )
}