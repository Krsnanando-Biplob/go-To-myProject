
import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
  const {Title}= bookmark;
  return (
    <div className='bg-white shadow-lg rounded-xl p-4 m-4'>
      <h2 className='text-xl' >{Title} </h2>
    </div>
  );
};
Bookmark.propTypes ={
  bookmark: PropTypes.object
}
export default Bookmark;