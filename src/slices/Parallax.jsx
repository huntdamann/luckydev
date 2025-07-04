"use client"


export default function Parallax({ children }) {

    return (
        <section className="parallax-container">
            <div className="parallax-sticky">
                {children}
            </div>
        </section>
    )
}