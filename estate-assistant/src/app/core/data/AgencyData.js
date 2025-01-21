export function defaultAgencyPercent(costUSD, rateUSD) {

    const baseValue = 42;

    const costBYN = costUSD * rateUSD;

    const baseCost = costBYN / baseValue;

    const ranges = [
        { max: 4200, percent: 3.0 },
        { max: 5000, percent: 2.5 },
        { max: 5800, percent: 2.4 },
        { max: 6600, percent: 2.3 },
        { max: 7500, percent: 2.2 },
        { max: 8300, percent: 2.1 },
        { max: 9100, percent: 2.0 },
        { max: 10000, percent: 1.9 },
        { max: 10500, percent: 1.8 },
        { max: 11600, percent: 1.7 },
        { max: 12400, percent: 1.6 },
        { max: 13200, percent: 1.5 },
        { max: 14000, percent: 1.4 },
        { max: 14900, percent: 1.3 },
        { max: 15700, percent: 1.2 },
        { max: 16500, percent: 1.1 },
    ];

    for (const range of ranges) {
        if (baseCost <= range.max) {
            return range.percent;
        }
    }
    return 1.0;
}

export function getAgencyFraction(cost, percent, exchangeRate) {
    let agencyFraction = (cost * (percent / 100)).toFixed(2);
    // let usdAgencyFraction = (bynAgencyFraction / exchangeRate).toFixed(2);

    return parseFloat(agencyFraction);
}

export function getFlatMeterCost(cost, square) {
    let flatMeterCost = (cost /square).toFixed(2);
    return flatMeterCost;
}