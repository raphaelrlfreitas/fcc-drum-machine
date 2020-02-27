import React from 'react'

const inactivePadStyle = {
  backgroundColor: '#1E1F26',
  boxShadow: '2px 2px 2px 1px darkslategray',
  color: 'orange',
}

const activePadStyle = {
  backgroundColor: 'orange',
  boxShadow: 'none',
  color: '#1E1F26',
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      padStyle: inactivePadStyle,
    }

    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount(){
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  playAudio(e) {

    this.setState({
      active: true,
    });

    setTimeout(
      () => this.setState({ active: false}), 200
    )

    const audio = document.getElementById(this.props.keyTrigger);
    audio.currentTime = 0;
    audio.play();
    this.updateDisplay();
  }

  updateDisplay() {
    const display = document.getElementById('display');
    display.innerHTML = this.props.id
  }

  handleKeyPress(e) {
    console.log(e.keyCode, this.props.keyCode);
    if (e.keyCode === this.props.keyCode) {
      this.playAudio();
    }
  }

    render () {

      const { keyTrigger, id, url} = this.props;

      return(
        <div 
          className="drum-pad"
          style={this.state.active ? activePadStyle : inactivePadStyle} 
          onClick={this.playAudio}
          id={id}
        >
          <audio src={url} id={keyTrigger} className="clip"></audio>
          {keyTrigger}
        </div>
      );
    }



}

export default DrumPad;