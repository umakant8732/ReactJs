import { useState } from 'react'
import { InputField } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('inr');
  const [to, setTo] = useState('usd');
  const [convertedAmount, setConvertedAmount] = useState(0);


  const currencyInfo = useCurrencyInfo (from)

  const currencyOption = Object.keys(currencyInfo);


  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/18939616/pexels-photo-18939616/free-photo-of-green-trees-and-grass-in-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputField
                            label="From"

                            amount={amount}
                            currencyOptions={currencyOption}
                            onCurrencyChange={(currency) => setAmount(amount) }
                            selectcurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}

                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={() => swap()}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputField
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={currencyOption}
                            onCurrencyChange={(currency) => {
                              setTo(currency);
                            }}
                            selectcurrency={to}
                            amountDisable


                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from } to {to}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
