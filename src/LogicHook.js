import LogicHandler from "./LogicHandler";

const LogicHook = () => {
    const { count, userInput, increaseCount, decreaseCount } = LogicHandler();

    return (
        <div>
            <p>{count}</p>
            <p>{userInput}</p>
            <div>
                <input type="text"  onChange={userInput}></input>
                <button onClick={increaseCount}>Increase</button>
                <button onClick={decreaseCount}>Decrease</button>
            </div>
        </div>
    );
};


export default LogicHook;