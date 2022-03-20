import { useState } from "react";
import numberWithCommas from "./helper";

const LogicHandler = () => {
    const [count, setCount] = useState(9999);
    const userInput = () => toString("Joe");
    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);

    return {
        count: numberWithCommas(count),
        userInput,
        increaseCount,
        decreaseCount
    };
};

export default LogicHandler;
