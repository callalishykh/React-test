import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        {/*         <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
