import Logo from './asset/Logo.svg';

function TicTacToe() {
  return (
    <div className='bg-[#3D7AD6] w-full h-screen flex flex-col justify-center items-center'>
          <img src={Logo} alt=''/>
          <p className='text-center text-white'>
          Tic Tac Toe (armani)
          </p>
    </div>
  );
}

export default TicTacToe;
