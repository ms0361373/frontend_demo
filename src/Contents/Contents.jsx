import '../App.css';
import { Link } from 'react-router-dom';

function Content() {
  return (
    <>
      <Link to={'rwd'}>
        <div>RWD</div>
      </Link>
      <Link to={'webSocket'}>
        <div>WebSocket</div>
      </Link>
    </>
  );
}

export default Content;
