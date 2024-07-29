"use client";

import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from 'cookies-next';

const languages = [
    { label: 'English', value: '/auto/en' },
    { label: 'Русский', value: '/auto/ru' },
    { label: 'Polski', value: '/auto/pl' }
];

const GoogleTranslate = () => {
    const [selected, setSelected] = useState('/auto/en');

    useEffect(() => {
        // Load the Google Translate script
        const addScript = document.createElement('script');
        addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(addScript);
        
        // Check for existing translation cookie
        if (hasCookie('googtrans')) {
            setSelected(getCookie('googtrans'));
        }
        
        // Define the Google Translate init function
        window.googleTranslateElementInit = () => {
            if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement({
                    pageLanguage: 'auto',
                    autoDisplay: false,
                    includedLanguages: "ru,en,pl",
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 'google_translate_element');
            }
        };

        // Cleanup script on unmount
        return () => {
            document.body.removeChild(addScript);
        };
    }, []);

    const langChange = (value, event) => {
        event.preventDefault();
        setCookie('googtrans', value);
        setSelected(value);
        window.location.reload();
    };

    return (
        <>
            <div id="google_translate_element" style={{ width: 0, height: 0, position: 'absolute', left: '50%', zIndex: -99999 }}></div>
            <SelectPicker
                data={languages}
                style={{ width: 100 }}
                placement="bottomEnd"
                cleanable={false}
                value={selected}
                searchable={false}
                onSelect={(value, event) => langChange(value, event)}
                placeholder="Lang"
            />
        </>
    );
};

export default GoogleTranslate;
