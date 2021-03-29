import React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, itemsIncrPage, scrolling, openModalWindow, getTargetId, getLogin, getOut } from '../actions/items';
import { likePhoto, autfToken } from '../actions/like';

import DownloadPhoto from '../components/download-photo';
import ShowPhoto from '../components/photo-show';
import Header from '../components/header';

let App = (props) => {
    const {
      items, itemsHasErrored, itemsIsLoading, fetchData, likePhoto, ownProps, page, loadMore, scrolling, openModal, isOpen, getTargetId, targetId, token, autfToken, getLogin, login, getOut
    } = props;

    console.log('OwProps', ownProps);
    console.log('page', page);

    return (

        <div className="block1">
            <Header
              getLogin={getLogin}
              login={login}
              getOut={getOut}
              token={token}
            />
            <DownloadPhoto
              login={login}
              getLogin={getLogin}
              likePhoto={likePhoto}
              fetchData={fetchData}
              items={items}
              itemsHasErrored={itemsHasErrored}
              itemsIsLoading={itemsIsLoading}
              page={page}
              loadMore={loadMore}
              scrolling={scrolling}
              openModal={openModal}
              getTargetId={getTargetId}
              token={token}
              autfToken={autfToken}
            />
            <ShowPhoto
              isOpen={isOpen}
              closeModal={() => {
                openModal(false);
                const el = document.querySelector('body');
                el.classList.remove('modal');
              }}
              likePhoto = {likePhoto}
              targetId={targetId}
              token={token}
            />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        login: state.login,
        token: state.token,
        targetId: state.targetId,
        isOpen: state.isOpen,
        scrolling: state.scrolling,
        page: state.page,
        items: state.items,
        itemsHasErrored: state.itemsHasErrored,
        itemsIsLoading: state.itemsIsLoading,
        ownProps
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (page, perPage, orderBy) => dispatch(itemsFetchData(page, perPage, orderBy)),
        likePhoto: (id, token, liked_by_user) => dispatch(likePhoto(id, token, liked_by_user)),
        loadMore: (page) => dispatch(itemsIncrPage(page)),
        openModal: (bool) => dispatch(openModalWindow(bool)),
        getTargetId: (id) => dispatch(getTargetId(id)),
        autfToken: () => dispatch(autfToken()),
        getLogin: (bool) => dispatch(getLogin(bool)),
        getOut: () => dispatch(getOut()),
    };
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;
