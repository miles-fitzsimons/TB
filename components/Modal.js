import React, { Component } from 'react';
import YouTube from 'react-youtube'; // MILES Uninstall me?
import Rodal from 'rodal';

class Modal extends Component {

// Embed real image
// Embed YouTube video
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render () {
    console.log('modalProps', this.props);
    let { title, image1, image2, video } = this.props.modalData;
    console.log('title', title);
    let modalAnimationStyles = ['fade', 'slideUp', 'slideDown', 'slideLeft', 'slideRight'];

    const rodalStyles = {
      width: window.innerWidth * 0.8,
      height: window.innerHeight * 0.8,
      top: '10%',
      left: '10%',
      margin: 0
    };
    const maskStyles = {
      backgroundColor: 'red',
      opacity: 0.8
    }


    return(
      <div>
        <Rodal
          visible={this.props.showModal}
          animation={modalAnimationStyles[Math.floor(Math.random() * 5)]}
          onClose={this.props.toggleShowModal}
          customStyles={rodalStyles}
          customMaskStyles={maskStyles}
        >
          <h1 className="modalHeading">{title}</h1>
          <video width="400" controls autoPlay>
            <source src="../public/video/placeholder.mp4" type="video/mp4" />
          </video>
          <img src={image1} />
        </Rodal>
      </div>
    )
  }
}

export default Modal;


    // {/* YouTube options */}
    // const opts = {
    //   height: '390',
    //   width: '640',
    //   playerVars: { // https://developers.google.com/youtube/player_parameters
    //     autoplay: 1
    //   }
    // };


          // <YouTube
          //   videoId="2g811Eo7K8U"
          //   opts={opts}
          //   onReady={this._onReady}
          // />
