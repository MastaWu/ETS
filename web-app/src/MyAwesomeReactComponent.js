import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

class ChargeLineMenu extends Component {

	constructor(props) {
		super(props);
		this.state = {
            mapping: props.savedChargeNumbers,
            value: props.initialValue,
            onClick: props.onClick
        };
	}

    handleNewChargeSelection = (event, index, value) => {
        this.setState({value});
        var self = this;
        this.state.mapping.forEach(function(entry) {
            if (entry.nickname === value) {
                self.state.onClick(entry.chargeNumber);
            }
        });
    };

    render() {
        const NICKNAME_WIDTH = { width: 200 };

        var selections = [];
        this.props.savedChargeNumbers.forEach(function(entry) {
            selections.push(<MenuItem value={entry.nickname}
                                      primaryText={entry.nickname}
                                      key={entry.nickname} />)
        })

        return (
            <DropDownMenu value={this.state.value}
                          style={NICKNAME_WIDTH}
                          autoWidth={false}
                          onChange={this.handleNewChargeSelection}
                          >
                 {selections} 
            </DropDownMenu>
        )
    }
}

class ChargeLineHeader extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-1"> Hours </div>
                <div className="col-md-3"> Nickname </div>
                <div className="col-md-3"> Charge Number </div>
                <div className="col-md-5"> Comments </div>
            </div>
        )
    }
}

class ChargeLineEntry extends Component {

	constructor(props) {
		super(props);
		this.state = {
            selectedNickname: props.charge.nickname,
            selectedChargeNumber: props.charge.chargeNumber
        };
	}

    handleChildClick = (newChargeNumber) => {
        this.setState((prevState, props) => ({
            selectedChargeNumber: newChargeNumber
        }));
    };

    render() {
        const HOUR_COLUMN_STYLE = { width: 40 };

        var charge = this.props.charge;
        var savedChargeNumbers = this.props.savedChargeNumbers;

        return (
            <div className="row">
                <div className="col-md-1">
                    <TextField defaultValue={charge.numHours}
                               style={HOUR_COLUMN_STYLE}
                               id="hours" />
                </div>
                <div className="col-md-3">
                    <ChargeLineMenu initialValue={this.state.selectedNickname}
                                    onClick={this.handleChildClick}
                                    savedChargeNumbers={savedChargeNumbers} />
                </div>
                <div className="col-md-3">
                    <TextField value={this.state.selectedChargeNumber}
                               id="chargeNumber" />
                </div>
                <div className="col-md-5">
                    <TextField defaultValue={charge.comments}
                               fullWidth={true}
                               id="comments" />
                </div>
            </div>
        )
    }
}

class DayEntry extends Component {
	
	handleChange = (event, index, value) => this.setState({value});
	
	render() {
		
		const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

		var date = new Date(Date.parse(this.props.entry.date));
		var dayName = DAY_NAMES[date.getDay()] + " (" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + ")";
		
        var totalCharged = 0;
		var charges = [];
        var savedChargeNumbers = this.props.savedChargeNumbers;
		this.props.entry.charges.forEach(function(charge) {
            totalCharged += charge.numHours;
			charges.push(
                <ChargeLineEntry charge={charge}
                                 savedChargeNumbers={savedChargeNumbers}
                                 key={charge.chargeId} />
			);
		});
		
		return (
			<Card>
				<CardHeader title={dayName}
                            subtitle={"Total Hours Logged: " + totalCharged}
                            actAsExpander={true}
                            showExpandableButton={true} />
                <CardText expandable={true}>
                    <ChargeLineHeader />
                    {charges}
                </CardText>
            </Card>
		)
	}
}

class MyAwesomeReactComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 1};
    }
    
    handleChange = (event, index, value) => this.setState({value});

    render() {
		const SUMMARY_TITLE_STYLE = {
            
        };

		var timePeriod = this.props.timePeriod;
		var timePeriodDates = (timePeriod.startDate) + " to " + timePeriod.endDate;
		var rows = [];
		timePeriod.entries.forEach(function(entry) {
			rows.push(<DayEntry entry={entry}
                                savedChargeNumbers={timePeriod.savedChargeNumbers}
                                key={entry.date} />);
		});
		
        return (
            <div>
                <AppBar title="Groundhog" />
                <div className="container" >
					<h3>Week of {timePeriodDates} </h3>
					<div> {rows} </div>
                    <br />
                    <br />
                    <Divider />
			        <Card>
        				<CardHeader title="Summary"
                                    titleStyle={SUMMARY_TITLE_STYLE}
                                    actAsExpander={true}
                                    showExpandableButton={true} />
                        <CardText expandable={true}>
                        </CardText>
                    </Card>
                    <br />
                    <br />
                </div>
            </div>
        )
    }

}

export default MyAwesomeReactComponent
