'use client';

import { useState } from 'react';

interface CartCounterProps {
  value?: number;
}

const CartCounter: React.FC<CartCounterProps> = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);

  return (
    <>
      {' '}
      <span className='text-9xl'>{counter}</span>
      <div className='flex gap-4'>
        <button
          onClick={() => setCounter(counter + 1)}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-500 transition-all w-[100px]'
        >
          +1
        </button>
        <button
          onClick={() => setCounter(value)}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-500 transition-all w-[100px]'
        >
          RESET
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-500 transition-all w-[100px]'
        >
          -1
        </button>
      </div>
    </>
  );
};

export default CartCounter;
