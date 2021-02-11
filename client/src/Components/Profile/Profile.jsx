import styles from '../Profile/profile.module.css'
import { useEffect } from 'react';
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
  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserProfile(id))
  }, [])

  return (
    <div className={styles.content}>
      
      <DragDropContext>
       
        <div className={styles.topBlock}>
          
          {/* <Droppable droppableId="1">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                {...provided.droppableProps}
              >
                {provided.placeholder}
              </div>
            )} */}

    
            <User /> 
            <Rank />
            <Cup />
          {/* </Droppable>         */}

        </div>

        <div className={styles.statsBlock}>

          <History />
          <Circular />
          <RadarDiagram />

        </div>

      </DragDropContext>

    </div>
  );
};

export default Profile;
