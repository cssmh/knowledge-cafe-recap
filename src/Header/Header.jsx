import photo from '../../src/assets/images/girl2.jpg'
const Header = () => {

  return (
    <div className='flex justify-between items-center mt-2 pb-1 border-b-2'>
      <h1 className="text-2xl font-bold">Knowledge Cafe</h1>
      <img className='w-16 rounded-full' src={photo} alt="" />
    </div>
  );
};

export default Header;