import React, {Component} from "react";

class App extends Component {
   
    constructor() {
        super();
   
        this.state = {
            items: [],
            
        };
    }
   
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                  
                });
          })
    }
    render() {
        const {items} = this.state;
        console.log(items)
        
        return (
        <div>
            <h1>Fetch data</h1>  {
                items.map((item) => ( 
                <ul key = { item.id } >
                    User Id:{item.id},
                    <br/>
                    User Name:{item.username}, 
                    <br/>
                    Full Name:{item.name},
                    <br/> 
                    User Email:{item.email}
                    <hr/> 
                </ul>
                ))
            }
        </div>
    );
}
}
   
export default App;