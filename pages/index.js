import '../styles/style.scss'
import axios from 'axios';

const Home = () => {
  const [params, setParams] = React.useState({
    given_names: "", 
    surname: "", 
    password: "", 
    re_password: "", 
  });

  const changeHandler = type => e => {
    e.preventDefault();
    let cloneParams = {...params};
    cloneParams[type] = e.target.value;
    setParams(cloneParams);
  }

  const onClick = e => {
    e.preventDefault();
    axios.post('');
  }

  return (
    <div>
      {Object.keys(params).map(field => {
        return (
          <input placeholder={field} onChange={changeHandler(field)} />
        );
      })}
      {/* sends confirmation email to user  */}
      <button>Submit</button>
    </div>
  );
}

export default Home;