import React from 'react';

const Searchbar = () => {
  return (
    <div>
      <nav style={{ marginBottim: '30px' }} className="blue">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Searchbar;
