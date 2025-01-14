import './Content.css';

import Chat from './Chat/Chat';
import Feed from './Feed/Feed';
import Menu from './Menu/Menu';

const Content = () => {
  return (
    <div className="content">
        <Menu />
        <Feed />
        <Chat />
    </div>
  );
}

export default Content;