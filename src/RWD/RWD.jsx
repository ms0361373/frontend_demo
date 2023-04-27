import '../App.css';
import useRWD, { DEVICE_TYPE } from './useRWD';

function RWD() {
  const device = useRWD();
  if (device === DEVICE_TYPE.PC) return (<h1>電腦</h1>);
  if (device === DEVICE_TYPE.TABLET) return (<h1>平板</h1>);
  return (<h1>手機</h1>);
}

export default RWD;
