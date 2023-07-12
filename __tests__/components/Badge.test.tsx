import React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';
import Badge from '../../src/components/Badge';

describe('Should render a Badge component', () => {
  it('renders the correct component', () => {
    const {toJSON, getByTestId} = render(
      <Badge isRounded={true} customStyle={{size: 24, backgroundColor: 'red'}}>
        <Text>Children</Text>
      </Badge>,
    );

    expect(toJSON()).toMatchSnapshot();

    const badgeContainer = getByTestId('badge-container');
    expect(badgeContainer).toBeTruthy();
  });
});
