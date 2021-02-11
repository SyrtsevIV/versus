import styles from '../Profile/profile.module.css'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserProfile } from '../../redux/actionCreators/profile';
import { useParams } from 'react-router-dom'

import Cup from './Cup/Cup';
import History from './History/History';
import User from './User/User';
import Rank from './Rank/Rank';
import Circular from './CircularDiagram/Circular';
import RadarDiagram from './RadarDiagram/RadarDiagram';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


const Profile = () => {
  const {userId} = useParams()
  console.log(userId, 'userId');
  const dispatch = useDispatch()

  const [arr, setArr] = useState([
    {
      id: '1',
      comp: <User />
    },
    {
      id: '2',
      comp: <Rank />
    },
    {
      id: '3',
      comp: <Cup />
    }, 
  ])

  useEffect(() => {
    dispatch(getUserProfile(userId))
  }, [])

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(arr);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setArr(items);
  }

  
  return (
    <div className={styles.content}>
      
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='menu'>
          {(provided) => (
            <ul className={styles.characters} {...provided.droppableProps} ref={provided.innerRef}>
              {arr.map(({id, comp}, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {comp}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}  
        </Droppable>
      </DragDropContext>          

        <div className={styles.statsBlock}>

          <History />
          <Circular />
          <RadarDiagram />

        </div>
    </div>
  );
};

export default Profile;
