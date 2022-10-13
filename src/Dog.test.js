import React from "react";
import { render } from "@testing-library/react";
import Dog from './Dog'


test('it should render',()=>{

    render(<Dog name='Rusty' isAdopted={true}/>)
})

test('it should match snapshot', ()=>{

   const { asFragment } = render(<Dog name='Rusty' isAdopted={true}/>)
   expect(asFragment()).toMatchSnapshot()
})

test('it should match snapshot', ()=>{

    const { asFragment } = render(<Dog name='Rusty' isAdopted={false}/>)
    expect(asFragment()).toMatchSnapshot()
 })