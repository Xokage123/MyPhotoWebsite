import React, { useEffect, useCallback} from "react";
import { connect } from "react-redux";
import { loadPhotos } from "../actions/actions";
import {unsplashGetListPhotos} from "../unsplash/unsplash";
import getFormattedDate from "../utils";
import Header from "../case/Header";
import FullPhoto from "./FullPhoto";
import Footer from "../case/Footer";
import 'simplebar/dist/simplebar.min.css';

function Photos (props) {
  useEffect(() => {
    loadPhotos();
  })

  const loadPhotos = useCallback(() => {
    const page = localStorage.getItem("page");
    unsplashGetListPhotos(page).then((answer) => {
      props.loadPhotos(answer);
      localStorage.setItem("page", `${Number(page)+1}`)
    });
  }, [props])

  return (
    <>
      <Header/>
        <main className={'main'}>
          <ul className={'photos-list'}>
            {
              props.photos.map((element, index) => {
                return (
                  <FullPhoto
                    key={element.id}
                    index={index}
                    image={element.urls.thumb}
                    id={element.id}
                    author={element.user.name}
                    url={element.user.links.html}
                    likesCount={element.likes}
                    date={getFormattedDate(element.updated_at)}
                  />
                )
              })
            }
          </ul>
          <button
            className={'button-more'}
            onClick={() => {
              loadPhotos();
            }}
          >
            Show More
          </button>
        </main>
      <Footer/>
    </>
  )
}

// Создаем хранилище состояний
const mapStateToProps = (state) => ({ photos: state.photos });
// Привязываем функцию к хранилищу
function mapDispatchToProps(dispatch) {
  return {
    loadPhotos: (photos) => dispatch(loadPhotos(photos))
  };
}
// Экспортируем с привязкой
export default connect(mapStateToProps, mapDispatchToProps)(Photos);