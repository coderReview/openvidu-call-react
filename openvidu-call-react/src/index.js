import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import VideoRoomComponent from './components/VideoRoomComponent';
import './index.css';

class App extends Component{
  render() {
    const randomRoomId = Math.random().toString(36).slice(2);
    return (
    <Router>
    <div className="start-meeting-wrapper">
      <Link className="start-meeting-btn" to={`/room/${randomRoomId}`}> Start a meeting</Link>
      <Switch>
        <Route path="/room/:sessionName" component={VideoRoomComponent}>
        </Route>
      </Switch>
    </div>
    </Router>
    )
  }

  componentDidMount() {
    this.setState({
      roomId: Math.random().toString(36).slice(2)
    })
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
registerServiceWorker();