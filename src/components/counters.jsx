import React, {Component} from 'react';
import Counter from "./counter";

class Counters extends Component {

    renderList() {
            return <ul>
                        {this.props.counters.map(counter =>
                        <Counter
                            key={counter.id}
                            counter={counter}
                            onDelete={this.props.actionDelete}
                            onIncrement = {this.props.actionIncrement}
                            onDecrement = {this.props.actionDecrement}
                        >
                            <h4>Counter #{counter.id}</h4>
                        </Counter>)}
                   </ul>

    }


    render() {
        return (
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={this.props.actionReset}>Reset</button>
                {this.renderList()}
            </div>
        );
    }

}


export default Counters;
