import { useState } from 'react';
import.meta.env;

function App() {
  const [values, setValues] = useState({
    keyword: '',
    diet: '',
    exclude: '',
    response: '',
  });


  console.log(values);
  const onSubmit = async e => {
    e.preventDefault();
    e.stopPropagation();
  };

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
            onChange={e =>
              setValues({ ...values, keyword: e.target.value, response: null })
            }
          />

          <div className='flex'>
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
          </div>
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  );
}

export default App;
