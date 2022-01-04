import React from 'react';
import ContactUs from '../SendEmail';
import './antd.css';
import {
  Wrapper,
  Carousels,
  Mortal,
  Tanirovka,
  Marvels,
  Title,
  Item,
} from './style';

export const Opener = () => {
  return (
    <Wrapper>
      <Carousels autoplay>
        <Marvels>
          <Tanirovka></Tanirovka>
        </Marvels>
        <Mortal>
          <Tanirovka></Tanirovka>
        </Mortal>
        <Marvels>
          <Tanirovka></Tanirovka>
        </Marvels>
        <Mortal>
          <Tanirovka></Tanirovka>
        </Mortal>
        <Marvels>
          <Tanirovka></Tanirovka>
        </Marvels>
      </Carousels>
      <Title>fdcmove about</Title>
      <Item>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum cumque,
        architecto nemo maiores molestias mollitia officia voluptate officiis.
        Veniam numquam officia quidem ab ad vero nesciunt eaque. Aspernatur odit
        earum, distinctio, incidunt officia enim ea tempora quo totam quis nulla
        amet inventore. Fuga voluptatum non optio distinctio molestiae quibusdam
        rerum alias nam unde asperiores, quae provident esse, deleniti illum,
        magnam pariatur? Porro dolore nobis vel, sequi alias perferendis?
        Impedit ratione, blanditiis ad ducimus cupiditate libero veritatis. Hic
        autem cumque corrupti exercitationem maiores consequatur, saepe
        temporibus iusto quo quis expedita accusamus animi culpa doloremque
        aspernatur minima perspiciatis ab velit! Qui enim, provident repudiandae
        ea cum minima, temporibus perspiciatis officiis recusandae numquam
        magnam officia reprehenderit! Similique voluptas provident ducimus
        perspiciatis veniam quia, repudiandae dolorum at harum odio esse dolor
        consequatur tempora quod distinctio, voluptates sapiente voluptatem
        omnis debitis animi vitae asperiores molestias? Aperiam veritatis velit,
        aspernatur nulla excepturi adipisci voluptatem quod, quas unde
        consequatur quae dolorum nesciunt fugiat laudantium autem, suscipit enim
        eligendi repudiandae tempora expedita vitae corporis nostrum harum non?
        Natus dolor asperiores, quam praesentium odit sint optio itaque deleniti
        maiores impedit vitae. Sed voluptatem quaerat iure rerum rem saepe, enim
        voluptatibus impedit possimus deleniti sequi quidem neque eveniet
        veritatis non!
      </Item>
      <ContactUs />
    </Wrapper>
  );
};

export default Opener;
