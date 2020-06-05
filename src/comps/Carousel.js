import React, {useState} from 'react';


import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
import { Weathercard } from './Weathercard';



  const ForecastWrapper = styled.div`
  vertical-align: middle;
  text-align:center;
  flex-shrink: 0;
  flex-basis: 90px;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

`;

const Carousel = (props) => {
    const {items } = props;

    const [activeItemIndex, setIndex] = useState(0);

    return (
        <div  className='container forcast'>
          <h3>Forecast</h3>
          
        <ItemsCarousel
          placeholderItem={<div style={{ margin:0,height: 200, background: '#EEE' }} />}
          enablePlaceholder={true}
          numberOfPlaceholderItems={5}
          numberOfCards={(window.innerWidth <1000) ? 3 : 9}   // for responsive page 
          gutter={12}
          slidesToScroll={5}
          chevronWidth={60}
          outsideChevron={true}
          showSlither={false}
          firstAndLastGutter={false}
          activeItemIndex={activeItemIndex}
          requestToChangeActive={value => setIndex( value )}
          rightChevron={<button  className="btn btn-light btn-circle btn-sm">{'>'}</button>}
          leftChevron={<button  className="btn btn-light btn-circle btn-sm">{'<'}</button>}
        >
          {items.list.map((_item, i) =>
          <div key={i} >
          <ForecastWrapper>
            <Weathercard  item={_item}></Weathercard>           
          </ForecastWrapper>
          </div>
          )}


          
        </ItemsCarousel>

      </div>
    );
}

export default Carousel;