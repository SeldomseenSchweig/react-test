import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import FixedComponent from './FixedComponent'

test("renders without crashing", ()=>{

  render(<FixedComponent />)
})

test("matches snapshot", ()=>{
   const {asFragment} = render(<FixedComponent />);
   expect(asFragment()).toMatchSnapshot();
})