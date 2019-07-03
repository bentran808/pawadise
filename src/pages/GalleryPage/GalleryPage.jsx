import React, { Component } from "react";

class GalleryPage extends Component {
  render() {
    return (
      <main>
        <div className="bgGallery">
            <h1>Gallery Page</h1>
        </div>
        <div className="btn-filter">
            <button>Tất cả</button>
            <button>Chó</button>
            <button>Mèo</button>
            <button>Khác</button>
        </div>
        <div className="row-gallery">
          <div className="column-gallery">
            <img src="http://lorempixel.com/800/500/" />
            <img src="http://lorempixel.com/500/800/" />
            <img src="http://lorempixel.com/1000/500/" />
            <img src="http://lorempixel.com/400/300/" />
            <img src="http://lorempixel.com/600/400/" />
            <img src="http://lorempixel.com/1500/380/" />
            <img src="http://lorempixel.com/400/300/" />
          </div>
          <div className="column-gallery">
            <img src="http://lorempixel.com/800/800/" />
            <img src="http://lorempixel.com/1000/500/" />
            <img src="http://lorempixel.com/800/500/" />
            <img src="http://lorempixel.com/1000/500/" />
            <img src="http://lorempixel.com/500/800/" />
            <img src="http://lorempixel.com/800/800/" />
          </div>
          <div className="column-gallery">
          <img src="http://lorempixel.com/800/500/" />
            <img src="http://lorempixel.com/500/800/" />
            <img src="http://lorempixel.com/1000/500/" />
            <img src="http://lorempixel.com/400/300/" />
            <img src="http://lorempixel.com/600/400/" />
            <img src="http://lorempixel.com/1500/380/" />
            <img src="http://lorempixel.com/400/300/" />
          </div>
          <div className="column-gallery">
          <img src="http://lorempixel.com/800/800/" />
            <img src="http://lorempixel.com/1000/500/" />
            <img src="http://lorempixel.com/800/500/" />
            <img src="http://lorempixel.com/1000/500/" />
            <img src="http://lorempixel.com/500/800/" />
            <img src="http://lorempixel.com/800/800/" />
          </div>
        </div>
      </main>
    );
  }
}

export default GalleryPage;
