import React from 'react';
import TopMenu from '../components/TopMenu';
import Middle from '../components/Middle';
import BottomMenu from '../components/BottomMenu';

export default class Murphys extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Middle/>
          <BottomMenu/>
        </div>
    );
  }
}
