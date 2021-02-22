import { useRef, useEffect } from 'react';
import style from '../bracket.module.css';
import BracketPair from '../BracketPair/BracketPair';

const SixteenTeamBracket = ({ bracket, tourId, creator, tourStatus }) => {
  const refBracketWr = useRef(null);

  useEffect(() => {
    const targetNode = refBracketWr.current;
    const config = { attributes: true, childList: true, subtree: true, characterData: true };

    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          mutation.target.offsetParent?.classList.add(style.change);
          setTimeout(() => {
            mutation.target.offsetParent?.classList.remove(style.change);
          }, 600);
        } else if (mutation.type === 'attributes') {
        } else if (mutation.type === 'characterData') {
          mutation.target.parentNode.parentNode.classList.add(style.change);
          setTimeout(() => {
            mutation.target.parentNode.parentNode.classList.remove(style.change);
          }, 600);
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={refBracketWr} className={`${style['playoff-table']}`}>
      <div className={`${style['playoff-table-content']}`}>
        <div className={`${style['playoff-table-tour']}`}>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[0]} creator={creator} tourStatus={tourStatus}  />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[1]} creator={creator} tourStatus={tourStatus}  />
            </div>
          </div>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[2]} creator={creator} tourStatus={tourStatus}  />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[3]} creator={creator} tourStatus={tourStatus}  />
            </div>
          </div>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[4]} creator={creator} tourStatus={tourStatus}  />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[5]} creator={creator} tourStatus={tourStatus}  />
            </div>
          </div>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[6]} creator={creator} tourStatus={tourStatus}  />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.oneEighth[7]} creator={creator} tourStatus={tourStatus}  />
            </div>
          </div>
        </div>
        <div className={`${style['playoff-table-tour']}`}>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.quarterfinals[0]} creator={creator} tourStatus={tourStatus}  />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.quarterfinals[1]} creator={creator} tourStatus={tourStatus}  />
            </div>
          </div>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.quarterfinals[2]} creator={creator} tourStatus={tourStatus}  />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.quarterfinals[3]} creator={creator} tourStatus={tourStatus}  />
            </div>
          </div>
        </div>
        <div className={`${style['playoff-table-tour']}`}>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.semifinal[0]} creator={creator} tourStatus={tourStatus}  />
            </div>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.semifinal[1]} creator={creator} tourStatus={tourStatus}  />
            </div>
          </div>
        </div>
        <div className={`${style['playoff-table-tour']}`}>
          <div className={`${style['playoff-table-group']}`}>
            <div className={`${style['playoff-table-pair']} ${style['playoff-table-pair-style']}`}>
              <BracketPair tourId={tourId} match={bracket.final} creator={creator} tourStatus={tourStatus}  />
            </div>
          </div>
          <div className={`${style['playoff-table-third-place']} ${style['playoff-table-pair-style']}`}>
            <BracketPair tourId={tourId} match={bracket.thirdPlace} creator={creator} tourStatus={tourStatus}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixteenTeamBracket;
