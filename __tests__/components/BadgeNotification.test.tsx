import React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';
import BadgeNotification from '../../src/components/BadgeNotification';

describe('Should render a Badge Notification component', () => {
  it('renders the correct compoenent', () => {
    const {toJSON, getByTestId} = render(<BadgeNotification />);

    expect(toJSON()).toMatchSnapshot();

    // const badgeContainer = getByTestId('badge-container');
    // expect(badgeContainer).toBeTruthy();
  });
});
