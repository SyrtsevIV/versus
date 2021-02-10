import style from '../bracket.module.css';
import BracketPair from '../BracketPair/BracketPair';

const ThirtytwoTeamBracket = ({ bracket, tourId }) => {
  return (
    <>
      <div className={`${style['playoff-table']}`}>
        <div className={`${style['playoff-table-content']}`}>
          <div className={`${style['playoff-table-tour']}`}>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[0]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[1]} />
              </div>
            </div>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[2]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[3]} />
              </div>
            </div>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[4]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[5]} />
              </div>
            </div>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[6]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[7]} />
              </div>
            </div>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[8]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[9]} />
              </div>
            </div>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[10]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[11]} />
              </div>
            </div>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[12]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[13]} />
              </div>
            </div>
            <div className={`${style['playoff-table-group']}`}>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[14]} />
              </div>
              <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
                <BracketPair tourId={tourId} match={bracket.oneSixteenth[15]} />
              </div>
            </div>
          </div>
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

export default ThirtytwoTeamBracket;
