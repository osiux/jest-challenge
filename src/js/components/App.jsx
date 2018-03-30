import React from "react";

import Counter from "./Counter";
import Controls from "./Controls";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            counter: 0
        };
    }

    _increaseCounter = () =>
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            };
        });

    _decreaseCounter = () =>
        this.setState(prevState => {
            return {
                counter: prevState.counter - 1
            };
        });

    _resetCounter = () =>
        this.setState({
            counter: 0
        });

    render() {
        const { counter } = this.state;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-6">
                        <h1 className="text-center">Counter</h1>

                        <div className="card text-center">
                            <Counter counter={counter} />

                            <Controls
                                onDecrease={this._decreaseCounter}
                                onReset={this._resetCounter}
                                onIncrease={this._increaseCounter}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
