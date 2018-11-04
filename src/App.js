import React, { Component } from 'react';
import './App.scss';
import Car from './Car/car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter'

class App extends Component {

  constructor() {
    super();
    console.log('constructor');
  }

  state = {
    cars: [
      {name: 'Ford', year: '2018'},
      {name: 'Audi', year: '2016'},
      {name: 'Mazda', year: '2008'}
    ],
    pageTitle: 'React components',
    showCars: false
  }

  // changeTitleHandler = (newTitle) => {

  //   // const oldTitle = this.state.pageTitle;
  //   // const newTitle = oldTitle + ' (chanched)';

  //   this.setState({
  //     pageTitle: newTitle
  //   });

  // }

  // handleInput = (event) => {
  //   this.setState({
  //     pageTitle: event.target.value
  //   });
  // }

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars: cars
    })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat();

    cars.splice(index, 1);

    this.setState({cars});
  }

  toggleCarseHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('render app');
    const divStyle = {
      textAlign: 'center'
    };

    let car = null;

    if (this.state.showCars) {
      car = this.state.cars.map((car, index) => {
            return (
                <ErrorBoundary key={index}>
                  <Car
                    name={car.name}
                    year={car.year}
                    onDelete={this.deleteHandler.bind(this, index)}
                    onChangeName={event => this.onChangeName(event.target.value, index)}
                  />
                </ErrorBoundary>
              );
          })
    }

    const cars = this.state.cars;

    return (
      <div style={divStyle}>
        {/*<h1>{this.state.pageTitle}</h1>*/}
        <h1>{this.props.title}</h1>

        <Counter />

        <hr />

        {/*<input type="text" onChange={this.handleInput} />*/}

        {/*<button onClick={this.changeTitleHandler.bind(this, 'Hello')}>Change title</button>*/}
        <button
          className={'AppButton'}
          onClick={this.toggleCarseHandler}
        >Toggle cars</button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>

        { car }

        </div>

        {/*<Car
          name={cars[0].name}
          year={cars[0].year}
          onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />
        <Car
          name={cars[1].name}
          year={cars[1].year}
          onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
        />
        <Car
          name={cars[2].name}
          year={cars[2].year}
          onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
        />*/}
      </div>
    );
  }
}

export default App;
