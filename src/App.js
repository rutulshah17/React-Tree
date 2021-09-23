import React from 'react';
import { DATA } from './api/response.api';
import Parent from './component/Parent/Parent.component';

class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            data: {}
        }
    }

    componentDidMount = () => {
        this.setState({ data: DATA })
    }

    render() {
        
        return (
            <>
                <Parent items={this.state.data} />
            </>
        )
    }
}

export default App;