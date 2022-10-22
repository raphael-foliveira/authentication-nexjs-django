import styled from "@emotion/styled"
import { Card } from "@mui/material"


export const PaddedCard = styled(Card)`
h1 {
    margin-bottom: 50px;
    text-align: center;
}
.MuiFormControl-root {
    width: 100%;
    margin: 10px 0;
}
.MuiButtonBase-root {
    margin: 30px;
}
padding: 50px;
margin: 10px auto;
max-width: 800px;
min-height: 1000px;
`

export default function FormCard({ children }) {
    return (
        <PaddedCard>
            {children}
        </PaddedCard>
    )
}