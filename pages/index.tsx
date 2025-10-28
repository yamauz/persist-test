import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store/store';
import { increment, decrement, incrementByAmount, reset } from '@/store/counterSlice';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Redux Persist Demo
        </h1>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 mb-8">
          <p className="text-white text-center text-sm mb-2 opacity-90">Current Count</p>
          <p className="text-white text-6xl font-bold text-center">{count}</p>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => dispatch(increment())}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
            >
              +1
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
            >
              -1
            </button>
          </div>

          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
          >
            +5
          </button>

          <button
            onClick={() => dispatch(reset())}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
          >
            Reset
          </button>
        </div>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            リロードしても状態が保持されます
          </p>
        </div>
      </div>
    </div>
  );
}
