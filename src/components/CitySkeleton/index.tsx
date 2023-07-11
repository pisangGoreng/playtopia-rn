import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {horizontalScale, verticalScale} from '../../utils/scaling';

const CitySkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={horizontalScale(16)}>
      <SkeletonPlaceholder.Item flexDirection="row">
        {[...Array(3)].map((e, i) => (
          <SkeletonPlaceholder.Item
            key={i}
            width={horizontalScale(107)}
            height={verticalScale(105)}
            marginRight={horizontalScale(16)}
          />
        ))}
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default CitySkeleton;
