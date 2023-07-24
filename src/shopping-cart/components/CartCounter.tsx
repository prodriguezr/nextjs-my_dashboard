'use client';

import { useEffect } from 'react';

import { CounterResponse } from '../interfaces';
import { useAppSelector, useAppDispatch } from '@/store';
import { add, initCounterState, substract } from '@/store/counter/counterSlice';

interface Props {
  value?: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then((res) => res.json());

  return data;
};

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <>
      <span className='text-9xl'> {count} </span>

      <div className='flex'>
        <button
          onClick={() => dispatch(add())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
        >
          +1
        </button>
        <button
          onClick={() => dispatch(substract())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
        >
          -1
        </button>
      </div>
    </>
  );
};
