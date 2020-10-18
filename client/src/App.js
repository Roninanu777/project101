import React from "react";
import tambola from "tambola-generator";
import styled from "styled-components";
import "./App.css";

const Box = styled.div`
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    padding: 5px;
`;

const Item = styled.div`
    border: 1px solid black;
    padding: 5px;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function App() {
    let ticket = () => {
        let tticket = tambola.getTickets(1);
        let t = tticket[0];
        return (
            <Box>
                <Row>
                    {t[0].map((item) => (
                        <Item>{item}</Item>
                    ))}
                </Row>
                <Row>
                    {t[1].map((item) => (
                        <Item>{item}</Item>
                    ))}
                </Row>
                <Row>
                    {t[2].map((item) => (
                        <Item>{item}</Item>
                    ))}
                </Row>
            </Box>
        );
    };
    return <div className="App">{ticket()}</div>;
}

export default App;
