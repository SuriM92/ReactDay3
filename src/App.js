import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    const username = 'Jack';
    const rollno = 1001;
    const showMoreDetails = true;
    const userInst = { designation: {one :'Team Lead', two:"Senior"}, dept: 'Tech'};
    const showError = false;

    return (
      <div>
          <h1>Hello, world!</h1>
          {/* <Profile rollno={rollno} username={username} userData={userInst}/> */}
          <WarningCompoent showError={showError}/>
          <ConditionalComp rollno={rollno} userInst={userInst} showMoreDetails={showMoreDetails}/>
          <RepeatListCompoent/>
          <RTableCompoent/>
        </div>
    );
  }
}

class RTableCompoent extends Component {
  constructor(props) {
    super(props);
    const rows = [
      {id : 100, name: 'jithin', dept:'Tech', designation: 'Lead' },
      {id : 101, name: 'Raj', dept:'QA', designation: 'Software Developer' },
      {id : 102, name: 'Vijay', dept:'Tech', designation: 'Engineer' },
      {id : 103, name: 'Rokee', dept:'HR', designation: 'Lead' }
    ];
    this.state = { rows :rows};
  }

  render() {
    const records = this.state.rows.map((row) => 
    
      <tr>
        <td className="table-col">{row.id}</td>
        <td className="table-col">{row.name}</td>
        <td className="table-col">{row.dept}</td>
        <td className="table-col">{row.designation}</td>
      </tr>
    );

    return (
      <table>
        <thead>
          <th className="table-col-header">ID</th>
          <th className="table-col-header">Name</th>
          <th className="table-col-header">Dept</th>
          <th className="table-col-header">Designation</th>
        </thead>
         {records}
    </table>
    );
  }
}

class RepeatListCompoent extends Component {
  constructor(props) {
    super(props);
    const rows = [
      {id : 100, name: 'jithin' },
      {id : 101, name: 'Raj' },
      {id : 102, name: 'Vijay' },
      {id : 103, name: 'Rokee' }
    ];
    this.state = { rows :rows};
  }

  render() {
    const records = this.state.rows.map((row) =>
      <li>{row.id} - {row.name}</li>
    );

    return (
      <ul>
         {records}
    </ul>
    );
  }
}


class WarningCompoent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.showError) {
      return null;
    }
    return (
      <div>
          Error Occured! Please contact admin!
      </div>
    );
  }
}


class ConditionalComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let comp;
    if(this.props.showMoreDetails) {
      comp = <div>
                <b>{this.props.rollno ? 'valid roll no.' : 'invalid roll no.'}</b>
                <div>
                  Department {this.props.userInst.dept}
                </div>
            </div>
    } else {
      comp = <b>{this.props.rollno ? 'valid roll no.' : 'invalid roll no.'}</b>;
    }

    return (
      <div>
          {comp}
      </div>
    );
  }
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.summaryBtnClick = this.summaryBtnClick.bind(this);
  }

  savePurchaseOrder =() => {
    alert('Save button clicked!');
  }

  summaryBtnClick() {
    alert(this.props.username);
  }

  render() {
    return (
      <div>
        <h1>Hi {this.props.username}</h1>
        <h2>Designation: {this.props.userData.designation.two}</h2>
        <h2>Department: {this.props.userData.dept}</h2>
        <button onClick={this.savePurchaseOrder}>
            Save
        </button>
        <br/>
        <button onClick={this.summaryBtnClick}>
            Summary Button
        </button>
      </div>
    );
  }
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  rollno: PropTypes.number
};


export default App;
