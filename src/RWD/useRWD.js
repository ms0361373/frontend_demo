import { useState, useEffect } from 'react';
import _ from 'lodash';

export const DEVICE_TYPE = {
  PC: 'PC',
  TABLET: 'tablet',
  MOBILE: 'mobile',
};

const useRWD = () => {
  const [deviceType, setDeviceType] = useState(DEVICE_TYPE.MOBILE);

  const handleRWD = () => {
    const { innerWidth } = window;
    if (innerWidth > 768) {
      setDeviceType(DEVICE_TYPE.PC);
    } else if (innerWidth > 576) {
      setDeviceType(DEVICE_TYPE.TABLET);
    } else {
      setDeviceType(DEVICE_TYPE.MOBILE);
    }
  };

  const debouncedHandleRWD = _.debounce(handleRWD, 200);

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleRWD);

    return () => {
      window.removeEventListener('resize', debouncedHandleRWD);
    };
  }, [debouncedHandleRWD]);

  return deviceType;
};

export default useRWD;
