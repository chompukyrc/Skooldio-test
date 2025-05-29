import "./UniversityCard.css";
import type { IUniversityData } from "../interfaces";

export default function UniversityCard(data: IUniversityData) {
    return (
        <div className="card">
            {/* 1 - Faculty */}
            <div className="flex">
                <img src={data.logo} alt="Tcas logo" className="tcas-logo" />
                <div>
                    <div>
                        <span className="faculty-name">
                            {data.faculty.name}
                        </span>
                        <br />
                        <span className="name">{data.name}</span>
                    </div>
                    <p className="font-medium">
                        {data.faculty.university.name}
                    </p>
                </div>
                <div className="heart-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="red"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </div>
            </div>

            {/* Divider */}
            <hr className="solid"></hr>

            {/* 2 - Seat */}
            <div className="font-medium seat">
                <div className="seat-open">รอบที่เปิด</div>
                {data.roundSeats.map((round, idx) =>
                    round === -1 ? (
                        <div key={idx} className="no-seat">
                            {idx}
                        </div>
                    ) : (
                        <div key={idx} className="have-seat">
                            {idx}
                        </div>
                    )
                )}
            </div>

            {/* 3 - Admission*/}
            <div className="flex between font-medium admission">
                <div className="admission-name">รอบที่ 4 Admission</div>
                <button className="edit-score-button">แก้ไขคะแนน</button>
            </div>

            {/* 4 - Your score */}
            <div className="justify-end">
                <div className="font-medium">คะแนนของคุณคือ</div>
                <div>{data.score?.id ? data.score.id : "-"}</div>
            </div>

            {/* 5 - Score */}
            <div className="flex font-medium between">
                <div className="score">
                    <span>{data.score?.min ? data.score.min : "-"}</span> <br />
                    คะแนนต่ำสุด 60
                </div>

                <div className="hor-divider"></div>

                <div className="score">
                    <span>{data.score?.avg ? data.score.avg : "-"}</span> <br />
                    คะแนนต่ำสุด 60
                </div>

                <div className="hor-divider"></div>

                <div className="score">
                    <span>{data.score?.max ? data.score.max : "-"}</span> <br />
                    คะแนนต่ำสุด 60
                </div>
            </div>
        </div>
    );
}

