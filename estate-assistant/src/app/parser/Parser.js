import {getUsdExchangeRate} from "@/app/parser/CurrencyParser/CurrencyParser";

async function parser() {
    let usdRate = 0
    const exchangeRate = await getUsdExchangeRate();
    if (exchangeRate !== null) {
        usdRate = exchangeRate;
    } else {
        usdRate = "Error";
    }
}

export const getParserInfo = parser()