import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button
          onClick={() => setValue((v) => v + 1)}>
          +
        </button>
        <button
          onClick={() => setVisible(false)}>
          hide
        </button>
        {/* <ClassCounter value={value} /> */}
        {/* <HookCounter value={value} /> */}

        <Notification />
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
};

const Notification = () => {

  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(
      () => setVisible(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return <div>
    {visible && <p>Hello</p>}
  </div>
};




const HookCounter = ({ value }) => {

  useEffect(() => {
    console.log('mount');
    return () => console.log('unmount');
  }, []);

  useEffect(() => console.log('update'));

  return <p>{value}</p>;
}

class ClassCounter extends Component {
  componentDidMount() {
    console.log('class:mount');
  }
  componentDidUpdate() {
    console.log('class:update');
  }
  componentWillUnmount() {
    console.log('class:unmount');
  }

  render() {
    return <p>{this.props.value}</p>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));