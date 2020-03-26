const calcTaxMore10PorCent = (min, tax, plamValue) => {
    if (min > plamValue) {
        const valueToCalc = min - plamValue
        return (valueToCalc * tax)+ (valueToCalc * (tax * 0.1))
    }
    return 0.00
}

const talkMore = (plam, min, tax) => {
    switch(plam) {
        case 'talk-30': {
            return calcTaxMore10PorCent(min, tax, 30)
        }
        case 'talk-60': {
            return calcTaxMore10PorCent(min, tax, 60)
        }
        case 'talk-120': {
            return calcTaxMore10PorCent(min, tax, 120)
        }
    }
}

export default talkMore
