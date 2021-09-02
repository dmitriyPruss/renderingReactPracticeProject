import React, { Component } from 'react';

class DataColumn extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount () {
    this.setState({ isFetching: true });
    fetch(this.props.fileName)
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  render () {
    const { render } = this.props;

    console.log('render :>> ', { ...this.state });
    const layout = render({ ...this.state });

    return layout;
  }
}

export default DataColumn;
