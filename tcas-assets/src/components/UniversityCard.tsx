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
                <div className="heart-icon">heart</div>
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
            {/* 3 */}
            <div></div>
            {/* 4 - Your score */}
            <div className="font-medium">
                <p>คะแนนของคุณคือ</p>
                {data.score?.id ? data.score.id : "-"}
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

