"use client"
import React, { useEffect } from "react";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
import Navbar from "@/components/generalComponents/Navbar";
import Footer from "@/components/generalComponents/Footer";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const scriptContent = `
      !function(w, d, s, ...args){
        var div = d.createElement('div');
        div.id = 'aichatbot';
        d.body.appendChild(div);
        w.chatbotConfig = args;
        var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s);
        j.defer = true;
        j.type = 'module';
        j.src = 'https://aichatbot.sendbird.com/index.js';
        f.parentNode.insertBefore(j, f);
      }(window, document, 'script', 'F37BA90F-7468-48AB-AE0D-E048E0EDA5E1', 'onboarding_bot', {
        apiHost: 'https://api-cf-ap-8.sendbird.com',
      });
    `;

        const scriptElement = document.createElement("script");
        scriptElement.textContent = scriptContent;
        document.body.appendChild(scriptElement);

        return () => {
            document.body.removeChild(scriptElement);
        };
    }, []);

    return (
        <ClerkProvider>
            <main className="bg-white">
                <Navbar />
                {children}
                <Footer />
            </main>
        </ClerkProvider>
    );
}