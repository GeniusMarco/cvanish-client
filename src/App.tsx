import React, {Component} from 'react';
import Header from "./components/Header";
import DataGrid from "./components/DataGrid";
import Menu from "./components/Menu";

interface IState {
    experienceCounter: number
}

class App extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {experienceCounter: 0}
    }

    addExperienceInput = () => {
        this.setState({
            experienceCounter: this.state.experienceCounter + 1
        });
    };

    removeExperienceInput = () => {
        this.setState({
            experienceCounter: this.state.experienceCounter - 1
        });
    };

    render() {
        return (
            <div>
                <Header/>
                <div className="dataGrid">
                    <DataGrid experienceCounter={this.state.experienceCounter} removeExperienceInput={this.removeExperienceInput}/>
                </div>
                <Menu addExperienceInput={this.addExperienceInput}/>
            </div>
        );
    }
}

export default App;