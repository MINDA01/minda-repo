import useRouter from '../hooks/useRouter'

export const About = () => {
  const { push }  = useRouter();
  return (
    <>
      About
      <button onClick ={()=> push('/')}>go main</button>
    </>
  )
};
