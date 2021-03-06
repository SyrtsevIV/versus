import styles from '../Profile/profile.module.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, setCustomProfileDB } from '../../redux/actionCreators/profile';
import { useParams } from 'react-router-dom'
import Cup from './Cup/Cup';
import History from './History/History';
import User from './User/User';
import Rank from './Rank/Rank';
import Circular from './CircularDiagram/Circular';
import RadarDiagram from './RadarDiagram/RadarDiagram';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const defaultLayoutProfile = {
  '1': {
    id: '1',
    comp: <History />,
  },
  '2': {
    id: '2',
    comp: <Rank />,
  },
  '3': {
    id: '3',
    comp: <RadarDiagram />,
  },
  '4': {
    id: '4',
    comp: <User />,
  },
  '5': {
    id: '5',
    comp: <Circular />,
  },
  '6': {
    id: '6',
    comp: <Cup />,
  },
}

const Profile = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const [arr, setArr] = useState([])
  let customProfile = useSelector(state => state.profileStats.customProfile)
  useEffect(() => {

    setArr(prev => {
      if (customProfile?.length) {
        return customProfile.map(number => defaultLayoutProfile[number])
      } else {
        return [1, 2, 3, 4, 5, 6].map(number => defaultLayoutProfile[number])
      }
    })
  }, [customProfile])

  useEffect(() => {
    dispatch(getUserProfile(userId))
  }, [])

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(arr);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(setCustomProfileDB(items.map(el => el.id), userId))
  }

  return (
    <div className={styles.content}>

      <div className={styles.leftBlock}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='menu'>
            {(provided) => (
              <ul className={styles.characters} {...provided.droppableProps} ref={provided.innerRef}>
                {arr.map(({ id, comp }, index) => {
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
      </div>
    </div>
  );
};

export default Profile;
