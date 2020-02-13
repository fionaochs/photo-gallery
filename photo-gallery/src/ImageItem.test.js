import ImageItem from './ImageItem.js';
import React from "react";
import renderer from "react-test-renderer";
import images from './data.js';

test('renders ImageItem.js correctly', () => {
    const tree = renderer
      .create(<ImageItem creature={images[0]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });