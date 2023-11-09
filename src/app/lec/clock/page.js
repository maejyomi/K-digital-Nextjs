import ClockTime from "@/app/components/01/ClockTime";

export default function ClockPage() {
    console.log("ClockPage");
    return (
        <div className="flex flex-col justify-center align-middle p-5">
            <h1>Clock</h1>
            <ClockTime />
        </div>
    );
}

