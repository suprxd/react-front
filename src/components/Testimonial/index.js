import React from 'react';
import ReactLoading from 'react-loading';

import { useTestimonial } from '../../hooks/useTestimonial';

import { TestimonialHeader } from './TestimonialHeader';
import { SingleTestimonial } from './SingleTestimonial';

export const Testimonial = () => {

    const { testimonials, isLoading } = useTestimonial();

    return (
        <section id="testimonial" className="testimonial-area">

            <div className="container">
                <TestimonialHeader />
                <div className="row">
                    <div className="col-lg-12">

                        <div className="row testimonial-active">
                            {
                                testimonials.map((testimonial) => (
                                    <SingleTestimonial
                                        key={testimonial._id}
                                        authorImage={testimonial.authorImage}
                                        subtitle={testimonial.subtitle}
                                        authorName={testimonial.authorName}
                                        description={testimonial.description} />
                                ))
                            }
                        </div>

                        {isLoading &&
                            <div style={{ width: 160, margin: 'auto' }}>
                                <ReactLoading type='bubbles' color='#ddd' width={120} />
                            </div>
                        }

                    </div>
                </div>


            </div>

        </section>
    )
}