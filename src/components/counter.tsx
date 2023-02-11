interface CounterProps {
  type: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter: React.FC<CounterProps> = ({ type, count, setCount }) => {
  return (
    <div className="card">
      <p>{type} {count} g/jour</p>
      <button disabled={count < 1} onClick={() => setCount(count - 50)}>Moins</button>
      <button onClick={() => setCount(count + 50)}>Plus</button>
    </div>
  );
};

export default Counter;
