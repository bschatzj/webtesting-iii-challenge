// Test away
import React from 'react';
import {render} from '@testing-library/react';
import Dashboard from './Dashboard';


test('control render correct' , () => {
    expect(render(<Dashboard/>)).toMatchSnapshot();
});