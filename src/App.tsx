import { useCallback, useMemo, useRef, useState } from 'react';
import { add, divide, multiply, subtract } from './calculator';

function App() {
  const xRef = useRef<HTMLInputElement>(null);
  const yRef = useRef<HTMLInputElement>(null);
  const [x, setX] = useState<number | undefined>(0);
  const [y, setY] = useState<number | undefined>(0);
  const [result, setResult] = useState<number>();

  const disabled = useMemo(() => x == null || y == null, [x, y]);

  const operate = useCallback(
    (operation: (a: number, b: number) => number) => () => {
      if (x == null || y == null) {
        return;
      }
      setResult(operation(x, y));
    },
    [setResult, x, y],
  );

  const onXChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (
        event.currentTarget.value == null ||
        event.currentTarget.value === ''
      ) {
        setX(undefined);
      } else {
        setX(Number(event.currentTarget.value ?? '0'));
      }
    },
    [setX],
  );

  const onYChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (
        event.currentTarget.value == null ||
        event.currentTarget.value === ''
      ) {
        setY(undefined);
      } else {
        setY(Number(event.currentTarget.value ?? '0'));
      }
    },
    [setY],
  );

  return (
    <div className="w-[40%] mx-auto my-24 flex flex-col gap-4">
      {result != null && (
        <p className="text-center text-3xl font-bold">{result}</p>
      )}

      <div className="flex w-full flex-row items-center gap-4">
        <p>x is: </p>
        <input
          type="number"
          value={x}
          onChange={onXChange}
          ref={yRef}
          className="flex-1 border-1 border-neutral-400 rounded-md px-4 py-2"
        />
      </div>

      <div className="flex w-full flex-row items-center gap-4">
        <p>y is: </p>
        <input
          type="number"
          value={y}
          onChange={onYChange}
          ref={xRef}
          className="flex-1 border-1 border-neutral-400 rounded-md px-4 py-2"
        />
      </div>

      <div className="flex flex-row w-full justify-between">
        <button
          type="button"
          disabled={disabled}
          onClick={operate(add)}
          className="px-4 py-2 rounded-md border-1 border-neutral-400 hover:cursor-pointer disabled:bg-neutral-200"
        >
          Add
        </button>
        <button
          type="button"
          disabled={disabled}
          onClick={operate(subtract)}
          className="px-4 py-2 rounded-md border-1 border-neutral-400 hover:cursor-pointer disabled:bg-neutral-200"
        >
          Subtract
        </button>
        <button
          type="button"
          disabled={disabled}
          onClick={operate(divide)}
          className="px-4 py-2 rounded-md border-1 border-neutral-400 hover:cursor-pointer disabled:bg-neutral-200"
        >
          Divide
        </button>
        <button
          type="button"
          disabled={disabled}
          onClick={operate(multiply)}
          className="px-4 py-2 rounded-md border-1 border-neutral-400 hover:cursor-pointer disabled:bg-neutral-200"
        >
          Multiply
        </button>
      </div>
    </div>
  );
}

export default App;
