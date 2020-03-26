import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: wrap;
`

export const Card = styled.div`
    display: flex;
    height: 20vh;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    background: ${props => {
        if (!props.color) {
            return '#ed254e'
        }
        switch(props.color) {
            case 'primary': {
                return '#94b0da'
            }
            case 'secundary': {
                return '#f9dc5c'
            }
            case 'dark': {
                return '#011936'
            }
            default: {
                return '#84dcc6'
            }
        }
    }};
    color: ${props => {
        if (!props.color) {
            return '#f4fffd'
        }
        switch(props.color) {
            case 'primary': {
                return '#000'
            }
            case 'secundary': {
                return '#000'
            }
            case 'dark': {
                return '#f4fffd'
            }
            default: {
                return '#f4fffd'
            }
        }
    }};
`
