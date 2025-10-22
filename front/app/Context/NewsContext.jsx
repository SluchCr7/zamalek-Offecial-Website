'use client';

import axios from 'axios';
import swal from 'sweetalert';
import getData from '@/app/data/getAllDate';
import { createContext, useContext, useEffect, useState } from 'react';
import { useAlert } from './AlertContext';

export const NewsContext = createContext();
export const useNews = () => useContext(NewsContext);

export const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState([])
    const { showAlert } = useAlert();
    useEffect(() => {
        getData('news' , setNews)
    },[news])
    const addNews = async(title , content) => {
        await axios.post(`${process.env.NEXT_PUBLIC_BACK_URL}/api/news/add` , {title , content})
        .then((res) => {
            showAlert(res.message || "New Added Successfully")
            setNews([...news , res.data])
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const deleteNews = async (id) => {
        await axios.delete(`${process.env.NEXT_PUBLIC_BACK_URL}/api/news/delete/${id}`)
            .then((res) => {
                showAlert(res.message || "Added removed Successfully")
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <NewsContext.Provider value={{ news , addNews , deleteNews }}>
            {children}
        </NewsContext.Provider>
    )
}