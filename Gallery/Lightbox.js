
import React from 'react';
import './Lightbox.css';
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: null,
            imgUrls: [
                require('../images/gallery/PC_pic_01.jpg'),
                require('../images/gallery/PC_pic_02.jpg'),
                require('../images/gallery/PC_pic_03.jpg'),
                require('../images/gallery/PC_pic_04.jpg'),
                require('../images/gallery/PC_pic_05.jpg'),
                require('../images/gallery/PC_pic_06.jpg'),
                require('../images/gallery/PC_pic_07.jpg'),
                require('../images/gallery/PC_pic_08.jpg'),
                require('../images/gallery/PC_pic_09.jpg'),
                require('../images/gallery/PC_pic_10.jpg'),
                require('../images/gallery/PC_pic_11.jpg'),
                require('../images/gallery/PC_pic_12.jpg'),
                require('../images/gallery/PC_pic_13.jpg'),
                require('../images/gallery/PC_pic_14.jpg'),
                require('../images/gallery/PC_pic_15.jpg'),
                require('../images/gallery/PC_pic_16.jpg'),
                require('../images/gallery/PC_pic_17.jpg'),
                require('../images/gallery/PC_pic_18.jpg'),
                require('../images/gallery/PC_pic_19.jpg'),
                require('../images/gallery/PC_pic_20.jpg'),
                require('../images/gallery/PC_pic_21.jpg'),
                require('../images/gallery/PC_pic_22.jpg'),
                require('../images/gallery/PC_pic_23.jpg'),
                require('../images/gallery/PC_pic_24.jpg'),
                require('../images/gallery/PC_pic_25.jpg'),
                require('../images/gallery/PC_pic_26.jpg'),
                require('../images/gallery/PC_pic_27.jpg'),
                require('../images/gallery/PC_pic_28.jpg'),
                require('../images/gallery/PC_pic_29.jpg'),
                require('../images/gallery/PC_pic_30.jpg'),
                require('../images/gallery/PC_pic_31.jpg'),
                require('../images/gallery/PC_pic_32.jpg'),
                require('../images/gallery/PC_pic_33.jpg'),
                require('../images/gallery/PC_pic_34.jpg'),
                require('../images/gallery/PC_pic_35.jpg'),
                require('../images/gallery/PC_pic_36.jpg'),
                require('../images/gallery/PC_pic_37.jpg'),
                require('../images/gallery/PC_pic_38.jpg'),
                require('../images/gallery/PC_pic_39.jpg'),
                require('../images/gallery/PC_pic_40.jpg'),
                require('../images/gallery/PC_pic_41.jpg'),
                require('../images/gallery/PC_pic_42.jpg'),
                require('../images/gallery/PC_pic_43.jpg'),
                require('../images/gallery/PC_pic_44.jpg'),
                require('../images/gallery/PC_pic_45.jpg'),
                require('../images/gallery/PC_pic_46.jpg'),
                require('../images/gallery/PC_pic_47.jpg'),
                require('../images/gallery/PC_pic_48.jpg'),
                require('../images/gallery/PC_pic_49.jpg'),
                require('../images/gallery/PC_pic_50.jpg')
            ],
            altTxt: [
                'Feature Stars of Pride International School.',
                'Pride of our succeeded students.',
                'Creativity of students who make our brand stylish.',
                'Play @ Pride International School.',
                'Study that involve reactions of passion.',
                'Traditional art of “Tholu Bommalata” craft made by our students.',
                'Achievers @ Pride International School.',
                'Achievers @ Pride International School.',
                'Wood Craft @ Pride International School.',
                'Electronics @ Pride International School.',
                10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
            ]
        };
        this.closeModal = this.closeModal.bind(this);
        this.findNext = this.findNext.bind(this);
        this.findPrev = this.findPrev.bind(this);
    }
    openModal(e, index) {
        this.setState({ currentIndex: index });
    }
    closeModal(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        this.setState({ currentIndex: null });
    }
    findPrev(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }));
    }
    findNext(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.imgUrls.map((src, index) => {
                            return(
                                <div className='col-lg-3 col-md-6 col-sm-12 box-border' onClick={(e) => this.openModal(e, index)}>
                                     <img src={src} key={src} className='img-fluid cursor' alt={src} />
                                </div>
                            )
                        })
                    }
                </div>
                <GalleryModal
                    closeModal={this.closeModal}
                    findPrev={this.findPrev}
                    findNext={this.findNext}
                    hasPrev={this.state.currentIndex > 0}
                    hasNext={this.state.currentIndex + 1 < this.state.imgUrls.length}
                    src={this.state.imgUrls[this.state.currentIndex]}
                    alt={this.state.altTxt[this.state.currentIndex]}
                />
            </div>
        )
    }
}

class GalleryModal extends React.Component {
    constructor() {
        super();
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(e) {
        if (e.keyCode === 27)
            this.props.closeModal();
        if (e.keyCode === 37 && this.props.hasPrev)
            this.props.findPrev();
        if (e.keyCode === 39 && this.props.hasNext)
            this.props.findNext();
    }
    render() {
        const { closeModal, hasNext, hasPrev, findNext, findPrev, src, alt } = this.props;
        if (!src) {
            console.log('whut')
            return null;
        }
        return (
            <div>
                <div className="modal-overlay" onClick={closeModal}></div>
                <div isOpen={!!src} className="modal">
                    <div className='modal-body'>
                        <a href="#" className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
                        {hasPrev && <a href="#" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
                        {hasNext && <a href="#" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
                        <img src={src} alt='pride chirala' />
                        <p className='gallery-footer'>{alt}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;