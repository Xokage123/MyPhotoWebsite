import React, { Component } from 'react';

import Transform from '../components/transform-func';
import ChangeSrcPic1 from '../components/changeSrcPic1';
import ChangeClass from '../components/changeClass';

import '../css/download-photo.css';

class PhotoPrevew extends Component {

  openModal(ev, id) {
    ev.preventDefault();
    console.log('this.id = ', id);
    this.props.getTargetId(id);
    this.props.openModal(true);
    const el = document.querySelector('body');
    el.classList.add('modal');
  }

  render() {

    if (this.props.itemsHasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.itemsIsLoading) {
      return <p>Loading ... </p>
    }

    return (
      <div className='block2'>
        {
          this.props.items.map(photo => {
            return (
              <div className = 'photoItem' id = {photo.id} key = {photo.id}>
                <div className='block3'>
                  <div className='info'>
                    <div className='author'>
                      <a href={photo.user.links.html}>
                        <div className='avatar'>
                          <img src={photo.user.profile_image.small}/>
                        </div>
                        <div className='nameAuthor'>{photo.user.name}</div>
                      </a>
                    </div>

                    <div className='like'>
                      <div className='imgLike'>
                          <button className={ChangeClass(this.props.token)} onClick={() => this.props.likePhoto(this.props.token, photo.id, photo.liked_by_user)}>
                            <img id="pic1" src={ChangeSrcPic1(photo.liked_by_user)} />
                          </button>
                      </div>
                      <div className='qntLikes'>{photo.likes}</div>
                    </div>
                  </div>

                  <div className='photo'>
                    <a href={`${photo.id}`} onClick={(ev) => this.openModal(ev, photo.id)}>
                      <img src={photo.urls.small} />
                    </a>
                  </div>

                  <div className='calendar'>
                    <div className='imgCalendar'>
                      <img src="./src/img/calendar.png" />
                    </div>
                    <div className='publishedTime'>{Transform(photo.created_at)}</div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default PhotoPrevew;
