import React from 'react';
import { ListContent } from 'semantic-ui-react';

const CityPlace = (props) => {
  const { list } = props;
  return <div class="institute-card">
    <p className="title"><b>{list.name}</b></p>
    <a className="name" href={`${list.location}`}>{list.office}</a>
    <p className="name">{list.director && `Староста: ${list.director}`}</p>
    <a href={`https://t.me/${list.contact}`} className='name'>{list.contact}</a>
  </div>
}

export const City = (list) => {
  console.log(list);
  return <>
    <p class="header-text">Студмістечко</p>
    <div class="cards">
      {list.map((x,id) => <CityPlace key={id} list={x} />)}
    </div>
  </>;
};