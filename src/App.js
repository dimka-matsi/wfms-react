import React, { Component } from 'react';
import Car from './Car/car'

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: '2018'},
      {name: 'Audi', year: '2016'},
      {name: 'Mazda', year: '2008'}
    ],
    pageTitle: 'React components'
  }

  changeTitleHandler = (newTitle) => {

    // const oldTitle = this.state.pageTitle;
    // const newTitle = oldTitle + ' (chanched)';

    this.setState({
      pageTitle: newTitle
    });

  }

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    });
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars;

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <input type="text" onChange={this.handleInput} />

        <button onClick={this.changeTitleHandler.bind(this, 'Hello')}>Change title</button>

        {
          this.state.cars.map((car, index) => {
            return (
                <Car
                  key={index}
                  name={car.name}
                  year={car.year}
                  onChangeTitle={() => this.changeTitleHandler(car.name)}
                />
              );
          })
        }

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
