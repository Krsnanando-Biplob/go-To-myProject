
import profile from '../../images/profile.png'

const Hadder = () => {
  return (
    <header className='flex mb-5 items-center justify-between px-5 border-b-2 max-w-6xl  mx-auto '>
     <h1 className='text-3xl font-bold '>Knowledge Cafe</h1>
     <img src={profile} alt="" />
    </header>
  );
};

export default Hadder;