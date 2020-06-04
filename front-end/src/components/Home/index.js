import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";


class Home extends Component {
  componentDidMount() {
    this.props.dispatch(actions.getUsers());
  }
  handleChange=(id)=>{
    this.props.dispatch(actions.changeCategory(id));
  }

  render() {
    return (
      <div className="home">
      <div className="head">
      <img style={{'width':'20%','opacity':'2','padding':'20px'}} src={"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"}></img>
      </div>
      <h2>Movie List</h2>
        <div className="list">
          
        {console.log(this.props.list.data)}
          {this.props.list.data.filter(obj=>obj.category==='mylist').map((list, index) => {
            return (
              <div className ="item" key={index}>
                <img src={list.img} className="image" />
                <div>{list.title}</div>
                <button className="remove-btn" onClick={() => this.handleChange(list.id)}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>

        <h2>Recommendation</h2>
        <div className="list">
          {this.props.list.data.filter(obj=>obj.category==='recommendation').map((list, index) => {
            return (
              <div className = "item" key={index}>
                <img src={list.img} className="image" />
                <div>{list.title}</div>
                <button className="add-btn" onClick={() => this.handleChange(list.id)}>Add</button>
              </div>
            );
          })}
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
