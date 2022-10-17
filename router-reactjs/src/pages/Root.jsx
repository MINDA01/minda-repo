import useRouter from '../hooks/useRouter'

export const Root = () => {
  const { push } = useRouter();
  return(
    <>
        Root
        <button onClick ={()=> push('/about')}>about</button>
    </>
  )
};
