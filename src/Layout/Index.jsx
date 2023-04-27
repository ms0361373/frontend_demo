import PropTypes from 'prop-types';
import Header from './Header';

export default function Index(children) {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Header/>
      <div style={{ padding: 10 }}>{children}</div>
    </div>
  );
}

Index.propTypes = {
  children: PropTypes.object,
};
