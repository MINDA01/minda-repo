import { Comment } from "../Comment";
import { ReviewTop, ReviewList} from './style'
import useFetch from '../../hooks/useFetch';

export const CommentBox = () => {
  const datas = useFetch('http://localhost:3001/users')

  function handleOnChange (e){
    if(e.target.value === 'latest'){
      dataList.sort((a,b)=>{
        if(a.createAt > b.createAt){
          return -1
        }
      })
    }
    if(e.target.value === 'high'){
      dataList.sort((a,b)=>{
        if(a.grade > b.grade){
          return -1
        }
      })
    }
    if(e.target.value === 'lower'){
      dataList.sort((a,b)=>{
        if(a.grade < b.grade){
          return -1
        }
      })
    }
  }

  return (
    <div>
      <ReviewTop>
        <h4>리뷰</h4>
        <select onChange={handleOnChange} style={{display: 'none'}}>
          <option value='latest'>최신순</option>
          <option value='high'>높은평점순</option>
          <option value='lower'>낮은평점순</option>
        </select>
      </ReviewTop>
      <ReviewList>
        {
          datas.map(user => {
            return(
            <Comment key={user.id} data={user}/>
          )})
        }
      </ReviewList>
    </div>
  );
};
