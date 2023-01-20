import React, {useCallback, useEffect, useState} from "react";
import {TGundem} from "../pages/GundemPage";
import {ENTRY_BY_PAGE_COUNT, THREAD_BY_PAGE_COUNT} from "../Constants";
import {wait} from "../functions/functions";


type EntryByPage = {
    entries: TGundem[],
    page: number
}


export const useEntryByPage = () => {
    const [filteredEntries, setFilteredEntries] = useState<TGundem[]>([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [allEntries, setAllEntries] = useState<TGundem[]>([])

    const waitAndRun = async (fc: () => void, ms = 500) => {
        setIsLoading(true)
        fc()
        await wait(ms)
        setIsLoading(false)
    }

    const calculateEntry = async (entries: TGundem[], page: number) => {

        waitAndRun(() => {
            const count = entries.length
            const totalPages = Math.ceil(count / ENTRY_BY_PAGE_COUNT)
            const entriesPerPage = entries.slice((page - 1) * ENTRY_BY_PAGE_COUNT, page * ENTRY_BY_PAGE_COUNT)
            setPage(page)
            setFilteredEntries(entriesPerPage)
            setTotalPages(totalPages)
        }, 500)
    }
    const increasePage = () => {
        if (page + 1 <= totalPages) {
            waitAndRun(() => {
                setPage(p => p += 1)
            }, 100)
        }
    }

    const decreasePage = () => {
        if (page - 1 >= 0) {
            waitAndRun(() => {
                setPage(p => p -= 1)
            }, 100)
        }
    }

    const updateAllEntries = (entries: TGundem[]) => {
        setAllEntries(entries)
    }

    useEffect(() => {
        calculateEntry(allEntries, page)
    }, [page])

    return {
        calculateEntry,
        filteredEntries,
        page,
        totalPages,
        isLoading,
        increasePage,
        decreasePage,
        updateAllEntries
    }
}
