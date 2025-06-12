interface SeatProps {
    seat: number[];
}

export default function Seat({ seat }: SeatProps) {
    return (
        <div className="text-sm text-gray-500 flex items-center gap-1">
            <div className="mr-2">รอบที่เปิด</div>
            {seat.map((round, idx) =>
                round === -1 ? (
                    <div
                        key={idx}
                        className="w-5 h-5 rounded-full bg-gray-300 text-white flex justify-center items-center"
                    >
                        {idx + 1}
                    </div>
                ) : (
                    <div
                        key={idx}
                        className="w-5 h-5 rounded-full bg-[#67C979] text-white flex justify-center items-center"
                    >
                        {idx + 1}
                    </div>
                )
            )}
        </div>
    );
}

