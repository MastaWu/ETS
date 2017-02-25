import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <MyAwesomeReactComponent timePeriod={this.props.timePeriod} />
            </MuiThemeProvider>
        )
    }
}

var TIME_PERIOD = {
    "startDate": "2017-2-24",
    "endDate": "2017-3-2",
    "entries" : [
        {
            "date": "2017-2-24",
            "charges": [
                {
                    "chargeId": 120,
                    "numHours": 1.2,
                    "nickname": "First",
                    "chargeNumber": "VMSC1290",
                    "comments": null,
                },
                {
                    "chargeId": 122,
                    "numHours": 2.8,
                    "nickname": "Second",
                    "chargeNumber": "VMSC0927",
                    "comments": "Helping out the intern.",
                },
            ]
        },
		{
            "date": "2017-2-25",
            "charges": [
            ]
        },
		{
            "date": "2017-2-26",
            "charges": [
            ]
        },
		{
            "date": "2017-2-27",
            "charges": [
                {
                    "chargeId": 125,
                    "numHours": 2.9,
                    "nickname": "Overhead",
                    "chargeNumber": "VMSC1765",
                    "comments": "Doing my training.",
                },
                {
                    "chargeId": 137,
                    "numHours": 6.2,
                    "nickname": "Second",
                    "chargeNumber": "VMSC0927",
                    "comments": "Finishing the feature.",
                },
            ]
        },
		{
            "date": "2017-2-28",
            "charges": [
                {
                    "chargeId": 190,
                    "numHours": 2.9,
                    "nickname": "Overhead",
                    "chargeNumber": "VMSC1765",
                    "comments": "Doing my training.",
                },
                {
                    "chargeId": 210,
                    "numHours": 6.2,
                    "nickname": "Second",
                    "chargeNumber": "VMSC0927",
                    "comments": "Finishing the feature.",
                },
                {
                    "chargeId": 218,
                    "numHours": 6.2,
                    "nickname": "Overhead",
                    "chargeNumber": "VMSC1765",
                    "comments": "Hanging out in Jazmyn's office.",
                },
            ]
        },
		{
            "date": "2017-3-1",
            "charges": [
            ]
        },
		{
            "date": "2017-3-2",
            "charges": [
            ]
        },
    ],
    "savedChargeNumbers": [
        {
            "chargeNumber": "VMSC1765",
            "nickname": "Overhead"
        },
        {
            "chargeNumber": "VMSC0927",
            "nickname": "Second"
        },
        {
            "chargeNumber": "VMSC1290",
            "nickname": "First"
        },
    ]
};

ReactDOM.render(
    <App timePeriod={TIME_PERIOD} />,
    document.getElementById('app')
);
