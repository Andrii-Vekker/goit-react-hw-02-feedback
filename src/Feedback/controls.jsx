

export default function Controls({onIncrement}) {
    return (
        <>
            <button type="button" className="btn" name="good" onClick={onIncrement}>Good</button>
            <button type="button" className="btn" name="neutral" onClick={onIncrement}>Neutral</button>
            <button type="button" className="btn" name="bad" onClick={onIncrement}> Bad</button>
        </>
  );
};
