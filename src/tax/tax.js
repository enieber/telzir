const tax = (origin, to) => {
    switch(origin) {
        case '011': {
            switch(to) {
                case '016': {
                    return 1.90
                }
                case '017': {
                    return 1.70
                }
                case '018': {
                    return 0.90
                }
                default: {
                    return new Error('to is required')
                }
            }
        }
        case '016': {
            switch(to) {
                case '011': {
                    return 2.90
                }
                default: {
                    return new Error('to is required')
                }
            }
        }
        case '017': {
            switch(to) {
                case '011': {
                    return 2.70
                }
                default: {
                    return new Error('to is required')
                }
            }
        }
        case '018': {
            switch(to) {
                case '011': {
                    return 1.90
                }
                default: {
                    return new Error('to is required')
                }
            }
        }
        default: {
            return new Error('origin is required')
        }
    }
}

export default tax