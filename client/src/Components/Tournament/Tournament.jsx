import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createTournament } from "../../redux/actionCreators/tournamentActionCreator";

const Tournament = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [input, setInput] = useState({
    type: '',
    title: '',
    description: '',
    date: '',
    place: '',
  })

  const inputHandler = (event) => {
    setInput(prev => {
      return { ...prev, [event.target.name]: event.target.value }
    })
  }
  console.log(input);
  return (
    <>
      <select onChange={inputHandler} name='type' className="form-select" aria-label="Default select example">
        <option disabled selected='selected'>Выберите тип турнира</option>
        <option>Сингл</option>
        <option>Дабл</option>
      </select>
      <input onChange={inputHandler} name='title' type="text" className="form-control" placeholder="Название турнира" aria-label="Username" />
      <div className="form-floating">
        <textarea onChange={inputHandler} name='description' className="form-control" placeholder="Leave a comment here" placeholder='Описание'></textarea>
      </div>
      <label htmlFor="date">Дата проведения</label>
      <input onChange={inputHandler} name='date' type='date'></input>
      <input onChange={inputHandler} name='place' type="text" className="form-control" placeholder="Место проведения" aria-label="Username" />
      <button onClick={(e) => {
        e.preventDefault()
        dispatch(createTournament(input, history))
      }} className='btn btn-primary'>Создать</button>
    </>
  );
}

export default Tournament;
