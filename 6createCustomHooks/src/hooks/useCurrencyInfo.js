import { useEffect, useState } from "react";


// creating a custome hook
function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    //  calling api here

    useEffect(() => {
        const currencyApi = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
        fetch(currencyApi)
            .then((apiResponse) => apiResponse.json())
            .then((usableData) => setData(usableData[currency]));
        console.log(data);
    }, [currency]);

    console.log(data);
    return data;
}


export default useCurrencyInfo;