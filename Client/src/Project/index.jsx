import React, { useState } from 'react';
import { PlusIcon, XIcon } from 'lucide-react';
// interface Projectp {
//     id: number;
//     name: string;
//     description: string;
// }
export function Project() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    //const [projects, setProjects] = useState<Projectp[]>([]);
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    // const handleCreateProject = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     if (!projectName.trim()) return;
    //     const newProject = {
    //         id: Date.now(),
    //         name: projectName,
    //         description: projectDescription
    //     };
    //     setProjects([...projects, newProject]);
    //     setProjectName('');
    //     setProjectDescription('');
    //     setIsModalOpen(false);
    // };
    return <div className="app">
        {projects.length === 0 ? <div className="empty-state">
            <div className="logo">
                <span className="logo-text">Q</span>
            </div>
            <h1>Create a New Project</h1>
            <div className="illustration">
                {/*<img src="/pic2.png" alt="Create Project" />*/}
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="400.000000pt" height="271.000000pt"
                     viewBox="0 0 400.000000 271.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,271.000000) scale(0.100000,-0.100000)" fill="#36474e"
                       stroke="none">
                        <path
                            d="M0 2700 c0 -7 294 -10 861 -10 l860 0 -3 -110 -3 -110 283 0 282 0 0 110 0 110 855 0 855 0 0 -1340 0 -1340 -1990 0 -1990 0 -3 1338 -2 1337 -3 -1342 -2 -1343 2000 0 2000 0 -2 1353 -3 1352 -852 3 c-747 2 -853 0 -867 -13 -22 -22 -530 -22 -552 0 -14 13 -124 15 -870 15 -563 0 -854 -3 -854 -10z m2011 -50 l229 0 0 -70 0 -70 -245 0 -245 0 0 76 c0 65 2 75 16 70 9 -3 119 -6 245 -6z"/>
                        <path d="M3833 2493 c15 -2 39 -2 55 0 15 2 2 4 -28 4 -30 0 -43 -2 -27 -4z"/>
                        <path
                            d="M293 2423 l-233 -3 0 -290 0 -290 235 0 235 0 0 295 c0 162 -1 294 -2 293 -2 -2 -108 -4 -235 -5z m222 -293 l0 -275 -222 -3 -223 -2 0 280 0 280 223 -2 222 -3 0 -275z"/>
                        <path
                            d="M224 2310 c-25 -10 -74 -66 -74 -85 0 -7 -3 -20 -6 -29 -3 -9 -1 -16 5 -16 6 0 11 10 11 23 0 13 5 28 12 35 7 7 8 12 3 12 -18 0 51 50 77 55 33 8 88 -3 88 -16 0 -5 6 -9 14 -9 8 0 22 -20 31 -44 31 -82 -15 -155 -102 -163 -56 -6 -96 19 -119 71 -9 21 -13 25 -14 13 0 -31 37 -74 81 -91 146 -59 250 152 116 234 -33 21 -87 25 -123 10z"/>
                        <path d="M248 1983 c17 -2 47 -2 65 0 17 2 3 4 -33 4 -36 0 -50 -2 -32 -4z"/>
                        <path
                            d="M850 2389 l0 -39 1086 0 1086 1 -1 -205 c-1 -131 2 -206 8 -211 7 -4 12 65 14 212 l2 218 3 -219 2 -218 -24 -19 c-30 -23 -50 -75 -32 -82 7 -3 18 8 25 24 13 30 31 39 31 16 0 -23 80 -74 94 -60 24 25 -29 113 -68 113 -14 0 -16 26 -16 219 l0 220 43 -2 c42 -2 42 -2 45 34 l3 37 -1150 0 -1151 -1 0 -38z m2229 2 c21 -13 -22 -24 -62 -15 -28 6 -30 8 -12 15 27 10 57 11 74 0z m-936 -8 c-78 -2 -208 -2 -290 0 -81 1 -17 3 142 3 160 0 226 -2 148 -3z"/>
                        <path
                            d="M910 2045 c0 -55 4 -84 10 -80 6 3 10 39 10 80 0 41 -4 77 -10 80 -6 4 -10 -25 -10 -80z"/>
                        <path
                            d="M1990 1761 c0 -236 4 -372 10 -376 7 -4 10 122 10 369 0 244 -4 376 -10 376 -6 0 -10 -130 -10 -369z"/>
                        <path
                            d="M1215 2035 c-43 -16 -75 -49 -74 -80 0 -14 4 -11 14 12 17 41 61 63 124 63 96 0 147 -83 85 -141 -22 -20 -35 -24 -87 -23 -34 1 -76 5 -93 9 -18 4 -34 3 -37 -2 -3 -4 7 -9 21 -10 15 -1 54 -5 88 -9 72 -7 115 10 139 56 20 39 11 75 -29 105 -41 31 -100 39 -151 20z"/>
                        <path
                            d="M2705 2016 c-122 -54 -63 -200 74 -182 93 12 121 18 121 26 0 4 -17 4 -37 -2 -112 -28 -188 -12 -207 43 -16 46 0 78 50 100 56 25 111 19 155 -19 25 -21 30 -31 27 -58 -2 -18 0 -30 4 -28 4 3 8 18 8 33 0 75 -111 124 -195 87z"/>
                        <path d="M1200 1944 c0 -17 22 -14 28 4 2 7 -3 12 -12 12 -9 0 -16 -7 -16 -16z"/>
                        <path d="M1260 1944 c0 -9 5 -14 12 -12 18 6 21 28 4 28 -9 0 -16 -7 -16 -16z"/>
                        <path d="M1320 1945 c0 -9 5 -15 11 -13 6 2 11 8 11 13 0 5 -5 11 -11 13 -6 2 -11 -4 -11 -13z"/>
                        <path
                            d="M1017 1940 c-48 -9 -87 -45 -87 -81 0 -15 5 -31 11 -34 13 -8 49 23 49 42 0 10 9 12 34 8 44 -9 78 9 74 38 -2 12 -7 22 -13 22 -5 0 -14 3 -20 6 -5 3 -27 2 -48 -1z"/>
                        <path d="M2697 1934 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z"/>
                        <path d="M2752 1928 c6 -18 28 -21 28 -4 0 9 -7 16 -16 16 -9 0 -14 -5 -12 -12z"/>
                        <path d="M2812 1928 c6 -18 28 -21 28 -4 0 9 -7 16 -16 16 -9 0 -14 -5 -12 -12z"/>
                        <path
                            d="M908 1896 c-23 -29 -26 -39 -19 -59 5 -14 7 -34 4 -46 -8 -32 23 -64 49 -50 26 14 21 61 -7 69 -35 9 -28 87 9 112 6 5 7 8 1 8 -5 0 -22 -15 -37 -34z"/>
                        <path
                            d="M3127 1910 c33 -19 47 -51 41 -87 -2 -11 3 -27 11 -36 17 -21 7 -64 -18 -72 -26 -8 -16 -52 14 -59 31 -8 85 -83 85 -118 0 -24 -6 -29 -41 -38 -44 -12 -54 -8 -63 25 -3 11 -2 0 1 -25 3 -25 6 -46 7 -47 1 -1 22 4 46 12 25 7 58 16 74 20 22 5 26 9 17 18 -6 6 -11 32 -11 57 0 38 -6 53 -40 94 -37 44 -40 52 -33 85 20 94 -2 146 -74 177 -46 20 -53 17 -16 -6z m152 -344 c-1 -20 -3 -24 -6 -11 -2 11 -8 34 -13 50 -9 28 -9 29 5 11 8 -11 14 -34 14 -50z"/>
                        <path
                            d="M1050 1850 c0 -5 6 -10 13 -10 9 0 9 -2 -1 -8 -7 -5 -10 -16 -7 -24 3 -8 -1 -23 -10 -32 -15 -15 -15 -16 7 -16 21 0 20 -2 -14 -37 l-37 -37 -31 22 c-58 43 -68 -1 -15 -63 l34 -40 10 28 c6 16 11 35 11 43 0 8 8 14 18 14 38 0 62 29 62 75 0 49 -14 95 -30 95 -5 0 -10 -4 -10 -10z m-74 -189 c-5 -2 -15 4 -23 15 -21 28 -15 35 10 11 12 -12 18 -24 13 -26z"/>
                        <path
                            d="M1566 1833 c-3 -3 -6 -17 -6 -31 0 -16 4 -22 14 -19 7 3 19 0 25 -6 6 -6 18 -12 27 -13 14 -2 14 0 -1 17 -10 10 -22 16 -26 13 -5 -3 -9 4 -9 15 0 21 -13 35 -24 24z"/>
                        <path
                            d="M2445 1830 c-3 -5 -4 -10 0 -10 3 0 1 -9 -5 -20 -6 -11 -14 -19 -19 -17 -5 1 -58 -37 -119 -85 -60 -49 -115 -88 -122 -88 -6 0 -10 -6 -8 -12 6 -16 48 -23 48 -9 0 6 -5 11 -11 11 -5 0 -7 5 -4 10 4 6 11 8 16 5 5 -4 58 34 117 83 59 49 113 87 120 84 7 -2 12 6 12 22 0 27 -15 43 -25 26z"/>
                        <path
                            d="M3020 1822 c0 -7 -7 -12 -15 -12 -18 0 -19 -11 -3 -45 11 -25 38 -35 38 -14 0 5 -4 8 -9 5 -14 -9 -22 24 -10 46 6 11 8 22 5 26 -3 3 -6 0 -6 -6z"/>
                        <path d="M2953 1804 c-3 -8 -1 -24 4 -36 8 -17 9 -15 9 16 0 39 -3 45 -13 20z"/>
                        <path
                            d="M1300 1792 c0 -10 12 -22 29 -29 29 -10 29 -12 17 -47 -16 -47 -18 -48 -52 -36 l-29 12 33 13 c17 8 32 17 32 20 0 3 -9 1 -19 -5 -26 -14 -31 -13 -31 6 0 8 4 12 10 9 5 -3 18 -1 27 5 16 10 15 11 -4 7 -17 -4 -23 0 -24 11 -1 27 -20 -28 -24 -69 -3 -36 -3 -36 37 -36 35 0 42 3 53 30 8 19 14 25 18 16 2 -8 3 3 2 23 -4 44 -11 58 -31 58 -8 0 -14 7 -14 15 0 8 -7 15 -15 15 -8 0 -15 -8 -15 -18z"/>
                        <path
                            d="M2703 1797 c-4 -8 -16 -17 -27 -20 -14 -6 -17 -15 -14 -41 2 -19 0 -32 -4 -30 -15 10 -8 -5 15 -30 20 -21 29 -24 65 -19 33 4 40 8 31 19 -8 9 -17 10 -36 3 -32 -12 -39 -5 -48 43 -6 34 -5 38 18 43 17 5 25 13 24 26 -1 22 -13 25 -24 6z"/>
                        <path
                            d="M1150 1779 c-11 -20 -10 -25 9 -41 21 -16 87 -35 96 -27 2 2 6 16 10 31 6 24 3 29 -21 39 -61 23 -81 22 -94 -2z"/>
                        <path
                            d="M1471 1765 c-35 -17 -65 -39 -67 -48 -2 -13 13 -9 64 20 77 42 87 49 75 56 -4 3 -37 -10 -72 -28z"/>
                        <path
                            d="M2486 1791 c-4 -5 24 -26 60 -46 49 -27 70 -33 78 -25 8 8 6 9 -8 4 -13 -5 -17 -4 -12 4 8 14 -62 52 -83 44 -8 -3 -11 0 -7 7 5 7 1 9 -10 4 -12 -4 -15 -3 -10 5 4 7 5 12 2 12 -3 0 -7 -4 -10 -9z"/>
                        <path
                            d="M2800 1786 c-30 -11 -35 -17 -33 -42 l2 -29 -14 30 c-8 17 -14 23 -15 13 0 -11 -6 -15 -22 -11 -20 4 -21 3 -5 -7 9 -6 22 -8 27 -5 6 3 10 -1 10 -9 0 -19 -5 -20 -33 -4 -19 10 -20 9 -10 -4 7 -8 11 -17 8 -20 -3 -3 8 -5 25 -4 16 1 30 3 30 6 0 3 8 6 19 7 32 3 91 31 97 48 8 19 -13 45 -35 44 -9 0 -32 -6 -51 -13z"/>
                        <path d="M3045 1789 c-10 -15 3 -25 16 -12 7 7 7 13 1 17 -6 3 -14 1 -17 -5z"/>
                        <path d="M3120 1775 c-12 -14 -5 -55 10 -55 4 0 10 16 12 35 4 37 -2 44 -22 20z"/>
                        <path
                            d="M3314 1766 c-3 -8 -4 -23 -1 -33 3 -12 5 -9 6 9 0 14 7 29 14 31 9 4 9 6 -1 6 -7 1 -15 -5 -18 -13z"/>
                        <path
                            d="M640 1660 c0 -60 4 -100 10 -100 6 0 10 40 10 100 0 60 -4 100 -10 100 -6 0 -10 -40 -10 -100z"/>
                        <path
                            d="M180 1460 l0 -290 163 2 162 2 -157 3 -158 4 0 279 0 280 223 3 222 2 -227 3 -228 2 0 -290z"/>
                        <path
                            d="M1606 1695 c-52 -60 -47 -73 9 -24 41 36 48 22 8 -16 -15 -14 -23 -25 -16 -25 6 0 23 14 37 31 19 23 30 28 42 21 14 -8 11 -15 -22 -52 -33 -37 -35 -41 -11 -25 15 10 32 26 38 36 12 23 28 24 36 3 3 -10 -8 -30 -33 -57 -37 -39 -26 -36 25 8 22 18 21 16 -5 -20 -16 -22 -33 -43 -39 -47 -5 -4 -63 -8 -127 -8 -107 0 -117 2 -123 20 -4 14 4 29 29 55 20 20 36 40 36 45 0 13 49 44 57 37 3 -4 1 -13 -6 -20 -9 -11 -7 -24 8 -58 11 -24 20 -37 20 -29 1 8 -6 28 -14 44 -14 27 -14 31 5 51 22 24 27 65 8 65 -22 0 -75 -37 -94 -65 -29 -42 -65 -75 -112 -102 -43 -25 -43 -25 -90 -8 -26 10 -91 38 -145 61 -53 24 -99 44 -102 44 -3 0 -5 -21 -5 -46 0 -33 -3 -43 -12 -38 -7 4 -6 -1 3 -12 12 -13 21 -55 28 -129 6 -60 14 -129 17 -152 5 -42 4 -43 -24 -43 -50 0 -72 38 -72 124 0 41 -7 107 -15 146 -8 39 -14 74 -12 78 1 5 -7 24 -17 44 l-20 36 -66 -33 c-84 -43 -217 -141 -252 -188 -43 -55 -38 -76 38 -147 l67 -62 -12 -38 c-14 -49 -14 -60 3 -60 9 0 15 -18 19 -56 11 -109 86 -173 239 -204 35 -7 66 -16 70 -19 4 -4 -2 -55 -12 -115 -11 -60 -20 -113 -20 -118 0 -4 -20 -8 -44 -8 -25 0 -48 -5 -51 -10 -4 -6 -11 -7 -17 -4 -7 4 -3 13 10 23 22 18 45 120 23 107 -6 -4 -11 0 -11 9 0 11 5 15 15 11 9 -3 15 0 15 8 0 8 3 21 6 30 5 12 0 16 -19 16 -23 0 -25 -4 -31 -65 -4 -36 -9 -79 -13 -95 l-5 -30 -140 0 -140 0 7 38 c4 20 9 49 12 65 5 22 3 26 -11 21 -9 -3 -16 -1 -16 5 0 6 9 11 20 11 15 0 20 7 20 25 0 18 -5 25 -19 25 -22 0 -27 -16 -37 -117 l-7 -73 -261 -2 -261 -3 257 -2 c206 -3 258 -6 258 -17 0 -7 -11 -93 -25 -192 -14 -98 -25 -185 -25 -191 0 -20 16 -15 17 4 1 10 15 93 32 184 33 178 37 214 21 204 -5 -3 -10 -2 -10 4 0 15 18 23 25 11 4 -6 62 -10 146 -10 l141 0 -6 -28 c-5 -24 -41 -285 -49 -355 -2 -15 -1 -27 3 -27 4 0 23 91 44 202 21 112 39 204 41 206 1 2 21 2 42 0 l39 -3 -48 -274 c-43 -244 -50 -296 -33 -280 2 3 18 67 34 143 16 75 32 140 35 143 6 6 95 -10 153 -28 29 -9 32 -15 42 -73 6 -34 11 -65 11 -68 0 -3 -46 5 -103 18 -116 27 -117 27 -117 16 0 -5 35 -17 78 -27 68 -17 93 -21 138 -24 7 -1 16 -22 20 -48 5 -25 15 -48 23 -51 10 -3 12 0 8 12 -4 9 -14 57 -22 108 -9 51 -19 96 -21 100 -3 4 10 8 28 9 74 2 120 35 86 61 -14 12 -12 23 28 118 25 58 48 114 52 124 6 14 12 1 25 -50 37 -148 73 -283 78 -288 3 -3 71 -6 151 -7 136 -1 149 0 177 20 17 13 31 29 31 37 0 20 -27 29 -45 14 -9 -7 -17 -11 -18 -9 -2 2 -21 73 -43 156 l-40 153 401 0 402 0 -8 -48 c-4 -26 -8 -53 -8 -61 -1 -11 -5 -10 -21 4 -16 15 -22 15 -35 5 -21 -18 -19 -27 17 -61 26 -27 28 -30 9 -24 -14 4 -31 1 -45 -8 -13 -9 -41 -19 -62 -23 -70 -12 -121 -52 -97 -75 4 -4 78 -21 163 -39 85 -18 157 -34 159 -36 2 -1 -4 -44 -14 -94 -14 -82 -15 -113 0 -99 2 3 12 47 22 98 l18 92 45 -6 c88 -12 84 -13 95 33 10 39 12 41 26 25 9 -10 25 -23 35 -30 18 -12 18 -12 -1 -13 -17 0 -17 -2 -5 -10 12 -8 11 -10 -7 -10 -13 0 -23 -4 -23 -8 0 -5 -18 -17 -40 -27 -54 -24 -90 -59 -90 -86 0 -22 1 -22 110 -15 l110 6 0 -25 c0 -14 6 -25 14 -25 9 0 12 8 9 24 -5 26 -16 24 180 42 l67 6 0 42 c0 22 -3 58 -6 79 l-7 37 -66 -5 c-36 -4 -76 -8 -88 -11 -19 -4 -20 -2 -10 21 9 18 20 25 42 25 17 0 53 3 81 6 l52 7 -15 36 c-9 20 -33 84 -54 143 l-38 108 44 0 c24 0 47 5 51 11 4 8 9 8 17 0 7 -7 64 -11 153 -11 l141 0 17 -92 c47 -261 59 -318 66 -318 4 0 6 10 4 22 -5 30 -54 380 -54 383 0 1 66 5 147 9 81 4 149 8 150 10 1 1 8 55 14 119 9 84 16 117 26 117 7 0 13 11 13 25 0 24 -3 25 -59 25 -50 0 -59 3 -64 20 -3 10 -2 18 2 17 3 -1 24 18 46 41 l40 43 66 -10 c105 -17 159 16 159 97 0 35 -16 52 -49 52 -53 -1 -107 -37 -182 -123 -41 -47 -75 -82 -76 -78 -6 15 44 175 57 182 8 4 47 17 87 28 126 37 166 88 167 218 1 73 -1 84 -24 108 -23 25 -29 27 -88 22 -77 -6 -143 -43 -187 -106 -26 -37 -30 -51 -28 -101 1 -34 10 -79 23 -108 l22 -51 -23 -95 -23 -95 -33 105 -34 105 20 55 c27 72 28 183 2 239 -53 115 -181 141 -242 49 -24 -36 -26 -79 -3 -70 9 3 29 6 46 6 l31 0 -26 24 c-24 22 -25 25 -9 39 17 15 47 22 89 19 35 -3 81 -58 99 -120 14 -48 15 -65 4 -124 -8 -38 -17 -71 -21 -73 -9 -6 -29 51 -29 85 0 15 7 47 15 71 13 39 13 42 0 25 -8 -11 -18 -35 -21 -54 l-7 -35 -23 44 c-15 28 -24 64 -25 99 l-2 55 -7 -45 c-4 -25 -4 -53 1 -62 13 -24 11 -28 -7 -21 -12 4 -15 15 -10 42 4 27 0 42 -15 61 l-20 25 15 -31 c9 -19 12 -41 8 -57 -4 -14 -6 -66 -4 -115 l3 -89 62 -25 62 -24 33 -94 c23 -68 27 -89 14 -72 -10 12 -25 44 -34 70 -20 55 -48 85 -101 107 -37 15 -37 15 -33 -7 3 -13 5 -53 5 -90 l1 -68 70 0 69 0 26 -43 c37 -65 35 -69 -35 -65 -60 3 -60 3 -60 -24 0 -16 4 -28 9 -28 5 0 12 -33 15 -72 4 -40 9 -94 12 -120 l6 -48 -66 0 -65 0 -6 33 c-3 17 -9 59 -13 92 -6 53 -10 60 -31 63 -20 3 -23 0 -18 -20 3 -12 11 -53 18 -90 9 -51 17 -68 32 -72 11 -3 16 -9 12 -16 -5 -9 -10 -9 -18 -1 -7 7 -64 11 -153 11 l-142 0 -6 68 c-11 106 -15 122 -37 122 -14 0 -19 -7 -19 -25 0 -18 5 -25 20 -25 11 0 20 -5 20 -11 0 -6 -7 -8 -16 -5 -17 6 -17 -2 2 -96 5 -27 4 -28 -40 -28 -54 0 -49 -8 -101 170 -20 68 -30 119 -24 124 4 5 79 10 166 10 144 1 162 3 205 24 68 34 93 88 85 185 -12 142 -16 173 -26 198 -9 20 -10 16 -7 -24 1 -29 -2 -47 -8 -46 -6 1 -20 0 -31 -1 -13 -2 -7 -5 15 -10 33 -8 32 -8 -15 -8 -27 0 -131 -5 -230 -11 -133 -8 -193 -8 -231 0 -39 9 -60 9 -84 0 -22 -7 -126 -11 -299 -11 l-266 0 3 55 4 55 -192 0 c-167 0 -191 -2 -186 -15 3 -8 1 -15 -4 -15 -6 0 -10 -11 -10 -25 0 -20 5 -25 25 -25 16 0 25 -6 25 -15 0 -12 -14 -15 -66 -15 -48 0 -65 3 -62 13 3 6 15 13 27 15 15 2 21 9 17 18 -3 8 -1 14 4 14 6 0 10 9 10 19 0 11 6 22 13 24 6 3 -21 6 -62 6 -56 1 -72 4 -68 14 3 7 13 51 22 98 11 55 25 92 39 109 37 41 56 73 56 95 0 16 -2 17 -10 5 -8 -12 -10 -12 -15 2 -4 10 -4 21 -1 27 8 12 -11 24 -24 16 -8 -5 -7 -12 2 -23 10 -13 7 -13 -9 1 -12 11 -19 25 -16 32 6 18 -5 37 -18 29 -6 -4 -6 -11 2 -20 19 -23 -6 -16 -27 8 -10 12 -13 18 -6 14 6 -4 12 -2 12 3 0 22 -17 10 -64 -44z m-708 -92 c14 -26 35 -182 30 -225 l-3 -37 -67 42 -67 43 49 64 c28 35 50 66 50 69 0 7 -53 -56 -82 -96 -21 -29 -27 -32 -63 -28 -34 4 -36 3 -10 -4 70 -19 195 -95 195 -119 0 -9 12 -29 27 -44 26 -27 26 -28 5 -28 -12 0 -22 -4 -22 -10 0 -5 -25 -10 -56 -10 l-55 0 3 -32 c3 -33 3 -33 58 -34 l55 -1 -52 4 c-53 4 -59 8 -45 29 14 22 82 28 352 33 36 1 50 4 41 10 -7 5 -10 14 -6 21 4 6 11 59 16 118 5 62 13 111 21 118 13 13 65 16 267 15 l113 -1 -7 -75 c-7 -82 5 -130 37 -138 10 -3 18 -12 18 -21 0 -21 -29 -33 -40 -17 -5 9 -9 6 -13 -8 -4 -19 -1 -21 32 -21 35 0 61 -14 61 -32 0 -4 -81 -8 -179 -8 -115 0 -190 -4 -208 -12 -28 -11 -28 -12 22 -19 28 -4 316 -8 640 -8 325 0 589 -4 588 -8 -2 -5 -16 -46 -33 -92 -29 -80 -90 -349 -90 -399 l0 -22 -406 2 -405 3 -43 130 c-50 153 -76 206 -113 234 -15 12 -37 38 -48 58 -19 33 -48 54 -120 85 -20 9 -52 11 -95 7 -63 -5 -58 -8 23 -14 21 -1 46 -9 55 -17 9 -8 36 -26 60 -38 23 -13 42 -29 42 -36 0 -7 20 -34 45 -60 25 -26 52 -59 59 -73 22 -41 102 -294 141 -441 20 -74 40 -142 44 -151 18 -32 -1 -37 -119 -30 l-114 6 -23 65 c-13 36 -21 73 -19 83 2 9 0 17 -6 17 -6 0 -8 9 -5 20 3 12 1 18 -5 14 -7 -5 -9 2 -4 20 5 20 3 26 -5 21 -8 -5 -9 0 -4 16 4 13 4 21 -1 16 -4 -4 -13 6 -20 23 -17 40 -47 39 -72 -2 -10 -18 -39 -80 -62 -138 -56 -134 -59 -138 -82 -108 l-18 23 0 -34 c0 -28 -2 -31 -14 -22 -8 7 -17 23 -20 37 -6 22 -11 25 -34 20 -31 -7 -92 8 -103 25 -12 20 17 39 60 39 35 0 41 -3 47 -25 9 -37 23 -30 15 8 -7 32 -8 32 -69 35 -61 3 -62 3 -77 -30 -8 -18 -13 -25 -10 -15 3 10 5 24 5 31 0 20 56 46 98 46 l41 0 -10 33 c-6 17 -11 103 -12 190 l-2 157 32 0 c18 0 33 -2 33 -4 0 -2 -11 -34 -25 -71 -21 -54 -24 -74 -16 -99 5 -17 19 -95 31 -173 13 -79 27 -143 31 -143 5 0 6 6 4 13 -3 6 -16 79 -29 160 l-25 148 28 70 c33 82 31 108 -11 116 -21 4 -26 8 -16 14 10 7 9 9 -4 9 -22 0 -22 17 -3 111 27 128 9 84 -34 -83 -22 -90 -39 -143 -37 -118 3 31 0 50 -10 61 -13 15 -13 25 1 90 18 87 17 82 6 75 -5 -4 -12 -29 -16 -56 -8 -57 -25 -58 -26 -2 0 32 -1 34 -9 15 -12 -29 -37 -30 -45 -2 -5 15 -10 17 -19 10 -17 -15 -26 -4 -26 33 -1 26 -2 28 -11 14 -25 -44 -49 -10 -49 71 l0 44 -70 -7 -70 -6 0 39 c0 35 2 39 23 34 19 -4 20 -3 5 7 -10 6 -18 14 -18 19 0 4 34 29 75 55 41 26 78 52 81 58 9 13 2 9 -91 -52 l-70 -47 -57 63 c-32 34 -58 68 -58 76 0 16 94 109 149 147 47 34 134 81 148 81 7 0 16 -8 21 -17z m260 -34 c35 -16 78 -30 95 -30 18 -1 25 -3 16 -6 -11 -3 -20 -24 -27 -70 -6 -36 -13 -68 -16 -71 -3 -3 -15 7 -27 22 -12 15 -46 45 -75 67 -39 29 -54 46 -54 64 0 13 -4 27 -10 30 -5 3 -10 1 -10 -6 0 -7 -2 -10 -5 -8 -2 3 -2 15 2 27 6 26 12 25 111 -19z m256 -25 c3 -9 6 -18 6 -20 0 -6 -47 -5 -65 3 -14 5 -12 8 11 19 39 17 41 17 48 -2z m2411 -71 l-5 -28 12 28 c10 22 18 27 45 27 87 0 109 -119 40 -221 -16 -24 -39 -40 -82 -57 -33 -12 -73 -29 -88 -37 -27 -14 -28 -14 -21 8 18 57 24 64 71 81 70 25 116 46 111 51 -2 2 -31 -7 -64 -20 -85 -35 -89 -33 -55 33 25 49 36 61 72 75 23 9 40 19 37 23 -4 3 -16 0 -28 -6 -18 -9 -24 -9 -30 0 -5 9 -18 -5 -38 -40 l-31 -54 -4 50 c-3 47 -3 47 -5 -12 -1 -36 -10 -80 -21 -104 l-19 -43 -11 39 c-14 49 -14 107 -1 99 6 -4 10 9 10 32 0 32 5 41 33 59 31 21 69 43 75 44 1 0 0 -12 -3 -27z m-2632 -88 c30 -20 31 -24 16 -95 l-11 -50 -52 0 -52 0 -13 103 c-7 56 -15 113 -18 127 -6 23 -1 21 48 -21 30 -25 66 -54 82 -64z m2506 -4 c-11 -31 -9 -64 7 -156 9 -55 -10 -34 -25 27 -15 64 -14 103 5 139 20 39 28 32 13 -10z m-214 -10 c-3 -2 -1 -9 5 -15 5 -7 18 -33 29 -58 l20 -46 -42 26 c-36 22 -42 31 -43 62 -1 28 2 36 17 36 10 0 16 -2 14 -5z m-1515 -61 c0 -5 -12 -10 -26 -10 -14 0 -23 4 -19 10 3 6 15 10 26 10 10 0 19 -4 19 -10z m60 0 c0 -5 -11 -10 -25 -10 -14 0 -25 5 -25 10 0 6 11 10 25 10 14 0 25 -4 25 -10z m55 0 c4 -6 -5 -10 -19 -10 -14 0 -26 5 -26 10 0 6 9 10 19 10 11 0 23 -4 26 -10z m-185 -31 c0 -10 -30 -16 -52 -11 -30 7 -20 17 17 18 19 1 35 -2 35 -7z m70 1 c0 -5 -11 -10 -25 -10 -14 0 -25 5 -25 10 0 6 11 10 25 10 14 0 25 -4 25 -10z m60 0 c0 -5 -11 -10 -25 -10 -14 0 -25 5 -25 10 0 6 11 10 25 10 14 0 25 -4 25 -10z m55 0 c4 -6 -5 -10 -19 -10 -14 0 -26 5 -26 10 0 6 9 10 19 10 11 0 23 -4 26 -10z m1443 -43 c30 -28 28 -39 -5 -25 -39 16 -60 36 -66 59 -5 20 -5 20 21 3 15 -9 37 -26 50 -37z m-1558 3 c0 -5 -11 -10 -25 -10 -14 0 -25 5 -25 10 0 6 11 10 25 10 14 0 25 -4 25 -10z m60 0 c0 -5 -11 -10 -25 -10 -14 0 -25 5 -25 10 0 6 11 10 25 10 14 0 25 -4 25 -10z m60 0 c0 -5 -11 -10 -25 -10 -14 0 -25 5 -25 10 0 6 11 10 25 10 14 0 25 -4 25 -10z m94 -36 c3 -9 6 -18 6 -20 0 -6 -346 -5 -353 2 -3 3 0 12 6 20 9 10 50 13 173 14 139 0 163 -2 168 -16z m679 -1 c20 -3 37 -9 37 -13 0 -4 17 -4 38 0 20 5 85 10 145 12 90 3 107 1 108 -12 1 -11 2 -10 6 3 4 14 16 17 64 17 55 0 59 -2 65 -26 10 -39 -3 -126 -24 -154 -29 -39 -80 -60 -152 -62 l-65 -1 60 -7 c56 -6 54 -7 -35 -8 -75 -1 -104 3 -138 18 -23 11 -40 15 -37 10 3 -6 -1 -10 -9 -10 -9 0 -16 -4 -16 -10 0 -5 -10 -11 -22 -11 -18 -1 -19 -2 -5 -6 9 -2 15 -9 11 -14 -3 -5 -10 -6 -16 -3 -20 13 0 -68 73 -291 39 -120 73 -223 76 -230 3 -8 -5 -15 -19 -18 -20 -4 -19 -4 5 -6 48 -2 25 -25 -39 -38 -32 -7 -83 -13 -111 -14 -41 -1 -53 -5 -53 -18 -1 -33 -39 29 -46 75 -4 29 -13 48 -23 51 -9 4 -22 11 -30 17 -11 9 -9 12 10 17 l24 7 -23 1 c-16 1 -28 11 -38 34 l-15 32 7 -34 c6 -32 5 -33 -19 -27 -18 4 -27 1 -31 -10 -3 -9 -13 -14 -21 -11 -8 4 -16 -2 -20 -13 -12 -39 -91 -38 -146 1 -31 22 -39 49 -14 49 8 0 21 -14 30 -30 9 -17 18 -30 21 -30 2 0 0 9 -6 19 -5 11 -10 22 -10 26 0 8 72 -5 86 -16 15 -12 44 -1 44 17 0 8 -9 14 -20 14 -10 0 -31 5 -45 12 -29 13 -29 12 11 246 13 79 24 147 24 152 0 20 19 9 23 -12 3 -13 3 -2 1 24 -3 52 12 118 27 118 6 0 9 10 7 23 -2 18 2 23 25 25 21 3 27 9 27 28 0 17 -6 24 -19 24 -20 0 -51 25 -51 41 0 5 24 9 53 10 28 0 70 7 92 14 22 7 49 11 60 8 11 -3 37 -7 58 -10z m689 -106 l21 -29 -21 13 c-11 7 -25 22 -31 34 -5 11 -10 14 -10 8 -1 -10 -7 -10 -26 -1 -29 13 -32 25 -7 31 19 4 45 -15 74 -56z m319 24 c-9 -16 -71 -48 -71 -36 0 4 70 53 78 54 1 1 -2 -8 -7 -18z m67 -4 c2 -11 -3 -17 -14 -17 -14 0 -15 -3 -6 -12 18 -18 15 -24 -15 -37 -19 -7 -43 -8 -73 -2 l-45 8 65 32 c36 18 56 29 46 26 -16 -5 -17 -3 -6 10 16 20 44 15 48 -8z m-3127 -46 c4 -33 13 -50 34 -67 29 -23 92 -56 129 -68 10 -4 16 -9 13 -13 -4 -3 -2 -12 4 -19 14 -18 -90 11 -158 43 -56 26 -88 61 -98 109 -4 16 -9 37 -12 47 -4 16 1 18 39 15 43 -3 43 -3 49 -47z m2719 10 c11 -8 5 -11 -27 -11 -39 0 -43 2 -43 25 0 25 1 25 28 11 15 -9 34 -20 42 -25z m30 -31 c0 -6 -16 -8 -42 -4 -59 9 -60 14 -5 14 26 0 47 -5 47 -10z m-240 -30 c-13 -24 -67 -60 -90 -60 -8 0 4 9 27 20 25 11 48 30 55 45 6 14 13 23 15 21 3 -2 -1 -14 -7 -26z m373 -136 c65 -11 40 -24 -48 -24 -112 0 -116 17 -5 28 8 1 32 -1 53 -4z m28 -76 c-5 -13 -11 -49 -15 -80 -9 -67 -21 -80 -73 -76 l-38 3 -11 75 c-5 42 -13 81 -18 88 -5 9 14 12 78 12 84 0 85 0 77 -22z m-2667 -123 c6 -32 1 -57 -24 -120 -59 -156 -67 -144 -26 42 17 78 34 136 37 130 4 -7 10 -30 13 -52z m12 -159 c0 -24 -5 -36 -17 -39 -15 -4 -15 -1 -1 34 8 22 16 39 17 39 0 0 1 -15 1 -34z m1654 -118 c6 -18 16 -41 22 -51 5 -11 7 -21 4 -24 -3 -4 6 -17 20 -30 15 -13 24 -27 20 -30 -3 -3 -18 8 -34 25 l-29 31 -25 -37 c-22 -35 -27 -37 -68 -34 -24 2 -45 4 -47 5 -2 2 7 45 32 155 5 19 12 22 49 22 40 0 45 -3 56 -32z m-140 0 c0 -16 -22 -138 -25 -138 -2 0 -219 47 -252 55 -37 9 -26 23 28 39 28 9 58 21 66 27 10 9 20 9 40 0 24 -11 25 -11 12 5 -13 16 -12 16 8 6 26 -14 36 -15 29 -3 -3 4 12 7 34 6 22 -1 40 2 40 6 0 5 5 9 10 9 6 0 10 -5 10 -12z m-1306 -77 c6 -10 -22 -37 -29 -29 -8 7 5 38 15 38 5 0 11 -4 14 -9z m514 -62 c-19 -13 -28 -11 -28 6 0 21 34 38 38 18 2 -9 -2 -19 -10 -24z m1058 14 c-6 -16 -6 -16 12 0 20 18 62 23 62 8 0 -11 -55 -31 -86 -31 -24 0 -29 18 -9 32 17 13 27 9 21 -9z m147 -38 c64 0 77 -10 77 -62 0 -29 -4 -33 -37 -42 -21 -6 -72 -12 -115 -13 l-76 -3 -10 50 c-7 34 -7 51 0 54 6 2 5 7 -3 13 -10 7 -7 7 8 3 13 -3 31 -2 40 4 10 6 27 7 38 3 11 -4 46 -7 78 -7z m-179 -72 c3 -25 5 -47 4 -49 -2 -1 -38 -4 -80 -6 -94 -4 -100 7 -28 51 28 17 50 35 50 41 0 5 11 10 24 10 20 0 24 -6 30 -47z"/>
                        <path
                            d="M1412 1407 c-27 -28 -28 -49 -4 -70 27 -24 58 -21 81 9 21 27 20 35 -7 67 -21 23 -44 21 -70 -6z m65 -23 c7 -20 -22 -45 -43 -37 -14 5 -19 35 -7 46 12 13 44 7 50 -9z"/>
                        <path
                            d="M962 1116 c2 -25 8 -31 31 -33 23 -2 27 2 27 26 0 24 -5 29 -31 33 -28 4 -30 3 -27 -26z"/>
                        <path
                            d="M1050 1111 c0 -25 3 -28 26 -23 19 3 22 7 12 13 -23 15 13 30 57 24 29 -4 36 -2 25 5 -8 5 -39 10 -67 10 -52 0 -53 -1 -53 -29z"/>
                        <path d="M883 1095 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z"/>
                        <path d="M932 1070 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z"/>
                        <path d="M3898 1354 c-16 -8 -28 -17 -28 -19 0 -5 70 22 79 30 10 11 -26 3 -51 -11z"/>
                        <path
                            d="M2710 1131 c0 -5 -3 -16 -6 -25 -5 -12 1 -16 24 -16 24 0 31 5 34 25 5 22 2 25 -23 25 -16 0 -29 -4 -29 -9z"/>
                        <path
                            d="M2766 1072 c28 -24 101 -80 114 -87 12 -7 13 -6 3 7 -7 8 -10 17 -7 21 6 6 -94 67 -110 67 -6 0 -6 -3 0 -8z"/>
                        <path
                            d="M2672 1009 c-7 -35 -15 -77 -19 -93 -4 -18 -2 -27 4 -23 11 7 38 148 31 167 -2 7 -10 -16 -16 -51z"/>
                        <path
                            d="M2711 866 c0 -5 -8 -45 -17 -88 -13 -64 -14 -82 -4 -91 10 -9 11 -9 6 0 -3 6 1 42 9 78 9 37 14 77 12 89 -2 11 -5 17 -6 12z"/>
                        <path d="M2612 750 c0 -8 4 -26 8 -40 6 -20 8 -21 8 -5 0 11 -3 29 -8 40 -5 12 -8 14 -8 5z"/>
                        <path d="M2499 443 c-13 -15 -12 -15 11 -3 34 17 36 20 18 20 -9 0 -22 -7 -29 -17z"/>
                        <path d="M2898 373 c12 -2 32 -2 45 0 12 2 2 4 -23 4 -25 0 -35 -2 -22 -4z"/>
                        <path d="M2813 363 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z"/>
                        <path d="M3858 1073 c12 -2 32 -2 45 0 12 2 2 4 -23 4 -25 0 -35 -2 -22 -4z"/>
                        <path d="M2620 382 c0 -16 80 -36 92 -24 13 13 0 20 -50 28 -28 4 -42 3 -42 -4z"/>
                        <path
                            d="M2944 1701 c-17 -20 -37 -47 -44 -60 -15 -28 -30 -142 -18 -135 4 3 8 20 8 37 0 47 18 103 37 118 16 13 16 12 0 -11 -11 -15 -17 -44 -17 -77 0 -40 -5 -58 -21 -74 -24 -24 -23 -26 11 -31 22 -3 27 3 42 47 15 44 17 46 18 20 1 -29 1 -29 15 -10 37 53 71 94 78 95 4 0 7 -11 7 -25 0 -14 4 -25 9 -25 5 0 7 -9 4 -20 -3 -11 -8 -20 -12 -20 -3 0 -7 -12 -8 -27 0 -15 -6 -29 -12 -31 -6 -2 -8 -14 -5 -29 6 -23 5 -25 -17 -18 -13 5 -33 9 -44 11 -11 2 -31 6 -45 9 -14 3 -5 -4 20 -16 34 -16 70 -23 143 -26 96 -4 113 1 82 27 -12 10 -19 10 -27 2 -17 -17 -98 -16 -98 2 0 8 9 45 21 82 18 58 23 66 33 52 11 -15 13 -14 26 5 7 12 20 33 29 47 15 24 15 24 -4 10 -17 -14 -18 -13 -12 3 10 26 1 21 -36 -20 l-34 -36 -5 28 c-5 22 0 34 26 58 24 22 26 26 8 17 -39 -19 -84 -9 -107 26 l-21 31 -30 -36z m73 -68 c7 -19 -42 -67 -60 -60 -21 8 -21 29 -1 68 14 28 17 29 37 16 11 -7 22 -18 24 -24z m113 -43 c-9 -17 -15 -19 -23 -10 -9 9 -7 15 7 26 25 18 31 12 16 -16z"/>
                        <path
                            d="M334 1631 c-81 -49 -81 -173 1 -227 36 -23 108 -20 145 6 17 12 28 25 25 28 -3 4 -9 2 -13 -3 -13 -18 -52 -35 -80 -35 -81 0 -126 44 -126 122 0 39 5 53 29 78 48 50 120 52 171 5 22 -20 28 -37 32 -81 3 -36 8 -51 13 -42 24 37 -6 119 -55 149 -17 10 -49 19 -71 19 -22 0 -54 -9 -71 -19z"/>
                        <path
                            d="M1820 1614 c9 -10 9 -14 1 -14 -6 0 -11 -5 -11 -11 0 -13 42 -8 47 6 1 6 -9 15 -23 22 -22 10 -24 10 -14 -3z"/>
                        <path
                            d="M974 1575 c-5 -13 -9 -13 -22 -3 -13 12 -14 10 -3 -10 7 -13 14 -22 15 -20 10 11 26 48 21 48 -3 0 -8 -7 -11 -15z"/>
                        <path d="M3013 1552 c-13 -13 -20 -29 -17 -34 4 -5 15 5 26 22 24 40 20 45 -9 12z"/>
                        <path d="M1821 1555 c0 -11 4 -29 9 -40 8 -18 9 -18 9 5 0 14 -4 32 -9 40 -8 12 -10 12 -9 -5z"/>
                        <path
                            d="M2196 1554 c-4 -9 -3 -39 0 -68 6 -40 9 -46 16 -31 6 14 7 9 3 -17 -7 -49 5 -130 16 -103 4 11 8 31 8 45 0 23 -1 24 -10 5 -7 -15 -8 -12 -4 14 3 19 2 57 -1 85 -6 40 -9 46 -16 31 -5 -14 -6 -8 -3 18 6 39 2 49 -9 21z"/>
                        <path d="M1811 1500 c0 -14 4 -34 9 -45 8 -18 9 -18 9 5 0 14 -4 34 -9 45 -8 18 -9 18 -9 -5z"/>
                        <path d="M2991 1481 c-11 -19 -11 -25 0 -32 15 -9 23 9 17 39 -3 14 -6 13 -17 -7z"/>
                        <path d="M1801 1435 c0 -16 4 -39 9 -50 7 -17 9 -16 9 10 0 17 -4 39 -9 50 -7 17 -9 16 -9 -10z"/>
                        <path
                            d="M2790 1450 c-14 -4 -76 -8 -138 -9 l-112 -1 6 -42 c4 -24 11 -54 16 -67 7 -20 4 -29 -19 -49 l-28 -24 31 21 c31 20 31 20 49 1 24 -27 95 -27 119 -1 15 16 23 17 52 9 19 -5 51 -7 72 -5 33 3 32 4 -10 5 -44 2 -48 4 -48 26 0 22 5 25 48 29 l47 3 -52 2 c-47 2 -53 0 -53 -18 0 -11 -7 -20 -15 -20 -14 0 -14 4 0 37 19 45 11 39 65 52 l45 11 -50 -6 c-84 -10 -90 -10 -90 6 0 11 19 18 67 25 37 5 70 13 74 18 9 9 -43 7 -76 -3z m-75 -64 c20 -17 24 -25 14 -29 -12 -4 -11 -7 1 -16 11 -8 -6 -11 -67 -11 -69 0 -81 2 -77 15 4 9 0 15 -7 15 -9 1 -7 6 5 15 20 15 20 15 0 15 -16 0 -17 2 -4 10 30 19 105 12 135 -14z m15 -74 c0 -5 -15 -15 -33 -24 -28 -13 -38 -14 -64 -3 -57 24 -49 35 26 35 39 0 71 -4 71 -8z"/>
                        <path d="M3540 1445 c-6 -8 -10 -19 -8 -26 2 -6 9 0 16 15 13 29 10 33 -8 11z"/>
                        <path
                            d="M2481 1354 c-30 -25 -38 -54 -25 -88 8 -20 36 -21 32 -1 -2 8 11 27 27 41 17 14 23 22 15 18 -8 -4 -23 -14 -33 -22 -9 -8 -20 -12 -25 -8 -4 5 11 24 33 43 22 19 31 31 21 27 -14 -5 -17 -4 -12 4 11 19 0 14 -33 -14z"/>
                        <path
                            d="M527 1285 c-4 -49 -9 -162 -12 -250 -3 -88 -8 -175 -11 -193 -5 -30 -3 -33 16 -30 20 3 22 10 26 113 9 209 8 380 -2 415 -10 32 -11 28 -17 -55z"/>
                        <path d="M2241 1330 c-1 -8 -4 -26 -7 -40 -5 -22 -4 -23 6 -7 6 10 9 28 7 40 -2 12 -5 15 -6 7z"/>
                        <path d="M367 1313 c18 -2 50 -2 70 0 21 2 7 4 -32 4 -38 0 -55 -2 -38 -4z"/>
                        <path d="M2215 1245 c23 -8 85 -10 85 -3 0 4 -21 8 -47 7 -27 0 -43 -2 -38 -4z"/>
                        <path
                            d="M3433 999 c-9 -9 -13 -44 -13 -101 0 -81 2 -88 20 -88 22 0 24 27 11 143 -5 47 -8 56 -18 46z"/>
                        <path d="M683 813 c32 -2 81 -2 110 0 29 2 3 3 -58 3 -60 0 -84 -1 -52 -3z"/>
                        <path d="M3173 813 c32 -2 81 -2 110 0 29 2 3 3 -58 3 -60 0 -84 -1 -52 -3z"/>
                        <path d="M3803 613 c31 -2 83 -2 115 0 31 2 5 3 -58 3 -63 0 -89 -1 -57 -3z"/>
                        <path
                            d="M3090 584 c0 -19 58 -339 66 -367 3 -10 8 -16 11 -14 2 3 -8 93 -23 201 -20 145 -30 196 -40 196 -8 0 -14 -7 -14 -16z"/>
                        <path
                            d="M1188 263 c6 -2 10 -8 8 -11 -2 -4 13 -8 35 -8 33 -2 36 0 24 12 -7 8 -29 14 -47 13 -18 0 -27 -3 -20 -6z"/>
                        <path
                            d="M1775 235 c-5 -2 -23 -6 -39 -10 -41 -9 -13 -27 30 -19 24 4 37 0 56 -18 13 -12 39 -31 56 -40 18 -9 32 -21 32 -26 0 -5 -89 -7 -202 -5 -214 3 -217 4 -218 53 0 14 -5 32 -10 40 -7 11 -10 -2 -8 -45 l3 -60 75 -6 c130 -11 388 -10 395 1 12 20 -25 60 -75 82 -28 12 -50 25 -50 30 0 4 -9 8 -21 8 -11 0 -17 5 -14 10 3 6 5 10 3 9 -2 0 -7 -2 -13 -4z"/>
                        <path
                            d="M1260 226 c0 -2 21 -25 47 -50 26 -24 45 -47 43 -50 -3 -2 -32 2 -65 10 -33 7 -67 14 -75 13 -29 0 65 -37 113 -44 47 -7 47 -7 47 21 0 22 -11 38 -46 67 -42 33 -64 45 -64 33z"/>
                        <path
                            d="M3597 170 c9 -10 10 -17 1 -27 -8 -11 -7 -12 6 -7 21 8 20 18 -1 35 -15 11 -16 11 -6 -1z"/>
                    </g>
                </svg>
            </div>
            <button className="create-button" onClick={() => setIsModalOpen(true)}>
                <PlusIcon size={20}/>
                Create New Project
            </button>
        </div> : <div className="projects-view">
            <header>
                <div className="logo-small">
                    <span className="logo-text">Q</span>
                </div>
                <h2>Projects</h2>
                <button className="create-button-small" onClick={() => setIsModalOpen(true)}>
                    <PlusIcon size={16}/>
                    Create New Project
                </button>
            </header>
            <div className="projects-grid">
                {projects.map(project => <div key={project.id} className="project-card">
                    <div className="project-icon">
                        {project.name[0].toUpperCase()}
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>)}
            </div>
        </div>}
        {isModalOpen && <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2>Create Project</h2>
                    <button className="close-button" onClick={() => setIsModalOpen(false)}>
                        <XIcon size={20}/>
                    </button>
                </div>
                <form onSubmit={handleCreateProject}>
                    <div className="form-group">
                        <input type="text" placeholder="Enter Project Name" value={projectName}
                               onChange={e => setProjectName(e.target.value)} className="form-input"/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Enter Project Description" value={projectDescription}
                               onChange={e => setProjectDescription(e.target.value)} className="form-input"/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="cancel-button" onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </button>
                        <button type="submit" className="create-button">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>}
    </div>;
}