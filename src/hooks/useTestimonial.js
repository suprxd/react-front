import { useEffect, useState } from 'react';
import axios from "axios";
import { GET_TESTIMONIAL_URL } from '../config';

export const useTestimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get(GET_TESTIMONIAL_URL)
            .then((response) => {
                setIsLoading(false);
                console.log("API Call Success", response.data.data);
                setTestimonials(response.data.data);
            }).catch((error) => {
                setIsLoading(false);
                console.log("API Call Fail", error);
                setTestimonials([]);
            });
    }, []);

    return { testimonials, isLoading }
}