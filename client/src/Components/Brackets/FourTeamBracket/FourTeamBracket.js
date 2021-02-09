import style from '../bracket.module.css';
import BracketPair from '../BracketPair/BracketPair';

const FourTeamBracket = ({ bracket }) => {
  return (
    <>
      <div className={`${style['playoff-table']} ${style['height-250']}`}>
        <div className={`${style['playoff-table-content']}`}>
          <div className={`${style['playoff-table-tour']}`}>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair match={bracket.semifinal[0]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair match={bracket.semifinal[1]} />
              </div>
            </div>
          </div>
          <div className={`${style['playoff-table-tour']}`}>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair match={bracket.final} />
              </div>
            </div>
            <div className={`${style['playoff-table-third-place']} ${style['playoff-table-pair-style']}`}>
              <BracketPair match={bracket.thirdPlace} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourTeamBracket;
