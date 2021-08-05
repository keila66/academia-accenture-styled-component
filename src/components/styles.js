import styled from 'styled-components'
import { Form, Button } from "react-bootstrap";

export const Styled = {

    Div: styled.div `
        width: 50%;
        margin: 100px auto;
        
    `,

    Card: styled.div `
        /* width: 50%; */
        height: 80%;
        margin: 0px auto;
        background-color: #dfdfdf;
        border-radius: 15px;
        align-items: center;
        padding: 2rem;

    `,

    Form: styled(Form)`
        margin: 0 auto;
        /* padding: 2rem; */
    `,

    FormGroup: styled(Form.Group)`
        display:flex;
        flex-direction: row;
        align-items:center;
        justify-items: start;
    `,

    Input: styled(Form.Control) `
        padding: 6px;
        margin-right: 16px;
        font-size: 14px;
        border: 1px solid green;
        border-radius: 10px;
        width: ${props => props.width || "50%"};
        color: #000;

    `,
    Label: styled(Form.Label) `       
        font-size: 16px;
        color: #777777;
        margin: 8px
    `,
    Button: styled(Button) `
        background-color: #4CAF50; /* Green */
        border-radius: 10px;
        border: none;
        color: white;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        height: 37px;
        cursor:pointer;

        &:disabled {
            background-color: gray;
        }
    `
}