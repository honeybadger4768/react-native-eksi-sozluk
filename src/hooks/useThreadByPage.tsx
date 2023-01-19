import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {URLS} from "../Constants";

export type TThread = {
    author: string;
    author_id: string;
    body: string;
    created_at: string;
    fav_count: string;
    id: string;
    updated_at?: any;
}

export const useThreadByPage = (slug : string ) =>{
    const [threads, setThreads] = useState<TThread[]>([])
    const [totalPages, setTotalPages] = useState<number>(0)
    const [page, setPage] = useState<number>(1)
    const [title, setTitle] = useState<string>("")

    const updateThreads = (threads : TThread[] = []) =>{
        if(threads){
            setThreads(threads)
        }
    }

    const increasePage = () =>{
        if(page + 1 <= totalPages){
            setPage(p => p += 1)
            fetchThread()
        }
    }

    const decreasePage = () =>{
        if(page - 1 >= 0){
            setPage(p => p -=1 )
            fetchThread()
        }
    }

    const fetchThread = useCallback(() =>{
        axios({
            method: "get",
            url: `${URLS.baslik}${slug}&p=${page}`
        }).then(res => {
            updateThreads(res.data.entries)
            setTotalPages(res.data.total_page)
            setTitle(res.data.title)
        }).catch(e => {
            console.log(e)
        })
    }, [])

    useEffect(() =>{
        fetchThread()
    }, [])

    return {
        threads,
        increasePage,
        decreasePage,
        page,
        totalPages,
        title
    }
}
