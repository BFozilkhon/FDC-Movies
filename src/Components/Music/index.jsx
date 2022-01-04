import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { musicApi } from '../../redux/music';

export const Music = () => {
  const data = useSelector((state) => console.log(state.music));
  // const dispatch = useDispatch();
  // useEffect(() => {
  // dispatch(musicApi);
  // }, []);

  return (
    <div>
      <h1>hey</h1>
    </div>
  );
};

export default Music;
