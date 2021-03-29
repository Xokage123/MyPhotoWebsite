import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../css/photo-show.css';

import Transform from '../components/transform-func';

const Photo = ({ photo }) => {
  console.log(photo);

  return (
            <div className='block4'>
                <div className='buttonClose'>
                    <Link to="/">
                        <img src="./src/img/close.png" />
                    </Link>
                </div>
                <div className='block5'>
                    <div className='infoShow'>
                        <div className='authorShow'>
                            <a href={photo.user.links.html}>
                                <span className='avatarShow'>
                                    <img src={photo.user.profile_image.small}/>
                                </span>
                                <span className='nameAuthorShow'>{photo.user.name}</span>
                            </a>
                        </div>
                        <div className='buttonLike'>
                            <span className='qntLikesShow'>{photo.likes}</span>
                            <span>
                                <button>
                                    <img src="./src/img/heart_zero.png" />
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className='photoShow'>
                        <img src={photo.urls.regular} />
                    </div>
                    <div className='publishedShow'>
                        <span>Опубликовано:</span>
                        <span className='publishedTimeShow'>{Transform(photo.created_at)}</span>
                    </div>
                </div>
            </div>
  )
};

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps from Photo', ownProps);
  console.log('state from Photo', state);
  return {
    photo: state.items.find((photo) => photo.id === ownProps.match.params.id)
  };
}

export default connect(mapStateToProps)(Photo);
