//"use client"

import { useState } from "react"
import "./Podcast.css"

export function Podcast() {
    const [dragActive, setDragActive] = useState(false)

    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        // Handle file drop logic here
    }

    const handleFileSelect = () => {
        // Handle file selection logic here
        console.log("File selection triggered")
    }

    return (
        <div className="app-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">
                    <span className="logo-icon">Q</span>
                    <span className="logo-text">Ques.AI</span>
                </div>

                <nav className="nav-menu">
                    <div className="nav-item active">
                        <span className="nav-icon">+</span>
                        Add your Podcast(s)
                    </div>
                    <div className="nav-item">
                        <span className="nav-icon">⚡</span>
                        Create & Repurpose
                    </div>
                    <div className="nav-item">
                        <span className="nav-icon">📊</span>
                        Podcast Widget
                    </div>
                    <div className="nav-item">
                        <span className="nav-icon">⬆</span>
                        Upgrade
                    </div>
                </nav>

                <div className="sidebar-bottom">
                    <div className="nav-item">
                        <span className="nav-icon">?</span>
                        Help
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Header */}
                <div className="header">
                    <div className="breadcrumb">
                        <span>🏠 Home Page</span>
                        <span>/</span>
                        <span>Sample Project</span>
                        <span>/</span>
                        <span className="current">Add your podcast</span>
                    </div>
                    <div className="header-actions">
                        <button className="icon-btn">🔔</button>
                        <button className="icon-btn">👤</button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="content">
                    <h1 className="page-title">Add Podcast</h1>

                    {/* Upload Options */}
                    <div className="upload-options">
                        <div className="option-card">
                            <div className="option-icon rss-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 11a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="2" />
                                    <path d="M4 4a16 16 0 0 1 16 16" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="5" cy="19" r="1" fill="currentColor" />
                                </svg>
                            </div>
                            <h3>RSS Feed</h3>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>

                        <div className="option-card">
                            <div className="option-icon youtube-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </div>
                            <h3>Youtube Video</h3>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>

                        <div className="option-card">
                            <div className="option-icon upload-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" />
                                    <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" />
                                    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3>Upload Files</h3>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>

                    {/* Drag and Drop Area */}
                    <div
                        className={`drop-zone ${dragActive ? "drag-active" : ""}`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    >
                        <div className="drop-zone-content">
                            <div className="cloud-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" />
                                    <polyline points="16,16 12,12 8,16" stroke="currentColor" strokeWidth="2" />
                                    <line x1="12" y1="12" x2="12" y2="21" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <p className="drop-text">Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
                            <p className="file-types">MP3, WAV, MP4, MOV, PDF, DOCX or TXT file</p>
                            <button className="select-file-btn" onClick={handleFileSelect}>
                                Select File
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
