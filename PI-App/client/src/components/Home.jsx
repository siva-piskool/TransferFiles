import React from 'react';

export const Home = () => {
    return (
        <React.Fragment>
            <div className="pihome-slides">
                <img src={require('../../public/images/pihome-img01.jpg')} alt="" />
            </div>
            <div className="piabout piMT20">
                <div></div>
                <div>At Print Ideas, we are impulsively inclined towards transforming your deliberations into designs. Yes, you read
                  it right. Any brand is undone without the branding material ensembles and that is when we come into the picture.
                  We create one of a kind identities for corporate, business and individual firms by designing user interfaces,
                  digital marketing, logos, flyers, brochures, presentations and much more... </div>
                <div></div>
            </div>
        </React.Fragment>
    );
}