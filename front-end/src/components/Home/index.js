import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import List from './list';


class Home extends Component {
  componentDidMount() {
    this.props.dispatch(actions.getUsers());
  }
  handleChange=(id)=>{
    this.props.dispatch(actions.changeCategory(id));
  }

  render() {
    const { list } = this.props;
    return (
      <div className="home">
      <div className="head">
      <img style={{'width':'20%','opacity':'2','padding':'20px'}} src={"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"}></img>
      </div>
      <h2>Movie List</h2>
        <div className="list">
          {
            <List 
              list={list.data.filter(obj=>obj.category==='mylist')}
              cssName="remove-btn" 
              handleChange={this.handleChange} 
              btnText="Remove" 
            />
          }
        </div>

        <h2>Recommendation</h2>
        <div className="list">
          {
            <List 
              list={list.data.filter(obj=>obj.category==='recommendation')}
              cssName="add-btn" 
              handleChange={this.handleChange} 
              btnText="Add" 
            />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

export default connect(mapStateToProps)(Home);
