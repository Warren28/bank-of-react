import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from "axios";

class Credits extends Component {
    constructor(props) {
        super(props);
        this.state = {
          description: '',
          amount: '',
          date: '',
          debits: [],
        };
    }

    componentDidMount() {
        const debitsURL = `https://moj-api.herokuapp.com/credits`;

        axios
        .get(debitsURL)
        .then((response) => {
            const debits = response.data;
            this.setState({debits});
        })
        .catch((err) => console.log(err));
    }

    handleChange(event) {
        this.setState({
            
        });
    }

    addDebit = (e) => {
        e.preventDefault();

    }
    
    
    render() {
        return (
        <div class="debitRender">
            <h1>Credits</h1>
            <Link to="/">Home</Link>
            <form class="addDebit" onSubmit={this.addDebit}>
                <label>Add a new Credit</label><br></br>
                <input type="text" placeholder="Description" value={this.state.description}></input><br></br>
                <input type="text" placeholder="amount" value={this.state.amount}></input><br></br>
                <input type="text" placeholder="date" value={this.state.date}></input><br></br>
                <input type="submit" value="Submit"></input>
            </form>
            {this.state.debits.map((debit) => (
            <div className="debitCard">
                <br></br>
                {debit.description}<br></br>
                {debit.amount}<br></br>
                {debit.date}
            </div>
            ))}
        </div>
    );
  }
}

export default Credits;