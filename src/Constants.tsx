import {DarkTheme, DefaultTheme, Theme} from "@react-navigation/native";

export type MyTheme = {
    dark: boolean,
    colors: {
        background: string,
        card: string,
        text: string
    }
}
export const darkTheme: Theme & MyTheme = {
    dark: true,
    colors: {
        ...DarkTheme.colors,
        background: "#2d2d2d",
        border: "#1e1e1e",
        card: "#53a245",
        text: "#bdbdbd",
    },
}

export const whiteTheme: Theme = {
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        background: "#fff",
        text: "#333",
        card: "#53a245",
        border: "#1e1e1e"
    }
}

export const API_URL = "http://192.168.0.21:3000/api"

export const URLS = {
    gundem: `${API_URL}/basliklar`,
    baslik: `${API_URL}/baslik`, // with id
    debe: `${API_URL}/debe`,
    entry: `${API_URL}/entry`, //with id
    biri: `${API_URL}/biri`, // with nickname
    ara: `${API_URL}/ara`, // with query
    autocomplete: `${API_URL}/autocomplete` // with query
}

export const ENTRY_BY_PAGE_COUNT = 15
export const THREAD_BY_PAGE_COUNT = 10
