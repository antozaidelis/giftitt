import React, { useState, useEffect, useRef } from 'react';

import SearchList from './SearchList';
import CarouselDestacados from './CarouselDestacados';

import './gallery.css';
import CloseIcon from '@material-ui/icons/Close';

import anillo from '../img/anillo.jpg';
import anteojos_de_sol from '../img/anteojos_de_sol.jpg';
import auriculares_bluetooth from '../img/auriculares_bluetooth.jpg';
import barbijos from '../img/barbijos.jpg';
import box_de_regalo_baño from '../img/box_de_regalo_banio.jpg';
import buzo_friends from '../img/buzo_friends.jpg';
import camara_de_fotos from '../img/camara_de_fotos.jpg';
import cartera from '../img/cartera.jpg';
import chocolate from '../img/chocolate.jpg';
import colitas_de_pelo from '../img/colitas_de_pelo.jpg';
import Corbata from '../img/Corbata.jpg';
import gorrita from '../img/gorrita.jpg';
import guantes from '../img/guantes.jpg';
import iphone from '../img/iphone.jpg';
import llavero from '../img/llavero.jpg';
import maquillaje from '../img/maquillaje.jpg';
import paraguas from '../img/paraguas.jpg';
import parrilla_portátil from '../img/parrilla_portatil.jpg';
import perfume from '../img/perfume.jpg';
import planchita from '../img/planchita.jpg';
import remera_térmica from '../img/remera_termica.jpg';
import shampoo from '../img/shampoo.jpg';
import silla_gamer from '../img/silla_gamer.jpg';
import smart_tv from '../img/smart_tv.jpg';
import XBOX from '../img/XBOX.jpg';
import zapatillas from '../img/zapatillas.jpg';
import CommentCreator from './commentcreator';

import iconoFavorito from '../img/icons/favorito.png';
import iconoNoFavorito from '../img/icons/no_favorito.png';

import { Card, Row, Col } from 'react-bootstrap';

const BuscadorRegalos = () => {
  const data = [
    {
      id: 1,
      imgSrc: anillo,
      name: 'Producto 1',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 2,
      imgSrc: anteojos_de_sol,
      name: 'Producto 2',
      category: 'Relojes',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 3,
      imgSrc: auriculares_bluetooth,
      name: 'Producto 3',
      category: 'Sonido',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 4,
      imgSrc: barbijos,
      name: 'Producto 4',
      category: 'Relojes',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 5,
      imgSrc: box_de_regalo_baño,
      name: 'Producto 5',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 6,
      imgSrc: buzo_friends,
      name: 'Producto 6',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 7,
      imgSrc: camara_de_fotos,
      name: 'Producto 7',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 8,
      imgSrc: cartera,
      name: 'Producto 8',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 9,
      imgSrc: chocolate,
      name: 'Producto 9',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 10,
      imgSrc: colitas_de_pelo,
      name: 'Producto 10',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 11,
      imgSrc: Corbata,
      name: 'Producto 11',
      category: 'Indumentaria',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 12,
      imgSrc: gorrita,
      name: 'Producto 12',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 13,
      imgSrc: guantes,
      name: 'Producto 13',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 14,
      imgSrc: iphone,
      name: 'Producto 14',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 15,
      imgSrc: llavero,
      name: 'Producto 15',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 16,
      imgSrc: maquillaje,
      name: 'Producto 16',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 17,
      imgSrc: paraguas,
      name: 'Producto 17',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 18,
      imgSrc: parrilla_portátil,
      name: 'Producto 18',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 19,
      imgSrc: perfume,
      name: 'Producto 19',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 20,
      imgSrc: planchita,
      name: 'Producto 20',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 21,
      imgSrc: remera_térmica,
      name: 'Producto 21',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 22,
      imgSrc: shampoo,
      name: 'Producto 22',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 23,
      imgSrc: silla_gamer,
      name: 'Producto 23',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 24,
      imgSrc: smart_tv,
      name: 'Producto 24',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 25,
      imgSrc: XBOX,
      name: 'Producto 25',
      category: 'Accesorios',
      description: 'El secreto de los mejores perfumes...',
    },
    {
      id: 26,
      imgSrc: zapatillas,
      name: 'Producto 26',
      category: 'Calzado',
      description: 'El secreto de los mejores perfumes...',
    },
  ];

  const [taskItems, setTaskItems] = useState([{}]);
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const [userName, setUserName] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const commentRef = useRef(null);

  return (
    <>
      <Row>
        <Col>
          <SearchList />
        </Col>
      </Row>

      <Row>
        <Col>
          <CarouselDestacados />
        </Col>
      </Row>

      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        {/*       <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
        <div className="creator">
          <CommentCreator callback={() => {}} />
        </div>
        <div className="container-show-comments">
          <div className="show-comments">
            {taskItems.map((task, index) => (
              <div ref={commentRef} className="comment" key={index}>
                <div className="comment-text">
                  <span>{task.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> 
      
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: '100%' }} />
            </div>
          );
        })}
      </div>*/}

        {data.map((producto) => {
          return (
            <Col className="my-3">
              <Card className="h-100">
                <Row>
                  <Col style={{ textAlign: 'right', margin: '6px' }}>
                    <img src={iconoFavorito} />
                  </Col>
                </Row>
                <Card.Img variant="top" src={producto.imgSrc} />
                <Card.Body>
                  <Card.Title>{producto.name}</Card.Title>
                  <Card.Text>{producto.description}</Card.Text>
                  <Card.Text>{producto.category}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default BuscadorRegalos;
