var React = require('react');
var jquery = require('jquery');

var ListItem = React.createClass({
    render(){
        return <li>{this.props.value.id} {this.props.value.name}</li>;
    }
});

var List = React.createClass({
    getInitialState(){
        return {data: [1]};
        //return {data: [1, 2, 3, 4, 5]};
    },
    componentDidMount(){
        jquery.getJSON('/api/countries')
            .then(data => this.setState({data}));

        //setInterval(() => {
        //    var data  = this.state.data;
        //    data.push(new Date().toLocaleTimeString());
        //    this.setState({data});
        //}, 1000)
    },
    render(){
        var childItems = this.state.data.map((item, index) => <ListItem key={index} value={item}></ListItem>);

        return <ul>{childItems}</ul>
    }
});

var StateForm = React.createClass({
    getInitialState(){
        return {
            name: 'Mike'
        };
    },
    greet(){
        alert('Hello ' + this.state.name);
    },
    nameChanged(e){
        console.log(e.target);
        this.setState({name: e.target.value});
    },
    render(){
        var button =  <button onClick={this.greet}>Greet me</button>;

        if (!this.state.name){
            button = null;
        }

        return <div>
            <input type='text' value={this.state.name} onChange={this.nameChanged}/>
            {button}
        </div>;
    }
});

var UnboundForm = React.createClass({
    greet(){
        var name = React.findDOMNode(this.refs.nameInput).value;
        alert('Hello ' + name);
    },
    render(){
        return <div>
            <input ref='nameInput' type='text' defaultValue='Joe' />
            <button onClick={this.greet}>Greet me</button>
        </div>;
    }
});

var App = React.createClass({
    render() {
        return <div>
            <h1>Hello</h1>

            <StateForm />
            <UnboundForm />
            <List />
        </div>;
    }
});

React.render(<App />, document.getElementById('app'));