import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import indiaFlag from "../../assets/flags/indiaFlag.png";
import { IoIosArrowDown } from "react-icons/io";
import CurrencyDropdown from "./currencyDropdown";

const CurrencySelector = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [currency, setCurrency] = useState({
		code: "INR",
		symbol: "₹",
		amount: 0.0,
	});

	const currencies = [
		{ code: "INR", symbol: "₹", label: "Indian Rupee", amount: 0.0 },
		{ code: "USD", symbol: "$", label: "US Dollar", amount: 0.0 },
		{ code: "EUR", symbol: "€", label: "Euro", amount: 0.0 },
	];

	const handleCurrencyChange = (selectedCurrency) => {
		setCurrency(selectedCurrency);
	};

	return (
		<div className="flex items-center bg-whiteClr-30 pr-1 pl-2 py-1 rounded-lg shadow-md justify-between gap-1">
			<div className=" min-w-[120px] flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<img src={indiaFlag} alt="India Flag" className="w-6 h-4" />

					<span className=" font-semibold">
						{currency.symbol} {currency?.amount?.toFixed(2)}
					</span>
				</div>

				<button
					onClick={() => setIsOpen(!isOpen)}
					className=" text-white"
					style={{ minWidth: "auto", padding: 0 }}
				>
					<IoIosArrowDown />
				</button>
			</div>

			<CurrencyDropdown
				setIsOpen={setIsOpen}
				isOpen={isOpen}
				currencies={currencies}
				selectedCurrency={currency}
				handleCurrencyChange={handleCurrencyChange}
			/>
			<button className="primary-button-gradient p-2 rounded-lg flex items-center">
				<FaPlus className="text-white" />
			</button>
		</div>
	);
};

export default CurrencySelector;
