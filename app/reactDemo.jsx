var React = require('react');
var jquery = require('jquery');
import Router,{ Route , DefaultRoute, RouteHandler} from 'react-router';
var reflux = require('reflux');

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
        console.log(this.props)

        return <div>
            <input ref='nameInput' type='text' defaultValue='Joe' />
            <button onClick={this.greet}>Greet me</button>
        </div>;
    }
});


var actions = reflux.createActions({
    setName:{},
    setNameAsync:{asyncResult:true}
})

actions.setNameAsync.listen(function(name){
    setTimeout(() =>{
        this.completed(name);
    }, 1000)
});


var store = reflux.createStore({
    listenables: [actions],
   _name:'Reflux',
    getInitialState(){
        return {name : this._name};
    },
    onSetName(name){
        this._name = name;
        this.trigger({name : this._name});
    },
    onSetNameAsyncCompleted(name){
        this._name = name;
        this.trigger({name : this._name});
    }
});

store.listen( state => console.log(state));

var RefluxForm = React.createClass({
    mixins:[reflux.connect(store)],
    greet(){
        alert('Hello ' + this.state.name);
    },
    nameChanged(e){
        actions.setNameAsync(e.target.value)
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

//React.render(<App />, document.getElementById('app'));

var MainPage = React.createClass({
    render(){
        return (<RouteHandler />);
    }
})

var routes = (
    <Route handler={MainPage} path="/">
        <Route handler={App} name="app" path="/app"></Route>
        <Route handler={UnboundForm} name="demo1" path="/demo1/:id"></Route>
        <Route handler={RefluxForm} name="reflux" path='/reflux'></Route>
    </Route>

);


Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});