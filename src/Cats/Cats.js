import React from "react";
import { Route, Switch } from "react-router-dom";

import catAPI from "./catAPI";
import CatList from "./CatList";
import Cat from "./Cat";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      favCats: []
    };
  }

  removeFromFavs = id => {
    const { favCats } = this.state;
    this.setState({
      favCats: favCats.filter(cat => cat.id !== id)
    });
  };

  addToFavs = cat => {
    const { favCats } = this.state;
    this.setState({
      favCats: [...favCats, cat]
    });
  };

  renderCat = props => {
    const { id } = props.match.params;
    const cat = catAPI.getOne(id);

    if (!cat) {
      return <div> could not find cat </div>;
    } else {
      const { favCats } = this.state;
      const isFavCat = favCats.some(cat => cat.id === id);
      return (
        <Cat
          addToFavs={() => this.addToFavs(cat)}
          removeFromFavs={() => this.removeFromFavs(cat.id)}
          isFavCat={isFavCat}
          cat={cat}
        />
      );
    }
  };

  renderAllCats = () => {
    const cats = catAPI.getAll();
    return <CatList cats={cats} />;
  };

  renderFavCats = () => {
    const { favCats } = this.state;
    return <CatList cats={favCats} />;
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/cats" render={this.renderAllCats} />
          <Route path="/cats/fav" render={this.renderFavCats} />
          <Route path="/cats/one/:id" render={this.renderCat} />
        </Switch>
      </div>
    );
  }
}

export default App;
