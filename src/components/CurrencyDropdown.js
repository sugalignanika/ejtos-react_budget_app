import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    useEffect(() => {
        setSelectedCurrency(currency);
    }, [currency]);

    const handleCurrencyChange = (event) => {
        const currency = event.target.value;
        setSelectedCurrency(currency);

        dispatch({
            type: 'CHANGE_CURRENCY',
            payload: currency,
        });
    };

    return (
        <div className="input-group mb-3" style={{ backgroundColor: '#c0e8c6', borderRadius: '5px' }}>
            <div className="input-group-prepend" style={{ backgroundColor: '#c0e8c6' }}>
                <label 
                    htmlFor="currencyDropdown" 
                    className="input-group-text" 
                    style={{ backgroundColor: '#c0e8c6', border: 'none' }}
                >
                    Currency
                </label>
            </div>
            <select 
                id="currencyDropdown" 
                className="custom-select" 
                value={selectedCurrency} 
                onChange={handleCurrencyChange}
                style={{ backgroundColor: '#c0e8c6', border: 'none' }}
            >
                <option value="$ Dollar">$ Dollar</option>
                <option value="£ Pound">£ Pound</option>
                <option value="€ Euro">€ Euro</option>
                <option value="₹ Rupee">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;
