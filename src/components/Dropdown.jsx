import React from 'react';
import { Link } from 'react-router-dom';
const Dropdown = ({ title, items, className = '' }) => {
	items.map((item) => console.log(item));
	return (
		<div className="relative">
			<div className="showDropdown">
				<div className="m-1 ">{title}</div>
				<ul className="z-20 absolute top-[20px] left-[5px] p-2 shadow bg-slate-700 rounded-xl w-40 text-center dropdownMenu">
					{items?.map((item) => (
						<li key={item?.id} className="showBottomBorder">
							<Link to={item?.path}>{item.title}</Link>
							<span className="border border-slate-100 block span"></span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Dropdown;
