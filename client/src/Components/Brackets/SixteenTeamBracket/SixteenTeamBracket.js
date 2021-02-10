import style from '../bracket.module.css';
import BracketPair from '../BracketPair/BracketPair';

const SixteenTeamBracket = ({ bracket, tourId }) => {
  return (
    <>
      <div className={`${style['playoff-table']}`}>
        <div className={`${style['playoff-table-content']}`}>
          <div className={`${style['playoff-table-tour']}`}>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneEighth[0]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneEighth[1]} />
              </div>
            </div>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneEighth[2]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneEighth[3]} />
              </div>
            </div>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneEighth[4]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneEighth[5]} />
              </div>
            </div>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneEighth[6]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneEighth[7]} />
              </div>
            </div>
          </div>
          <div className={`${style['playoff-table-tour']}`}>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.quarterfinals[0]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.quarterfinals[1]} />
              </div>
            </div>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.quarterfinals[2]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.quarterfinals[3]} />
              </div>
            </div>
          </div>
          <div className={`${style['playoff-table-tour']}`}>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.semifinal[0]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.semifinal[1]} />
              </div>
            </div>
          </div>
          <div className={`${style['playoff-table-tour']}`}>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.final} />
              </div>
            </div>
            <div className={`${style['playoff-table-third-place']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.thirdPlace} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SixteenTeamBracket;
