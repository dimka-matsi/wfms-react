import React from 'react';
// import Radium from 'radium';
import classes from './Car.css';
import withClass from '../hoc/withClass'

class Car extends React.Component {

	constructor(props) {
		super(props);

		this.inputRef = React.createRef();
	}

	componentDidMount() {
		this.inputRef.current.focus();
	}

	// componentWillReceiveProps(nextProps) {
	// 	console.log('first: ', nextProps);
	// }

	// shouldComponentUpdate(nextProps, nexState) {
	// 	console.log('second: ', nextProps, nexState);
	// 	return true;
	// }

	// componentWillUpdate(nextProps, nextState) {
	// 	console.log('third: ', nextProps, nextState);
	// }

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	console.log('getDerivedStateFromProps', nextProps, prevState);

	// 	return prevState;
	// }

	// componentDidUpdate() {
	// 	console.log('four: ');
	// }

	// componentWillUnmount() {
	// 	console.log('car componentWillUnmount');
	// }


	render() {

		// if(Math.random() > 0.7) {
		// 	throw new Error('Car random failed');
		// }

		const inputClasses = [classes.input];

		if (this.props.name !== '') {
			inputClasses.push(classes.green);
		} else {
			inputClasses.push(classes.red);
		}

		if(this.props.name.length > 4) {
			inputClasses.push(classes.bold);
		}

		// const style = {
		// 	border: '1px solid #ccc',
		// 	boxShadow: '0 4px 5px rgba(0,0,0,.14)',
		// 	':hover': {
		// 		border: '1px solid #aaa',
		// 		boxShadow: '0 4px 15px 0 rgba(0,0,0, ,25)',
		// 		cursor: 'pointer'
		// 	}
		// }

		return (
			<React.Fragment>
				<h3>Car name: {this.props.name}</h3>
				<p>Year: <strong>{this.props.year}</strong></p>
				<input
					ref={this.inputRef}
					type="text"
					onChange={this.props.onChangeName}
					value={this.props.name}
					className={inputClasses.join(' ')}
				/>
				<button onClick={this.props.onDelete}>Delete</button>
			</React.Fragment>
		);
	}
}

// const Car = (props) => {
	
// }

// export default Radium(Car);
// export default Car;
export default withClass(Car, classes.Car);









