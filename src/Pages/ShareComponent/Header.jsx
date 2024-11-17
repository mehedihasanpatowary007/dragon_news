import moment from 'moment';
import Logo from '../../assets/logo.png'

const Header = () => {
    return (
      <div className='flex flex-col items-center gap-3 mt-10'>
        <img className='h-[60px] w-[471px]' src={Logo} alt="brand_logo" />
        <p className='text-base text-gray-600'>Journalism Without Fear or Favour</p>
        <div className='flex gap-1'>
          <p>{moment().format("dddd,")}</p>
          <p className='text-gray-600'>{moment().format("MMMM D, YYYY")}</p>
        </div>
      </div>
    );
};

export default Header;