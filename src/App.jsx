import axios from 'axios';
import { useState } from 'react';
import api from './api/api';
import.meta.env;

function App() {
  const [values, setValues] = useState({
    keyword: '',
    diet: '',
    exclude: '',
    response: '',
  });
  const getReciepe = async keyword => {
    const response = await api.handleRecipe(keyword);
    // console.log(response);

    console.log('keyword', keyword, 'data', response);

    setValues({ ...values, response });
  };
  console.log(values);
  const onSubmit = async e => {
    e.preventDefault();
    e.stopPropagation();
    getReciepe(values.keyword);
    // handleReciepe();
  };

  // Regular way
  // const handleReciepe = async () => {
  //   try {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://calorieninjas.p.rapidapi.com/v1/nutrition',
  //       params: { query: values.keyword },
  //       headers: {
  //         'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com',
  //         'X-RapidAPI-Key':
  //           '680ec0ce0amshb5094a6d52a0d98p1f34efjsn538a7176f19f',
  //       },
  //     };

  //     const response = await axios.request(options);
  //     console.log('recipe', response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  console.log('Output', values.response.data);

  return (
    <div className='container'>
      <div className='box'>
        <div className='text-header'>
          <h1>Recipe App</h1>
          <p>Search recipe from all over the wold</p>
        </div>
        <form onSubmit={e => onSubmit(e)}>
          <input
            type='text'
            placeholder='Search for reciepe'
            onChange={e => {
              setValues({ ...values, keyword: e.target.value });
              // getReciepe(e.target.value);
            }}
          />

          {/* <div className='flex'>
            <div className='form-control'>
              <label>Diet</label>
              <input
                type='text'
                placeholder='Select Diet'
                onChange={e =>
                  setValues({ ...values, diet: e.target.value, response: null })
                }
              />
            </div>

            <div className='form-control'>
              <label>Exclude Ingredient</label>
              <input
                type='text'
                placeholder='Search for reciepe'
                onChange={e =>
                  setValues({
                    ...values,
                    exclude: e.target.value,
                    response: null,
                  })
                }
              />
            </div>
          </div> */}
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  );
}

export default App;
