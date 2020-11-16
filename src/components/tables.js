import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Button, Table } from 'react-bootstrap';
import { setSelectedTable } from '../actions/SimpleActions';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import history from './history';

import './css/index.css'

class Tables extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            redirect: false,
            table: ['G1','G2','G3','G4','G5','G6','G7','G8','G9','G10','G11',
                    'G12','G13','G14','G15','G16','G17','G18','G19','G20','G21',
                    'G22','G23','G24','G25','G26','G27','G28','G29','G30','G31','G32', 'G33'],
            tableNum: {},
        }
    }

    setSelectedTable = (e) => {
        let data = {}
        data.number = e.currentTarget.value;

        this.setState({
            tableNum: data
        })
    }

    deploySelectedTable = () => {
        const data = this.state.tableNum
        console.log(data)

        this.props.setSelectedTable(data);

        history.push({
            pathname: '/products',
        });
    }

    componentDidMount() {
        localStorage.clear();

        console.log(this.props.tableDetails)
    }

    render() {
        return (
 
        <div className="row no-gutters justify-content-center">
            <div className="col-sm-9 p-3">
                <Table className="tableSelect">

                    <p className="tableChoice">Please Select A Table</p>
                    
                    <tbody>
                        {this.state.table.map(data =>     
                            <Button className="selectTableButton" onClick={(e) => this.setSelectedTable(e)} value={data} >  
                                <div>
                                    <span className="tableSpan"> Table</span>
                                </div>
                                <div>
                                    <span className="tableNumber"> {data} </span>
                                </div>
                            </Button>   
                        )}
                    </tbody>
                </Table>

            <footer className="footer">
                <div style={{position:'center'}}>
                    <Button className="continueButton" onClick={this.deploySelectedTable}>Continue</Button>
                </div>
            </footer>   

            </div>
        </div>
        );
    };
}

const mapStateToProps = state => {
    const tableDetails = state.productsReducer.tableDetails;
    return {
        tableDetails,
    }
  };      
  
const mapDispatchToProps = {
    setSelectedTable,
};


export default connect(mapStateToProps, mapDispatchToProps)(Tables);