import { Button } from '../../styles';

const Square = ({ value, onClick }) => {
  return (
    <Button className='square' onClick={onClick}>
      {value}
    </Button>
  );
};

export default Square;
