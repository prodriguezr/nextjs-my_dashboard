import { CartCounter } from '@/shoppingCart/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'A simple shopping cart counter',
};

export default function CounterPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Products in the shopping cart</span>
      <CartCounter value={18} />
    </div>
  );
}
