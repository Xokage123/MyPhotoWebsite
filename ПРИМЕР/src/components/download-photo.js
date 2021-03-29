import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PhotoPrevew from '../components/photo-prev';

import Transform from '../components/transform-func';
import Autf from '../components/autf';

import '../css/download-photo.css';

class DownloadPhoto extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('componentDidMount');
    const code = location.search.split('code=')[1];
    console.log('CODE', code);

    if (code && this.props.token === null) {
      this.props.autfToken();
    };

    this.props.fetchData(this.props.page, this.props.token);
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e);
    });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    const code = location.search.split('code=')[1];
    console.log('CODE', code);
    if (this.props.login && code === undefined) {
      Autf();
    }
    if (this.props.token != null) {
      const elButIn = document.getElementById('logIn');
      elButIn.classList.add('hidden');
      const elButOut = document.getElementById('logOut');
      elButOut.classList.remove('hidden');
    }
  }

  handleScroll(e) {
    if (this.props.scrolling) return
      const lastPic = document.querySelector('div.block2 > div:last-child');
      const lastPicOffset = lastPic.offsetTop + lastPic.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      const bottomOffset = 20;
      if (pageOffset > lastPicOffset - bottomOffset) {
        this.props.loadMore(this.props.page);
        this.props.fetchData(this.props.page, this.props.token);
      }
  }

  render() {

    return (
          <PhotoPrevew
            items={this.props.items}
            getTargetId={this.props.getTargetId}
            openModal={this.props.openModal}
            likePhoto={this.props.likePhoto}
            token={this.props.token}
          />
    )
  }
}

DownloadPhoto.propTypes = {
    openModal: PropTypes.func.isRequired,
    scrolling: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    loadMore: PropTypes.func.isRequired,
    likePhoto: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

export default DownloadPhoto;
