import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4},
      { id: 2, value: 2},
      { id: 3, value: 3},
      { id: 4, value: 1}
    ],
    totals: 0
  };

  handleDelete = ((counterId) => {

    //aici ca sa nu alteram array-ul nostru facem o filtrare si returnam un nou array pe care il afisam

    const countersVar = this.state.counters.filter((c) => {
      return c.id !== counterId
    });

    this.setState({counters: countersVar});

    //aici sterg direct din array-ul respectiv

    //var 1

    // let selectedObj = this.state.counters.find(element => element.id === counterId);
    //
    // let index = this.state.counters.indexOf(selectedObj);
    //
    // this.state.counters.splice(index, 1);

    // this.setState({counters: this.state.counters});

    //var 2

    // let counterIndex = this.state.counters.findIndex(object => object.id === counterId);
    //
    // this.state.counters.splice(counterIndex, 1);
    //
    // this.setState({counters: this.state.counters});


  });

  handleIncrement = ((counterObj) => {

    let newArray = this.state.counters;

    let index = newArray.findIndex(i => i === counterObj);

    newArray[index].value++;
    this.setState({counters: newArray}, this.sumOfProducts);

  });

  handleDecrement = ((counterObj) => {

    let newArray = this.state.counters;

    let selectedIndex = newArray.findIndex(item => item === counterObj);

    if(newArray[selectedIndex].value > 0) {
      newArray[selectedIndex].value--;
    }

    this.setState({counters: newArray}, this.sumOfProducts);


  });

  handleReset = () => {
      console.log('this.props.counters', this.state.counters);

      let newArray = this.state.counters;



      newArray.forEach(item => item.value = 0);

      this.setState({counters: newArray, totals: 0});


  };

  sumOfProducts = () => {

    let totals = 0;

    this.state.counters.forEach(item => {
      totals = totals + item.value;
    });

    this.setState({totals: totals});
  };


  render() {

    return (
        <React.Fragment>
          <NavBar
              totalCounts={this.state.totals}
              totalProducts={this.state.counters.filter(item => item.value > 0).length}
          ></NavBar>
          <main className="container">
            <Counters
                counters={this.state.counters}
                actionIncrement={this.handleIncrement}
                actionDecrement={this.handleDecrement}
                actionDelete={this.handleDelete}
                actionReset={this.handleReset}
            ></Counters>
          </main>
        </React.Fragment>
    );
  }

  componentDidMount() {
    this.sumOfProducts()
  }

}

export default App;
