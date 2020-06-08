import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from "axios";

class Debits extends Component {
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
        const debitsURL = `https://moj-api.herokuapp.com/debits`;

        axios
        .get(debitsURL)
        .then((response) => {
            const debits = response.data;
            this.setState({debits});
        })
        .catch((err) => console.log(err));
    }

    

    addDebit = (e) => {
        e.preventDefault();
        var obj = {};
        obj["description"] = this.state.description
        obj["amount"] = this.state.amount
        obj["date"] = this.state.date
        this.state.debits.push(obj)
    }
    
    
    render() {
        return (
        <div class="debitRender">
            <h1>Debits</h1>
            <Link to="/">Home</Link>
            <form class="addDebit" onSubmit={this.addDebit}>
                <label>Add a new Debit</label><br></br>
                <input type="text" placeholder="Description" value={this.state.description} ></input><br></br>
                <input type="text" placeholder="amount" value={this.state.amount} ></input><br></br>
                <input type="text" placeholder="date" value={this.state.date} ></input><br></br>
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

export default Debits;