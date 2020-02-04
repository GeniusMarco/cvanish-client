import React, {Component} from "react";

class Home_depr extends Component<{}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(): void {
        this.setState({isLoading: true});
        fetch('/api')
            .then(response => response.text())
            .then(data3 => this.setState({data: data3, isLoading: false}));
    }

    render() {
        const {data} = this.state;
        console.log(data);
        return <span>{data+'4'}</span>;
    }
}

export default Home_depr;