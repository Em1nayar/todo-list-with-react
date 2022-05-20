import {useState} from 'react'

function Form({todos,setTodos}) {
  const [form,setForm] = useState("");
  const onChangeInput = (e) => {
    setForm(e.target.value);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(form === ""){
      return false
    }
    setTodos([...todos,{text:form, completed:false, id:Math.random()*1000},]);
    setForm('');
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input className='inputValue' name='todo' value={form} placeholder='What needs to be done?' onChange={onChangeInput}></input>
      </form>   
    </div>
  )
}

export default Form