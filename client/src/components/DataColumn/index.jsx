import React, { Component, useState, useEffect } from 'react';

// class DataColumn extends Component {
//   constructor (props) {
//     super(props);

//     this.state = {
//       data: [],
//       isFetching: false,
//       error: null,
//     };
//   }

//   // Переписать на хуки
//   loadData = () => {
//     this.setState({ isFetching: true });
//     fetch(this.props.fileName)
//       .then(res => res.json())
//       .then(data => this.setState({ data }))
//       .catch(error => this.setState({ error }))
//       .finally(() => {
//         this.setState({ isFetching: false });
//       });
//   };

//   componentDidMount () {
//     this.loadData();
//   }

//   render = () => this.props.render(this.state);
// }

function DataColumn (props) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  console.log('props :>> ', props);

  const loadData = () => {
    setIsFetching(true);

    fetch(props.fileName)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return props.render({ data, isFetching, error });
}

export default DataColumn;
