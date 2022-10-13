import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Counter from './Counter'

test("renders without crashing", ()=>{

  render(<Counter />)
})