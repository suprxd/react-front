import React from 'react';

export const SingleTestimonial = ({
    authorName, subtitle, description, authorImage
}) => {
    return (
        <div className="col-lg-4">
            <div className="single-testimonial mt-30 mb-30 text-center">
                <div className="testimonial-image">
                    <img src={authorImage} alt="Author" />
                </div>
                <div className="testimonial-content">
                    <p className="text">{description}</p>
                    <h6 className="author-name">{authorName}</h6>
                    <span className="sub-title">{subtitle}</span>
                </div>
            </div>
        </div>
    )
}