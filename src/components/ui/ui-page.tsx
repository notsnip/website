import React from "react";

export default function UIPage({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex items-center justify-center">
            <div className="py-12 px-4 text-sm">
                <section className="flex flex-col space-y-6">
                    {children}
                </section>
            </div>
        </div>
    );
}
