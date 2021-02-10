import style from './style.css';

const Bracket = () => {
  const closeHandler = async () => {
    await fetch(`${process.env.REACT_APP_URL}/tabletennis/tournament/`);
  };

  return (
    <>
      <div className={style.center}>
      <button onClick={closeHandler}>Закрыть запись</button>
      <div className="playoff-table">
        <div className="playoff-table-content">
          <div className="playoff-table-tour">
            <div className="playoff-table-group">
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
            </div>
            <div className="playoff-table-group">
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
            </div>
            <div className="playoff-table-group">
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
            </div>
            <div className="playoff-table-group">
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
            </div>
          </div>
          <div className="playoff-table-tour">
            <div className="playoff-table-group">
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
            </div>
            <div className="playoff-table-group">
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
            </div>
          </div>
          <div className="playoff-table-tour">
            <div className="playoff-table-group">
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
            </div>
          </div>
          <div className="playoff-table-tour">
            <div className="playoff-table-group">
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
              <div className="playoff-table-third-place playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Bracket;
