'use client';

import axios from 'axios';
import swal from 'sweetalert';
import getData from '@/app/data/getAllDate';
import { createContext, useContext, useEffect, useState } from 'react';
import { useAlert } from './AlertContext';
import { useAuth } from './AuthContext';

export const NewsContext = createContext();
export const useNews = () => useContext(NewsContext);

export const NewsContextProvider = ({ children }) => {
    const {user} = useAuth()
    const [news, setNews] = useState([])
    const { showAlert } = useAlert();
    const [openModal , setOpenModal] = useState(false)
    useEffect(() => {
        getData('news' , setNews)
    },[])
    const addNews = async (title, content, image) => {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', title);
        formData.append('content', content);

        await axios.post(`${process.env.NEXT_PUBLIC_BACK_URL}/api/news/add`, formData, {
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((res) => {
            showAlert(res.message || "New Added Successfully")
            setNews([...news , res.data])
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const deleteNews = async (id) => {
        await axios.delete(`${process.env.NEXT_PUBLIC_BACK_URL}/api/news/delete/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then((res) => {
                showAlert(res.message || "New removed Successfully")
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <NewsContext.Provider value={{ news , addNews , deleteNews , openModal , setOpenModal }}>
            {children}
        </NewsContext.Provider>
    )
}