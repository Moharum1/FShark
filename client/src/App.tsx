const RevenueStream = () => {
    return <div className="bg-white m-2 border rounded-xl border-neutral/10">
        <p className="text-neutral p-4">REVENUE STREAMS</p>
    </div>
}

const RecentActivities = () => {
    return <div className="bg-white m-2 border rounded-xl border-neutral/10">
        <p className="text-neutral p-4">RECENT ACTIVITIES</p>
    </div>
}

const AddTransaction = () => {
    return <div className="bg-white m-2 border rounded-xl border-neutral/10">
        <p className="text-neutral p-4">ADD TRANSACTION</p>

        <form className="flex flex-col gap-4 m-4">
            <div className="flex flex-col gap-1">
                <label className="text-sm text-neutral">QUANTUM (AMOUNT)</label>
                <input type="number" className="border-b p-2" />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm text-neutral">TIMELINE (DATE)</label>
                <input type="date" className="border-b p-2" />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm text-neutral">CLASSIFICATION</label>
                <input className="border-b p-2" />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm text-neutral">DESCRIPTION (NOTE)</label>
                <input className="border-b p-2" />
            </div>
            <button className="bg-primary text-secondary font-medium rounded-md p-2 tracking-wide" type="submit">COMMIT TRANSACTION</button>
        </form>
    </div>
}

const App = () => {
    return (
        <div>
            <div>
                <p className="m-2 tracking-widest">ARCHITECTURE</p>
                <h1 className="font-headline font-bold text-4xl m-2" >Income Architecture</h1>
                <p className="text-neutral text-s m-2">
                    Define and monitor the structural flow of your capital. Precise categorization is
                    the cornerstone of architectural wealth management
                </p>
            </div>

            <RevenueStream />
            <RecentActivities />
            <AddTransaction />
        </div>
    );
};



export default App;