import React, {Component} from 'react';
import Header from "./components/Header";
import DataGrid from "./components/DataGrid";
import Menu from "./components/Menu";

interface IState {
    experienceCounter: number,
    summaryVisible: boolean
}

class App extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {experienceCounter: 0, summaryVisible: false}
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="dataGrid">
                    <DataGrid
                        experienceCounter={this.state.experienceCounter}
                        removeExperienceInput={this.removeExperienceInput}
                        summaryVisible={this.state.summaryVisible}
                    />
                </div>
                <Menu addExperienceInput={this.addExperienceInput} toggleSummary={this.toggleSummary}/>
            </div>
        );
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

    toggleSummary = () => {
        this.setState({
            summaryVisible: !this.state.summaryVisible
        })
    }
}

export default App;