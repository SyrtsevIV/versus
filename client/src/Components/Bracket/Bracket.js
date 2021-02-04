import style from './style.css';

const Bracket = () => {
  return (
    <div className="bracket">
      <section className="round quarterfinals">
        <div className="winners">
          <div className="matchups">
            <div className="matchup">
              <div className="participants">
                <div className="participant winner">
                  <span>Uno</span>
                </div>
                <div className="participant">
                  <span>Ocho</span>
                </div>
              </div>
            </div>
            <div className="matchup">
              <div className="participants">
                <div className="participant">
                  <span>Dos</span>
                </div>
                <div className="participant winner">
                  <span>Siete</span>
                </div>
              </div>
            </div>
          </div>
          <div className="connector">
            <div className="merger"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="winners">
          <div className="matchups">
            <div className="matchup">
              <div className="participants">
                <div className="participant">
                  <span>Treis</span>
                </div>
                <div className="participant winner">
                  <span>Seis</span>
                </div>
              </div>
            </div>
            <div className="matchup">
              <div className="participants">
                <div className="participant">
                  <span>Cuatro</span>
                </div>
                <div className="participant winner">
                  <span>Cinco</span>
                </div>
              </div>
            </div>
          </div>
          <div className="connector">
            <div className="merger"></div>
            <div className="line"></div>
          </div>
        </div>
      </section>
      <section className="round semifinals">
        <div className="winners">
          <div className="matchups">
            <div className="matchup">
              <div className="participants">
                <div className="participant winner">
                  <span>Uno</span>
                </div>
                <div className="participant">
                  <span>Dos</span>
                </div>
              </div>
            </div>
            <div className="matchup">
              <div className="participants">
                <div className="participant winner">
                  <span>Seis</span>
                </div>
                <div className="participant">
                  <span>Cinco</span>
                </div>
              </div>
            </div>
          </div>
          <div className="connector">
            <div className="merger"></div>
            <div className="line"></div>
          </div>
        </div>
      </section>
      <section className="round finals">
        <div className="winners">
          <div className="matchups">
            <div className="matchup">
              <div className="participants">
                <div className="participant winner">
                  <span>Uno</span>
                </div>
                <div className="participant">
                  <span>Seis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bracket;
