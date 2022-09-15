import Notifycation from "./Notifycation";

export default function Statistic({good, neutral, bad, total, totalPercent}) {
    return (
        <>
        {total ? <ul className="list">
            <li className="listItem">Good: {good}</li>
            <li className="listItem">Neutral: {neutral}</li>
            <li className="listItem">Bad: {bad}</li>
            <li className="listItem">Total: {total}</li>
            <li className="listItem">Positive feedback: {totalPercent}%</li>
        </ul> : <Notifycation message="There is no feedback"/>}
        </>
    );
};
