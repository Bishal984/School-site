import React from 'react';

const Card = ({ className, children }) => {
	return (
		<div className={['w-96 bg-base-100 shadow-xl', className].join(' ')}>
			{children}
			{/* <CardImage {...rest} />
			<CardBody {...rest} /> */}
			{/* <figure>
				<img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Buy Now</button>
				</div>
			</div> */}
		</div>
	);
};
function CardImage({
	className = '',
	src = 'https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg',
	alt = 'image',
}) {
	return (
		<figure className={[''].join(' ')}>
			{console.log('classNameImage', className)}
			<img src={src} alt={alt} className={['', className].join(' ')} />
		</figure>
	);
}
function CardBody({ className = '', children }) {
	return (
		<div className={['', className].join(' ')}>
			{console.log('bodypartCard')}
			{console.log('classNameBody', className)}
			{children}
			{/* <CardTitle />
			<CardDescription /> */}
		</div>
	);
}
const CardTitle = ({ children, className }) => {
	return (
		<div className={['', className].join(' ')}>
			{console.log('childeren', children)}
			{console.log(className, 'className')}
			{/* <h1>Hello</h1> */}
			{children}
		</div>
	);
};
const CardDescription = ({ children, className }) => {
	return <div className={['', className].join(' ')}>{children}</div>;
};

// export default Card;
export default Object.assign(Card, {
	Image: CardImage,
	Body: CardBody,
	Title: CardTitle,
	Description: CardDescription,
});
