import React from 'react';
import { screenshot } from '@react-playwright';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  test('should render', async () => {
    const screen = await screenshot(<Checkbox>label</Checkbox>);
    expect(screen).toMatchImageSnapshot();
  });
});