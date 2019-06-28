import React, { Component } from 'react';
import Lightbox from './Lightbox';
import Lightbox2 from './LightBox2';
import './Gallery.css';
import Modal from './Modal';

class Gallery extends Component {
    render() {
        return (
            <div>
                <div className="container pc-bg1 pc-paddingT">
                    <h2 className='pc-c1 text-left p-0'>Gallery</h2>
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#photos1">Photos1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#photos2">Photos2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#photos3">Photos3</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#videos">Videos</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="photos1" class="container tab-pane active">
                            <br />
                            <h1>LK Gallery</h1>
                            <Lightbox />
                        </div>
                        <div id="photos2" class="container tab-pane fade">
                            <br />
                            <h1>Siva Gallery</h1>
                            <Lightbox2/>
                        </div>
                        <div id="photos3" class="container tab-pane fade">
                            <br />
                            <h1>Siva Gallery2</h1>
                            <Modal/>
                        </div>
                        <div id="videos" class="container tab-pane fade">
                            <br />
                            <div className='row'>
                               <div className='col-md-4 col-sm-6 col-12'>
                                  <iframe src="https://www.youtube.com/embed/8EJvdKf-J18" height='300px' title='video1' className='border-0'></iframe>
                               </div>
                               <div className='col-md-4 col-sm-6 col-12'>
                                  <iframe src="https://www.youtube.com/embed/8EJvdKf-J18" height='300px' title='video2' className='border-0'></iframe>
                               </div>
                               <div className='col-md-4 col-sm-6 col-12'>
                                  <iframe src="https://www.youtube.com/embed/8EJvdKf-J18" height='300px' title='video3' className='border-0'></iframe>
                               </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
}

export default Gallery;