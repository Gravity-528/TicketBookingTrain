from sqlalchemy.orm import Session
from model import Booking, Seat

class SeatService:
    def fetch_seat(self, db: Session, time, train_id):

        seat_booked = (
            db.query(Booking.seatId)
            .join(Seat, Booking.seatId == Seat.id)
            .filter(
                Booking.startTime <= time,
                Booking.endTime >= time,
                Booking.trainId == train_id
            )
            .all()
        )

        booked_seat_ids = {seat.seatId for seat in seat_booked}
        total_seats = db.query(Seat).all()
        final_seat = []
        
        for seat in total_seats:
            if seat.id in booked_seat_ids:
                final_seat.append({
                    "seatId": seat.id,
                    "available": False
                })
            else:
                final_seat.append({
                    "seatId": seat.id,
                    "available": True
                })

        return final_seat


