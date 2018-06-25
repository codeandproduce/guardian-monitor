import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './partials/Nav/Nav';
import MainPage from './MainPage/MainPage';
import ConnectNewDeviceModal from './ConnectNewDeviceModal/ConnectNewDeviceModal';

import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			modalIsOpen: false
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	navOpenModalCallback() {
       this.openModal()
    }

	openModal() {
    	this.setState({modalIsOpen: true});
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

  render() {
    return (
      <div className="App">
        <Nav navOpenModalCallback={this.navOpenModalCallback.bind(this)}/>
        <MainPage/>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="overlay"
        >
        	<ConnectNewDeviceModal />
        </Modal>
      </div>
    );
  }
}

export default App;
