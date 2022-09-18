import Notifycation from "./Notifycation";
import PropTypes from 'prop-types';

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

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    totalPercent: PropTypes.number.isRequired,
}