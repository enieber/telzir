const calcTaxMore10PorCent = (minutes, tax, plamValue) => {
    if (minutes > plamValue) {
        const valueToCalc = minutes - plamValue
        return (valueToCalc * tax)+ (valueToCalc * (tax * 0.1))
    }
    return 0.00
}

const talkMore = (planType, minutes, tax) => {
    switch(planType) {
        case 'talk-30': {
            return calcTaxMore10PorCent(minutes, tax, 30)
        }
        case 'talk-60': {
            return calcTaxMore10PorCent(minutes, tax, 60)
        }
        case 'talk-120': {
            return calcTaxMore10PorCent(minutes, tax, 120)
        }
    }
}

export default talkMore
