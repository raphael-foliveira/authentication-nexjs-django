import styled from "@emotion/styled"

const PaddedDiv = styled.div`
display: flex;
justify-content: center;
padding: 30px;
`


export default function Container({ children }) {
    return (
        <PaddedDiv>
            {children}
        </PaddedDiv>
    )
}
