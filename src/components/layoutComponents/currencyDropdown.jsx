import { useEffect, useRef } from 'react';

function CurrencyDropdown({
	currencies,
	handleCurrencyChange,
	isOpen,
	setIsOpen,
}) {
	const dropdownRef = useRef(null);

	const handleSelection = (currencyOption) => {
		handleCurrencyChange(currencyOption);
		setIsOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, setIsOpen]);

	return (
		<div className="relative inline-block text-left" ref={dropdownRef}>
			{isOpen && (
				<div className="absolute right-[-46px] z-10 mt-5 w-48 bg-whiteClr-60 border border-gray-200 rounded-md shadow-lg">
					{currencies.map((currencyOption) => (
						<div
							key={currencyOption.code}
							onClick={() => handleSelection(currencyOption)}
							className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
						>
							{currencyOption.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default CurrencyDropdown;
