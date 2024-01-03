import { useState } from "react";
import Button from '@mui/material/Button';
import { ButtonGroup } from "@mui/material";

const symbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const Slot = () => {
    const [symbol, setSymbol] = useState("NULL");
    const delay = ms => new Promise(res => setTimeout(res, ms));
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
    const roll = async () => {
        const rollTime = getRandomInt(10, 20);
        for (let i = 0; i < rollTime; i++) {
            await delay(200);
            const randomElement = symbols[Math.floor(Math.random() * symbols.length)];
            setSymbol(randomElement);
        }
    }
    return (
        <div>
            <Button className="slot" variant="outlined" onclick={roll}>{symbol}</Button>
        </div>
    );
}

export default Slot;

