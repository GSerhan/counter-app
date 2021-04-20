import React, {Component} from 'react';

class Counter extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.counter.value !== this.props.counter.value) {
            //ajax call cu value la counter schimbat
            alert('value was changed');
        }
    }

    // state = {
    //     value: this.props.counter.value,
    //     // tags: ['tag1', 'tag2', 'tag3']
    // };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // renderTags() {
    //     if(this.state.tags.length === 0) {
    //         return <p>There are no tags</p>;
    //     } else {
    //         return <ul>{ this.state.tags.map((tag,index) => <li key={index}>{tag}</li>) }</ul>
    //     }
    // }


    render() {

        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button onClick={ () => this.props.onIncrement(this.props.counter)}
                        className="btn btn-secondary btn-sm m-2"
                >Increment</button>
                <button onClick={ () => this.props.onDecrement(this.props.counter)}
                        className={'btn btn-secondary btn-sm ' + (this.props.counter.value === 0 ? 'disabled' : '')}
                >Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                        className="btn btn-danger btn-sm m-2"
                >Delete</button>
                {/*{this.state.tags.length === 0 && 'Please create a new tag'}*/}
                {/*{this.renderTags()}*/}
            </div>
        );
    }

    // handleDisabledButton() {
    //     let classes = 'btn btn-secondary btn-sm';
    //     if(this.props.counter.value === 0) {
    //         classes += ' disabled';
    //     }
    //     return classes;
    // }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        if(this.props.counter.value === 0) {
            classes += "warning";
        } else {
            classes += "primary";
        }
        return classes;
    }

    formatCount() {
        let counterValue = null;

        if(this.props.counter.value === 0) {
            counterValue = 'Zero';
        } else {
            counterValue = this.props.counter.value;
        }
        return counterValue;
    }
}

export default Counter;
