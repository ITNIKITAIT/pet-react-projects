import { useContext, useEffect, useRef, useState } from 'react';
import { context } from '../App';
import WriteSection from './WriteSection';
import ReactLoading from 'react-loading';

const Field = () => {
    console.log('render');
    const [printedWords, setPrintedWords] = useState([]);

    const fieldRef = useRef();
    const { words, isLoading } = useContext(context);

    useEffect(() => {
        const wrapper = document.querySelector('.field--wrapper');
        const curWord = document.querySelector('.word-current');
        if (curWord && curWord.getBoundingClientRect().y > 120) {
            const y = Number(
                wrapper.style.transform.replace(/[^-?\d.]/g, '') || 0
            );
            wrapper.style.transform = `translateY(${y - 58}px)`;
        }
    }, [printedWords]);

    return (
        <div className="max-w-[800px] mx-auto relative">
            {isLoading ? (
                <ReactLoading
                    className="m-auto mb-5"
                    type="spin"
                    color={'var(--primary-color)'}
                    height={100}
                    width={100}
                />
            ) : (
                <div
                    ref={fieldRef}
                    className="border-4 border-primaryColor rounded-md text-[26px] py-3 px-5 mb-5 leading-[58px] h-[150px] overflow-hidden w-full select-none text-primaryColor">
                    <div className="field--wrapper">
                        {words.map((word, i) => (
                            <div
                                className={`inline-block px-2 ${
                                    i === printedWords.length
                                        ? 'word-current'
                                        : ''
                                }
                        ${
                            printedWords[i] &&
                            (words[i] === printedWords[i]
                                ? 'word--correct'
                                : 'word--incorrect')
                        }`}
                                key={i}>
                                {word}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <WriteSection
                setPrintedWords={setPrintedWords}
                printedWords={printedWords}
            />
        </div>
    );
};

export default Field;
