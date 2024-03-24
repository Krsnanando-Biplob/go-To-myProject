
import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmar}) => {
  return (
    <div className="md:w-1/3 ml-3 text-center bg-gray-100 rounded-lg pt-10">
      <h1 className="text-xl font-bold ">Bookmarked Blog: {bookmar.length} : </h1>
      {
        bookmar.map( (bookmar, idx) => <Bookmark key={idx} bookmark={bookmar} ></Bookmark>)
      }
    </div>
  );
};

Bookmarks.propTypes = {
  bookmar: PropTypes.array
};

export default Bookmarks;