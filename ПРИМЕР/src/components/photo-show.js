import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Portal from '../components/portal';
import Transform from '../components/transform-func';
import ChangeSrcPic2 from '../components/changeSrcPic2';
import ChangeClass from '../components/changeClass';

import '../css/photo-show.css';

const ShowPhoto = (props) => {
  console.log('ShowPhoto.props', props);

  return (
    <>
      { props.isOpen &&
        <Portal>
            <div className='block4'>
                <div className='buttonClose'>
                    <button onClick={props.closeModal}>
                        <img src="./src/img/close.png" />
                    </button>
                </div>
                <div className='block5'>
                    <div className='infoShow'>
                        <div className='authorShow'>
                            <a href={props.photo.user.links.html}>
                                <span className='avatarShow'>
                                    <img src={props.photo.user.profile_image.small}/>
                                </span>
                                <span className='nameAuthorShow'>{props.photo.user.name}</span>
                            </a>
                        </div>
                        <div className='buttonLike'>
                            <span className='qntLikesShow'>{props.photo.likes}</span>
                            <span>
                                <button className={ChangeClass(props.token)} onClick={() => {
                                  props.likePhoto(props.token, props.targetId, props.photo.liked_by_user)}}>
                                    <img id="pic2" src={ChangeSrcPic2(props.photo.liked_by_user)}/>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className='photoShow'>
                        <img src={props.photo.urls.regular} />
                    </div>
                    <div className='publishedShow'>
                        <span>Опубликовано:</span>
                        <span className='publishedTimeShow'>{Transform(props.photo.created_at)}</span>
                    </div>
                </div>
            </div>
        </Portal>
      }
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps from ShowPhoto', ownProps);
  console.log('state from ShowPhoto', state);
  return {
    photo: state.items.find((photo) => photo.id === state.targetId)
  };
}

// ShowPhoto.defaultProps = {
//    isOpen: false,
// };

export default connect(mapStateToProps)(ShowPhoto);
