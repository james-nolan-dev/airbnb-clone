package me.nolanjames.airbnbcloneapi.booking.repository;

import me.nolanjames.airbnbcloneapi.booking.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
