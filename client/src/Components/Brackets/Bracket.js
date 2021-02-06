import style from './style.module.css';
import cn from 'classnames';

const Bracket = () => {
  return (
    <>
      <div className={cn(style['playoff-table'])}>
        <div className={cn(style['playoff-table-content'])}>
          <div className={cn(style['playoff-table-tour'])}>
            <div className={cn(style['playoff-table-group'])}>
              <div className={cn(style['playoff-table-par'], style['playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
              <div className={cn(style['playoff-table-par'], style['playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
            </div>
            <div className={cn(style['playoff-table-group'])}>
              <div className={cn(style['playoff-table-par'], style['playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
              <div className={cn(style['playoff-table-par'], style['playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
            </div>
            <div className={cn(style['playoff-table-group'])}>
              <div className={cn(style['playoff-table-par'], style['playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
              <div className={cn(style['playoff-table-par'], style['playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
            </div>
            <div className={cn(style['playoff-table-group'])}>
              <div className={cn(style['playoff-table-par'], style['playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
              <div className={cn(style['playoff-table-par'], style['playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
            </div>
          </div>
          <div className={cn(style['playoff-table-tour'])}>
            <div className={cn(style['playoff-table-group'])}>
              <div className={cn(style['playoff-table-par'], style['playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
              <div className={cn(style['playoff-table-par'], style['playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
            </div>
            <div className={cn(style['playoff-table-group'])}>
              <div className={cn(style['playoff-table-par'], style['playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
              <div className={cn(style['playoff-table-par'], style['playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
            </div>
          </div>
          <div className={cn(style['playoff-table-tour'])}>
            <div className={cn(style['playoff-table-group'])}>
              <div className={cn(style['playoff-table-par'], style['playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
              <div className={cn(style['playoff-table-par'], style['playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
            </div>
          </div>
          <div className={cn(style['playoff-table-tour'])}>
            <div className={cn(style['playoff-table-group'])}>
              <div className={cn(style['playoff-table-par'], style['playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
              <div className={cn(style['playoff-table-third-place playoff-table-pair-style'])}>
                <div className={cn(style['playoff-table-left-player'])}>Иванов</div>
                <div className={cn(style['playoff-table-right-player'])}>Сидоров</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bracket;
