import React from 'react';

export const About = () => {
    return (
        <div>
            <div class="piheader-img">
                <img src={require('../../public/images/about-pi.jpg')} width="1920" height="540" alt="" />
                <div class="piheader-txt">… {"{one stop solution of end-to-end branding }"} …</div>
            </div>
            <div class="piabout piMT20">
                <div></div>
                <div>At Print Ideas, we are impulsively inclined towards transforming your deliberations into designs. Yes, you read it right. Any brand is undone without the branding material ensembles and that is when we come into the picture. We create one of a kind identities for corporate, business and individual firms by designing user interfaces, digital marketing, logos, flyers, brochures, presentations and much more... </div>
                <div></div>
            </div>
        </div>
    );
}