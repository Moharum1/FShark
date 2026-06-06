import Button from "./widgets/button"

const Sidebar = () => {
    return (
        <div className="w-full md:w-64 bg-primary text-secondary p-6 flex flex-col justify-between shrink-0 border-r border-neutral/10">
            <div className="flex flex-col gap-8">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="font-headline font-bold text-2xl tracking-wider">FShark</span>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/10 text-white font-medium transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary/80 hover:text-white hover:bg-white/5 font-medium transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span>Analytics</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary/80 hover:text-white hover:bg-white/5 font-medium transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Transactions</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary/80 hover:text-white hover:bg-white/5 font-medium transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Settings</span>
                    </a>
                </nav>
            </div>

            {/* User Info footer */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold">
                    JD
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-sm">John Doe</span>
                    <span className="text-xs text-secondary/60">john@fshark.com</span>
                </div>
            </div>
        </div>
    )
}

const RevenueStream = () => {
    return (
        <div className="bg-white border rounded-xl border-neutral/10">
            <p className="text-neutral p-4">REVENUE STREAMS</p>
        </div>
    )
}

const RecentActivities = () => {
    return (
        <div className="bg-white border rounded-xl border-neutral/10">
            <p className="text-neutral p-4 pb-2">RECENT ACTIVITIES</p>

            <div className="px-4 pb-4">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-black/20">
                            <td className="font-bold pb-2 text-sm">ENTITY</td>
                            <td className="font-bold pb-2 text-sm">CATEGORY</td>
                            <td className="font-bold pb-2 text-sm">DATE</td>
                            <td className="font-bold pb-2 text-sm">AMOUNT</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

const AddTransaction = () => {
    return (
        <div className="bg-white border rounded-xl border-neutral/10">
            <p className="text-neutral p-4">ADD TRANSACTION</p>

            <div className="flex bg-secondary rounded-lg m-4 p-1 h-12 items-center gap-1">
                <Button text="INCOME" type="secondary" />
                <Button text="EXPENSES" type="secondary" />
            </div>

            <form className="flex flex-col gap-4 m-4">
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-neutral font-medium">QUANTUM (AMOUNT)</label>
                    <input type="number" className="border-b p-2 outline-none focus:border-primary transition-colors" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-neutral font-medium">TIMELINE (DATE)</label>
                    <input type="date" className="border-b p-2 outline-none focus:border-primary transition-colors" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-neutral font-medium">CLASSIFICATION</label>
                    <input className="border-b p-2 outline-none focus:border-primary transition-colors" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-neutral font-medium">DESCRIPTION (NOTE)</label>
                    <input className="border-b p-2 outline-none focus:border-primary transition-colors" />
                </div>

                <Button text="Commit Transaction" />
            </form>
        </div>
    )
}

const App = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-secondary text-primary font-body">
            {/* Left Column (Sidebar) */}
            <Sidebar />

            {/* Middle Column (Main Content) */}
            <main className="flex-1 p-6 md:p-8 flex flex-col gap-6 overflow-y-auto">
                <div>
                    <p className="tracking-widest text-xs font-semibold text-neutral">ARCHITECTURE</p>
                    <h1 className="font-headline font-bold text-4xl mt-1 mb-2 text-primary">Income Architecture</h1>
                    <p className="text-neutral text-sm max-w-2xl leading-relaxed">
                        Define and monitor the structural flow of your capital. Precise categorization is
                        the cornerstone of architectural wealth management.
                    </p>
                </div>

                <RevenueStream />
                <RecentActivities />
            </main>

            {/* Right Column (Action Panel) */}
            <aside className="w-full md:w-96 p-6 flex flex-col gap-6 shrink-0">
                <AddTransaction />
            </aside>
        </div>
    )
}

export default App